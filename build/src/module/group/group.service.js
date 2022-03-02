(function(angular) {
    'use strict';
    angular
        /**
         * @ngdoc overview
         * @name bettermarks.group
         * @description
         * The group module contains everything about school-classes and their members.
         * In the config the module's state is added to the stateProvider.
         */
        .module('bettermarks.group.service', ['bettermarks.api', 'pascalprecht.translate'])

        .service("GroupManagerService", ["$q", "$rootScope", "bmApi", "UserService", "_", "$timeout", function($q, $rootScope, bmApi, UserService, _, $timeout) {
            var self = this;
            var allGroupsPromise = false;
            /**
             * invalidate cache of needed requests here
             * in order to keep UCM and ng-center in sync
             */
            $rootScope.$on('UCM:update', function (_, groupId) {
                bmApi.invalidate('dashboardCompletedExercisesV11', {groupId: groupId});
                bmApi.invalidate('group', {groupId: groupId});
            });

            this.getDefaultGroup = function(){
                var d = $q.defer();
                var firstGroup;

                self.getAll().then(function(groups){
                    if (groups && groups.length > 0) {
                        firstGroup = groups[0];
                    }
                    d.resolve(firstGroup);
                });

                return d.promise;
            };

            this.getCurrentGroup = function () {
                var d = $q.defer();
                var selectedGroupId = $rootScope.navigationStates.currentGroupId;

                function resolveDefault() {
                    self.getDefaultGroup().then(function (group) {
                        d.resolve(group);
                    });
                }

                // is there a global selected group
                if (!selectedGroupId) {
                    resolveDefault();
                } else {
                    self.get(selectedGroupId).then(function (selectedGroup) {
                        if (!selectedGroup) {
                            resolveDefault();
                        } else {
                            d.resolve(selectedGroup);
                        }
                    });
                }
                return d.promise;
            };

            this.setCurrentGroupById = function(groupId) {
                $rootScope.navigationStates.currentGroupId = groupId;
            };

            this.setCurrentGroup = function(group){
                var groupId;
                if(group){
                    groupId = group.id;
                }
                self.setCurrentGroupById(groupId);
            };

            this.getCurrentGroupMembers = function () {
                var d = $q.defer();
                self.getCurrentGroup().then(function(group) {
                    if (group) {
                        self.getMembers(group.id).then(function(members){
                            d.resolve(members);
                        });
                    } else {
                        d.resolve([]);
                    }
                });
                return d.promise;
            };

            this.getAll = function() {
                if (!allGroupsPromise) {
                    allGroupsPromise = bmApi.call(
                      'groups',
                      {},
                      {
                          // Disabling cache for teachers,
                          // otherwise problems when trying to allocate book to newly created class:
                          // Class will not show up in the list of classes until reload of library (BM-51848)
                          cache: !UserService.isTeacher(),
                          success: 'groups'
                      });

                    allGroupsPromise.finally(function() {
                        $timeout(function() {
                            allGroupsPromise = false;
                        }, 2000);
                    });
                }

                return allGroupsPromise;
            };

            this.getAllWithStudents = function(){
                return self.getAll().then(function(groups) {
                    var result = [];
                    angular.forEach(groups, function (group) {
                        if (group.student_count > 0) {
                            var newGroup = {
                                label: group.name,
                                value: group.id,
                                student_count: group.student_count
                            };
                            result.push(newGroup);
                        }
                    });
                    return result;
                });
            };

            this.getMembers = function(groupId){
                var d = $q.defer();
                bmApi.call(
                    'group',
                    {groupId: groupId},
                    {cache: true, success: 'students'}
                ).then(function(data){
                    if(!data) {
                        d.resolve([]);
                    } else {
                        angular.forEach(data, function(value) {
                            UserService.assignDisplayName({
                                name: value.username,
                                firstname: value.firstname,
                                lastname: value.lastname,
                            }, value, value.username);
                        });
                        d.resolve(data);
                    }
                });
                return d.promise;
            };

            this.getMember = function(groupId, memberId){
                return self.getMembers(groupId).then(function(members){
                    return _.find(members, function(member){return member._id == memberId;});
                });
            };

            this.assignMemberDisplayName = function(groupId, memberId, target){
                return self.getMember(groupId, memberId).then(function(member){
                    if(member){
                        UserService.assignDisplayName({
                            name: member.username,
                            firstname: member.firstname,
                            lastname: member.lastname,
                        }, target, member.username);
                    }
                });
            };

            this.get = function(groupId){
                var d = $q.defer();
                self.getAll().then(function(groups){
                    var group = _.find(groups, function(g) {return g.id == groupId;});
                    d.resolve(group);
                });
                return d.promise;
            };

            this.connect = function(groupIds) {
                var httpParams = {method: 'POST', data: {group_ids: groupIds}, success: 'groupIds'};
                var promise = bmApi.call('groups', {}, httpParams);

                return promise.then(function(groupIds) {
                    onGroupsChanged();
                    return groupIds;
                });
            };

            this.disconnect = function(groupId, userIds) {
                var urlReplacments = {groupId: groupId};
                var httpParams = {method: 'POST', data: {user_ids: userIds}, success: 'userIds'};
                var promise = bmApi.call('groupDisconnect', urlReplacments, httpParams);

                return promise.then(function(removedMembers){
                    onGroupsChanged();
                    return removedMembers;
                });
            };

            this.refresh = function() {
                return bmApi.call('refreshGroups').then(function() {
                    onGroupsChanged();
                    return self.getAll();
                });
            };


            function onGroupsChanged(){
                bmApi.invalidateAll();
                $rootScope.$broadcast('groupsChanged');
            }
        }])

        .service("SchoolGroupService", ["bmApi", "NotificationService", "$translate", function(bmApi, NotificationService, $translate) {

            function handleRejection(rejection){
                if (rejection.error == "GroupNameAlreadyExistsError"){
                    var groupName = rejection.groupName;

                    var notification = $translate.instant(
                        'jsapp.teacher.groupManager.notification.groupAlreadyExists',
                        {groupName: groupName}
                    );
                    NotificationService.showWarnInfo(notification);
                }
            }

            this.getAll = function() {

                return bmApi.call(
                    'schoolGroups',
                    {},
                    {cache: true, success: 'groups'}
                );
            };

            this.getUserSchools = function() {
                return bmApi.call(
                    'userSchools',
                    {},
                    {cache: true, success: 'schools'}
                );
            };

            this.create = function(groupName, schoolId) {
                var httpParams = {method: 'POST', data: {group_name: groupName, school_id: schoolId}};

                var create = bmApi.call('schoolGroups', {}, httpParams);
                return create.then(function(group){
                    //when create a new group we also connecting the user with this group
                    //so we need fresh group data
                    bmApi.invalidate('groups');

                    return group;
                }, function(rejection){
                    handleRejection(rejection);
                });
            };

            this.update = function(groupId, groupName) {
                var httpParams = {method: 'PUT', data: {group_name: groupName}, success: 'group'};
                var update = bmApi.call('schoolGroup', {groupId: groupId}, httpParams);

                return update.then(function(group){
                    bmApi.invalidate('groups');
                    bmApi.invalidate('schoolGroups');
                    return group;
                }, function(rejection){
                    handleRejection(rejection);
                });
            };
        }])
    ;
})
(angular);
