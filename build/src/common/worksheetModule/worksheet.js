(function(angular) {
    'use strict';

    angular

        .module(
            'bettermarks.worksheets',
            ['bettermarks']
        )

        .factory('getWorksheets', ["getWorksheetDuration", "WorksheetService", "WorksheetFolderService", "ExercisePreviewService", function(
            getWorksheetDuration, WorksheetService, WorksheetFolderService, ExercisePreviewService
        ) {
            return function(worksheets) {
                var folderId = WorksheetFolderService.getSelectedFolder();

                WorksheetService.worksheets.list(folderId).then(function(w) {
                    angular.forEach(w.worksheets, function(ws) {
                        ws.duration = getWorksheetDuration(ws.exercises);
                        ws.deprecatedExerciseCount =
                            ws.deprecatedExerciseCount ? parseInt(ws.deprecatedExerciseCount, 10) : 0;
                        ws.code = null;
                        ws.showCode = false;
                    });
                    worksheets.list = w.worksheets;
                });
            };

        }])
        .factory('getDefaultWorksheets', ["WorksheetService", function(WorksheetService) {
            return function(worksheets) {
                WorksheetService.defaultWorksheets.list().then(function(w) {
                    worksheets.list = w.worksheets;
                });
            };
        }])
        .factory('getWorksheetsFromDefaultFolders', ["WorksheetFolderService", "$stateParams", function(WorksheetFolderService, $stateParams) {
            return function(worksheets) {
                worksheets.list = WorksheetFolderService.getWorksheetsFromFolder($stateParams.folderId);
            };
        }])
        .factory('getWorksheetDuration', function() {
            return function(exercises) {
                var wsDuration = 0;
                angular.forEach(exercises, function(ex) {
                    wsDuration += parseInt(ex.duration, 10);
                });
                var minutes = Math.floor(wsDuration / 60);
                var seconds = wsDuration % 60;
                seconds = (seconds < 10) ? ("0" + seconds) : seconds;
                return minutes + ":" + seconds;
            };
        })
        .controller('WorksheetListTrait', ["$scope", "worksheetListLoader", function(
          $scope,
          worksheetListLoader
        ) {
            // this is a Interface for the different WorksheetList see $controller inheritance

            $scope.worksheets = {
                list: []
            };

            $scope.isTeacher = true
            $scope.assignData = {};

            // load worksheets
            worksheetListLoader($scope.worksheets);
        }])

        .controller('WorksheetList', ["$scope", "$rootScope", "$controller", "$translate", "_", "BMEvents", "getWorksheets", "AccessService", "WorksheetService", "WorksheetFolderService", "ExercisePreviewService", function(
            $scope, $rootScope, $controller, $translate, _,
            BMEvents, getWorksheets,
            AccessService, WorksheetService, WorksheetFolderService,
            ExercisePreviewService
        ) {

            $controller('WorksheetListTrait', {
                $scope: $scope,
                $rootScope: $rootScope,
                worksheetListLoader: getWorksheets
            });

            $scope.formData = {};
            $scope.translateFormName = 'worksheetImport';
            $scope.showImportForm = false;
            $scope.showExportForm = {};
            $scope.ospPlaylistsAvailable = false;
            $scope.exportStyle = {};
            $scope.lastWorksheet = {
                id: $rootScope.navigationStorage.worksheetId
            };

            $scope.clickedItem = {
                id: false
            };
            $scope.redeemWorksheetCode = redeemWorksheetCode;
            $scope.importWorksheetBubble = importWorksheetBubble;
            $scope.copyWorksheet = copyWorksheet;
            $scope.deleteWorksheet = deleteWorksheet;
            $scope.getExerciseListParams = getExerciseListParams;
            $scope.moveWorksheet = moveWorksheet;
            $scope.moreThanOneFolder = moreThanOneFolder;
            $scope.createNewWorksheet = createNewWorksheet;
            $scope.hasDeprecatedExercises = hasDeprecatedExercises;

            if (AccessService.checkEnabledFeature('importLc10Playlists')) {
                WorksheetService.playlists.getOspPlaylists().then(function(data) {
                    if (data.playlists.length > 0) {
                        $scope.ospPlaylistsAvailable = true;
                    }
                });
            }

            $scope.$on('deleteWorksheetSubmit', function($event, worksheet) {
                WorksheetService.worksheets.remove(worksheet, WorksheetFolderService.getSelectedFolder());
                worksheet.deleted = true;
                $scope.closeLightbox();
                $event.preventDefault();
            });

            function hasDeprecatedExercises(worksheet) {
                return worksheet.deprecatedExerciseCount > 0 && worksheet.selected;
            }

            function importWorksheetBubble() {
                var showImportFormBefore = $scope.showImportForm;
                $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, "importFormId");
                $scope.showImportForm = !showImportFormBefore;
            }

            function redeemWorksheetCode() {
                var form = $scope.form;
                var selectedFolder = WorksheetFolderService.getSelectedFolder();
                WorksheetService.worksheets.redeemCode($scope.formData.code, selectedFolder)
                    .then(function () {
                        //QuickFix: without this line the worksheet list shows duplicated entry for a short time
                        $scope.worksheets.list = [];
                        getWorksheets($scope.worksheets, selectedFolder);
                        form.$setPristine();
                        $scope.showImportForm = false;
                        $scope.formData = {};
                    })
                    .catch(function (data) {
                        $scope.showImportForm = false;
                        if (data.errors) {
                            angular.forEach(data.errors, function (error) {
                                if (form[error.name]) {
                                    form[error.name].$setValidity(error.error_key, false);
                                }
                            });
                        } else {
                        }
                    });
            }

            function copyWorksheet(worksheet) {
                // this is a workaround to protect special characters like ä, ö, ü, etc.
                // from being displayed as html entity (see http://trac.bm.loc/ticket/42180)
                var elem = document.createElement('textarea');
                elem.innerHTML = $translate.instant('jsapp.worksheets.copyTitle', {title: worksheet.worksheetName});

                var newWorksheet = {
                };
                var selectedFolder = WorksheetFolderService.getSelectedFolder();

                worksheet.showOptionsBubble = false;

                var worksheetToSave = _.extend(
                    {},
                    newWorksheet,
                    {
                        exercises: newWorksheet.exercises.map(function(e) {
                            return _.extend({}, e, {url: ExercisePreviewService.toId(e.url)});
                        })
                    }
                );

                WorksheetService.worksheets.save(worksheetToSave, selectedFolder)
                    .then(function (newWsId) {
                        newWorksheet.worksheetId = newWsId;
                        newWorksheet.duration = worksheet.duration;
                        newWorksheet.code = null;
                        newWorksheet.showCode = false;
                        $scope.worksheets.list.push(newWorksheet);
                    })
                    .catch(function(data){

                    });
            }

            function deleteWorksheet(worksheet) {
            }

            function getExerciseListParams(worksheet) {
                return {
                    exerciseType: "worksheet",
                    exerciseStartMode: "start",
                    worksheetId: worksheet.worksheetId
                };
            }

            function moveWorksheet(worksheet) {
            }

            function moreThanOneFolder() {
                return WorksheetFolderService.getWorksheetFolders().length > 1;
            }

            function createNewWorksheet() {
            }
        }])

        .controller('ManageWorksheetCtrl', ["$scope", "$stateParams", "BMEvents", "WorksheetFolderService", function (
            $scope, $stateParams, BMEvents, WorksheetFolderService
        ) {

            if (!$stateParams.folderId) {
                // Main route when clicking on the navigation icon.
                // Fetch fresh folder list with an API call.
                WorksheetFolderService.getFolderList();
                WorksheetFolderService.getDefaultFolderList();
            } else {
                WorksheetFolderService.goToFolder($stateParams.folderId);
            }

            $scope.worksheetFolders = WorksheetFolderService.getWorksheetFolders();
            $scope.defaultWorksheetFolders = WorksheetFolderService.getDefaultWorksheetFolders();
            $scope.selectedWorksheetFolderId = WorksheetFolderService.getSelectedFolder();

            $scope.$on(BMEvents.Worksheet.newFolderSelected, function() {
                $scope.selectedWorksheetFolderId = WorksheetFolderService.getSelectedFolder();
                $scope.worksheetFolders = WorksheetFolderService.getWorksheetFolders();
                WorksheetFolderService.goToFolder(WorksheetFolderService.getSelectedFolder());
            });
        }])

        .controller('FolderWorksheetsListCtrl', ["$scope", "$rootScope", "$controller", "$translate", "$state", "WorksheetFolderService", function (
            $scope, $rootScope, $controller, $translate, $state, WorksheetFolderService
        ) {
            $scope.selectedWorksheetFolderId = WorksheetFolderService.getSelectedFolder();
            if ($scope.selectedWorksheetFolderId !== null) {
                $scope.fromDefaultWorksheetFolder = $scope.selectedWorksheetFolderId.startsWith('default');
                if ($scope.selectedWorksheetFolderId.startsWith('default_worksheet_folder_')) {
                } else {
                    $controller('WorksheetList', {
                        $scope: $scope,
                        $rootScope: $rootScope,
                        $controller: $controller,
                        $translate: $translate,
                        $state: $state
                    });
                }
            }
        }]);

})(angular);
