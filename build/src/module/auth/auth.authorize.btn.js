(function (angular) {
    'use strict';

    angular
        .module('bettermarks.auth')
        .directive('bmAuthorizationButton', ["AuthorizationService", function (AuthorizationService){
            return {
                replace: true,
                templateUrl: "auth/templates/authorization.button.tpl.html",
                link: function (scope) {
                    scope.onClick = function(){
                        AuthorizationService.startAuthorizationProcess();
                    };
                }
            };
        }]);
})
(angular);
