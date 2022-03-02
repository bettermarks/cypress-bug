/**
 * @ngdoc overview
 * @name bettermarks
 * @description
 * The root 'bettermarks' module containing dependencies to most of the modules.
 * Makes enabled features globally available
 */

(function(angular) {
    'use strict';
    angular.module('bettermarks', [
    /** externals **/
        'templates-center_app',
        'templates-common',
        'ui.router',
        /*'ui.route', */ // comes from angular-ui-utils
        /*'ngResource',*/
        'ngTouch',
        'ngAnimate',
        'pascalprecht.translate',
        'ngSanitize',
        'lrInfiniteScroll',
        /* bm-common-Modules */
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


