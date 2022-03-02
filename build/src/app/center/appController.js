(function(angular) {
    "use strict";
    angular.module('bettermarks')
        .controller('AppCtrl',
        ["$scope", "$rootScope", "AccessService", "MenuService", function AppCtrl($scope, $rootScope, AccessService,
                         MenuService) {

            $rootScope.subNaviData = MenuService.getSubNavi();

            $rootScope.navigationStorage = {
                groupTodosLength: 20,
                studentTodosLength: 20,
                chaptersLength: 20,
                groupActivitiesLength: 20,
                studentActivitiesLength: 20,
                groupKnowledgeGapsLength: 20,
                studentKnowledgeGapsLength: 20
            };

            $rootScope.toggles = AccessService.getEnabledFeatures();

            $rootScope.systemCss = {};

            $scope.showMenu = true;
        }])

        .controller('FooterCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
            $scope.footerLinks = [];

            $rootScope.systemCss['no-footer'] = !$scope.footerLinks.length;

            $scope.isLargeScreen = window.innerWidth > 460;
            window.addEventListener('resize', function() {
                $scope.$apply(function() {
                    $scope.isLargeScreen = window.innerWidth > 460;
                });
            });
        }]);

})(angular);
