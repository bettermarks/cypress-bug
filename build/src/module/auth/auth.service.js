(function (angular) {
    'use strict';

    angular
        .module('bettermarks.auth')
        .service('AuthorizationService', ["UserService", "AVAILABLE_USER_ROLE_NAMES", "LightboxService", "bmApi", "$state", "$rootScope", function (
            UserService, // for getting the initial role
            AVAILABLE_USER_ROLE_NAMES, // for getting role constant
            LightboxService, // to popup a lightbox
            bmApi, // for calling the backed (authorize)
            $state, // we need to reload the state when we are done
            $rootScope // as the top level event bus
            ){

            var self = this;
            var AUTHORIZED_EVENT_KEY = "authorized";


            //has the user initially set the Authorized role?
            self.authorized = UserService.hasRole(AVAILABLE_USER_ROLE_NAMES.AUTHORIZED);

            self.isAuthorized = function () {
                return self.authorized;
            };

            self.startAuthorizationProcess = function(retry){

                var popupResponse = LightboxService.showAuthorization(retry);

                if(popupResponse) {
                    popupResponse.then(function(password){

                        var httpParams = {method: 'POST', data: {password: password}};
                        var promise = bmApi.call('authorize', {}, httpParams);

                        if (promise){
                            promise.then(function(authorized){

                                self.authorized = authorized;

                                if(authorized){
                                    $state.reload();
                                    $rootScope.$emit(AUTHORIZED_EVENT_KEY);
                                }else{
                                    self.startAuthorizationProcess(true);
                                }
                            });
                        }
                    });
                }
            };

            self.addListener = function(scope, callback){
                var unregisterMethod = $rootScope.$on(AUTHORIZED_EVENT_KEY, callback);
                scope.$on('$destroy', unregisterMethod);
            };
        }]);
})
(angular);
