(function (angular) {
    'use strict';
    angular
        .module('bettermarks.util.time', [])

        .factory('getCurrentDate', function(){
            return function(){
                return new Date();
            };
        })
    ;
})
(angular);
