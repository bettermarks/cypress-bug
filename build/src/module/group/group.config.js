(function (angular) {
    'use strict';
    angular
        .module('bettermarks.group', [
            'templates-module',
            'bettermarks.list',
            'bettermarks',
            'bettermarks.navigation',
            'bettermarks.userData'
        ])

        .config(["$stateProvider", "$injector", "NavigationProvider", "UserData", function ($stateProvider, $injector, NavigationProvider, UserData) {
            var feat = UserData.features || {};

            $stateProvider.state('groups', {
                url: '/groups',
                views: {
                    "main": {
                        controller: 'MainGroupCtrl'
                    }
                }
            });
            var isTeacher = UserData.roles && UserData.roles.indexOf('r:teacher') >= 0;
            var showGroupManager = false;
            if (isTeacher) {
              if (!feat.newUcm) {
                showGroupManager = feat.generalGroupManager;
              }
            } else /* student */ {
              showGroupManager = feat.generalGroupManager;
            }

            if (showGroupManager) {
                NavigationProvider.add(
                    {
                        href: '/groups',
                        title: 'jsapp.navigation.groups',
                        icon: 'icon fa-user',
                        activeStates: ['groups.**'],
                        id: 'groupManager',
                    }
                );
            }
        }])
    ;
})
(angular);
