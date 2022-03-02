(function (angular) {
  'use strict';
  angular
    .module('bettermarks.mobile')

    .provider('$inAppMode', function () {
      var srv = {};
      var overwrittenInAppMode;

      srv.force = function () {
        overwrittenInAppMode = true;
      };

      srv.$get = function ($cookies) {
        var cookie = $cookies.get('bm_inside_mobile_app');
        var inAppMode = false;

        if (overwrittenInAppMode) {
          inAppMode = overwrittenInAppMode;
        } else if (cookie) {
          inAppMode = cookie === 'true';
        }

        return Boolean(inAppMode);
      };

      return srv;
    })

    .service('MobileService', [
      '$window',
      '$cookies',
      function ($window, $cookies) {
        var apple_phone = /iPhone/i;
        var apple_tablet = /iPad/i;
        var android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i;
        var android_tablet = /Android/i;

        this.showRelogin = function () {
          $window.location.href = '/in-app-trigger/relogin-required';
        };

        this.isMobileBrowser = function () {
          var userAgent = $window.navigator.userAgent;

          return (
            apple_phone.test(userAgent) ||
            apple_tablet.test(userAgent) ||
            android_phone.test(userAgent) ||
            android_tablet.test(userAgent)
          );
        };

        this.openLTI = function (content_locale, returnUrl) {
          var backendUrl = $window.location.origin;

          if (!backendUrl) {
            backendUrl =
              $window.location.protocol + '//' + $window.location.hostname;
          }

          var urlSchema = 'bettermarks://lti/';
          var staticUrl = backendUrl + '/static';
          var series = backendUrl + '/1/lti/exercise.json';

          var sessionId = $cookies.get('backend.session');
          var mobileLink =
            urlSchema +
            content_locale +
            '/?staticUrl=' +
            staticUrl +
            '&series=' +
            series +
            '&session=' +
            sessionId;

          if (returnUrl) {
            mobileLink += '&returnUrl=' + returnUrl;
          }

          $window.open(mobileLink);
        };
      }
    ]);
})(angular);
