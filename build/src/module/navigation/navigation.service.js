(function(angular) {
    'use strict';
    angular
        .module('bettermarks.navigation')

        .provider('Navigation', function() {
            var points = [];

            this.add = addPoint;

            this.$get = function(){
                return {
                    registeredNaviPoints: points,
                    getNavigationPoints: function (pointsToPrepend) {
                        return pointsToPrepend.concat(points);
                    }
                };
            };

            function addPoint(naviPoint) {
                points.push(naviPoint);
            }
        })

        .service("MenuService", ["UserService", "AccessService", "_", "$q", "Navigation", "$state", "UserData", "GroupManagerService", "$location", function(UserService, AccessService, _, $q, Navigation, $state, UserData,
                                         GroupManagerService, $location){

            var toggles = UserData.features;
            var subNavi = {

            };
            var currentMainNaviPoint;

            var self = this;

            this._mainNaviPoints = [];

            this.init = function(){
                self._mainNaviPoints = [];
                subNavi.currentItems = [];
                subNavi.show = false;
                subNavi.main = {};

                showEventItems = [];
                urlEventItems = [];
                hintEventItems = [];
                featureItems = [];
                initalResolves = [];
                currentMainNaviPoint = undefined;
            };

            var showEventItems = [];
            var urlEventItems = [];
            var hintEventItems = [];
            var featureItems = [];

            var initalResolves = [];

            var isReady = function(){
                return $q.all(initalResolves);
            };

            this.addInitialResolve = function(promise){
                initalResolves.push(promise);
            };

            this.bind = function($scope){

                $scope.$on("hasGroups", function(event, hasGroups){
                    angular.forEach(showEventItems, function(item){
                        if(item.showEvent == event.name){
                            item.show = hasGroups;
                            self.validateShow(item);
                        }
                    });
                });

                var refreshHint = function(event, hint){
                    angular.forEach(hintEventItems, function(item){
                        if(item.hintEvent == event.name){
                            item.hint = hint;
                        }
                    });
                };

                $scope.$on('navigateToFirstTab', function () {
                    isReady().then(function(){
                        var item = self.getFirstTabForTeachers();
                        $location.path(item.href).replace();
                    });
                });

                $scope.$on("undoneToDosChanged", function(event, toDoCount){
                    refreshHint(event, toDoCount);
                });

                $scope.$on("knowledgeGapsCountChanged", function(event, gapCount){
                    refreshHint(event, gapCount);
                });

                $scope.$on("booksUrlChanged", function(event, bookUrl){
                    angular.forEach(urlEventItems, function(item){
                        if(item.urlEvent == event.name){
                            item.href = bookUrl;
                        }
                    });
                });

                $scope.$watch('toggles', function(newVal){
                    toggles = newVal;

                    angular.forEach(featureItems, function(item) {
                        self.validateShow(item);
                    });
                }, true);

            };

            this.setSubMenu = function(mainItem, subItems) {
                var mainPointId = mainItem.id;
                if(mainPointId){
                    subNavi.main[mainPointId] = subItems;

                    angular.forEach(subItems, function(subItem) {
                        subItem.parent = mainPointId;
                        self._addItem(subItem);
                    });
                }
            };

            this.getSubNavi = function() {
                return subNavi;
            };

            function getShowSubNavi(items) {
                var result = false;

                if(items){
                    var activeSubItem = _.find(items, function (subMenuItem) {
                        return subMenuItem.show;
                    });
                    result = Boolean(activeSubItem);
                }
                return result;
            }

            this.validateActiveMainNaviPoint = function(){
                if(self._mainNaviPoints) {
                    var active;
                    angular.forEach(self._mainNaviPoints, function(naviPoint) {
                        active = false;
                        for(var i = 0; i < naviPoint.activeStates.length; i++) {
                            if($state.includes(naviPoint.activeStates[i])) {
                                active = true;
                                break;
                            }
                        }

                        if(active){
                            self.activate(naviPoint);
                        }else{
                            self.deactivate(naviPoint);
                        }
                    });
                }
            };

            this.getMenuItems = function(){
                var d = $q.defer();

                isReady().then(function() {
                    d.resolve(self._mainNaviPoints);
                });

                return d.promise;
            };

            this.addMainItem = function(item){
                self._addItem(item);
                self._mainNaviPoints.push(item);
            };

            this._addItem = function(item){

                if(item.showEvent){
                    showEventItems.push(item);
                    item.show = false;
                }else{
                    item.show = true;
                }

                if(item.urlEvent){
                    urlEventItems.push(item);
                }

                if(item.hintEvent){
                    hintEventItems.push(item);
                }

                if(item.feature){
                    featureItems.push(item);
                }

                self.validateShow(item);
            };

            this.activate = function(item){
                item.isActive = true;
                var mainPointId = item.id;
                currentMainNaviPoint = item;
                var subMenuItems = subNavi.main[mainPointId];

                if(!subMenuItems){
                    subNavi.show = false;
                    subNavi.currentItems = [];
                }else {
                    subNavi.currentItems = subMenuItems;
                    subNavi.show = getShowSubNavi(subMenuItems);
                }
            };

            this.deactivate = function(item){
                item.isActive = false;
            };

            this.appendItemsByProvider = function(){
                var r = Navigation.getNavigationPoints([]);

                angular.forEach(r, function(item){
                    self.addMainItem(item);
                });
            };

            this.getItemById = function(id){
                return _.find(self._mainNaviPoints, function(item){
                    return item.id == id;
                });
            };

            this.getInitalMenuForStudents = function() {
                var d = $q.defer();

                isReady().then(function(){
                    var forceSchoolContext = AccessService.checkEnabledFeature("forceSchoolContext");
                    var groupManager = AccessService.checkEnabledFeature("generalGroupManager");
                    var switchEntryMenu = AccessService.checkEnabledFeature("switchEntryMenu");
                    var result;

                    if(forceSchoolContext){
                        var knowledgeGap = self.getItemById('knowledgeGaps');
                        var openTodos = self.getItemById('todos');
                        if(switchEntryMenu && openTodos.hint === 0 && knowledgeGap.hint > 0) {
                            result = knowledgeGap;
                        } else {
                            result = openTodos;
                        }
                    }else {
                        var toDos = self.getItemById('todos');

                        if(!toDos || !toDos.show){
                            if(groupManager){
                                result = self.getItemById('groupManager');
                            }else{
                                var bookItem = self.getItemById('books');

                                if(!bookItem || !bookItem.show){
                                    result = self.getItemById('knowledgeGaps');
                                }else{
                                    result = bookItem;
                                }
                            }
                        }else {
                            result = toDos;
                        }
                    }
                    d.resolve(result);
                });

                return d.promise;
            };

            this.getFirstTabForTeachers = function() {
                var todos = AccessService.checkEnabledFeature("devTodoNavi") == false;

                if (todos) {
                    return self.getItemById('todos');
                } else {
                    return self.getItemById('books');
                }
            };

            this.getInitialMenuForTeachers = function() {
                var d = $q.defer();

                isReady().then(function(){
                    var groupManager = AccessService.checkEnabledFeature("generalGroupManager") ||
                      AccessService.checkEnabledFeature("newUcm");

                    if(groupManager){
                        GroupManagerService.getAll().then(function(groups){
                            if(groups.length <= 0){
                                d.resolve(self.getItemById('groupManager'));
                            }else{
                                d.resolve(self.getFirstTabForTeachers());
                            }
                        });
                    }else{
                        d.resolve(self.getFirstTabForTeachers());
                    }
                });

                return d.promise;
            };

            this.sort = function(){
                var order = UserService.getMainNaviOrder();
                self._mainNaviPoints = _.sortBy(self._mainNaviPoints, function(item){
                    var itemId = item.id;
                    var value = order.indexOf(itemId);

                    if(value == -1){
                        value = Number.MAX_VALUE;
                    }

                    return value;
                });
            };


            this.validateMainItem = function(id) {
                var subItems = subNavi.main[id];

                var result = false;

                if(subItems){
                    var activeSubItem = _.find(subItems, function (subMenuItem) {
                        return subMenuItem.show;
                    });
                    result = Boolean(activeSubItem);
                }

                var mainItem = self.getItemById(id);
                mainItem.show = result;

                if(mainItem === currentMainNaviPoint) {
                    if(subItems){
                        subNavi.show = getShowSubNavi(subItems);
                    }else{
                        subNavi.show = false;
                    }
                }
            };

            this.validateShow = function(item) {
                var isFeatureEnabled = item.feature ? toggles && !!toggles[item.feature] : true;

                item.show = isFeatureEnabled && item.show;
                var parentId = item.parent;

                if(parentId){
                    self.validateMainItem(parentId);
                }
            };
        }])
        ;
})
(angular);
