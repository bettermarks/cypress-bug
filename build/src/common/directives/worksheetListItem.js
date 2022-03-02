(function(angular) {
    'use strict';
    angular
        .module('bettermarks')

        .directive('worksheetListItem', function() {
            return {
                restrict: 'EA',
                replace: true,
                scope: false,
                templateUrl: 'directives/partials/worksheetListItem.tpl.html',
            };
        })

        ;
})(angular);
