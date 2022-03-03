(function(angular) {
    'use strict';
    angular.module('bettermarks', [
        'templates-center_app',
        'templates-common',
        'ui.router',
        'ngTouch',
        'ngAnimate',
        'pascalprecht.translate',
        'ngSanitize',
        'lrInfiniteScroll',
        'bettermarks.modalBubble',
        'bettermarks.worksheets',
        'bettermarks.systems',
        'bettermarks.auth',
        'bettermarks.navigation',
        'bettermarks.resizer'
    ])
    .constant('_', window._)
    .value('backendUrl', '')

    .run([
        'AccessService', 'UserService', '$rootScope',
        function(AccessService, UserService, $rootScope) {
            AccessService.setEnabledFeatures(UserService.getUser().features);
        }
    ])
    ;
})(angular);


