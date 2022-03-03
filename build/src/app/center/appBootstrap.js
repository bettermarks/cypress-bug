jQuery(function() {
    'use strict';
    var tryCounter = 0;

    function successCallback(data) {

        var version = parseInt(vrs, 10);
        var languageFile = 'lang-';

        if(data.settings) {
            languageFile += data.settings.language_code + '_' + data.system + '.json?v=' + version;
        }

        loadLanguageFile();

        function loadLanguageFile() {
            tryCounter++;
            jQuery.getJSON('/app/assets/translations/' + languageFile)
                .done(function(languageData) {
                    var dependencies = ['bettermarks'];
                    if(typeof([].indexOf) !== 'undefined') {
                        if(data && data.roles) {
                            if(data.roles.indexOf('r:teacher') !== -1) {
                                dependencies = dependencies.concat([
                                    'bettermarks.teacher'
                                ]);
                            }
                        }

                        angular.module('bettermarks.userData', [])
                            .constant('UserData', data)
                            .constant('LanguageData', languageData);
                        angular.bootstrap(document, dependencies);
                    }

                });
        }

    }

    jQuery.ajax({
        dataType: "json",
        url: '/config/user',
        data: {},
        timeout: 10000
    }).success(function(data) {
        var isTeacher = data.roles.indexOf('r:teacher') !== -1;
        var isVerificationRequired = data.features && data.features.teacherVerification;
        var isTeacherWithMissingVerification = isTeacher && isVerificationRequired &&
          data.personal_info && data.personal_info.is_verified === false;

        window.setTimeout(function() {
            if(!window.location.hash) {
                window.location.hash = isTeacherWithMissingVerification ? '#/verification' : '#/start';
            }
            window.setTimeout(function() {
                successCallback(data);
            }, 100);
        }, 10);
    });
    angular.element(window).bind('unload', function() {
        angular.element('body').html('');
    });
});
