(function(angular) {
    "use strict";
    angular.module('bettermarks')
        .factory('Coins', function() {
            return {
                getCoinClasses: function(n) {
                    return {
                        'exercise-coins-undone': (n === -1),
                        'exercise-coins-0': (n === 0),
                        'exercise-coins-1': (n === 1),
                        'exercise-coins-2': (n === 2),
                        'exercise-coins-3': (n === 3),
                        'exercise-coins-star': (n === 4)
                    };
                },

                getStarClasses: function(n) {
                    return {
                        'star-full': (n === 1),
                        'star-empty': (n !== 1)
                    };
                }
            };
        })

        .factory('BMEvents', function() {
            return {
                GroupAndStudentList: {
                    initStudentListWithData: 'initStudentListWithData',
                    groupSelected: 'groupSelected',
                    clearGroupSelection: 'clearGroupSelection',
                    studentSelected: 'studentSelected',
                    groupAndStudentSelected: 'groupAndStudentSelected',
                    updateStudentResults: 'updateStudentResults'
                },
                Student: {
                    joinClassFinished: 'joinClassFinished'
                },
                ModalDialog: {
                    backgroundScrolling: 'backgroundScrolling',
                    recalculateStyles: 'recalculateStyles',
                    openExercisePreview: 'openExercisePreview'
                },
                AnyBubble: {
                    openAnyBubble: 'openAnyBubble'
                },
                Worksheet: {
                    chapterSelected: 'chapterSelected',
                    newFolderSelected: 'newFolderSelected',
                    defaultWorksheetsLoaded: 'defaultWorksheetsLoaded'
                },

                Datepicker: {
                    open: 'datepickerOpen'
                },
                FlexClient: {
                    openExercise: 'openExercise',
                    openFem: 'openFem',
                    closeFlexClient: 'closeFlexClient'
                },
                SeriesPlayer: {
                    openSeriesPlayer: 'openSeriesPlayer',
                    closeSeriesPlayer: 'closeSeriesPlayer'
                },
                Lightbox: {
                    close: 'lightboxClose'
                },
                Todos: {
                    deleteSubmit: 'lightboxDeleteTodoSubmit',
                    releaseResultsSubmit: 'lightboxReleaseResultsSubmit',
                    deactivateResultsSubmit: 'lightboxDeactivateResultsSubmit',
                    newGroupAUIMap: "newGroupArchiveUserInputMap",
                    startPollingGroupAUIStatus: "startPollingGroupArchiveStudentInputStatus"
                },

                BookFiltering: {
                    bookType: 'BookTypeSelected',
                    language: 'LanguageSelected'
                },

                Refresh: {
                    successTotal: 'RefreshSuccessTotal',
                    knowledgeGaps: 'RefreshKnowledgeGaps'
                },

                Pagination: {
                    reset: 'reset'
                }
            };
        })
        .factory("AUI_STATUS", function () {
          return {
            IN_PREPARATION: "IN_PREPARATION",
            REQUESTABLE: "REQUESTABLE",
            READY_FOR_DOWNLOAD: "READY_FOR_DOWNLOAD",
            ARCHIVING_FAILED: "ARCHIVING_FAILED",
          };
        })
        .factory('CheckBoxHelper', function() {
            var checkboxes = {
                markSelected: function(target, source, matchFunction) {
                    for(var i = 0; i < target.length; i++) {
                        for(var j = 0; j < source.length; j++) {
                            if(matchFunction(target[i], source[j])) {
                                target[i].selected = true;
                            }
                        }
                    }
                },
                extractSelected: function(obj) {
                    var newObj = [];
                    for(var i = 0; i < obj.length; i++) {
                        if(obj[i].selected) {
                            delete newObj[newObj.push(angular.copy(obj[i])) - 1].selected;
                        }
                    }
                    return newObj;
                }
            };
            return { checkboxes: checkboxes};
        })

        .factory('_', function() {
            return window._;
        })

        .factory('SlicedList', function() {
            return {
                loadMore: function (fullList, sliceList, lengthStorage) {
                    var last = sliceList.items.length - 1;
                    if(fullList.length > sliceList.items.length) {
                        sliceList.page++;
                        for(var i = 1; i <= 4; i++) {
                            if(angular.isDefined(fullList[last + i])) {
                                sliceList.items.push(fullList[last + i]);
                                if(angular.isNumber(lengthStorage)) {
                                    lengthStorage = last + i + 20;
                                }
                            }
                        }
                    }

                    return lengthStorage;
                },
                prepareList: function(fullList, scroll, minLength) {
                    var slice = 20;
                    if(scroll) {
                        slice = minLength;
                    }
                    return {
                        items: fullList.slice(0, slice),
                        page: 0,
                        size: slice
                    };
                }
            };
        })

    ;
})(angular);
