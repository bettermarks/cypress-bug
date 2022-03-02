(function(angular) {
    'use strict';
    angular
        .module('bettermarks')
        /**
         * @ngdoc service
         * @name bettermarks.service:AccessService
         * @requires $rootScope
         * @requires bettermarks.UserService
         * @description
         * <b>AccessService</b> is responsible for two things:
         * <ol>
         *     <li>check if a route is accessible for the current user</li>
         *     <li>manage feature toggles
         *</ol>
         * maybe rename to AuthService!
         */
        .factory('AccessService', ["UserService", function(UserService) {
            /*var features = {};
             var
             this.setEnabledFeatures = function(features)*/

            var features = {};


            /* at the moment, we don't use these features
             $rootScope.$on('$stateChangeStart',
             function(event, toState, toParams, fromState, fromParams) {
             var user = UserService.getUser();
             var allowAccess = false;
             var redirect = false;
             if(!toState || !toState.access) {
             return;
             }

             if(toState.access.roles) {
             angular.forEach(toState.access.roles, function(role) {
             if(user.roles.indexOf('r:' + role) !== -1) {
             allowAccess = true;
             }
             });

             if(allowAccess === false) {
             redirect = 'login';
             }
             }

             if(toState.access.features) {
             angular.forEach(toState.access.features, function(feature) {
             if(!features[feature]) {
             allowAccess = false;
             return;
             }
             });
             }

             if(!allowAccess) {
             if(redirect) {
             alert('redirect to ' + redirect);
             } else {
             alert('access denied!');
             }

             event.preventDefault();
             }

             //            event.preventDefault();
             // transitionTo() promise will be rejected with
             // a 'transition prevented' error
             }
             );*/

            return {
                setEnabledFeatures: function(f) {
                    features = f;
                },
                /**
                 * get enabled features to use in $scope. in tpl you can write something like
                 * <p ng-show="toggles.reporting"></p>
                 * @param role
                 * @returns {*}
                 */
                getEnabledFeatures: function() {
                    return features;
                },

                checkEnabledFeature: function(name) {
                    return typeof(features) !== 'undefined' && typeof(features[name]) !== 'undefined' ? features[name] :
                        false;
                },

                checkABGroup: function(name) {
                    var inGroup = false;
                    switch(name) {
                        case 'downloadButton':
                            inGroup = parseInt(UserService.getUserId().substr(-1), 10) % 2 === 0;
                            break;
                    }

                    return inGroup;
                }
                /**
                 * ask for feature in config-contexts and so on
                 * @param role
                 * @param feature
                 * @returns boolean
                 *//*
                 can: function(role, feature) {
                 return features[role] && features[role][feature];
                 }*/
            };

        }])
    ;
})(angular);

