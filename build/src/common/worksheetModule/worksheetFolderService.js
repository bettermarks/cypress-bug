(function(angular) {
    'use strict';

    angular
        .module('bettermarks.worksheets')

        .service('WorksheetFolderService', ["$state", "$stateParams", "$rootScope", "bmApi", "BMEvents", function($state, $stateParams, $rootScope, bmApi, BMEvents) {
            var folderService = this;

            var selectedFolder = null;
            var worksheetFolders = [];
            var defaultWorksheetFolders = [];

            folderService.getSelectedFolder = function() {
                return selectedFolder;
            };

            folderService.getWorksheetFolders = function() {
                return worksheetFolders;
            };

            folderService.getDefaultWorksheetFolders = function () {
                return defaultWorksheetFolders;
            };

            folderService.getSelectedFolderName = function() {
                var folder = _.find(worksheetFolders, function (wsFolder) {
                    return wsFolder.id == selectedFolder;
                });
                return folder ? folder.name : '';
            };

            folderService.getFolderList = function(folderId) {
                return bmApi
                    .call('worksheetFolders')
                    .then(function(folderList) {
                        worksheetFolders = folderList.map(function(folder) {
                            return {
                                id: folder.folderId,
                                name: folder.name
                            };
                        });

                        worksheetFolders.sort(function(a, b) {
                            var aName = a.name.toLowerCase();
                            var bName = b.name.toLowerCase();
                            return (aName > bName) ? 1 : (aName < bName) ? -1 : 0;
                        });

                        selectedFolder = folderId || worksheetFolders[0].id;
                        $rootScope.$broadcast(BMEvents.Worksheet.newFolderSelected);
                    });
            };

            folderService.getDefaultFolderList = function() {
                return bmApi
                    .call('defaultWorksheetFolders')
                    .then(function(folderList) {
                        if(folderList.worksheets){
                            defaultWorksheetFolders = folderList.worksheets.map(function(folder, index) {
                                return {
                                    id: "default_worksheet_folder_" + index,
                                    name: folder.name,
                                    worksheets: folder.worksheets
                                };
                            });
                            $rootScope.$broadcast(BMEvents.Worksheet.defaultWorksheetsLoaded);
                        }
                    });
            };

            folderService.getNonSelectedFolders = function() {
                return worksheetFolders.filter(function(wsFolder) {
                    return wsFolder.id !== selectedFolder;
                });
            };

            folderService.getWorksheetsFromFolder = function(folderId) {
                var folder_index = folderId.split('_').pop();
                return defaultWorksheetFolders[folder_index].worksheets;
            };

            function folderExists(folderId) {
                return folderId === 'default' ||
                    defaultWorksheetFolders.some(function(wf){
                        return wf.id == folderId;
                    }) ||
                    worksheetFolders.some(function(wf) {
                        return wf.id == folderId;
                    });
            }

            function refreshFolder() {
              $state.transitionTo('twoCol.manageWorksheets', {});
            }

            folderService.refreshFolder = refreshFolder;

            function resetFolders() {
                worksheetFolders = [];
                folderService.refreshFolder();
            }

            folderService.resetFolders = resetFolders;

            folderService.goToFolder = function(folderId) {
                if (folderId) {
                    selectedFolder = folderId;
                }

                if (!folderExists(selectedFolder)) {
                    selectedFolder = null;
                    folderService.resetFolders();
                } else if (
                    $state.current.name !== 'twoCol.manageWorksheets' ||
                    $stateParams.folderId !== selectedFolder
                ) {
                    $state.transitionTo('twoCol.manageWorksheets', {folderId: selectedFolder});
                }
            };

            folderService.create = function(folderName) {
                return bmApi.call(
                    'worksheetFolders',
                    {},
                    {method: 'POST', data: {name: folderName}}
                );
            };

            folderService.delete = function(folderId) {
                return bmApi.call(
                    'worksheetFolder',
                    {folderId: folderId},
                    {method: 'DELETE'}
                );
            };

            folderService.update = function(folderId, folderName) {
                return bmApi.call(
                    'worksheetFolder',
                    {folderId: folderId},
                    {method: 'PUT', data: {name: folderName}}
                );
            };
        }]);
})(angular);
