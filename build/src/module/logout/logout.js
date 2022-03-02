(function (angular) {
    'use strict';
    angular
        .module('bettermarks.logout', ['ui.router', 'bettermarks.mobile'])
        .constant("LOGOUT_STATE", "logout")
        .config(["$stateProvider", "LOGOUT_STATE", function($stateProvider, LOGOUT_STATE) {


            $stateProvider.state(LOGOUT_STATE, {
                url: "/logout",
                resolve: {
                    logout: ["UserService", function(UserService) {
                        return UserService.logout();
                    }]
                },
                views: {
                    "root": {
                        "templateUrl": 'logout/templates/logout.tpl.html'
                    }
                }
            });
        }])
    ;
})
(angular);
