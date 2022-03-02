/**
 * @ngdoc overview
 * @name
 */
(function(angular) {
    'use strict';
    angular
        .module('bettermarks.systems')
        .directive('systemJs', ["$window", "UserService", function($window, UserService) {
            return {
                restrict: 'E',
                replace: true,
                template: '',
                link: function(scope, element, attrs) {
                    if(UserService.getSystem() === attrs.systemJsSystem) {
                        var version = parseInt($window.vrs, 10);
                        //element.attr('src', attrs.systemJsFile + '?v=' + version);
                        (function(i, s, o, g, r, a, m) {
                            a = s.createElement(o);
                            m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.type = 'text/javascript';
                            a.src = g;
                            m.parentNode.insertBefore(a, m);
                        })(window, document, 'script', attrs.systemJsFile + '?v=' + version, 'ga');
                    }
                }
            };
        }])

        .directive('systemCss', ["SystemsConfig", function(SystemsConfig) {
            return {
                restrict: 'A',
                replace: true,
                scope: {},
                template: '<link rel="stylesheet" type="text/css" ng-href="{{ cssSrc }}" />',
                link: function(scope, element, attrs) {
                    var systemCss = SystemsConfig.getCustomCss();
                    if((!systemCss && attrs.file.indexOf('-systems') === -1) ||
                        (systemCss && attrs.file.indexOf(systemCss) !== -1)) {
                        scope.cssSrc = attrs.file;
                    }
                }
            };
        }]);
})(angular);
/**/