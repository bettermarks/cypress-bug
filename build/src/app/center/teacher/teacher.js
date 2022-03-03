(function(angular) {
    'use strict';

    angular

        .module('bettermarks.teacher', ['ui.router', 'oc.lazyLoad', 'bettermarks.user', 'bettermarks.util.filter'])

        .config(["$stateProvider", "UserData", function config($stateProvider, UserData) {
            var teacherVerification = UserData.features && UserData.features.teacherVerification;

            var isVerified = teacherVerification ?
              UserData.personal_info && UserData.personal_info.is_verified === true :
              true;

            if (isVerified) {
                $stateProvider.state('twoCol.manageWorksheets', {
                    url: '/worksheet-folders/:folderId',
                    views: {
                        "left@twoCol": {
                            "controller": 'ManageWorksheetCtrl',
                            "templateUrl": 'worksheetModule/partials/manageWorksheets.tpl.html'
                        },
                        "right@twoCol": {
                            "controller": 'FolderWorksheetsListCtrl',
                            "templateUrl": 'worksheetModule/partials/folderWorksheetList.tpl.html'
                        }
                    }
                });
            }
        }]);


})
(angular);
