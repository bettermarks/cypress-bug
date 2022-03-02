(function (angular) {
    'use strict';
    angular
        .module('bettermarks.search')

        .directive("bmSearchBar", function(){
            return {
                restrict: "E",
                templateUrl: "search/templates/bar.tpl.html",
                scope:{
                    onSearchChanged: "&",
                    selectFilterText: "@",
                    filters: "=",
                    placeholder: "@"
                },
                replace: true,
                link : function($scope){
                    var onSearchChanged = $scope.onSearchChanged;
                    if(onSearchChanged){
                        $scope.$watchGroup(["searchText", "selectedFilter"], function(newValues){
                            var text = newValues[0];
                            var filter = newValues[1];
                            onSearchChanged({text:text, filter: filter});
                        });
                    }

                    $scope.resetFilter = function() {
                        $scope.selectedFilter = undefined;
                    };
                }
            };
        });
})
(angular);
