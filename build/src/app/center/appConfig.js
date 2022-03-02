(function (angular) {
  'use strict';
  angular
    .module('bettermarks')
    .config([
      '$stateProvider',
      '$translateProvider',
      'LanguageData',
      'UserData',
      function (
        $stateProvider,
        $translateProvider,
        LanguageData,
        UserData
      ) {
        function initTranslation() {
          var userSettings = UserData.settings;

          if (userSettings) {
            var langCode =
              userSettings.language_code + '_' + userSettings.country_code;
            $translateProvider.translations(langCode, LanguageData);
            $translateProvider.useLocalStorage();
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
            $translateProvider.preferredLanguage(langCode);
            $translateProvider.fallbackLanguage(langCode);
          }
        }
        initTranslation();

        $stateProvider.state('twoCol', {
          abstract: true,
          views: {
            main: {
              templateUrl: 'partials/twoCol.tpl.html'
            }
          }
        });

        $stateProvider.state('oneCol', {
          abstract: true,
          views: {
            main: {
              templateUrl: 'partials/oneCol.tpl.html'
            }
          }
        });

        $stateProvider.state('oneCol.openWorksheet', {
          url: '/open-worksheet/{worksheetParams:.*}',
          views: {
            'col@oneCol': {
              controller: 'ExerciseInlineController'
            }
          }
        });
      }
    ])
    .config([
      'bmApiProvider',
      'UserData',
      function (bmApiProvider, UserData) {
        var endPoints = {
          worksheetFolders: '/v1.0/folders',
          defaultWorksheetFolders: '/v2.0/default_worksheets',
          worksheetFolder: '/v1.0/folders/:folderId:',
        };
        var kongEnabled = UserData.features && UserData.features.kong;
        endPoints['logout'] = kongEnabled ? '/auth/logout' : '/v1.1/logout';

        bmApiProvider.setEndPoints(endPoints);
      }
    ]);
})(angular); // jshint ignore:line
