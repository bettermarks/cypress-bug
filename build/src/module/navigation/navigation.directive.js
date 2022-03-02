(function(angular) {
    'use strict';
    angular
        .module('bettermarks.navigation')

        .directive('bmUserNavi', function(){
            var directive = {
                controller: "UserNavigationCtrl",
                controllerAs: "vm",
                templateUrl: "navigation/templates/userNavi.tpl.html",
                scope: true,
                replace: true
            };
            return directive;
        })

        .directive('bmMainNaviItem', function(){
            var directive = {
                controller: "NavigationItemCtrl",
                controllerAs: "vm",
                templateUrl: "navigation/templates/mainNaviItem.tpl.html",
                scope: true
            };
            return directive;
        })

        .directive('bmSubNavi', function(){
            var directive = {
                controller: "SubNavigationCtrl",
                controllerAs: 'vm',
                scope: true,
                templateUrl: "navigation/templates/subNavi.tpl.html",
                replace: true
            };

            return directive;
        })

        .directive('bmSubnaviItem', function(){
            var directive = {
                controller: "NavigationItemCtrl",
                controllerAs: "vm",
                templateUrl: "navigation/templates/subNaviItem.tpl.html",
                scope: true,
                replace: true
            };

            return directive;
        })

        .directive('bmHeader', function(){
            var directive = {
                controller: "MainNavigationCtrl",
                controllerAs: "vm",
                bindToController: true,
                templateUrl: "navigation/templates/header.tpl.html"
            };

            return directive;
        })
        ;
})
(angular);
