(function(angular) {
    "use strict";
    angular
        /**
         * @ngdoc overview
         * @name bettermarks.staticContent
         * @description Contains all access to static content
         */
        .module('bettermarks.staticContent', ['bettermarks.api'])
        .service('ExercisePreviewService', ["bmApi", "UserService", "AccessService", function(bmApi, UserService, AccessService) {

        }]);

})(angular);
