(function (angular) {
    'use strict';

    angular
        .module('bettermarks.auth')

        .factory("authDirectiveTemplate", function(){

            return function(){
                return {
                    priority: 1000,
                    multiElement: true
                };
            };
        })

        .directive("bmFeature", ["AccessService", "authDirectiveTemplate", function (AccessService, authDirectiveTemplate) {
            var d = authDirectiveTemplate();

            function remove(element, $attributes) {
                var featureName = $attributes.bmFeature;
                var inverted = false;

                if (featureName) {
                    if (typeof featureName === "string" && featureName.charAt(0) === '!') {
                        inverted = true;
                        featureName = featureName.substring(1);
                    }
                    var featureEnabled = AccessService.checkEnabledFeature(featureName);
                    if (featureEnabled === inverted) {
                        element.replaceWith("<!-- feature disabled -->");
                    }
                }
            }

            d.compile = function ($element, $attributes) {
                remove($element, $attributes);
            };

            return d;
        }])
    ;
})
(angular);
