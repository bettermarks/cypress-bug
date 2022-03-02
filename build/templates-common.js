angular.module('templates-common', ['activitiesModule/partials/activitiesContainer.tpl.html', 'activitiesModule/partials/activitiesListGroup.tpl.html', 'activitiesModule/partials/activitiesListStudent.tpl.html', 'activitiesModule/partials/activitiesListStudentForTeacher.tpl.html', 'activitiesModule/partials/activitiesListStudentItem.tpl.html', 'activitiesModule/partials/activitiesListStudentItemNew.tpl.html', 'activitiesModule/partials/activityDetails.tpl.html', 'activitiesModule/partials/studentSchoolyearReport.tpl.html', 'bookModule/partials/bookButtons.tpl.html', 'bookModule/partials/bookContentChapterTasks.tpl.html', 'bookModule/partials/bookFlatContent.tpl.html', 'bookModule/partials/bookFlatContentChapterTasks.tpl.html', 'bookModule/partials/bookFlatToc.tpl.html', 'bookModule/partials/bookListFilter.tpl.html', 'bookModule/partials/bookListItem.tpl.html', 'bookModule/partials/bookListSearch.tpl.html', 'bookModule/partials/bookStaticContent.tpl.html', 'bookModule/partials/bookTestElement.tpl.html', 'bookModule/partials/bookTypeList.tpl.html', 'bookModule/partials/chapterTasks.tpl.html', 'bookModule/partials/femElement.tpl.html', 'bookModule/partials/groupBookList.tpl.html', 'bookModule/partials/groupBookListEmpty.tpl.html', 'bookModule/partials/groupSelect.tpl.html', 'bookModule/partials/itemChapterTasks.tpl.html', 'bookModule/partials/libraryBookList.tpl.html', 'bookModule/partials/listSearchShowy.tpl.html', 'bookModule/partials/moduleContent.tpl.html', 'bookModule/partials/moduleContentTile.tpl.html', 'bookModule/partials/moduleFollowUpBooks.tpl.html', 'bookModule/partials/pagination.tpl.html', 'bookModule/partials/preknowledgeElement.tpl.html', 'bookModule/partials/studentPrivateBookList.tpl.html', 'bookModule/partials/studentSchoolBookList.tpl.html', 'dashboardModule/partials/activities.tpl.html', 'dashboardModule/partials/completedExercises.tpl.html', 'dashboardModule/partials/dashboard.tpl.html', 'dashboardModule/partials/dashboardEmpty.tpl.html', 'dashboardModule/partials/hotspotExercises.tpl.html', 'dashboardModule/partials/knowledgeGaps.tpl.html', 'dashboardModule/partials/performanceReport.tpl.html', 'dashboardModule/partials/ranking.tpl.html', 'dashboardModule/partials/studiekring-report.tpl.html', 'dashboardModule/partials/todos.tpl.html', 'dashboardModule/partials/widgetsWrap.tpl.html', 'directives/partials/contentHeader.tpl.html', 'directives/partials/datepicker.tpl.html', 'directives/partials/datepickerRange.tpl.html', 'directives/partials/donutChartSVG.tpl.html', 'directives/partials/exercisePoints.tpl.html', 'directives/partials/formItem.tpl.html', 'directives/partials/languageFilter.tpl.html', 'directives/partials/lightbox.tpl.html', 'directives/partials/navigation.tpl.html', 'directives/partials/radioBubble.tpl.html', 'directives/partials/simpleListItem.tpl.html', 'directives/partials/speechBubble.tpl.html', 'directives/partials/worksheetListItem.tpl.html', 'googleMapsModule/partials/gmSchoolSearch.tpl.html', 'groupManager/partials/groupMemberPassword.tpl.html', 'groupManager/partials/groupMembers.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapDeletion.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsFilter.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsGroupClosed.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsGroupOpen.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsListGroup.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsListGroupReporting.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsListStudent.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsListStudentReporting.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsStudentClosed.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapsStudentOpen.tpl.html', 'knowledgeGapsModule/partials/knowledgeGapTask.tpl.html', 'knowledgeGapsModule/partials/studentKnowledgeGapsList.tpl.html', 'legalTextsModule/partials/feedback.tpl.html', 'legalTextsModule/partials/legalTexts.tpl.html', 'modalBubbleModule/partials/assignChapter.tpl.html', 'modalBubbleModule/partials/download-kem.tpl.html', 'modalBubbleModule/partials/exerciseOptionsBubble.tpl.html', 'modalBubbleModule/partials/exercisePreview.tpl.html', 'modalBubbleModule/partials/exportWorksheetBubble.tpl.html', 'modalBubbleModule/partials/modalBubble.tpl.html', 'modalBubbleModule/partials/moveFolderBubble.tpl.html', 'modalBubbleModule/partials/singleExercisePreview.tpl.html', 'modalBubbleModule/partials/studentListBubble.tpl.html', 'modalBubbleModule/partials/todoParticipantBubble.tpl.html', 'modalBubbleModule/partials/view-kem.tpl.html', 'modalBubbleModule/partials/worksheetFolderOptionsBubble.tpl.html', 'modalBubbleModule/partials/worksheetOptionsBubble.tpl.html', 'partials/oneCol.tpl.html', 'partials/twoCol.tpl.html', 'pdfDownloadModule/partials/pdfItem.tpl.html', 'pdfDownloadModule/partials/pdfList.tpl.html', 'rankingModule/partials/rankingList.tpl.html', 'teacherSettingsModule/partials/main.tpl.html', 'todosModule/partials/groupTodo.tpl.html', 'todosModule/partials/studentTodo.tpl.html', 'todosModule/partials/todoDetails.tpl.html', 'todosModule/partials/todosList.tpl.html', 'todosModule/partials/todoTask.tpl.html', 'userClassManagementModule/partials/teacherVerification.tpl.html', 'userClassManagementModule/partials/ucmMain.tpl.html', 'worksheetModule/partials/assignItemDate.tpl.html', 'worksheetModule/partials/assignItemGroup.tpl.html', 'worksheetModule/partials/assignItemOptions.tpl.html', 'worksheetModule/partials/assignItemStudents.tpl.html', 'worksheetModule/partials/assignWorksheet.tpl.html', 'worksheetModule/partials/folderWorksheetList.tpl.html', 'worksheetModule/partials/learningTargetFilter.tpl.html', 'worksheetModule/partials/manageWorksheets.tpl.html', 'worksheetModule/partials/optionsBubble.tpl.html', 'worksheetModule/partials/worksheetExercisePreview.tpl.html', 'worksheetModule/partials/worksheetGenerator.tpl.html', 'worksheetModule/partials/worksheetList.tpl.html', 'worksheetModule/partials/worksheetListDefault.tpl.html', 'worksheetModule/partials/worksheetPlaylistImport.tpl.html']);

angular.module("activitiesModule/partials/activitiesContainer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesContainer.tpl.html",
    "<div ui-view=\"group\"></div>\n" +
    "<div ui-view=\"student\"></div>");
}]);

angular.module("activitiesModule/partials/activitiesListGroup.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesListGroup.tpl.html",
    "<div ng-if=\"!navigationStates.currentStudentId\"\n" +
    "     class=\"infinite-scroll-wrap\"\n" +
    "     lr-infinite-scroll=\"loadMoreActivities\"\n" +
    "     time-threshold=\"10\"\n" +
    "     scroll-threshold=\"250\">\n" +
    "    <div class=\"filter\">\n" +
    "        <div ng-if=\"!toggles.devTodoNavi\" class=\"activitiesFilter filter-links\">\n" +
    "            <a class=\"link-round-corners-prefix\" translate=\"jsapp.navigation.activitiesfilter.prefix\"></a>\n" +
    "            <a class=\"link-round-corners lrc-view\"\n" +
    "               ng-click=\"navigationStates.activitiesFilter = 'all'\"\n" +
    "               id=\"filter-all\"\n" +
    "               ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'all'}\"><span\n" +
    "                    translate=\"jsapp.navigation.activitiesfilter.all\"></span></a>\n" +
    "            <a class=\"link-round-corners lrc-view\"\n" +
    "               ng-click=\"navigationStates.activitiesFilter = 'book'\"\n" +
    "               id=\"filter-book\"\n" +
    "               ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'book'}\"><i\n" +
    "                    class=\"fa fa-book\"></i><span translate=\"jsapp.navigation.activitiesfilter.books\"></span></a>\n" +
    "            <a class=\"link-round-corners lrc-view\"\n" +
    "               ng-click=\"navigationStates.activitiesFilter = 'gap'\"\n" +
    "               id=\"filter-gap\"\n" +
    "               ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'gap'}\"><i\n" +
    "                    class=\"fa fa-puzzle-piece\"></i><span translate=\"jsapp.navigation.activitiesfilter.gaps\"></span></a>\n" +
    "            <a class=\"link-round-corners lrc-view\"\n" +
    "               ng-click=\"navigationStates.activitiesFilter = 'todo'\"\n" +
    "               id=\"filter-todo\"\n" +
    "               ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'todo'}\"><i\n" +
    "                    class=\"fa fa-exclamation-circle\"></i><span\n" +
    "                    translate=\"jsapp.navigation.activitiesfilter.todos\"></span></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <h2 ng-if=\"toggles.devTodoNavi\" class=\"headline reporting-headline\"\n" +
    "            translate=\"jsapp.teacher.reporting.bookActivities\"></h2>\n" +
    "\n" +
    "        <select ng-model=\"filter.currentFilter\"\n" +
    "                ng-class=\"{'reporting-timespan-select': toggles.devTodoNavi}\"\n" +
    "                ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "        </select>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"bm-task-list activity-list-group\" ng-class=\"{list: toggles.devTodoNavi}\">\n" +
    "        <div class=\"tasks\" ng-if=\"activities[navigationStates.activitiesFilter].length\">\n" +
    "            <ul>\n" +
    "                <li ng-if=\"toggles.devTodoNavi && activitiesSlice[navigationStates.activitiesFilter].items.length\">\n" +
    "                    <div class=\"header-row\">\n" +
    "                        <div class=\"col col-date col-light\" translate=\"jsapp.activities.activityDate\"></div>\n" +
    "                        <div class=\"col col-name col-light\" translate=\"jsapp.activities.activityTitle\"></div>\n" +
    "                        <div class=\"col col-students\"></div>\n" +
    "                        <div class=\"col col-action-delete\"></div>\n" +
    "                        <div class=\"col col-action-details\"></div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!toggles.devTodoNavi\"\n" +
    "                    bindonce\n" +
    "                    ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items\"\n" +
    "                    class=\"task activity-{{ activity.type }}\">\n" +
    "                    <div class=\"task-icon icon fa\"></div>\n" +
    "                    <div class=\"task-name full-width>\n" +
    "                        <span ng-if=\"activity.full_caption && (activity.type === 'book' || activity.type === 'todo')\"\n" +
    "                                >{{ activity.full_caption }}</span>\n" +
    "                        <span ng-bind=\"::activity.name\"></span><br/>\n" +
    "                        <span class=\"book-name\"\n" +
    "                              ng-if=\"(activity.type === 'book' || activity.type === 'todo') && activity.book_name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "                        <span class=\"book-name\"\n" +
    "                              ng-if=\"(activity.type === 'book' || activity.type === 'todo') && activity.book_name\"\n" +
    "                              ng-bind=\"::activity.book_name\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-students\">\n" +
    "                        <div ng-click=\"toggleModal($event)\"\n" +
    "                             ng-class=\"{'student-bubble-trigger': true, 'active': opener.active}\"\n" +
    "                             class=\"task-todo\">\n" +
    "\n" +
    "                             <a class=\"nowrap\">\n" +
    "                                <i class=\"fa fa-user\"></i>\n" +
    "                                <span ng-bind=\"::activity.student_ids.length\"></span>\n" +
    "                             </a>\n" +
    "\n" +
    "                            <div modal-bubble css-class=\"student-list-bubble\" box-width=\"200\" box-type=\"small\"\n" +
    "                                 dynamic-height=\"true\" title=\"{{ 'jsapp.general.participants' | translate }}\">\n" +
    "                                <div class=\"subcontainer\" ng-if=\"modal.open\" student-list-bubble student-list-done=\"[]\"\n" +
    "                                     student-list-all=\"activity.student_ids\"\n" +
    "                                     group-id=\"navigationStates.currentGroupId\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li ng-if=\"toggles.devTodoNavi\"\n" +
    "                    bindonce\n" +
    "                    ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items\"\n" +
    "                    class=\"activity-book\">\n" +
    "                    <div class=\"col col-date\">{{ activity.date | date:'dd.MM.yyyy'}}</div>\n" +
    "                    <div class=\"col col-name col-name-middle\">\n" +
    "                        <span ng-if=\"activity.full_caption\"\n" +
    "                                >{{ activity.full_caption }}</span>\n" +
    "                        <span ng-bind=\"::activity.name\"></span><br/>\n" +
    "                        <span class=\"book-name\"\n" +
    "                              ng-if=\"activity.book_name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "                        <span class=\"book-name\"\n" +
    "                              ng-if=\"activity.book_name\"\n" +
    "                              ng-bind=\"::activity.book_name\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-students\">\n" +
    "                        <div ng-click=\"toggleModal($event)\"\n" +
    "                             id=\"activity-{{ $index }}\"\n" +
    "                             ng-class=\"{'student-bubble-trigger': true, 'active': opener.active === ('activity-' + $index )}\">\n" +
    "                            <i class=\"fa fa-user\"></i>\n" +
    "                            <span ng-bind=\"::(activity.user_results | objectsize)\"></span>\n" +
    "\n" +
    "                            <div modal-bubble\n" +
    "                                 css-class=\"student-list-bubble percentage-bubble\"\n" +
    "                                 box-width=\"300\"\n" +
    "                                 box-type=\"small\"\n" +
    "                                 dynamic-height=\"true\"\n" +
    "                                 title=\"{{ 'jsapp.general.activeStudents' | translate }}\">\n" +
    "                                <div class=\"subcontainer\" ng-if=\"modal.open\" student-list-bubble\n" +
    "                                     student-list-done=\"[]\"\n" +
    "                                     student-list-all=\"'user_results'\"\n" +
    "                                     user-results=\"activity.user_results\"\n" +
    "                                     group-id=\"navigationStates.currentGroupId\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-actions\">\n" +
    "                        <a open-activity-detail-reporting\n" +
    "                           class=\"fa fa-angle-right task-todo show-details-button bm-list-icon\"\n" +
    "                           ng-mousedown=\"lastTodo.id=false;clickedItem.id=0;\"></a>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\"\n" +
    "             ng-if=\"!pendingRequests && !activities[navigationStates.activitiesFilter].length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noActivitiesHint}}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{noActivitiesHintSubInfo}}\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a ng-click=\"loadMoreActivities()\"\n" +
    "       ng-show=\"activitiesSlice[navigationStates.activitiesFilter].items.length < activities[navigationStates.activitiesFilter].length\"\n" +
    "       class=\"button load-more-button bt-view\"\n" +
    "       translate=\"jsapp.general.more\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("activitiesModule/partials/activitiesListStudent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesListStudent.tpl.html",
    "<div ng-if=\"navigationStates.currentStudentId\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreActivities\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"activity-list-student\">\n" +
    "        <div class=\"filter\">\n" +
    "            <div class=\"activitiesFilter filter-links\">\n" +
    "                <a class=\"link-round-corners-prefix\" translate=\"jsapp.navigation.activitiesfilter.prefix\"></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'all'\"\n" +
    "                   id=\"filter-all\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'all'}\">\n" +
    "                    <span translate=\"jsapp.navigation.activitiesfilter.all\"></span>\n" +
    "                </a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'book'\"\n" +
    "                   id=\"filter-book\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'book'}\"><i\n" +
    "                        class=\"fa fa-book\"></i><span translate=\"jsapp.navigation.activitiesfilter.books\"></span></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'gap'\"\n" +
    "                   id=\"filter-gap\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'gap'}\"><i\n" +
    "                        class=\"fa fa-puzzle-piece\"></i><span translate=\"jsapp.navigation.activitiesfilter.gaps\"></span></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'todo'\"\n" +
    "                   id=\"filter-todo\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'todo'}\"><i\n" +
    "                        class=\"fa fa-exclamation-circle\"></i><span\n" +
    "                        translate=\"jsapp.navigation.activitiesfilter.todos\"></span></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"bm-task-list activity-list-student\">\n" +
    "            <div class=\"tasks\" ng-if=\"activities[navigationStates.activitiesFilter].length\">\n" +
    "                <ul bindonce>\n" +
    "                    <li activities-list-student-item-for-student\n" +
    "                        ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items | stillReviewable\"></li>\n" +
    "                </ul>\n" +
    "\n" +
    "                <ng ng-if=\"(activitiesSlice[navigationStates.activitiesFilter].items | noLongerReviewable).length\">\n" +
    "                    <div class=\"task-list-separator\">\n" +
    "                        <span translate=\"jsapp.reporting.olderThan\"></span>\n" +
    "                        <span translate=\"jsapp.reporting.olderThanTimePeriod\"></span>\n" +
    "                    </div>\n" +
    "                    <ul bindonce>\n" +
    "                        <li activities-list-student-item-for-student no-results=\"true\"\n" +
    "                            ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items | noLongerReviewable\"></li>\n" +
    "                    </ul>\n" +
    "                </ng>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"missing-data-container\"\n" +
    "                 ng-if=\"!pendingRequests && !activities[navigationStates.activitiesFilter].length && activities.school_year.length === 0 && (navigationStates.activitiesFilter !== 'all' || !hasSchoolyearReport)\">\n" +
    "                <div class=\"missing-data-hint\" translate=\"{{noActivitiesHint}}\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreActivities()\"\n" +
    "           ng-show=\"activitiesSlice[navigationStates.activitiesFilter].items.length < activities[navigationStates.activitiesFilter].length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "    <div student-schoolyear-report\n" +
    "         ng-if=\"navigationStates.activitiesFilter === 'all' && activitiesSlice[navigationStates.activitiesFilter].items.length >= activities[navigationStates.activitiesFilter].length\"\n" +
    "         ></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("activitiesModule/partials/activitiesListStudentForTeacher.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesListStudentForTeacher.tpl.html",
    "<div ng-if=\"navigationStates.currentStudentId\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreActivities\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"activity-list-student\">\n" +
    "        <div class=\"filter\">\n" +
    "            <div ng-if=\"!toggles.devTodoNavi\" class=\"activitiesFilter filter-links\">\n" +
    "                <a class=\"link-round-corners-prefix\" translate=\"jsapp.navigation.activitiesfilter.prefix\"></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'all'\"\n" +
    "                   id=\"filter-all\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'all'}\">\n" +
    "                    <span translate=\"jsapp.navigation.activitiesfilter.all\"></span>\n" +
    "                </a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'book'\"\n" +
    "                   id=\"filter-book\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'book'}\"><i\n" +
    "                        class=\"fa fa-book\"></i><span translate=\"jsapp.navigation.activitiesfilter.books\"></span></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'gap'\"\n" +
    "                   id=\"filter-gap\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'gap'}\"><i\n" +
    "                        class=\"fa fa-puzzle-piece\"></i><span translate=\"jsapp.navigation.activitiesfilter.gaps\"></span></a>\n" +
    "                <a class=\"link-round-corners lrc-view\"\n" +
    "                   ng-click=\"navigationStates.activitiesFilter = 'todo'\"\n" +
    "                   id=\"filter-todo\"\n" +
    "                   ng-class=\"{'link-round-corners-active': navigationStates.activitiesFilter === 'todo'}\"><i\n" +
    "                        class=\"fa fa-exclamation-circle\"></i><span\n" +
    "                        translate=\"jsapp.navigation.activitiesfilter.todos\"></span></a>\n" +
    "            </div>\n" +
    "            <h2 ng-if=\"toggles.devTodoNavi\" class=\"headline reporting-headline\"\n" +
    "                translate=\"jsapp.teacher.reporting.bookActivities\"></h2>\n" +
    "\n" +
    "            <select ng-if=\"toggles.devTodoNavi\"\n" +
    "                    ng-model=\"filter.currentFilter\"\n" +
    "                    ng-class=\"{'reporting-timespan-select': toggles.devTodoNavi}\"\n" +
    "                    ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "            </select>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"bm-task-list activity-list-student\" ng-class=\"{list: toggles.devTodoNavi}\">\n" +
    "            <div class=\"tasks\" ng-if=\"activities[navigationStates.activitiesFilter].length\">\n" +
    "                <ul bindonce>\n" +
    "                    <li ng-if=\"toggles.devTodoNavi\">\n" +
    "                        <div class=\"header-row\">\n" +
    "                            <div class=\"col col-date col-light\" translate=\"jsapp.activities.activityDate\"></div>\n" +
    "                            <div class=\"col col-star\"></div>\n" +
    "                            <div class=\"col col-name col-light\" translate=\"jsapp.activities.activityTitle\"></div>\n" +
    "                            <div class=\"col col-activity-result-teacher\" translate=\"jsapp.todo.bestResult\"></div>\n" +
    "                            <div class=\"col col-actions\"></div>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li activities-list-student-item\n" +
    "                        ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items | stillReviewable\"></li>\n" +
    "                </ul>\n" +
    "\n" +
    "                <ng ng-if=\"(activitiesSlice[navigationStates.activitiesFilter].items | noLongerReviewable).length\">\n" +
    "                    <div class=\"task-list-separator\">\n" +
    "                        <span translate=\"jsapp.reporting.olderThan\"> </span>\n" +
    "                        <span translate=\"jsapp.reporting.olderThanTimePeriod\"></span>\n" +
    "                    </div>\n" +
    "                    <ul bindonce>\n" +
    "                        <li activities-list-student-item no-results=\"true\"\n" +
    "                            ng-repeat=\"activity in activitiesSlice[navigationStates.activitiesFilter].items | noLongerReviewable\"></li>\n" +
    "                    </ul>\n" +
    "                </ng>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"missing-data-container\"\n" +
    "                 ng-if=\"!pendingRequests && !activities[navigationStates.activitiesFilter].length && activities.school_year.length === 0\">\n" +
    "                <div class=\"missing-data-hint\" translate=\"{{noActivitiesHint}}\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreActivities()\"\n" +
    "           ng-show=\"activitiesSlice[navigationStates.activitiesFilter].items.length < activities[navigationStates.activitiesFilter].length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("activitiesModule/partials/activitiesListStudentItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesListStudentItem.tpl.html",
    "<li class=\"task activity-{{ activity.type }}\"\n" +
    "    ng-class=\"{'task-small-container': isSmallScreen,'current-item': lastReview.id && lastReview.id === activity.series_id, 'current-item-clicked': activity.series_id === clickedItem.id}\"\n" +
    "    scroll-if=\"{{ $index === (activitiesSlice[navigationStates.activitiesFilter].items.length - 1) && (lastReview.id !== false) }}\"\n" +
    "    scroll-type=\"item\">\n" +
    "    <div ng-if-start=\"!isSmallScreen\" class=\"task-cell task-number task-date\">\n" +
    "        <span>{{ activity.date | date:'dd.MM.yyyy'}}</span></div>\n" +
    "    <div class=\"task-cell task-icon icon fa\"></div>\n" +
    "    <div class=\"task-cell task-name\">\n" +
    "        <span\n" +
    "            ng-if=\"activity.full_caption && (activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo')\">{{ activity.full_caption }}</span>\n" +
    "        <span ng-bind=\"::activity.name\"></span><br />\n" +
    "        <span class=\"book-name\"\n" +
    "            ng-if=\"(activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo') && activity.book_name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "        <span class=\"book-name\"\n" +
    "            ng-if=\"(activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo') && activity.book_name\"\n" +
    "            ng-bind=\"::activity.book_name\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"activity-result task-cell\">\n" +
    "        <div ng-if=\"isTeacher\" class=\"exercise-percentage\">{{ activity.success_percentage | number:0 }}%</div>\n" +
    "\n" +
    "        <div bm-check-authorization ng-if=\"isStudent\">\n" +
    "            <div bm-exercise-points points=\"activity.points\" ng-if=\"activity.show_results\"></div>\n" +
    "            <div ng-if=\"!activity.show_results\" class=\"bm-check-mark bf bf-check-medium\"></div>\n" +
    "        </div>\n" +
    "        <bm-authorization-button bm-check-authorization=\"!\"></bm-authorization-button>\n" +
    "    </div>\n" +
    "    <div bm-check-authorization ng-if=\"isTeacher || activity.show_results\" class=\"task-coins\"\n" +
    "        ng-class=\"{'single-coin': activity.type === 'knowledge_gap'}\" success-coins-or-star success-type=\"coins-or-star\"\n" +
    "        success-context=\"studentActivities\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"isStudent && !activity.show_results\" class=\"task-noShow\">\n" +
    "        <a href id=\"activity-noResult-{{activity.series_id}}\" ng-click=\"showBubble()\">\n" +
    "            <span class=\"bf bf-question-circle-o\"></span>\n" +
    "        </a>\n" +
    "        <div bm-balloon orientation=\"left\" show=\"showResults.showBubble\"\n" +
    "            title-key=\"jsapp.student.assignment.noShowResult.title\"\n" +
    "            link-element=\"activity-noResult-{{activity.series_id}}\" selection-style=\"active\" class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.student.assignment.noShowResult.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if-end class=\"task-todos task-review\">\n" +
    "        <a bm-check-authorization ng-if=\"!noResults && activity.show_results\" class=\"task-todo bm-list-icon\"\n" +
    "            class=\"bm-list-icon\"\n" +
    "            ng-mousedown=\"lastReview.id=false;clickedItem.id=activity.series_id;\" open-worksheet\n" +
    "            worksheet-params=\"{series_id: activity.series_id, exerciseStartMode: 'review', studentId: navigationStates.currentStudentId, flashFree: activity.flash_free}\"><i\n" +
    "                class=\"bf bf-detail-input\"></i></a>\n" +
    "        <a ng-if=\"!noResults && !activity.show_results\" class=\"task-todo no-result bm-list-icon\"><i\n" +
    "                class=\"bf bf-detail-input\"></i></a>\n" +
    "        <a ng-if=\"noResults\" class=\"task-todo no-result bm-list-icon\"><i class=\"bf bf-detail-input\"></i></a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--else-->\n" +
    "\n" +
    "    <div ng-if-start=\"isSmallScreen\" class=\"task-cell task-icon icon fa\"></div>\n" +
    "    <div class=\"task-cell task-name\">\n" +
    "        <div class=\"task-cell task-number task-date\"><span>{{ activity.date | date:'dd.MM.yyyy'}}</span></div>\n" +
    "\n" +
    "        <span\n" +
    "            ng-if=\"activity.full_caption && (activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo')\">{{ activity.full_caption }}\n" +
    "        </span>\n" +
    "        <span ng-bind=\"::activity.name\"></span>\n" +
    "        <br>\n" +
    "        <span class=\"book-name\"\n" +
    "            ng-if=\"(activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo') && activity.book_name\">{{ 'jsapp.general.book' | translate }}\n" +
    "            <span class=\"book-name\"\n" +
    "                ng-if=\"(activity.type === 'book' || activity.type === 'private_book' || activity.type === 'todo') && activity.book_name\"\n" +
    "                ng-bind=\"::activity.book_name\"></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"task-cell\">\n" +
    "        <div class=\"task-mark\">\n" +
    "            <div bm-check-authorization ng-if=\"isTeacher || activity.show_results\" class=\"task-coins\"\n" +
    "                ng-class=\"{'single-coin': activity.type === 'knowledge_gap'}\" success-coins-or-star\n" +
    "                success-type=\"coins-or-star\" success-context=\"studentActivities\">\n" +
    "            </div>\n" +
    "            <div class=\"activity-result task-cell\">\n" +
    "                <div ng-if=\"isTeacher\" class=\"exercise-percentage\">{{ activity.success_percentage | number:0 }}%</div>\n" +
    "\n" +
    "                <div bm-check-authorization ng-if=\"isStudent\">\n" +
    "                    <div bm-exercise-points points=\"activity.points\" ng-if=\"activity.show_results\"></div>\n" +
    "                    <div ng-if=\"!activity.show_results\" class=\"bm-check-mark bf bf-check-medium\"></div>\n" +
    "                </div>\n" +
    "                <bm-authorization-button bm-check-authorization=\"!\"></bm-authorization-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"isStudent && !activity.show_results\" class=\"task-noShow\">\n" +
    "        <a href id=\"activity-noResult-{{activity.series_id}}\" ng-click=\"showBubble()\">\n" +
    "            <span class=\"bf bf-question-circle-o\"></span>\n" +
    "        </a>\n" +
    "        <div bm-balloon orientation=\"left\" show=\"showResults.showBubble\"\n" +
    "            title-key=\"jsapp.student.assignment.noShowResult.title\"\n" +
    "            link-element=\"activity-noResult-{{activity.series_id}}\" selection-style=\"active\" class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.student.assignment.noShowResult.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if-end class=\"task-todos task-review\">\n" +
    "        <a bm-check-authorization ng-if=\"!noResults && activity.show_results\" class=\"task-todo bm-list-icon\"\n" +
    "            class=\"bm-list-icon\"\n" +
    "            ng-mousedown=\"lastReview.id=false;clickedItem.id=activity.series_id;\" open-worksheet\n" +
    "            worksheet-params=\"{series_id: activity.series_id, exerciseStartMode: 'review', studentId: navigationStates.currentStudentId, flashFree: activity.flash_free}\"><i\n" +
    "                class=\"bf bf-detail-input\"></i></a>\n" +
    "        <a ng-if=\"!noResults && !activity.show_results\" class=\"task-todo no-result bm-list-icon\"><i\n" +
    "                class=\"bf bf-detail-input\"></i></a>\n" +
    "        <a ng-if=\"noResults\" class=\"task-todo no-result bm-list-icon\"><i class=\"bf bf-detail-input\"></i></a>\n" +
    "    </div>\n" +
    "</li>\n" +
    "");
}]);

angular.module("activitiesModule/partials/activitiesListStudentItemNew.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activitiesListStudentItemNew.tpl.html",
    "<li class=\"activity-book\">\n" +
    "    <div class=\"col col-date\">{{ activity.date | date:'dd.MM.yyyy'}}</div>\n" +
    "\n" +
    "    <div class=\"col col-star\" success-star success-type=\"star\"\n" +
    "         success-context=\"studentBookActivities\"></div>\n" +
    "    <div class=\"col col-name col-name-middle\">\n" +
    "        <span ng-if=\"activity.full_caption\"\n" +
    "                >{{ activity.full_caption }}</span>\n" +
    "        <span ng-bind=\"::activity.name\"></span><br/>\n" +
    "        <span class=\"book-name\"\n" +
    "              ng-if=\"activity.book_name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "        <span class=\"book-name\"\n" +
    "              ng-if=\"activity.book_name\"\n" +
    "              ng-bind=\"::activity.book_name\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"col col-activity-result-teacher\">\n" +
    "        <div class=\"exercise-percentage\" ng-class=\"{'color-success': activity.user_results.coins != '0' || activity.user_results.stars != '0', 'color-error': activity.user_results.coins == '0' && activity.user_results.stars == '0'}\">\n" +
    "            {{ activity.user_results.success_percentage | number:0 }}%\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col col-actions\">\n" +
    "        <a open-activity-detail-reporting\n" +
    "           class=\"fa fa-angle-right task-todo show-details-button bm-list-icon\"\n" +
    "           ng-mousedown=\"lastTodo.id=false;clickedItem.id=0;\"></a>\n" +
    "    </div>\n" +
    "</li>\n" +
    "");
}]);

angular.module("activitiesModule/partials/activityDetails.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/activityDetails.tpl.html",
    "<!-- groupActivityDetails -->\n" +
    "<div ng-if=\"groupActivityDetails && navigationStates.activityDetails === 'group'\">\n" +
    "    <h2 class=\"headline small\"><span class=\"space-after\" ng-if=\"groupActivityDetails.full_caption\"\n" +
    "                                     ng-bind=\"::groupActivityDetails.full_caption\"></span><span\n" +
    "            ng-bind=\"::groupActivityDetails.name\"></span></h2>\n" +
    "\n" +
    "    <h3 class=\"sub-headline\" ng-if=\"groupActivityDetails.book_name\">\n" +
    "        <span class=\"book-name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "        <span class=\"book-name\" ng-bind=\"::groupActivityDetails.book_name\"></span>\n" +
    "    </h3>\n" +
    "\n" +
    "    <h3 class=\"sub-headline\">\n" +
    "        <span translate=\"jsapp.teacher.lastActivityDate\"></span>: <span>{{ groupActivityDetails.date | date:'dd.MM.yyyy' }}</span>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div class=\"content-padding todo-reporting-header\" ng-if=\"groupActivityDetails.parsedResults.length\">\n" +
    "        <span class=\"todo-reporting-head\" translate>jsapp.teacher.activeResults</span>:\n" +
    "        <span class=\"todo-reporting-participants\"><i class=\"fa fa-user\"></i> {{ groupActivityDetails.user_results | objectsize }}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bm-task-list todos-list-group todo-detail-reporting\">\n" +
    "        <div ng-if=\"groupActivityDetails.parsedResults.length\" class=\"tasks\">\n" +
    "            <ul>\n" +
    "                <li class=\"task\" ng-repeat=\"exercise in groupActivityDetails.parsedResults\">\n" +
    "                    <div class=\"task-number task-exercise\" translate translate-values=\"{'nbr': $index + 1}\">\n" +
    "                        jsapp.teacher.exerciseNbr\n" +
    "                    </div>\n" +
    "                    <div class=\"task-name todo-result\">\n" +
    "                        <div class=\"todo-bar-container\">\n" +
    "                            <div class=\"todo-bar\" ng-style=\"exercise.style\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-number task-cell  task-exercise\" ng-bind=\"::(exercise.result | number:0)+ '%'\"></div>\n" +
    "                    <div class=\"task-todos\" ng-if=\"exercise_preview.length && exercise_preview[$index]\">\n" +
    "                        <div class=\"exercise-buttons\">\n" +
    "                            <a class=\"task-todo task-todo-details bm-list-icon fa fa-search\"\n" +
    "                               ng-class=\"{'active': opener.active === ('preview-' + $index)}\"\n" +
    "                               ng-click=\"toggleModal($event);\"\n" +
    "                               id=\"preview-{{ $index }}\"></a>\n" +
    "\n" +
    "                            <div modal-bubble box-type=\"small\" dynamic-height=\"true\"\n" +
    "                                 title=\"{{ 'jsapp.teacher.exerciseNbr' | translate:{nbr: $index + 1} }}\"\n" +
    "                                 css-class=\"exercise-preview\">\n" +
    "                                <div class=\"subcontainer\" ng-if=\"modal.open\">\n" +
    "                                    <img ng-src=\"{{ exercise_preview[$index] }}\" alt=\"\" resize-preview/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !groupActivityDetails.parsedResults.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noTodoDetails\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- studentTodoDetails -->\n" +
    "<div ng-if=\"studentActivityDetails && navigationStates.activityDetails === 'student'\">\n" +
    "    <div class=\"student-todo-detail-head\">\n" +
    "        <div class=\"student-todo-detail-star\" success-star success-type=\"star\"\n" +
    "             success-context=\"studentActivityDetailResult\"></div>\n" +
    "        <div class=\"student-todo-detail-head-text\">\n" +
    "            <h2 class=\"headline small\"><span class=\"space-after\" ng-if=\"studentActivityDetails.full_caption\"\n" +
    "                                             ng-bind=\"studentActivityDetails.full_caption\"></span><span\n" +
    "                    ng-bind=\"studentActivityDetails.name\"></span></h2>\n" +
    "\n" +
    "            <h3 class=\"sub-headline\" ng-if=\"studentActivityDetails.book_name\"><span class=\"book-name prefix\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "                <span class=\"book-name\" ng-bind=\"studentActivityDetails.book_name\"></span></h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bm-task-list todos-list-student todo-student-detail-reporting\">\n" +
    "        <div class=\"tasks\" ng-if=\"studentActivityDetails.tries.length\">\n" +
    "            <ul>\n" +
    "                <li class=\"task\" ng-repeat=\"todo in studentActivityDetails.tries\">\n" +
    "                    <div class=\"task-number task-cell task-date\">{{ todo.date | date:'dd.MM.yyyy'}}</div>\n" +
    "                    <div class=\"todoDetails-result\">\n" +
    "                        <div class=\"exercise-percentage task-cell\" ng-if=\"todo.success_percentage !== false\"\n" +
    "                             ng-class=\"{'color-success': todo.coins || todo.stars, 'color-error': !todo.coins && !todo.stars}\">\n" +
    "                            {{ todo.success_percentage | number:0 }}%<span class=\"delayed-sign\" ng-if=\"todo.date > studentActivityDetails.end\">*</span>\n" +
    "                        </div>\n" +
    "                        <div bm-exercise-points points=\"todo.points\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-star task-cell \" success-coins-or-star success-type=\"coins-or-star\"\n" +
    "                         success-context=\"studentTodoDetail\"></div>\n" +
    "                    <div class=\"task-space\"><span class=\"flag-double-tipped flag-double-tipped-yellow\"\n" +
    "                                                  ng-if=\"bestTry.series_id === todo.series_id\"><span\n" +
    "                            translate=\"jsapp.todo.bestResult\"></span> <span class=\"flag-tip\"></span></span>\n" +
    "                         <span class=\"delayed-sign\" ng-if=\"todo.date > studentActivityDetails.end\">*<span translate=\"jsapp.todo.delayed\"></span></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-todos\">\n" +
    "                        <a ng-if=\"todo.showResult\"\n" +
    "                           href=\"\"\n" +
    "                           class=\"task-todo bm-list-icon\"\n" +
    "                           open-worksheet\n" +
    "                           worksheet-params=\"{series_id: todo.series_id, exerciseStartMode: 'review', studentId: navigationStates.currentStudentId, flashFree: todo.flash_free}\">\n" +
    "                            <i class=\"bf bf-detail-input\"></i>\n" +
    "                        </a>\n" +
    "                        <a ng-if=\"!todo.showResult\"\n" +
    "                           class=\"task-todo bm-list-icon no-result\"><i class=\"bf bf-detail-input\"></i></a>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div ng-if=\"hasTriesOlderThan90\" class=\"no-results-hint\" translate=\"jsapp.todo.noResult\"></div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !studentActivityDetails.tries.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noTodoDetails\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("activitiesModule/partials/studentSchoolyearReport.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("activitiesModule/partials/studentSchoolyearReport.tpl.html",
    "<div class=\"schoolyear-report\" ng-if=\"vm.reports != null && vm.reports.length > 0\" ng-repeat=\"report in vm.reports | orderBy:'-year' \">\n" +
    "    <div class=\"schoolyear-title\" translate=\"jsapp.student.schoolyearReport.title\"\n" +
    "         translate-values=\"{'year': report.schoolyear}\"></div>\n" +
    "    <div class=\"schoolyear-report-tab\">\n" +
    "        <div class=\"schoolyear-tab-title\" translate=\"jsapp.student.schoolyearReport.series\"></div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <i class=\"fa fa-exclamation-circle\"></i>\n" +
    "            <div class=\"label\">{{ report.assignment_series_total }} <span translate=\"jsapp.student.schoolyearReport.assignmentActivities\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            <div class=\"label\">{{ report.free_series_total }} <span translate=\"jsapp.student.schoolyearReport.bookActivities\"></span></div>\n" +
    "            </div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <i class=\"fa fa-puzzle-piece\"></i>\n" +
    "            <div class=\"label\">{{ report.knowledge_gap_series_total }} <span translate=\"jsapp.student.schoolyearReport.knowledgeGapActivities\"></span></div>\n" +
    "            </div>\n" +
    "    </div>\n" +
    "    <div class=\"schoolyear-report-tab\">\n" +
    "        <div class=\"schoolyear-tab-title\" translate=\"jsapp.student.schoolyearReport.knowledgeGaps\"></div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <i class=\"fa fa-bell-o\"></i>\n" +
    "            <div class=\"label\">{{ report.knowledge_gaps_opened }} <span translate=\"jsapp.student.schoolyearReport.knowledgeGapsOpened\"></span></div>\n" +
    "            </div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <i class=\"fa fa-check\"></i>\n" +
    "            <div class=\"label\">{{ report.knowledge_gaps_closed }} <span translate=\"jsapp.student.schoolyearReport.knowledgeGapsClosed\"></span></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"schoolyear-report-tab\">\n" +
    "        <div class=\"schoolyear-tab-title\" translate=\"jsapp.student.schoolyearReport.awards\"></div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <span class=\"totalStars\"></span>\n" +
    "            <div class=\"label\">{{ report.stars }} <span translate=\"jsapp.student.schoolyearReport.stars\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"schoolyear-tab-item\">\n" +
    "            <span class=\"totalCoins\"></span>\n" +
    "            <div class=\"label\">{{ report.coins }} <span translate=\"jsapp.student.schoolyearReport.coins\"></span></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("bookModule/partials/bookButtons.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookButtons.tpl.html",
    "<div>\n" +
    "    <a class=\"bookButtonsItem\"\n" +
    "       ng-repeat-start=\"button in buttons\"\n" +
    "       ng-show=\"bookStates.showButtons\"\n" +
    "       ng-href=\"#{{ button.b_link }}\"\n" +
    "       ng-class=\"button.b_class\"\n" +
    "       ng-click=\"buttonClick()\"\n" +
    "       ng-mousedown=\"buttonMousedown()\"\n" +
    "       translate=\"{{ button.b_text }}\"\n" +
    "       data-cy=\"book-button-{{button.b_cy}}\"\n" +
    "       ></a>\n" +
    "\n" +
    "    <div ng-if=\"button.b_showSelectBox\" allocate-select-box></div>\n" +
    "    <span ng-repeat-end></span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookContentChapterTasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookContentChapterTasks.tpl.html",
    "<div class=\"chapter-tasks\"\n" +
    "     ng-init=\"chapter = isLearningUnit(chapter) ? subsubchapter: subchapter\"\n" +
    "     data-cy=\"books-chapter-task\"\n" +
    ">\n" +
    "    <div class=\"chapter-task-row\"\n" +
    "         ng-class=\"{selected: assignData.flatChapterList[chapter.id].selected}\">\n" +
    "\n" +
    "        <!-- recommendation triangle column -->\n" +
    "\n" +
    "        <div class=\"task-cell task-number task-recommended\" ng-if=\"displayTaskRecommended() && !isTest\">\n" +
    "            <i ng-if=\"isRecommended(chapter)\"\n" +
    "               class=\"fa fa-exclamation-triangle\"\n" +
    "            ></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- assignment column -->\n" +
    "\n" +
    "        <div class=\"task-item task-cell task-cell task-number\" ng-if=\"assignData.assign\">\n" +
    "            <label for=\"{{ chapter.id }}\"\n" +
    "                   ng-style=\"{'visibility': 'visible'}\">\n" +
    "                <input id=\"{{::chapter.id}}\" type=\"checkbox\"\n" +
    "                       ng-model=\"assignData.flatChapterList[chapter.id].selected\"/>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- task-label-column -->\n" +
    "\n" +
    "        <div class=\"task-item task-cell task-number\"\n" +
    "             ng-if=\"!isTest\"\n" +
    "             ng-bind=\"::chapter.chapters[0].label\"></div>\n" +
    "\n" +
    "        <!-- coins-and-stars-column -->\n" +
    "\n" +
    "        <div bm-check-authorization\n" +
    "             class=\"task-item task-cell\"\n" +
    "             ng-if=\"showStars\"\n" +
    "             ng-class=\"{'task-coins-or-star': chapter.content_type === 'ExerciseList',\n" +
    "                        'task-no-coins-star': chapter.content_type !== 'ExerciseList'}\"\n" +
    "             success-coins-or-star\n" +
    "             success-type=\"coins-or-star\"\n" +
    "             success-context=\"bookChapter\"></div>\n" +
    "\n" +
    "\n" +
    "        <div bm-check-authorization=\"!\" class=\"task-item task-cell task-coins-or-star\">\n" +
    "            <bm-authorization-button></bm-authorization-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- chapter tasks -->\n" +
    "\n" +
    "        <div class=\"task-item task-name\"><span ng-bind=\"::chapter.name\"></span>\n" +
    "            <div ng-if=\"chapter.level === 'advanced'\" class=\"task-advanced\"\n" +
    "                 translate=\"jsapp.books.advancedTasks\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- action button -->\n" +
    "\n" +
    "        <div class=\"task-item task-todos\" chapter-tasks></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookFlatContent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookFlatContent.tpl.html",
    "<div bm-assign-toolbar\n" +
    "     ng-if=\"isTeacher && assignData.assign\"\n" +
    "     assign-data=\"assignData\"\n" +
    "     assign-items=\"myList\"\n" +
    "     current-book-id=\"navigationStates.bookId\"\n" +
    "     no-selection-text=\"jsapp.books.pleaseChooseWStoAssign\">\n" +
    "</div>\n" +
    "<!-- /assign - markup for teacher -->\n" +
    "<div class=\"scroll-container\"\n" +
    "     bindonce\n" +
    "     ng-class=\"{'assign-todos-visible': (myList|filter:{selected:true}).length > 0,\n" +
    "                'assign-todos-container': assignData.assign && isTeacher}\"\n" +
    "     data-cy=\"books-assign-todos\"\n" +
    ">\n" +
    "    <div class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreChapters\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "        <ul class=\"book-content book-flat-content\">\n" +
    "            <li class=\"book-headline\"\n" +
    "                ng-if=\"book.hasIntro\">\n" +
    "                <div class=\"book-name\">{{ book.name }}</div>\n" +
    "            </li>\n" +
    "            <div book-test ng-if=\"bookTest\">\n" +
    "                <span translate=\"jsapp.books.recommendations\"\n" +
    "                      translate-values=\"{'numRecomms': '<b>{{bookRecommendations.length}}</b>', 'recommIcon': '<i class=\\'fa fa-exclamation-triangle\\'></i>'}\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- MODULE aka SCHOOL BOOK-->\n" +
    "\n" +
    "            <li\n" +
    "                ng-repeat=\"chapter in bookObject.chapters\"\n" +
    "                ng-if=\"book.isModule &&  chapterIds.includes(chapter.id)\"\n" +
    "                ng-include=\"'bookModule/partials/moduleContent.tpl.html'\"\n" +
    "                class=\"chapter-depth-0 module\"\n" +
    "            ></li>\n" +
    "            <li\n" +
    "                ng-if=\"book.isModule && bookObject.followUpBooks.length > 0\"\n" +
    "                ng-include=\"'bookModule/partials/moduleFollowUpBooks.tpl.html'\"\n" +
    "                class=\"chapter-depth-0 module\"\n" +
    "            ></li>\n" +
    "\n" +
    "            <!-- BOOK -->\n" +
    "\n" +
    "            <li ng-if=\"!book.isModule\" ng-repeat=\"chapter in chapterListSlice.items\"\n" +
    "                ng-class=\"chapterCss()\"\n" +
    "                scroll-if=\"{{ chapterListSlice.page === 0 && $index === (chapterListSlice.items.length - 1) && lastChapter.id !== false }}\"\n" +
    "                scroll-type=\"item\"\n" +
    "                ng-show=\"!chapter.intro || staticContentLoaded.ready\">\n" +
    "                <div ng-if=\"chapter.intro\" class=\"book-static-content-wrap book-static-chapter\"\n" +
    "                     book-static-content></div>\n" +
    "                <!-- Headline -->\n" +
    "                <div ng-if=\"!chapter.intro && !chapterArray[chapter.id].content\" class=\"chapter-title\">\n" +
    "                    <div class=\"chapter-name\">\n" +
    "                        <span ng-bind=\"::chapter.caption\"></span>\n" +
    "                        <span ng-bind=\"::chapter.name\"></span>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <a class=\"bm-list-icon fa fa-ellipsis-h\"\n" +
    "                           ng-show=\"isTeacher && assignData.assign && chapter.depth === 0\"\n" +
    "                           ng-click=\"assignChapterBubble(chapter, $event);\"\n" +
    "                           ng-class=\"{'active': chapter.showAssignChapterBubble }\"></a>\n" +
    "                        <span assign-chapter-bubble></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- Exercise -->\n" +
    "                <div ng-if=\"!chapter.intro && !chapterArray[chapter.parentId].intro\"\n" +
    "                     ng-include=\"'bookModule/partials/bookFlatContentChapterTasks.tpl.html'\"></div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <a ng-click=\"loadMoreChapters()\"\n" +
    "           ng-show=\"chapterListSlice.items.length < chapterList.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookFlatContentChapterTasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookFlatContentChapterTasks.tpl.html",
    "<div ng-if=\"chapter.content\" class=\"chapter-tasks\"\n" +
    "     ng-init=\"singleTask=getSingleTask(chapter)\"\n" +
    "     data-cy=\"books-chapter-task\"\n" +
    ">\n" +
    "    <div ng-if=\"chapter.content\" class=\"chapter-task-row\"\n" +
    "         ng-class=\"{selected: assignData.flatChapterList[chapter.id].selected}\">\n" +
    "\n" +
    "        <!-- recommendation triangle column -->\n" +
    "\n" +
    "        <div class=\"task-cell task-number task-recommended\" ng-if=\"displayTaskRecommended() && !isTest\">\n" +
    "            <i ng-if=\"isRecommended(chapter)\"\n" +
    "               class=\"fa fa-exclamation-triangle\"\n" +
    "            ></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- assignment column -->\n" +
    "\n" +
    "        <div class=\"task-item task-cell task-cell task-number\" ng-if=\"assignData.assign\">\n" +
    "            <label for=\"{{ chapter.id }}\"\n" +
    "                   ng-style=\"{'visibility': hasDeprecatedContent(chapter) ? 'hidden' : 'visible'}\">\n" +
    "                <input ng-if=\"hasAssignableContent(chapter)\"\n" +
    "                       id=\"{{::chapter.id}}\" type=\"checkbox\"\n" +
    "                       ng-model=\"assignData.flatChapterList[chapter.id].selected\"/>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- task-label-column -->\n" +
    "\n" +
    "        <div class=\"task-item task-cell task-number\"\n" +
    "             ng-if=\"!isTest\"\n" +
    "             ng-bind=\"::chapter.content.label\"></div>\n" +
    "\n" +
    "        <!-- coins-and-stars-column -->\n" +
    "\n" +
    "        <div bm-check-authorization\n" +
    "             class=\"task-item task-cell\"\n" +
    "             ng-if=\"showStars\"\n" +
    "             ng-class=\"{'task-coins-or-star': chapter.content.ExerciseList,\n" +
    "                        'task-no-coins-star': !chapter.content.ExerciseList}\"\n" +
    "             success-coins-or-star\n" +
    "             success-type=\"coins-or-star\"\n" +
    "             success-context=\"bookChapter\"></div>\n" +
    "\n" +
    "\n" +
    "        <div bm-check-authorization=\"!\" class=\"task-item task-cell task-coins-or-star\">\n" +
    "            <bm-authorization-button></bm-authorization-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- chapter tasks -->\n" +
    "\n" +
    "        <!-- Exercise Lists are the only one which have no single task icons :( -->\n" +
    "        <div ng-if=\"singleTask && singleTask !== 'ExerciseList'\"\n" +
    "             class=\"task-item task-cell task-todo task-icon-before-name bm-list-icon\"\n" +
    "             ng-class=\"{'bf bf-book-open-leaf': singleTask == 'TextList' || singleTask == 'FemList', 'fa fa-file-o': singleTask == 'FileList'}\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"task-item task-name\"><span ng-bind=\"::chapter.name\"></span>\n" +
    "            <div ng-if=\"chapter.content.level === 'advanced'\" class=\"task-advanced\"\n" +
    "                 translate=\"jsapp.books.advancedTasks\"></div>\n" +
    "            <div ng-if=\"singleTask && singleTask == 'FemList'\" class=\"chapter-fem-titles\"\n" +
    "                 ng-bind=\"getFemTitles(chapter)\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- action button -->\n" +
    "\n" +
    "        <div class=\"task-item task-todos\" chapter-tasks></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookFlatToc.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookFlatToc.tpl.html",
    "<div class=\"group-name\" ng-if=\"group\" ng-bind=\"::group.name\"></div>\n" +
    "<div class=\"book-list book-toc-book\" id=\"{{book.bookId}}\">\n" +
    "    <div class=\"book-list-cover\" ng-if=\"!toggles.iconPerBook\">\n" +
    "        <div class=\"topic03\"></div>\n" +
    "        <!-- In Abhängigkeit des Themas -->\n" +
    "        <span></span>\n" +
    "    </div>\n" +
    "    <div ng-if=\"toggles.iconPerBook\">\n" +
    "        <img class=\"per-book-cover\" ng-src=\"{{ current.book.bookIcon ? ('assets/bookicons/width-80/' + current.book.bookIcon) : 'assets/bookicons/width-80/cover-dummy.png' }}\" />\n" +
    "    </div>\n" +
    "    <span class=\"book-list-meta-name\">{{ current.book.name }}</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"book-toc-breadcrumb\" ng-if=\"current.breadcrumb.length > 0\">\n" +
    "    <div ng-repeat=\"bc in current.breadcrumb\">\n" +
    "        <a ng-href=\"{{ bc.href }}\">\n" +
    "            <i ng-show=\"$index == 0\" class=\"fa fa-angle-left\"></i>\n" +
    "            <span ng-show=\"bc.caption\">{{ bc.caption }}</span><span translate=\"{{ bc.name }}\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"current.chapter\" class=\"book-toc\">\n" +
    "    <span>{{ current.chapter.caption }}</span>\n" +
    "    {{ current.chapter.name }}\n" +
    "</div>\n" +
    "<div ng-if=\"!current.chapter\" class=\"book-toc\">\n" +
    "    <span translate=\"jsapp.books.toc\"></span>\n" +
    "</div>\n" +
    "\n" +
    "<ol class=\"book-toc-list\">\n" +
    "    <li ng-repeat=\"ch in chapterList | filter:{depth: isModule ? 0 : current.depth, parentId: current.chapter.id, type: 'chapter'} \"\n" +
    "        id=\"toc-{{ ch.id }}\" ng-if=\"!ch.content\">\n" +
    "        <a ng-href=\"{{ getChapterHref(current.bookId, ch) }}\" class=\"chapter-name\">\n" +
    "            <span ng-if=\"!isModule\"><span>{{ ch.caption }}</span>{{ ch.name }}</span>\n" +
    "            <span ng-if=\"isModule && isLearningUnit(ch)\">\n" +
    "                {{ chapterList.filter(isLearningUnit).indexOf(ch) + 1 }}.\n" +
    "                {{ 'jsapp.module.role.' + ch.role + '.topline' | translate }}: {{ ch.name }}\n" +
    "            </span>\n" +
    "            <span ng-if=\"isModule && !isLearningUnit(ch)\">\n" +
    "                {{ 'jsapp.module.role.' + ch.role + '.headline' | translate }}\n" +
    "            </span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ol>\n" +
    "");
}]);

angular.module("bookModule/partials/bookListFilter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookListFilter.tpl.html",
    "<div>\n" +
    "    <div class=\"book-list-filter-container\" ng-if=\"bookListFilter.filters.length > 0\">\n" +
    "        <div class=\"book-list-filter-prefix\" translate=\"jsapp.filter.prefixText\"></div>\n" +
    "        <div class=\"book-list-filter\" ng-repeat=\"bookFilter in bookListFilter.filters\">\n" +
    "            <select ng-model=\"currentBookFilter[bookFilter.identifier]\"\n" +
    "                    ng-change=\"storeCurrentBookFilter();lastBook.id = false;\"\n" +
    "                    ng-options=\"f.label group by f.parent for f in bookFilter.values | orderBy: ['parent', 'latinisedLabel']\">\n" +
    "                <option value=\"\" translate=\"jsapp.filter.{{ bookFilter.identifier }}\" selected=\"selected\"></option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "        <a class=\"button bt-small fa fa-times\" ng-class=\"{false: 'bt-inactive', true: 'bt-neutral'}[resetButtonActive]\"\n" +
    "           ng-click=\"resetFilter()\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookListItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookListItem.tpl.html",
    "<div class=\"book-list-item\"\n" +
    "     data-cy=\"library-book-{{::book.name}}\"\n" +
    "     ng-class=\"{'book-list-item-active': booksStates.activeBook == $index, 'book-list-item-remove': book.id == removeBook.id}\">\n" +
    "    <div class=\"book-list-cover\" ng-if=\"!toggles.iconPerBook\">\n" +
    "        <div class=\"topic03\"></div>\n" +
    "        <span></span>\n" +
    "    </div>\n" +
    "    <div ng-if=\"toggles.iconPerBook\">\n" +
    "        <img class=\"per-book-cover\" ng-src=\"{{ book.bookIcon ? ('assets/bookicons/width-160/' + book.bookIcon) : 'assets/bookicons/width-80/cover-dummy.png' }}\" />\n" +
    "    </div>\n" +
    "    <div class=\"book-list-meta-wrap\">\n" +
    "        <p ng-if=\"book.filters && book.filters.supertopic\" class=\"book-list-meta-publisher\">{{\n" +
    "            book.filters.supertopic.join(', ') }}</p>\n" +
    "\n" +
    "        <p\n" +
    "            class=\"book-list-meta-name\"\n" +
    "            data-cy=\"library-book-name\"\n" +
    "            ng-if=\"!worldCupFeature || !book.name.includes('Fußballturnier U')\"\n" +
    "        >\n" +
    "            {{ book.name }}\n" +
    "        </p>\n" +
    "\n" +
    "        <span class=\"book-list-meta-name\" style=\"position: relative\" ng-if=\"worldCupFeature && book.name.includes('Fußballturnier U')\">\n" +
    "            {{ book.name }}\n" +
    "            <span class=\"hot-book\">\n" +
    "                <i class=\"fa fa-futbol-o\"></i>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "        <p ng-if=\"book.activation_state == 'inactive'\" class=\"book-list-meta-outdated\" translate=\"jsapp.books.outdated\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"book-list-buttons\">\n" +
    "        <div book-buttons></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookListSearch.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookListSearch.tpl.html",
    "<div class=\"content-padding book-list-search\"\n" +
    "     ng-show=\"showSearch\">\n" +
    "    <input type=\"search\"\n" +
    "           size=\"40\"\n" +
    "           ng-model=\"bookSearch.value\"\n" +
    "           placeholder=\"{{ 'jsapp.general.search' | translate }}\"/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookStaticContent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookStaticContent.tpl.html",
    "<div class=\"book-static-content {{ chapter.intro ? 'opened pre-knowledge-content' : '' }}\"\n" +
    "     ng-if=\"includeChapterContent\" ng-include src=\"includeChapterContent\"></div>\n" +
    "<div id=\"book-static-offline-content\"\n" +
    "     class=\"book-static-content {{ chapter.intro ? 'opened pre-knowledge-content' : '' }}\"></div>\n" +
    "<div ng-if=\"addMoreLink\" class=\"chapter-content-toggler-wrap\">\n" +
    "    <div class=\"chapter-content-toggler\">\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        <span class=\"chapter-content-toggler-slidedown\" translate>jsapp.general.readMore</span>\n" +
    "        <span class=\"chapter-content-toggler-slideup\" translate>jsapp.general.readLess</span></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookTestElement.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookTestElement.tpl.html",
    "<div class=\"test-box book-test\">\n" +
    "    <p class=\"headline\"\n" +
    "       translate=\"jsapp.books.bookTest.headline\"></p>\n" +
    "    <div class=\"exercise-box tasks\">\n" +
    "        <div ng-include=\"'bookModule/partials/bookFlatContentChapterTasks.tpl.html'\"></div>\n" +
    "        <div ng-if=\"bookRecommendations.length > 0\"\n" +
    "             class=\"info-box\"\n" +
    "             ng-transclude>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/bookTypeList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/bookTypeList.tpl.html",
    "<div class=\"sidebar-list book-type-filter-list\">\n" +
    "    <div id=\"navi-sidebar\">\n" +
    "        <div ng-click=\"setCurrentBookType($event)\" ng-class=\"{'list-item-active': bookType.id === currentBookType, 'beta-book-type': bookType.beta}\"\n" +
    "             class=\"list-item\" ng-repeat=\"bookType in bookTypes | orderBy:'order'\" bindonce>\n" +
    "            <div class=\"name\" style=\"position: relative\">\n" +
    "                <span class=\"hot-book-type\" ng-if=\"worldCupFeature && bookType.id === 'other'\">\n" +
    "                    <i class=\"fa fa-futbol-o\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"bf\" ng-class=\"::('bf-' + bookType.css)\"></span>\n" +
    "                <span translate=\"{{bookType.name}}\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/chapterTasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/chapterTasks.tpl.html",
    "<div class=\"exercise-buttons\">\n" +
    "\n" +
    "    <bm-download-button ng-if=\"taskButtons.File\"\n" +
    "                      file=\"taskButtons.File.path\"\n" +
    "                      content-locale=\"book.contentLocale\"\n" +
    "                      single-mode=\"singleTask\">\n" +
    "    </bm-download-button>\n" +
    "\n" +
    "    <bm-fem-button ng-if=\"taskButtons.FemList\"\n" +
    "                         content-locale=\"book.contentLocale\"\n" +
    "                         fems=\"chapter.content.FemList.fems\"\n" +
    "                         title=\"chapter.name\"\n" +
    "                         single-mode=\"singleTask\">\n" +
    "    </bm-fem-button>\n" +
    "\n" +
    "    <bm-view-text-button ng-if=\"taskButtons.TextList\"\n" +
    "                         content-locale=\"book.contentLocale\"\n" +
    "                         text=\"taskButtons.TextList.texts[0]\"\n" +
    "                         title=\"chapter.name\"\n" +
    "                         single-mode=\"singleTask\">\n" +
    "    </bm-view-text-button>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.KemList\">\n" +
    "        <a\n" +
    "                id=\"kem-{{chapter.id}}\"\n" +
    "                title=\"{{ chapter.name }}\"\n" +
    "                class=\"task-todo {{ taskButtons.KemList.icon }}\"\n" +
    "                ng-class=\"{'active': opener.active === 'kem-' + chapter.id}\"\n" +
    "\n" +
    "                ng-click=\"toggleModal($event);\"></a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ chapter.name }}\" css-class=\"exercise-preview kem-container\" box-width=\"650\">\n" +
    "            <view-kem ng-if=\"modal.open\" content-locale=\"book.contentLocale\"\n" +
    "                      content-list-ref=\"taskButtons.KemList.params.contentListRef\"></view-kem>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.download && !chapter.introOrphan\">\n" +
    "        <a id=\"download-{{chapter.id}}\"\n" +
    "           title=\"{{ chapter.name }}\"\n" +
    "           class=\"task-todo bm-list-icon button-circle bt-download\"\n" +
    "           ng-class=\"{'active': opener.active === 'download-' + chapter.id}\"\n" +
    "           ng-click=\"toggleModal($event);\">\n" +
    "            <span ng-class=\"{{ taskButtons.download.icon }}\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ chapter.name }}\" css-class=\"download-container\" box-width=\"320\" box-height=\"320\">\n" +
    "            <download-kem ng-if=\"modal.open\" content-locale=\"book.contentLocale\"\n" +
    "                          content-list-ref=\"chapter.content.ExerciseList.content_list_ref\"></download-kem>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.DownloadSeriesPdf\">\n" +
    "        <a id=\"{{ taskButtons.DownloadSeriesPdf.id }}\"\n" +
    "           class=\"task-todo bm-list-icon bt-download\"\n" +
    "           ng-href=\"{{ pdf }}\"\n" +
    "           downloadable-via-app\n" +
    "           target=\"bm-pdf\">\n" +
    "            <span class=\"{{ taskButtons.DownloadSeriesPdf.icon }}\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExercisePreview\">\n" +
    "        <a id=\"preview-{{chapter.id}}\"\n" +
    "           class=\"task-todo {{ taskButtons.ExercisePreview.icon }}\"\n" +
    "           ng-class=\"{'active': opener.active === ('preview-' + chapter.id)}\"\n" +
    "           ng-click=\"toggleModal($event);\">\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ chapter.name }}\" css-class=\"exercise-preview\">\n" +
    "            <exercise-preview ng-if=\"modal.open\" content-locale=\"book.contentLocale\"\n" +
    "                              content-list=\"exerciseList.content_list_ref\"></exercise-preview>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && !taskButtons.Redo && !hasDeprecatedContent(chapter)\">\n" +
    "        <a class=\" task-todo bm-list-icon button-circle\"\n" +
    "           ng-mousedown=\"lastChapter.id=false;clickedItem.id=chapter.id;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "                <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && !taskButtons.Redo && hasDeprecatedContent(chapter)\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-single-task-disabled bf-hover\"\n" +
    "           id=\"chapter-id-{{chapter.id}}\"\n" +
    "           ng-click=\"showBubble()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseListDeprecated.icon\"></span>\n" +
    "        </a>\n" +
    "        <div bm-balloon\n" +
    "             orientation=\"left\"\n" +
    "             show=\"exerciseDeprecated.show\"\n" +
    "             title-key=\"jsapp.todo.outdatedExercises.title\"\n" +
    "             link-element=\"chapter-id-{{chapter.id}}\"\n" +
    "             selection-style=\"bt-selected\"\n" +
    "             class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.todo.outdatedExercises.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && taskButtons.Redo\">\n" +
    "        <a class=\"task-todo bm-list-icon button-circle\"\n" +
    "           ng-mousedown=\"lastChapter.id=false;clickedItem.id=chapter.id;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.Redo\">\n" +
    "        <a class=\"task-todo button bt-neutral\"\n" +
    "           ng-mousedown=\"lastChapter.id=false;clickedItem.id=chapter.id;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.Redo.params()\">\n" +
    "            <span ng-class=\"taskButtons.Redo.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.Pay && toggles.paymentLink\">\n" +
    "        <a class=\"bm-list-icon task-todo button-circle bt-play-pay fa fa-lock\"\n" +
    "           open-popup=\"payment\"\n" +
    "           payment-action=\"true\"\n" +
    "           ng-mousedown=\"lastChapter.id=false;clickedItem.id=chapter.id;\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/femElement.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/femElement.tpl.html",
    "<div class=\"fem-title\" ng-click=\"showFemContent()\"><i class=\"fa fa-plus\" ng-class=\"iconCss\"></i>{{ femContentTitle }}\n" +
    "</div>\n" +
    "<iframe id=\"{{ iframeId }}\" ng-if=\"femOpened\" class=\"fem-content\" ng-class=\"openedCss\"\n" +
    "     src=\"{{ femContent }}\" width=\"100%\"></iframe>\n" +
    "");
}]);

angular.module("bookModule/partials/groupBookList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/groupBookList.tpl.html",
    "<h2 class=\"headline assignedbooksheadline\" translate=\"jsapp.books.booksIn\"\n" +
    "    translate-values=\"{'groupName': '{{ currentGroup.name | htmlspecialchars }}'}\"></h2>\n" +
    "\n" +
    "<div ng-if=\"books && books.length\" book-list-search safe-search=\"safeSearch\" book-amount=\"books.length\" book-search=\"bookSearch\"></div>\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\" ng-if=\"books.length\"></ng-include>\n" +
    "<div>\n" +
    "    <ul class=\"book-list clearall\">\n" +
    "        <ng ng-repeat=\"book in filteredBooks = (books | filter: (bookSearch.value | latinise) | filter:checkBookListFilter | paging: (pager.currentPage*pager.pageSize):pager.pageSize)\"\n" +
    "            on-finish-render>\n" +
    "            <li class=\"book-list-item-wrap\"\n" +
    "                ng-class=\"{'book-list-item-odd': $index % 2 === 0, 'current-item': book.id === lastBook.id, 'current-item-clicked': book.id === clickedItem.id}\"\n" +
    "                id=\"{{ book.id }}\"\n" +
    "                ng-include=\"'bookModule/partials/bookListItem.tpl.html'\">\n" +
    "            </li>\n" +
    "            <ng ng-if=\"chunkReady === true && $index === (filteredBooks.length - 1)\"\n" +
    "                scroll-if=\"true\"\n" +
    "                scroll-type=\"bookId\"></ng>\n" +
    "        </ng>\n" +
    "    </ul>\n" +
    "    <div class=\"missing-data-container\" ng-if=\"!pendingRequests && books && !books.length\">\n" +
    "        <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noGroupBooks\"></div>\n" +
    "        <div class=\"missing-data-hint-subinfo\" translate=\"jsapp.teacher.noGroupBooksSubinfo\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"missing-data-container\" ng-if=\"!pendingRequests && books.length && !filteredBooks.length\">\n" +
    "        <div class=\"missing-data-hint\" translate=\"jsapp.filter.noMatchingBooks\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\" ng-if=\"books.length\"></ng-include>\n" +
    "");
}]);

angular.module("bookModule/partials/groupBookListEmpty.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/groupBookListEmpty.tpl.html",
    "<div class=\"missing-data-container book-list clearall\" ng-if=\"showAllocationsHint\">\n" +
    "    <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noBooksAllocatedHint\"></div>\n" +
    "    <div class=\"missing-data-hint-subinfo\" translate=\"jsapp.teacher.noBooksAllocatedHintSubInfo\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/groupSelect.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/groupSelect.tpl.html",
    "<div class=\"group-select-wrap\">\n" +
    "    <select ng-show=\"groups.length\" ng-model=\"group\"\n" +
    "            ng-options=\"g.name + ' ' +  (g.namePostfix | translate) disable when g.selectDisabled for g in groups\"\n" +
    "            class=\"group-select\"\n" +
    "            data-cy=\"books-select-group\">\n" +
    "        <option value=\"\"\n" +
    "                translate=\"jsapp.teacher.pleaseChooseGroup\"\n" +
    "                selected=\"selected\"></option>\n" +
    "    </select>\n" +
    "    <select ng-if=\"!groups.length\" class=\"group-select\">\n" +
    "        <option value=\"\" translate=\"jsapp.teacher.pleaseChooseGroup\" selected=\"selected\"></option>\n" +
    "        <option value=\"\" disabled=\"disabled\"></option>\n" +
    "        <option value=\"\" translate=\"jsapp.teacher.noClass\" disabled=\"disabled\"></option>\n" +
    "        <option value=\"\" translate=\"jsapp.teacher.createClass\" disabled=\"disabled\"></option>\n" +
    "        <option value=\"\" disabled=\"disabled\"></option>\n" +
    "    </select>\n" +
    "</div>\n" +
    "<div class=\"group-select-buttons-wrap\">\n" +
    "    <a ng-click=\"(!group) || allocateBookToClass($event)\"\n" +
    "       ng-class=\"{'button  bt-small fa fa-check allocate-confirm-button': true, 'bt-confirm': group, 'bt-inactive': !group}\"\n" +
    "       data-cy=\"books-allocate-confirm\"></a>\n" +
    "    <a ng-click=\"hideSelectBox($event)\" class=\"button bt-abort bt-small fa fa-times allocate-cancel-button\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/itemChapterTasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/itemChapterTasks.tpl.html",
    "<div class=\"exercise-buttons\">\n" +
    "\n" +
    "    <bm-download-button ng-if=\"!isMainTask(chapter, 'FileList') && taskButtons.File\"\n" +
    "                      file=\"chapter.content.FileList.files[0]\"\n" +
    "                      content-locale=\"contentLocale\"\n" +
    "                      single-mode=\"false\">\n" +
    "    </bm-download-button>\n" +
    "\n" +
    "    <bm-fem-button ng-if=\"!isMainTask(chapter, 'FemList') && taskButtons.FemList\"\n" +
    "                         content-locale=\"contentLocale\"\n" +
    "                         fems=\"chapter.content.FemList.fems\"\n" +
    "                         title=\"chapter.name\"\n" +
    "                         single-mode=\"false\">\n" +
    "    </bm-fem-button>\n" +
    "\n" +
    "    <bm-view-text-button ng-if=\"!isMainTask(chapter, 'TextList') && taskButtons.TextList\"\n" +
    "                         content-locale=\"contentLocale\"\n" +
    "                         text=\"taskButtons.TextList.texts[0]\"\n" +
    "                         title=\"chapter.name\"\n" +
    "                         single-mode=\"false\">\n" +
    "    </bm-view-text-button>\n" +
    "\n" +
    "    <div ng-if=\"!isMainTask(chapter, 'KemList') && taskButtons.KemList\">\n" +
    "        <a\n" +
    "                id=\"kem-{{taskButtons.KemList.params.chapterId}}\"\n" +
    "                title=\"{{ taskButtons.KemList.params.chapterName }}\"\n" +
    "                class=\"task-todo bm-list-icon\"\n" +
    "                ng-class=\"{'active': opener.active === 'kem-' + taskButtons.KemList.params.chapterId}\"\n" +
    "                ng-click=\"toggleModal($event);\">\n" +
    "            <span class=\"bf bf-book-open-leaf\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ taskButtons.KemList.params.chapterName }}\" css-class=\"exercise-preview kem-container\" box-width=\"650\">\n" +
    "            <view-kem ng-if=\"modal.open\" content-locale=\"taskButtons.KemList.params.contentLocale\"\n" +
    "                      content-list-ref=\"taskButtons.KemList.params.contentListRef\"></view-kem>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/libraryBookList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/libraryBookList.tpl.html",
    "<div ng-if=\"toggles.showLicenceRequiredAllocateBookHint && toggles.licenceRequiredAllocateBook && !hasPaid\"\n" +
    "     class=\"table purchase-box-wrap\">\n" +
    "    <div class=\"purchase-box table-row\">\n" +
    "        <div class=\"purchase-content table-cell purchase-lock fa fa-unlock\"></div>\n" +
    "        <div class=\"purchase-content table-cell purchase-text\">\n" +
    "            <span translate=\"jsapp.teacher.purchase\"></span><br/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!hasPaid\" class=\"sep-line\"></div>\n" +
    "<div class=\"book-search-filter-container\">\n" +
    "<div ng-if=\"books && books.length && toggles.showyBookSearch\"\n" +
    "    list-search-showy\n" +
    "    safe-search=\"safeSearch\"\n" +
    "    book-amount=\"books.length\"\n" +
    "    book-search=\"bookSearch\" class=\"book-search-filter-search\"></div>\n" +
    "    <div class=\"book-search-filter-options\">    \n" +
    "<div ng-if=\"languages.length > 1\" language-filter-book-type languages=\"languages\"></div>\n" +
    "<div ng-if=\"bookListFilter\" book-list-filter class=\"book-list-wrapper\"></div>\n" +
    "<div ng-if=\"books && books.length && !toggles.showyBookSearch\"\n" +
    "    book-list-search\n" +
    "    safe-search=\"safeSearch\"\n" +
    "    book-amount=\"books.length\"\n" +
    "    book-search=\"bookSearch\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\"></ng-include>\n" +
    "<div>\n" +
    "    <ul class=\"book-list clearall\" data-cy=\"library-book-list\">\n" +
    "        <ng ng-repeat=\"book in filteredBooks = (books | filter: (bookSearch.value | latinise) | filter:checkBookListFilter | paging: (pager.currentPage*pager.pageSize):pager.pageSize)\"\n" +
    "                on-finish-render>\n" +
    "            <li bindonce\n" +
    "                class=\"book-list-item-wrap\"\n" +
    "                data-cy=\"library-book\"\n" +
    "                ng-class=\"{'book-list-item-odd': $index % 2 === 0, 'current-item': book.id === lastBook.id, 'current-item-clicked': book.id === clickedItem.id}\"\n" +
    "                id=\"{{::book.id}}\"\n" +
    "                ng-include=\"'bookModule/partials/bookListItem.tpl.html'\">\n" +
    "            </li>\n" +
    "            <ng ng-if=\"chunkReady === true && $index === (filteredBooks.length - 1)\"\n" +
    "                scroll-type=\"bookId\" scroll-if=\"true\"\n" +
    "                scroll-type=\"bookId\"></ng>\n" +
    "        </ng>\n" +
    "    </ul>\n" +
    "    <div class=\"missing-data-container\" ng-if=\"!pendingRequests && books.length && !filteredBooks.length\">\n" +
    "        <div class=\"missing-data-hint\" translate=\"jsapp.filter.noMatchingBooks\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\"></ng-include>\n" +
    "");
}]);

angular.module("bookModule/partials/listSearchShowy.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/listSearchShowy.tpl.html",
    "<div class=\"content-padding list-search-showy\"\n" +
    "    ng-show=\"showSearch\">\n" +
    "    <label for=\"searchForBooks\">\n" +
    "        <i class=\"fa fa-search\"></i>\n" +
    "    </label>\n" +
    "    <input id=\"searchForBooks\"\n" +
    "           type=\"search\"\n" +
    "           size=\"40\"\n" +
    "           ng-model=\"bookSearch.value\"\n" +
    "           placeholder=\"{{ 'jsapp.general.search' | translate }}\"/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/moduleContent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/moduleContent.tpl.html",
    "<!-- Section Headline -->\n" +
    "<div class=\"chapter-title\">\n" +
    "    <div ng-if=\"!isLearningUnit(chapter)\" class=\"wrap-headline-with-subline\">\n" +
    "        <div class=\"headline\" translate=\"{{'jsapp.module.role.' + chapter.role + '.headline'}}\"/>\n" +
    "        <div translate=\"{{'jsapp.module.role.' + chapter.role + '.subline'}}\"/>\n" +
    "    </div>\n" +
    "    <div ng-if=\"isLearningUnit(chapter)\" class=\"collapsible-section\" ng-class=\"{'not-collapsible': onChapterPage}\"\n" +
    "         ng-click=\"isLearningUnit(chapter) && !onChapterPage && toggleLearningUnit(chapter.id)\"\n" +
    "    >\n" +
    "        <i\n" +
    "                class=\"fa icon\"\n" +
    "                ng-class=\"{'fa-plus': !isExpandedLearningUnit(chapter.id), 'fa-minus': isExpandedLearningUnit(chapter.id)}\"\n" +
    "                ng-show=\"!onChapterPage\"\n" +
    "        ></i>\n" +
    "        <div>\n" +
    "            <span>{{ bookObject.chapters.filter(isLearningUnit).indexOf(chapter) + 1 }}. </span>\n" +
    "            <span translate=\"{{'jsapp.module.role.' + chapter.role + '.topline'}}\"/>\n" +
    "            <div class=\"headline\">{{ chapter.name }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class=\"bm-list-icon fa fa-ellipsis-h\"\n" +
    "           ng-show=\"isTeacher && assignData.assign\"\n" +
    "           ng-click=\"assignChapterBubble(chapter, $event);\"\n" +
    "           ng-class=\"{'active': chapter.showAssignChapterBubble }\"></a>\n" +
    "        <span assign-chapter-bubble></span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul\n" +
    "    ng-class=\"{'expanded': isExpandedLearningUnit(chapter.id) || onChapterPage, 'collapsed': !isExpandedLearningUnit(chapter.id) && !onChapterPage && isLearningUnit(chapter)}\"\n" +
    ">\n" +
    "    <li\n" +
    "            ng-repeat=\"subchapter in chapter.chapters\"\n" +
    "            class=\"chapter-depth-1 module\"\n" +
    "            ng-class=\"{'exlist': !subchapter.hasOwnProperty('style') && !isLearningUnit(chapter)}\"\n" +
    "    >\n" +
    "        <!-- Content of Sections that are not a Learning Unit -->\n" +
    "\n" +
    "        <!-- Tile Group -->\n" +
    "        <div ng-if=\"subchapter.hasOwnProperty('style') && subchapter.style === 'tile-group'\" class=\"horizontal-slider-wrapper\">\n" +
    "            <div ng-if=\"hasOverflow(subchapter.id)\"\n" +
    "                 ng-click=\"scroll(subchapter.id, 'left')\"\n" +
    "                 class=\"scroll-button left\"\n" +
    "                 ng-class=\"{'end-of-direction': onLeftEndScroll(subchapter.id)}\"\n" +
    "            >\n" +
    "                <svg width=\"11\" height=\"32\" viewBox=\"0 0 11 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <path d=\"M10 1L2 15.8193L9.99999 31\" stroke=\"#333333\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "            <div id=\"{{ subchapter.id }}\" class=\"slide-able\">\n" +
    "                <div\n" +
    "                        ng-repeat=\"tile in subchapter.chapters\"\n" +
    "                        class=\"assignable-tile\"\n" +
    "                        ng-class=\"{'selected': assignData.flatChapterList[tile.id].selected}\"\n" +
    "                        ng-include=\"'bookModule/partials/moduleContentTile.tpl.html'\"\n" +
    "                ></div>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    ng-if=\"hasOverflow(subchapter.id)\"\n" +
    "                    ng-click=\"scroll(subchapter.id, 'right')\"\n" +
    "                    class=\"scroll-button right\"\n" +
    "                    ng-class=\"{'end-of-direction': onRightEndScroll(subchapter.id)}\"\n" +
    "            >\n" +
    "                <svg width=\"10\" height=\"32\" viewBox=\"0 0 10 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                    <path d=\"M1 31L9 16.1807L1 0.999999\" stroke=\"#333333\"/>\n" +
    "                </svg>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- Exercise Series -->\n" +
    "        <div ng-if=\"!subchapter.hasOwnProperty('style') && !isLearningUnit(chapter)\">\n" +
    "            <div ng-include=\"'bookModule/partials/bookContentChapterTasks.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Content of Learning Unit -->\n" +
    "\n" +
    "        <div ng-if=\"isLearningUnit(chapter)\">\n" +
    "            <!-- Learning Phase Title -->\n" +
    "            <div class=\"chapter-title\">\n" +
    "                <div class=\"chapter-name module\" translate=\"{{'jsapp.module.learningphase.' + subchapter.learningphase}}\"></div>\n" +
    "            </div>\n" +
    "            <ul>\n" +
    "                <!-- Learning Phase Content -->\n" +
    "                <li\n" +
    "                        ng-repeat=\"subsubchapter in subchapter.chapters\"\n" +
    "                        class=\"chapter-depth-2 module\"\n" +
    "                        ng-class=\"{'exlist': !subsubchapter.hasOwnProperty('style')}\"\n" +
    "                >\n" +
    "                    <!-- Tile Group -->\n" +
    "                    <div ng-if=\"subsubchapter.hasOwnProperty('style') && subsubchapter.style === 'tile-group'\" class=\"horizontal-slider-wrapper\">\n" +
    "                        <div\n" +
    "                                ng-if=\"hasOverflow(subsubchapter.id)\"\n" +
    "                                ng-click=\"scroll(subsubchapter.id, 'left')\"\n" +
    "                                class=\"scroll-button left\"\n" +
    "                                ng-class=\"{'end-of-direction': onLeftEndScroll(subsubchapter.id)}\"\n" +
    "                        >\n" +
    "                            <svg width=\"11\" height=\"32\" viewBox=\"0 0 11 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                                <path d=\"M10 1L2 15.8193L9.99999 31\" stroke=\"#333333\"/>\n" +
    "                            </svg>\n" +
    "                        </div>\n" +
    "                        <div id=\"{{ subsubchapter.id }}\" class=\"slide-able\">\n" +
    "                            <div\n" +
    "                                    ng-repeat=\"tile in subsubchapter.chapters\"\n" +
    "                                    class=\"assignable-tile\"\n" +
    "                                    ng-class=\"{'selected': assignData.flatChapterList[tile.id].selected}\"\n" +
    "                                    ng-include=\"'bookModule/partials/moduleContentTile.tpl.html'\"\n" +
    "                            ></div>\n" +
    "                        </div>\n" +
    "                        <div\n" +
    "                                ng-if=\"hasOverflow(subsubchapter.id)\"\n" +
    "                                ng-click=\"scroll(subsubchapter.id, 'right')\"\n" +
    "                                class=\"scroll-button right\"\n" +
    "                                ng-class=\"{'end-of-direction': onRightEndScroll(subsubchapter.id)}\"\n" +
    "                        >\n" +
    "                            <svg width=\"10\" height=\"32\" viewBox=\"0 0 10 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                                <path d=\"M1 31L9 16.1807L1 0.999999\" stroke=\"#333333\"/>\n" +
    "                            </svg>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- Exercise Series -->\n" +
    "                    <div ng-if=\"!subsubchapter.hasOwnProperty('style')\">\n" +
    "                        <div ng-include=\"'bookModule/partials/bookContentChapterTasks.tpl.html'\"></div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("bookModule/partials/moduleContentTile.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/moduleContentTile.tpl.html",
    "<div class=\"assignment-checkbox\" ng-if=\"assignData.assign\">\n" +
    "    <label for=\"{{ tile.id }}\"\n" +
    "           ng-style=\"{'visibility': 'visible'}\">\n" +
    "        <input id=\"{{::tile.id}}\" type=\"checkbox\"\n" +
    "               ng-model=\"assignData.flatChapterList[tile.id].selected\"/>\n" +
    "    </label>\n" +
    "</div>\n" +
    "<div\n" +
    "    class=\"tile\"\n" +
    "    ng-class=\"{\n" +
    "        'story': tile.contentType === 'story',\n" +
    "        'examples': tile.contentType === 'examples',\n" +
    "        'concept': tile.contentType === 'concept',\n" +
    "        'experiment': tile.contentType === 'experiment'\n" +
    "    }\"\n" +
    "    ng-click=\"onClickTile(tile)\"\n" +
    ">\n" +
    "    <div class=\"text\">\n" +
    "        <div class=\"title\" title=\"{{ tile.name }}\">{{ tile.name }}</div>\n" +
    "        <div class=\"content-type\" translate=\"{{ 'jsapp.module.contentType.' + tile.contentType }}\"></div>\n" +
    "    </div>\n" +
    "    <svg ng-if=\"tile.contentType === 'experiment'\" width=\"43\" height=\"94\" viewBox=\"0 0 43 94\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <path d=\"m41.013 3.2357c0.2679 1.5182 0.6251 27.479 0.2679 29.973-0.3572 2.4938-0.7488 3.064-2.638 3.3388-1.374 0.2061-35.503 0-35.503 0-1.3121 0-2.0129-1.2022-2.377-2.4457-0.3641-1.2434 0-30.866 0-30.866 0-1.374 0.3641-2.267 2.377-2.4525 2.0129-0.18549 33.552-0.28166 35.503 0 1.951 0.28166 2.0953 0.92743 2.3701 2.4525z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m27.651 75.053c-0.0224-0.7061 0.1064-1.4088 0.3779-2.061 0.5702-0.7969 1.5594-0.6869 2.4456-0.632 0.8863 0.055 2.1091-0.0893 2.6862 0.7557 0.6869 0.9686 0.5289 2.5006 0.5289 3.6479 0 1.1472 0.1786 2.4113-0.3229 3.4349-0.5014 1.0236-1.3739 0.9343-2.2189 0.9343s-1.7793 0.1236-2.4525-0.4534c-0.7901-0.687-0.7901-1.9304-0.8176-2.8922-0.0274-0.9618-0.1717-1.8274-0.2267-2.7342z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m22.972 49.202h-0.0481c-0.0936-0.7323-0.0352-1.476 0.1718-2.1847 0.4328-1.0716 1.9441-0.8449 2.8097-0.8037s1.5526-0.1786 1.9442 0.687c0.3923 1.2727 0.5231 2.6117 0.3847 3.9364 0.0676 0.9956 0.0238 1.9956-0.1305 2.9815-0.2542 0.9824-1.6831 0.7625-2.4526 0.8518-0.9137 0.0413-1.8205 0.0894-2.2945-0.893-0.3916-0.7969-0.213-1.6007-0.3023-2.535-0.0549-0.6389-0.0755-1.2847-0.0824-2.0403z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m12.476 61.87c0.0104-0.1326 0.0104-0.2659 0-0.3985-0.0029-0.4339 0.0739-0.8647 0.2267-1.2709 0.4259-0.7488 2.5349-0.529 3.3662-0.5015 0.8312 0.0275 1.5045-0.0481 1.5663 1.0374 0.0687 1.2228 0.1443 2.3013 0.1099 3.483-0.0343 1.051 0.1031 2.1021-0.0412 3.3937-0.0687 0.6526-1.264 0.5358-2.6792 0.5702-1.4152 0.0343-2.4182 0.0549-2.4732-0.9137-0.0752-0.8244-0.1004-1.6526-0.0755-2.48 0-0.9069-0.0344-1.8068-0.0344-2.6999 0.0206-0.1168 0.0275-0.1855 0.0344-0.2198z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m10.524 90.572h0.0549c0.0954 0.7304 0.0345 1.4727-0.1786 2.1778-0.42591 1.0717-1.9442 0.7419-2.8029 0.8037-1.5182 0.1237-2.2533-0.5976-2.3564-1.5663-0.10334-1.119-0.12401-2.2441-0.06183-3.3662 0-1.1679-0.04809-1.8755 0.45341-2.7479 0.57019-0.9756 1.4495-0.687 2.2258-0.742 0.89995-0.0481 1.8068-0.0893 2.2876 0.8862 0.3847 0.8038 0.213 1.6076 0.3023 2.5419 0.055 0.6114 0.0687 1.2571 0.0756 2.0128z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m42.27 50.919v-0.1306c-0.024-0.1119-0.084-0.2128-0.1708-0.2873-0.0869-0.0745-0.1959-0.1183-0.3101-0.1248h-0.0481c-1.1875-0.0688-2.378-0.0688-3.5655 0h-6.6294c-0.9489-0.0287-1.8988 0.0011-2.8441 0.0893 0.0496-0.9852-0.0219-1.9726-0.2129-2.9403-0.0839-0.526-0.34-1.0093-0.7282-1.374-0.3741-0.2569-0.8258-0.3759-1.2778-0.3366-0.9618 0-2.061-0.2061-2.9609 0.2198-0.3392 0.1927-0.6167 0.4777-0.8004 0.8218-0.1836 0.3442-0.2658 0.7334-0.237 1.1224-0.079 0.7834-0.079 1.5729 0 2.3563-0.6832-0.0882-1.3729-0.1158-2.0609-0.0824h-2.7823c-1.8961 0-3.7922 0-5.6882 0.0481-1.8961 0.0481-3.7098 0.0687-5.5646 0.0893s-3.6891-0.0481-5.4959 0c-0.073918-0.0045-0.14792 0.0073-0.21682 0.0344-0.068902 0.0272-0.13104 0.069-0.18208 0.1227-0.051037 0.0536-0.089737 0.1178-0.11339 0.188-0.023654 0.0701-0.031693 0.1446-0.023553 0.2182-0.007071 0.0731 0.001766 0.1468 0.025901 0.2161 0.024136 0.0694 0.062998 0.1326 0.11392 0.1855s0.11268 0.0941 0.18104 0.1208c0.068364 0.0268 0.14171 0.0384 0.21499 0.0341 1.7999 0.0481 3.6067 0 5.3997 0 1.8961 0 3.799 0.0755 5.6951 0.0893 1.8961 0.0137 3.7029 0 5.5577 0.0412h2.7823c0.7618 0.0382 1.5255 0.0037 2.2808-0.103v0.7694c-0.0125 0.6024 0.1144 1.1996 0.3709 1.7449 0.5496 1.0374 1.6557 1.161 2.7136 1.0786 0.7969-0.055 1.8137 0 2.4663-0.529 0.179-0.1808 0.3204-0.3954 0.4159-0.6312 0.0955-0.2359 0.1433-0.4883 0.1406-0.7428 0.0548-0.596 0.0686-1.1951 0.0412-1.793 0.9432 0.0848 1.8905 0.1146 2.8372 0.0893h6.6088c1.1876 0.0653 2.3779 0.0653 3.5655 0h0.0549c0.1149-8e-3 0.2239-0.0532 0.3107-0.1289 0.0868-0.0756 0.1466-0.1775 0.1702-0.2901 0.0015-0.0636-0.0102-0.1267-0.0343-0.1855zm-14.585 2.5899c-0.1511 0.7351-1.0442 0.5771-1.6213 0.5839-0.5771 0.0069-1.477 0.213-1.9785-0.2335-0.687-0.6114-0.4397-1.903-0.5015-2.748-0.1075-0.9923-0.1328-1.9918-0.0756-2.9883 0.0131-0.2881 0.0844-0.5705 0.2096-0.8302 0.1251-0.2597 0.3016-0.4915 0.5186-0.6812 0.5268-0.0687 1.0602-0.0687 1.587 0 0.3477-0.0206 0.6964-0.0206 1.0442 0 0.4396 0.0756 0.5839 0.4053 0.687 0.8038 0.2243 0.9372 0.2985 1.9042 0.2198 2.8647 0.0585 1.0769 0.0287 2.1568-0.0893 3.2288z\" fill=\"#32A448\"/>\n" +
    "        <path d=\"m41.721 89.384c-2.535-0.0687-5.0837 0-7.6255 0-2.5419 0-5.2417-0.0756-7.8591-0.0756s-5.2417 0-7.8591-0.0481h-3.8059c-1.1826-0.0553-2.3677 0.0068-3.538 0.1855v-0.3435c-0.0343-0.6251-0.0412-1.2503-0.0755-1.8754-0.0066-0.5981-0.1777-1.1828-0.4947-1.69-0.68695-0.9755-1.7793-0.9-2.8303-0.8519-0.46333-0.0168-0.92655 0.0365-1.374 0.158-0.2538 0.1021-0.48474 0.2537-0.67935 0.4459-0.19461 0.1923-0.34901 0.4214-0.45417 0.6739-0.48776 1.0511-0.34349 2.2121-0.3641 3.3319 0.00339 0.0342 0.00339 0.0688 0 0.103h-0.50837-2.3358c-0.40532-0.0808-0.8219-0.0877-1.2297-0.0206-0.046533 0.0135-0.090601 0.0344-0.13053 0.0619l-0.096177 0.0686-0.04122 0.0481c-0.031466 0.0281-0.061286 0.0579-0.089307 0.0893-0.032357 0.0604-0.055512 0.1252-0.068699 0.1924-0.003377 0.0274-0.003377 0.0551 0 0.0824-4.3e-4 0.1055 0.025549 0.2094 0.075568 0.3023 0 0.0412 0.068699 0.0618 0.096178 0.0962l0.034349 0.0343 0.096178 0.0756c0.041455 0.0247 0.08516 0.0454 0.13053 0.0618 0.40951 0.0975 0.83383 0.1162 1.2503 0.055h2.7411c-0.01574 0.6138 0.04192 1.2273 0.17174 1.8274 0.11368 0.4247 0.35405 0.8047 0.68909 1.0895 0.33504 0.2847 0.74887 0.4606 1.1864 0.5043 0.54435 0.0378 1.0907 0.0378 1.635 0 0.52845 0.0388 1.0592-0.0313 1.5595-0.2061 0.34551-0.1822 0.63021-0.4612 0.81941-0.8029 0.1891-0.3417 0.2744-0.7312 0.2454-1.1207 0.0616-0.4552 0.0869-0.9147 0.0756-1.374 1.1504 0.1698 2.3144 0.2296 3.4761 0.1787l3.8059-0.0344c2.6174-0.0343 5.2348-0.0412 7.8591-0.0481 2.6243-0.0068 5.2348-0.0687 7.8591-0.0893s5.0905 0.0619 7.6255 0c0.0736 0.0033 0.1471-0.0093 0.2154-0.0368 0.0684-0.0275 0.1301-0.0694 0.1808-0.1228 0.0508-0.0534 0.0896-0.1171 0.1137-0.1867 0.024-0.0696 0.0329-0.1436 0.026-0.217 0.0018-0.0679-0.01-0.1355-0.0347-0.1988-0.0247-0.0632-0.0619-0.1209-0.1093-0.1696s-0.104-0.0873-0.1666-0.1137-0.1299-0.04-0.1978-0.04zm-34.26 3.744c-0.33645 0.0638-0.68451 0.0166-0.99179-0.1346-0.30727-0.1511-0.55712-0.398-0.71193-0.7035-0.11344-0.4206-0.16209-0.8562-0.14426-1.2915v-1.1816c0.03435-0.8725 0-1.7656 0.06869-2.6243 0.04064-0.4266 0.18962-0.8357 0.4328-1.1885 0.12156-0.1393 0.27749-0.2443 0.45226-0.3045 0.17478-0.0603 0.3623-0.0737 0.54387-0.039 0.68699 0 1.6831-0.2267 2.2533 0.2061 0.74884 0.5634 0.49463 1.8961 0.55645 2.6999 0.10759 1.0222 0.13289 2.0514 0.07557 3.0777-0.032 0.2826-0.1013 0.5599-0.20609 0.8244-0.09698 0.2369-0.25308 0.445-0.45341 0.6045-0.62182 0.0801-1.25 0.0985-1.8755 0.0549z\" fill=\"#32A448\"/>\n" +
    "        <path d=\"m41.618 63.278c-3.9227-0.1511-7.866 0-11.789 0-3.9226 0-7.7148-0.055-11.569 0.0962 0-0.4534 0-0.9068-0.0549-1.374-0.055-0.9205 0.0962-2.3976-1.0511-2.7067-0.3969-0.0675-0.8002-0.0906-1.2022-0.0687h-1.2366c-0.7969 0-2.0609 0-2.425 0.9206-0.1437 0.4434-0.211 0.908-0.1993 1.3739v0.1099c-0.0147 0.0589-0.0262 0.1185-0.0343 0.1787-0.0699 0.4936-0.0952 0.9925-0.0756 1.4907-0.3269-0.0567-0.6576-0.0888-0.9892-0.0962h-1.4221-2.7479c-1.8522-0.0344-3.705 0.0275-5.5508 0.1855-0.13847 0-0.27127 0.055-0.36918 0.1529-0.097914 0.098-0.15292 0.2308-0.15292 0.3692 0 0.1385 0.055008 0.2713 0.15292 0.3692s0.23072 0.1529 0.36918 0.1529c1.8458 0.158 3.6986 0.2199 5.5508 0.1855h4.0738c0.3669 0.0102 0.734-0.0036 1.0991-0.0412 0 0.8381 0 1.6762 0.0619 2.5144 0.0687 1.0098 0.7625 1.4151 1.7037 1.4976 0.5721 0.0309 1.1454 0.0309 1.7175 0 0.579 0.0209 1.1587-0.0136 1.7312-0.1031 0.1992-0.0293 0.388-0.1073 0.5498-0.2271 0.1618-0.1199 0.2915-0.2778 0.3776-0.4598 0.1743-0.6113 0.2256-1.2511 0.1511-1.8824v-1.4564c3.8403 0.1512 7.7011 0.0893 11.548 0.0893s7.866 0.1306 11.789 0c0.1822 0 0.3569-0.0724 0.4857-0.2012 0.1289-0.1288 0.2012-0.3036 0.2012-0.4858s-0.0723-0.3569-0.2012-0.4857c-0.1288-0.1289-0.3035-0.2012-0.4857-0.2012l-0.0069 0.103zm-24.388 4.2387c0 0.0412-0.2199 0.0618-0.2817 0.0687-0.3923 0.0436-0.7871 0.0596-1.1816 0.0481h-1.6213c-0.3192 0.03-0.6408-0.022-0.9343-0.1512-0.2404-0.158-0.158-0.5702-0.158-0.8449-0.0618-0.9756-0.0343-1.9442-0.0481-2.9197 0-0.687-0.0481-1.2984-0.0618-1.9511 0.0067-0.0891 0.0067-0.1787 0-0.2679 0.0078-0.2952 0.04-0.5894 0.0962-0.8793 0.1305-0.5908 0.8518-0.5771 1.3739-0.5908 0.687 0 1.374 0.0481 2.061 0.0687 0.1923 0 0.4809 0 0.6251 0.1442 0.1443 0.1443 0.11 0.4328 0.1237 0.6046l0.0412 0.9618c0.0412 1.1129 0 2.2189 0 3.325v1.6144c0.0069 0.1649 0.0687 0.6663-0.0343 0.7694z\" fill=\"#32A448\"/>\n" +
    "        <path d=\"m0.81792 77.389c8.814 0 17.642 0.2335 26.456 0 0.0086 0.6913 0.0753 1.3807 0.1992 2.0609 0.085 0.5317 0.3361 1.0229 0.7175 1.403 0.3813 0.3801 0.8733 0.6297 1.4053 0.7129 0.4763 0.0573 0.9567 0.0734 1.4358 0.0481 0.5011 0.0178 1.0023-0.0307 1.4907-0.1443 0.4883-0.1856 0.909-0.5146 1.207-0.9437 0.2979-0.4291 0.4591-0.9383 0.4624-1.4607 0.054-0.6052 0.07-1.2133 0.0481-1.8205 1.2572 0 2.5075 0.0824 3.7578 0.0824h1.9991c0.6515 0.0424 1.3056-0.0202 1.9373-0.1854 0.0884-0.0259 0.166-0.0798 0.2212-0.1534 0.0552-0.0737 0.085-0.1633 0.085-0.2554s-0.0298-0.1817-0.085-0.2554-0.1328-0.1275-0.2212-0.1534c-0.6317-0.1652-1.2858-0.2278-1.9373-0.1854h-1.9991c-1.2572 0-2.5144 0.0549-3.7716 0.0824v-0.4328c0.1013-1.0308-0.1195-2.0677-0.632-2.9678-0.5977-0.8518-1.6144-0.9411-2.5762-0.9686-0.9617-0.0275-2.0609-0.2611-2.899 0.3503-0.3248 0.2615-0.5804 0.5987-0.7445 0.982-0.164 0.3833-0.2316 0.8009-0.1967 1.2164-0.0687 0.5497-0.0687 1.1059 0 1.6556 0.0034 0.0274 0.0034 0.0551 0 0.0825-8.7797-0.2474-17.587 0-26.373 0-0.15714 0.0163-0.30265 0.0903-0.40842 0.2077-0.10577 0.1173-0.16431 0.2697-0.16431 0.4277s0.058539 0.3104 0.16431 0.4278c0.10577 0.1173 0.25128 0.1913 0.40842 0.2077l0.01374-0.0206zm27.912-4.4654c0.5908-0.3641 1.4152-0.1443 2.0609-0.1237 0.6458 0.0206 1.5114-0.0481 1.9511 0.5084 0.41 0.7229 0.5717 1.5603 0.4602 2.3838v2.6037c0 0.687-0.048 1.8411-0.8587 2.0609-0.725 0.1501-1.4689 0.1871-2.2052 0.11-0.3651 0.0127-0.7251-0.0881-1.0305-0.2886-0.2886-0.2797-0.4769-0.6467-0.5358-1.0442-0.0801-0.4397-0.1192-0.8858-0.1168-1.3327 0-0.5977-0.0687-1.1817-0.1374-1.7725-0.1063-0.5823-0.1546-1.1737-0.1443-1.7655 0.0276-0.3212 0.0875-0.6388 0.1786-0.948 0.0932-0.1587 0.2227-0.2929 0.3779-0.3916z\" fill=\"#32A448\"/>\n" +
    "        <path d=\"m1.5663 36.465c0.37007 0.322 0.83093 0.5212 1.319 0.5702h0.62516 14.489 18.507c0.7763 0 1.532 0 2.377-0.0962 0.4269-0.0527 0.8436-0.1684 1.2366-0.3435 0.441-0.2036 0.803-0.5463 1.0304-0.9755 0.3303-0.7571 0.539-1.5616 0.6183-2.3838 0.0825-0.8313 0.0962-1.587 0.1168-2.3701 0.0618-3.0914 0.0481-6.1829 0-9.2606l-0.0481-9.2399c0-1.5388-0.0549-3.0846-0.103-4.6234l-0.0893-2.322-0.0619-1.161-0.0412-0.58394c0-0.21296 0-0.4328-0.0687-0.62515-0.0608-0.41131-0.1597-0.81608-0.2954-1.2091-0.085-0.23174-0.208-0.44767-0.3641-0.6389-0.1665-0.18979-0.364-0.35006-0.5839-0.47402-0.7688-0.34319-1.604-0.5121-2.4457-0.49463-1.5526-0.068699-3.0914-0.10992-4.6371-0.15114-3.1052-0.082438-6.1898-0.082438-9.2743-0.082438-6.1829 0-12.366 0.061828-18.514 0.18549-0.77629 0-1.532 0-2.3564 0.089308-0.43351 0.040554-0.85909 0.14232-1.264 0.30227-0.46415 0.18616-0.85655 0.51596-1.1198 0.94116-0.22 0.41086-0.34225 0.86694-0.35723 1.3328v1.1816l-0.061829 2.3151-0.15114 9.2537c-0.048089 3.0846-0.048089 6.1691-0.048089 9.2537l0.034349 4.6302 0.041219 2.3152 0.041219 1.1747v0.5908c0.009888 0.2308 0.037448 0.4605 0.082438 0.687 0.2439 0.8489 0.7169 1.6143 1.3671 2.2121zm-0.32975-18.322c0.73157-1.8099 1.5807-3.57 2.5418-5.2691 0.68698-1.1129 2.2533-2.796 3.6685-1.9991 0.84499 0.474 1.2778 1.6418 1.5869 2.5074 0.49672 1.4673 0.90506 2.963 1.2229 4.4792l0.0618 0.261h-0.52898c-2.8372 0-5.7157-0.0824-8.553 0.1168v-0.0962zm39.694 12.771c0 0.7625 0 1.5457-0.1031 2.2533-0.0689 0.7094-0.2449 1.4043-0.5221 2.0609-0.1315 0.2609-0.3502 0.4675-0.6182 0.584-0.3134 0.1346-0.6441 0.2248-0.9824 0.2679-0.687 0.0687-1.477 0.0549-2.2396 0.0756-6.1829 0.048-12.331 0-18.5 0l-9.2468-0.0481-4.5959-0.0481h-0.60454-0.52898c-0.28715-0.03-0.55815-0.1475-0.77629-0.3366-0.46591-0.4944-0.78058-1.1118-0.90682-1.7793v-0.4534-14.447c2.4594 0.1717 4.9532 0.103 7.4194 0.1099h1.8961c0.5702 2.6037 1.161 5.3447 2.5624 7.5568 0.5383 1.0339 1.4494 1.8246 2.5487 2.2121 0.4947 0.1299 1.0147 0.1285 1.5086-4e-3 0.494-0.1325 0.9448-0.3916 1.3081-0.7517 0.8557-0.9213 1.5086-2.0119 1.9166-3.2013 0.5898-1.4914 1.0966-3.0142 1.5183-4.5616 0.1168-0.4053 0.2336-0.8106 0.3435-1.2159h8.388c0.1374 0.6457 0.268 1.2846 0.4054 1.9304 0.2866 1.463 0.6886 2.901 1.2022 4.3005 0.361 1.1232 1.01 2.1322 1.8823 2.9266 0.4613 0.3838 1.0262 0.622 1.623 0.6844 0.5969 0.0624 1.1988-0.0539 1.7295-0.3341 1.848-1.0579 2.5556-3.7234 3.1052-5.6126 0.103-0.3641 0.1923-0.687 0.2885-1.0855 0.0206 2.9609 0.0344 5.9287-0.0206 8.9171zm-29.3-11.748h9.5697c-0.3091 1.1061-0.6251 2.2121-0.9755 3.3044-0.3841 1.3625-0.9331 2.6729-1.635 3.9021-0.4534 0.7488-1.1267 1.5663-2.061 1.5801-0.5051-0.0422-0.9916-0.2101-1.4152-0.4885s-0.7708-0.6584-1.0098-1.1053c-0.7489-1.2302-1.3071-2.5666-1.6557-3.9639-0.2954-1.0511-0.5564-2.1365-0.8175-3.2289zm10.992-1.0716c0.2336-0.8244 0.474-1.6419 0.7419-2.4526 0.3768-1.3249 0.9388-2.59 1.6694-3.7578 0.1876-0.3657 0.4734-0.6719 0.8253-0.8842 0.3519-0.2124 0.756-0.3225 1.1669-0.318 0.9206 0.1305 1.4908 1.0373 1.8755 1.8342 0.5567 1.2498 0.9693 2.559 1.2297 3.9021 0.1305 0.5565 0.2473 1.1198 0.3641 1.6763h-7.8797 0.0069zm9.2056 1.0854h0.5839c2.7067 0 5.4547 0.1099 8.1614-0.1099-0.5702 2.4456-1.0786 5.063-2.3152 7.2477-0.6457 1.1541-1.7861 2.1365-3.1051 1.3739-0.8687-0.6519-1.5027-1.5679-1.8068-2.6105-0.507-1.4035-0.9066-2.8434-1.1954-4.3074-0.1236-0.529-0.2267-1.058-0.3297-1.5938h0.0069zm-30.564-12.826v-2.3083c-0.06433-0.67139 0.0177-1.3488 0.24044-1.9854 0.18941-0.24377 0.43377-0.4393 0.71315-0.57063 0.27937-0.13133 0.58584-0.19474 0.8944-0.18505 0.68698-0.04809 1.5045-0.04809 2.267-0.0687 6.1828-0.06183 12.325-0.04809 18.494 0 3.0777 0 6.1828 0.03435 9.2468 0h4.6096c0.363 0.00418 0.7254 0.02941 1.0855 0.07557 0.3275 0.04956 0.6466 0.14436 0.948 0.28166 0.2433 0.13408 0.4273 0.3548 0.5153 0.61829 0.113 0.33589 0.198 0.68056 0.2541 1.0305 0.0344 0.18549 0.0344 0.35037 0.055 0.52211v1.7175l0.055 2.3083c0 1.5388 0.0343 3.0777 0.0893 4.6165 0.0412 1.9167 0.0893 3.8403 0.1236 5.757 0 0-0.0549 0-0.0755 0.0618-2.4114-0.213-4.8708-0.1168-7.2889-0.1237h-1.8892c-0.3324-2.0618-0.9137-4.0756-1.7312-5.9973-0.3874-1.0076-1.1405-1.8319-2.1091-2.3083-0.4596-0.17582-0.9585-0.22267-1.4429-0.13549-0.4843 0.08718-0.9356 0.30507-1.305 0.6301-0.8583 0.8222-1.5124 1.8339-1.9098 2.954-0.5872 1.4545-1.085 2.9435-1.4908 4.4586-0.0412 0.1305-0.0824 0.2679-0.1168 0.3984h-10.119l-0.1237-0.5427c-0.3199-1.4939-0.7236-2.9687-1.2091-4.4173-0.30945-1.0962-0.89899-2.093-1.7106-2.8922-0.5359-0.38255-1.1818-0.5801-1.84-0.56275-0.65821 0.01736-1.2928 0.24867-1.8078 0.65895-1.69 1.1885-2.5487 3.325-3.2426 5.1936-0.07557 0.1923-0.1374 0.3847-0.21297 0.577v-0.5221l0.03435-9.2399z\" fill=\"#32A448\"/>\n" +
    "    </svg>\n" +
    "    <svg ng-if=\"tile.contentType === 'concept'\" width=\"41\" height=\"94\" viewBox=\"0 0 41 94\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <path d=\"m27.434 71.223v0.1678l-0.6711 2.5636h-0.0402l-3.0535-0.7248v-0.0738l0.5033-2.3086-0.047-0.0537-1.5636-1.9529-0.1208 0.094-2.8589 1.2079-0.0537-0.1208-2.0132-2.5702-0.047-0.0604 2.2884-1.7717 0.0537-0.0537 0.1141-3.4628h-0.0671l-2.5972-0.9597 0.047-0.1544 0.6308-3.1004 0.047-0.0604 2.6844 0.1543 2.322-2.134-1.0335-3.5703v-0.0671l3.7581-1.3421 0.0805-0.047 1.7852 3.087 0.0402 0.1476 2.9864-0.1879 1.671-2.9461 0.0537-0.0939 3.1676 1.6173 0.1677 0.0671-1.114 3.0871-0.047 0.0536 1.6643 1.6711 0.1007 0.0805 2.3891-0.6711h0.1074l1.3422 3.6575v0.1409l-2.6039 1.4093h-0.1006l-0.1477 2.2817-0.1208 0.1812 2.4562 1.5771 0.094 0.0335-1.1006 3.1072v0.1074l-2.369-0.6711-0.1342-0.1745-1.6979 1.3422h-0.0872l0.4094 2.6441-3.2548 1.1073v-0.1074l-0.745-2.3287-0.0805-0.0805-3.1944 0.2617zm2.8522-9.8986c-0.0811-0.1924-0.2092-0.3614-0.3725-0.4915s-0.3566-0.2172-0.5622-0.2532c-0.2057-0.0361-0.4171-0.02-0.6149 0.0468s-0.3757 0.1822-0.5174 0.3355c-0.1864 0.1652-0.341 0.3631-0.4564 0.5838l-0.0402 0.0806c-0.0029 0.02-0.0029 0.0403 0 0.0604v0.0469c-0.096 0.2114-0.1378 0.4434-0.1215 0.675 0.0162 0.2316 0.09 0.4555 0.2146 0.6514s0.2961 0.3577 0.499 0.4706c0.2028 0.1129 0.4307 0.1734 0.6628 0.1761 0.2697-0.0191 0.5304-0.1055 0.7581-0.2513s0.4152-0.3464 0.5453-0.5834c0.1302-0.237 0.1989-0.5028 0.1998-0.7732s-0.066-0.5367-0.1945-0.7745z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m18.388 36.716v0.1543l-5.0332 5.0265-0.4161 0.0403h-12.194l-0.073821-0.0738v-23.992l0.073821-0.0738h17.643v18.918z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m10.066 13.878c0.0671-2.3086-0.22814-4.6574 0.6711-6.8452 0.7776-1.9938 2.225-3.6547 4.0937-4.6976 1.9729-0.9421 4.1947-1.2308 6.3428-0.82408 2.1481 0.4067 4.1107 1.4876 5.6026 3.0857 1.6711 1.9529 1.9596 4.6507 2.067 7.1136 0.1275 2.8052 0.0403 5.6305 0.0336 8.4357 0 3.389-0.0336 6.7847 0 10.174 0.0335 3.3891 0 6.9123 0.1476 10.355h-1.8858-1.1341c-0.3643-0.0275-0.7296 0.0395-1.0603 0.1946-0.0663 0.041-0.1173 0.1025-0.1452 0.1753-0.0279 0.0727-0.0311 0.1526-0.0092 0.2274-6e-4 0.0561 0.0184 0.1107 0.0537 0.1543 0.7114 0.9597 1.4965 1.8657 2.2213 2.8119 0.3624 0.4631 0.7114 0.9395 1.0872 1.3892 0.2013 0.2416 0.3959 0.4764 0.604 0.6711 0.0846 0.1219 0.1942 0.2245 0.3214 0.3008 0.1273 0.0764 0.2694 0.1248 0.4168 0.1421 0.0381 0.0079 0.0775 0.0078 0.1156-3e-4s0.0742-0.024 0.1058-0.0467c0.4766-0.3502 0.9014-0.7659 1.2617-1.2348 0.3959-0.4496 0.7986-0.8926 1.1878-1.3422l1.1476-1.3086c0.2013-0.2282 0.3892-0.4631 0.5838-0.6711 0.2002-0.2245 0.3531-0.487 0.4497-0.7718 0.0257-0.0658 0.0353-0.1369 0.028-0.2072s-0.0313-0.1378-0.0701-0.197c-0.0387-0.0591-0.0911-0.1081-0.1527-0.1428-0.0615-0.0348-0.1305-0.0543-0.2012-0.057-1.2652-0.1097-2.5357-0.1455-3.8051-0.1073 0.255-6.8854 0.141-13.764 0.1275-20.65 0-3.0132 0.094-6.0398-0.1141-9.0463-0.1879-2.6173-0.671-5.2681-2.4494-7.3149-2.9461-3.389-8.4827-4.5634-12.623-2.8924-2.2876 0.9644-4.1426 2.7335-5.2144 4.9728-1.3019 2.577-1.1878 5.3687-1.1006 8.1538 0.03863 0.1421 0.12298 0.2676 0.24001 0.3571 0.11704 0.0895 0.26027 0.138 0.40759 0.138 0.14733 0 0.29055-0.0485 0.40759-0.138s0.20139-0.215 0.23999-0.3571z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m28.857 78.558v4.2413c0 2.0737-0.1342 4.181-1.2952 5.9661-2.7448 4.2346-9.3953 5.0197-13.368 2.0602-1.8132-1.4511-3.0213-3.5253-3.389-5.8184-0.5554-3.282-0.7668-6.613-0.6308-9.9388 0-3.5233 0-7.0532-0.0739-10.576 0-2.3085-0.0603-4.6171-0.0805-6.9189 0-1.557 0-3.1139-0.06038-4.6977 1.0352 0.025 2.0709-0.0176 3.1005-0.1275 0.0781-0.0061 0.1525-0.0356 0.2136-0.0847s0.1059-0.1155 0.1286-0.1905c0.0366-0.0676 0.0507-0.1452 0.0403-0.2214-0.1671-0.5557-0.4257-1.0796-0.7651-1.5502-0.3087-0.4966-0.671-0.9731-0.9596-1.4563l-0.9798-1.4093c-0.295-0.4962-0.6588-0.948-1.0805-1.3422-0.07349-0.0565-0.16244-0.0893-0.25502-0.0939-0.06472-0.0202-0.13384-0.0214-0.19924-0.0036-0.06539 0.0179-0.12432 0.054-0.16986 0.1042-0.80769 0.8827-1.5565 1.8175-2.2414 2.7985l-1.0201 1.3556c-0.39813 0.4529-0.70772 0.9764-0.91269 1.5435-0.00328 0.0177-0.00328 0.0359 0 0.0537-0.03812 0.0774-0.04618 0.1663-0.02263 0.2493s0.07704 0.1544 0.15014 0.2003c0.59997 0.2119 1.2416 0.2786 1.8724 0.1946h2.1005c-0.14764 1.3422-0.14093 2.7381-0.15435 4.1138v6.5566c0 3.7514 0.07382 7.4961 0 11.248-0.15969 3.4911 0.05177 6.9892 0.63083 10.436 0.38668 2.3999 1.5684 4.6002 3.3554 6.2479 3.9595 3.4226 11.026 3.3555 14.71-0.4765 0.9977-1.0043 1.7489-2.2264 2.1945-3.5702 0.3896-1.3538 0.5706-2.7591 0.5368-4.1675v-4.7379c-8e-4 -0.0903-0.0195-0.1796-0.0549-0.2627s-0.0868-0.1585-0.1513-0.2217c-0.0645-0.0633-0.1408-0.1132-0.2246-0.147-0.0838-0.0337-0.1734-0.0506-0.2637-0.0497-0.0904 8e-4 -0.1796 0.0195-0.2628 0.0549-0.0831 0.0354-0.1584 0.0868-0.2217 0.1513-0.0632 0.0645-0.1132 0.1408-0.1469 0.2246-0.0338 0.0838-0.0507 0.1734-0.0498 0.2637z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m40.4 60.069c-0.1141-0.2953-0.2148-0.5973-0.3288-0.8992-0.2325-0.6594-0.5128-1.3009-0.8389-1.9194-0.0719-0.1291-0.1503-0.2546-0.2349-0.3758-0.0272-0.0339-0.0616-0.0614-0.1007-0.0805-0.0254-0.0419-0.0623-0.0755-0.1063-0.0969-0.0441-0.0215-0.0933-0.0297-0.142-0.0239h-0.2214c-0.2148 0-0.4295 0.0604-0.6376 0.1006-0.4362 0.0806-0.8657 0.2081-1.2952 0.3289h-0.0939c-0.124-0.1462-0.2586-0.283-0.4027-0.4094-0.297-0.2951-0.6107-0.5729-0.9395-0.8321 0.0264-0.0497 0.0488-0.1013 0.0671-0.1544l0.255-0.7382c0.2097-0.5591 0.3669-1.1365 0.4698-1.7247 0-0.1611 0.0402-0.3154 0.047-0.4765v-0.0939-0.0806c-0.0113-0.0494-0.0343-0.0955-0.0672-0.1342-0.1109-0.1284-0.2483-0.2314-0.4026-0.302l-0.7583-0.3758c-0.5973-0.2953-1.1879-0.5704-1.7986-0.8254-0.1486-0.0584-0.3043-0.0968-0.463-0.1141-0.0396-0.0102-0.0812-0.0102-0.1208 0-0.0413-0.0019-0.0824 0.0063-0.1198 0.0238-0.0374 0.0176-0.07 0.0439-0.095 0.0769-0.6166 0.8221-1.1728 1.6878-1.6643 2.5904 0 0.0335 0 0.0671-0.0537 0.1073-0.2446-1e-3 -0.489 0.0147-0.7315 0.047-0.3355 0-0.6711 0.0537-0.9999 0.1007l-0.4026 0.0537h-0.2148c0-0.0806-0.0738-0.1678-0.1141-0.2483-0.1275-0.2349-0.2684-0.4564-0.4026-0.6711-0.3222-0.5369-0.6711-1.0671-1.0067-1.5771l-0.2147-0.302c-0.039-0.0582-0.084-0.1122-0.1342-0.161-0.0403-0.0403-0.2014-0.1611-0.0672-0.0604-0.0532-0.0407-0.1153-0.0682-0.1812-0.0806-0.1611-0.0537-0.3354-0.0537-0.4966 0-0.6711 0.2282-1.3019 0.4765-1.9461 0.7181-0.396 0.1476-0.7785 0.3154-1.161 0.4899-0.1153 0.0537-0.2274 0.1142-0.3356 0.1812l-0.1006 0.0738c-0.047 0.0203-0.0858 0.0559-0.1101 0.1009-0.0244 0.045-0.0329 0.097-0.0242 0.1474-0.0065 0.0423-0.0065 0.0853 0 0.1275 0.1986 1.1019 0.4539 2.1927 0.7651 3.2682-0.0023 0.0179-0.0023 0.0359 0 0.0537-0.4027 0.3691-0.7919 0.7449-1.1744 1.1342-0.2013 0.208-0.4027 0.4295-0.5973 0.6711-0.0826-7e-3 -0.1657-7e-3 -0.2483 0h-0.6308c-0.4896-0.0269-0.9802-0.0269-1.4697 0h-0.3356c-0.0665 0.0026-0.1313 0.0225-0.1878 0.0578s-0.1028 0.0848-0.1343 0.1435c-0.0277 0.0371-0.0502 0.0777-0.0671 0.1208-0.2934 0.8759-0.5178 1.7734-0.6711 2.6844-0.0686 0.2352-0.052 0.4871 0.047 0.7113 0.0162 0.0316 0.0365 0.061 0.0604 0.0873-0.0029 0.011-0.0029 0.0225 0 0.0335 0.0333 0.0467 0.0741 0.0875 0.1208 0.1208l0.1543 0.1141c0.1812 0.1207 0.372 0.2262 0.5705 0.3154 0.2684 0.1275 0.557 0.2215 0.8388 0.3356 0.2183 0.0966 0.4425 0.1796 0.6711 0.2483h0.1141c-0.0403 0.2416-0.0671 0.4899-0.0872 0.7315-0.0537 0.6711-0.0873 1.2817-0.1141 1.926v0.2282h-0.0403c-0.2147 0.161-0.4228 0.3355-0.6375 0.5033-0.419 0.3342-0.82 0.6903-1.2013 1.067-0.0781 0.0799-0.1479 0.1676-0.208 0.2618l-0.0403 0.0939s0.0403-0.1409 0 0 0 0.047 0 0c-0.0076 0.0345-0.0079 0.0702-1e-3 0.1049s0.021 0.0675 0.0413 0.0964c-0.0029 0.0201-0.0029 0.0404 0 0.0604 0.1879 0.3222 0.3758 0.6711 0.5905 0.953 0.3624 0.51 0.7517 0.9932 1.1342 1.4831 0.1069 0.1502 0.2566 0.2648 0.4295 0.3288h0.1745c0.1219 0.0234 0.2472 0.0234 0.3691 0 0.2416-0.0604 0.4832-0.1342 0.718-0.2147 0.5705-0.208 1.1543-0.4094 1.6979-0.6711l0.1879-0.1007c0.0604 0.094 0.1208 0.1812 0.1879 0.2685 0.255 0.3825 0.5302 0.7516 0.8053 1.114 0.0455 0.0655 0.0948 0.1282 0.1477 0.1879-0.0403 0.1678-0.0671 0.3422-0.1007 0.5167-0.0335 0.1745-0.0939 0.5101-0.1275 0.7651s-0.0604 0.3959-0.0671 0.5905v0.2886c-5e-4 0.044 0.0081 0.0876 0.0255 0.1281 0.0173 0.0405 0.0429 0.0768 0.0752 0.1068 0.3272 0.2309 0.6931 0.4014 1.0804 0.5033 0.5436 0.1879 1.1073 0.3087 1.6643 0.4429 0.1267 0.0365 0.2575 0.0568 0.3893 0.0604 0.1021-0.0088 0.2008-0.041 0.2885-0.0939l0.0604-0.0403h0.0403c0.042-0.0296 0.0765-0.0687 0.1007-0.1141 0.1275-0.302 0.255-0.6107 0.3623-0.9261 0.1074-0.3154 0.1611-0.4899 0.2416-0.7382 0.0695-0.2201 0.1256-0.4442 0.1678-0.6711 0.0037-0.0715 0.0037-0.1432 0-0.2147h0.8322c0.5202-0.0046 1.0399-0.0359 1.5569-0.094 0.047 0.1611 0.1007 0.3221 0.1544 0.4832 0.1543 0.4496 0.3087 0.8993 0.4966 1.3422 0.0402 0.0939 0.1073 0.1745 0.1543 0.2617 0.0212 0.0358 0.0484 0.0676 0.0805 0.094 0.0236 0.0443 0.0598 0.0807 0.1039 0.1046 0.0442 0.0238 0.0944 0.0341 0.1445 0.0296 1.0489-0.154 2.076-0.4311 3.0601-0.8255 0.2349-0.0805 0.5235-0.1476 0.6309-0.4026 0.0347-0.0464 0.0583-0.1003 0.0687-0.1573 0.0105-0.0571 0.0077-0.1158-0.0083-0.1715-0.0126-0.2671-0.0508-0.5322-0.1141-0.7919-0.0766-0.4686-0.1796-0.9324-0.3087-1.3892 0.0472-0.0251 0.0921-0.0543 0.1342-0.0872l0.4563-0.3691c0.1678-0.141 0.3289-0.2953 0.4832-0.443l0.2081-0.208c0.0899 0.0589 0.1868 0.1062 0.2885 0.1409 0.1812 0.0671 0.3758 0.1141 0.5637 0.1745 0.2202 0.0728 0.4443 0.1333 0.6711 0.1812 0.2588 0.0537 0.5213 0.0874 0.7852 0.1007 0.0492 0.0032 0.0985 0.0032 0.1477 0 0.077 0.0202 0.1579 0.0202 0.2348 0h0.047l0.0671-0.0403c0.135-0.1063 0.2411-0.2447 0.3087-0.4027 0.1198-0.2776 0.2229-0.5622 0.3087-0.8522 0.2197-0.5683 0.3904-1.1543 0.5101-1.7516l0.0537-0.4228c0.0243-0.0787 0.0243-0.1629 0-0.2416-0.0803-0.1588-0.2066-0.2898-0.3624-0.3758l-0.5503-0.3557c-0.4362-0.2684-0.8859-0.5234-1.3422-0.7717 0.0173-0.0198 0.0309-0.0425 0.0402-0.0671 0.0136-0.1047 0.0136-0.2107 0-0.3154v-0.5436-1.0536l0.1812-0.0672 0.5302-0.2885c0.4483-0.2323 0.883-0.49 1.3019-0.7718l0.2618-0.1879 0.161-0.1342s0.1275-0.1007 0 0c0.0348-0.0333 0.0642-0.0718 0.0873-0.1141 0.0303-0.0289 0.0553-0.063 0.0738-0.1007 0.0237-0.0214 0.044-0.0463 0.0604-0.0738 0.0585-0.2256 0.0396-0.4642-0.0537-0.6778zm-1.6106 0.8926c-0.4362 0.208-0.8657 0.4362-1.2818 0.6711-0.1264 0.0752-0.2378 0.173-0.3289 0.2885-0.0545 0.0385-0.0928 0.0959-0.1073 0.1611-0.047 0.2349-0.094 0.4698-0.1275 0.6711-0.0672 0.4362-0.1074 0.8657-0.1477 1.3019-0.0202 0.129-0.0202 0.2603 0 0.3892-0.0223 0.0527-0.0285 0.1108-0.0177 0.1669 0.0107 0.0562 0.0379 0.1079 0.0781 0.1486 0.0027 0.0132 0.0027 0.0269 0 0.0402l0.0671 0.0738c0.0787 0.0809 0.164 0.155 0.255 0.2215l0.5973 0.4496c0.4161 0.302 0.8389 0.5839 1.2617 0.859l0.0939 0.0537c-0.1074 0.2148-0.2147 0.4295-0.302 0.6711-0.2214 0.5637-0.4429 1.1342-0.6241 1.7113v0.0671l-0.2416-0.1208-0.1543-0.0604h0.0537c-0.0458-0.0229-0.0928-0.0431-0.141-0.0604h-0.0939l-0.349-0.1141-0.6174-0.1812c-0.1487-0.0507-0.3066-0.069-0.4631-0.0536-0.0364-0.022-0.0782-0.0336-0.1208-0.0336-0.0911 0.0023-0.1806 0.0253-0.2617 0.0671-0.1914 0.07-0.3739 0.1623-0.5436 0.2752-0.208 0.1409-0.4228 0.2818-0.6241 0.4362l-0.4429 0.3489c-0.0852 0.0647-0.1579 0.1443-0.2147 0.2349-0.048 0.0935-0.0732 0.197-0.0739 0.302-0.0092 0.0488-0.0092 0.0989 0 0.1476-0.0201 0.2748-0.0201 0.5507 0 0.8255 0 0.2617 0.0537 0.5302 0.0873 0.7919l0.0805 0.5771-0.6711 0.2215c-0.6074 0.2015-1.2014 0.4414-1.7784 0.7181-0.026-0.1753-0.0664-0.3482-0.1208-0.5168-0.1275-0.4228-0.2349-0.859-0.3825-1.2684-0.0504-0.1472-0.1278-0.2837-0.2282-0.4026-0.0188-0.0256-0.0415-0.0483-0.0671-0.0671-0.0367-0.0527-0.0849-0.0963-0.1409-0.1275h-0.047c-0.132-0.0449-0.27-0.0698-0.4094-0.0738-0.2244 0.0014-0.4486 0.0171-0.6711 0.0469-0.5301 0.0537-1.067 0.1141-1.5972 0.1812-0.2275 0.0148-0.4526 0.0553-0.671 0.1208-0.0538 0.0176-0.1032 0.0464-0.1448 0.0846-0.0417 0.0382-0.0747 0.0849-0.0968 0.1369l-0.0537 0.0604c-0.063 0.0764-0.117 0.1597-0.1611 0.2483-0.0991 0.2291-0.1755 0.4673-0.2282 0.7113-0.1006 0.4161-0.1946 0.8389-0.2617 1.2617l-0.6711-0.1476c-0.5546-0.1395-1.1206-0.2293-1.6911-0.2685v0l0.1677-0.0604c0.0029-0.0267 0.0029-0.0537 0-0.0805l0.094-0.2953c0.1275-0.4094 0.2282-0.8187 0.3221-1.2348 0.067-0.2003 0.067-0.4171 0-0.6174-0.0364-0.0988-0.091-0.1899-0.161-0.2684-0.1477-0.188-0.3088-0.3691-0.4631-0.5571-0.298-0.3493-0.6138-0.6831-0.9462-0.9999-0.1013-0.0817-0.2117-0.1515-0.3289-0.208h-0.0872-0.047c-0.1823-0.0398-0.3726-0.021-0.5436 0.0537-0.2751 0.0939-0.5369 0.2281-0.8053 0.3422-0.4698 0.2081-0.9194 0.4362-1.3422 0.6711-0.0409-0.0674-0.0857-0.1324-0.1342-0.1946l-0.4966-0.604c-0.3578-0.4738-0.7479-0.9223-1.1677-1.3422l-0.0537-0.0469c0.1342-0.0739 0.2617-0.1611 0.3892-0.2416 0.4642-0.291 0.9122-0.6069 1.3422-0.9463 0.1198-0.0865 0.2281-0.188 0.3221-0.302 0.0374-0.019 0.0713-0.0439 0.1007-0.0738 0.0764-0.0929 0.1336-0.2001 0.1682-0.3153 0.0345-0.1152 0.0458-0.2362 0.0331-0.3558v-0.8456c0.0279-0.6423 0.0122-1.2858-0.0469-1.926 0-0.1074-0.0336-0.2147-0.0537-0.3288 0.0134-0.0574 0.0134-0.1171 0-0.1745v-0.0604c-0.0139-0.0173-0.0297-0.0331-0.047-0.047 0 0-0.047-0.0671-0.0805-0.0805-0.078-0.0678-0.1636-0.1264-0.255-0.1745-0.2303-0.1158-0.4706-0.2101-0.7181-0.2819l-0.7584-0.2617c-0.1718-0.0527-0.3466-0.0953-0.5234-0.1275 0.0133-0.0351 0.0245-0.071 0.0336-0.1074 0.0671-0.2416 0.1073-0.5033 0.1543-0.7516 0.1216-0.5892 0.2067-1.1854 0.255-1.7851 0.6711 0.1074 1.3825 0.1611 2.0804 0.208 0.152 0.0168 0.3058-0.0016 0.4496-0.0537 0.0613-0.0205 0.1183-0.0524 0.1678-0.0939l0.0537-0.0671c0.6711-0.5235 1.3422-1.0738 2.0133-1.6576 0.1231-0.1033 0.2315-0.223 0.3221-0.3557 0.0285-0.0316 0.0512-0.0679 0.0671-0.1074 0.0637-0.1986 0.0637-0.4121 0-0.6107-0.0671-0.2953-0.1745-0.5771-0.2617-0.859-0.2081-0.6711-0.4161-1.3422-0.6711-1.9596l-0.0872-0.2214h0.0335c0.3221-0.0738 0.6711-0.1745 0.9597-0.2752 0.6711-0.2214 1.3891-0.4764 2.0736-0.7247l0.1812-0.0672 0.0403 0.0873c0.1208 0.2684 0.2483 0.5301 0.3758 0.7919 0.2685 0.5368 0.5704 1.067 0.8792 1.577 0.0536 0.0806 0.1006 0.1678 0.161 0.2416l0.047 0.0671c0.1707 0.1479 0.3804 0.2435 0.604 0.2752h0.8455c0.5436 0 1.1006 0 1.6442-0.0738 0.2278-0.0024 0.4489-0.0777 0.6309-0.2148 0.1239-0.0864 0.2252-0.2015 0.2952-0.3355l0.3222-0.7449c0.2952-0.5369 0.5838-1.0738 0.8388-1.6375l0.0738-0.1812c0.2148 0.1476 0.443 0.2819 0.6711 0.4161 0.5503 0.3288 1.1342 0.6174 1.7113 0.906 0.1063 0.0602 0.2161 0.114 0.3289 0.161-0.4048 0.7334-0.7374 1.5043-0.9933 2.3019-0.0648 0.1522-0.0879 0.319-0.0671 0.4832-0.0084 0.0568-0.0051 0.1147 0.0099 0.1701 0.0151 0.0555 0.0414 0.1072 0.0774 0.152-0.1074-0.1477 0 0 0 0.0335 0.0341 0.0585 0.0722 0.1146 0.1141 0.1678 0.1342 0.1879 0.2751 0.3624 0.4228 0.5369l0.4496 0.4832c0.1275 0.1275 0.2483 0.2751 0.3825 0.3959 0.1183 0.1099 0.2609 0.1904 0.4161 0.2349l0.0403 0.0403c0.2154 0.0859 0.4556 0.0859 0.671 0l0.5772-0.1812c0.2214-0.0671 0.4496-0.141 0.6711-0.2282 0.2214-0.0873 0.3892-0.1476 0.5771-0.2416 0.0445 0.2966 0.1072 0.5902 0.1879 0.8791 0.1745 0.6711 0.4429 1.3422 0.6711 1.9529 0.047 0.1208 0.094 0.2617 0.1544 0.3892-0.2416 0.1007-0.4966 0.2081-0.7382 0.3222z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m28.891 57.352c-0.7657 0.0275-1.5162 0.222-2.1989 0.5697-0.6828 0.3478-1.2813 0.8404-1.7538 1.4436-0.7352 1.1063-1.0779 2.4273-0.9731 3.7514 0.0762 0.6661 0.2911 1.3089 0.6309 1.8868 0.3399 0.5779 0.797 1.0782 1.3421 1.4687 1.1409 0.8099 2.5546 1.1386 3.9357 0.9151 1.3812-0.2235 2.6191-0.9813 3.4463-2.1097 0.6599-0.9494 0.9827-2.0925 0.917-3.2468s-0.5161-2.2534-1.2794-3.1218c-0.4986-0.5727-1.1302-1.0141-1.8393-1.2856-0.7091-0.2714-1.474-0.3646-2.2275-0.2714zm3.8655 6.6371c-0.4938 0.9747-1.3344 1.7293-2.3565 2.1155-1.022 0.3863-2.1516 0.3761-3.1666-0.0284-0.5205-0.213-0.9875-0.5381-1.368-0.9522s-0.6649-0.907-0.8332-1.4436c-0.2452-1.1084-0.1006-2.2674 0.4094-3.2816 0.4177-0.8024 1.1112-1.4268 1.9529-1.7583 0.3374-0.0967 0.6836-0.1597 1.0334-0.1879 0.71-0.1266 1.4411-0.0575 2.1148 0.1998s1.2647 0.6931 1.7096 1.2607c0.4448 0.5677 0.7268 1.2457 0.8156 1.9614 0.0889 0.7157-0.0188 1.442-0.3114 2.1012v0.0134z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m29.266 60.338c-0.3084-0.0077-0.6142 0.0583-0.892 0.1926-0.2778 0.1342-0.5196 0.3328-0.7052 0.5792-0.1867 0.2343-0.3299 0.5003-0.4228 0.7851-0.0688 0.1726-0.1161 0.3529-0.1409 0.5369-0.0192 0.2466 0.0113 0.4945 0.0895 0.7291s0.2026 0.4512 0.3658 0.637c0.1633 0.1857 0.3621 0.3369 0.5847 0.4446s0.4645 0.1698 0.7115 0.1825c0.4916 0.0054 0.9691-0.1645 1.3467-0.4794s0.6306-0.754 0.7136-1.2386c0.0939-0.5166-0.0065-1.0496-0.2819-1.4966-0.1421-0.244-0.3406-0.4505-0.5787-0.6022-0.2381-0.1518-0.5091-0.2444-0.7903-0.2702zm0.6711 2.1609c-0.0032 0.0133-0.0032 0.027 0 0.0403 0 0.0872-0.047 0.1678-0.0738 0.2483-0.0152 0.0393-0.0331 0.0774-0.0537 0.1141l-0.0604 0.0939-0.0202 0.0873c-0.0456 0.0568-0.0949 0.1106-0.1476 0.161-0.0255 0.0163-0.0482 0.0367-0.0671 0.0604l-0.0671 0.0403-0.1141 0.0671h-0.4765-0.1208-0.2214l-0.1007-0.0537-0.0738-0.0604c-0.0547-0.0457-0.1063-0.095-0.1544-0.1476v-0.0134l-0.0671-0.1141-0.0402-0.094c-0.0021-0.0245-0.0021-0.0492 0-0.0738 0 0 0-0.0738-0.0336-0.1074-0.0336-0.0335 0-0.0402 0-0.0537-0.0034-0.0648-0.0034-0.1298 0-0.1946-0.0026-0.0469-0.0026-0.094 0-0.1409 0.0195-0.0806 0.0465-0.1593 0.0805-0.2349l0.0873-0.1409v-0.047c0.0137-0.0195 0.0294-0.0375 0.0469-0.0537 0.0672-0.0805 0.141-0.1543 0.2148-0.2282l0.1476-0.1006 0.1141-0.0604h0.0537l0.1342-0.047h0.2416c0.0245-4e-3 0.0494-4e-3 0.0738 0 0.0437 0.0094 0.0864 0.0229 0.1275 0.0403-0.114-0.0403 0 0 0 0l0.1141 0.0738c-0.0671-0.047 0 0 0 0l0.1208 0.1208 0.0873 0.1476c0.0249 0.0388 0.0473 0.0792 0.0671 0.1208 0.0016 0.0111 0.0016 0.0225 0 0.0336 0.0272 0.0763 0.0474 0.1549 0.0604 0.2349v0.1342c0 0.047 0.1543 0.1074 0.1543 0.1476h-0.0335z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m10.315 42.655c1.0082 0.037 2.0178-0.0034 3.0199-0.1208 0.0719-4e-3 0.1414-0.0271 0.2013-0.0671 0.5005-0.3675 0.9615-0.7858 1.3758-1.2482l1.2751-1.2952 1.2616-1.2751c0.2148-0.2282 0.4429-0.4497 0.6376-0.6711 0.1839-0.2356 0.3499-0.4846 0.4966-0.7449 0.0523-0.0231 0.0984-0.0582 0.1346-0.1026 0.0362-0.0443 0.0613-0.0965 0.0734-0.1524 0.1802-1.5186 0.2296-3.0499 0.1476-4.5769v-4.8587-4.852-2.4965c0.0692-0.7891 0.0125-1.5842-0.1677-2.3555-0.0276-0.0856-0.0844-0.1587-0.1605-0.2066-0.076-0.0478-0.1666-0.0673-0.2556-0.0551l-0.1141-0.0336c-2.926-0.1812-5.8653-0.1543-8.798-0.1476h-4.4091l-2.1743 0.0537c-0.74963-0.0699-1.5055-0.0246-2.2415 0.1342-0.097418-0.0049-0.1933 0.0257-0.26982 0.0862-0.076525 0.0605-0.1285 0.1467-0.14626 0.2426-0.21076 1.9858-0.26461 3.9852-0.16106 5.9794v6.1003c0 4.0265-0.11409 8.0531 0.11409 12.026 1.48e-4 0.0679 0.015256 0.135 0.044252 0.1965 0.028995 0.0615 0.071167 0.1158 0.12352 0.1591 0.039251 0.0713 0.097934 0.13 0.16922 0.1692s0.15224 0.0573 0.23344 0.0523c2.1609 0.0537 4.3218 0.0828 6.4828 0.0872 1.0335 0 2.067-0.0134 3.1072-0.0268zm5.1204-3.4964-1.2348 1.2415-0.5503 0.5436v-1.3422-1.3891-0.9194h0.7785l1.2818 0.0537h1.2751 0.2952l-0.4831 0.4563-1.3624 1.3556zm-12.751-20.696h2.1408 4.5299c2.8119 0 5.6372 0 8.4424-0.1342-0.0535 0.6091-0.0669 1.2212-0.0403 1.8321v2.4964 4.8587 4.8588c-0.0491 1.3019-0.0312 2.6056 0.0537 3.9057h-0.9127-1.2751l-1.2817 0.0537c-0.4512-0.0201-0.9029 0.0228-1.3422 0.1275-0.0403 0-0.0604 0.047-0.094 0.0738-0.0771 0.018-0.1482 0.056-0.2059 0.1102s-0.1002 0.1227-0.1229 0.1985c-0.0965 0.4723-0.1326 0.9549-0.1074 1.4362v1.4831 1.5032c-0.0053 0.0805-0.0053 0.1612 0 0.2416-0.7449-0.0537-1.5032 0-2.2482 0h-3.1138c-2.0133 0-4.0266 0.0269-6.0398 0.0806 0.20133-3.8521 0.10066-7.7377 0.10066-11.59v-5.9727-2.9931c0-0.8523 0-1.7247-0.07382-2.5837 0.54744 0.0335 1.0963 0.038 1.6442 0.0134h-0.05369z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m3.6371 22.146c1.9462 0.1141 3.9125 0.0671 5.8654 0.0671 1.9551 0.0929 3.9142 0.0615 5.8653-0.0939 0.3557 0.0469 0.51-0.2349 0.4832-0.5235s-0.1275-0.5637-0.4832-0.5167c-1.951-0.1577-3.9101-0.1913-5.8653-0.1007-1.9529 0-3.9192-0.0403-5.8654 0.0671-0.0728-0.0068-0.14621 0.0029-0.21469 0.0286-0.06849 0.0256-0.13025 0.0665-0.18065 0.1195-0.0504 0.0529-0.08812 0.1167-0.11031 0.1864-0.02219 0.0696-0.02828 0.1434-0.0178 0.2158-0.01186 0.0726-0.00674 0.147 0.01495 0.2173s0.05936 0.1346 0.11006 0.1879c0.05071 0.0533 0.11307 0.0942 0.18219 0.1193 0.06913 0.0252 0.14315 0.034 0.21625 0.0258z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m15.395 25.273c-0.9484-0.1131-1.9045-0.149-2.8588-0.1074h-2.9394c-1.9328 0-3.9192-0.0604-5.8519 0.1275-0.1192 0.0141-0.2291 0.0713-0.30885 0.161s-0.12381 0.2056-0.12381 0.3256 0.04406 0.2358 0.12381 0.3255 0.18965 0.147 0.30885 0.161c1.9328 0.1879 3.9192 0.1208 5.8519 0.1275h2.9394c0.9543 0.0349 1.9098-1e-3 2.8588-0.1074 0.1084-0.0333 0.2031-0.1005 0.2705-0.1917 0.0673-0.0912 0.1036-0.2016 0.1036-0.3149 0-0.1134-0.0363-0.2238-0.1036-0.3149-0.0674-0.0912-0.1621-0.1584-0.2705-0.1918z\" fill=\"#b60\"/>\n" +
    "        <path d=\"m10.106 29.307c-2.0804 0-4.1742-0.0537-6.2479 0.0739-0.1192 0.014-0.2291 0.0713-0.30885 0.161-0.07975 0.0896-0.12381 0.2055-0.12381 0.3255s0.04406 0.2359 0.12381 0.3255c0.07975 0.0897 0.18965 0.147 0.30885 0.161 2.0737 0.1275 4.1675 0.0806 6.2479 0.0739 0.1381-0.0152 0.2657-0.0807 0.3584-0.1841s0.1439-0.2374 0.1439-0.3763-0.0512-0.2729-0.1439-0.3763-0.2203-0.1689-0.3584-0.1841z\" fill=\"#b60\"/>\n" +
    "    </svg>\n" +
    "    <svg ng-if=\"tile.contentType === 'examples'\" width=\"40\" height=\"94\" viewBox=\"0 0 40 94\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <path d=\"m34.694 5.4799c-0.3151 1.822-1.0274 2.3015-1.6987 2.0549-0.9795-0.39044-1.8837-2.3289-1.4522-3.9797 0.0908-0.72999 0.4357-1.4047 0.9743-1.9057 0.5387-0.50102 1.2365-0.79637 1.9711-0.8342 0.4496 0.005328 0.891 0.12121 1.2852 0.33743 0.3942 0.21622 0.7291 0.52612 0.9753 0.90238 2.7399 5.699 1.8083 13.604 1.9864 19.816-0.0959 5.1579-0.1644 12.33-0.3219 18.323l-0.8083 0.1164c-1.5207-0.0685-3.0276-0.1575-4.5414-0.2329l-0.87-0.0411h-0.089c0.9521-11.528 1.918-23.029 2.8838-34.557h-0.2946z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m9.2748 24.214h0.21235c2.6374 0.147 5.281 0.147 7.9184 0h0.2397c0.1644-0.9247 1.0618-8.1376 1.0412-9.8295v-0.137c-2.8084 0-5.61-0.0411-8.4116 0l-0.0479 0.1918c-0.1644 2.5892-0.4932 6.1443-0.95214 9.7747zm-5.288 22.454-3.5619-0.1644v-0.1507c5.6237-11.419 6.2059-25.557 6.7402-38.421v-0.11645c8.7952 0.2603 17.241 0.41784 25.762-0.21919l0.0616-0.11645c0.685 0.274 1.37-0.20549 1.6988-2.0549h0.2945c-0.9658 11.549-1.9316 23.05-2.8975 34.571-0.2968 3.5619-0.5936 7.1261-0.8904 10.692h-0.4658l-25.125-1.0138-2.0001-0.0753v-0.363l0.36989-2.3769 0.0137-0.1918z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m34.49 0.60278v0.1781c-0.7346 0.037838-1.4325 0.33318-1.9711 0.83421-0.5386 0.50102-0.8835 1.1757-0.9743 1.9057-0.4315 1.6508 0.4726 3.5893 1.4522 3.9798l-0.0617 0.11644c-8.5212 0.63704-16.967 0.47949-25.762 0.2192h-0.90418c-2.3084-0.10275-2.6988-6.1648-0.35619-6.384 9.5212-0.84253 19.433-0.81513 28.577-0.84938z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m30.735 50.689h0.4658l-0.1849 2.1782-0.1713 0.2055-2.4111-0.1027-22.954-0.9111-4.4729-0.178h-0.15755c0.041099-0.8083 0.082198-1.5687 0.13015-2.3769h0.19864l2.4248 0.1027 2.0001 0.0754 25.132 1.0069z\" fill=\"#fff\"/>\n" +
    "        <path d=\"m18.687 14.385c0 1.6782-0.863 8.9048-1.0411 9.8706h-0.2398c-2.6374 0.147-5.2809 0.147-7.9184 0h-0.21235c0.45894-3.6304 0.78771-7.1854 0.95211-9.761l0.048-0.1918c2.8015-0.0411 5.6031 0 8.4115 0v0.0822z\" fill=\"#3F81C3\"/>\n" +
    "        <path d=\"m39.332 13.076c-0.0133-2.1949-0.2057-4.3849-0.5754-6.5484-0.1865-1.0394-0.4521-2.063-0.7946-3.0619-0.238-0.91767-0.71-1.7579-1.3699-2.4385-0.5695-0.50222-1.2961-0.79044-2.055-0.81512-2.3287-0.22292-4.6694-0.29385-7.0073-0.21234-2.5002 0-5.0072 0.034249-7.5348 0.082198-2.5276 0.047949-5.0278 0.14385-7.5485 0.28084-1.2604 0.068498-2.5208 0.14385-3.7811 0.25344-1.0596 0.005593-2.1158 0.12268-3.1509 0.34934-2.2056 0.71924-1.8906 4.4524-1.0412 6.0347 0.22234 0.45163 0.57249 0.82797 1.0069 1.0823 0.36709 0.17108 0.76636 0.26214 1.1713 0.26715-0.28084 2.3974-0.34249 4.7949-0.48633 7.2403-0.1507 2.5481-0.32195 5.1031-0.58224 7.6444-0.4498 5.115-1.3693 10.178-2.7468 15.124-0.37674 1.3015-0.78088 2.6235-1.2261 3.9044-0.44524 1.281-1.0823 2.6441-1.6097 3.9798-0.0188 0.058-0.021068 0.1202-0.0065507 0.1795 0.014517 0.0592 0.045247 0.1133 0.088748 0.1561 0.0060729 0.0634 0.034004 0.1226 0.079 0.1676 0.044995 0.045 0.10425 0.0729 0.16759 0.079 1.0254 0.1647 2.059 0.2745 3.0961 0.3288 0.00329 0.057 0.00329 0.1142 0 0.1713l-0.11645 0.6233c-0.0546 0.3723-0.0889 0.7473-0.10274 1.1234l-0.87678-0.048-1.1576-0.0411c-0.06049-0.0046-0.1213 0.0029-0.1788 0.0223-0.057504 0.0193-0.11053 0.05-0.15591 0.0903s-0.082192 0.0893-0.10824 0.1441c-0.026049 0.0548-0.040802 0.1142-0.043382 0.1748-0.14802 0.4088-0.22673 0.8394-0.23289 1.2741-0.065058 0.4406-0.065058 0.8883 0 1.3289 0.0184 0.0709 0.055407 0.1355 0.10719 0.1873 0.051785 0.0518 0.11647 0.0888 0.18735 0.1072 0.081354 0.0614 0.17911 0.0971 0.28085 0.1028l1.2261 0.0548 7.4389 0.3288c-2.3769 10.014-4.7332 20.063-7.2814 30.084-0.57995 2.2833-1.1599 4.546-1.7399 6.7882-0.42469 1.6371 2.096 2.3289 2.5276 0.685 2.6098-9.8706 4.836-19.864 7.1444-29.804 0.6233-2.4248 1.1918-4.877 1.685-7.3293 0.0133-0.1046 0.0133-0.2104 0-0.315l7.9184 0.3561c-0.0626 0.1826-0.0859 0.3764-0.0685 0.5686 0.274 3.6852 0.5526 7.3704 0.8357 11.056 0.5137 6.658 0.9932 13.316 1.5549 19.974 0.2192 2.6372 0.4795 5.2744 0.7535 7.9047 0.0086 0.3286 0.1425 0.6415 0.3742 0.8745 0.2318 0.2331 0.5439 0.3687 0.8725 0.379 0.3307-0.0035 0.6467-0.137 0.8799-0.3715s0.3649-0.5513 0.3667-0.882l-0.1712-2.5139v-0.6849c-0.0548-1.2262-0.1644-2.4591-0.2535-3.6921-0.2192-3.1441-0.4658-6.2813-0.6849-9.4253-0.459-6.1649-0.959-12.391-1.4454-18.584-0.1027-1.3699-0.2123-2.692-0.3151-4.0414-0.0126-0.1562-0.052-0.3091-0.1164-0.4521l1.7878 0.0548c-0.0511 0.2116-0.0511 0.4323 0 0.6439 0.8083 3.5071 1.6577 7.0005 2.5139 10.501 1.4521 5.973 2.9043 11.953 4.4387 17.912 0.3014 1.1781 0.6849 2.3494 1.0274 3.5139 0.137 0.4247 0.2672 0.8562 0.411 1.2809 0.048 0.1576 0.1028 0.3083 0.1576 0.459s0.2945 0.8699 0.1507 0.3904c0.4452 1.4453 2.7399 0.8288 2.2741-0.6302-0.4863-1.5686-0.685-3.2605-1.0754-4.8634-0.685-2.7947-1.37-5.5689-2.0892-8.3499-1.4248-5.7127-2.8404-11.421-4.2469-17.124-0.2945-1.1987-0.6096-2.3906-0.911-3.5825l3.877 0.1781c0.0882 0.0056 0.1765-9e-3 0.2582-0.0426s0.1547-0.0854 0.2134-0.1514c0.0588-0.066 0.1017-0.1445 0.1256-0.2295 0.024-0.0851 0.0282-0.1745 0.0124-0.2615v-0.0547c0.5089-3.0636 0.8474-6.1531 1.0138-9.2541l0.2671-3.1373h0.1987l0.7534 0.048 1.4454 0.0959 2.9522 0.1849c0.1426 0.01 0.2836-0.0348 0.3943-0.1251 0.1107-0.0904 0.1828-0.2195 0.2017-0.3612 0.0836-0.0763 0.1351-0.1817 0.1438-0.2946 0.5343-4.7195 0.4178-9.5006 0.4863-14.241 0.0617-4.2606 0.0959-8.5623 0.0206-12.857zm-15.659 79.924c-0.0284-0.0131-0.054-0.0318-0.0753-0.0548l0.0753 0.0548zm-0.685-1.733v0.1028c-0.0068-0.048-0.0137-0.0822-0.0137-0.1028h0.0137zm-17.145-84.129c-0.81512-0.53429-1.0138-1.8768-1.048-2.7605 0-0.74663 0.07535-2.1714 0.97268-2.4385 0.45191-0.0806 0.91141-0.11046 1.37-0.08905l1.7672-0.08905 3.5277-0.17124c2.3152-0.0959 4.6304-0.1781 6.9457-0.2329 2.5892-0.06164 5.1784-0.08219 7.7677-0.11644 1.6371 0 3.2947 0 4.9455-0.03425-0.4548 0.47148-0.7994 1.0379-1.009 1.6586-0.2097 0.62064-0.2791 1.28-0.2034 1.9307 0.0807 0.84773 0.3857 1.6587 0.8837 2.3495-4.2675 0.1233-8.5281 0.34934-12.809 0.34249-2.3358 0-4.6647-0.0411-7.0005-0.0822l-3.6099-0.0685h-1.6851c-0.28579 0.02066-0.57088-0.04881-0.81513-0.19864zm-4.7949 38.996c1.1266-2.0706 2.0445-4.2482 2.7399-6.5005 0.79314-2.4669 1.4202-4.9841 1.8768-7.5348 0.90936-5.086 1.495-10.224 1.7536-15.385 0.17125-2.7878 0.34934-5.5894 0.26029-8.3704h0.45894c2.5687 0.10274 5.1306 0.18494 7.6992 0.21919 2.8633 0.03425 5.7333 0.0411 8.5965 0 2.6098-0.0548 5.247-0.11645 7.8431-0.39044-0.1872 0.99642-0.3176 2.0027-0.3905 3.0139-0.1415 1.2969-0.2808 2.5961-0.4178 3.8976-0.2671 2.6372-0.5137 5.2675-0.8083 7.9047-0.5822 5.1716-1.2809 10.336-2.2947 15.446-0.5548 2.8221-1.2124 5.6237-1.7124 8.4527-2.0377-0.1884-4.0852-0.2502-6.1306-0.185-2.1988-0.0411-4.3976-0.1027-6.5895-0.1712-2.192-0.0685-4.4113-0.1439-6.6101-0.2261-2.1303-0.089-4.2332-0.2603-6.3087-0.1712h0.03424zm29.523 5.1853v1.1371c-6.5073-0.2466-13.017-0.475-19.529-0.685-0.125-0.0174-0.2518-0.0174-0.3768 0l-8.343-0.3631-0.95212-0.0342v-0.685-0.5891-0.0753l1.185 0.0479c9.3295 0.3905 18.679 0.8426 27.981 1.2467h0.0343zm0.685-8.8568c-0.2055 2.5207-0.5069 5.0483-0.6165 7.5827-8.8294-0.3219-17.666-0.6165-26.502-0.9521 0.0822-0.3082 0.15755-0.6233 0.21234-0.9384 0-0.1987 0.06165-0.3973 0.0959-0.6028 0-0.0891 0-0.1849 0.04795-0.2808v-0.0617l2.7399 0.1096c2.2056 0.1027 4.4044 0.1986 6.61 0.2808 2.2057 0.0822 4.3154 0.1576 6.4731 0.2124 2.1429 0.1712 4.296 0.1712 6.4388 0 0.0512-0.0064 0.1003-0.0238 0.1441-0.051 0.0437-0.0272 0.081-0.0635 0.1094-0.1066 0.0824 0.0021 0.1632-0.0229 0.23-0.0712 0.0668-0.0482 0.1159-0.117 0.1399-0.1959 1.7741-4.9182 2.596-10.234 3.3701-15.398 0.774-5.1647 1.3288-10.419 1.7809-15.652 0.1302-1.507 0.2398-3.0208 0.3288-4.5277 0.1267-1.2401 0.1748-2.487 0.1439-3.7332 0.0569-0.01741 0.1119-0.04035 0.1644-0.0685 0.1759 0.02511 0.3553 0.00911 0.5241-0.04674 0.1688-0.05586 0.3223-0.15005 0.4485-0.2752-0.5548 5.4182-0.9315 10.864-1.3699 16.282l-1.5138 18.494zm2.4933-2.9317h-0.8562c0.137-1.6645 0.2808-3.329 0.4178-4.9936 0.516-6.1648 1.0275-12.33 1.5344-18.494 0.2192-3.5413 0.5685-7.0621 0.774-10.562 5e-3 -0.1007-0.0166-0.20095-0.0626-0.29069s-0.1147-0.16582-0.1993-0.22062c-0.0847-0.05481-0.1822-0.08641-0.2829-0.09164-0.1007-0.00524-0.201 0.01608-0.2909 0.06182-0.0531-0.00662-0.1069 0.00645-0.151 0.03674-0.0442 0.03028-0.0757 0.07569-0.0887 0.12765-0.0808 0.09681-0.1287 0.21672-0.137 0.34249v0.2055c-0.2466 0.78773-0.685 1.8494-1.4248 1.1919-0.3484-0.37917-0.6088-0.83052-0.7627-1.3219-0.1539-0.49137-0.1976-1.0106-0.1278-1.5208 0.1028-1.2193 0.87-2.507 2.2262-2.6303 1.7125-0.13699 2.281 1.6645 2.692 2.9797 1.1234 3.603 1.1782 7.4663 1.1439 11.213-0.0342 3.7468-0.0753 7.295-0.1301 10.96-0.0685 4.3975-0.2809 8.8088-0.048 13.2-0.9452-0.0411-1.8974-0.0754-2.8426-0.1233l-1.3837-0.0685z\" fill=\"#3F81C3\"/>\n" +
    "        <path d=\"m7.3165 35.42c1.5138 0.4178 3.2605 0.2672 4.7948 0.3151 1.5344 0.0479 3.0413 0.1027 4.562 0.137 2.7145 0.1564 5.4368 0.1107 8.1444-0.137 0.1238-0.0155 0.2392-0.0708 0.3288-0.1575 0.0615-0.0376 0.1132-0.0892 0.1507-0.1507 0.5549-0.9727 0.685-2.329 0.8836-3.4249 0.3425-1.7947 0.685-3.603 0.9522-5.4114 0.3288-2.0321 0.6142-4.0871 0.8562-6.1648 0.281-2.044 0.4457-4.1022 0.4932-6.1649 4e-3 -0.0604-0.0049-0.121-0.0262-0.1776-0.0213-0.0567-0.0544-0.1082-0.0973-0.151-0.0428-0.0428-0.0942-0.076-0.1509-0.0973s-0.1173-0.0302-0.1777-0.0262c-0.0433-0.0193-0.0897-0.0309-0.137-0.0342-2.9797 0-5.9593-0.0753-8.9048-0.0959h-4.4181c-1.4653-0.0424-2.9318 0.0079-4.3907 0.1507-0.0587 5e-3 -0.1147 0.0272-0.161 0.0637-0.04624 0.0365-0.08078 0.0858-0.09931 0.1418-0.03843 0.0296-0.0704 0.0667-0.09395 0.1091-0.02356 0.0425-0.03821 0.0892-0.04305 0.1375-0.44524 3.3153-0.61648 6.6717-1.0412 9.9939-0.38675 3.4934-1.0023 6.9577-1.8426 10.371-0.03182 0.1064-0.02682 0.2204 0.0142 0.3235 0.04103 0.1032 0.11567 0.1895 0.21184 0.245 0.01339 0.047 0.03776 0.0902 0.07111 0.1259s0.07472 0.063 0.12069 0.0796zm7.3772-20.673c1.1782 0 2.3495 0 3.5277 0.0411 0 0.0685 0 0.137-0.0343 0.2055-0.0616 0.411-0.089 0.8356-0.1301 1.2535-0.1096 1.0412-0.2124 2.0549-0.3288 3.1303-0.2412 1.4527-0.3899 2.9193-0.4453 4.3908-0.4191-0.0416-0.8412-0.0416-1.2603 0-0.685 0-1.4179 0.0411-2.1303 0.0479-0.7124 0.0069-1.5755 0-2.3632 0-0.411 0-0.822-0.0479-1.233-0.0411-0.1504-0.0131-0.30165-0.0131-0.45206 0 0.19176-1.5549 0.36306-3.1029 0.51376-4.6578 0.1507-1.555 0.3151-2.9934 0.3288-4.4935 1.3288 0.1712 2.6782 0.1096 4.0071 0.1233zm-4.9593 9.9596c0.54256 0.1435 1.1039 0.2036 1.6645 0.1781h2.4317c0.8083 0 1.4316-0.0343 2.1509-0.0617h0.8562c0.2569 0.0241 0.5158-0.0159 0.7535-0.1164 0.0342 0 0.0479-0.0548 0.0753-0.0822 0.058 0.0042 0.1157-0.0102 0.165-0.0409 0.0492-0.0308 0.0874-0.0764 0.109-0.1303 0.2354-0.5931 0.3897-1.2152 0.459-1.8495 0.1849-1.1028 0.3013-2.2193 0.4178-3.3222 0.1164-1.1028 0.2329-2.1713 0.3014-3.2536 0.0376-0.3964 0.0376-0.7955 0-1.1919l8.3705 0.1233c-0.3905 3.877-0.8289 7.7198-1.4591 11.569-0.2876 1.7444-0.5982 3.4842-0.9315 5.2195-0.1233 0.685-0.2672 1.3015-0.3768 1.9591-0.0479 0.315-0.1233 0.6849-0.1644 0.9795-2.6234 0.0548-5.2401 0.1849-7.8704 0.1438-1.4796 0-2.9614-0.0319-4.4455-0.0959-1.4192-0.1234-2.8454-0.144-4.2675-0.0616 0.78704-3.2837 1.3749-6.6119 1.7604-9.9665z\" fill=\"#3F81C3\"/>\n" +
    "    </svg>\n" +
    "    <svg ng-if=\"tile.contentType === 'story'\" width=\"44\" height=\"94\" viewBox=\"0 0 44 94\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <path d=\"m42.889 49.884v-0.1841c-1.0431-4.111-2.0862-8.2833-3.0679-12.394-0.9817-4.1109-1.9635-8.2219-3.1906-12.333 1.4112-3.9882 2.5157-8.1605 3.6815-12.272 0.5522-2.0248 1.1658-4.111 1.718-6.1358 0.3068-0.98173 0.5522-2.0248 0.859-3.0065 0.2454-1.0431 0.6749-2.0862 0.6749-3.1292 0-0.061357-0.0613-0.12272-0.1227-0.18407-0.0614-0.061357-0.1227-0.12272-0.2454-0.12272-2.0862-0.18407-4.2951-0.12272-6.4426-0.12272s-4.295 0-6.3812 0.061358c-4.295 0-8.5901 0.061358-12.885 0.061358-2.393 0-4.7859 0.061358-7.1789 0.18407-0.1227 0-0.184 0.061358-0.2454 0.12272-0.0614 0-0.12271 1e-6 -0.18407 0.061358-0.98172 1.8407-1.718 3.8655-2.4543 5.829-0.73629 1.9634-1.4726 3.9269-2.2702 5.8903-0.73629 1.9635-1.4726 3.9269-2.2089 5.8904-0.36815 0.9817-0.73629 1.9634-1.1044 2.9451-0.18407 0.5523-0.36814 1.0431-0.61357 1.5953-0.18408 0.4909-0.42951 0.9818-0.42951 1.4726v0.0614c0 0.0613 0 0.1227 0.061358 0.1841 1.2272 4.1109 2.5157 8.2219 3.7428 12.272 0.61358 2.0248 1.2272 3.9883 1.8407 6.0131 0.67494 2.0861 1.1658 4.2336 1.9634 6.1971-1.4726 4.2337-2.8225 8.4673-4.2337 12.701-1.4112 4.2951-2.8838 8.5901-4.2337 12.946-0.12272 0.3681 0.24543 0.6136 0.55222 0.5522 0.061357 0 0.12272 0.0614 0.18407 0.0614 0.73629 0.0613 1.4726 0.1227 2.2089 0.184 0.67494 0.0614 1.4112 0.0614 2.0862 0.1228 1.2272 0.0613 2.5157 0.1227 3.7428 0.1227-0.06136 0.0613-0.06136 0.1227-0.12272 0.1227-0.98172 1.1658-1.5953 2.577-1.4726 4.1723 0 0.2455 0.06135 0.4295 0.06135 0.675-0.06135 0.9817 0.06136 2.0861 0.12272 3.0065 0.06136 1.2885 0.06136 2.6384 0.67493 3.8655 0.67494 1.2885 1.7794 2.393 2.9452 3.3133 1.2272 0.9204 2.577 1.7794 3.9883 2.2703 3.0678 0.9817 6.3812 1.1658 9.5718 0.5522 2.9451-0.6136 5.4608-2.1475 7.4242-4.4791 0.4909-0.6136 0.9818-1.2885 1.3499-1.9635 0.3682-0.7363 0.3682-1.5339 0.3682-2.3316 0-1.718 0.1227-3.4973-0.0614-5.2154 0-0.1227-0.0614-0.184-0.1227-0.184-0.0614-0.9204-0.3068-1.9021-0.7977-2.7611 0.1841 0 0.3682 0.0613 0.5523 0.0613 0.4295 0 0.9203 0.0614 1.3498 0.0614 0.1841 0 0.3068-0.0614 0.4295-0.1841 0.1227 0 0.2455-0.0614 0.3068-0.1841 0.5522-0.9203 0.7363-2.0861 1.0431-3.0679 0.3068-1.1044 0.6136-2.1475 0.9204-3.2519 0.6135-2.1475 1.2271-4.3564 1.8407-6.5039 1.2885-4.3564 2.577-8.6515 3.8042-13.008 0.1227-0.184 0.1227-0.4295 0-0.6135zm-37.306-13.437c-1.2885-3.9269-2.5157-7.8538-3.8042-11.842 0.67494 0.0613 1.4112 0.0613 2.0862 0.0613 1.0431 0 2.0862 0.0614 3.0679 0.0614 2.0862 0.0614 4.1109 0.0614 6.1971-0.0614 0.4295 0 0.4295-0.6135 0-0.6135-2.0862-0.1227-4.111-0.1227-6.1971-0.1227h-3.0679c-0.67494 0-1.4112-0.0614-2.0862 0 0.12272-0.2455 0.18408-0.4909 0.30679-0.7977 0.18408-0.4909 0.36815-0.9817 0.55222-1.4726 0.36815-1.0431 0.73629-2.0248 1.1044-3.0679 0.73629-1.9634 1.4726-3.9269 2.1475-5.8903 0.73629-1.9635 1.4726-3.9269 2.1475-5.8903 0.73629-1.9634 1.5339-3.9269 2.0248-5.9517 0.0614 0.061358 0.1227 0.061358 0.1841 0.061358 8.5287 0.24543 17.119 0.061358 25.648 0 2.3316 0 4.6632 0.061358 6.9948-0.12272-0.3682 0.79765-0.6136 1.718-0.859 2.5157-0.3068 0.98172-0.6136 2.0248-0.9204 3.0065-0.6136 2.0248-1.1658 4.0496-1.7794 6.1358-1.1658 4.0496-2.3929 8.1605-3.436 12.272-2.3316-0.1841-4.6632-0.1841-6.9948-0.2454-1.2271 0-2.4543-0.0614-3.6814-0.0614-1.1658 0-2.393-0.1841-3.4974-0.0613-0.2455 0.0613-0.3682 0.4295-0.0614 0.5522 1.1044 0.2454 2.2702 0.1841 3.3747 0.2454 1.3499 0 2.577 0 3.8655 0.0614 2.393 0.0613 4.7246 0.1227 7.1175 0.184 0.9817 4.0496 1.9635 8.0993 2.9452 12.149s1.9021 8.0992 3.0065 12.087c-8.4674-0.3068-16.935-0.6749-25.402-0.9203-2.3929-0.0614-4.7859-0.1228-7.1788-0.2455-0.49086-2.0248-1.2272-4.0496-1.8407-6.0744-0.73629-1.9634-1.3499-3.9269-1.9634-5.9517zm3.1292 45.712c0.06135-0.1841 0.12271-0.3681 0.24543-0.5522 0 0 0-0.0614 0.06135-0.0614 0.30679 0.0614 0.61358 0.0614 0.92037 0.0614h0.55221c0.1841 0 0.4295 0 0.6136-0.1227 0.1227-0.1227 0.0613-0.2454 0-0.3068-0.1227-0.1841-0.3682-0.1841-0.6136-0.1841-0.1841 0-0.3681-0.0613-0.55221-0.0613-0.18407 0-0.30679 0-0.49086-0.0614 0.06136-0.0613 0.12271-0.1227 0.12271-0.1841 0.55226-0.6749 1.1658-1.2271 1.8408-1.7793 0.859-0.675 1.8407-1.1658 2.8224-1.5953 0.0614 0.0613 0.1841 0.184 0.2455 0.2454 0.0613 0.0613 0.184 0.1841 0.2454 0.2454 0.0613 0.0614 0.1227 0.1227 0.1841 0.1227 0.0613 0 0.0613 0.0614 0.1227 0.0614h0.0613s-0.0613 0 0 0c0.1228 0.0613 0.2455-0.0614 0.2455-0.2454v-0.0614c0-0.0614 0-0.0614-0.0614-0.1227-0.0613-0.0614-0.0613-0.1227-0.1227-0.1841-0.0614-0.1227-0.1227-0.1841-0.2454-0.2454l-0.0614-0.0614c0.3682-0.1841 0.7977-0.3068 1.1658-0.4908 0.0614 0 0.0614-0.0614 0.1227-0.0614 0.1227 0.2454 0.2454 0.4909 0.3682 0.7363 0.2454 0.4909 0.4908 1.0431 0.7363 1.5339 0.2454 0.4909 0.4908 1.0431 0.7362 1.534 0.1228 0.2454 0.2455 0.4909 0.3682 0.7363s0.2454 0.4908 0.3681 0.6749c0 0.3068 0.1841 0.6136 0.4295 0.7977 0.1228 0.0613 0.2455 0.1227 0.4296 0.184 0.184 0.1841 0.3681 0.3682 0.5522 0.5523 0.2454 0.2454 0.4908 0.4295 0.7976 0.6749 0.5522 0.4295 1.0431 0.859 1.534 1.2885 0.4908 0.4295 0.9817 0.7977 1.5339 1.2271 0.4295 0.3068 0.7977 0.675 1.2272 0.9204-1.534 0.4909-3.1906 0.7363-4.8473 0.7363 0-0.1227 0.0614-0.3068 0.0614-0.4295 0-0.2454 0.0613-0.5522 0-0.7976-0.0614-0.2455-0.4295-0.3068-0.5523-0.0614-0.1227 0.2454-0.184 0.4909-0.2454 0.7363 0 0.1227-0.0613 0.2454-0.0613 0.3681v0.1841c-1.5954-0.0613-3.1293-0.3681-4.6019-0.859l0.1841-0.1841c0-0.0613 0.0614-0.0613 0.0614-0.1227l0.0613-0.0613c0-0.0614 0.0614-0.0614 0.0614-0.1228 0.0613-0.0613 0.0613-0.184 0-0.2454-0.0614-0.0613-0.1227-0.1227-0.2455-0.0614-0.1227 0-0.184 0.0614-0.3068 0.1228-0.0613 0.0613-0.1227 0.1227-0.2454 0.1227-0.0613 0.0613-0.1841 0.1227-0.2454 0.1841-0.1227-0.0614-0.2454-0.1228-0.4295-0.1841-2.0862-0.9204-4.111-2.5157-5.2154-4.6018 0.06136 0.184 0.06136 0.1227 0.06136 0.0613zm14.358 0.0614c0.1228 0.2454 0.2455 0.4908 0.3682 0.6749 0.2454 0.4909 0.4908 0.9817 0.7363 1.4726 0.3681 0.6749 0.6749 1.4112 1.0431 2.0861-0.2455-0.184-0.4295-0.3681-0.675-0.5522-0.5522-0.4295-1.0431-0.859-1.5953-1.2885-0.4908-0.4295-1.0431-0.7976-1.5339-1.2271-0.1841-0.1227-0.3682-0.3068-0.6136-0.4295 0.4295 0 0.9204 0 1.3499-0.1227 0.3681-0.0614 0.7363-0.3068 0.9203-0.6136zm-0.6749-0.4295c-0.0614 0.1227-0.2454 0.2454-0.3681 0.3068-0.3682 0.1227-0.675 0.1227-1.1045 0.1227s-0.7363-0.0614-1.1044-0.1227c-0.0614 0-0.1227 0-0.1841-0.0614-0.0614 0-0.0614-0.0614-0.1227-0.0614-0.1841-0.2454-0.0614-0.6749 0.1227-0.9203 0.1227-0.1227 0.2454-0.3068 0.3682-0.3682 0.184-0.1227 0.3681-0.3068 0.5522-0.3681 0.4295-0.1227 0.859 0 1.1658 0.2454 0.3068 0.1841 0.6135 0.4909 0.6749 0.859 0.0614 0.0614 0.0614 0.2455 0 0.3682zm-3.0679-1.4113c-0.0613 0-0.0613 0.0614 0 0-0.0613 0.0614-0.1227 0.1228-0.1227 0.1228-0.1227 0.1227-0.1841 0.2454-0.2454 0.3681-0.1227-0.2454-0.2455-0.5522-0.3682-0.7363-0.2454-0.4908-0.4295-1.0431-0.6749-1.5339-0.2454-0.4909-0.4909-1.0431-0.6749-1.534-0.0614-0.1841-0.1841-0.3681-0.2455-0.5522 0.6136 0.5522 1.2885 1.1044 1.9021 1.5953 0.4909 0.3682 0.9817 0.7977 1.534 1.1658 0.1227 0.0614 0.2454 0.1841 0.3067 0.2454-0.5522 0.1228-1.043 0.4909-1.4112 0.859zm13.683 3.4361c0 1.4112-0.3068 2.6997-1.1045 3.8655-1.5339 2.2089-3.8041 3.8655-6.3812 4.6632-2.9451 0.9204-6.1357 0.859-9.0809 0.1841-2.7611-0.675-5.5835-2.393-7.2402-4.7859-0.36815-0.5523-0.67494-1.1658-0.79765-1.8408-0.12272-0.7363-0.12272-1.4726-0.18408-2.2088 0-0.1841-0.06135-0.4295-0.06135-0.6136 0.79765 1.3498 1.9635 2.4543 3.252 3.3746 4.2337 2.9452 10.124 3.3134 14.91 1.534 2.3929-0.9204 4.6632-2.393 6.0744-4.6018 0.2454-0.3682 0.4295-0.7977 0.6136-1.1658v1.5953zm-5.0313 2.5156v0 0zm4.5404-5.0313c-0.3681-0.7976-0.9203-1.4726-1.5339-2.0248-0.9817-0.9817-2.2703-1.5953-3.5588-2.1475-1.4112-0.6136-2.8838-0.9204-4.3564-1.2885-1.4725-0.3682-3.1292-0.3682-4.6631 0-0.3068 0.0613-0.1841 0.4908 0.0613 0.4908 0.9817 0 1.9635-0.0613 2.9452 0v0.1227c0 0.1228-0.0614 0.3068-0.0614 0.4295 0 0.1228 0 0.3068-0.0613 0.4296 0 0.184 0 0.3681 0.1227 0.4908 0.0613 0.0614 0.1841 0.0614 0.2454 0.0614 0.1841-0.1227 0.1841-0.3068 0.2454-0.4295 0.0614-0.1227 0.0614-0.3068 0.0614-0.4295v-0.0614-0.1227 0-0.1841-0.1227c0.2454 0 0.4295 0.0614 0.6749 0.1227 1.2885 0.3068 2.6384 0.6136 3.9269 1.1045 0.1841 0.0613 0.4295 0.184 0.675 0.2454-0.0614 0.0613-0.0614 0.1227-0.1228 0.1841-0.0613 0.0613-0.0613 0.1227-0.1227 0.184l-0.0613 0.0614v0.0614c0 0.0613-0.0614 0.0613-0.0614 0.1227v-0.1227 0.0613c0 0.0614-0.0613 0.1227 0 0.1227 0 0.0614 0.0614 0.0614 0.0614 0.1227 0.0613 0.0614 0.184 0.0614 0.2454 0 0.0614-0.0613 0.1227-0.0613 0.1841-0.1227 0.0613-0.0613 0.1227-0.1227 0.1841-0.1227 0.0613-0.0613 0.184-0.1841 0.2454-0.2454 1.9021 0.859 3.8042 2.2702 4.1723 4.3564h-0.0614-0.4295-0.4295c-0.184 0-0.3681 0-0.4908 0.1227-0.0614 0.0613-0.0614 0.1841 0 0.2454 0.1227 0.1227 0.3068 0.1227 0.4295 0.1841s0.3068 0.0614 0.4295 0.0614h0.1841c-0.7977 1.2271-2.0248 2.2702-3.252 3.0065-0.0614-0.0614-0.1227-0.0614-0.1841-0.1227h-0.1227c-0.0613 0-0.0613 0-0.1227 0.0613l-0.0614 0.0614v0.184s0 0.0614 0.0614 0.0614c-0.1841 0.1227-0.3682 0.1841-0.5522 0.3068-0.3682 0.1841-0.7363 0.3682-1.1658 0.4909-0.3682-1.0431-0.9817-2.0248-1.4726-3.0066-0.2454-0.4908-0.5522-0.9817-0.7977-1.5339-0.2454-0.4295-0.4908-0.9817-0.7976-1.4112-0.1227-0.4295-0.3682-0.7977-0.7363-1.0431-0.1227-0.0614-0.2454-0.1841-0.3681-0.2454-0.3068-0.4296-0.7977-0.7363-1.1658-1.0431-0.4909-0.4295-1.0431-0.859-1.5953-1.2885-0.9818-0.7977-1.9635-1.4726-3.0066-2.2089-0.0613-0.0614-0.0613-0.0614-0.1227-0.1227-0.1841-0.1228-0.3681 0.0613-0.3068 0.2454v0.1841c0.0614 0.184 0.1227 0.4295 0.2455 0.6135-0.9204 0-1.9021 0.4295-2.7611 0.7977-0.859 0.3681-1.7181 0.859-2.5157 1.4112-0.3681 0.3068-0.7363 0.5523-1.0431 0.859-0.36815 0.3068-0.61358 0.7363-0.85901 1.1045-0.24543 0.3068-0.42951 0.6135-0.55222 0.9817-0.18407-0.4909-0.30679-0.9817-0.30679-1.5339 0-0.4909 0-0.9818 0.12272-1.4113 0.24543-1.2885 0.98172-2.3929 1.9021-3.3133 1.7794-1.718 4.1723-2.6997 6.5653-3.1906 4.6632-0.9817 10.124-0.0613 13.806 3.0679 1.8407 1.4112 2.7611 3.6815 2.0861 6.0744zm5.8904-17.978c-0.6136 2.1475-1.3499 4.295-1.9635 6.4426-0.3068 1.1044-0.6749 2.1475-0.9817 3.2519-0.2454 0.859-0.6136 1.718-0.7363 2.577h-0.0614c-0.4295-0.0613-0.9203-0.0613-1.3498-0.0613h-0.675-0.3067c-0.0614 0-0.1841 0-0.2455 0.0613h-0.0613c-1.4726-1.8407-3.7429-3.0678-5.9517-3.8041-2.5771-0.859-5.3995-1.1045-8.0993-0.7977-2.8838 0.3682-5.8289 1.4112-8.0378 3.3133-0.12272 0.1227-0.24543 0.1841-0.36815 0.3068-0.06135-0.0613-0.18407-0.1227-0.30678-0.1227-1.4112-0.0614-2.8225-0.1227-4.2337-0.1841-0.67493 0-1.4112-0.0613-2.0862-0.0613h-1.8407c1.4112-4.111 2.6997-8.2833 4.0496-12.456 1.3499-4.1724 2.7611-8.4061 4.0496-12.578 0.55222 0 1.0431 0.0614 1.5953 0.0614 8.0992 0.4295 16.198 0.7976 24.298 1.1044 2.393 0.0614 4.7246 0.1841 7.1175 0.2455-1.3498 4.2336-2.577 8.4673-3.8041 12.701z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m14.972 59.824c-0.859-0.5523-1.9634-0.6136-2.9452-0.3068-1.8407 0.5522-3.8655 2.3929-3.9268 4.4177-0.06136 1.1045 0.67494 1.7794 1.6567 2.1475 0.36819 0.1841 0.73629 0.2455 1.1658 0.3068 0.9204 0.1227 1.9635 0 2.8838-0.1227 0.859-0.1227 1.718-0.3681 2.3316-0.9817 0.7363-0.7363 0.859-1.8407 0.6136-2.8225-0.2454-0.9817-0.9204-2.0248-1.7794-2.6383zm0.7977 4.7245c-0.4295 0.5522-1.1658 0.7363-1.7794 0.859-0.7977 0.1841-1.6567 0.1841-2.4543 0.2454-0.4909 0-1.0431 0.0614-1.534-0.1227-0.36811-0.1227-0.67489-0.3068-0.92032-0.6135-0.12272-0.1841-0.18408-0.3682-0.24544-0.5523-0.18407-0.7363 0.24544-1.5953 0.67494-2.2088 0.55222-0.7363 1.2885-1.3499 2.0861-1.7181 0.7363-0.3681 1.5953-0.5522 2.393-0.3067 0.859 0.3067 1.4112 1.1044 1.7794 1.902 0.3681 0.7977 0.5522 1.7794 0 2.5157z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m11.413 43.257c0.9817 0.859 2.2702 1.2272 3.5588 1.2885 1.2885 0.0614 2.8224-0.1227 3.8655-0.9817 0 0.1227 0 0.2454 0.0614 0.3068 0.0613 0.3068 0.184 0.6136 0.2454 0.9204 0.0613 0.3067 0.1227 0.6749 0.2454 0.9817 0.0614 0.3068 0.1841 0.6136 0.3068 0.859 0 0.0613 0.0614 0.0613 0.1227 0.1227 0 0.0614 0.0614 0.1227 0.1227 0.1227 0.6136 0.1227 1.2885 0 1.9021-0.0613 0.3068-0.0614 0.6136-0.0614 0.9204-0.1228 0.3068-0.0613 0.6749-0.0613 0.9204-0.2454 0.0613-0.0614 0.1227-0.1841 0.0613-0.2454 0.1227-0.3068 0.0614-0.675 0.0614-0.9204 0-0.3068-0.0614-0.6749-0.0614-0.9817s-0.0613-0.6749-0.0613-0.9817v-0.1841c0.6135 0.5522 1.4725 0.9204 2.2702 0.9817 0.9204 0.0614 1.7794-0.3068 2.4543-0.9817 1.2885-1.3499 1.4726-3.7428 0.1227-5.0927-0.3681-0.4295-1.0431-0.859-1.6566-0.9817 0.184-0.1841 0.3681-0.4295 0.4295-0.7363 0.184-0.6749-0.1228-1.4112-0.5523-1.9021s-1.043-0.9817-1.718-1.1044c-0.6136-0.1228-1.2885 0-1.8407 0.2454-0.2454 0.1227-0.4909 0.2454-0.6749 0.4295 0-0.3068-0.0614-0.6136-0.1841-0.9204-0.1841-0.6135-0.5522-1.2271-0.9817-1.718-0.7977-1.0431-1.9021-1.718-3.252-1.8407-2.4543-0.1841-4.97 1.5953-5.5222 3.9882-0.2454 1.1658 0.1227 2.1476 0.7977 2.8838-0.6136 0-1.2886 0.2455-1.8408 0.6136-0.9817 0.675-1.5339 1.7794-1.5953 3.0065 0 1.1658 0.55217 2.4544 1.4726 3.252zm-0.1841-4.8472c0.3068-0.4909 0.7977-0.9204 1.3499-1.1658 0.5522-0.2455 1.1045-0.2455 1.6567-0.1228 0.1227 0.0614 0.184 0.0614 0.2454 0 0.1227-0.0613 0.1841-0.184 0.1227-0.3067 0-0.0614 0-0.0614-0.0613-0.1228-0.4295-0.5522-1.0431-0.9817-1.2886-1.6566-0.2454-0.7363 0.0614-1.534 0.4295-2.2089 0.6136-1.0431 1.534-1.9021 2.6998-2.2089 1.3499-0.4295 2.6384-0.2454 3.6815 0.675 0.5522 0.4908 0.9817 1.043 1.2885 1.6566 0.184 0.3682 0.3068 0.7363 0.3681 1.1045 0.0614 0.3067 0.0614 0.6135 0.1227 0.859v0.1227c0 0.1841 0.1841 0.1841 0.2455 0.0613 0.0613 0 0.1227-0.0613 0.1227-0.184v-0.1228c0.4295-0.7362 1.4726-1.1657 2.3316-1.043 0.9203 0.1227 1.9634 1.1044 1.9021 2.0861 0 0.3068-0.1228 0.5522-0.3068 0.7363-0.1841 0.3068-0.6136 0.3682-0.9204 0.6136-0.1227 0.1227 0 0.3068 0.1227 0.3068h0.1227 0.1227c0.7363-0.1227 1.534 0.3681 1.9635 0.9204 0.4909 0.5522 0.7363 1.3498 0.6749 2.0861-0.0613 1.2885-0.9817 2.577-2.3316 2.6998-0.4295 0.0613-0.9203-0.0614-1.2885-0.1841-0.4908-0.1841-0.9203-0.4909-1.4112-0.7363h-0.1841-0.1227c-0.2454 0.1841-0.1841 0.6136-0.1841 0.9204 0 0.3067 0.0614 0.6749 0.0614 0.9817s0 0.6749 0.0613 0.9817c0 0.2454 0.0614 0.4909 0.1228 0.7363h-0.1841c-0.1227 0-0.3068 0.0613-0.4295 0.0613-0.3068 0.0614-0.5522 0.1228-0.859 0.1228-0.5522 0.0613-1.1045 0.1227-1.6567 0.2454 0-0.2454 0-0.4909-0.0613-0.7363 0-0.3681-0.1228-0.7363-0.1841-1.1044-0.0614-0.3682-0.1841-0.675-0.3068-0.9818-0.0614-0.184-0.1227-0.6135-0.3681-0.6749-0.0614-0.0614-0.1841 0-0.2455 0-2.2702 0.9817-5.9517 1.3499-7.547-1.0431-0.4295-0.9203-0.5522-2.2702 0.1227-3.3746z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m19.39 17.303c0.0613 0.1227 0.2454 0.1841 0.3681 0.1227 0.2455 0.0614 0.4909 0.1227 0.7363 0.1227 0.3068 0.0614 0.6136 0.0614 0.9817 0.1228 0.3068 0.0613 0.6136 0.0613 0.9818 0.1227 0.184 0 0.4295 0.0613 0.6749 0.0613v0.4909c0 0.3681 0 0.7363-0.0614 1.1044 0 0.7363-0.1227 1.4726 0 2.2089v0.0614s0 0.0613 0.0614 0.0613c0.1227 0.1841 0.3681 0.1841 0.6136 0.2455 0.2454 0.0613 0.5522 0.0613 0.7976 0.0613 0.4909 0.0614 1.0431 0.1227 1.534 0.0614 0.184 0 0.3068-0.1841 0.3068-0.3682 0.1227-0.3068 0.1227-0.6749 0.184-1.0431 0.0614-0.3681 0.1227-0.7363 0.1227-1.1044 0.0614-0.3681 0.0614-0.7363 0.1228-1.1044 0-0.2455 0.0613-0.5523 0.0613-0.7977 0.1841 0.0614 0.4295 0.0614 0.6136 0.0614 0.3681 0.0613 0.7363 0.1227 1.1044 0.1227 0.7363 0.0613 1.4726 0.1841 2.2089 0.1841 0.2454 0.1227 0.4909-0.0614 0.4909-0.3682-0.1227-0.7363-0.4909-1.4726-0.7363-2.1475-0.3068-0.7363-0.5522-1.4112-0.859-2.1475s-0.5522-1.4113-0.859-2.1475c-0.1841-0.4909-0.3682-0.9818-0.6136-1.4726h0.2454 0.7977c0.4908 0 1.0431 0 1.5339-0.12271 0.1841-0.06136 0.3068-0.18408 0.2454-0.36815-0.4295-1.1044-1.043-2.0862-1.5953-3.1292-0.2454-0.49086-0.5522-1.0431-0.7976-1.534-0.1227-0.24543-0.3068-0.49086-0.4295-0.73629s-0.2454-0.49086-0.4909-0.67493h-0.1227-0.1227c-0.6749 0.24543-1.1658 0.85901-1.6567 1.2885-0.5522 0.55222-1.1658 1.1044-1.718 1.5953-1.1044 1.0431-2.2702 2.0862-3.3133 3.252-0.0613 0.06136-0.0613 0.18407-0.0613 0.30679 0 0.12271 0.0613 0.24543 0.184 0.24543 0.6136 0.06131 1.2272 0 1.8408-0.06136 0.3067 0 0.6135-0.06136 0.9203-0.06136h0.0614c-0.3068 0.36813-0.5522 0.79763-0.7977 1.1658-0.4295 0.6749-0.859 1.2885-1.2271 1.9634-0.7977 1.2885-1.718 2.577-2.393 3.9883 0 0.1227 0 0.2454 0.0614 0.3681v0zm3.0065-3.8042c0.4295-0.6749 0.7977-1.3498 1.2272-2.0248 0.3681-0.6135 0.859-1.2885 0.9817-1.9634 0-0.06135 0-0.18407-0.0614-0.24543-0.0613-0.06136-0.0613-0.06136-0.1227-0.06136-0.1841-0.12271-0.4908-0.06135-0.7363-0.06135-0.3068 0-0.6136 0-0.9203 0.06135-0.3068 0-0.6136 0.06136-0.9204 0.06136h-0.0614c0.9818-0.79765 1.8408-1.718 2.7611-2.577 0.5522-0.55222 1.1045-1.0431 1.6567-1.5953 0.3681-0.36815 0.859-0.79765 1.2271-1.2272 0.0614 0.12272 0.1228 0.24544 0.1841 0.36815 0.1227 0.24543 0.2454 0.49086 0.3682 0.73629 0.2454 0.49086 0.5522 1.0431 0.7976 1.534 0.4295 0.859 0.9204 1.7794 1.4112 2.6384h-0.9203c-0.2455 0-0.4909 0-0.7363 0.06135-0.2455 0-0.5522 0-0.7977 0.06136h-0.0613c-0.1227 0.06136-0.1841 0.12272-0.1841 0.24543 0.0614 0.73632 0.3681 1.4112 0.6136 2.0861 0.2454 0.7363 0.5522 1.4113 0.7976 2.1476 0.2455 0.7363 0.5522 1.4112 0.7977 2.1475 0.1841 0.4908 0.3681 1.0431 0.6136 1.4726-0.5523-0.0614-1.1658-0.1227-1.7181-0.1841-0.3681-0.0614-0.7363-0.0614-1.1044-0.1227-0.3068 0-0.7363-0.1227-1.0431 0.0613h-0.0613s-0.0614 0-0.0614 0.0614c-0.1841 0.3681-0.2454 0.7363-0.3068 1.1658-0.0613 0.3681-0.1227 0.7363-0.1841 1.1044-0.0613 0.3682-0.1227 0.7363-0.184 1.1045-0.0614 0.3068-0.0614 0.5522-0.1227 0.859-0.4296-0.0614-0.7977-0.0614-1.2272-0.1227-0.2454 0-0.5522-0.0614-0.7977-0.0614h-0.0613c0.0613-0.3068 0.0613-0.6136 0.0613-0.9204 0-0.3681 0-0.7976 0.0614-1.1658v-1.1658c0-0.184 0-0.3681-0.0614-0.5522 0-0.0613-0.0613-0.1227-0.1227-0.1227 0-0.0613-0.0613-0.1227-0.0613-0.1227-0.2455-0.2454-0.675-0.1841-1.0431-0.2454-0.3068 0-0.6749-0.0614-0.9817-0.0614-0.4295 0-0.859-0.0614-1.2885-0.0614 1.043-0.9817 1.718-2.2088 2.3929-3.3133z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m13.315 8.0994c-0.4908 0.18407-0.859 0.61357-1.1044 1.1044-0.1227 0.24544-0.2455 0.42951-0.3068 0.67494-0.0614 0.24545-0.1841 0.49085-0.1227 0.73625 0 0.1228 0.0613 0.2455 0.2454 0.3068 0.1227 0.0614 0.2454 0 0.3681-0.1227 0.0614-0.1227 0.1228-0.2454 0.1841-0.3681v-0.0614 0c0.0614-0.0613 0.0614-0.1227 0.0614-0.2454 0 0 0-0.0614 0.0613-0.0614 0-0.0613 0.0614-0.12269 0.0614-0.12269 0.0614-0.12272 0.1227-0.18408 0.1227-0.30679 0.2454-0.42951 0.4909-0.79765 0.6749-1.2272 0.0614-0.24543-0.0613-0.36814-0.2454-0.30678z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m11.291 16.505c-0.0613-0.2454 0-0.5522 0-0.859 0.0614-0.3068 0.1841-0.7363 0.0614-1.0431-0.0614-0.1227-0.1841-0.184-0.3068-0.1227-0.3068 0.1841-0.4908 0.6749-0.5522 1.0431-0.0614 0.3068-0.0614 0.6749-0.0614 1.0431 0.0614 0.3681 0.1228 0.7363 0.3068 1.1044 0.1841 0.3682 0.3682 0.7977 0.7363 1.0431 0.1841 0.1227 0.4295 0 0.4295-0.2454 0-0.3682-0.184-0.7363-0.3068-1.0431-0.1227-0.3068-0.2454-0.6136-0.3068-0.9204z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m14.603 23.132c0.3068 0.3068 0.6749 0.5522 1.0431 0.7977 0.3681 0.2454 0.6749 0.4295 1.0431 0.6135 0.3068 0.1841 0.7976 0.5523 1.1658 0.3682 0.1227-0.1227 0.184-0.2454 0.184-0.3682 0-0.1227-0.1227-0.2454-0.2454-0.3067-0.0613-0.0614-0.1227-0.0614-0.1841-0.0614h-0.0613c-0.1841-0.0614-0.3068-0.1227-0.4909-0.1841-0.3681-0.184-0.7363-0.3681-1.0431-0.6136-0.3068-0.2454-0.6135-0.4908-0.859-0.7362-0.1227-0.1228-0.2454-0.3068-0.3681-0.4295-0.1841-0.1841-0.4909-0.4295-0.675-0.1841-0.4295 0.2454 0.1841 0.7976 0.4909 1.1044z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m29.943 55.038c0.3682 0.1227 0.6136-0.3068 0.7363-0.5523 0.1227-0.2454 0.2455-0.4908 0.3682-0.7362 0.2454-0.4909 0.4295-1.0431 0.6749-1.5954 0.1227-0.3067 0.2454-0.7362-0.0613-0.9203-0.1841-0.1227-0.3682-0.0614-0.4909 0.0613-0.1227 0.1228-0.1227 0.3068-0.1841 0.4295-0.1227 0.4909-0.3068 0.9818-0.5522 1.4726-0.1227 0.3068-0.3068 0.5523-0.4909 0.7977-0.0613 0.1227-0.184 0.2454-0.2454 0.3681-0.0613 0.2455 0 0.5522 0.2454 0.675z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m22.15 28.102c0.1227 0.1227 0.2454 0.1841 0.3681 0.2455 0.2455 0.1227 0.4909 0.3067 0.7977 0.4295 0.5522 0.3068 1.1658 0.6749 1.718 1.043 0.2454 0.1841 0.6136 0.5523 0.9817 0.3068 0.1841-0.1227 0.1841-0.3681 0.1227-0.5522-0.1227-0.1841-0.3067-0.2454-0.4295-0.3681-0.6135-0.3682-1.1658-0.675-1.718-0.9818-0.3068-0.184-0.6136-0.3067-0.9203-0.4908-0.1841-0.0614-0.3068-0.1841-0.4909-0.1841-0.1227-0.0613-0.2454-0.0614-0.4295-0.0614-0.2454-0.0613-0.4295 0.2455-0.2454 0.4296 0.1227 0 0.184 0.1227 0.2454 0.184z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m30.434 35.588c0.1227 0.2454 0.1841 0.5522 0.3068 0.859 0.0613 0.3682 0.1841 0.7363 0.3681 0.9817 0.1228 0.1841 0.3682 0.1228 0.4909-0.0613 0.1227-0.3682 0.0614-0.7977 0-1.1658-0.0614-0.3682-0.1841-0.675-0.3681-1.0431-0.1228-0.3068-0.3068-0.6136-0.5523-0.9204-0.2454-0.3681-0.5522-0.7363-0.9817-0.859-0.1841-0.0613-0.3068 0.1227-0.3068 0.3068 0.0614 0.3682 0.3682 0.675 0.5522 0.9817 0.1841 0.3068 0.3068 0.6136 0.4909 0.9204z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m32.397 46.755c0.3067-0.2454 0.3681-0.5522 0.4295-0.9203 0.0613-0.4296 0.1227-0.8591 0.1227-1.2886v-1.2271c-0.0614-0.3682-0.0614-0.9817-0.3682-1.2272-0.184-0.1227-0.4295-0.0613-0.4908 0.1227-0.0614 0.1228-0.0614 0.1841-0.0614 0.3068v0.1841 0.0614c0 0.184 0.0614 0.3068 0.0614 0.4908 0 0.4295 0.0613 0.7977 0 1.2272 0 0.1841 0 0.3681-0.0614 0.6136 0 0.184-0.0613 0.3068-0.0613 0.4908 0 0.1841-0.0614 0.3068-0.1228 0.4909-0.0613 0.1841-0.0613 0.3068 0 0.4908 0 0.2455 0.3068 0.3682 0.5523 0.1841z\" fill=\"#74a\"/>\n" +
    "        <path d=\"m29.513 57.492-2.9452-4.1723-3.1293 2.3929 3.0679 4.3564-4.4177 3.7428 1.6566 2.6384 4.7246-3.6814 3.1292 4.4177 3.1906-2.3929-3.1906-4.4178 4.9086-3.8042-2.577-2.8224-4.4177 3.7428z\" fill=\"#74a\"/>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/moduleFollowUpBooks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/moduleFollowUpBooks.tpl.html",
    "<div class=\"chapter-title\">\n" +
    "    <div class=\"wrap-headline-with-subline\">\n" +
    "        <div class=\"headline\" translate=\"{{'jsapp.module.followUpBooks.headline'}}\"/>\n" +
    "        <div translate=\"{{'jsapp.module.followUpBooks.subline'}}\"/>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"horizontal-slider-wrapper\">\n" +
    "    <div ng-if=\"hasOverflow('followUpBooks')\"\n" +
    "         ng-click=\"scroll('followUpBooks', 'left')\"\n" +
    "         class=\"scroll-button left\"\n" +
    "         ng-class=\"{'end-of-direction': onLeftEndScroll('followUpBooks')}\"\n" +
    "    >\n" +
    "        <svg width=\"11\" height=\"32\" viewBox=\"0 0 11 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <path d=\"M10 1L2 15.8193L9.99999 31\" stroke=\"#333333\"/>\n" +
    "        </svg>\n" +
    "    </div>\n" +
    "    <div id=\"followUpBooks\" class=\"slide-able book-list\">\n" +
    "        <div\n" +
    "                ng-repeat=\"book in bookObject.followUpBooks\"\n" +
    "                class=\"book-list-item-wrap follow-up-in-module\"\n" +
    "                data-cy=\"library-book\"\n" +
    "                id=\"{{::book.id}}\"\n" +
    "                ng-include=\"'bookModule/partials/bookListItem.tpl.html'\"\n" +
    "        >\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div\n" +
    "            ng-if=\"hasOverflow('followUpBooks')\"\n" +
    "            ng-click=\"scroll('followUpBooks', 'right')\"\n" +
    "            class=\"scroll-button right\"\n" +
    "            ng-class=\"{'end-of-direction': onRightEndScroll('followUpBooks')}\"\n" +
    "    >\n" +
    "        <svg width=\"10\" height=\"32\" viewBox=\"0 0 10 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <path d=\"M1 31L9 16.1807L1 0.999999\" stroke=\"#333333\"/>\n" +
    "        </svg>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("bookModule/partials/pagination.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/pagination.tpl.html",
    "<div id=\"pagination\" ng-if=\"pager.enabled()\">\n" +
    "    <a id=\"previous-page\"  ng-click=\"pager.prevPage()\" ng-class=\"{'pager-disabled': pager.hasNoPrevPage()}\">\n" +
    "        <span>\n" +
    "            <i class=\"fa fa-angle-left\"></i>\n" +
    "        </span>\n" +
    "    </a>\n" +
    "\n" +
    "    <select ng-options=\"cur as (pager.pagePrefix +' '+ (cur+1)) for cur in pager.getPageList()\" ng-model=\"pager.currentPage\"></select>\n" +
    "\n" +
    "    <a id=\"next-page\" ng-click=\"pager.nextPage()\" ng-class=\"{'pager-disabled': pager.hasNoNextPage()}\">\n" +
    "        <span>\n" +
    "            <i class=\"fa fa-angle-right\"></i>\n" +
    "        </span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("bookModule/partials/preknowledgeElement.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/preknowledgeElement.tpl.html",
    "<div class=\"test-box pre-knowledge-test\">\n" +
    "    <div class=\"exercise-box tasks\" ng-repeat=\"chapter in chapter.chapters\">\n" +
    "        <div ng-include=\"'bookModule/partials/bookFlatContentChapterTasks.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("bookModule/partials/studentPrivateBookList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/studentPrivateBookList.tpl.html",
    "<div ng-if=\"!hasPaid && !freemiumStudent\" class=\"table purchase-box-wrap\">\n" +
    "    <div ng-if=\"\" class=\"purchase-box table-row\">\n" +
    "        <div class=\"purchase-content table-cell purchase-lock fa fa-unlock\"></div>\n" +
    "        <div ng-if=\"toggles.paymentLink\" class=\"purchase-content table-cell purchase-text\">\n" +
    "            <span translate=\"jsapp.student.purchase\"></span><br/>\n" +
    "            <a href=\"#\" open-popup=\"payment\" payment-action=\"true\" class=\"button bt-link bm-list-icon\">\n" +
    "                <span translate=\"jsapp.student.purchaseLink\"></span> <i class=\"fa fa-angle-right\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!toggles.paymentLink\" class=\"purchase-content table-cell purchase-text\">\n" +
    "            <span translate=\"jsapp.student.purchaseApp\"></span><br/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"!hasPaid && freemiumStudent\" class=\"freemium-teaser\">\n" +
    "    <a ng-if=\"videoUrl\" ng-href=\"{{::videoUrl}}\" target=\"_blank\" class=\"video-link\">\n" +
    "        <img ng-src=\"{{::videoPreviewUrl}}\" width=\"180px\" height=\"120px\" />\n" +
    "    </a>\n" +
    "    <div>\n" +
    "        <h2 translate=\"jsapp.student.freemium.title\"></h2>\n" +
    "        <p translate=\"jsapp.student.freemium.text\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"!hasPaid\" class=\"sep-line\"></div>\n" +
    "<div class=\"book-search-filter-container\">\n" +
    "<div ng-if=\"books && books.length && toggles.showyBookSearch\"\n" +
    "    list-search-showy\n" +
    "    safe-search=\"safeSearch\"\n" +
    "    book-amount=\"books.length\"\n" +
    "    book-search=\"bookSearch\" class=\"book-search-filter-search\"></div>\n" +
    "<div class=\"book-search-filter-options\">\n" +
    "<div ng-if=\"languages.length > 1\" language-filter-book-type languages=\"languages\"></div>\n" +
    "<div ng-if=\"bookListFilter\" book-list-filter class=\"book-list-wrapper\"></div>\n" +
    "<div ng-if=\"books && books.length && !toggles.showyBookSearch\"\n" +
    "    book-list-search\n" +
    "    safe-search=\"safeSearch\"\n" +
    "    book-amount=\"books.length\"\n" +
    "    book-search=\"bookSearch\"></div>\n" +
    "</div> \n" +
    "</div>\n" +
    "\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\"></ng-include>\n" +
    "\n" +
    "<div>\n" +
    "    <ul class=\"book-list clearall\">\n" +
    "        <ng ng-repeat=\"book in filteredBooks = (books | filter: (bookSearch.value | latinise) | filter:checkBookListFilter | paging: (pager.currentPage*pager.pageSize):pager.pageSize)\">\n" +
    "            <li bindonce\n" +
    "                class=\"book-list-item-wrap\"\n" +
    "                id=\"{{::book.id}}\"\n" +
    "                ng-class=\"{'book-list-item-odd': $index % 2 === 0, 'current-item': book.id === lastBook.id, 'current-item-clicked': book.id === clickedItem.id}\"\n" +
    "                ng-include=\"'bookModule/partials/bookListItem.tpl.html'\">\n" +
    "            </li>\n" +
    "            <ng ng-if=\"$index === (filteredBooks.length - 1)\"\n" +
    "                scroll-if=\"true\"\n" +
    "                scroll-type=\"bookId\"></ng>\n" +
    "        </ng>\n" +
    "    </ul>\n" +
    "    <div class=\"missing-data-container\" ng-if=\"!pendingRequests && books.length && !filteredBooks.length\">\n" +
    "        <div class=\"missing-data-hint\">{{ 'jsapp.filter.noMatchingBooks' | translate }}</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ng-include src=\"'bookModule/partials/pagination.tpl.html'\"></ng-include>\n" +
    "");
}]);

angular.module("bookModule/partials/studentSchoolBookList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("bookModule/partials/studentSchoolBookList.tpl.html",
    "<div ng-if=\"books && books.length\" book-list-search safe-search=\"safeSearch\" book-amount=\"books.length\" book-search=\"bookSearch\"></div>\n" +
    "\n" +
    "<div ng-repeat=\"group in groups\" class=\"book-list-group\">\n" +
    "    <h2 class=\"headline\">{{ group.name }}</h2>\n" +
    "    <ul class=\"book-list\" ng-if=\"books.length\">\n" +
    "        <ng ng-repeat=\"book in filteredBooks[$index] = (books | filter:{group_id: group.id}  | filter: bookSearch.value)\"\n" +
    "            class=\"book-list-item-wrap\">\n" +
    "            <li bindonce\n" +
    "                ng-class=\"{'book-list-item-odd': $index % 2 === 0, 'current-item': (group.id === lastGroup.id && book.id === lastBook.id), 'current-item-clicked': book.id === clickedItem.id}\"\n" +
    "                id=\"{{::book.id}}\"\n" +
    "                ng-include=\"'bookModule/partials/bookListItem.tpl.html'\">\n" +
    "            </li>\n" +
    "            <ng ng-if=\"group.id === lastGroup.id && $last\"\n" +
    "                scroll-if=\"true\"\n" +
    "                scroll-type=\"bookId\"></ng>\n" +
    "        </ng>\n" +
    "\n" +
    "    </ul>\n" +
    "    <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !filteredBooks[$index].length\">\n" +
    "        <div ng-if=\"!toggles.paymentLink\" class=\"missing-data-hint-small\"> {{ 'jsapp.student.noGroupBooksSubInfo'\n" +
    "            | translate }}\n" +
    "        </div>\n" +
    "        <div ng-if=\"toggles.paymentLink\" class=\"missing-data-hint-small\" translate=\"{{ noGroupBooksSubInfo }}\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"missing-data-container\" ng-if=\"!pendingRequests && !nummberOfGroups\">\n" +
    "    <div class=\"missing-data-hint\"> {{ 'jsapp.student.noGroupBooks' | translate }}</div>\n" +
    "    <div ng-if=\"!toggles.paymentLink\" class=\"missing-data-hint-subinfo\"> {{ 'jsapp.student.noGroupBooksSubInfo'\n" +
    "        | translate }}\n" +
    "    </div>\n" +
    "    <div ng-if=\"toggles.paymentLink\" class=\"missing-data-hint-subinfo\" translate=\"{{ noGroupBooksSubInfo }}\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/activities.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/activities.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.activities.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.activities.infoText\"></div>\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.activities.timeSelector\"></span>\n" +
    "            <span class=\"filter-select\">\n" +
    "                <select ng-model=\"daysAgo\">\n" +
    "                    <option value=\"all\" translate=\"jsapp.teacher.dashboard.activities.all\"></option>\n" +
    "                    <option value=\"0\" translate=\"jsapp.teacher.dashboard.activities.today\"></option>\n" +
    "                    <option value=\"1\" translate=\"jsapp.teacher.dashboard.activities.last1day\"></option>\n" +
    "                    <option value=\"7\" translate=\"jsapp.teacher.dashboard.activities.last7days\"></option>\n" +
    "                    <option value=\"14\" translate=\"jsapp.teacher.dashboard.activities.last14days\"></option>\n" +
    "                    <option value=\"30\" translate=\"jsapp.teacher.dashboard.activities.last30days\"></option>\n" +
    "                </select>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div ng-if=\"listsize\">\n" +
    "            <table class=\"widget-table widget-table-head\">\n" +
    "                <thead>\n" +
    "                <tr class=\"activities-head\">\n" +
    "                    <th ng-click=\"setOrderField('displayName')\" class=\"th-name\" ng-class=\"isSelected('displayName')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.activities.students\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('displayName')\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('todo')\" class=\"th-todo\" ng-class=\"isSelected('todo')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('todo')\"></i>\n" +
    "                        <i class=\"fa fa-exclamation-circle activity-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('book')\" class=\"th-book\" ng-class=\"isSelected('book')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('book')\"></i>\n" +
    "                        <i class=\"fa fa-book activity-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('knowledgeGap')\" class=\"th-gap\" ng-class=\"isSelected('knowledgeGap')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('knowledgeGap')\"></i>\n" +
    "                        <i class=\"fa fa-puzzle-piece activity-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th class=\"th-border\" ng-style=\"customStyle.headwidth\"></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <table class=\"widget-table widget-table-body\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"value in rows | orderBy:[orderByField, 'knowledgeGap', 'book', 'todo', 'name']:orderByReverse\"\n" +
    "                    class=\"activities-row\">\n" +
    "                    <td class=\"td-name\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::value.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::value.displayName\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.todo\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.book\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.knowledgeGap\"></span></td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!listsize\" class=\"no-widget-data-container\">\n" +
    "            <div class=\"no-widget-data\" translate=\"jsapp.teacher.dashboard.activities.noData\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/completedExercises.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/completedExercises.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.completedExercises.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\"\n" +
    "         class=\"widget-info-text\"\n" +
    "         translate=\"jsapp.teacher.dashboard.completedExercises.infoText\"\n" +
    "         translate-values=\"{todoIcon: '<i class=\\'fa fa-exclamation-circle\\'></i>', bookIcon: '<i class=\\'fa fa-book\\'></i>', gapIcon: '<i class=\\'fa fa-puzzle-piece\\'></i>'}\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.completedExercises.timeSelector\"></span>\n" +
    "            <span class=\"filter-select\">\n" +
    "                <select ng-model=\"daysAgo\"\n" +
    "                        ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "                </select>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div ng-if=\"listsize\">\n" +
    "            <table class=\"widget-table widget-table-head\">\n" +
    "                <thead>\n" +
    "                <tr class=\"completedExercises-head\">\n" +
    "                    <th ng-click=\"setOrderField('displayName')\" class=\"th-name\" ng-class=\"isSelected('displayName')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.completedExercises.students\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('displayName')\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('todo')\" class=\"th-todo\" ng-class=\"isSelected('todo')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('todo')\"></i>\n" +
    "                        <i class=\"fa fa-exclamation-circle completed-exercises-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('book')\" class=\"th-book\" ng-class=\"isSelected('book')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('book')\"></i>\n" +
    "                        <i class=\"fa fa-book completed-exercises-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('knowledgeGap')\" class=\"th-gap\" ng-class=\"isSelected('knowledgeGap')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('knowledgeGap')\"></i>\n" +
    "                        <i class=\"fa fa-puzzle-piece completed-exercises-icon\"></i>\n" +
    "                    </th>\n" +
    "                    <th class=\"th-border\" ng-style=\"customStyle.headwidth\"></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <table class=\"widget-table widget-table-body\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"value in rows\"\n" +
    "                    class=\"completedExercises-row\">\n" +
    "                    <td class=\"td-name\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::value.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::value.displayName\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.todo\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.book\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.knowledgeGap\"></span></td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!listsize\" class=\"no-widget-data-container\">\n" +
    "            <div class=\"no-widget-data\" translate=\"jsapp.teacher.dashboard.completedExercises.noData\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/dashboard.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/dashboard.tpl.html",
    "<div class=\"dashboard-page\">\n" +
    "    <h2 translate-values=\"{'groupName': '{{ currentGroup.name | htmlspecialchars }}'}\"\n" +
    "        translate=\"jsapp.teacher.dashboard.headline\" class=\"headline dashboardheadline\"></h2>\n" +
    "\n" +
    "    <div ng-if=\"dashboardOptions\" dashboard=\"dashboardOptions\" class=\"dashboard-container\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/dashboardEmpty.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/dashboardEmpty.tpl.html",
    "<div class=\"missing-data-container book-list clearall\" ng-show=\"showAllocationsHint\">\n" +
    "    <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noDashboardDataHint\"></div>\n" +
    "    <div class=\"missing-data-hint-subinfo\" translate=\"jsapp.teacher.noDashboardDataHintSubInfo\"></div>\n" +
    "</div>\n" +
    "    \n" +
    "\n" +
    "");
}]);

angular.module("dashboardModule/partials/hotspotExercises.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/hotspotExercises.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.hotspotExercises.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"toggleInfo()\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.hotspotExercises.infoText\"></div>\n" +
    "\n" +
    "    <div class=\"widget-filter widget-filter-select\">\n" +
    "        <span translate=\"jsapp.teacher.dashboard.todos.timeSelector\"></span>\n" +
    "        <span class=\"filter-select\">\n" +
    "            <select ng-model=\"dayRange\"\n" +
    "                    ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "            </select>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div ng-if=\"chart.data.rows.length\" google-chart chart=\"chart\" on-ready=\"chartReady()\"\n" +
    "         style=\"min-height:300px; width:100%;\" id=\"hotspot-exercises-chart\"></div>\n" +
    "    <div ng-if=\"!chart.data.rows.length\" class=\"no-widget-data-container\">\n" +
    "        <div class=\"no-widget-data\">\n" +
    "            <div ng-if=\"autoLoad || (loadBtnClicked && !loading)\" translate=\"jsapp.teacher.dashboard.hotspotExercises.noData\"></div>\n" +
    "            <button\n" +
    "                ng-if=\"!autoLoad\"\n" +
    "                ng-click=\"fillChartDataRows(dayRange);\"\n" +
    "                class=\"button bt-regular\"\n" +
    "                ng-disabled=\"loading\"\n" +
    "                ng-class=\"{'bt-inactive': loading, 'bt-action': !loading}\"\n" +
    "            >\n" +
    "                {{ 'jsapp.teacher.dashboard.hotspotExercises.loadButton' | translate }}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/knowledgeGaps.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/knowledgeGaps.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.knowledgeGaps.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.knowledgeGaps.infoText\"></div>\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.knowledgeGaps.timeSelector\"></span>\n" +
    "            <span class=\"filter-select\">\n" +
    "                <select ng-model=\"daysAgo\"\n" +
    "                        ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "                </select>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div ng-if=\"listsize\">\n" +
    "            <table class=\"widget-table widget-table-head\">\n" +
    "                <thead>\n" +
    "                <tr class=\"knowledgeGaps-head\">\n" +
    "                    <th ng-click=\"setOrderField('displayName')\" class=\"th-name\" ng-class=\"isSelected('displayName')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.knowledgeGaps.students\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('displayName')\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('knowledgeGapTotal')\" class=\"th-gap\" ng-class=\"isSelected('knowledgeGapTotal')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.knowledgeGaps.total\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('knowledgeGapTotal')\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('knowledgeGapClosed')\" class=\"th-gap\" ng-class=\"isSelected('knowledgeGapClosed')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.knowledgeGaps.closed\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('knowledgeGapClosed')\"></i>\n" +
    "                    </th>\n" +
    "                    <th class=\"th-border\" ng-style=\"customStyle.headwidth\"></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <table class=\"widget-table widget-table-body\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"value in rows | orderBy:[orderByField, 'knowledgeGapTotal', 'knowledgeGapClosed', 'name']:orderByReverse\"\n" +
    "                    class=\"knowledgeGaps-row\">\n" +
    "                    <td class=\"td-name\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::value.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::value.displayName\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.knowledgeGapTotal\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.knowledgeGapClosed\"></span></td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!listsize\" class=\"no-widget-data-container\">\n" +
    "            <div class=\"no-widget-data\" translate=\"jsapp.teacher.dashboard.knowledgeGaps.noData\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/performanceReport.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/performanceReport.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.performanceReport.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\"  ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.performanceReport.infoText\"></div>\n" +
    "    <div ng-if=\"pdfReport && pdfList\" class=\"widget-body\">\n" +
    "\n" +
    "        <h4 translate=\"jsapp.teacher.dashboard.performanceReport.weeklyReport\"></h4>\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"pdf in pdfList\">\n" +
    "                <div class=\"report-row-left\">\n" +
    "                    <span>{{ pdf.fromDate * 1000 | date:'dd.MM.yyyy' }}</span>\n" +
    "                    &nbsp;-&nbsp;\n" +
    "                    <span>{{ pdf.toDate * 1000 | date:'dd.MM.yyyy' }}</span>\n" +
    "                </div>\n" +
    "                <div class=\"report-row-right\">\n" +
    "                    <a class=\"pdf-and-excel-report\" ng-href=\"{{ pdf.fileNameUser }}\">\n" +
    "                        <i class=\"fa fa-file-pdf-o\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"pdfReport && (excelSummary || pdfSummary)\" class=\"widget-body\">\n" +
    "        <h4 translate=\"jsapp.teacher.dashboard.performanceReport.summaryReport\"></h4>\n" +
    "        <div class=\"report-row\">\n" +
    "            <div class=\"report-row-left\">\n" +
    "                <span>{{ pdfSummary.fromDate * 1000 | date:'dd.MM.yyyy' }}</span>\n" +
    "                &nbsp;-&nbsp;\n" +
    "                <span>{{ pdfSummary.toDate * 1000 | date:'dd.MM.yyyy' }}</span>\n" +
    "            </div>\n" +
    "            <div class=\"report-row-right\">\n" +
    "                <a ng-if=\"pdfSummary\" class=\"pdf-and-excel-report\"  ng-href=\"{{ pdfSummary.fileNameUser }}\">\n" +
    "                    <i class=\"fa fa-file-pdf-o\"></i>\n" +
    "                </a>\n" +
    "                <a ng-if=\"excelSummary\" class=\"pdf-and-excel-report\"  ng-href=\"{{ excelSummary.fileNameUser }}\">\n" +
    "                    <i class=\"fa fa-file-excel-o\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"excelReportOnly && excelSummary\" class=\"widget-body\">\n" +
    "        <div class=\"report-row\">\n" +
    "            <div class=\"report-row-left\">\n" +
    "                <span translate=\"jsapp.teacher.dashboard.performanceReport.updated\"></span>\n" +
    "                <span>{{ excelSummary.toDate * 1000 | date:'dd.MM.yyyy' }}</span>\n" +
    "            </div>\n" +
    "            <div class=\"report-row-right\">\n" +
    "                <a\n" +
    "                    class=\"pdf-and-excel-report\"\n" +
    "                    ng-href=\"{{ excelSummary.fileNameUser }}\"\n" +
    "                    downloadable-via-app\n" +
    "                >\n" +
    "                    <i class=\"fa fa-file-excel-o\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!pdfSummary && !pdfList && !excelSummary && !deactivateExcelReport\" class=\"widget-body\">\n" +
    "        <div translate=\"jsapp.teacher.dashboard.performanceReport.noContent\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"deactivateExcelReport\" class=\"widget-body\">\n" +
    "        <div translate=\"jsapp.CORONA.deactivatedDownloadExcelReport\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/ranking.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/ranking.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.ranking.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.ranking.infoText\"></div>\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.ranking.timeSelector\"></span>\n" +
    "            <span class=\"filter-select\">\n" +
    "                <select ng-model=\"daysAgo\"\n" +
    "                        ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "                </select>\n" +
    "\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div ng-if=\"listsize\">\n" +
    "            <table class=\"widget-table widget-table-head\">\n" +
    "                <thead>\n" +
    "                <tr class=\"ranking-head\">\n" +
    "                    <th ng-click=\"setOrderField('displayName')\" class=\"th-name\" ng-class=\"isSelected('displayName')\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.ranking.student\"></span>\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('displayName')\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('stars')\" class=\"th-star\" ng-class=\"isSelected('stars')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('stars')\"></i>\n" +
    "                        <span></span>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"setOrderField('coins')\" class=\"th-coin\" ng-class=\"isSelected('coins')\">\n" +
    "                        <i class=\"fa\" ng-class=\"isSelectedIcon('coins')\"></i>\n" +
    "                        <span></span>\n" +
    "                    </th>\n" +
    "                    <th class=\"th-border\" ng-style=\"customStyle.headwidth\"></th>\n" +
    "                </tr>\n" +
    "                <tr ng-if=\"average !== false\" class=\"ranking-average\">\n" +
    "                    <td class=\"td-name\"><span translate=\"jsapp.teacher.dashboard.ranking.average\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"average.stars\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"average.coins\"></span></td>\n" +
    "                    <th class=\"th-border\" ng-style=\"customStyle.headwidth\"></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <table class=\"widget-table widget-table-body\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"value in rows\"\n" +
    "                    class=\"ranking-row\">\n" +
    "                    <td class=\"td-name\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::value.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::value.displayName\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.stars\"></span></td>\n" +
    "                    <td class=\"td-numbers\"><span ng-bind=\"value.coins\"></span></td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!listsize\" class=\"no-widget-data-container\">\n" +
    "            <div class=\"no-widget-data\" translate=\"jsapp.teacher.dashboard.ranking.noData\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/studiekring-report.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/studiekring-report.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.studiekring.report.tableName\">StudieKring</span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.studiekring.report.infoText\">StudieKring</div>\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.studiekring.report.dateSelector\">Date</span>\n" +
    "            <span class=\"filter-date\">\n" +
    "                <span class=\"datepicker-wrap assign-daterange\" bm-datepicker dateofpicker=\"selectedDate\"></span>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"widget-filter widget-filter-select\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.studiekring.report.studentSelector\">Student</span>\n" +
    "            <span class=\"filter-select\">\n" +
    "                <select ng-model=\"student\">\n" +
    "                    <option ng-repeat=\"student in students\" value=\"{{ student._id }}\">{{ student.displayName }}</option>\n" +
    "                </select>\n" +
    "            </span>\n" +
    "            <br/>\n" +
    "        </div>\n" +
    "        <textarea id=\"studiekringReportData\" class=\"studiekring-report-data\" rows=\"10\">{{ reportData | json }}</textarea>\n" +
    "        <div class=\"copy-data\"><button ng-click=\"copyToClipboard()\" translate=\"jsapp.copyIntoClipboard\">copy into clipboard</button></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/todos.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/todos.tpl.html",
    "<div class=\"dashboard-widget\">\n" +
    "    <div class=\"widget-header\">\n" +
    "        <h3 class=\"widget-title\">\n" +
    "            <span translate=\"jsapp.teacher.dashboard.todos.tableName\"></span>\n" +
    "            <a class=\"fa fa-info-circle widget-info-button\" ng-click=\"showInfo = !showInfo\"></a>\n" +
    "            <!--<a class=\"fa fa-info-circle widget-info-button\" ng-click=\"toggleInfo()\"></a>-->\n" +
    "        </h3>\n" +
    "    </div>\n" +
    "    <div ng-if=\"showInfo\" class=\"widget-info-text\" translate=\"jsapp.teacher.dashboard.todos.infoText\"></div>\n" +
    "    <div class=\"widget-filter widget-filter-select\">\n" +
    "        <span translate=\"jsapp.teacher.dashboard.todos.timeSelector\"></span>\n" +
    "        <span class=\"filter-select\">\n" +
    "            <select ng-model=\"dayRange\"\n" +
    "                    ng-options=\"f.label | translate for f in rangeFilters\">\n" +
    "            </select>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div ng-if=\"listsize\">\n" +
    "            <table class=\"widget-table widget-table-head\">\n" +
    "                <thead>\n" +
    "                <tr class=\"ranking-head\">\n" +
    "                    <th ng-click=\"orderByField = orderByField === 'displayName' ? '-displayName' : 'displayName'\"\n" +
    "                        class=\"th-name\"\n" +
    "                        ng-class=\"{'th-active-up': orderByField === 'displayName', 'th-active-down': orderByField === '-displayName'}\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.todos.student\"></span>\n" +
    "                        <i class=\"fa\"\n" +
    "                           ng-class=\"{'fa-sort-asc': orderByField === 'displayName', 'fa-sort-desc': orderByField === '-displayName', 'fa-sort': orderByField !== 'displayName' && orderByField !== '-displayName'}\"></i>\n" +
    "                    </th>\n" +
    "                    <th ng-click=\"orderByField = orderByField === 'performance' ? '-performance' : 'performance'\"\n" +
    "                        class=\"th-performance\"\n" +
    "                        ng-class=\"{'th-active-up': orderByField === 'performance', 'th-active-down': orderByField === '-performance'}\">\n" +
    "                        <span translate=\"jsapp.teacher.dashboard.todos.performance\"></span>\n" +
    "                        <i class=\"fa\"\n" +
    "                           ng-class=\"{'fa-sort-asc': orderByField === 'performance', 'fa-sort-desc': orderByField === '-performance', 'fa-sort': orderByField !== 'performance' && orderByField !== '-performance'}\"></i>\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <table class=\"widget-table widget-table-body\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"value in rows | orderBy:orderByField\" class=\"ranking-row\">\n" +
    "                    <td class=\"td-name\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::value.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::value.displayName\"></span>\n" +
    "                    </td>\n" +
    "                    <td class=\"td-performance\">\n" +
    "                        <div google-chart chart=\"value.chartObject\"></div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!listsize\" class=\"no-widget-data-container\">\n" +
    "            <div class=\"no-widget-data\" translate=\"jsapp.teacher.dashboard.todos.noData\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboardModule/partials/widgetsWrap.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboardModule/partials/widgetsWrap.tpl.html",
    "<div ng-model=\"widgets\" class=\"dashboard-widget-area\">\n" +
    "    <div ng-repeat=\"widget in widgets\" class=\"widget-container widget-{{ widget.name | slugify}}\" widget>\n" +
    "        <div class=\"widget\">\n" +
    "            <div class=\"widget-content\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("directives/partials/contentHeader.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/contentHeader.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <a ng-if=\"config.back\"\n" +
    "        ng-href=\"{{ '#' + config.back.href }}\"\n" +
    "        class=\"button bt-regular bt-view\">\n" +
    "        <i class=\"fa fa-chevron-left\"></i><span translate=\"{{ config.back.title }}\"></span>\n" +
    "    </a>\n" +
    "\n" +
    "    <h1 ng-if=\"config.title\"\n" +
    "        class=\"inline-centered\"\n" +
    "        translate=\"{{ config.title }}\">\n" +
    "    </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/datepicker.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/datepicker.tpl.html",
    "<span><input type=\"text\" readonly=\"readonly\" onfocus=\"this.blur()\" class=\"datepicker-input\"\n" +
    "             placeholder=\"{{ 'jsapp.general.datepickerPlaceholder' | translate }}\"/></span>\n" +
    "<i class=\"fa fa-calendar datepicker-trigger\"></i>");
}]);

angular.module("directives/partials/datepickerRange.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/datepickerRange.tpl.html",
    "<span ng-click=\"showDatepicker = !showDatepicker\" class=\"daterange-text\">\n" +
    "    <span ng-if=\"!startDate\" translate=\"jsapp.datepicker.dateRange.header\"></span>\n" +
    "    <span><span ng-if=\"startDate\">{{ startDate | date:'dd.MM.yyyy' }}</span> <span ng-if=\"endDate\">-</span> <span\n" +
    "            ng-if=\"endDate\">{{ endDate | date:'dd.MM.yyyy' }}</span></span>\n" +
    "</span>\n" +
    "<i class=\"fa fa-calendar datepicker-trigger\" ng-click=\"showDatepicker = !showDatepicker\"></i>\n" +
    "<div id=\"speech-bubble-container\" class=\"speech-bubble-container-big\" ng-show=\"showDatepicker\">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content datepicker-range-popup\">\n" +
    "        <img src=\"./assets/speech-bubble-tip-top.svg\" class=\"speech-bubble-tip speech-bubble-tip-top\"/>\n" +
    "\n" +
    "        <div class=\"speech-bubble-head\">\n" +
    "            <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"showDatepicker = false\"></i>\n" +
    "            <span class=\"speech-bubble-content-first-element\">\n" +
    "                <label translate=\"jsapp.datepicker.dateRange.header\"></label>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"worksheet-options datepicker-range\">\n" +
    "            <div class=\"datepicker-calendar1-head\" translate=\"jsapp.datepicker.dateRange.headerLeft\"></div>\n" +
    "            <div class=\"datepicker-calendar2-head\" translate=\"jsapp.datepicker.dateRange.headerRight\"></div>\n" +
    "            <div class=\"datepicker-calendar1 datepicker-calendar-min-height\"></div>\n" +
    "            <div class=\"datepicker-calendar2 datepicker-calendar-min-height\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("directives/partials/donutChartSVG.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/donutChartSVG.tpl.html",
    "<div class=\"donutchart\">\n" +
    "    <div class=\"graph\">\n" +
    "        <svg viewBox=\"0 0 48 48\">\n" +
    "            <circle r=\"15.9\" cx=\"24\" cy=\"24\"\n" +
    "                    style=\"stroke: {{dataArray.undone.color}};stroke-width: 15.9;stroke-dasharray: 100 100; \"/>\n" +
    "            <circle r=\"15.9\" cx=\"24\" cy=\"24\"\n" +
    "                    style=\"stroke: {{dataArray.error.color}};stroke-width: 15.9;stroke-dasharray: {{(dataArray.error.value +dataArray.done.value) || 0}} 100;\"/>\n" +
    "            <circle r=\"15.9\" cx=\"24\" cy=\"24\"\n" +
    "                    style=\"stroke: {{dataArray.done.color}};stroke-width: 15.9;stroke-dasharray: {{dataArray.done.value || 0}} 100;\"/>\n" +
    "        </svg>\n" +
    "    </div>\n" +
    "    <div class=\"graph-center\" ng-bind=\"total\" data-cy=\"total-number-assignee-{{id}}\"></div>\n" +
    "</div>");
}]);

angular.module("directives/partials/exercisePoints.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/exercisePoints.tpl.html",
    "<div class=\"exercise-points\" ng-show=\"points != false\">\n" +
    "    {{ points.reached }}/{{points.max }} {{ 'jsapp.student.pointsShort' | translate }}\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/formItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/formItem.tpl.html",
    "<div ng-class=\"itemOrientation == 'horizontal' ? 'form-col' : 'form-row'\">\n" +
    "    <label ng-if=\"itemLabel && itemType !== 'checkbox'\"\n" +
    "           class=\"input-label\"\n" +
    "           for=\"{{ itemId }}\"\n" +
    "           ng-bind=\"itemLabel\"></label>\n" +
    "    <input id=\"{{ itemId }}\"\n" +
    "           placeholder=\"{{ itemPlaceholder | translate}}\"/>\n" +
    "    <label ng-if=\"itemLabel && itemType === 'checkbox'\"\n" +
    "           class=\"checkbox-label\"\n" +
    "           for=\"{{ itemId }}\"\n" +
    "           ng-bind=\"itemLabel\"></label>\n" +
    "    <span ng-if=\"showValidationIcon\" class=\"item-validator bf\"\n" +
    "          ng-class=\"{'bf-times-medium': showInvalidIcon(),\n" +
    "                     'bf-check-medium': showValidIcon()}\"></span>\n" +
    "\n" +
    "    <div class=\"error-container\" ng-show=\"hasInvalidInput() && hasShowableError()\">\n" +
    "        <span class=\"error\" ng-repeat=\"errorCode in itemValidationErrors\">\n" +
    "            {{'jsapp.user.form.' + translateFormName + '.fields.' + itemName + '.errors.' + errorCode | translate }}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/languageFilter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/languageFilter.tpl.html",
    "<div>\n" +
    "    <div class=\"book-list-filter-container\" ng-if=\"languages.length > 1\">\n" +
    "        <div class=\"book-list-filter-prefix\"><i class=\"fa fa-comment-o\"></i></div>\n" +
    "        <div class=\"book-list-filter\">\n" +
    "            <select ng-model=\"selectedLang.current\"\n" +
    "                    ng-options=\"l.name | translate for l in languages\"\n" +
    "                    class=\"small\">\n" +
    "            </select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/lightbox.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/lightbox.tpl.html",
    "<div ng-class=\"lightbox.cssClass\" id=\"lightbox\">\n" +
    "    <div class=\"lightbox-overlay\" ng-click=\"!lightbox.preventOverlayClose && closeLightbox()\"></div>\n" +
    "    <div class=\"lightbox-content-container\">\n" +
    "        <div class=\"lightbox-outer\" ng-class=\"lightbox.style\">\n" +
    "            <a ng-click=\"closeLightbox()\" class=\"icon fa fa-times remove-sign\" ng-hide=\"lightbox.hideClose\"></a>\n" +
    "\n" +
    "            <div class=\"lightbox-content\" ng-switch=\"lightbox.inputType\">\n" +
    "                <h1 ng-if=\"lightbox.headline\" translate=\"{{ lightbox.headline }}\" data-cy=\"lightbox-title\"></h1>\n" +
    "                <ul class=\"lightbox-points\" ng-if=\"lightbox.points\">\n" +
    "                    <li ng-repeat=\"point in lightbox.points\"><i class=\"fa fa-check\"></i><span translate=\"{{ point }}\"></span></li>\n" +
    "                </ul>\n" +
    "                <span translate=\"{{ lightbox.content }}\"  ng-if=\"lightbox.content\" data-cy=\"lightbox-text\"\n" +
    "                      translate-values=\"{'helpUrl': '#'}\"></span>\n" +
    "\n" +
    "                <div ng-switch-when=\"text\" class=\"lightbox-inputfield\">\n" +
    "                    <input type=\"text\" ng-model=\"lightbox.input\" maxlength=\"20\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <input ng-switch-when=\"password\"\n" +
    "                       type=\"password\"\n" +
    "                       ng-model=\"lightbox.input\"\n" +
    "                       class=\"lightbox-input-pwd\"/>\n" +
    "\n" +
    "                <div ng-if=\"lightbox.error\"\n" +
    "                     class=\"lightbox-error\"\n" +
    "                     translate=\"{{ lightbox.error }}\" ></div>\n" +
    "\n" +
    "                <span ng-if=\"lightbox.info\"\n" +
    "                      class=\"lightbox-info\"\n" +
    "                      translate=\"{{ lightbox.info }}\"></span>\n" +
    "\n" +
    "                <div ng-if=\"lightbox.buttons\" class=\"lightbox-buttons\">\n" +
    "                <span class=\"button bt-medium bt-inactive bt-wide\"\n" +
    "                      ng-if=\"lightbox.inputType && !(lightbox.input)\"\n" +
    "                      translate=\"{{ lightbox.buttons[0].b_text }}\">\n" +
    "\n" +
    "                </span>\n" +
    "                    <a ng-repeat=\"button in lightbox.buttons\"\n" +
    "                       ng-href=\"{{ button.b_link.indexOf(':') !== -1 ? button.b_link : (button.b_link ? ('#' + button.b_link) : '') }}\"\n" +
    "                       ng-class=\"button.b_class\"\n" +
    "                       ng-if=\"!lightbox.inputType || lightbox.input || !$first\"\n" +
    "                       ng-click=\"expr(button.b_click, button.b_event)\"\n" +
    "                       data-cy=\"lightbox-{{ button.b_text | translate }}\"\n" +
    "                       translate=\"{{ button.b_text }}\">\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/navigation.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/navigation.tpl.html",
    "<ul>\n" +
    "    <li ng-repeat=\"naviPoint in naviPoints\"\n" +
    "        ui-route=\"{{ naviPoint.href }}\"\n" +
    "        ng-class=\"{active: naviPoint.isActive}\"\n" +
    "        ng-if=\"!naviPoint.feature || toggles[naviPoint.feature]\">\n" +
    "        <a ng-href=\"{{::('#' + naviPoint.href)}}\" open-popup=\"{{ naviPoint.openPopup }}\">\n" +
    "            <span ng-if=\"counters[naviPoint.counter]\" class=\"{{ naviPoint.counter_style}}\"\n" +
    "                  ng-bind=\"counters[naviPoint.counter]\"></span>\n" +
    "            <span ng-class=\"::naviPoint.cssClass\"></span>\n" +
    "            <span class=\"main-navi-label\" translate=\"{{ naviPoint.title }}\"></span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("directives/partials/radioBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/radioBubble.tpl.html",
    "<div id=\"speech-bubble-container\" ng-show=\"isVisible\">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <img src=\"./assets/speech-bubble-tip-top.svg\" class=\"speech-bubble-tip speech-bubble-tip-top\"/>\n" +
    "        <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"hide($event)\"></i>\n" +
    "                <span class=\"speach-bubble-head\"><span translate=\"{{ boxTitle }}\"></span></span>\n" +
    "\n" +
    "        <div class=\"student-navi\"><form name=\"myForm\">\n" +
    "            <span class=\"student-list-item\" ng-repeat=\"item in items\">\n" +
    "                <input  type=\"radio\"\n" +
    "                        id=\"radio-{{ item.value }}\"\n" +
    "                        ng-value=\"item\"\n" +
    "                        ng-model=\"$parent.selectedItem\" />\n" +
    "                <label for=\"radio-{{ item.value }}\" ng-bind=\"item.label\"></label>\n" +
    "            </span></form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/simpleListItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/simpleListItem.tpl.html",
    "<div class=\"row\"\n" +
    "     ng-class=\"{'selected': vm.selected, 'disabled': vm.disabled, 'row-selectable': vm.selectable && !vm.disabled}\"\n" +
    "     ng-click=\"!vm.selectable || vm.setSelection()\">\n" +
    "    <div ng-if=\"vm.selectable !== undefined\"\n" +
    "         ng-switch=\"vm.selectable\"\n" +
    "         class=\"col col-input col-light\">\n" +
    "        <i ng-switch-when=\"multi\"\n" +
    "           class=\"fa input-icon\"\n" +
    "           ng-class=\"{'fa-check-square-o': vm.selected, 'fa-square-o': !vm.selected}\"></i>\n" +
    "        <i ng-switch-when=\"single\"\n" +
    "           class=\"fa input-icon\"\n" +
    "           ng-class=\"{'fa-check-circle-o': vm.selected, 'fa-circle-o': !vm.selected}\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"col col-name col-light col-name-oneline\">\n" +
    "        {{ ::vm.name }}\n" +
    "        <span ng-show=vm.disabled>{{ ::vm.disabledHint }}</span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/speechBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/speechBubble.tpl.html",
    "<div id=\"speech-bubble-container\" ng-show=\"isVisible\">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <img src=\"./assets/speech-bubble-tip-top.svg\" class=\"speech-bubble-tip speech-bubble-tip-top\"/>\n" +
    "        <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"hide($event)\"></i>\n" +
    "                    <span class=\"speech-bubble-content-first-element student-list-item student-list-item-all-students\">\n" +
    "                	<input type=\"checkbox\" name=\"student-all\" value=\"student-all\" id=\"student-all\"\n" +
    "                           ng-model=\"changeAllBox\" ng-change=\"changeAll()\">\n" +
    "                    <label for=\"student-all\" translate=\"jsapp.teacher.wholeClass\"></label>\n" +
    "                </span>\n" +
    "\n" +
    "        <div class=\"student-navi\">\n" +
    "            <span class=\"student-list-item\" ng-repeat=\"item in items\" bindonce>\n" +
    "                <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        name=\"item-{{$index }}\"\n" +
    "                        value=\"{{ item.value }}\"\n" +
    "                        id=\"student-{{ item.value }}\"\n" +
    "                        ng-model=\"item.selected\">\n" +
    "                <label for=\"student-{{ item.value }}\" ng-bind=\"::item.label\"></label>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("directives/partials/worksheetListItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("directives/partials/worksheetListItem.tpl.html",
    "<div>\n" +
    "    <div bm-feature=\"!manageWorksheets\" class=\"row\" ng-class=\"{selected: worksheet.selected}\">\n" +
    "        <div class=\"col col-input\">\n" +
    "            <label data-cy=\"checkbox-{{ worksheet.id }}\" for=\"{{ worksheet.id }}\"><input type=\"checkbox\" ng-model=\"worksheet.selected\"\n" +
    "                id=\"{{ worksheet.id }}\"/></label>\n" +
    "        </div>\n" +
    "        <div class=\"col col-name\">\n" +
    "            <span ng-bind=\"::worksheet.worksheetName\"></span><br/>\n" +
    "            <span class=\"worksheet-meta\"\n" +
    "                  translate translate-values=\"{'lastEdited': '{{ worksheet.timestamp | date:'dd.MM.yyyy' }}'}\">\n" +
    "                jsapp.worksheets.lastEdited\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"col col-exercises\">\n" +
    "            <span class=\"exercises\"><i class=\"bm-list-icon fa fa-inbox\"></i>\n" +
    "                {{ worksheet.exerciseAmount }}\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"col col-duration\">\n" +
    "            <span class=\"duration\">\n" +
    "                <i class=\"bm-list-icon fa fa-clock-o\"></i>\n" +
    "                {{ worksheet.duration }} min\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"col col-todos task-todos\">\n" +
    "            <div class=\"exercise-buttons\">\n" +
    "                <div>\n" +
    "                    <a class=\"bm-list-icon task-todo button-circle\"\n" +
    "                       title=\"{{ 'jsapp.tooltip.play' | translate }}\"\n" +
    "                       open-worksheet worksheet-params=\"getExerciseListParams(worksheet)\"\n" +
    "                       ng-mousedown=\"lastWorksheet.id=false;clickedItem.id=worksheet.worksheetId;\"><span class=\"fa fa-play\"></span></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"col col-actions\">\n" +
    "            <a class=\"bm-list-icon fa fa-search\"\n" +
    "               ng-click=\"toggleModal($event);\"\n" +
    "               id=\"preview-{{ worksheet.worksheetId }}\"\n" +
    "               title=\"{{ 'jsapp.tooltip.view' | translate }}\"\n" +
    "               ng-class=\"{'active': opener.active === ('preview-' + worksheet.worksheetId)}\"></a>\n" +
    "            <span modal-bubble title=\"{{ worksheet.worksheetName }}\" css-class=\"exercise-preview\">\n" +
    "                <exercise-preview-list ng-if=\"modal.open\" exercise-list=\"worksheet.exercises\"\n" +
    "                                       exercise-key=\"url\"></exercise-preview-list>\n" +
    "            </span>\n" +
    "    \n" +
    "            <a ng-href=\"{{::('#/worksheets/edit/' + worksheet.worksheetId)}}\"\n" +
    "               class=\"bm-list-icon fa fa-pencil\"\n" +
    "               title=\"{{ 'jsapp.tooltip.edit' | translate }}\"\n" +
    "               ng-mousedown=\"lastWorksheet.id = false;clickedItem.id = worksheet.worksheetId;\"></a>\n" +
    "            <a class=\"bm-list-icon fa fa-files-o\"\n" +
    "               ng-click=\"copyWorksheet(worksheet, $event)\"\n" +
    "               title=\"{{ 'jsapp.tooltip.copy' | translate }}\"></a>\n" +
    "            <a ng-click=\"exportWorksheetBubble(worksheet, $event);\"\n" +
    "               ng-class=\"{'active': worksheet.showCode }\"\n" +
    "               title=\"{{ 'jsapp.tooltip.export' | translate }}\"\n" +
    "               class=\"bm-list-icon fa fa-sign-out\">\n" +
    "            </a>\n" +
    "            <span export-worksheet-bubble></span>\n" +
    "            <bm-worksheet-download-button worksheet=\"worksheet\"></bm-worksheet-download-button>\n" +
    "    \n" +
    "            <a class=\"bm-list-icon fa fa-trash-o\"\n" +
    "               title=\"{{ 'jsapp.tooltip.delete' | translate }}\"\n" +
    "               ng-click=\"deleteWorksheet(worksheet, $event)\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div bm-feature=\"manageWorksheets\" class=\"row\" ng-class=\"{selected: worksheet.selected}\">\n" +
    "        <div class=\"col col-input\">\n" +
    "            <label data-cy=\"checkbox-{{ worksheet.id }}\" for=\"{{ worksheet.id }}\"><input type=\"checkbox\" ng-model=\"worksheet.selected\"\n" +
    "                                                   id=\"{{ worksheet.id }}\"/></label>\n" +
    "        </div>\n" +
    "        <div class=\"col col-name\">\n" +
    "            <span data-cy=\"worksheet-name-{{worksheet.id}}\" ng-bind=\"::worksheet.worksheetName\"></span><br/>\n" +
    "            <span class=\"worksheet-meta\" ng-if=\"!worksheet.deprecatedExerciseCount\">\n" +
    "                {{ worksheet.exerciseAmount }} {{ 'jsapp.worksheets.exercises' | translate }},\n" +
    "                {{ 'jsapp.worksheets.approxDuration' | translate }}: {{ worksheet.duration }} min,\n" +
    "                {{ 'jsapp.worksheets.lastEdited' | translate }}{{ worksheet.timestamp | date:'dd.MM.yyyy' }}\n" +
    "            </span>\n" +
    "            <span class=\"worksheet-meta\" ng-if=\"worksheet.deprecatedExerciseCount > 0\">\n" +
    "                {{ worksheet.exerciseAmount }} {{ 'jsapp.worksheets.exercises' | translate }}\n" +
    "                <span class=\"worksheet-outdated-ex\">{{ worksheet.deprecatedExerciseCount }} {{ 'jsapp.worksheets.outdatedExercises' | translate }}</span>,\n" +
    "                {{ 'jsapp.worksheets.approxDuration' | translate }}: {{ worksheet.duration }} min,\n" +
    "                {{ 'jsapp.worksheets.lastEdited' | translate }}{{ worksheet.timestamp | date:'dd.MM.yyyy' }}\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"col col-actions\">\n" +
    "            <a class=\"bm-list-icon fa fa-search\"\n" +
    "               ng-click=\"toggleModal($event);\"\n" +
    "               id=\"preview-{{ worksheet.worksheetId }}\"\n" +
    "               link-text=\"{{ 'jsapp.tooltip.view' | translate }}\"\n" +
    "               ng-class=\"{'active': opener.active === ('preview-' + worksheet.worksheetId)}\"></a>\n" +
    "            <span modal-bubble title=\"{{ worksheet.worksheetName }}\" css-class=\"exercise-preview\">\n" +
    "                <exercise-preview-list ng-if=\"modal.open\" exercise-list=\"worksheet.exercises\"\n" +
    "                                        exercise-key=\"url\"></exercise-preview-list>\n" +
    "            </span>\n" +
    "               \n" +
    "            <a class=\"bm-list-icon fa fa-ellipsis-h\"\n" +
    "                data-cy=\"worksheet-options-button-{{worksheet.id}}\"\n" +
    "               ng-click=\"worksheetOptionsBubble(worksheet, $event);\"\n" +
    "               ng-class=\"{'active': worksheet.showOptionsBubble }\"></a>\n" +
    "            <span worksheet-options-bubble></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("googleMapsModule/partials/gmSchoolSearch.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("googleMapsModule/partials/gmSchoolSearch.tpl.html",
    "<div class=\"gm-search-container\">\n" +
    "    <div id=\"search-box-parent\"></div>\n" +
    "    <div ng-if=\"gm.mapReady\">\n" +
    "        <ui-gmap-google-map center=\"gm.map.center\"\n" +
    "                            control=\"gm.map.control\"\n" +
    "                            zoom=\"gm.map.zoom\"\n" +
    "                            draggable=\"true\"\n" +
    "                            options=\"gm.options\">\n" +
    "\n" +
    "            <ui-gmap-search-box options=\"gm.searchbox.options\"\n" +
    "                                template=\"gm.searchbox.template\"\n" +
    "                                events=\"gm.searchbox.events\"\n" +
    "                                parentdiv=\"gm.searchbox.parentdiv\"></ui-gmap-search-box>\n" +
    "\n" +
    "            <ui-gmap-markers idkey=\"gm.map.idkey\"\n" +
    "                             models=\"gm.map.markers\"\n" +
    "                             coords=\"'self'\" icon=\"'icon'\"\n" +
    "                             click=\"'onClicked'\"></ui-gmap-markers>\n" +
    "\n" +
    "            <ui-gmap-window coords=\"gm.selected\"\n" +
    "                            idkey=\"gm.selected.place_id\"\n" +
    "                            templateurl=\"gm.selected.templateurl\"\n" +
    "                            templateparameter=\"gm.selected.templateparameter\"\n" +
    "                            options=\"gm.selected.options\"\n" +
    "                            closeClick='gm.selected.closeClick()'></ui-gmap-window>\n" +
    "\n" +
    "        </ui-gmap-google-map>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("groupManager/partials/groupMemberPassword.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("groupManager/partials/groupMemberPassword.tpl.html",
    "<div class=\"group-member-password\">\n" +
    "    <form class=\"form\" name=\"form\" ng-submit=\"changeGroupMemberPassword()\">\n" +
    "        <form-item\n" +
    "                item-id=\"update-password-{{::member._id}}\"\n" +
    "                item-name=\"password\"\n" +
    "                item-type=\"password\"\n" +
    "                item-label=\"{{ 'jsapp.teacher.groupManager.groupMember.passwordForm.password.placeholder' | translate }}\"\n" +
    "                item-attributes=\"autocomplete=off\"\n" +
    "                item-validation-min-length=\"5\"\n" +
    "                item-validation-required=\"true\"\n" +
    "                item-disable-on-submit=\"true\"\n" +
    "            >\n" +
    "        </form-item>\n" +
    "\n" +
    "        <form-item\n" +
    "                item-id=\"update-passwordrepeat-{{::member._id}}\"\n" +
    "                item-name=\"password_repeat\"\n" +
    "                item-type=\"password\"\n" +
    "                item-label=\"{{ 'jsapp.teacher.groupManager.groupMember.passwordForm.passwordRepeat.placeholder' | translate }}\"\n" +
    "                item-validation-min-length=\"5\"\n" +
    "                item-attributes=\"repeat-password=password autocomplete=off\"\n" +
    "                item-validation-required=\"true\"\n" +
    "                item-disable-on-submit=\"true\">\n" +
    "        </form-item>\n" +
    "\n" +
    "        <form-item\n" +
    "                item-id=\"update-setownpassword-{{::member._id}}\"\n" +
    "                item-name=\"setPasswordExpired\"\n" +
    "                item-type=\"checkbox\"\n" +
    "                item-label=\"{{ 'jsapp.teacher.groupManager.groupMember.passwordForm.setOwn.label' | translate }}\"\n" +
    "                item-attributes=\"autocomplete=off\"\n" +
    "                item-no-validation=\"true\"\n" +
    "                item-disable-on-submit=\"true\">\n" +
    "        </form-item>\n" +
    "\n" +
    "        <div ng-if=\"form.password.$error.required\"\n" +
    "             translate=\"jsapp.teacher.groupManager.groupMember.passwordForm.password.required\"></div>\n" +
    "        <div ng-if=\"form.password.$error.minlength\"\n" +
    "             translate=\"jsapp.teacher.groupManager.groupMember.passwordForm.password.pwlength\"></div>\n" +
    "        <div ng-if=\"!form.password.$error.required && !form.password.$error.minlength && form.password_repeat.$error.repeat\"\n" +
    "             translate=\"jsapp.teacher.groupManager.groupMember.passwordForm.password.repeat\"></div>\n" +
    "\n" +
    "        <div class=\"form-row\">\n" +
    "            <button type=\"submit\" ng-disabled=\"form.$invalid || form.$submitted\" ng-class=\"{'bt-inactive': form.$invalid || form.$submitted}\"\n" +
    "                    class=\"button bt-regular bt-action password-submit\"\n" +
    "                    translate=\"jsapp.teacher.groupManager.groupMember.passwordForm.submit.label\"></button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("groupManager/partials/groupMembers.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("groupManager/partials/groupMembers.tpl.html",
    "<div class=\"group-manager\">\n" +
    "    <ul class=\"group-members\">\n" +
    "        <li ng-repeat=\"member in groupMembers\"\n" +
    "            ng-class=\"{'last-item': $last, 'first-item': $first, 'current-item': member.selected}\">\n" +
    "            <div class=\"group-member-name\"><span ng-bind=\"member.displayName\"></span> <span\n" +
    "                    class=\"group-member-username\"\n" +
    "                    ng-bind=\"member.displayName !== member.username ? ('(' + member.username + ')') : ''\"></span></div>\n" +
    "            <div class=\"group-member-buttons\">\n" +
    "\n" +
    "\n" +
    "                <a class=\"button bt-regular bt-action-light\"\n" +
    "                   ng-click=\"toggleSelectedMember(member);\"  id=\"member_{{$index}}\"\n" +
    "                   translate=\"jsapp.teacher.groupManager.groupMember.passwordButton\"></a>\n" +
    "\n" +
    "                <div bm-balloon\n" +
    "                     title-key=\"jsapp.teacher.groupManager.groupMember.passwordForm.title\"\n" +
    "                     class=\"balloon-260\"\n" +
    "                     orientation=\"left\"\n" +
    "                     link-element=\"member_{{$index}}\"\n" +
    "                     show=\"member.selected\">\n" +
    "                    <group-member-password member=\"member\" show=\"member.selected\"></group-member-password>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapDeletion.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapDeletion.tpl.html",
    "<div id=\"delete-{{gap.content_list}}\"\n" +
    "     ng-class=\"{'student-bubble-trigger': true, 'active': opener.active === ('delete-' + gap.content_list)}\"\n" +
    "     class=\"task-todo\">\n" +
    "    <a title=\"{{ 'jsapp.tooltip.delete' | translate }}\"\n" +
    "       ng-click=\"vm.showDeletionBubble()\">\n" +
    "        <i class=\"fa fa-trash-o\"></i>\n" +
    "    </a>\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         orientation=\"left\"\n" +
    "         show=\"vm.showBubble\"\n" +
    "         title-key=\"jsapp.teacher.reporting.knowledgegap.popup.delete.title\"\n" +
    "         link-element=\"delete-{{gap.content_list}}\"\n" +
    "         selection-style=\"active\"\n" +
    "         class=\"balloon-260\">\n" +
    "        <div class=\"options-container\" translate=\"jsapp.teacher.reporting.knowledgegap.popup.delete.text\"></div>\n" +
    "        <div class=\"balloon-button-row\">\n" +
    "            <a class=\"remove-btn button bt-regular bt-abort fullwidth\"\n" +
    "               ng-click=\"vm.deleteKnowledgeGap(gap.learning_objective_id)\"\n" +
    "               translate=\"jsapp.teacher.reporting.knowledgegap.popup.delete.button\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsFilter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsFilter.tpl.html",
    "<div class=\"filter-links content-padding\">\n" +
    "    <a class=\"link-round-corners lrc-view\"\n" +
    "       ng-click=\"knowledgeGapsConfig.state = 'open'\"\n" +
    "       ng-class=\"{'link-round-corners-active': knowledgeGapsConfig.state === 'open'}\"\n" +
    "       translate=\"jsapp.teacher.reporting.openKnowledgeGaps\"></a>\n" +
    "\n" +
    "    <a class=\"link-round-corners lrc-view\"\n" +
    "       ng-click=\"knowledgeGapsConfig.state = 'closed'\"\n" +
    "       ng-class=\"{'link-round-corners-active': knowledgeGapsConfig.state === 'closed'}\"\n" +
    "       translate=\"jsapp.teacher.reporting.closedKnowledgeGaps\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsGroupClosed.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsGroupClosed.tpl.html",
    "<div class=\"col col-date\">\n" +
    "    <span>{{ kgap.timestamp | date:'dd.MM.yyyy'}}</span>\n" +
    "</div>\n" +
    "<div class=\"col col-name\">\n" +
    "    <span ng-bind=\"::kgap.name\"></span><br/>\n" +
    "</div>\n" +
    "<div class=\"col col-students\">\n" +
    "    <div ng-click=\"toggleModal($event)\"\n" +
    "         ng-class=\"{'student-bubble-trigger': true, 'active': opener.active}\">\n" +
    "        <i class=\"fa fa-user\"></i>\n" +
    "        <span>{{ kgap.users.length }}</span>\n" +
    "\n" +
    "        <div modal-bubble css-class=\"student-list-bubble percentage-bubble\" box-width=\"300\" box-type=\"small\"\n" +
    "             dynamic-height=\"true\" title=\"{{ 'jsapp.general.participants' | translate }}\">\n" +
    "            <div class=\"subcontainer\" ng-if=\"modal.open\" student-list-bubble\n" +
    "                 student-list-all=\"'user_results'\"\n" +
    "                 user-results=\"kgap.user_results\"\n" +
    "                 student-list-done=\"[]\"\n" +
    "                 group-id=\"navigationStates.currentGroupId\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsGroupOpen.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsGroupOpen.tpl.html",
    "<div class=\"task-number task-date task-cell\"><span>{{ kgap.timestamp | date:'dd.MM.yyyy'}}</span></div>\n" +
    "<div class=\"task-name full-width\">\n" +
    "    <span ng-bind=\"::kgap.name\"></span><br/>\n" +
    "</div>\n" +
    "<div class=\"task-students\">\n" +
    "    <div id=\"students-{{kgap.content_list}}\"\n" +
    "         ng-click=\"toggleModal($event)\"\n" +
    "         ng-class=\"{'student-bubble-trigger': true, 'active': opener.active === ('students-' + kgap.content_list)}\"\n" +
    "         class=\"task-todo\">\n" +
    "        <a class=\"nowrap\">\n" +
    "            <i class=\"fa fa-user\"></i>\n" +
    "            <span>{{ kgap.users.length }}</span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble css-class=\"student-list-bubble\" box-width=\"200\" box-type=\"small\"\n" +
    "             dynamic-height=\"true\" title=\"{{ 'jsapp.general.participants' | translate }}\">\n" +
    "            <div class=\"subcontainer\" ng-if=\"modal.open\"\n" +
    "                 student-list-bubble student-list-done=\"[]\"\n" +
    "                 student-list-all=\"kgap.users\"\n" +
    "                 group-id=\"navigationStates.currentGroupId\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"preview-{{kgap.content_list}}\"\n" +
    "         ng-if=\"enableDeleteKnowledgeGaps\"\n" +
    "         ng-click=\"toggleModal($event)\"\n" +
    "         ng-class=\"{'student-bubble-trigger': true, 'active': opener.active === ('preview-' + kgap.content_list)}\"\n" +
    "         class=\"task-todo\">\n" +
    "        <a title=\"{{ 'jsapp.tooltip.view' | translate }}\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ kgap.name }}\" css-class=\"exercise-preview\">\n" +
    "            <exercise-preview content-locale=\"kgap.content_locale\"\n" +
    "                              content-list=\"kgap.content_list\">\n" +
    "            </exercise-preview>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsListGroup.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsListGroup.tpl.html",
    "<h2 ng-if=\"toggles.devTodoNavi\" class=\"headline reporting-headline\"\n" +
    "    translate=\"jsapp.teacher.reporting.knowledgeGaps\"></h2>\n" +
    "<div ng-if=\"!navigationStates.currentStudentId\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreKnowledgeGaps\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"bm-task-list\">\n" +
    "        <div class=\"tasks knowledgegaps\" ng-if=\"knowledgeGaps.length\">\n" +
    "            <ul>\n" +
    "                <li ng-if=\"enableDeleteKnowledgeGaps\" class=\"task\">\n" +
    "                    <div class=\"knowledgegap-list-header task-cell task-number task-date col col-date col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapLastDiscovered\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-name col col-name col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-students col\">&nbsp;</div>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsGroupOpen.tpl.html'\"\n" +
    "                    class=\"task\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !knowledgeGaps.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noknowledgegapsHint}}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{noknowledgegapsHintSubInfo}}\"></div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreKnowledgeGaps()\"\n" +
    "           ng-show=\"knowledgeGapsSlice.items.length < knowledgeGaps.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- navigationStates.currentGroupId &&  -->\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsListGroupReporting.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsListGroupReporting.tpl.html",
    "<div ng-if=\"!navigationStates.currentStudentId\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreKnowledgeGaps\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <h2 class=\"headline reporting-headline\"\n" +
    "        translate=\"jsapp.teacher.reporting.knowledgeGaps\"></h2>\n" +
    "\n" +
    "    <ng ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsFilter.tpl.html'\"></ng>\n" +
    "    <div class=\"bm-task-list\" ng-class=\"{'list': knowledgeGapsConfig.state==='closed'}\">\n" +
    "        <div class=\"tasks knowledgegaps\" ng-if=\"knowledgeGaps.length\">\n" +
    "            <ul ng-if=\"knowledgeGapsConfig.state==='open'\">\n" +
    "                <li ng-if=\"knowledgeGapsSlice.items.length\" class=\"task\">\n" +
    "                    <div class=\"knowledgegap-list-header task-cell task-number task-date col col-date col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapLastDiscovered\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-name col col-name col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-students col\">&nbsp;</div>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\" class=\"task\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsGroupOpen.tpl.html'\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul ng-if=\"knowledgeGapsConfig.state==='closed'\">\n" +
    "                <li ng-if=\"knowledgeGapsSlice.items.length\">\n" +
    "                    <div class=\"header-row\">\n" +
    "                        <div class=\"col col-date col-light\"\n" +
    "                             translate=\"jsapp.teacher.reporting.knowledgeGapLastClosed\"></div>\n" +
    "                        <div class=\"col col-name col-light\"\n" +
    "                             translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsGroupClosed.tpl.html'\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !knowledgeGaps.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noknowledgegapsHint}}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{noknowledgegapsHintSubInfo}}\"></div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreKnowledgeGaps()\"\n" +
    "           ng-show=\"knowledgeGapsSlice.items.length < knowledgeGaps.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- navigationStates.currentGroupId &&  -->\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsListStudent.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsListStudent.tpl.html",
    "<div ng-if=\"navigationStates.currentGroupId && navigationStates.currentStudentId\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreKnowledgeGaps\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"bm-task-list\">\n" +
    "        <div class=\"tasks knowledgegaps\" ng-if=\"knowledgeGaps.length\">\n" +
    "            <ul>\n" +
    "                <li ng-if=\"enableDeleteKnowledgeGaps\" class=\"task\">\n" +
    "                    <div class=\"knowledgegap-list-header task-cell task-number task-date col col-date col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapLastDiscovered\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-name col col-name col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-students col\">&nbsp;</div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsStudentOpen.tpl.html'\"\n" +
    "                    class=\"task\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !knowledgeGaps.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noknowledgegapsHint}}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{knowledgegapsSubInfo}}\"></div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreKnowledgeGaps()\"\n" +
    "           ng-show=\"knowledgeGapsSlice.items.length < knowledgeGaps.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsListStudentReporting.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsListStudentReporting.tpl.html",
    "<div ng-if=\"navigationStates.currentGroupId && navigationStates.currentStudentId\"\n" +
    "     class=\"infinite-scroll-wrap\"\n" +
    "     lr-infinite-scroll=\"loadMoreKnowledgeGaps\"\n" +
    "     time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <h2 class=\"headline reporting-headline\"\n" +
    "        translate=\"jsapp.teacher.reporting.knowledgeGaps\"></h2>\n" +
    "    <ng ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsFilter.tpl.html'\"></ng>\n" +
    "    <div class=\"bm-task-list\" ng-class=\"{'list': knowledgeGapsConfig.state==='closed'}\">\n" +
    "        <div class=\"tasks knowledgegaps\" ng-if=\"knowledgeGaps.length\">\n" +
    "            <ul ng-if=\"knowledgeGapsConfig.state==='open'\">\n" +
    "                <li ng-if=\"enableDeleteKnowledgeGaps\" class=\"task\">\n" +
    "                    <div class=\"knowledgegap-list-header task-cell task-number task-date col col-date col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapLastDiscovered\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-name col col-name col-light\"\n" +
    "                         translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                    <div class=\"knowledgegap-list-header task-students col\">&nbsp;</div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsStudentOpen.tpl.html'\"\n" +
    "                    class=\"task\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul ng-if=\"knowledgeGapsConfig.state==='closed'\">\n" +
    "                <li ng-if=\"knowledgeGapsSlice.items.length\">\n" +
    "                    <div class=\"list\">\n" +
    "                        <div class=\"header-row\">\n" +
    "                            <div class=\"col col-date col-light\"\n" +
    "                                 translate=\"jsapp.teacher.reporting.knowledgeGapClosed\"></div>\n" +
    "                            <div class=\"col col-name col-light\"\n" +
    "                                 translate=\"jsapp.teacher.reporting.knowledgeGapTitle\"></div>\n" +
    "                            <div class=\"col col-activity-result-teacher col-result-with-coin\"\n" +
    "                                 translate=\"jsapp.todo.bestResult\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"kgap in knowledgeGapsSlice.items\"\n" +
    "                    ng-include=\"'knowledgeGapsModule/partials/knowledgeGapsStudentClosed.tpl.html'\"\n" +
    "                    class=\"task\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !knowledgeGaps.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noknowledgegapsHint}}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{noknowledgegapsHintSubInfo}}\"></div>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreKnowledgeGaps()\"\n" +
    "           ng-show=\"knowledgeGapsSlice.items.length < knowledgeGaps.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- navigationStates.currentGroupId &&  -->\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsStudentClosed.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsStudentClosed.tpl.html",
    "<div class=\"col col-date\">\n" +
    "    <span>{{ kgap.timestamp | date:'dd.MM.yyyy'}}</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col col-name col-name-middle\">\n" +
    "    <span ng-bind=\"::kgap.name\"></span><br/>\n" +
    "</div>\n" +
    "<div class=\"col col-activity-result-teacher col-result-with-coin\">\n" +
    "    <div class=\"exercise-percentage color-success\">\n" +
    "        {{kgap.user_results[studentId].success_percentage}}%\n" +
    "    </div>\n" +
    "    <div class=\"single-coin\">\n" +
    "        <div class=\"exercise-coins exercise-coins-1\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapsStudentOpen.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapsStudentOpen.tpl.html",
    "<div class=\"task-number task-date task-cell\"><span>{{ kgap.timestamp | date:'dd.MM.yyyy'}}</span></div>\n" +
    "<div class=\"task-name full-width\">\n" +
    "    <span ng-bind=\"::kgap.name\"></span><br/>\n" +
    "</div>\n" +
    "<div class=\"task-students\">\n" +
    "    <div id=\"preview-{{kgap.content_list}}\"\n" +
    "         ng-click=\"toggleModal($event)\"\n" +
    "         ng-class=\"{'student-bubble-trigger': true, 'active': opener.active === ('preview-' + kgap.content_list)}\"\n" +
    "         class=\"task-todo\">\n" +
    "        <a title=\"{{ 'jsapp.tooltip.view' | translate }}\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ kgap.name }}\" css-class=\"exercise-preview\">\n" +
    "            <exercise-preview ng-if=\"modal.open\" content-locale=\"kgap.content_locale\"\n" +
    "                              content-list=\"kgap.content_list\">\n" +
    "            </exercise-preview>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <delete-knowledgegap gap=\"kgap\"></delete-knowledgegap>\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/knowledgeGapTask.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/knowledgeGapTask.tpl.html",
    "<div class=\"exercise-buttons\">\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && !taskButtons.Redo\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-circle\"\n" +
    "           ng-mousedown=\"clickedItem.id=gap.learning_objective_id;lastKnowledgeGap.id=false;lastKnowledgeGap.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && taskButtons.Redo\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-circle\"\n" +
    "           ng-mousedown=\"clickedItem.id=gap.learning_objective_id;lastKnowledgeGap.id=false;lastKnowledgeGap.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Redo\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon\"\n" +
    "           ng-mousedown=\"clickedItem.id=gap.learning_objective_id;lastKnowledgeGap.id=false;lastKnowledgeGap.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.Redo.params()\">\n" +
    "            <span ng-class=\"taskButtons.Redo.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Pay && toggles.paymentLink\">\n" +
    "        <a href=\"\" class=\"bm-list-icon task-todo button-circle bt-play-pay fa fa-lock\"\n" +
    "           open-popup=\"payment\"\n" +
    "           payment-action=\"true\"\n" +
    "           ng-mousedown=\"clickedItem.id=gap.learning_objective_id;lastKnowledgeGap.id=false;lastKnowledgeGap.continueId=false;\"\n" +
    "                ></a>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("knowledgeGapsModule/partials/studentKnowledgeGapsList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("knowledgeGapsModule/partials/studentKnowledgeGapsList.tpl.html",
    "<div bm-check-authorization\n" +
    "     ng-if=\"knowledgeGaps.length\" class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreKnowledgeGaps\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"bm-task-list knowledgegaps-list\">\n" +
    "        <div class=\"tasks\">\n" +
    "            <ul>\n" +
    "                <li class=\"task\" ng-repeat=\"gap in knowledgeGapsSlice.items\"\n" +
    "                    ng-class=\"{'current-item': gap.learning_objective_id === lastKnowledgeGap.id || gap.continue_id === lastKnowledgeGap.continueId, 'current-item-clicked': gap.learning_objective_id === clickedItem.id}\"\n" +
    "                    scroll-type=\"item\"\n" +
    "                    scroll-if=\"{{ $index === (knowledgeGapsSlice.items.length - 1) && (lastKnowledgeGap.id !== false || lastKnowledgeGap.continueId !== false) }}\">\n" +
    "                    <div class=\"task-number task-date task-cell\">{{ gap.timestamp | date:'dd.MM.yyyy'}}</div>\n" +
    "                    <div class=\"task-name\"><span ng-bind=\"gap.name\"></span></div>\n" +
    "                    <div class=\"task-todos\" knowledgegap-task></div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <a ng-click=\"loadMoreKnowledgeGaps()\"\n" +
    "           ng-show=\"knowledgeGapsSlice.items.length < knowledgeGaps.length\"\n" +
    "           class=\"button load-more-button bt-view\"\n" +
    "           translate=\"jsapp.general.more\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"missing-data-container\" ng-if=\"!pendingRequests && !knowledgeGaps.length\">\n" +
    "    <div bm-check-authorization class=\"missing-data-hint\" translate=\"jsapp.student.noKnowledgeGaps\"></div>\n" +
    "\n" +
    "    <div bm-check-authorization-start=\"!\" class=\"missing-data-hint\" translate=\"jsapp.authorization.knowledgegaps.hint\"></div>\n" +
    "    <div class=\"missing-data-hint-subinfo\" translate=\"jsapp.authorization.knowledgegaps.subInfo\"></div>\n" +
    "\n" +
    "    <div bm-check-authorization-end\n" +
    "         ng-click=\"onStartAuthorization()\"\n" +
    "         class=\"button bt-big bt-action bt-wide missing-data-button\"\n" +
    "         translate=\"jsapp.authorization.knowledgegaps.button\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("legalTextsModule/partials/feedback.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("legalTextsModule/partials/feedback.tpl.html",
    "<div ng-if=\"feedbackURL\">\n" +
    "    <iframe-tag iframe-src=\"{{ feedbackURL }}\" width=\"100%\" height=\"1000px\"/>\n" +
    "</div>");
}]);

angular.module("legalTextsModule/partials/legalTexts.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("legalTextsModule/partials/legalTexts.tpl.html",
    "<div class=\"legaltext-wrap\"></div>");
}]);

angular.module("modalBubbleModule/partials/assignChapter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/assignChapter.tpl.html",
    "<div id=\"speech-bubble-container\"\n" +
    "     class=\"export-speech-bubble-container\"\n" +
    "     ng-show=\"chapter.showAssignChapterBubble\"\n" +
    "     ng-if=\"chapter.showAssignChapterBubble\"\n" +
    "     ng-style=\"exportStyle\"\n" +
    ">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <div class=\"assign-chapter-option-list-head\">\n" +
    "            <div class=\"assign-chapter-option-header-text\" translate>jsapp.books.chapterOptions.title</div>\n" +
    "            <div class=\"bt-close close-tooltip\">\n" +
    "                <a class=\"button bt-square bf bf-times-thin\" ng-click=\"chapter.showAssignChapterBubble = false\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"assign-chapter-option-list-content\">\n" +
    "            <ul>\n" +
    "                <a href=\"\" ng-click=\"assignChapter(chapter, assignData)\">\n" +
    "                    <li class=\"assign-chapter-option-item\">\n" +
    "                        <span>\n" +
    "                            {{ isChapterFullySelected(chapter, assignData) ? 'jsapp.books.chapterOptions.deselectAll' : 'jsapp.books.chapterOptions.selectAll' | translate }}\n" +
    "                        </span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/download-kem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/download-kem.tpl.html",
    "<div class=\"download-wrap\">\n" +
    "    <a class=\"download-item\"\n" +
    "       ng-href=\"{{ kemPdf }}\"\n" +
    "       target=\"bm-pdf\">\n" +
    "        <i class=\"fa fa-file-pdf-o\"></i> <span translate=\"jsapp.teacher.downloadPopupKEM\"></span>\n" +
    "    </a>\n" +
    "    <a class=\"download-item\"\n" +
    "       target=\"bm-pdf\"\n" +
    "       ng-click=\"downloadExercise($event);\">\n" +
    "        <i class=\"fa fa-file-pdf-o\"></i> <span  translate=\"jsapp.teacher.downloadPopupExercise\"></span>\n" +
    "    </a>\n" +
    "    <div class=\"download-item\" ng-if=\"!textSent\">\n" +
    "        <label for=\"downloadtext\" translate=\"jsapp.teacher.downloadPopupFeedbackPlaceholder\"></label>\n" +
    "        <input id=\"downloadtext\"\n" +
    "               type=\"text\"\n" +
    "               ng-model=\"downloadText\"/>\n" +
    "        <a\n" +
    "           class=\"button small bt-confirm bt-toolbar-tinted submit-download-text\"\n" +
    "           ng-class=\"{'bt-toolbar-tinted-inactive': !downloadText}\"\n" +
    "           ng-click=\"sendDownloadText()\"  translate=\"jsapp.teacher.downloadPopupFeedbackSend\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"download-item\" ng-if=\"textSent\" translate=\"jsapp.teacher.downloadPopupFeedbackThanks\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/exerciseOptionsBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/exerciseOptionsBubble.tpl.html",
    "<div ng-if=\"!previewSrc\" class=\"subcontainer option-button-box\">\n" +
    "    <a class=\"option-button\" ng-click=\"showPreview()\">\n" +
    "        <i class=\"fa fa-search\"></i><span translate=\"jsapp.teacher.exercise.preview\" /></a>\n" +
    "</div>\n" +
    "<div ng-if=\"!previewSrc\" class=\"subcontainer option-button-box\">\n" +
    "    <a class=\"option-button\"\n" +
    "       open-worksheet\n" +
    "       worksheet-params=\"exerciseParams(groupId, assignmentId, (exerciseNr - 1), contentLocale, exerciseId)\">\n" +
    "    <i class=\"fa fa-play-circle-o\"></i><span translate=\"jsapp.teacher.exercise.start\" /></a>\n" +
    "</div>\n" +
    "\n" +
    "<!--Exercise Preview Image-->\n" +
    "<div ng-if=\"previewSrc\" class=\"subcontainer\">\n" +
    "    <img ng-src=\"{{previewSrc}}\" class=\"exercise-preview-image\" alt=\"previewSrc\"\n" +
    "         resize-preview dynamic-width=\"{{true}}\" />\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/exercisePreview.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/exercisePreview.tpl.html",
    "<div ng-repeat=\"src in exercisePreview.preview_list track by $index\" class=\"subcontainer\">\n" +
    "\n" +
    "    <h5><span translate=\"jsapp.books.task\"></span> {{$index +1 }} </h5>\n" +
    "    <!--\n" +
    "    -->\n" +
    "    <img ng-src=\"{{src}}\" width=\"{{ src.endsWith('.png') ?  '532px' : 'auto'}}\"/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/exportWorksheetBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/exportWorksheetBubble.tpl.html",
    "<div id=\"speech-bubble-container\"\n" +
    "     class=\"export-speech-bubble-container\"\n" +
    "     ng-show=\"worksheet.showCode\"\n" +
    "     data-cy=\"worksheet-export-bubble-{{worksheet.id}}\"\n" +
    "     ng-style=\"exportStyle\">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <div class=\"speech-bubble-head\">\n" +
    "            <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"worksheet.showCode = false\"></i>\n" +
    "            <span class=\"speech-bubble-content-first-element\">\n" +
    "                <label translate translate-values=\"{'worksheetName': '{{ worksheet.worksheetName }}'}\"\n" +
    "                     >jsapp.worksheets.export.share\n" +
    "                </label>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"speech-bubble-content\">\n" +
    "            <span class=\"export-code-titel\"\n" +
    "                translate>jsapp.worksheets.export.codePrefix</span>\n" +
    "            <span class=\"export-code\">{{ worksheet.code }}</span>\n" +
    "            <span class=\"export-explanation\" translate>jsapp.worksheets.export.explanation</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/modalBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/modalBubble.tpl.html",
    "<div class=\"modal-bubble {{ modal.open ? 'modal-open' : '' }}\" ng-show=\"modal.open\" ng-style=\"modal.style\"\n" +
    "     ng-class=\"modal.cssClass\">\n" +
    "    <div class=\"header\">\n" +
    "        {{ modal.title }}\n" +
    "        <span class=\"subtitle\" ng-if=\"modal.subtitle\">\n" +
    "            <i class=\"fa fa-warning\"></i>{{ modal.subtitle }}\n" +
    "        </span>\n" +
    "        <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"modal.open = false; opener.active = ''\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"scroll-container\" ng-style=\"modal.containerStyle\">\n" +
    "        <div ng-transclude class=\"modal-content\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/moveFolderBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/moveFolderBubble.tpl.html",
    "<div id=\"speech-bubble-container\"\n" +
    "     class=\"export-speech-bubble-container\"\n" +
    "     ng-show=\"showMoveFolderBubble\"\n" +
    "     ng-style=\"exportStyle\"\n" +
    ">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <div class=\"speech-bubble-head worksheet-option-list-head\">\n" +
    "            <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"worksheet.showOptionsBubble = false\"></i>\n" +
    "            <span class=\"speech-bubble-content-first-element\">\n" +
    "                <label translate>jsapp.folders.moveToAnotherFolder</label>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"worksheet-option-list-content\">\n" +
    "            <ul>\n" +
    "                <a ng-repeat=\"folder in worksheetFolders | filter:{id:'!{{ selectedFolderWorksheetId }}'}\"\n" +
    "                   href=\"\" ng-click=\"moveWorksheet(worksheet, selectedFolderWorksheetId, folder.id)\"\n" +
    "                   ng-mousedown=\"lastWorksheet.id = false;clickedItem.id = worksheet.worksheetId;\">\n" +
    "                    <li class=\"worksheet-option-item\">\n" +
    "                        <span class=\"bm-list-icon fa fa-arrow-circle-right\"\n" +
    "                            title=\"{{ 'jsapp.folders.move.tooltip' | translate }} {{ folder.name }}\"></span>\n" +
    "                          <span>{{ folder.name }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/singleExercisePreview.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/singleExercisePreview.tpl.html",
    "<div class=\"subcontainer\" >\n" +
    "    <img ng-src=\"{{previewSrc}}\" class=\"exercise-preview-image\" alt=\"\" />\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/studentListBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/studentListBubble.tpl.html",
    "<ul>\n" +
    "    <ng ng-repeat=\"student in members\">\n" +
    "        <li ng-if=\"fullStudentList.indexOf(student._id) > -1\" ng-init=\"studentId = student._id;\"\n" +
    "            ng-class=\"{'first-student': $first, 'last-student': $last, 'student-done': studentListDone.indexOf(studentId) !== -1, 'student-undone': studentListDone.indexOf(studentId) === -1}\">\n" +
    "            <span bm-feature=\"userNameIframe\" class=\"student-name\" ng-bind-html=\"::student.displayNameTrusted | trust\"></span>\n" +
    "            <span bm-feature=\"!userNameIframe\" class=\"student-name\" ng-bind=\"::student.displayName\"></span>\n" +
    "            <span ng-if=\"userResults[studentId]\" class=\"student-value\"\n" +
    "                ng-class=\"{'color-success': userResults[studentId].coins !== '0', 'color-error': userResults[studentId].coins === '0'}\">{{\n" +
    "                userResults[studentId].success_percentage | number:0 }}%<span class=\"delayed-sign\"\n" +
    "                    ng-if=\"userResults[studentId].handover_date > todoEnd\">*</span></span>\n" +
    "            <span ng-if=\"!userResults[studentId] && !studentStarted[studentId]\" class=\"student-value color-undone\"> -\n" +
    "            </span>\n" +
    "            <span ng-if=\"!userResults[studentId] && studentStarted[studentId]\" class=\"student-value color-undone\"\n" +
    "                translate=\"jsapp.teacher.studentStartedSeries\">\n" +
    "            </span>\n" +
    "            <ng ng-if=\"!showStar.value && userResults[studentId].handover_date > todoEnd\"\n" +
    "                ng-init=\"showStar.value=true;\"></ng>\n" +
    "        </li>\n" +
    "    </ng>\n" +
    "</ul>\n" +
    "<span ng-if=\"showStar.value\" class=\"delayed-hint\">*<span translate=\"jsapp.todo.delayedLong\"></span></span>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/todoParticipantBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/todoParticipantBubble.tpl.html",
    "<ul>\n" +
    "    <li ng-repeat=\"result in results track by $index\"\n" +
    "        ng-class=\"{'first-student': $first, 'last-student': $last, 'student-left': result.leftGroup}\">\n" +
    "        <span bm-feature=\"userNameIframe\" data-cy=\"participants-display-{{::result.username}}\" class=\"student-name\" ng-bind-html=\"::result.displayNameTrusted | trust\"></span>\n" +
    "        <span bm-feature=\"!userNameIframe\" data-cy=\"participants-display-{{::result.username}}\" class=\"student-name\" ng-bind=\"::result.displayName\"></span>\n" +
    "        <span ng-if=\"result.result\" class=\"student-value\"\n" +
    "            data-cy=\"participants-success-percentage-{{result.username}}\"\n" +
    "            ng-class=\"{'color-success': result.result.coins !== '0', 'color-error': result.result.coins === '0'}\">{{\n" +
    "            result.result.success_percentage | number:0 }}%<span class=\"delayed-sign\"\n" +
    "                ng-if=\"result.result.handover_date > todo.end\">*</span></span>\n" +
    "        <span ng-if=\"!result.result && !result.started && (todo.isExerciseSeries || todo.isWorksheet)\"\n" +
    "            class=\"student-value color-undone\"> - </span>\n" +
    "        <span ng-if=\"!result.result && result.started\" class=\"student-value color-undone\"\n" +
    "            translate=\"jsapp.teacher.studentStartedSeries\">\n" +
    "        </span>\n" +
    "        <ng ng-if=\"!showHint.value && result.result.handover_date > todo.end\" ng-init=\"showHint.value=true;\"></ng>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<div ng-controller=\"BMCollectUnfinishedTestsCtrl\">\n" +
    "    <div\n" +
    "        ng-if=\"show\"\n" +
    "        class=\"collect-unfinished-tests--container\"\n" +
    "    >\n" +
    "        <button\n" +
    "            ng-if=\"status !== 2\"\n" +
    "            ng-click=\"openConfirmModal()\"\n" +
    "            class=\"button bt-regular bt-action\"\n" +
    "        >\n" +
    "            {{ 'jsapp.collectUnfinishedTests.button.collect' | translate }}\n" +
    "        </button>\n" +
    "\n" +
    "        <span ng-if=\"status === 2\">\n" +
    "            {{ 'jsapp.collectUnfinishedTests.inProgress' | translate }}\n" +
    "            <i class=\"fa fa-circle-o-notch fa-spin aui-progress-spinner\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<span ng-if=\"showHint.value\" class=\"delayed-hint\" translate=\"\">*<span translate=\"jsapp.todo.delayedLong\"></span></span>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/view-kem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/view-kem.tpl.html",
    "<div class=\"subcontainer kem\" ng-repeat=\"kem in kemPaths\">\n" +
    "    <iframe src=\"{{ kem }}\"/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/worksheetFolderOptionsBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/worksheetFolderOptionsBubble.tpl.html",
    "<div id=\"speech-bubble-container\"\n" +
    "     class=\"bm-task-list list\"\n" +
    "     ng-if=\"showFolderOptionsBubble\"\n" +
    "     ng-style=\"exportStyle\"\n" +
    "     data-cy=\"worksheet-folder-option-bubble-container\"\n" +
    ">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <div class=\"worksheet-option-list-head\">\n" +
    "            <div class=\"worksheet-option-header-text\" translate>jsapp.folders.bubble.options.title</div>\n" +
    "            <div class=\"bt-close close-tooltip\">\n" +
    "                <a class=\"button bt-square bf bf-times-thin\" ng-click=\"closeFolderOptionsBubble()\" data-cy=\"worksheet-option-bubble-close-button\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"worksheet-option-list-content\">\n" +
    "            <ul>\n" +
    "                <a href=\"\" ng-click=\"renameEditPopup(clickedFolder.id, clickedFolder.name)\" data-cy=\"worksheet-option-bubble-edit-folder\">\n" +
    "                    <li class=\"worksheet-option-item\">\n" +
    "                        <span class=\"bm-list-icon fa fa-pencil\"\n" +
    "                              title=\"{{ 'folders.bubble.options.editFolder' | translate }}\"></span>\n" +
    "                        <span translate>jsapp.folders.bubble.options.editFolder</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" ng-click=\"deleteFolder(clickedFolder.id)\" data-cy=\"worksheet-option-bubble-delete-folder\">\n" +
    "                    <li class=\"worksheet-option-item option-delete\">\n" +
    "                        <span class=\"bm-list-icon fa fa-trash-o\"\n" +
    "                              title=\"{{ 'folders.bubble.options.deleteFolder' | translate }}\"></span>\n" +
    "                        <span translate>jsapp.folders.bubble.options.deleteFolder</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modalBubbleModule/partials/worksheetOptionsBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("modalBubbleModule/partials/worksheetOptionsBubble.tpl.html",
    "<div id=\"speech-bubble-container\"\n" +
    "     class=\"export-speech-bubble-container\"\n" +
    "     ng-show=\"worksheet.showOptionsBubble\"\n" +
    "     ng-style=\"exportStyle\"\n" +
    "     ng-if=\"showWorksheetOptionsBubble\"\n" +
    "     data-cy=\"worksheet-options-bubble-{{worksheet.id}}\"\n" +
    ">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <div class=\"worksheet-option-list-head\">\n" +
    "            <div class=\"worksheet-option-header-text\" translate>jsapp.worksheets.options.bubble.title</div>\n" +
    "            <div class=\"bt-close close-tooltip\">\n" +
    "                <a class=\"button bt-square bf bf-times-thin\" ng-click=\"worksheet.showOptionsBubble = false\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"worksheet-option-list-content\">\n" +
    "            <div\n" +
    "                class=\"worksheet-deprecated\"\n" +
    "                ng-if=\"worksheet.deprecatedExerciseCount > 0\"\n" +
    "                translate\n" +
    "            >\n" +
    "                jsapp.worksheets.options.removeOutdated\n" +
    "            </div>\n" +
    "            <ul>\n" +
    "                <a ng-href=\"{{::('#/worksheets/edit/' + worksheet.worksheetId)}}\"\n" +
    "                   ng-mousedown=\"lastWorksheet.id = false;clickedItem.id = worksheet.worksheetId;\">\n" +
    "                    <li class=\"worksheet-option-item\">\n" +
    "                        <span class=\"bm-list-icon fa fa-pencil\"\n" +
    "                        title=\"{{ 'jsapp.worksheets.options.edit' | translate }}\"></span>\n" +
    "                        <span>{{ 'jsapp.worksheets.options.edit' | translate }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" ng-click=\"moveWorksheet(worksheet)\"\n" +
    "                   ng-if=\"moreThanOneFolder()\"\n" +
    "                   data-cy=\"worksheet-option-move-{{worksheet.id}}\"\n" +
    "                   ng-mousedown=\"lastWorksheet.id = false;clickedItem.id = worksheet.worksheetId;\">\n" +
    "                    <li class=\"worksheet-option-item\">\n" +
    "                        <span class=\"bm-list-icon fa fa-arrow-circle-right\"\n" +
    "                              title=\"{{ 'jsapp.worksheets.options.move' | translate }}\"></span>\n" +
    "                        <span>{{ 'jsapp.worksheets.options.move' | translate }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" ng-click=\"copyWorksheet(worksheet, $event)\"\n" +
    "                   ng-if=\"!worksheet.deprecatedExerciseCount\">\n" +
    "                    <li class=\"worksheet-option-item\">\n" +
    "                        <span class=\"bm-list-icon fa fa-files-o\"\n" +
    "                              title=\"{{ 'jsapp.worksheets.options.copy' | translate }}\"\n" +
    "                        ></span>\n" +
    "                        <span>{{ 'jsapp.worksheets.options.copy' | translate }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" ng-click=\"exportWorksheetBubble(worksheet, $event);\"\n" +
    "                   ng-if=\"!worksheet.deprecatedExerciseCount\"\n" +
    "                   ng-class=\"{'active': worksheet.showCode }\"\n" +
    "                   data-cy=\"worksheet-option-export-{{worksheet.id}}\">\n" +
    "                   <li class=\"worksheet-option-item\">\n" +
    "                       <span class=\"bm-list-icon fa fa-sign-out\"\n" +
    "                             title=\"{{ 'jsapp.worksheets.options.export' | translate }}\"\n" +
    "                       ></span>\n" +
    "                       <span>{{ 'jsapp.worksheets.options.export' | translate }}</span>\n" +
    "                       <span export-worksheet-bubble></span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" open-worksheet worksheet-params=\"getExerciseListParams(worksheet)\"\n" +
    "                   ng-if=\"!worksheet.deprecatedExerciseCount\"\n" +
    "                   ng-mousedown=\"lastWorksheet.id=false;clickedItem.id=worksheet.worksheetId;\"\n" +
    "                >\n" +
    "                    <li class=\"worksheet-option-item option-play\">\n" +
    "                        <span class=\"bm-list-icon fa fa-play-circle-o\"\n" +
    "                              title=\"{{ 'jsapp.worksheets.options.preview' | translate }}\"\n" +
    "                        ></span>\n" +
    "                        <span>{{ 'jsapp.worksheets.options.preview' | translate }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "                <a href=\"\" ng-click=\"deleteWorksheet(worksheet, $event)\"\n" +
    "                data-cy=\"worksheet-option-delete-{{worksheet.id}}\">\n" +
    "                    <li class=\"worksheet-option-item option-delete\">\n" +
    "                        <span class=\"bm-list-icon fa fa-trash-o\"\n" +
    "                              title=\"{{ 'jsapp.worksheets.options.delete' | translate }}\"\n" +
    "                        ></span>\n" +
    "                        <span>{{ 'jsapp.worksheets.options.delete' | translate }}</span>\n" +
    "                    </li>\n" +
    "                </a>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("partials/oneCol.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("partials/oneCol.tpl.html",
    "<div id=\"content-wrap\" class=\"onecol-container\">\n" +
    "    <ng ui-view=\"col\"></ng>\n" +
    "</div>\n" +
    "");
}]);

angular.module("partials/twoCol.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("partials/twoCol.tpl.html",
    "<div id=\"sidebar-wrap\">\n" +
    "    <div id=\"sidebar\" ui-view=\"left\"></div>\n" +
    "</div>\n" +
    "<div id=\"content-wrap\">\n" +
    "    <div id=\"content\" ui-view=\"right\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pdfDownloadModule/partials/pdfItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("pdfDownloadModule/partials/pdfItem.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col col-name col-name-oneline\">\n" +
    "        <span>{{ pdf.name }}</span>\n" +
    "        <span class=\"book-name\">\n" +
    "            <span ng-click=\"pdfItem.goToBook({book_id: pdf.bookId, chapter_id: pdf.chapterId})\"\n" +
    "                class=\"button bt-text-link\">{{ pdf.bookName }} <i class=\"fa fa-external-link\"></i></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"col col-pdf-download\" ng-show=\"inAppMode ? isFlutterApp : true\">\n" +
    "        <a class=\"button bt-regular bt-action-light\"\n" +
    "         ng-href=\"{{ pdfDownload.baseUrl + pdf.path }}\"\n" +
    "         target=\"bm-pdf\"\n" +
    "         downloadable-via-app\n" +
    "         translate=\"jsapp.pdf.download\"></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pdfDownloadModule/partials/pdfList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("pdfDownloadModule/partials/pdfList.tpl.html",
    "<div class=\"control-panel-container\">\n" +
    "    <div class=\"content-padding list-search-showy\">\n" +
    "        <label for=\"searchForPdfs\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "        </label>\n" +
    "        <input id=\"searchForPdfs\"\n" +
    "               type=\"search\"\n" +
    "               size=\"40\"\n" +
    "               ng-model=\"pdfDownload.searchText\"\n" +
    "               placeholder=\"{{ 'jsapp.general.search' | translate }}\"\n" +
    "               ng-change=\"pdfDownload.refreshPdfList()\"\n" +
    "               ng-trim=\"false\"/>\n" +
    "    </div>\n" +
    "    <div class=\"filter-container\">\n" +
    "        <a class=\"button fa fa-times-circle\" ng-class=\"{false: 'reset-disabled', true: 'reset-enabled'}[pdfDownload.resetButtonActive()]\"\n" +
    "           ng-click=\"pdfDownload.resetFilter()\"></a>\n" +
    "        <div class=\"filter\">\n" +
    "            <select ng-model=\"pdfDownload.selectedFilterItem\"\n" +
    "                    ng-change=\"pdfDownload.refreshPdfList()\"\n" +
    "                    ng-options=\"f.label group by f.parent for f in pdfDownload.bookFilter.values | orderBy: ['parent', 'latinisedLabel']\">\n" +
    "                <option value=\"\" translate=\"jsapp.filter.{{ pdfDownload.bookFilter.identifier }}\" selected=\"selected\"></option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"scroll-container\">\n" +
    "    <div class=\"bm-task-list list content-padding\">\n" +
    "        <!-- no pdfs available -->\n" +
    "        <div ng-show=\"pdfDownload.showInfoText\"\n" +
    "             class=\"no-pdfs-hint\"\n" +
    "             translate=\"jsapp.pdf.infoText\">\n" +
    "        </div>\n" +
    "        <!-- / no pdfs available -->\n" +
    "        <div ng-show=\"!pdfDownload.showInfoText\" class=\"tasks\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    <div class=\"header-row\">\n" +
    "                        <div class=\"col col-name col-name-oneline\">\n" +
    "                            {{ pdfDownload.pdfList.length }}\n" +
    "                            <span translate=\"jsapp.pdf.results\"></span>:\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"pdf in pdfDownload.pdfList\">\n" +
    "                    <div pdf-item></div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("rankingModule/partials/rankingList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("rankingModule/partials/rankingList.tpl.html",
    "<div ng-if=\"navigationStates.rankingGroupId\">\n" +
    "    <div class=\"bm-task-list activity-list-group\">\n" +
    "        <div class=\"subFilter\">\n" +
    "\n" +
    "            <p>Rewards of activities the students took in their own library are <strong>not</strong> shown here.</p>\n" +
    "\n" +
    "            <div class=\"rankingHead\" ng-class=\"{'rankingFilterCoinsOnly': navigationStates.rankingFilter === 'coins' }\">\n" +
    "                <div class=\"rankingFilterStars\"\n" +
    "                     ng-if=\"navigationStates.rankingFilter === 'all' || navigationStates.rankingFilter === 'stars'\"\n" +
    "                     ng-click=\"navigationStates.rankingOrderBy = navigationStates.rankingOrderBy === '-stars' ? 'stars' : '-stars';\">\n" +
    "                    <span class=\"fa fa-caret-down\"></span></div>\n" +
    "                <div class=\"rankingFilterCoins\"\n" +
    "                     ng-if=\"navigationStates.rankingFilter === 'all' || navigationStates.rankingFilter === 'coins'\"\n" +
    "                     ng-click=\"navigationStates.rankingOrderBy = navigationStates.rankingOrderBy === '-coins' ? 'coins' : '-coins';\">\n" +
    "                    <span class=\"fa fa-sort\"></span></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"tasks\" ng-if=\"rankingData.length\">\n" +
    "            <ul>\n" +
    "                <li ng-repeat=\"ranking in rankingData | orderBy:navigationStates.rankingOrderBy\" class=\"task\">\n" +
    "                    <div class=\"task-name\">\n" +
    "                        <span>{{ ranking.firstname }} {{ ranking.lastname }}</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-ranking\">\n" +
    "                        <span ng-bind=\"::ranking.stars\"\n" +
    "                              ng-if=\"navigationStates.rankingFilter === 'all' || navigationStates.rankingFilter === 'stars'\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-ranking\">\n" +
    "                        <span ng-bind=\"::ranking.coins\"\n" +
    "                              ng-if=\"navigationStates.rankingFilter === 'all' || navigationStates.rankingFilter === 'coins'\"></span>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !rankingData.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{noActivitiesHint}}\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("teacherSettingsModule/partials/main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("teacherSettingsModule/partials/main.tpl.html",
    "<div\n" +
    "    inject-react\n" +
    "    id=\"react-tab-teacher-settings\"\n" +
    "    style=\"height: 100%;\"\n" +
    ">\n" +
    "</div>\n" +
    "");
}]);

angular.module("todosModule/partials/groupTodo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("todosModule/partials/groupTodo.tpl.html",
    "<ul class=\"todo-list-{{ todoConfig.state }}\">\n" +
    "    <li ng-if=\"todos.length\">\n" +
    "        <div class=\"header-row\">\n" +
    "            <div ng-if=\"todoConfig.state === 'scheduled'\"\n" +
    "                 class=\"col col-datetime col-light\"\n" +
    "                 translate=\"jsapp.todo.period\"></div>\n" +
    "             <div ng-if=\"todoConfig.state !== 'scheduled'\"\n" +
    "                  class=\"col col-datetime col-light\"\n" +
    "                  translate=\"jsapp.todo.dueDate\"></div>\n" +
    "\n" +
    "            <div class=\"col col-name col-light\"\n" +
    "                 translate=\"jsapp.todo.title\"></div>\n" +
    "            <div class=\"col col-students\"></div>\n" +
    "            <div class=\"col col-action-delete\"></div>\n" +
    "            <div class=\"col col-action-details\"></div>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <li bm-assignment-group-list-item\n" +
    "        assignment-config=\"todoConfig\"\n" +
    "        assignment=\"todo\"\n" +
    "        on-delete=\"deleteTodo($assignment)\"\n" +
    "        on-release-results=\"releaseResults($assignment)\"\n" +
    "        on-deactivate-results=\"deactivateResults($assignment)\"\n" +
    "        last-todo=\"lastTodo\"\n" +
    "        clicked-item=\"clickedItem\"\n" +
    "        can-delete=\"toggles.deleteTodos\"\n" +
    "        current-group-id=\"navigationStates.currentGroupId\"\n" +
    "        ng-repeat=\"todo in todosSlice.items\"\n" +
    "        ></li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("todosModule/partials/studentTodo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("todosModule/partials/studentTodo.tpl.html",
    "<ul>\n" +
    "    <li ng-if=\"todos.length\">\n" +
    "        <div class=\"header-row\">\n" +
    "            <div ng-if=\"todoConfig.state === 'scheduled'\"\n" +
    "                 class=\"col col-datetime col-light\"\n" +
    "                 translate=\"jsapp.todo.period\"></div>\n" +
    "             <div ng-if=\"todoConfig.state !== 'scheduled'\"\n" +
    "                  class=\"col col-datetime col-light\"\n" +
    "                  translate=\"jsapp.todo.dueDate\"></div>\n" +
    "\n" +
    "            <div class=\"col col-name col-light\" translate=\"jsapp.todo.title\"></div>\n" +
    "            <div class=\"col col-activity-result-teacher\" ng-if=\"isTeacher\"\n" +
    "                 translate=\"jsapp.todo.bestResult\"></div>\n" +
    "            <div class=\"col col-activity-result-student\" ng-if=\"isStudent\"></div>\n" +
    "            <div ng-if=\"isStudent\" class=\"col col-coins\"></div>\n" +
    "            <div ng-if=\"showTaskButton\" class=\"col col-buttons\"></div>\n" +
    "            <div class=\"col col-actions-small\" ng-if=\"isTeacher\"></div>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <li ng-repeat=\"todo in todosSlice.items\"\n" +
    "        bm-assignment-member-list-item></li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("todosModule/partials/todoDetails.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("todosModule/partials/todoDetails.tpl.html",
    "<!-- groupTodoDetails -->\n" +
    "<div ng-if=\"groupTodoDetails && navigationStates.todoDetails === 'group'\">\n" +
    "    <h2 class=\"headline small\"><span class=\"space-after\" ng-if=\"groupTodoDetails.full_caption\"\n" +
    "                                     ng-bind=\"::groupTodoDetails.full_caption\"></span><span\n" +
    "            ng-bind=\"::groupTodoDetails.name\"></span></h2>\n" +
    "\n" +
    "    <div bm-assignment-details-option-box\n" +
    "         assignment-id=\"assignmentId\"></div>\n" +
    "\n" +
    "    <div class=\"content-padding todo-reporting-header\" ng-if=\"groupTodoDetails.parsedResults.length\">\n" +
    "        <span class=\"todo-reporting-head\" translate>jsapp.teacher.avrgResults</span>:\n" +
    "        <span class=\"todo-reporting-participants\"><i class=\"fa fa-user\"></i> {{ groupTodoDetails.users_with_results.length }}/{{ groupTodoDetails.assignee_ids.length }}</span>\n" +
    "    </div>\n" +
    "    {{groupId}}\n" +
    "    <div class=\"bm-task-list todos-list-group todo-detail-reporting\">\n" +
    "        <div ng-if=\"groupTodoDetails.parsedResults.length\" class=\"tasks\">\n" +
    "            <ul>\n" +
    "                <li class=\"task\" ng-repeat=\"exercise in groupTodoDetails.parsedResults\">\n" +
    "                    <div class=\"task-number task-exercise\" translate translate-values=\"{'nbr': $index + 1}\">\n" +
    "                        jsapp.teacher.exerciseNbr\n" +
    "                    </div>\n" +
    "                    <div class=\"task-name todo-result\">\n" +
    "                        <div class=\"todo-bar-container\">\n" +
    "                            <div class=\"todo-bar\" ng-style=\"exercise.style\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-number task-cell task-exercise\" ng-bind=\"::(exercise.result | number:0)+ '%'\"></div>\n" +
    "                    <div class=\"task-todos\" ng-if=\"exercise_preview.length && exercise_preview[$index]\">\n" +
    "                        <div class=\"exercise-buttons\">\n" +
    "                            <a class=\"task-todo task-todo-details bm-list-icon fa fa-search\"\n" +
    "                               ng-class=\"{'active': opener.active === ('preview-' + $index)}\"\n" +
    "                               ng-click=\"toggleModal($event);\"\n" +
    "                               id=\"preview-{{ $index }}\"></a>\n" +
    "\n" +
    "                            <div modal-bubble box-type=\"small\" dynamic-height=\"true\"\n" +
    "                                 title=\"{{ 'jsapp.teacher.exerciseNbr' | translate:{nbr: $index + 1} }}\"\n" +
    "                                 css-class=\"exercise-preview\">\n" +
    "                                <div class=\"subcontainer\" ng-if=\"modal.open\">\n" +
    "                                    <img ng-src=\"{{ exercise_preview[$index] }}\" alt=\"\" resize-preview/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !groupTodoDetails.parsedResults.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noTodoDetails\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- studentTodoDetails -->\n" +
    "<div ng-if=\"studentTodoDetails && navigationStates.todoDetails === 'student'\">\n" +
    "    <div class=\"student-todo-detail-head\">\n" +
    "        <div class=\"student-todo-detail-star\" success-star success-type=\"star\"\n" +
    "             success-context=\"studentTodoDetailResult\"></div>\n" +
    "        <div class=\"student-todo-detail-head-text\">\n" +
    "            <h2 class=\"headline small\"><span class=\"space-after\" ng-if=\"studentTodoDetails.caption\"\n" +
    "                                             ng-bind=\"studentTodoDetails.caption\"></span><span\n" +
    "                    ng-bind=\"studentTodoDetails.name\"></span></h2>\n" +
    "            {{groupId}}\n" +
    "            <!--Please note this is the info from the group details-->\n" +
    "            <div bm-assignment-details-option-box\n" +
    "                 assignment-id=\"assignmentId\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content-padding todo-reporting-header\" ng-if=\"!pendingRequests && studentTodoDetails.tries.length\">\n" +
    "        <span class=\"todo-reporting-head\" translate=\"jsapp.teacher.studentResults\"></span>\n" +
    "        <span class=\"todo-reporting-head\"\n" +
    "              ng-bind=\"(student.firstname ? student.firstname + ' ' : '') + (student.lastname  ? student.lastname : '') + (!student.firstname && !student.lastname ? student.username : '')\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bm-task-list todos-list-student todo-student-detail-reporting\">\n" +
    "        <div class=\"tasks\" ng-if=\"studentTodoDetails.tries.length\">\n" +
    "            <ul>\n" +
    "                <li class=\"task\" ng-repeat=\"todo in studentTodoDetails.tries\">\n" +
    "                    <div class=\"task-number task-cell task-date\">{{ todo.date | date:'dd.MM.yyyy'}}</div>\n" +
    "                    <div class=\"todoDetails-result task-cell\">\n" +
    "                        <div class=\"exercise-percentage\" ng-if=\"todo.success_percentage !== false\"\n" +
    "                             ng-class=\"{'color-success': todo.coins || todo.stars, 'color-error': !todo.coins && !todo.stars}\">\n" +
    "                            {{ todo.success_percentage | number:0 }}%<span class=\"delayed-sign\" ng-if=\"todo.date > studentTodoDetails.end\">*</span>\n" +
    "                        </div>\n" +
    "                        <div bm-exercise-points points=\"todo.points\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"task-star task-cell\" success-coins-or-star success-type=\"coins-or-star\"\n" +
    "                         success-context=\"studentTodoDetail\"></div>\n" +
    "                    <div class=\"task-space\"><span class=\"flag-double-tipped flag-double-tipped-yellow\"\n" +
    "                                                  ng-if=\"bestTry.series_id === todo.series_id\"><span\n" +
    "                            translate=\"jsapp.todo.bestResult\"></span> <span class=\"flag-tip\"></span></span>\n" +
    "                         <span class=\"delayed-sign\" ng-if=\"todo.date > studentTodoDetails.end\">*<span translate=\"jsapp.todo.delayed\"</span></div>\n" +
    "                    <div class=\"task-todos\">\n" +
    "                        <a ng-if=\"todo.showResult\" href=\"\"\n" +
    "                           data-cy=\"show-todo-result{{bestTry.series_id === todo.series_id ? '-best-try' : ''}}-{{studentTodoDetails.name}}\"\n" +
    "                           class=\"task-todo bm-list-icon\"\n" +
    "                           open-worksheet\n" +
    "                           worksheet-params=\"{series_id: todo.series_id, exerciseStartMode: 'review', studentId: navigationStates.currentStudentId, flashFree: todo.flash_free}\">\n" +
    "                            <i class=\"bf bf-detail-input\"></i>\n" +
    "                        </a>\n" +
    "                        <a ng-if=\"!todo.showResult\"\n" +
    "                           class=\"task-todo bm-list-icon no-result\"><i class=\"bf bf-detail-input\"></i></a>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div ng-if=\"hasTriesOlderThan90\" class=\"no-results-hint\" translate=\"jsapp.todo.noResult\"></div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !studentTodoDetails.tries.length && !studentStartedTodo\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"jsapp.teacher.noTodoDetails\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"studentStartedTodo\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"jsapp.teacher.todoStartedHint\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("todosModule/partials/todosList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("todosModule/partials/todosList.tpl.html",
    "<div class=\"infinite-scroll-wrap\" lr-infinite-scroll=\"loadMoreTodos\" time-threshold=\"10\" scroll-threshold=\"250\">\n" +
    "    <div class=\"filter-links content-padding\">\n" +
    "        <a class=\"link-round-corners lrc-view\"\n" +
    "           ng-click=\"todoConfig.state = 'open'\"\n" +
    "           ng-class=\"{'link-round-corners-active': todoConfig.state === 'open'}\" translate=\"jsapp.student.currentTodos\"\n" +
    "           data-cy=\"open-todos\"></a>\n" +
    "\n" +
    "        <a class=\"link-round-corners lrc-view\"\n" +
    "           ng-click=\"todoConfig.state = 'expired'\"\n" +
    "           ng-class=\"{'link-round-corners-active': todoConfig.state === 'expired'}\"\n" +
    "           translate=\"jsapp.student.expiredTodos\"\n" +
    "           data-cy=\"expired-todos\"></a>\n" +
    "\n" +
    "        <a class=\"link-round-corners lrc-view\"\n" +
    "           ng-click=\"todoConfig.state = 'scheduled'\"\n" +
    "           ng-class=\"{'link-round-corners-active': todoConfig.state === 'scheduled'}\"\n" +
    "           translate=\"jsapp.student.scheduledTodos\"\n" +
    "           data-cy=\"scheduled-todos\"></a>\n" +
    "    </div>\n" +
    "    <div class=\"bm-task-list list\" data-cy=\"todo-list\">\n" +
    "        <div class=\"tasks\" ng-if=\"todos.length\" ng-switch=\"todoConfig.type\">\n" +
    "            <ul ng-switch-when=\"group\" group-todo></ul>\n" +
    "            <ul ng-switch-when=\"student\" student-todo></ul>\n" +
    "        </div>\n" +
    "        <div class=\"missing-data-container\" ng-if=\"!pendingRequests && !todos.length\">\n" +
    "            <div class=\"missing-data-hint\" translate=\"{{ noToDosHint }}\"></div>\n" +
    "            <div class=\"missing-data-hint-subinfo\" translate=\"{{ noToDosHintSubInfo }}\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a ng-click=\"loadMoreTodos()\"\n" +
    "       ng-show=\"todosSlice.items.length < todos.length\"\n" +
    "       class=\"button load-more-button bt-view\"\n" +
    "       translate=\"jsapp.general.more\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("todosModule/partials/todoTask.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("todosModule/partials/todoTask.tpl.html",
    "<div class=\"exercise-buttons\">\n" +
    "\n" +
    "    <bm-download-button ng-if=\"taskButtons.File\"\n" +
    "                      file=\"taskButtons.File.path\"\n" +
    "                      content-locale=\"taskButtons.File.contentLocale\"\n" +
    "                      single-mode=\"true\">\n" +
    "    </bm-download-button>\n" +
    "\n" +
    "    <bm-fem-button ng-if=\"taskButtons.FemList\"\n" +
    "                         content-locale=\"taskButtons.FemList.contentLocale\"\n" +
    "                         fems=\"taskButtons.FemList.fems\"\n" +
    "                         title=\"taskButtons.FemList.chapterName\"\n" +
    "                         single-mode=\"true\">\n" +
    "    </bm-fem-button>\n" +
    "\n" +
    "    <bm-view-text-button ng-if=\"taskButtons.TextList\"\n" +
    "                         content-locale=\"taskButtons.TextList.contentLocale\"\n" +
    "                         text=\"taskButtons.TextList.texts[0]\"\n" +
    "                         title=\"taskButtons.TextList.chapterName\"\n" +
    "                         single-mode=\"true\">\n" +
    "    </bm-view-text-button>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.KemList\">\n" +
    "        <a\n" +
    "                id=\"kem-{{taskButtons.KemList.params.chapterId}}\"\n" +
    "                title=\"{{ taskButtons.KemList.params.chapterName }}\"\n" +
    "                class=\"task-todo bm-list-icon button-single-task bf-hover\"\n" +
    "                ng-click=\"toggleModal($event);\">\n" +
    "            <span class=\"bf bf-play-circle-o\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div modal-bubble title=\"{{ taskButtons.KemList.params.chapterName }}\" css-class=\"exercise-preview kem-container\" box-width=\"650\">\n" +
    "            <view-kem ng-if=\"modal.open\" content-locale=\"taskButtons.KemList.params.contentLocale\"\n" +
    "                      content-list-ref=\"taskButtons.KemList.params.contentListRef\"></view-kem>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseList\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-single-task bf-hover\"\n" +
    "           data-cy='open-todo-{{ todo.name }}'\n" +
    "           ng-mousedown=\"clickedItem.id=todo.assignment_id;lastTodo.id=false;lastTodo.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseListDeprecated\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-single-task-disabled bf-hover\"\n" +
    "           id=\"todo-outdated-{{todo.assignment_id}}\"\n" +
    "           ng-click=\"showBubble()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseListDeprecated.icon\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div bm-balloon\n" +
    "             orientation=\"left\"\n" +
    "             show=\"taskButtons.showBubble\"\n" +
    "             title-key=\"jsapp.todo.outdatedExercises.title\"\n" +
    "             link-element=\"todo-outdated-{{todo.assignment_id}}\"\n" +
    "             selection-style=\"bt-selected\"\n" +
    "             class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.todo.outdatedExercises.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"taskButtons.ExerciseList && taskButtons.Redo\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-single-task bf-hover\"\n" +
    "           data-cy='continue-todo-{{ todo.name }}'\n" +
    "           ng-mousedown=\"clickedItem.id=todo.assignment_id;lastTodo.id=false;lastTodo.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.ExerciseList.params()\">\n" +
    "            <span ng-class=\"taskButtons.ExerciseList.icon\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Expired\" >\n" +
    "        <a href id=\"todo-expired-{{todo.assignment_id}}\" class=\"task-todo bm-list-icon button-single-task-disabled bf-hover\"\n" +
    "           ng-click=\"showBubble()\">\n" +
    "            <span ng-class=\"taskButtons.Expired.icon\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div bm-balloon\n" +
    "                 orientation=\"left\"\n" +
    "                 show=\"taskButtons.showBubble\"\n" +
    "                 title-key=\"jsapp.student.assignment.expired.title\"\n" +
    "                 link-element=\"todo-expired-{{todo.assignment_id}}\"\n" +
    "                 selection-style=\"bt-selected\"\n" +
    "                 class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.student.assignment.expired.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Done\">\n" +
    "        <a href class=\"task-todo bm-list-icon button-single-task-disabled bf-hover\" id=\"todo-done-{{todo.assignment_id}}\"\n" +
    "           ng-click=\"showBubble()\">\n" +
    "            <span ng-class=\"taskButtons.Done.icon\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div bm-balloon\n" +
    "                 orientation=\"left\"\n" +
    "                 show=\"taskButtons.showBubble\"\n" +
    "                 title-key=\"jsapp.student.assignment.onlyOneAttempt.title\"\n" +
    "                 link-element=\"todo-done-{{todo.assignment_id}}\"\n" +
    "                 selection-style=\"bt-selected\"\n" +
    "                 class=\"balloon-325\">\n" +
    "            <div class=\"options-container\" translate=\"jsapp.student.assignment.onlyOneAttempt.description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Redo\">\n" +
    "        <a href=\"\"\n" +
    "           class=\"task-todo bm-list-icon button-single-task bf-hover\"\n" +
    "           data-cy='redo-todo-{{ todo.name }}'\n" +
    "           ng-mousedown=\"clickedItem.id=todo.assignment_id;lastTodo.id=false;lastTodo.continueId=false;\"\n" +
    "           open-worksheet worksheet-params=\"taskButtons.Redo.params()\">\n" +
    "            <span ng-class=\"taskButtons.Redo.icon\"></span>\n" +
    "           </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"taskButtons.Pay && toggles.paymentLink\">\n" +
    "        <a href=\"\" class=\"task-todo bm-list-icon button-single-task bf-hover bt-play-pay\"\n" +
    "           open-popup=\"payment\"\n" +
    "           payment-action=\"true\"\n" +
    "           ng-mousedown=\"clickedItem.id=todo.assignment_id;lastTodo.id=false;lastTodo.continueId=false;\">\n" +
    "            <span class=\"fa fa-lock\"></span>\n" +
    "           </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("userClassManagementModule/partials/teacherVerification.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("userClassManagementModule/partials/teacherVerification.tpl.html",
    "<div\n" +
    "    inject-react\n" +
    "    id=\"react-tab-teacher-verification\"\n" +
    "    style=\"height: 100%;\"\n" +
    ">\n" +
    "</div>\n" +
    "");
}]);

angular.module("userClassManagementModule/partials/ucmMain.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("userClassManagementModule/partials/ucmMain.tpl.html",
    "<div\n" +
    "    inject-react\n" +
    "    id=\"react-tab-user-class-management\"\n" +
    "    style=\"height: 100%;\"\n" +
    ">\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/assignItemDate.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/assignItemDate.tpl.html",
    "<div class=\"datepicker-wrap assign-daterange\" bm-datepicker-range\n" +
    "     start-date=\"assignData.dateRange.startDate\" end-date=\"assignData.dateRange.endDate\"\n" +
    "     show-datepicker=\"assignData.showDatepicker\"></div>");
}]);

angular.module("worksheetModule/partials/assignItemGroup.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/assignItemGroup.tpl.html",
    "<div class=\"assign-group\"\n" +
    "     ng-click=\"assignData.showGroupsBubble = true\">\n" +
    "                    <span ng-if=\"!assignData.group.value\"\n" +
    "                          class=\"students-number-text\" translate=\"jsapp.teacher.pleaseChooseGroup\"></span>\n" +
    "                    <span ng-if=\"assignData.group.value\"\n" +
    "                          class=\"students-number-text\" ng-bind=\"assignData.group.label\"></span>\n" +
    "    <i class=\"fa fa-group\"></i>\n" +
    "                    <span ng-if=\"assignData.showGroupsBubble\" >\n" +
    "                        <span radio-bubble\n" +
    "                              items=\"groups.list\"\n" +
    "                              selecteditem=\"assignData.group\"\n" +
    "                              box-title=\"'jsapp.teacher.selectClass'\"\n" +
    "                              visible=\"assignData.showGroupsBubble\"></span>\n" +
    "                    </span>\n" +
    "</div>");
}]);

angular.module("worksheetModule/partials/assignItemOptions.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/assignItemOptions.tpl.html",
    "<div class=\"assign-options\"\n" +
    "     ng-if=\"assignData.availableOptions.length\"\n" +
    "     ng-click=\"assignData.showOptionsBubble = true\">\n" +
    "    <span class=\"students-number-text\" translate=\"jsapp.worksheets.options.title\"></span>\n" +
    "    <i class=\"fa fa-cog\"></i>\n" +
    "                    <span options-bubble class=\"options-bubble\"\n" +
    "                          visible=\"assignData.showOptionsBubble\"\n" +
    "                          available-options=\"assignData.availableOptions\"\n" +
    "                          options-to-assign=\"assignData.optionsToAssign\"\n" +
    "                            ></span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/assignItemStudents.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/assignItemStudents.tpl.html",
    "<div class=\"assign-students students-number\"\n" +
    "     ng-disabled=\"!assignData.studentsInGroup.length\"\n" +
    "     ng-click=\"assignData.showStudentsBubble = assignData.studentsInGroup.length > 0\">\n" +
    "                    <span ng-if=\"!assignData.studentsToAssign || !assignData.studentsToAssign.length\"\n" +
    "                          class=\"students-number-text\" translate=\"jsapp.teacher.chooseStudents\"></span>\n" +
    "                    <span ng-if=\"assignData.studentsToAssign && assignData.studentsToAssign.length\"\n" +
    "                          class=\"students-number-text\"><span translate>jsapp.teacher.students</span>: <span\n" +
    "                            ng-bind=\"assignData.studentsToAssign.length\"></span></span>\n" +
    "    <i class=\"fa fa-user\"></i>\n" +
    "                    <span ng-if=\"assignData.showStudentsBubble && assignData.studentsInGroup.length\">\n" +
    "                    <span speech-bubble\n" +
    "                          items=\"assignData.studentsInGroup\"\n" +
    "                          selecteditems=\"assignData.studentsToAssign\"\n" +
    "                          visible=\"assignData.showStudentsBubble\"></span>\n" +
    "                    </span>\n" +
    "</div>");
}]);

angular.module("worksheetModule/partials/assignWorksheet.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/assignWorksheet.tpl.html",
    "<div bm-assign-toolbar\n" +
    "     data-cy=\"assign-toolbar\"\n" +
    "     ng-if=\"worksheets.list.length\"\n" +
    "     assign-data=\"assignData\"\n" +
    "     assign-items=\"worksheets.list\"\n" +
    "     no-selection-text=\"jsapp.worksheets.pleaseChooseWStoAssign\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/folderWorksheetList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/folderWorksheetList.tpl.html",
    "<div ng-if=\"selectedWorksheetFolderId && !fromDefaultWorksheetFolder\"\n" +
    "     ng-include=\"'worksheetModule/partials/worksheetList.tpl.html'\"></div>\n" +
    "<div ng-if=\"fromDefaultWorksheetFolder\"\n" +
    "     ng-include=\"'worksheetModule/partials/worksheetListDefault.tpl.html'\"></div>");
}]);

angular.module("worksheetModule/partials/learningTargetFilter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/learningTargetFilter.tpl.html",
    "<select class=\"learning-target-filter-box\"\n" +
    "        ng-repeat=\"filter in learningTargetFilter\"\n" +
    "        ng-model=\"filterModels[$index]\"\n" +
    "        name=\"selection{{$index}}\" size=\"1\"\n" +
    "        ng-options=\"item.name group by item.supertopic for item in filter | orderBy: ['supertopic', 'index']\"\n" +
    "        ng-change=\"updateFilters($index)\"\n" +
    "        data-cy=\"worksheet-library-filter-selection-{{$index}}\">\n" +
    "    <option selected=\"selected\" value=\"\" translate=\"jsapp.worksheets.selectBoxChoose\"></option>\n" +
    "</select>\n" +
    "");
}]);

angular.module("worksheetModule/partials/manageWorksheets.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/manageWorksheets.tpl.html",
    "<!-- manageWorksheets -->\n" +
    "<div class=\"worksheets-sidebar\">\n" +
    "  <div id=\"worksheets\" class=\"folders folder-list folders-v2\">\n" +
    "    <div\n" +
    "      id=\"resizeable-top\"\n" +
    "      class=\"resizable subscroll\"\n" +
    "      ng-style=\"resizerTopStyle\"\n" +
    "      scroll-to=\".list-item-active\"\n" +
    "    >\n" +
    "      <div\n" +
    "        class=\"folder-list-all-items folder-list-subscroll\"\n" +
    "        data-cy=\"scrollable-default-worksheet-folders\"\n" +
    "      >\n" +
    "        <div class=\"folder-list-title\" translate>jsapp.folders.customWorksheetsTitle</div>\n" +
    "        <div class=\"folder-list-wrapper\" data-cy=\"worksheet-folder-list-wrapper\">\n" +
    "        <div\n" +
    "          class=\"list-item folder-list-item list-item-with-info\"\n" +
    "          ng-repeat=\"folder in worksheetFolders\"\n" +
    "          ng-class=\"{'list-item-active': folder.id === selectedWorksheetFolderId}\"\n" +
    "        >\n" +
    "          <a\n" +
    "            class=\"folder-list-item-name\"\n" +
    "            href=\"#/worksheet-folders/{{folder.id}}\"\n" +
    "            data-cy=\"worksheets-folder-{{folder.id}}\"\n" +
    "          >{{folder.name}}</a>\n" +
    "          <a\n" +
    "            class=\"folder-list-item-action bt-link fa fa-ellipsis-h\"\n" +
    "            ng-class=\"{'active': folder.id === clickedFolder.id }\"\n" +
    "            ng-click=\"folderOptionsBubble(folder.id, folder.name, $event)\"\n" +
    "            data-cy=\"worksheets-folder-options-{{folder.id}}\"\n" +
    "          >\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "        <span folder-options-bubble></span>\n" +
    "        <div\n" +
    "          class=\"folder-create-button\"\n" +
    "          ng-click=\"createNewFolder()\"\n" +
    "          data-cy=\"create-worksheet-folder-btn\"\n" +
    "        >\n" +
    "          <div class=\"menu-separator\"></div>\n" +
    "          <div\n" +
    "            class=\"list-item\"\n" +
    "            ng-class=\"{disabled: worksheetFolders.length === 0}\"\n" +
    "          >\n" +
    "            <a class=\"bt-link\" data-cy=\"worksheet-add-worksheet-folder\">\n" +
    "              <i class=\"fa fa-plus\"></i>\n" +
    "              <span translate>jsapp.folders.createNew</span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div\n" +
    "      id=\"resizeable-bottom\"\n" +
    "      class=\"resizable subscroll\"\n" +
    "      ng-style=\"resizerBottomStyle\"\n" +
    "      scroll-to=\".list-item-active\"\n" +
    "    >\n" +
    "      <div id=\"default-worksheet-folders\" class=\"folder-list-subscroll\" data-cy=\"default-worksheet-folders\">\n" +
    "        <div class=\"folder-list-title\" translate>jsapp.worksheets.default</div>\n" +
    "        <div class=\"folder-list-wrapper\">\n" +
    "        <div class=\"folder-list-all-items\" data-cy=\"default-worksheet-folders-items\">\n" +
    "          <div\n" +
    "            class=\"list-item folder-list-item list-item-with-info\"\n" +
    "            ng-repeat=\"folder in defaultWorksheetFolders\"\n" +
    "            ng-class=\"{'list-item-active': folder.id === selectedWorksheetFolderId}\"\n" +
    "          >\n" +
    "            <a\n" +
    "              class=\"folder-list-item-name\"\n" +
    "              data-cy=\"default-worksheet-folder-{{folder.name}}\"\n" +
    "              href=\"#/worksheet-folders/{{folder.id}}\"\n" +
    "            >\n" +
    "              {{folder.name}}\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div id=\"resizer\" class=\"resizable\" ng-style=\"resizerStyle\">\n" +
    "      <span></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/optionsBubble.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/optionsBubble.tpl.html",
    "<div id=\"speech-bubble-container\" ng-show=\"isVisible\">\n" +
    "    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "        <img src=\"./assets/speech-bubble-tip-top.svg\" class=\"speech-bubble-tip speech-bubble-tip-top\"/>\n" +
    "\n" +
    "        <div class=\"speech-bubble-head\">\n" +
    "            <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"hide($event)\"></i>\n" +
    "            <span class=\"speech-bubble-content-first-element\">\n" +
    "                <label translate=\"jsapp.worksheets.options.title\"></label>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"worksheet-options\">\n" +
    "            <div ng-repeat=\"option in availableOptions\">\n" +
    "                <span class=\"list-item\" ng-class=\"{'info-open': optionsHints[$index], 'last-item': $last}\">\n" +
    "                    <input type=\"checkbox\"\n" +
    "                           name=\"option-{{ option.key }}\"\n" +
    "                           value=\"{{ option.key }}\"\n" +
    "                           id=\"{{ option.key }}\"\n" +
    "                           ng-model=\"option.selected\"/>\n" +
    "                    <label for=\"{{ option.key }}\">{{ option.title }}\n" +
    "                        <a class=\"fa info-toggle fa-info-circle\" ng-click=\"toggleHint($index)\"></a>\n" +
    "                    </label>\n" +
    "                </span>\n" +
    "\n" +
    "                <div class=\"options-info\" ng-show=\"optionsHints[$index]\" ng-class=\"{'last-item': $last}\">\n" +
    "                    {{ option.description }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/worksheetExercisePreview.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/worksheetExercisePreview.tpl.html",
    "<div ng-repeat=\"chapter in filteredChapters\" class=\"exercise-preview-lob\">\n" +
    "<div class=\"lob-title\" ng-if=\"filteredChapters.length > 1\">{{chapter.name}}</div>\n" +
    "<div ng-repeat=\"previewData in exercisePreviewData[chapter.content_list_ref]\" class=\"exercise-preview\"\n" +
    "     ng-class=\"{'exercise-preview-last': $last}\">\n" +
    "    <div class=\"exercise-preview-header\">\n" +
    "        <span class=\"exercise-type\"><span translate=\"jsapp.worksheets.exerciseType\"></span> {{ $index + 1 }}</span>\n" +
    "        <span class=\"exercise-duration\">\n" +
    "            <i class=\"fa fa-clock-o exercise-duration-icon\"></i>{{ previewData.duration }} sec\n" +
    "        </span>\n" +
    "        <span class=\"exercise-toggle\">\n" +
    "            <i ng-show=\"previewData.previews.length > 1\"\n" +
    "               class=\"fa exercise-preview-left fa-chevron-circle-left\"\n" +
    "               ng-click=\"navigateExercisePreviewList($event, 'prev', previewData)\"></i>\n" +
    "            <span translate=\"jsapp.worksheets.exerciseNumber\"\n" +
    "                  translate-values=\"{ n: (previewData.previewPosition + 1), m: previewData.previews.length }\"></span>\n" +
    "            <i ng-show=\"previewData.previews.length > 1\"\n" +
    "               class=\"fa exercise-preview-right fa-chevron-circle-right\"\n" +
    "               ng-click=\"navigateExercisePreviewList($event, 'next', previewData)\"></i>\n" +
    "        </span>\n" +
    "        <span ng-class=\"{'exercise-add-action': !previewData.previews[previewData.previewPosition].selected,\n" +
    "                         'exercise-add-disabled': previewData.previews[previewData.previewPosition].selected}\"\n" +
    "              ng-click=\"addExercise(previewData)\"\n" +
    "              data-cy=\"worksheet-exercise-add-action\">\n" +
    "\n" +
    "            <i class=\"fa fa-plus-circle\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"exercise-preview-content\">\n" +
    "        <img ng-if=\"previewData.previewPosition > 1 && previewData.previews[previewData.previewPosition - 1].url\"\n" +
    "             ng-show=\"false\"\n" +
    "             ng-src=\"{{ previewData.previews[previewData.previewPosition - 1].url }}\"\n" +
    "             alt=\"\"/>\n" +
    "        <img ng-if=\"previewData.previews[previewData.previewPosition].url\"\n" +
    "             ng-src=\"{{ previewData.previews[previewData.previewPosition].url }}\"\n" +
    "             alt=\"\"/>\n" +
    "        <img ng-if=\"previewData.previewPosition < previewData.previews.length + 1 && previewData.previews[previewData.previewPosition + 1].url\"\n" +
    "             ng-show=\"false\"\n" +
    "             ng-src=\"{{ previewData.previews[previewData.previewPosition + 1].url }}\"\n" +
    "             alt=\"\"/>\n" +
    "\n" +
    "        <div class=\"exercise-disabled-overlay\"\n" +
    "             ng-show=\"previewData.previews[previewData.previewPosition].selected\"></div>\n" +
    "        <div class=\"exercise-disabled-message-wrap\"\n" +
    "             ng-show=\"previewData.previews[previewData.previewPosition].selected\">\n" +
    "            <div class=\"exercise-disabled-message\">\n" +
    "                <span class=\"exericse-disabled-message-icon\">\n" +
    "                    <i class=\"fa fa-check-circle-o\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"exercise-disabled-message-text\"\n" +
    "                      translate=\"jsapp.worksheets.exerciseAlreadySelected\"\n" +
    "                      translate-values=\"{left: '<i class=\\'fa fa-chevron-circle-left\\'></i>',\n" +
    "                                         right: '<i class=\\'fa fa-chevron-circle-right\\'></i>'}\">\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/worksheetGenerator.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/worksheetGenerator.tpl.html",
    "<div id=\"content\">\n" +
    "    <div id=\"static-column\">\n" +
    "\n" +
    "        <div learning-target-filter id=\"toolbar-learning-target-selection\" ng-style=\"worksheets.filter_box_style\">\n" +
    "\n" +
    "        </div>\n" +
    "        <div id=\"exercise-selection-preview-container\" ng-style=\"worksheets.preview_box_style\">\n" +
    "\n" +
    "            <div worksheet-exercise-preview></div>\n" +
    "            <div ng-if=\"filteredChapters && filteredChapters[0].content_list_ref && !exercisePreviewSize\" class=\"exercise-empty\">\n" +
    "                <span class=\"exercise-empty-text\" translate=\"jsapp.worksheets.noExercises\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"responsive-column\">\n" +
    "        <div id=\"toolbar-exercise-collection-top\">\n" +
    "            <span class=\"exercise-collection-info\">\n" +
    "                <i class=\"fa fa-inbox\"></i>{{ worksheet.exercises.length }}\n" +
    "            </span>\n" +
    "            <span class=\"worksheet-duration\">\n" +
    "                <i class=\"fa fa-clock-o worksheet-duration-icon\"></i>{{ worksheetDuration }} min\n" +
    "            </span>\n" +
    "            <a class=\"bt-toolbar-tinted bt-list-toggle\" ng-click=\"listMode = !listMode;\">\n" +
    "                <i class=\"fa\" ng-class=\"{'fa-list': !listMode, 'fa-th-large': listMode}\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"exercise-collection-preview-container\"\n" +
    "             ng-model=\"worksheet.exercises\"\n" +
    "             ng-class=\"{'flat': listMode}\">\n" +
    "\n" +
    "            <div class=\"exercise-preview exercise-collection-item\"\n" +
    "                 ng-class=\"{'sort-active': exercise.sortActive}\"\n" +
    "                 ng-repeat=\"exercise in worksheet.exercises\"\n" +
    "                 id=\"{{ 'wse' + $index }}\">\n" +
    "\n" +
    "                <div class=\"exercise-preview-header\">\n" +
    "                    <span class=\"exercise-number\">{{ $index + 1}}</span>\n" +
    "\n" +
    "                    <span class=\"exercise-duration\">\n" +
    "                        <i class=\"fa fa-clock-o exercise-duration-icon\"></i>{{ exercise.duration }} sec\n" +
    "                    </span>\n" +
    "\n" +
    "                	<span class=\"exercise-tools\">\n" +
    "\n" +
    "                        <a class=\"{{ opener.active }}\"\n" +
    "                           ng-click=\"toggleModal($event);\">\n" +
    "                            <i class=\"header-icon fa fa-search open-box\"></i>\n" +
    "                        </a>\n" +
    "\n" +
    "                        <i class=\"header-icon fa fa-chevron-circle-up move-up\"\n" +
    "                           ng-click=\"sort(exercise, 'up', $index, $first, $last);\"\n" +
    "                           ng-disabled=\"$first\"></i>\n" +
    "\n" +
    "                    	<i class=\"header-icon fa fa-chevron-circle-down move-down\"\n" +
    "                           ng-click=\"sort(exercise, 'down', $index, $first, $last);\"\n" +
    "                           ng-disabled=\"$last\"></i>\n" +
    "\n" +
    "                    	<i ng-click=\"removeExercise($index, exercise)\"\n" +
    "                           class=\"header-icon remove-icon fa fa-minus-circle\"></i>\n" +
    "                    </span>\n" +
    "\n" +
    "                    <div modal-bubble title=\"{{ exercise.chapterName }}\"\n" +
    "                         css-class=\"exercise-preview exercise-preview-popup\"\n" +
    "                         dynamic-height=\"true\">\n" +
    "\n" +
    "                        <div class=\"subcontainer\">\n" +
    "                            <img ng-src=\"{{ exercise.url }}\" alt=\"\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"exercise-preview-content\">\n" +
    "                    <div ng-if=\"exercise.deprecated\" class=\"exercise-deprecated\">\n" +
    "                        <i class=\"fa fa-exclamation-triangle\"></i>\n" +
    "                        {{ 'jsapp.worksheet.outdatedExercise' | translate }}\n" +
    "                    </div>\n" +
    "                    <img ng-src=\"{{ exercise.url}}\" alt=\"\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id=\"toolbar-exercise-collection-bottom\">\n" +
    "            <input id=\"worksheet-title-input\"\n" +
    "                   ng-model=\"worksheet.worksheetName\"\n" +
    "                   ng-focus=\"scrollToInputField($event)\"\n" +
    "                   type=\"text\" size=\"40\" maxlength=\"120\"\n" +
    "                   data-cy=\"worksheet-title-input\"\n" +
    "                   placeholder=\"{{ 'jsapp.worksheets.namePlaceholder' | translate }}\">\n" +
    "            <a ng-class=\"{false: 'bt-toolbar-tinted-inactive',\n" +
    "                          true: 'bt-confirm'}[worksheet.worksheetName != ws_default_name && worksheet.exercises.length > 0]\"\n" +
    "               class=\"bt-toolbar-tinted  bt-list-toggle button small\"\n" +
    "               ng-click=\"saveWorksheet()\" translate\n" +
    "               data-cy=\"worksheet-save-button\"\n" +
    "               >jsapp.worksheet.saveWorksheet</a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/worksheetList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/worksheetList.tpl.html",
    "<!-- assignWorksheet -->\n" +
    "<div ng-include=\"'worksheetModule/partials/assignWorksheet.tpl.html'\"></div>\n" +
    "\n" +
    "<div class=\"scroll-container assign-worksheets-container\"\n" +
    "     ng-class=\"{\n" +
    "     'assign-worksheets-visible':\n" +
    "        (worksheets.list|filter:{selected:true}).length > 0 &&\n" +
    "        (worksheets.list|filter:hasDeprecatedExercises).length === 0\n" +
    "}\">\n" +
    "    <div class=\"content-padding\">\n" +
    "        <!-- no worksheets created -->\n" +
    "        <div ng-if=\"!worksheets.list.length\" class=\"no-worksheets-hint\"><i class=\"fa fa-file-text-o\"></i><span\n" +
    "                translate=\"jsapp.worksheets.createFirstWorksheet\"></span>\n" +
    "        </div>\n" +
    "        <!-- / no worksheets created -->\n" +
    "\n" +
    "        <div class=\"worksheet-buttons clearfix\">\n" +
    "            <a class=\"button bt-regular bt-action bt-create-worksheet\"\n" +
    "               id=\"create_new_worksheet\"\n" +
    "               ng-click=\"createNewWorksheet()\"\n" +
    "               data-cy=\"worksheets-create-new-worksheet-button\">\n" +
    "\n" +
    "                <i class=\"fa fa-plus\"></i>\n" +
    "                <span translate>jsapp.worksheets.createNew</span>\n" +
    "            </a>\n" +
    "            <div class=\"import-worksheet-button\">\n" +
    "                <a ng-click=\"importWorksheetBubble()\"\n" +
    "                   class=\"button bt-link bt-import-worksheet\">\n" +
    "\n" +
    "                    <i class=\"fa fa-sign-in\"></i>\n" +
    "                    <span translate>jsapp.worksheets.worksheetImport.button.text</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <div id=\"speech-bubble-container\" ng-show=\"showImportForm\">\n" +
    "                    <div class=\"speech-bubble speech-bubble-top speech-bubble-scroll-content\">\n" +
    "                        <img src=\"./assets/speech-bubble-tip-top.svg\" class=\"speech-bubble-tip speech-bubble-tip-top\"/>\n" +
    "                        <div class=\"speech-bubble-head\">\n" +
    "                            <i class=\"close-tooltip fa fa-times-circle\" ng-click=\"showImportForm = false\"></i>\n" +
    "                            <span class=\"speech-bubble-content-first-element\">\n" +
    "                                <label translate>jsapp.worksheets.worksheetImport.header</label>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                        <form class=\"form\"\n" +
    "                              name=\"form\"\n" +
    "                              ng-submit=\"redeemWorksheetCode()\"\n" +
    "                              autocomplete=\"off\">\n" +
    "                            <div class=\"form-row\">\n" +
    "                                <span translate>jsapp.worksheets.worksheetImport.body</span>\n" +
    "                            </div>\n" +
    "                            <form-item\n" +
    "                                    item-id=\"share-code\"\n" +
    "                                    item-name=\"code\"\n" +
    "                                    item-type=\"text\"\n" +
    "                                    item-attributes=\"autofocus=autofocus\"\n" +
    "                                    item-validation-min-length=\"6\"\n" +
    "                                    item-validation-errors=\"codeNotFound\"\n" +
    "                                    item-validation-required=\"true\"\n" +
    "                                    item-no-validation=\"true\">\n" +
    "                            </form-item>\n" +
    "                            <div class=\"form-row\">\n" +
    "                                <button id=\"code-submit\"\n" +
    "                                        type=\"submit\"\n" +
    "                                        ng-class=\"{'bt-inactive': form.$invalid}\"\n" +
    "                                        class=\"button bt-regular bt-confirm\"\n" +
    "                                        translate=\"jsapp.user.form.worksheetImport.fields.submit.text\"\n" +
    "                                        ng-disabled=\"form.$invalid\">\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"import-worksheet-button\" ng-if=\"toggles.importLc10Playlists && ospPlaylistsAvailable\">\n" +
    "                <a class=\"button bt-link bt-import-worksheet\"\n" +
    "                   href=\"#/worksheets/playlistimport\">\n" +
    "\n" +
    "                    <span translate>jsapp.worksheets.playlistimport</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div ng-if=\"worksheets.list.length\" class=\"bm-task-list list content-padding\">\n" +
    "        <div class=\"tasks\">\n" +
    "            <ul class=\"worksheet-list\" ng-if=\"worksheets\" data-cy=\"worksheet-list\">\n" +
    "                <li ng-show=\"worksheets.list.length\">\n" +
    "                    <div class=\"header-row\"></div>\n" +
    "                </li>\n" +
    "                <li class=\"worksheet\" ng-repeat=\"worksheet in worksheets.list | orderBy:'worksheetName' | filter:{deleted:'!true'}\"\n" +
    "                    ng-class=\"{'current-item': lastWorksheet.id && lastWorksheet.id === worksheet.worksheetId, 'current-item-clicked': worksheet.worksheetId === clickedItem.id, 'item-delete': worksheet.worksheetId === worksheetDelete, 'item-highlight': worksheet.highlight}\"\n" +
    "                    scroll-type=\"item\"\n" +
    "                    scroll-if=\"{{ $index === (worksheets.list.length - 1) && (lastWorksheet.id !== false) }}\"\n" +
    "                    data-cy=\"worksheet-list-item-{{worksheet.id}}\"\n" +
    "                    >\n" +
    "                    \n" +
    "                    <div worksheet-list-item data-cy=\"worksheet-selected-item-{{worksheet.id}}\" class=\"row\" ng-class=\"{selected: worksheet.selected}\"></div>\n" +
    "\n" +
    "                </li>\n" +
    "\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("worksheetModule/partials/worksheetListDefault.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/worksheetListDefault.tpl.html",
    "<!-- assignWorksheet -->\n" +
    "<div ng-include=\"'worksheetModule/partials/assignWorksheet.tpl.html'\"></div>\n" +
    "\n" +
    "<div class=\"scroll-container assign-worksheets-container\"\n" +
    "     ng-class=\"{'assign-worksheets-visible': (worksheets.list|filter:{selected:true}).length > 0}\">\n" +
    "    <div ng-if=\"worksheets.list.length\" class=\"bm-task-list list content-padding\">\n" +
    "        <div class=\"tasks\">\n" +
    "            <ul ng-if=\"worksheets\" data-cy=\"default-worksheet-list\">\n" +
    "                <li class=\"worksheet\" ng-repeat=\"worksheet in worksheets.list\">\n" +
    "                    <div class=\"row\" ng-class=\"{selected: worksheet.selected}\">\n" +
    "                        <div class=\"col col-input\">\n" +
    "                            <label data-cy=\"checkbox-{{ worksheet.name }}\" for=\"{{ worksheet.id }}\">\n" +
    "                                <input type=\"checkbox\" ng-model=\"worksheet.selected\" id=\"{{ worksheet.id }}\"/>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"col col-name\">\n" +
    "                            <span ng-bind=\"::worksheet.name\"></span><br/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col col-actions col-worksheets\">\n" +
    "                            <a class=\"fa fa-search bm-list-icon\"\n" +
    "                               ng-click=\"toggleModal($event);\"></a>\n" +
    "                            <div modal-bubble title=\"{{ worksheet.name }}\" css-class=\"exercise-preview\">\n" +
    "                                <exercise-preview ng-if=\"modal.open\" content-locale=\"worksheet.contentLocale\"\n" +
    "                                                  content-list=\"worksheet.cl_id\"></exercise-preview>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col col-file\" ng-if=\"!inAppMode && worksheet.doc\">\n" +
    "                            <a class=\"fa fa-file-word-o bm-list-icon\"\n" +
    "                               ng-href=\"{{ worksheet.doc + version }}\"\n" +
    "                               target=\"bm-doc\"\n" +
    "                                ></a>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col col-todos task-todos\">\n" +
    "                            <div class=\"exercise-buttons\">\n" +
    "                                <div>\n" +
    "                                    <a class=\"task-todo bm-list-icon button-circle\"\n" +
    "                                       open-worksheet worksheet-params=\"getExerciseListParams(worksheet)\"\n" +
    "                                       ng-mousedown=\"lastWorksheet.id=false;clickedItem.id=worksheet.defaultWorksheetId;\"><span class=\"fa fa-play\"></span></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("worksheetModule/partials/worksheetPlaylistImport.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("worksheetModule/partials/worksheetPlaylistImport.tpl.html",
    "<div class=\"playlist-wrapper\">\n" +
    "    <div class=\"playlist-scroll\">\n" +
    "        <div ng-if=\"playlists.list.length\" class=\"bm-task-list list content-padding\">\n" +
    "            <span class=\"playlist-intro\" translate translate-value-icon=\"<i class='fa fa-warning'></i>\">jsapp.teacher.playlist.importInfotext</span>\n" +
    "            <div class=\"tasks\">\n" +
    "                <ul class=\"worksheet-list\" ng-if=\"playlists\">\n" +
    "                    <li ng-show=\"playlists.list.length\">\n" +
    "                        <div class=\"header-row\"></div>\n" +
    "                    </li>\n" +
    "                    <li class=\"worksheet\" ng-repeat=\"playlist in playlists.list\">\n" +
    "                        <div class=\"row\" ng-class=\"{selected: playlist.selected}\">\n" +
    "                            <div class=\"col col-input\">\n" +
    "                                <label for=\"{{ playlist.id }}\"><input type=\"checkbox\" ng-model=\"playlist.selected\"\n" +
    "                                                                       id=\"{{ playlist.id }}\"/></label>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-name\">\n" +
    "                                <span ng-bind=\"::playlist.title\"></span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-actions col-worksheets\">\n" +
    "                                <a class=\"bm-list-icon fa fa-search\"\n" +
    "                                   ng-click=\"toggleModal($event);\"\n" +
    "                                   id=\"preview-{{ playlist.code }}\"\n" +
    "                                   ng-class=\"{'active': opener.active === ('preview-' + playlist.code)}\"></a>\n" +
    "                                <span modal-bubble\n" +
    "                                    title=\"{{ playlist.title }}\"\n" +
    "                                    subtitle=\"{{ playlist.previewSubtitle }}\"\n" +
    "                                    css-class=\"exercise-preview playlist-import\">\n" +
    "                                    <exercise-preview-list\n" +
    "                                        ng-if=\"modal.open\"\n" +
    "                                        exercise-list=\"playlist.exercises\"\n" +
    "                                        exercise-key=\"url\"></exercise-preview-list>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-exercises\">\n" +
    "                                <span class=\"exercises\"><i class=\"bm-list-icon fa fa-inbox\"></i>\n" +
    "                                    {{ playlist.exercises.length }}\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-warning\">\n" +
    "                                <span class=\"exercises\" ng-if=\"playlist.quality.nof_missing_exercises > 0\"><i class=\"bm-list-icon fa fa-warning\"></i>\n" +
    "                                    {{ playlist.quality.nof_missing_exercises }}\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"playlist-import-buttons\">\n" +
    "        <div class=\"button-wrapper\">\n" +
    "            <a class=\"bt-toolbar-tinted bt-list-toggle button small ng-scope bt-confirm\"\n" +
    "                ng-click=\"migratePlaylist()\"\n" +
    "                ng-class=\"{'bt-toolbar-tinted-inactive': playlists.selectedCodes.length == 0 }\"\n" +
    "                translate translate-values=\"{'amount': '{{ playlists.selectedCodes.length }}'}\">jsapp.teacher.playlist.importButton</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
