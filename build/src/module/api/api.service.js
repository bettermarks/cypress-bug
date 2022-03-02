(function (angular) {
  'use strict';
  angular
    .module('bettermarks.api')
    .service('bmApiDefaultHttpParams', function () {
      this.timeout = 120 * 1000;
      this.success = false;
      this.error = false;
      this.cache = false;
      this.method = 'GET';
    })
    .provider('bmApi', function () {
      this.endPoints = '';
      this.$get = [
        '$http',
        '$q',
        '$cacheFactory',
        'noSpinnerUrls',
        'StorageService',
        'bmApiDefaultHttpParams',
        function (
          $http,
          $q,
          $cacheFactory,
          noSpinnerUrls,
          StorageService,
          bmApiDefaultHttpParams
        ) {
          this.srv = {};

          var endPoints = this.endPoints;
          var createUrl = function (key, urlParams) {
            var url = endPoints[key].replace(
              /:system:/,
              StorageService.get('user', 'system')
            );
            if (urlParams) {
              angular.forEach(urlParams, function (value, key) {
                var r = new RegExp(':' + key + ':');
                url = url.replace(r, value);
              });
            }

            return url;
          };

          this.srv.call = function (
            endPointKey,
            urlParams,
            customHttpParams,
            noSpinner,
            deferredAbort
          ) {
            var httpParams = {};
            angular.extend(
              httpParams,
              bmApiDefaultHttpParams,
              customHttpParams,
              deferredAbort ? {timeout: deferredAbort.promise} : {}
            );

            httpParams.url = createUrl(endPointKey, urlParams);

            if (noSpinner) {
              noSpinnerUrls.put(httpParams.url);
            }

            var response = $q.defer();
            $http(httpParams)
              .success(function (d) {
                if (['PUT', 'POST', 'DELETE'].indexOf(httpParams.method) > -1) {
                  var default_cache = $cacheFactory.get('$http');
                  default_cache.remove(httpParams.url);
                }
                if (d !== null && d !== undefined && d['success'] === false) {

                  response.reject(
                    httpParams.success ? d[httpParams.success] : d
                  );
                  return;
                }

                response.resolve(
                  httpParams.success ? d[httpParams.success] : d
                );
              })
              .error(function (d) {
                response.reject(httpParams.error ? d[httpParams.error] : d);
              });

            return response.promise;
          };

          return this.srv;
        }
      ];
      this.setEndPoints = function (endPoints) {
        this.endPoints = endPoints;
      };
    })
    .factory('noSpinnerUrls', [
      '_',
      function (_) {
        var noSpinnerUrls = [];

        var getNoSpinnerUrls = function () {
          return noSpinnerUrls;
        };

        var putNoSpinnerUrl = function (url) {
          noSpinnerUrls = _.union(noSpinnerUrls, [url]);
        };

        return {
          get: getNoSpinnerUrls,
          put: putNoSpinnerUrl
        };
      }
    ]);
})(angular);
