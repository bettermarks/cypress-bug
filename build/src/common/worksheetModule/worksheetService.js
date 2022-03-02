(function (angular) {
  'use strict';
  angular
    .module('bettermarks.worksheets')

    .service('WorksheetService', [
      '$http',
      '$q',
      'backendUrl',
      function ($http, $q, backendUrl) {
        var worksheetVersion = 'v2.0';
        var apiUrl = backendUrl + '/v1.0';
        var defaultWorksheetApiUrl = backendUrl + '/' + worksheetVersion;

        this.defaultWorksheets = {
          list: function () {
            var d = $q.defer();

            $http({
              method: 'GET',
              url: defaultWorksheetApiUrl + '/default_worksheets'
            }).then(function (data) {
              d.resolve(data.data);
            });

            return d.promise;
          }
        };

        this.worksheets = {
          list: function (folderId) {
            var d = $q.defer();

            $http({
              method: 'GET',
              url: apiUrl + '/worksheets',
              params: folderId && {folder: folderId}
            }).then(function (data) {
              d.resolve(data.data);
            });

            return d.promise;
          },

          get: function (ws_id) {
            var d = $q.defer();

            $http({method: 'GET', url: apiUrl + '/worksheets/' + ws_id}).then(
              function (data) {
                d.resolve(data.data);
              }
            );

            return d.promise;
          }
        };
      }
    ]);
})(angular);
