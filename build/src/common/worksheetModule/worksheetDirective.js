(function(angular) {
    'use strict';
    angular
        .module('bettermarks')

        .directive('optionsBubble', function() {
            return {
                replace: true,
                scope: {
                    isVisible: '=visible',
                    availableOptions: '=',
                    optionsToAssign: '='
                },
                templateUrl: 'worksheetModule/partials/optionsBubble.tpl.html',
                controller: ["$scope", function($scope) {

                    $scope.$watch("availableOptions", function() {
                        $scope.optionsToAssign = {};
                        angular.forEach($scope.availableOptions, function(option) {
                            if((option.selected && option.addOnTrueToOptionsToAssign) ||
                                (!option.selected && !option.addOnTrueToOptionsToAssign)) {
                                $scope.optionsToAssign[option.key] = 1;
                            }
                        });
                    }, true);

                    $scope.optionsHints = [];

                    $scope.hide = function(e) {
                        $scope.isVisible = false;
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    };

                    $scope.toggleHint = function(hintPos) {
                        $scope.optionsHints[hintPos] = !$scope.optionsHints[hintPos];
                    };
                }]
            };
        });
})(angular);
