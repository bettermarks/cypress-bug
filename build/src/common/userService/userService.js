(function (angular) {
    'use strict';
    angular
        .module('bettermarks.user', ['bettermarks', 'ngCookies', 'bettermarks.api', 'bettermarks.logout'])
        .constant('AVAILABLE_USER_ROLE_NAMES', {
            STUDENT: 'r:student',
            TEACHER: 'r:teacher',
            STUDENT_SC2: 'r:student_sc2',
            TEACHER_LC2: 'r:teacher_lc2',
            AUTHORIZED: 'r:authorized',
            BETA_USER: 'r:beta_user',
            QA: 'r:qs',
            PAID: 'r:paid'
        })


        .service('UserService',
        ["$rootScope", "$q", "UserData", "AVAILABLE_USER_ROLE_NAMES", "$translate", "bmApi", "$window", "$inAppMode", function (
            $rootScope,
            $q,
            UserData,
            AVAILABLE_USER_ROLE_NAMES,
            $translate,
            bmApi,
            $window,
            $inAppMode) {

            var srv = this;


            srv.hasRole = function (roleName) {
                if (!roleName) {
                    return false;
                }

                var user = srv.getUser();
                return user && user.roles && user.roles.indexOf(roleName) !== -1;
            };

            srv.getClientType = function () {
                return 'bm';
            };

            srv.getUser = function () {
                return UserData;
            };

            srv.getUserId = function () {
                return UserData.user_id;
            };

            srv.getSystem = function () {
                return UserData.system;
            };

            srv.getUserName = function () {
                return UserData.personal_info && UserData.personal_info.name || 'no-username';
            };
            var isTrustedDisplayName =false;

            srv.getDisplayName = function (firstName, lastName) {
                return $translate.instant('jsapp.navigation.namePlaceholder');
            };

            srv.getFeedbackURL = function () {
                return UserData.settings['feedback_url'];
            };

            srv.getLanguageAndSystem = function () {
                return UserData.settings.language_code + '_' + UserData.system;
            };

            srv.getAvailableContentLocales = function () {
                var cl = UserData.content_locales;
                return cl;
            };

            srv.getDefaultContentLocale = function () {
                return UserData.settings.default_content_locale;
            };

            srv.getSetting = function (key) {
                return UserData.settings[key];
            };

            srv.getPersonalSettings = function () {
                return UserData.personal_settings;
            };

            srv.isTeacher = function () {
                return true
            };

            srv.isVerified = function () {
                return true
            };

            srv.getLanguageCode = function () {
                return UserData.settings.language_code + '_' + UserData.settings.country_code;
            };

            srv.getWorksheetPerFolderLimit = function () {
                return parseInt(UserData.settings.worksheets_per_folder_limit, 10);
            };

        }]);

})(angular);
