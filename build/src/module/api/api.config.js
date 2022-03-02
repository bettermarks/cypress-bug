(function(angular) {
    "use strict";
    /**
     * @ngdoc overview
     * @name bettermarks.api
     * @description Module containing the api wrapper
     */
    angular.module('bettermarks.api', [
        'ng',
        'bettermarks.storage',
        'bettermarks.lightbox',
        'bettermarks.mobile',
    ])
    ;
})(angular);
