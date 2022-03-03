(function(angular) {
    'use strict';
    angular
        .module('bettermarks.storage', ['bettermarks.userData', 'LocalStorageModule'])
        .config(["localStorageServiceProvider", "UserData", function(localStorageServiceProvider, UserData) {
            if(UserData && UserData.user_id) {
                localStorageServiceProvider.setPrefix(UserData.user_id);
            }
        }])

        .service('StorageService', ["localStorageService", "$filter", function(localStorageService, $filter) {
            this.storage = {};
            this.hourKey = $filter('date')(new Date(), 'yyyyMMdd-HH');

            this.put = function(prefix, key, value, sessionOnly, fullHourOnly) {
                key = fullHourOnly ? (key + this.hourKey) : key;
                if(!this.storage[prefix]) {
                    if(sessionOnly) {
                        this.storage[prefix] = {};
                    } else {
                        this.storage[prefix] = localStorageService.get(prefix) || {};
                    }
                }

                this.storage[prefix][key] = value;

                if(!sessionOnly) {
                    localStorageService.add(prefix, this.storage[prefix]);
                }
            };

            this.get = function(prefix, key, fullHourOnly) {
                key = fullHourOnly ? (key + this.hourKey) : key;
                if(!this.storage[prefix] && prefix !== 'bookList') {
                    this.storage[prefix] = localStorageService.get(prefix);
                }

                if(!this.storage[prefix]) {
                    return undefined;
                }

                if(!key) {
                    return this.storage[prefix];
                } else {
                    return this.storage[prefix][key];
                }

            };

            this.resetPrefix = function(prefix) {
                this.storage[prefix] = {};
                localStorageService.remove(prefix);
            };
        }]);
})(angular);
