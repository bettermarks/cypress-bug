(function(angular) {
    'use strict';
    angular
        .module('bettermarks.auth', [
            'templates-module',
            'bettermarks.api',
            'bettermarks',
            'bettermarks.user',
            'pascalprecht.translate'
        ])
        .service('AuthService', ["bmApi", function(bmApi) {
            this.getCoupleCode = function() {
                return bmApi.call('coupleCode', {}, {success:'couplecode'});
            };
        }])
        .controller('MainAuthCtrl', function () {
        })
        .controller('CoupleCodeCtrl', ["$translate", "AuthService", "UserService", function($translate, AuthService, UserService) {
            var vm = this;
            vm.system = $translate.instant("jsapp.general.system.name");
            vm.coupleCode = AuthService.getCoupleCode().then(function(coupleCode) {
                vm.coupleCode = coupleCode;
            });

            vm.appStoreLink = UserService.getAppLink('ipad');
            vm.playStoreLink = UserService.getAppLink('android');
        }])
        .config(["$stateProvider", "UserNavigationProvider", "UserData", function($stateProvider, UserNavigationProvider, UserData){
            if (!UserData.features || !UserData.features.coupleByCode) {
                return;
            }

            $stateProvider.state('auth', {
                url: '/auth',
                views: {
                    "main": {
                        controller: 'MainAuthCtrl'
                    }
                }
            });

            $stateProvider.state('auth.couple', {
                url: '/couple',
                views: {
                    "main@": {
                        templateUrl: 'partials/oneCol.tpl.html'
                    },
                    "col@auth.couple": {
                        controller: 'CoupleCodeCtrl',
                        controllerAs: 'vm',
                        templateUrl: 'auth/templates/coupleCode.tpl.html'
                    }
                }
            });

            var couplingCodeItem = {
                title: 'jsapp.general.couple',
                href: '#/auth/couple',
                icon: 'couple'
            };

            UserNavigationProvider.add(couplingCodeItem);

        }])
        .provider('UserNavigation', function() {
            var points = [];

            this.add = addPoint;

            this.$get = function(){
                return {
                    registeredNaviPoints: points,
                    getNavigationPoints: function (pointsToPrepend) {
                        return pointsToPrepend.concat(points);
                    }
                };
            };

            function addPoint(naviPoint) {
                points.push(naviPoint);
            }
        })
        ;
})
(angular);

