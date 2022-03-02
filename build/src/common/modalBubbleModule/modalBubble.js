/**
 * @ngdoc overview
 * @name bettermarks.modalBubble
 * @description
 * holds controllers and directives for the modal bubble
 */

(function(angular) {
    'use strict';
    angular
        .module('bettermarks.modalBubble', ['bettermarks.staticContent'])
        .directive('modalBubble', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/modalBubble.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: true,
                link: function(scope, element, attrs) {

                    scope.modal = {
                        open: false,
                        title: attrs.title,
                        subtitle: attrs.subtitle,
                        dynamicHeight: attrs.dynamicHeight,
                        boxWidth: attrs.boxWidth,
                        boxHeight: attrs.boxHeight,
                        boxType: attrs.boxType,
                        boxPosition: attrs.boxPosition,
                        cssClass: attrs.cssClass
                    };

                },

                controller: 'ModalBubbleController'
            };
        })

        .controller('ModalBubbleController', ["$scope", "$rootScope", "$element", "BMEvents", "$timeout", "$window", function($scope, $rootScope, $element, BMEvents, $timeout, $window) {
            var opener;
            if(typeof $scope.opener === "undefined") {
                $scope.opener = {active: ''};
            }

            var resizeThrottle, resizeHandlerBound;
            function resizeHandler() {
                // as modal.open is set directly in the template, the handler has to remove itself if there is no
                // modal open anymore
                if (!$scope.modal.open) {
                    $window.removeEventListener('resize', resizeHandler, false);
                    resizeHandlerBound = false;
                    return;
                }

                /*jshint expr: true */
                resizeThrottle && $timeout.cancel(resizeThrottle);
                resizeThrottle = $timeout(function() {
                    $scope.$apply(function() {
                        opener && setStyles(angular.element(opener));
                    });
                }, 50);
            }

            $scope.toggleModal = function(event) {
                var currElement = angular.element(event.currentTarget);
                if($scope.opener.active === currElement.attr('id')) {
                    $scope.opener.active = '';
                } else {
                    $scope.opener.active = currElement.attr('id');
                }
                var dosetStyles = false;

                if(!$scope.modal.open) {
                    $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, $scope.opener.active);
                    opener = event.currentTarget;
                    $element.appendTo(angular.element('body'));
                    dosetStyles = true;
                    setStyles(angular.element(opener));

                    /*jshint expr: true */
                    !resizeHandlerBound && $window.addEventListener('resize', resizeHandler);
                    resizeHandlerBound = true;
                } else {
                    $window.removeEventListener('resize', resizeHandler);
                    resizeHandlerBound = false;
                }

                $scope.modal.open = !$scope.modal.open;
                if(dosetStyles) {
                    // we need on older ipad (ios7) and mac-osx(maverick) a little timeout to function as aspected
                    $timeout(function() {
                        $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
                    });

                    $timeout(function() {
                        $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
                    }, 200);

                    $timeout(function() {
                        $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
                    }, 700);
                }
            };

            $scope.$on(BMEvents.AnyBubble.openAnyBubble, function(event, opener) {
                if($scope.modal.open) {
                    $scope.modal.open = false;
                }

                if($scope.opener.active !== opener) {
                    $scope.opener.active = '';
                }

            });

            $scope.$on(BMEvents.ModalDialog.openExercisePreview, function(event, originalEvent) {
                $scope.toggleModal(originalEvent);
            });

            $scope.$on(BMEvents.ModalDialog.recalculateStyles, function(event, args) {
                var dynamicWidth = args !== undefined ? args.dynamicWidth : undefined;
                $scope.$apply(function() {
                    if(opener) {
                        setStyles(angular.element(opener), dynamicWidth);
                    }
                });
            });

            $scope.$on('$destroy', function() {
                $element.remove();
                $window.removeEventListener('resize', resizeHandler, false);
            });

            function setStyles(openerElement, dynamicWidth) {
                var bodyElement = angular.element('body');
                var viewPortHeight = bodyElement.height();
                var viewPortWidth = bodyElement.width();
                var boxHeight = $scope.modal.boxHeight ?
                    parseInt($scope.modal.boxHeight, 10) :
                    Math.ceil(viewPortHeight * 0.8);

                // this is way better readable
                // https://github.com/jshint/jshint/issues/2528#issuecomment-118668152
                /* jshint laxbreak: true */
                var boxWidth = ($scope.modal.boxWidth && !dynamicWidth)
                  ? parseInt($scope.modal.boxWidth, 10)
                  : Math.min(viewPortWidth, 565);
                var boxType = $scope.modal.boxType;
                var boxPosition = $scope.modal.boxPosition === 'right' ? 'right' : 'left';
                var viewPortTopPositionOfIcon = openerElement.offset().top;
                var boxOffsetLeft = openerElement.offset().left;
                var viewPortLeftPositionOfIcon = Math.max(
                  viewPortWidth === boxWidth
                      ? 0
                      : boxPosition === 'left'
                          ? Math.floor(boxOffsetLeft - (boxWidth + 10))
                          : Math.floor(boxOffsetLeft + openerElement.width() + 10),
                  0
                );

                var maxTop = angular.element('#content-wrap').offset().top;

                var contentHeight;
                switch(boxType) {
                    case 'xsmall':
                        contentHeight = 50;
                        break;
                    case 'small':
                        contentHeight = 60;
                        break;
                    default:
                        contentHeight = 95;

                }

                $element.find(".subcontainer").each(function() {
                    contentHeight += $(this).outerHeight(true);
                });

                var header = $element.find("div.header");
                var headerHeight = header.height();

                if(boxHeight > contentHeight && contentHeight > headerHeight && $scope.modal.dynamicHeight) {
                    boxHeight = contentHeight;
                }

                var boxTop = -1 * (boxHeight / 2);
                var modalDialogTop = viewPortTopPositionOfIcon;

                if(!$scope.modal.boxHeight) {
                    modalDialogTop = viewPortTopPositionOfIcon + boxTop;
                }

                if(modalDialogTop < maxTop) {
                    modalDialogTop = maxTop;
                }

                if((modalDialogTop + boxHeight + 20) > viewPortHeight) {
                    modalDialogTop = viewPortHeight - boxHeight - 20;
                }

                $scope.modal.style = {
                    height: boxHeight + 'px',
                    width: boxWidth + 'px',
                    top: modalDialogTop + 'px',
                    left: viewPortLeftPositionOfIcon + 'px',
                    transform: 'scale(1)'
                };

                $scope.modal.containerStyle = {
                    maxHeight: boxHeight - headerHeight - (boxType === 'small' ? 20 : 30),
                    width: 'auto'
                };
            }
        }])

        .directive('exportWorksheetBubble', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/exportWorksheetBubble.tpl.html',
                restrict: 'A',
                replace: false,
                transclude: true,
                scope: false,
                controller: 'exportWorksheetBubbleController'
            };
        })

        .controller('exportWorksheetBubbleController', ["$scope", "$rootScope", "$element", "WorksheetService", "BMEvents", function($scope, $rootScope, $element,
                    WorksheetService, BMEvents) {
            $scope.exportWorksheetBubble = exportWorksheetBubble;
            $scope.bubbleId = "worksheet-export-" + $scope.worksheet.worksheetId;

            function exportWorksheetBubble(worksheet, $event) {
                var showBefore = worksheet.showCode;
                $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, $scope.bubbleId);

                var currElement = angular.element($event.currentTarget);
                if (showBefore === false) {
                    setExportStyles(angular.element(currElement));
                }

                if (worksheet.code === null) {
                    WorksheetService.worksheets.exportCopy(worksheet.worksheetId).then(function(code) {
                        worksheet.code = code;
                        worksheet.showCode = true;
                        $scope.appendedEl = $element.appendTo(angular.element('body'));
                    });
                } else {
                    worksheet.showCode = !showBefore;
                }
            }

            $scope.$on('$stateChangeStart', function() {
                if($scope.appendedEl){
                    $scope.appendedEl.remove();
                }
            });

            $scope.$on(BMEvents.AnyBubble.openAnyBubble, function(event, bubbleId) {
                // dont do anything if broadcasted the event myself in exportWorksheetBubble
                if ($scope.bubbleId != bubbleId) {
                    $scope.worksheet.showCode = false;
                }
            });

            function setExportStyles(openerElement) {
                // calculation left
                var boxOffsetLeft = openerElement.offset().left;
                var boxWidth = 220; // hardcoded;
                var bubbleLeft = Math.floor(boxOffsetLeft - (boxWidth + 10));
                bubbleLeft = bubbleLeft < 2 ? 2 : bubbleLeft;

                // calculation top
                var boxHeight = 230;
                var bubbleTop = openerElement.offset().top;
                var maxTop = angular.element('#content-wrap').offset().top;

                if(bubbleTop < maxTop + 80) {
                    bubbleTop = maxTop + 80; // where do the 80 come from?
                }

                var viewPortHeight = angular.element('body').height();
                if(bubbleTop > viewPortHeight + 80 - boxHeight) {
                    bubbleTop = viewPortHeight + 80 - boxHeight; // where do the 80 come from?
                }

                $scope.exportStyle = {
                    // height: boxHeight + 'px',
                    width: boxWidth + 'px',
                    top: bubbleTop + 'px',
                    left: bubbleLeft + 'px'
                };

            }

        }])

        .directive('worksheetOptionsBubble', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/worksheetOptionsBubble.tpl.html',
                restrict: 'A',
                replace: false,
                transclude: true,
                scope: false,
                controller: 'worksheetOptionsBubbleController'
            };
        })

        .controller('worksheetOptionsBubbleController', ["$scope", "$rootScope", "$element", "WorksheetService", "BMEvents", function($scope, $rootScope, $element,
            WorksheetService, BMEvents) {
            $scope.worksheetOptionsBubble = worksheetOptionsBubble;
            $scope.worksheetOptionsBubbleId = "worksheet-options-" + $scope.worksheet.worksheetId;
            $scope.showWorksheetOptionsBubble = true;

            function worksheetOptionsBubble(worksheet, $event) {
                $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, $scope.worksheetOptionsBubbleId);

                var currElement = angular.element($event.currentTarget);

                if (worksheet.showOptionsBubble === false) {
                    setExportStyles(angular.element(currElement));
                }
                setExportStyles(angular.element(currElement));

                worksheet.showOptionsBubble = !worksheet.showOptionsBubble;
            }

            $scope.openMoveWorksheetBubble = function () {
              $scope.bubbleId = undefined;
              $scope.showWorksheetOptionsBubble = false;
            };

            $scope.$on(BMEvents.AnyBubble.openAnyBubble, function(event, worksheetOptionsBubbleId) {
                // dont do anything if broadcasted the event myself in exportWorksheetBubble
                if ($scope.worksheetOptionsBubbleId != worksheetOptionsBubbleId) {
                    $scope.worksheet.showOptionsBubble = false;
                }
            });

            function setExportStyles(openerElement) {


                // Constants for left
                var boxWidth = 220; // hardcoded;
                // calculation left
                var boxOffsetLeft = openerElement.prop('offsetLeft');
                var bubbleLeft = Math.floor(boxOffsetLeft - (boxWidth + 10));
                bubbleLeft = bubbleLeft < 2 ? 2 : bubbleLeft;


                // Constants for top
                var childrenCount = openerElement.parent().find('.worksheet-option-item').length;
                var BOX_HEADER_HEIGHT = 45;
                var BOX_ITEM_HEIGHT = 39;
                var boxHeight = BOX_HEADER_HEIGHT + childrenCount * BOX_ITEM_HEIGHT;
                var viewPortHeight = angular.element('body').height();
                var currentScrollPosition = openerElement.scrollParent().scrollTop();
                var SPACING = 2;
                /**
                 * 23 is half of the "opener element" height
                 * (the offset starts counting from the middle)
                 */
                var openerElementOffset = 23;
                // calculation top
                var idealPos = openerElement.offset().top - boxHeight/2;
                var minPos = angular.element("#content-wrap").offset().top + openerElementOffset + SPACING;
                var bubbleTop = Math.max(idealPos, minPos);

                if ((bubbleTop + boxHeight) > viewPortHeight) {
                    bubbleTop = viewPortHeight -
                        angular.element("#footer").outerHeight() -
                        openerElementOffset - boxHeight - 2;
                }
                bubbleTop += currentScrollPosition;
                $scope.exportStyle = {
                    // height: boxHeight + 'px',
                    width: boxWidth + 'px',
                    top: bubbleTop + 'px',
                    left: bubbleLeft + 'px'
                };

            }

        }])


        .directive('exercisePreview', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/exercisePreview.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: false,
                scope: {
                    contentList: '=',
                    contentLocale: '='
                },
                controller: 'ExercisePreviewController'
            };
        })

        .controller('ExercisePreviewController', ["$scope", "ExercisePreviewService", "BMEvents", function($scope, ExercisePreviewService, BMEvents) {
            ExercisePreviewService.getContentListPreview($scope.contentLocale, $scope.contentList).then(function(data){
                $scope.exercisePreview = {
                    preview_list: ExercisePreviewService.mapToStaticServer(data.preview_list)
                };
                $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
            });
        }])

        .directive('exercisePreviewList', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/exercisePreview.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: false,
                scope: {
                    exerciseList: '=',
                    exerciseKey: '@'
                },
                controller: 'ExercisePreviewListController'
            };
        })

        .controller('ExercisePreviewListController', ["$scope", "_", "BMEvents", function($scope, _, BMEvents) {
            $scope.exercisePreview = {
                preview_list: _.map($scope.exerciseList, function(val) {
                    return val[$scope.exerciseKey];
                })
            };

            $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
        }])

        .directive('studentListBubble', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/studentListBubble.tpl.html',
                restrict: 'EA',
                replace: false,
                scope: {
                    groupId: '=',
                    studentListDone: '=',
                    studentListAll: '=',
                    studentStarted: '=',
                    userResults: '=',
                    todoEnd: '='
                },
                controller: 'studentListBubbleController'
            };
        })

        .controller('studentListBubbleController', ["$rootScope", "$scope", "$filter", "_", "GroupManagerService", "BMEvents", "UserData", function(
          $rootScope,
          $scope,
          $filter,
          _,
          GroupManagerService,
          BMEvents,
          UserData
        ) {
            var studentsCustomSorting = _.get(UserData, 'features.studentsCustomSorting');
            var $orderBy = $filter('orderBy');

            $scope.fullStudentList = [];
            $scope.toggles = $rootScope.toggles;
            $scope.showStar = {value: false};
            var objList;

            if($scope.studentListAll === 'user_results') {
                objList = Object.keys($scope.userResults);
            } else {
                objList = angular.extend({}, $scope.studentListDone, $scope.studentListAll);
            }

            angular.forEach(objList, function(value) {
                $scope.fullStudentList.push(value);
            });

            var groupId = $scope.groupId;

            GroupManagerService.getMembers(groupId).then(function(members) {
                $scope.members = studentsCustomSorting ? members : $orderBy(members, 'displayName');
                $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
            });
        }])


        .directive('resizePreview', ["$rootScope", "BMEvents", function($rootScope, BMEvents) {
            return {
                link: function($scope, element, attributes) {
                    angular.element('.modal-bubble.modal-open').off('transitionend webkitTransitionEnd oTransitionEnd');
                    angular.element('.modal-bubble.modal-open').one('transitionend webkitTransitionEnd oTransitionEnd',
                        function() {
                            $(this).removeClass('modal-trans');
                        });

                    var dynamicWidth = attributes.dynamicWidth === "true";
                    element.bind("load", function() {
                        angular.element('.modal-bubble.modal-open').addClass('modal-trans');
                        $rootScope.$broadcast(BMEvents.ModalDialog.recalculateStyles, {'dynamicWidth': dynamicWidth});
                    });

                }
            };
        }])

        .directive('viewKem', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/view-kem.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: false,
                scope: {
                    contentListRef: '=',
                    contentLocale: '='
                },

                controller: 'ViewKemController'
            };
        })

        .controller('ViewKemController', ["$scope", "KemService", "$location", "$sce", "$window", "BMEvents", function($scope, KemService, $location, $sce, $window, BMEvents) {
            $scope.kemPaths = [];
            var pathPrefix = '/app/free-betty/seriesplayer/#/kem/' + $scope.contentLocale + '/';

            KemService.getKemPages($scope.contentLocale, $scope.contentListRef).then(function (kems) {
                for (var k in kems) {
                    $scope.kemPaths.push($sce.trustAsResourceUrl(pathPrefix + kems[k]));
                }
                $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
            });
        }])

        .directive('downloadKem', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/download-kem.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: false,
                scope: {
                    contentListRef: '=',
                    contentLocale: '='
                },
                controller: 'DownloadKemController'
            };
        })

        .controller('DownloadKemController', ["$scope", "$translate", "KemService", "BMEvents", "NotificationService", "MetadataService", function($scope, $translate, KemService, BMEvents,
                                                      NotificationService, MetadataService) {
            var contentId = $scope.contentListRef.split('_')[0];
            $scope.textSent = false;
            MetadataService.callVersion('kempdf', $scope.contentLocale).then(function(version){
                $scope.kemPdf = KemService.getKemPdf($scope.contentLocale, contentId) + '?v=' + version;
            });
            $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
            $scope.sendDownloadText = function() {
                $scope.textSent = true;
                return false;
            };
            $scope.downloadExercise = function() {
                NotificationService.showWarnInfo('jsapp.teacher.downloadPopupNothing');

                return false;
            };
        }])

        .directive('exerciseOptionsBubble', function() {
            return {
                templateUrl: 'modalBubbleModule/partials/exerciseOptionsBubble.tpl.html',
                restrict: 'EA',
                replace: false,
                transclude: true,
                scope: {
                    groupId: '@',
                    assignmentId: '@',
                    exerciseNr: '@',
                    contentLocale: '@',
                    previewSrc: '@',
                    exerciseId: '@',
                    showPreview: '='
                },
                controller: 'ExerciseOptionsBubbleController'
            };
        })

        .controller('ExerciseOptionsBubbleController', ["$scope", "$window", "BMEvents", "ExercisePreviewService", function($scope, $window, BMEvents, ExercisePreviewService) {
            $scope.exerciseParams = exerciseParams;
            $scope.showPreview = showPreview;

            function exerciseParams(gId, aId, eNr, contentLocale, exerciseId) {
                return {
                  rawFlashVars: true,
                  contentLocale: contentLocale,
                  //testingruntime: "live",
                  userId: "0",
                  exerciseJsonUrlParams: [gId, aId, eNr].join(","),
                  hideCloseButtons: "false",
                  seriesMode: "true",
                  sendAttemptStepReports: "false",
                  trash_train: "[]",
                  mode: "exercise",
                  autoStart: "true",
                  release: 6,
                  exerciseStartMode: 'start',
                  exerciseId: exerciseId
                };
            }

            function showPreview() {
                ExercisePreviewService.getTodoPreview($scope.groupId, $scope.assignmentId).then(function (data) {
                    var preview_list = ExercisePreviewService.mapToStaticServer(data.preview_list);
                    $scope.previewSrc = preview_list[($scope.exerciseNr - 1)];
                });
            }
        }])

        .directive('singleExercisePreview', function() {
            return {
              templateUrl: 'modalBubbleModule/partials/singleExercisePreview.tpl.html',
              restrict: 'EA',
              replace: false,
              transclude: false,
              scope: {
                groupId: '@',
                assignmentId: '@',
                exerciseNr: '@'
              },
              controller: 'SingleExercisePreviewController'
            };
          })

        .controller('SingleExercisePreviewController', ["$scope", "BMEvents", "ExercisePreviewService", function($scope, BMEvents, ExercisePreviewService) {
            ExercisePreviewService.getTodoPreview($scope.groupId, $scope.assignmentId).then(function(data) {
                var preview_list = ExercisePreviewService.mapToStaticServer(data.preview_list);
                $scope.previewSrc = preview_list[($scope.exerciseNr - 1)];
                $scope.$broadcast(BMEvents.ModalDialog.recalculateStyles);
            });
        }])

        .directive('folderOptionsBubble', function(){
            return {
                templateUrl: 'modalBubbleModule/partials/worksheetFolderOptionsBubble.tpl.html',
                restrict: 'A',
                replace: true,
                transclude: false,
                controller: 'FolderOptionsController'
            };
        })

        .controller('FolderOptionsController', ["$scope", "$rootScope", "BMEvents", function ($scope, $rootScope, BMEvents) {
            $rootScope.closeFolderOptionsBubble = closeFolderOptionsBubble;
            $scope.folderOptionsBubble = folderOptionsBubble;

            function folderOptionsBubble(folderId, folderName, $event) {
                $scope.clickedFolder = {
                    'id': folderId,
                    'name': folderName
                };
                $scope.clickedFolderName = folderName;
                $scope.bubbleId = "folder-options-" + folderId;
                $scope.showFolderOptionsBubble = true;
                $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, $scope.bubbleId);

                var currElement = angular.element($event.currentTarget);
                setExportStyles(angular.element(currElement));
            }

            function closeFolderOptionsBubble() {
                $scope.bubbleId = undefined;
                $scope.showFolderOptionsBubble = false;
                $scope.clickedFolder = undefined;
            }

            function setExportStyles(openerElement) {
                // hard-coded static styles
                var BOX_WIDTH = 220;
                var BOX_LEFT = 8;
                var BOX_HEIGHT = 120;
                var NAVIGATION_BAR_HEIGHT = 60;
                var SPACING = 2;

                // calculation top
                var FOLDER_LIST_CONTAINER_HEIGHT = openerElement.parent().parent().height();

                var bubbleTop = openerElement.offset().top -
                    NAVIGATION_BAR_HEIGHT +
                    openerElement.outerHeight() +
                    SPACING
                ;

                if (bubbleTop + BOX_HEIGHT > FOLDER_LIST_CONTAINER_HEIGHT) {
                    bubbleTop = Math.max(
                        openerElement.offset().top - NAVIGATION_BAR_HEIGHT - BOX_HEIGHT - SPACING,
                        0
                    );
                }

                $scope.exportStyle = {
                    width: BOX_WIDTH + 'px',
                    top: bubbleTop + 'px',
                    left: BOX_LEFT + 'px'
                };
            }

            $scope.$on(BMEvents.AnyBubble.openAnyBubble, function(event, bubbleId) {
                // dont do anything if broadcasted the event myself in exportWorksheetBubble
                if ($scope.bubbleId !== bubbleId) {
                    $scope.showFolderOptionsBubble = false;
                }
            });
        }])

        .directive('moveFolderBubble', function () {
            return {
                templateUrl: 'modalBubbleModule/partials/moveFolderBubble.tpl.html',
                restrict: 'A',
                replace: false,
                transclude: false,
                controller: 'MoveFolderBubbleController'
            };
        })

        .directive('assignChapterBubble', function () {
            return {
                templateUrl: 'modalBubbleModule/partials/assignChapter.tpl.html',
                restrict: 'A',
                replace: true,
                transclude: false,
                controller: 'AssignChapterOptionsController'
            };
        })

        .controller('AssignChapterOptionsController', ["$scope", "$rootScope", "BookContentService", "BMEvents", function (
            $scope, $rootScope, BookContentService, BMEvents
        ) {
            $scope.assignChapterBubble = assignChapterBubble;
            $scope.assignChapterOptionsBubbleId = "assign-chapter-options-" + $scope.chapter.id;
            $scope.assignChapter = BookContentService.assignChapter;
            $scope.isChapterFullySelected = BookContentService.isChapterFullySelected;

            function assignChapterBubble(chapter, $event) {
                $rootScope.$broadcast(BMEvents.AnyBubble.openAnyBubble, $scope.assignChapterOptionsBubbleId);

                var currElement = angular.element($event.currentTarget);

                if (chapter.showAssignChapterBubble === false) {
                    setExportStyles(angular.element(currElement));
                }
                setExportStyles(angular.element(currElement));

                chapter.showAssignChapterBubble = !chapter.showAssignChapterBubble;
            }

            $scope.$on(BMEvents.AnyBubble.openAnyBubble, function (event, assignChapterOptionsBubbleId) {
                // dont do anything if broadcasted the event myself in assignChapterBubble
                if ($scope.assignChapterOptionsBubbleId !== assignChapterOptionsBubbleId) {
                    $scope.chapter.showAssignChapterBubble = false;
                }
            });

            function setExportStyles(openerElement) {
                // Constants for left
                var boxWidth = 220; // hardcoded;

                // calculation left
                var boxOffsetLeft = openerElement.prop('offsetLeft');
                var bubbleLeft = Math.floor(boxOffsetLeft - (boxWidth + 10));
                bubbleLeft = bubbleLeft < 2 ? 2 : bubbleLeft;

                // Constants for top
                var BOX_HEADER_HEIGHT = 45;
                var BOX_ITEM_HEIGHT = 39;

                // Sum of height horizontal sub-menu Books & Selection toolbar
                var TOP_OFFSET = 95;
                var boxHeight = BOX_HEADER_HEIGHT + BOX_ITEM_HEIGHT;
                var currentScrollPosition = openerElement.scrollParent().scrollTop();

                // calculation top
                var idealPos = openerElement.offset().top  + openerElement.height() - boxHeight / 2 - TOP_OFFSET;
                idealPos += currentScrollPosition;
                $scope.exportStyle = {
                    width: boxWidth + 'px',
                    top: idealPos + 'px',
                    left: bubbleLeft + 'px'
                };
            }
        }])
    ;
})(angular);
