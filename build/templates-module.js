angular.module('templates-module', ['assignment/list/detail/templates/detail.box.tpl.html', 'assignment/list/templates/group.assignmentCalendar.tpl.html', 'assignment/list/templates/group.listItem.tpl.html', 'assignment/list/templates/groupMember.listItem.tpl.html', 'assignment/list/templates/optionInfo.tpl.html', 'assignment/list/templates/student.listItem.tpl.html', 'assignment/templates/archiveUserInput.tpl.html', 'assignment/templates/assignToolbar.tpl.html', 'assignment/templates/auiError.tpl.html', 'assignment/templates/auiReadyForRequest.tpl.html', 'assignment/toolbar/datetimePicker/templates/datetimePicker.tpl.html', 'assignment/toolbar/groupPicker/templates/groupPicker.tpl.html', 'assignment/toolbar/optionPicker/templates/optionPicker.tpl.html', 'assignment/toolbar/studentPicker/templates/studentPicker.tpl.html', 'auth/templates/authorization.button.tpl.html', 'auth/templates/coupleCode.tpl.html', 'balloon/templates/balloon.tpl.html', 'books/templates/downloadButton.tpl.html', 'books/templates/view-text-button.tpl.html', 'component/list/templates/list.tpl.html', 'edit/footer.tpl.html', 'edit/header.tpl.html', 'edit/main.tpl.html', 'group/dtdl/student/templates/connect.tpl.html', 'group/dtdl/student/templates/list.tpl.html', 'group/dtdl/student/templates/listEmpty.tpl.html', 'group/dtdl/teacher/templates/connect.tpl.html', 'group/dtdl/teacher/templates/list.tpl.html', 'group/dtdl/teacher/templates/listEmpty.tpl.html', 'group/dtdl/teacher/templates/menu.tpl.html', 'group/dtdl/teacher/templates/naming.tpl.html', 'group/dtdl/teacher/templates/removeMembers.tpl.html', 'group/dtdl/teacher/templates/twoColMenuRight.tpl.html', 'group/dtdl/teacher/templates/updatePasswords.tpl.html', 'group/dtdl/teacher/templates/updatePasswordsItemRenderer.tpl.html', 'logout/templates/logout.tpl.html', 'lti/templates/assign.view.tpl.html', 'lti/templates/content.tpl.html', 'lti/templates/lobItemRenderer.tpl.html', 'lti/templates/startContainer.tpl.html', 'navigation/templates/header.tpl.html', 'navigation/templates/mainNaviItem.tpl.html', 'navigation/templates/subNavi.tpl.html', 'navigation/templates/subNaviItem.tpl.html', 'navigation/templates/userNavi.tpl.html', 'popup/htmlContainer.tpl.html', 'popup/previewExercise/templates/exercise.preview.button.tpl.html', 'popup/previewExercise/templates/exercise.preview.tpl.html', 'popup/showCreateOrEditFolderLightbox/templates/createOrEditFolder.tpl.html', 'popup/showDestinationFoldersListLightbox/templates/destinationFoldersList.tpl.html', 'popup/showFemReferenceLightbox/femReferenceLightbox.tpl.html', 'popup/showFemReferenceLightbox/lightboxnav.tpl.html', 'popup/showTextReferenceLightbox/textReferenceLightbox.tpl.html', 'popup/templates/archiveUserInputPopups.tpl.html', 'popup/templates/popup.tpl.html', 'popup/templates/window-lightbox.tpl.html', 'search/templates/bar.tpl.html']);

angular.module("assignment/list/detail/templates/detail.box.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/detail/templates/detail.box.tpl.html",
    "<div class=\"detail-options-box\" ng-show=\"vm.assignment\">\n" +
    "    <div class=\"detail-options-box-info-container\">\n" +
    "        <div ng-if=\"vm.assignment.isWorksheet && vm.assignment.typeTitle\" class=\"detail-options\">\n" +
    "            <span class=\"detail-options-label\" translate=\"{{vm.assignment.typeTitle}}\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"!vm.assignment.isWorksheet\" class=\"detail-options\">\n" +
    "            <span class=\"detail-options-label\" translate=\"jsapp.general.book\"></span>\n" +
    "            <span ng-bind=\"vm.assignment.book_name\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"detail-options\" ng-if=\"vm.assignment.adjustedOptions && vm.assignment.typeTitle\" ng-switch=\"vm.assignment.adjustedOptions.length > 0\">\n" +
    "            <span class=\"detail-options-label\" translate=\"jsapp.teacher.assignment.details.selectedOptions\"></span>\n" +
    "            <span ng-switch-default>-</span>\n" +
    "            <span ng-switch-when=\"true\" ng-repeat=\"option in vm.assignment.adjustedOptions\" ng-switch=\"$last\">\n" +
    "                <span translate=\"{{option.hint}}\"></span><span ng-switch-default>,</span><span ng-switch-when=\"true\">.</span>\n" +
    "                <a href\n" +
    "                   ng-click=\"vm.onReleaseResultsClicked()\"\n" +
    "                   ng-if=\"vm.hasFeatureReleaseResults() && !vm.assignment.showResults\"\n" +
    "                   translate=\"jsapp.teacher.assignment.releaseResults\"></a>\n" +
    "            </span>\n" +
    "            <a href\n" +
    "               ng-click=\"vm.onDeactivateResultsClicked()\"\n" +
    "               ng-if=\"vm.hasFeatureDeactivateResults()\"\n" +
    "               translate=\"jsapp.teacher.assignment.deactivateResults\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"detail-options\">\n" +
    "            <span class=\"detail-options-label\" translate=\"jsapp.teacher.assignment.details.period\"></span>\n" +
    "            <span ng-bind=\"vm.assignment.begin | date:'dd.MM.yyyy, HH:mm'\"></span>\n" +
    "            <span ng-show=\"vm.assignment.begin && vm.assignment.end \">-</span>\n" +
    "            <span ng-bind=\"vm.assignment.end | date:'dd.MM.yyyy, HH:mm'\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"detail-options\" ng-if=\"vm.assignment.startCode\">\n" +
    "            <span class=\"detail-options-label\" translate=\"jsapp.teacher.assignment.details.startCode\"></span>\n" +
    "            <span ng-bind=\"vm.assignment.startCode\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"detail-options-box-icon-container\">\n" +
    "        <div bm-assignment-options-info assignment=\"vm.assignment\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/list/templates/group.assignmentCalendar.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/templates/group.assignmentCalendar.tpl.html",
    "<div class=\"assigment-calendar-wrapper\">\n" +
    "    <div\n" +
    "        ng-if=\"vm.isCurrentAssignment === 'false' || !vm.isCurrentAssignment\"\n" +
    "        class=\"calendar-{{vm.position}}-head\"\n" +
    "        translate=\"jsapp.assignment.calendarHeader.{{vm.position === 'left' ? 'setStartDate' : 'setDueDate'}}\"\n" +
    "    ></div>\n" +
    "    <div\n" +
    "        class=\"calendar calendar-{{vm.position}}\"\n" +
    "        ng-class=\"{'current-assignment-calendar': vm.isCurrentAssignment === 'true'}\"\n" +
    "    ></div>\n" +
    "    <div class=\"timepicker-{{vm.position}}\">\n" +
    "        <div class=\"time-selection-wrapper\" ng-class=\"{'assignment-invalid-time': vm.hasAssigmentTimeError === 'true'}\">\n" +
    "            <span translate=\"jsapp.datepicker.time\"></span>\n" +
    "            <select class=\"time-selection\"\n" +
    "                    ng-model=\"vm.assignmentHour\"\n" +
    "                    ng-options=\"h for h in vm.hours\">\n" +
    "            </select>\n" +
    "            :\n" +
    "            <select class=\"time-selection\"\n" +
    "                    ng-model=\"vm.assignmentMinute\"\n" +
    "                    ng-options=\"m for m in vm.minutes\">\n" +
    "            </select>\n" +
    "\n" +
    "            <div\n" +
    "                ng-if=\"vm.hasAssigmentTimeError === 'true'\"\n" +
    "                class=\"assignment-invalid-time-text\"\n" +
    "                translate=\"jsapp.assignment.changeDuration.invalidTime\"\n" +
    "            >\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/list/templates/group.listItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/templates/group.listItem.tpl.html",
    "<li ng-class=\"{'todo-delete-open': vm.assignmentConfig.id === vm.assignment.assignment_id, 'current-item': vm.assignment.assignment_id === vm.lastTodo.id, 'current-item-clicked': vm.assignment.assignment_id === vm.clickedItem.id}\"\n" +
    "    scroll-type=\"item\"\n" +
    "    scroll-if=\"{{ todosSlice.page === 0 && $index === (todosSlice.items.length - 1) && vm.lastTodo.id !== false }}\">\n" +
    "    <div class=\"row row-fixed-height\">\n" +
    "        <div class=\"col col-datetime\">\n" +
    "            <span ng-if=\"vm.isScheduledAssignment()\">\n" +
    "                {{ vm.assignment.begin | date:'dd.MM.yyyy, HH:mm' }}<br/>\n" +
    "            </span>\n" +
    "            <span>{{ vm.assignment.end | date:'dd.MM.yyyy, HH:mm' }}</span>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!vm.assignment.exercise_list && vm.assignment.content_type\"\n" +
    "                 class=\"task-item task-todo task-icon-before-name bm-list-icon\"\n" +
    "                 ng-class=\"{'bf bf-book-open-leaf': vm.assignment.content_type == 'TextList' || vm.assignment.content_type == 'FemList' || vm.assignment.content_type == 'KemList', 'fa fa-file-o': vm.assignment.content_type == 'FileList'}\">\n" +
    "        </div>\n" +
    "        <div class=\"col col-name col-name-middle\" ng-switch=\"vm.assignment.isWorksheet\">\n" +
    "            <span ng-if=\"vm.assignment.full_caption\"><span ng-bind=\"::vm.assignment.full_caption\"></span> </span>\n" +
    "            <span ng-bind=\"::vm.assignment.name\"></span><br/>\n" +
    "            <span ng-switch-default class=\"book-name\" ng-if=\"vm.assignment.book_name\">{{ 'jsapp.general.book' | translate }}</span>\n" +
    "            <span ng-switch-default class=\"book-name\" ng-if=\"vm.assignment.book_name\" ng-bind=\"::vm.assignment.book_name\"></span>\n" +
    "\n" +
    "            <div ng-switch-when=\"true\" class=\"book-name\" ng-show=\"vm.assignment.typeTitle\">\n" +
    "                <span translate=\"{{vm.assignment.typeTitle}}\"></span>\n" +
    "                <span ng-show=\"vm.assignment.startCode || !vm.assignment.showResults\">-</span>\n" +
    "                <span ng-show=\"vm.assignment.startCode\">\n" +
    "                    <span translate=\"jsapp.teacher.assignment.details.startCode\"></span>\n" +
    "                    <span ng-bind=\"vm.assignment.startCode\"></span>.\n" +
    "                </span>\n" +
    "                <span ng-show=\"!vm.assignment.showResults\">\n" +
    "                    <span translate=\"jsapp.teacher.assignment.options.results.hint\"></span>.\n" +
    "                    <a href\n" +
    "                       ng-click=\"vm.onReleaseResultsClicked()\"\n" +
    "                       ng-if=\"vm.hasFeatureReleaseResults() && !vm.isScheduledAssignment()\"\n" +
    "                       translate=\"jsapp.teacher.assignment.releaseResults\"></a>\n" +
    "                </span>\n" +
    "                <span ng-show=\"vm.assignment.showResults\">\n" +
    "                    <a href\n" +
    "                       ng-click=\"vm.onDeactivateResultsClicked()\"\n" +
    "                       ng-if=\"vm.hasFeatureDeactivateResults() && !vm.isScheduledAssignment()\"\n" +
    "                       translate=\"jsapp.teacher.assignment.deactivateResults\"></a>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "        <div ng-if=\"vm.assignment.isExerciseSeries\"\n" +
    "             class=\"col col-actions-small\">\n" +
    "            <a id=\"preview-{{vm.assignment.assignment_id}}\"\n" +
    "               data-cy=\"preview-{{vm.assignment.assignment_id}}\"\n" +
    "               class=\"fa fa-search bm-list-icon\"\n" +
    "               ng-class=\"{'active': opener.active === ('preview-' + vm.assignment.assignment_id)}\"\n" +
    "               ng-click=\"vm.assignmentPreview($event);\">\n" +
    "            </a>\n" +
    "            <div modal-bubble title=\"{{ vm.assignment.name }}\"\n" +
    "                 css-class=\"exercise-preview\"\n" +
    "                 data-cy=\"preview-modal-{{vm.assignment.assignment_id }}\">\n" +
    "                <exercise-preview ng-if=\"modal.open\"\n" +
    "                                  content-locale=\"vm.assignmentContentLocale\"\n" +
    "                                  content-list=\"vm.assignment.exercise_list\"></exercise-preview>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col my-col-students col-students\" ng-switch=\"vm.assignmentConfig.state\">\n" +
    "            <div bm-assignment-options-info\n" +
    "                 ng-show=\"vm.isScheduledAssignment()\"\n" +
    "                 assignment=\"vm.assignment\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div donut-chart-svg\n" +
    "                 ng-if=\"!vm.isScheduledAssignment()\"\n" +
    "                 id=\"pie-{{ vm.assignment.assignment_id }}\"\n" +
    "                 data-cy=\"assignment-open-donut-chart-{{ vm.assignment.assignment_id }}\"\n" +
    "                 data-total=\"{{  vm.assignment.assignee_ids.length }}\"\n" +
    "                 data-success=\"{{ (vm.assignment.isExerciseSeries || vm.assignment.isWorksheet) ? vm.assignment.average_result.success : true}}\"\n" +
    "                 data-error=\"{{ vm.assignment.average_result.error }}\"\n" +
    "                 data-undone=\"{{ vm.assignment.average_result.undone }}\"\n" +
    "                 ng-click=\"vm.onDonutClicked()\"\n" +
    "                 class=\"donut active-balloon\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div bm-balloon\n" +
    "                 ng-if=\"!vm.isScheduledAssignment()\"\n" +
    "                 orientation=\"left\"\n" +
    "                 show=\"vm.showParticipantInfos\"\n" +
    "                 title-key=\"jsapp.general.participants\"\n" +
    "                 link-element=\"pie-{{vm.assignment.assignment_id}}\"\n" +
    "                 selection-style=\"active-balloon-opened\"\n" +
    "                 data-cy=\"assignment-balloon-participants-{{vm.assignment.assignment_id}}\"\n" +
    "                 class=\"balloon-220\">\n" +
    "\n" +
    "                <div todo-participant-bubble\n" +
    "                     data-cy=\"assignment-balloon-participants-list-{{vm.assignment.assignment_id}}\"\n" +
    "                     id=\"student-bubble-wrapper\"\n" +
    "                     assignmentId=\"vm.assignment.assignment_id\"\n" +
    "                     todo=\"vm.assignment\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div ng-if=\"vm.isScheduledAssignment()\"\n" +
    "                 id=\"students-{{vm.assignment.assignment_id}}\"\n" +
    "                 class=\"options-student-bubble-trigger\"\n" +
    "                 ng-click=\"vm.onParticipantsClicked()\">\n" +
    "                <i class=\"fa fa-user\"></i>\n" +
    "                <span ng-bind=\"vm.assignment.assignee_ids.length\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div bm-balloon\n" +
    "                 ng-if=\"vm.isScheduledAssignment()\"\n" +
    "                 orientation=\"left\"\n" +
    "                 show=\"vm.showParticipants\"\n" +
    "                 title-key=\"jsapp.general.participants\"\n" +
    "                 link-element=\"students-{{vm.assignment.assignment_id}}\"\n" +
    "                 selection-style=\"active-balloon-opened\"\n" +
    "                 class=\"balloon-220\">\n" +
    "\n" +
    "                <div student-list-bubble\n" +
    "                     id=\"student-bubble-wrapper-no-results\"\n" +
    "                     student-list-all=\"vm.assignment.assignee_ids\"\n" +
    "                     group-id=\"vm.currentGroupId\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div ng-if=\"vm.assigmentDateUpdatable\"\n" +
    "             class=\"col col-action-change-assigment-dates\"\n" +
    "             data-cy=\"reschedule-assignment-{{vm.assignment.assignment_id}}\">\n" +
    "            <div id=\"reschedule-assignment-{{vm.assignment.assignment_id}}\"\n" +
    "                 class=\"options-student-bubble-trigger change-assigment-dates-btn\"\n" +
    "                 ng-click=\"vm.onChangeAssignmentDurationClicked()\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "        <div bm-balloon\n" +
    "             ng-if=\"!vm.isExpiredAssignment()\"\n" +
    "             orientation=\"left\"\n" +
    "             show=\"vm.showChangeAssignmentDuration\"\n" +
    "             title-key=\"{{vm.isScheduledAssignment() ? 'jsapp.assignment.changeDuration.text' : 'jsapp.assignment.changeDuration.changeDueDate'}}\"\n" +
    "             link-element=\"reschedule-assignment-{{vm.assignment.assignment_id}}\"\n" +
    "             selection-style=\"active-balloon-opened\"\n" +
    "             ng-class=\"{'balloon-260': vm.isOpenAssignment(), 'balloon-466': vm.isScheduledAssignment()}\">\n" +
    "            <div\n" +
    "                    class=\"worksheet-options datetime-picker\"\n" +
    "                    ng-class=\"{'datetime-picker-single': vm.isOpenAssignment()}\"\n" +
    "            >\n" +
    "                <!-- ng-if is used to force re-render on props change. -->\n" +
    "                <div ng-if=\"vm.showChangeAssignmentDuration\" style=\"display: flex; justify-content: center;\">\n" +
    "                    <div bm-assignment-calendar ng-if=\"vm.isScheduledAssignment()\"\n" +
    "                         position=\"left\"\n" +
    "                         assignment-date=\"{{vm.assignment.begin}}\"\n" +
    "                         has-assigment-time-error=\"{{vm.assignmentInvalidStartTime}}\"\n" +
    "                         assignment-hour=\"vm.startTime.hour\"\n" +
    "                         assignment-minute=\"vm.startTime.minute\"\n" +
    "                         on-date-select=\"vm.onStartDateSelect(dateText)\"\n" +
    "                    ></div>\n" +
    "\n" +
    "                    <div bm-assignment-calendar\n" +
    "                         position=\"right\"\n" +
    "                         assignment-date=\"{{vm.assignment.end}}\"\n" +
    "                         min-date=\"{{vm.assignment.begin}}\"\n" +
    "                         has-assigment-time-error=\"{{vm.assignmentInvalidEndTime}}\"\n" +
    "                         assignment-hour=\"vm.endTime.hour\"\n" +
    "                         assignment-minute=\"vm.endTime.minute\"\n" +
    "                         on-date-select=\"vm.onEndDateSelect(dateText)\"\n" +
    "                         is-current-assignment=\"{{vm.isOpenAssignment()}}\"\n" +
    "                    ></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"confirmation-btn-wrapper\">\n" +
    "                    <button\n" +
    "                            class=\"button bt-confirm confirmation-btn\"\n" +
    "                            ng-click=\"vm.confirmNewAssignmentDates()\"\n" +
    "                            translate=\"jsapp.assignment.changeDuration.confirm\"\n" +
    "                    >\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col col-action-delete\">\n" +
    "            <a ng-if=\"vm.canDelete\" class=\"fa fa-trash-o bm-list-icon\"\n" +
    "               data-cy=\"delete-group-todo-{{ vm.assignment.name }}\"\n" +
    "               ng-click=\"vm.deleteAssignment();vm.lastTodo.id=false;\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div\n" +
    "            archive-user-input\n" +
    "            data-cy=\"assignment-archive-user-input-enable\"\n" +
    "            ng-if=\"vm.showArchiveUserInput\"\n" +
    "            assigment-id=\"{{vm.assignment.assignment_id}}\"\n" +
    "            group-id=\"{{vm.currentGroupId}}\"\n" +
    "            class=\"col col-action-download\"\n" +
    "        ></div>\n" +
    "\n" +
    "        <div ng-if=\"!vm.isScheduledAssignment()\"\n" +
    "             class=\"col col-action-details\"\n" +
    "             data-cy=\"assignment-details-{{vm.assignment.assignment_id}}\">\n" +
    "            <a ng-if=\"vm.assignment.isExerciseSeries || vm.assignment.isWorksheet\" ng-click=\"vm.showDetails()\"\n" +
    "               class=\"fa fa-angle-right task-todo show-details-button bm-list-icon\"\n" +
    "               ng-mousedown=\"vm.lastTodo.id=false;clickedItem.id=vm.assignment.assignment_id;\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"assignment-id\" ng-bind=\"::vm.assignment.assignment_id\"></div>\n" +
    "    </div>\n" +
    "</li>\n" +
    "");
}]);

angular.module("assignment/list/templates/groupMember.listItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/templates/groupMember.listItem.tpl.html",
    "<li ng-class=\"{'current-item': ((lastTodo.id && todo.assignment_id === lastTodo.id) || (lastTodo.continueId && todo.continue_id === lastTodo.continueId)), 'current-item-clicked': todo.assignment_id === clickedItem.id}\"\n" +
    "    scroll-type=\"item\"\n" +
    "    scroll-if=\"{{ todosSlice.page === 0 && $index === (todosSlice.items.length - 1) && (lastTodo.id !== false || lastTodo.continueId !== false) }}\">\n" +
    "    <div class=\"row row-fixed-height\">\n" +
    "        <div class=\"col col-datetime\">\n" +
    "            <span ng-if=\"todoConfig.state === 'scheduled'\">\n" +
    "                {{ todo.begin | date:'dd.MM.yyyy, HH:mm' }}<br/>\n" +
    "            </span>\n" +
    "            <span>{{ todo.end | date:'dd.MM.yyyy, HH:mm' }}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"todoConfig.state !== 'scheduled' && todo.showResults\" class=\"col col-star\">\n" +
    "            <div success-star\n" +
    "                 ng-if=\"!todo.content_type\"\n" +
    "\n" +
    "                 success-type=\"star\"\n" +
    "                 success-context=\"studentTodos\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"todo.content_type == 'TextList' || todo.content_type == 'FemList' || todo.content_type == 'KemList' || todo.content_type == 'FileList'\"\n" +
    "             class=\"task-item task-todo task-icon-before-name bm-list-icon\"\n" +
    "             ng-class=\"{'bf bf-book-open-leaf': todo.content_type == 'TextList' || todo.content_type == 'FemList' || todo.content_type == 'KemList', 'fa fa-file-o': todo.content_type == 'FileList'}\">\n" +
    "        </div>\n" +
    "        <div ng-if=\"todoConfig.state !== 'scheduled' && !todo.showResults\"\n" +
    "             class=\"col col-star\"></div>\n" +
    "\n" +
    "        <div class=\"col col-name col-name-middle\">\n" +
    "            <!--assignment caption + name-->\n" +
    "            <span ng-if=\"todo.full_caption\" ng-bind=\"::todo.full_caption\"></span>\n" +
    "            <span ng-bind=\"::todo.name\"></span>\n" +
    "\n" +
    "            <!--assignment type (test/exercise) + options-->\n" +
    "            <div class=\"book-name\" ng-if=\"todo.isWorksheet && todo.typeTitle\">\n" +
    "                <span class=\"book-name\" translate=\"{{todo.typeTitle}}\"></span>\n" +
    "                <span ng-show=\"todo.startCode || !todo.showResults\">-</span>\n" +
    "                <span ng-show=\"todo.startCode\">\n" +
    "                    <span translate=\"jsapp.teacher.assignment.details.startCode\"></span>\n" +
    "                    <span ng-bind=\"todo.startCode\"></span>.\n" +
    "                </span>\n" +
    "                <span ng-show=\"!todo.showResults\">\n" +
    "                    <span translate=\"jsapp.teacher.assignment.options.results.hint\"></span>.\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--book name-->\n" +
    "            <div ng-if=\"todo.book_name\">\n" +
    "                <span class=\"book-name\">{{ 'jsapp.general.book' | translate }} {{ ::todo.book_name }}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col col-activity-result-teacher\">\n" +
    "            <div class=\"exercise-percentage\" ng-if=\"todo.points !== false\"\n" +
    "                 ng-class=\"{'color-success': todo.coins || todo.stars, 'color-error': !todo.coins && !todo.stars}\">\n" +
    "                {{ todo.success_percentage | number:0 }}%<span class=\"delayed-sign\" ng-if=\"todo.handover_date > todo.end\">*</span>\n" +
    "            </div>\n" +
    "            <div class=\"exercise-percentage\" ng-if=\"todo.points === false && (todo.isExerciseSeries || todo.isWorksheet)\"> -</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div todo-task\n" +
    "             ng-if=\"showTaskButton\"\n" +
    "             class=\"col col-buttons\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col col-actions-small\" ng-if=\"todoConfig.state !== 'scheduled' \">\n" +
    "            <a open-todo-detail-reporting\n" +
    "               ng-if=\"todo.isExerciseSeries || todo.isWorksheet\"\n" +
    "               class=\"fa fa-angle-right task-todo show-details-button bm-list-icon\"\n" +
    "               data-cy=\"show-todo-detail-{{todo.name}}\"\n" +
    "               ng-mousedown=\"lastTodo.id=false;clickedItem.id=todo.assignment_id;\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"assignment-id\">{{ todo.assignment_id }}</div>\n" +
    "    </div>\n" +
    "</li>\n" +
    "");
}]);

angular.module("assignment/list/templates/optionInfo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/templates/optionInfo.tpl.html",
    "<div ng-if=\"optionInfo.assignment.adjustedOptions && optionInfo.assignment.adjustedOptions.length\" class=\"options-icon\">\n" +
    "\n" +
    "    <div id=\"ass-{{optionInfo.assignment.assignment_id}}\" class=\"fa-stack fa-lg active-balloon\" ng-click=\"optionInfo.toggleBubble()\">\n" +
    "        <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "        <i class=\"fa fa-info fa-stack-1x fa-inverse\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         orientation=\"left\"\n" +
    "         show=\"optionInfo.showBubble\"\n" +
    "         title-key=\"jsapp.teacher.assignment.details.options.popup.title\"\n" +
    "         link-element=\"ass-{{optionInfo.assignment.assignment_id}}\"\n" +
    "         selection-style=\"active-balloon-opened\"\n" +
    "         class=\"balloon-325\">\n" +
    "\n" +
    "        <div class=\"options-container\">\n" +
    "            <div ng-repeat=\"option in optionInfo.assignment.adjustedOptions\">\n" +
    "                <div translate=\"{{option.hint}}\" class=\"options-title\"></div>\n" +
    "                <div translate=\"{{option.description}}\" class=\"options-description\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/list/templates/student.listItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/list/templates/student.listItem.tpl.html",
    "<li ng-class=\"{'current-item': ((lastTodo.id && todo.assignment_id === lastTodo.id) || (lastTodo.continueId && todo.continue_id === lastTodo.continueId)), 'current-item-clicked': todo.assignment_id === clickedItem.id}\"\n" +
    "    scroll-type=\"item\"\n" +
    "    scroll-if=\"{{ todosSlice.page === 0 && $index === (todosSlice.items.length - 1) && (lastTodo.id !== false || lastTodo.continueId !== false) }}\">\n" +
    "    <div class=\"row row-fixed-height\">\n" +
    "        <div class=\"col col-datetime\">\n" +
    "            <span ng-if=\"todoConfig.state === 'scheduled'\">\n" +
    "                {{ todo.begin | date:'dd.MM.yyyy, HH:mm' }}<br/>\n" +
    "            </span>\n" +
    "            <span>{{ todo.end | date:'dd.MM.yyyy, HH:mm' }}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Exercise Lists are the only one which have no single task icons :( -->\n" +
    "        <div ng-if=\"todo.content_type == 'TextList' || todo.content_type == 'FemList' || todo.content_type == 'KemList' || todo.content_type == 'FileList'\"\n" +
    "             class=\"task-item task-todo task-icon-before-name bm-list-icon\"\n" +
    "             ng-class=\"{'bf bf-book-open-leaf': todo.content_type == 'TextList' || todo.content_type == 'FemList' || todo.content_type == 'KemList', 'fa fa-file-o': todo.content_type == 'FileList'}\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col col-name col-name-middle\"\n" +
    "             ng-init=\"showBookLink=(todo.completedOnce || todoConfig.state == 'expired' || !todo.exercise_list)\">\n" +
    "            <span ng-if=\"todo.full_caption\" ng-bind=\"::todo.full_caption\"></span>\n" +
    "            <span ng-bind=\"::todo.name\"></span>\n" +
    "\n" +
    "            <!--book name (link to allocated book)-->\n" +
    "            <div ng-show=\"todo.isBookAvailable && showBookLink\">\n" +
    "                <span class=\"book-name\" ng-if=\"todo.book_name\">\n" +
    "                    {{ 'jsapp.general.book' | translate }}\n" +
    "                    <a class=\"task-additional-content\"\n" +
    "                       ng-click=\"goToBook(todo, 'school')\">\n" +
    "                            <span ng-bind=\"::todo.book_name\"></span>\n" +
    "                            <i class=\"fa fa-angle-right\"></i>\n" +
    "                    </a>\n" +
    "                </span>\n" +
    "\n" +
    "                <!--contains outdated (i.e. non-free-betty-supported) exercises-->\n" +
    "                <span class=\"worksheet-meta\" ng-if=\"todo.contains_deprecated_exercise\">\n" +
    "                    <span class=\"worksheet-outdated-ex\" translate=\"jsapp.worksheets.outdatedExercises\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--book name (no link)-->\n" +
    "            <div ng-show=\"!todo.isBookAvailable || !showBookLink\">\n" +
    "                <span class=\"book-name\" ng-if=\"todo.book_name\">{{ 'jsapp.general.book' | translate }} {{ ::todo.book_name }}</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--assignment type-->\n" +
    "            <div class=\"book-name\" ng-if=\"todo.isWorksheet && todo.typeTitle\">\n" +
    "                <span class=\"book-name\" translate=\"{{todo.typeTitle}}\"></span>\n" +
    "\n" +
    "                <!--contains outdated (i.e. non-free-betty-supported) exercises-->\n" +
    "                <span class=\"worksheet-meta\" ng-if=\"todo.contains_deprecated_exercise\">\n" +
    "                    <span class=\"worksheet-outdated-ex\" translate=\"jsapp.worksheets.outdatedExercises\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col col-buttons\" item-chapter-tasks chapter=\"todo.chapter\" ng-if=\"isNotSingleContent(todo)\" ></div>\n" +
    "\n" +
    "        <div bm-check-authorization\n" +
    "             class=\"col col-activity-result-student\">\n" +
    "\n" +
    "            <div bm-exercise-points\n" +
    "                 ng-if=\"todo.showResults\"\n" +
    "                 points=\"todo.points\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"!todo.showResults && todo.completedOnce\"\n" +
    "                 class=\"col-activity-result-student-finalized bf bf-check-medium\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"task-coins-or-star\" ng-if=\"todo.showResults\">\n" +
    "            <div bm-check-authorization\n" +
    "                 success-coins-or-star\n" +
    "                 ng-if=\"todo.isExerciseSeries || todo.isWorksheet\"\n" +
    "\n" +
    "                 success-type=\"coins-or-star\"\n" +
    "                 success-context=\"studentTodos\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div bm-check-authorization=\"!\" class=\"col col-coins\">\n" +
    "            <bm-authorization-button></bm-authorization-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"!todo.showResults\" class=\"col col-coins col-coins-nocoins\">\n" +
    "            <a href id=\"activity-noResult-{{todo.assignment_id}}\" ng-click=\"showBubble()\">\n" +
    "                <span class=\"bf bf-question-circle-o\"></span>\n" +
    "            </a>\n" +
    "            <div bm-balloon\n" +
    "                 orientation=\"left\"\n" +
    "                 show=\"showResults.showBubble\"\n" +
    "                 title-key=\"jsapp.student.assignment.noShowResult.title\"\n" +
    "                 link-element=\"activity-noResult-{{todo.assignment_id}}\"\n" +
    "                 selection-style=\"active\"\n" +
    "                 class=\"balloon-325\">\n" +
    "                <div class=\"options-container\"\n" +
    "                     translate=\"jsapp.student.assignment.noShowResult.description\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div todo-task\n" +
    "             ng-if=\"showTaskButton\"\n" +
    "             class=\"col col-buttons\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"assignment-id\">{{ todo.assignment_id }}</div>\n" +
    "    </div>\n" +
    "</li>\n" +
    "");
}]);

angular.module("assignment/templates/archiveUserInput.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/templates/archiveUserInput.tpl.html",
    "<div bm-balloon\n" +
    "     orientation=\"left\"\n" +
    "     show=\"vm.popupIsOpen\"\n" +
    "     title-key=\"jsapp.archiveUserInput.title\"\n" +
    "     link-element=\"download-{{vm.assigmentId}}\"\n" +
    "     selection-style=\"active-balloon-opened\"\n" +
    "     class=\"balloon-320\"\n" +
    "     ng-if=\"vm.archiveUserInputsEnable\"\n" +
    ">\n" +
    "    <div ng-switch=\"vm.status\" class=\"aui-info\">\n" +
    "        <div ng-switch-when=\"IN_PREPARATION\">\n" +
    "            <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.progressText\"></p>\n" +
    "            <div class=\"fa-2x aui-progress-spinner-container\">\n" +
    "                <i class=\"fa fa-circle-o-notch fa-spin aui-progress-spinner\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-switch-when=\"READY_FOR_DOWNLOAD\">\n" +
    "            <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.availableText.main\"></p>\n" +
    "            <div class=\"aui-info-list\">\n" +
    "                <ul>\n" +
    "                    <li translate=\"jsapp.archiveUserInput.availableText.submissionDate\"></li>\n" +
    "                    <li translate=\"jsapp.archiveUserInput.availableText.userName\"></li>\n" +
    "                    <li translate=\"jsapp.archiveUserInput.availableText.results\"></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <button translate=\"jsapp.archiveUserInput.download\"\n" +
    "                    class=\"aui-btn aui-btn-download\"\n" +
    "                    ng-click=\"vm.togglePopup(); vm.downloadArchive();\"\n" +
    "            >\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div ng-switch-when=\"ARCHIVING_FAILED\">\n" +
    "            <aui-error toggle-popup=\"vm.togglePopup()\"></aui-error>\n" +
    "        </div>\n" +
    "        <div ng-switch-default>\n" +
    "            <aui-ready-for-request\n" +
    "                status=\"{{vm.availabilityStatus}}\"\n" +
    "                toggle-popup=\"vm.togglePopup()\"\n" +
    "                request-archive=\"vm.requestArchive()\"\n" +
    "                assignment-id=\"{{vm.assigmentId}}\"\n" +
    "            ></aui-ready-for-request>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div\n" +
    "    class=\"aui-icon-container\"\n" +
    "    id=\"download-{{ vm.assigmentId }}\"\n" +
    "    ng-click=\"vm.togglePopup(); vm.handleStatusButtonClick();\"\n" +
    "    ng-if=\"vm.archiveUserInputsEnable\"\n" +
    ">\n" +
    "    <div class=\"aui-icon\" ng-class=\"vm.iconClassName\" data-cy=\"{{vm.assigmentId}}-aui-icon-{{vm.iconClassName}}\">\n" +
    "        <div class=\"aui-icon-center\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <svg width=\"15px\" height=\"16px\" viewBox=\"0 0 15 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
    "        <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n" +
    "            <g id=\"ArchiveInputStatus\" transform=\"translate(-8, -8)\" fill=\"#0088DD\" fill-rule=\"nonzero\">\n" +
    "                <g id=\"DownloadIcon\">\n" +
    "                    <g transform=\"translate(8.5, 8.5)\">\n" +
    "                        <path d=\"M14.4233715,7.59650735 C14.5836279,7.97334559 14.51764,8.29503676 14.2254077,8.56158088 L7.89056608,14.7380515 C7.72088282,14.9126838 7.50877875,15 7.25425387,15 C6.99972898,15 6.78762491,14.9126838 6.61794165,14.7380515 L0.283100019,8.56158088 C-0.00913225867,8.29503676 -0.0751201923,7.97334559 0.0851362179,7.59650735 C0.245392628,7.23805147 0.523484634,7.05882353 0.919412236,7.05882353 L4.53932174,7.05882353 L4.53932174,0.882352941 C4.53932174,0.643382353 4.62887679,0.436580882 4.8079869,0.261948529 C4.987097,0.0873161765 5.19920107,0 5.44429911,0 L9.06420862,0 C9.30930666,0 9.52141073,0.0873161765 9.70052083,0.261948529 C9.87963094,0.436580882 9.96918599,0.643382353 9.96918599,0.882352941 L9.96918599,7.05882353 L13.5890955,7.05882353 C13.9850231,7.05882353 14.2631151,7.23805147 14.4233715,7.59650735 Z\"></path>\n" +
    "                    </g>\n" +
    "                </g>\n" +
    "            </g>\n" +
    "        </g>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/templates/assignToolbar.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/templates/assignToolbar.tpl.html",
    "<div class=\"assignment-toolbar\"\n" +
    "     ng-class=\"{'no-groups': !vm.hasAssignees, 'outdated-exercises': (vm.assignItems|filter:vm.hasDeprecatedExercises).length > 0}\"\n" +
    ">\n" +
    "\n" +
    "    <div ng-if=\"\n" +
    "           vm.hasAssignees &&\n" +
    "           vm.assignItems &&\n" +
    "           (vm.assignItems|filter:{selected:true}).length > 0  &&\n" +
    "           (vm.assignItems|filter:vm.hasDeprecatedExercises).length === 0\n" +
    "    \">\n" +
    "\n" +
    "        <span class=\"assign-count\">\n" +
    "            <span translate=\"jsapp.teacher.assignWorksheets\"></span>:\n" +
    "            <span\n" +
    "                ng-bind=\"vm.assignItems && (vm.assignItems|filter:{selected:true}).length\"\n" +
    "                data-cy=\"assign-count\"\n" +
    "            ></span>\n" +
    "        </span>\n" +
    "\n" +
    "        <div bm-group-picker\n" +
    "             ng-if=\"vm.showGroupSelection\"\n" +
    "             groups=\"vm.groups\"\n" +
    "             on-selected=\"vm.onGroupSelected($selectedGroup)\"\n" +
    "             class=\"assign-block\"></div>\n" +
    "\n" +
    "        <div bm-student-picker\n" +
    "             group-id=\"vm.currentGroupId\"\n" +
    "             on-selected=\"vm.onStudentsSelected($students, $allChecked)\"\n" +
    "             class=\"assign-block\"></div>\n" +
    "            <div bm-datetime-picker\n" +
    "                 assign-data=\"vm.assignData\"\n" +
    "                 class=\"assign-block assign-block-large\"></div>\n" +
    "\n" +
    "            <div bm-option-picker\n" +
    "                 assign-data=\"vm.assignData\"\n" +
    "                 ng-if=\"vm.showOptions\"\n" +
    "                 class=\"assign-block\"></div>\n" +
    "\n" +
    "\n" +
    "            <a class=\"button bt-small bf bf-check-medium assign-button\"\n" +
    "               ng-class=\"{'bt-inactive': !vm.canAssign, 'bt-confirm': vm.canAssign}\"\n" +
    "               ng-click=\"(!vm.canAssign) || vm.assign()\"\n" +
    "               data-cy=\"confirm-assignment\"></a>\n" +
    "\n" +
    "            <a class=\"button bt-small bt-abort bf bf-times-medium assign-button\"\n" +
    "               data-cy=\"cancel-assignment\"\n" +
    "               ng-click=\"vm.cancelAssign()\"></a>\n" +
    "\n" +
    "\n" +
    "        <div style=\"clear: left;\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"vm.hasAssignees && vm.assignItems && !(vm.assignItems|filter:{selected:true}).length > 0\"\n" +
    "         class=\"hint-text\"\n" +
    "         translate=\"{{vm.noSelectionText}}\"\n" +
    "         data-cy=\"assign-toolbar-no-selection-text\"\n" +
    "    >\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!vm.hasAssignees\" class=\"hint-text\" data-cy=\"teacher-assignment-empty-group\"\n" +
    "         translate=\"jsapp.teacher.assignment.emptyGroup\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"\n" +
    "            vm.hasAssignees &&\n" +
    "            vm.assignItems &&\n" +
    "            (vm.assignItems|filter:{selected:true}).length > 0 &&\n" +
    "            (vm.assignItems|filter:vm.hasDeprecatedExercises).length > 0\n" +
    "         \"\n" +
    "         class=\"hint-text outdated-exercises\"\n" +
    "         translate=\"jsapp.teacher.assignment.outdatedExercises\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("assignment/templates/auiError.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/templates/auiError.tpl.html",
    "<div translate=\"jsapp.archiveUserInput.downloadError.title\" class=\"archive-download-error-text\"></div>\n" +
    "<div translate=\"jsapp.archiveUserInput.downloadError.text\" class=\"archive-download-error-text\"></div>\n" +
    "<div ng-if=\"'jsapp.archiveUserInput.downloadError.email' | translate\">\n" +
    "    <a ng-href=\"mailto:{{ 'jsapp.archiveUserInput.downloadError.email' | translate }}\">\n" +
    "        {{ \"jsapp.archiveUserInput.downloadError.email\" | translate }}\n" +
    "    </a>\n" +
    "</div>\n" +
    "<div\n" +
    "        ng-if=\"'jsapp.archiveUserInput.downloadError.contactInfo' | translate\"\n" +
    "        translate=\"jsapp.archiveUserInput.downloadError.contactInfo\"\n" +
    "></div>\n" +
    "\n" +
    "<button class=\"aui-btn aui-btn-error\" data-cy=\"aui-btn-error-confirm\" ng-click=\"togglePopup()\">\n" +
    "    OK\n" +
    "</button>\n" +
    "");
}]);

angular.module("assignment/templates/auiReadyForRequest.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/templates/auiReadyForRequest.tpl.html",
    "<div ng-switch=\"status\">\n" +
    "    <div ng-switch-when=\"AVAILABLE\">\n" +
    "        <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.availableText.main\"></p>\n" +
    "\n" +
    "        <div class=\"aui-info-list\">\n" +
    "            <ul>\n" +
    "                <li translate=\"jsapp.archiveUserInput.availableText.submissionDate\"></li>\n" +
    "                <li translate=\"jsapp.archiveUserInput.availableText.userName\"></li>\n" +
    "                <li translate=\"jsapp.archiveUserInput.availableText.results\"></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <button translate=\"jsapp.archiveUserInput.download\"\n" +
    "                ng-click=\"requestArchive(); togglePopup();\"\n" +
    "                data-cy=\"{{assignmentId}}-aui-btn-request-archive\"\n" +
    "                class=\"aui-btn aui-btn-check-status\">\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-switch-when=\"DOWNLOAD_PERIOD_EXPIRED\">\n" +
    "        <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.downloadPeriodExpired.main\"></p>\n" +
    "        <div class=\"aui-separator\"></div>\n" +
    "        <button class=\"aui-btn aui-btn-error\" data-cy=\"aui-btn-download-expired\" ng-click=\"togglePopup()\">\n" +
    "            OK\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-switch-when=\"NOT_YET_AVAILABLE\">\n" +
    "        <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.notAvailableText.main\"></p>\n" +
    "        <div class=\"aui-separator\"></div>\n" +
    "        <button class=\"aui-btn aui-btn-error\" data-cy=\"aui-btn-not-yet-available\" ng-click=\"togglePopup()\">\n" +
    "            OK\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-switch-when=\"SERIES_TOO_LONG\">\n" +
    "        <p class=\"aui-p\" translate=\"jsapp.archiveUserInput.seriesTooLong.main\"></p>\n" +
    "        <div class=\"aui-separator\"></div>\n" +
    "        <button class=\"aui-btn aui-btn-error\" data-cy=\"aui-btn-series-too-long\" ng-click=\"togglePopup()\">\n" +
    "            OK\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-switch-default>\n" +
    "        <div class=\"fa-2x aui-progress-spinner-container aui-ready-for-request-loader\">\n" +
    "            <i class=\"fa fa-circle-o-notch fa-spin aui-progress-spinner\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("assignment/toolbar/datetimePicker/templates/datetimePicker.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/toolbar/datetimePicker/templates/datetimePicker.tpl.html",
    "<div id=\"datetime-picker\" data-cy=\"assign-toolbar-datetime-picker\">\n" +
    "    <div ng-click=\"vm.toggleBalloon()\" data-cy=\"datetime-picker-toggle\">\n" +
    "        <div class=\"assign-block-icon\">\n" +
    "            <i class=\"fa fa-calendar\"></i>\n" +
    "        </div>\n" +
    "        <span class=\"assignment-text\">\n" +
    "            <span ng-if=\"!vm.assignData.dateRange.startDate\"\n" +
    "                  translate=\"jsapp.datepicker.dateRange.header\">\n" +
    "            </span>\n" +
    "            <span>\n" +
    "                <span ng-if=\"vm.assignData.dateRange.startDate\">\n" +
    "                    {{ vm.assignData.dateRange.startDate | date:vm.showTime ? 'dd.MM., HH:mm' : 'dd.MM.yy' }}\n" +
    "                </span>\n" +
    "                <span ng-if=\"vm.assignData.dateRange.endDate\">\n" +
    "                    - {{ vm.assignData.dateRange.endDate | date:vm.showTime ? 'dd.MM., HH:mm' : 'dd.MM.yy' }}\n" +
    "                </span>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         title-key=\"jsapp.datepicker.dateRange.header\"\n" +
    "         class=\"balloon-466\"\n" +
    "         show=\"vm.showBubble\">\n" +
    "\n" +
    "        <div class=\"worksheet-options datetime-picker\">\n" +
    "            <div class=\"calendar-left-head\" translate=\"jsapp.datepicker.dateRange.headerLeft\"></div>\n" +
    "            <div class=\"calendar-right-head\" translate=\"jsapp.datepicker.dateRange.headerRight\"></div>\n" +
    "            <div class=\"calendar calendar-left\"></div>\n" +
    "            <div class=\"calendar calendar-right\"></div>\n" +
    "            <div class=\"timepicker-left\" ng-if=\"vm.showTime\">\n" +
    "                <div class=\"time-selection-wrapper\">\n" +
    "                    <span translate=\"jsapp.datepicker.time\"></span>\n" +
    "                    <select class=\"time-selection\"\n" +
    "                            ng-model=\"vm.startTime.hour\"\n" +
    "                            ng-options=\"h for h in vm.hours\"\n" +
    "                            ng-change=\"vm.setSelectedDatetime()\">\n" +
    "                    </select>\n" +
    "                    :\n" +
    "                    <select class=\"time-selection\"\n" +
    "                            ng-model=\"vm.startTime.minute\"\n" +
    "                            ng-options=\"m for m in vm.minutes\"\n" +
    "                            ng-change=\"vm.setSelectedDatetime()\">\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"timepicker-right\" ng-if=\"vm.showTime\">\n" +
    "                <div class=\"time-selection-wrapper\">\n" +
    "                    <span translate=\"jsapp.datepicker.time\"></span>\n" +
    "                    <select class=\"time-selection\"\n" +
    "                            ng-model=\"vm.endTime.hour\"\n" +
    "                            ng-options=\"h for h in vm.hours\"\n" +
    "                            ng-change=\"vm.setSelectedDatetime()\">\n" +
    "                    </select>\n" +
    "                    :\n" +
    "                    <select class=\"time-selection\"\n" +
    "                            ng-model=\"vm.endTime.minute\"\n" +
    "                            ng-options=\"m for m in vm.minutes\"\n" +
    "                            ng-change=\"vm.setSelectedDatetime()\">\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/toolbar/groupPicker/templates/groupPicker.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/toolbar/groupPicker/templates/groupPicker.tpl.html",
    "<div id=\"group-picker\" data-cy=\"assign-toolbar-group-picker\">\n" +
    "    <div ng-click=\"vm.toggleBalloon()\">\n" +
    "        <div class=\"assign-block-icon\">\n" +
    "            <i class=\"fa fa-group\"></i>\n" +
    "        </div>\n" +
    "        <span class=\"assignment-text\">\n" +
    "            <span ng-if=\"!vm.selectedGroup.value\"\n" +
    "                  translate=\"jsapp.teacher.pleaseChooseGroup\"></span>\n" +
    "            <span ng-if=\"vm.selectedGroup.value\"\n" +
    "                  ng-bind=\"vm.selectedGroup.label\"></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         title-key=\"jsapp.teacher.selectClass\"\n" +
    "         class=\"balloon-220\"\n" +
    "         show=\"vm.showBubble\">\n" +
    "        <div class=\"scroll-container-400\">\n" +
    "            <label for=\"radio-{{ item.value }}\" class=\"list-item\"\n" +
    "                  ng-repeat=\"item in vm.groups\"\n" +
    "                  ng-click=\"vm.selectGroup(item)\"\n" +
    "                  ng-class=\"{'list-item-active': vm.selectedGroup == item}\">\n" +
    "                <div class=\"list-item-row\">\n" +
    "                    <div class=\"list-item-col\">\n" +
    "                        <input  type=\"radio\"\n" +
    "                                id=\"radio-{{ item.value }}\"\n" +
    "                                data-cy=\"radio-{{ item.label }}\"\n" +
    "                                ng-checked=\"vm.selectedGroup == item\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"list-item-col list-item-col-full\">\n" +
    "                        <span ng-bind=\"item.label\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/toolbar/optionPicker/templates/optionPicker.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/toolbar/optionPicker/templates/optionPicker.tpl.html",
    "<div id=\"option-picker\">\n" +
    "    <div ng-click=\"vm.toggleBalloon()\" data-cy=\"option-picker-toggle\">\n" +
    "        <div class=\"assign-block-icon\">\n" +
    "            <i class=\"fa fa-cog\"></i>\n" +
    "        </div>\n" +
    "        <span class=\"assignment-text\">\n" +
    "            <span  translate=\"{{vm.settings.title}}\"></span><span ng-show=\"vm.settings.showStar\">*</span>\n" +
    "        </span>\n" +
    "\n" +
    "    </div>\n" +
    "    <div bm-balloon\n" +
    "         title-key=\"jsapp.worksheets.options.title\"\n" +
    "         show=\"vm.showBubble\"\n" +
    "         class=\"balloon-320\">\n" +
    "        <div id=\"assignment-options-accordion\" accordion close-others=\"false\">\n" +
    "            <div accordion-group\n" +
    "                 ng-repeat=\"optionSet in vm.settings.optionSets\"\n" +
    "                 is-disabled=\"true\"\n" +
    "                 is-open=\"optionSet.show || vm.settings.optionSets.length == 1\"\n" +
    "                 ng-class=\"{'selected': vm.settings.selectedOptionSet === optionSet}\">\n" +
    "\n" +
    "                <!--only show the header when there a multiple optionSets -->\n" +
    "                <div accordion-heading ng-if=\"vm.settings.optionSets.length > 1\">\n" +
    "                    <div class=\"list-item list-item-row\"\n" +
    "                         ng-click=\"vm.selectOptionSet(optionSet)\"\n" +
    "                         data-cy=\"radio-{{ optionSet.title | translate }}\"\n" +
    "                         ng-switch=\"vm.settings.selectedOptionSet === optionSet\">\n" +
    "                        <div class=\"list-item-row\">\n" +
    "                            <div class=\"list-item-col\">\n" +
    "                                <i ng-switch-when=\"true\" class=\"bf bf-check-circle-o assignment-options-type-checkbox\"></i>\n" +
    "                                <i ng-switch-when=\"false\" class=\"bf bf-circle-o assignment-options-type-checkbox\"></i>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-item-col list-item-col-full\">\n" +
    "                                <span class=\"assignment-options-type-label\" translate=\"{{::optionSet.title}}\"></span>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-item-col\">\n" +
    "                                <a class=\"button bt-regular bt-action-light\"\n" +
    "                                   ng-click=\"vm.toggleDetails($event, optionSet)\"\n" +
    "                                   translate=\"{{optionSet.textKey}}\"></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <div class=\"option-info-text\" translate=\"{{::optionSet.description}}\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"assignment-option-item\"\n" +
    "                         ng-repeat=\"option in optionSet.options\"\n" +
    "                         ng-click=\"!option.enabled || vm.optionChanged(option)\">\n" +
    "                        <input type=\"checkbox\"\n" +
    "                               ng-checked=\"option.isChecked\"\n" +
    "                               ng-disabled=\"!option.enabled\"/>\n" +
    "                        <a class=\"fa fa-info-circle info-icon\" ng-click=\"vm.toggleHint($event, option)\"></a>\n" +
    "                        <label>\n" +
    "                            <span translate=\"{{option.title}}\"></span>\n" +
    "\n" +
    "                            <span ng-if=\"option.data\"\n" +
    "                                  class=\"option-data\"\n" +
    "                                  ng-click=\"$event.stopPropagation()\" ng-bind=\"option.data\">\n" +
    "                            </span>\n" +
    "                        </label>\n" +
    "                        <div class=\"option-info-text\" ng-show=\"vm.currentOptionHint === option\" translate=\"{{::option.description}}\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("assignment/toolbar/studentPicker/templates/studentPicker.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("assignment/toolbar/studentPicker/templates/studentPicker.tpl.html",
    "<div id=\"student-picker\" ng-disabled=\"vm.students.length <= 0\" data-cy=\"assign-toolbar-student-picker\">\n" +
    "    <div ng-click=\"vm.students.length <= 0 || vm.toggleBalloon()\" data-cy=\"student-picker-toggle\">\n" +
    "        <div class=\"assign-block-icon\">\n" +
    "            <i class=\"fa fa-user\"></i>\n" +
    "        </div>\n" +
    "        <span class=\"assignment-text\">\n" +
    "           <span data-cy=\"assignment-student-selection-text\" translate=\"{{vm.buttonLabelKey}}\" translate-values=\"{ count: '{{vm.selectedCount}}'}\"></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         title-key=\"jsapp.teacher.selectStudent\"\n" +
    "         class=\"balloon-220\"\n" +
    "         show=\"vm.showBubble\">\n" +
    "        <div class=\"list-item list-item-accent\"\n" +
    "             data-cy=\"assign-toolbar-student-select-all\"\n" +
    "             ng-class=\"{'list-item-active': vm.allChecked}\"\n" +
    "             ng-click=\"vm.allCheckedChanged()\">\n" +
    "            <div class=\"list-item-row\">\n" +
    "                <div class=\"list-item-col\">\n" +
    "                    <input type=\"checkbox\"\n" +
    "                           name=\"student-all\"\n" +
    "                           id=\"student-all\"\n" +
    "                           ng-checked=\"vm.allChecked\">\n" +
    "                    </input>\n" +
    "                </div>\n" +
    "                <div class=\"list-item-col list-item-col-full\">\n" +
    "                    <span translate=\"jsapp.teacher.wholeClass\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"scroll-container-400\">\n" +
    "            <div class=\"list-item\"\n" +
    "                 ng-class=\"{'list-item-active': item.selected}\"\n" +
    "                 ng-repeat=\"item in vm.students\"\n" +
    "                 ng-click=\"vm.toggleSelection(item)\">\n" +
    "                <div class=\"list-item-row\">\n" +
    "                    <div class=\"list-item-col\">\n" +
    "                        <input type=\"checkbox\"\n" +
    "                               name=\"item-{{ $index }}\"\n" +
    "                               id=\"student-{{ item.value }}\"\n" +
    "                               data-cy=\"student-{{ item.username }}\"\n" +
    "                               ng-checked=\"item.selected\">\n" +
    "                        </input>\n" +
    "                    </div>\n" +
    "                    <div class=\"list-item-col list-item-col-full\">\n" +
    "                        <span bm-feature=\"userNameIframe\" ng-bind-html=\"::item.displayNameTrusted | trust\"></span>\n" +
    "                        <span bm-feature=\"!userNameIframe\" ng-bind=\"::item.displayName\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("auth/templates/authorization.button.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("auth/templates/authorization.button.tpl.html",
    "<div ng-click=\"onClick()\" class=\"button bt-regular bt-view-light\">\n" +
    "    <span translate=\"jsapp.authorization.showResults.label\"></span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("auth/templates/coupleCode.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("auth/templates/coupleCode.tpl.html",
    "<div class=\"couple-wrap\">\n" +
    "    <div class=\"couple-intro\">\n" +
    "        <div translate=\"jsapp.user.couplecode.intro\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"couple\">\n" +
    "        <div class=\"couple-install-app\">\n" +
    "            <h2 translate=\"jsapp.user.couplecode.install.title\"\n" +
    "                translate-values=\"{'system': '{{vm.system}}'}\"></h2>\n" +
    "            <a href=\"{{ vm.appStoreLink }}\" target=\"_blank\" class=\"button bt-regular bt-action-light\">\n" +
    "                <i class=\"fa fa-apple\"></i>\n" +
    "                <div class=\"text\">\n" +
    "                    <div class=\"upper\" translate=\"jsapp.user.couplecode.download.ios.title\"></div>\n" +
    "                    <div class=\"lower\" translate=\"jsapp.user.couplecode.download.ios.store\"></div>\n" +
    "                </div>\n" +
    "                <i class=\"fa fa-angle-right\"></i>\n" +
    "            </a>\n" +
    "            <br/>\n" +
    "            <a href=\"{{ vm.playStoreLink }}\" target=\"_blank\" class=\"button bt-regular bt-action-light\">\n" +
    "                <i class=\"fa fa-android\"></i>\n" +
    "                <div class=\"text\">\n" +
    "                    <div class=\"upper\" translate=\"jsapp.user.couplecode.download.android.title\"></div>\n" +
    "                    <div class=\"lower\" translate=\"jsapp.user.couplecode.download.android.store\"></div>\n" +
    "                </div>\n" +
    "                <i class=\"fa fa-angle-right\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"couple-code\">\n" +
    "            <h2 translate=\"jsapp.user.couplecode.code.title\"></h2>\n" +
    "            <div translate=\"jsapp.user.couplecode.code.explanation\"></div>\n" +
    "            <div class=\"code\">{{ vm.coupleCode }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("balloon/templates/balloon.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("balloon/templates/balloon.tpl.html",
    "<div id=\"balloon-container\"\n" +
    "     ng-show=\"vm.isVisible || vm.absolute\" ng-style=\"vm.boxStyle\">\n" +
    "    <div class=\"balloon balloon-top balloon-scroll-content\">\n" +
    "        <img ng-if=\"!vm.absolute\" src=\"./assets/balloon-tip-top.svg\" class=\"balloon-tip balloon-tip-top\"/>\n" +
    "        <div class=\"balloon-head\">\n" +
    "            <div class=\"balloon-header-text\" translate=\"{{::vm.titleKey}}\"></div>\n" +
    "            <div class=\"bt-close\">\n" +
    "                <a class=\"button bt-square bf bf-times-thin\" data-cy=\"close{{vm.isVisible ? '-visible' : ''}}-balloon-btn\" ng-click=\"vm.close()\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-transclude class=\"balloon-body\" ng-style=\"vm.containerStyle\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("books/templates/downloadButton.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("books/templates/downloadButton.tpl.html",
    "<div>\n" +
    "    <a ng-href=\"{{ fullUrl }}\"\n" +
    "       class=\"task-todo bm-list-icon bf-hover\"\n" +
    "       ng-class=\"{'button-single-task': singleMode}\"\n" +
    "       download\n" +
    "       downloadable-via-app\n" +
    "       >\n" +
    "        <span ng-class=\"{'bf bf-download-circle-o': singleMode, 'fa fa-file-o': !singleMode}\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("books/templates/view-text-button.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("books/templates/view-text-button.tpl.html",
    "<div>\n" +
    "    <a title=\"{{ ::chapter.name }}\"\n" +
    "       ng-click=\"onClick()\"\n" +
    "       class=\"task-todo bm-list-icon\"\n" +
    "       ng-class=\"{'button-single-task bf-hover': singleMode}\">\n" +
    "       <span class=\"bf\" ng-class=\"{'bf-play-circle-o': singleMode, 'bf-book-open-leaf': !singleMode}\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("component/list/templates/list.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("component/list/templates/list.tpl.html",
    "<div class=\"scroll-container\">\n" +
    "    <div>\n" +
    "        <div class=\"bm-list\">\n" +
    "            <ul>\n" +
    "                <li ng-class=\"{{::headerClass}}\"\n" +
    "                    class=\"row header-row\" ng-transclude\n" +
    "                >\n" +
    "                </li>\n" +
    "                <bm-list-item ng-repeat=\"item in items\"\n" +
    "                              item=\"item\" renderer=\"{{::itemRenderer}}\">\n" +
    "                </bm-list-item>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("edit/footer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("edit/footer.tpl.html",
    "<a ui-sref=\"{{ vm.backState }}\"\n" +
    "   class=\"button bt-regular bt-view\">\n" +
    "    <span translate=\"{{ vm.abortButtonLabel }}\"></span>\n" +
    "</a>\n" +
    "<a class=\"button bt-regular {{ vm.confirmButtonType ? vm.confirmButtonType : '' }} bt-action\"\n" +
    "   ng-class=\"{'bt-inactive': vm.confirmInactive()}\"\n" +
    "   data-cy=\"{{ vm.name }}-confirm-button\"\n" +
    "   ng-click=\"vm.confirmInactive() || vm.confirm()\">\n" +
    "    <span translate=\"{{ vm.confirmButtonLabel() }}\"></span>\n" +
    "</a>\n" +
    "");
}]);

angular.module("edit/header.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("edit/header.tpl.html",
    "<a ui-sref=\"{{ vm.backState }}\" class=\"button bt-regular bt-view\">\n" +
    "    <i class=\"fa fa-chevron-left\"></i><span translate=\"{{ vm.backButtonLabel }}\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<h1 class=\"inline-centered\" translate=\"{{ vm.title }}\"></h1>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("edit/main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("edit/main.tpl.html",
    "<div class=\"edit-mode-layout\">\n" +
    "    <div ui-view=\"editHeader\" class=\"edit-mode-header\">\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"edit-mode-content-wrap\" id=\"edit-mode-content-wrap\">\n" +
    "        <div ui-view=\"editMain\" class=\"edit-mode-content\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view=\"editFooter\" class=\"edit-mode-footer\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/student/templates/connect.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/student/templates/connect.tpl.html",
    "<!--<div class=\"list-container\" ng-switch=\"vm.schoolGroups.length > 0\">-->\n" +
    "\n" +
    "    <!--<div ng-switch-when=\"true\" class=\"bm-task-list list content-padding\">-->\n" +
    "        <!--<ul>-->\n" +
    "            <!--<li>-->\n" +
    "                <!--<div class=\"row\">-->\n" +
    "                    <!--<div class=\"col col-name col-name-oneline\"-->\n" +
    "                        <!--translate=\"jsapp.teacher.groupManager.connect.instruction\"-->\n" +
    "                        <!--translate-values=\"{'schoolName': 'SCHOOLNAME'}\">-->\n" +
    "                    <!--</div>-->\n" +
    "                <!--</div>-->\n" +
    "            <!--</li>-->\n" +
    "            <!--<li ng-repeat=\"school in vm.schoolGroups\">-->\n" +
    "                <!--<bm-simple-list-item-->\n" +
    "                    <!--name=school.name-->\n" +
    "                    <!--selectable=\"multi\"-->\n" +
    "                    <!--selectable-object=school-->\n" +
    "                    <!--disabled=school.disabled-->\n" +
    "                    <!--disabled-hint=\"{{ 'jsapp.teacher.groupManager.connect.alreadyConnected' | translate }}\">-->\n" +
    "                <!--</bm-simple-list-item>-->\n" +
    "            <!--</li>-->\n" +
    "        <!--</ul>-->\n" +
    "    <!--</div>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "\n" +
    "<div class=\"centered-container\">\n" +
    "    <div class=\"centered-container-title\" translate=\"jsapp.student.groupManager.noGroups.body\"></div>\n" +
    "    <select class=\"centered-container-control\" ng-options=\"g.name for g in vm.schoolGroups\" ng-model=\"vm.selectedGroup\"></select>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("group/dtdl/student/templates/list.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/student/templates/list.tpl.html",
    "<div class=\"bm-task-list list content-padding\">\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <div class=\"header-row\">\n" +
    "                <div class=\"col col-name-big\">\n" +
    "                    <span translate=\"jsapp.student.groupManager.classList.header\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col col-button\">\n" +
    "                    <a class=\"button bt-regular bt-action\"\n" +
    "                       ng-class=\"{'bt-inactive': vm.joinGroupLoading}\"\n" +
    "                       ng-click=\"vm.onJoinGroup()\"\n" +
    "                       data-cy=\"join-group-button\">\n" +
    "                        <span translate=\"jsapp.student.groupManager.classList.join\"></span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li ng-repeat=\"g in vm.groups | orderBy:'name'\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col col-name col-light col-name-oneline\">\n" +
    "                    {{ ::g.name }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/student/templates/listEmpty.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/student/templates/listEmpty.tpl.html",
    "<div class=\"missing-data-container\">\n" +
    "    <div class=\"missing-data-hint\" translate=\"jsapp.student.groupManager.noGroups.header\"></div>\n" +
    "    <div class=\"missing-data-hint-subinfo\" translate=\"jsapp.student.groupManager.noGroups.body\"></div>\n" +
    "\n" +
    "    <select class=\"missing-data-button\"\n" +
    "        ng-options=\"g.name for g in vm.schoolGroups\"\n" +
    "        ng-model=\"vm.selectedGroup\"\n" +
    "		ng-change=\"onGroupSelected()\">\n" +
    "    </select>\n" +
    "\n" +
    "    <div class=\"missing-data-button\">\n" +
    "        <a class=\"button bt-regular bt-action\"\n" +
    "           ng-class=\"{'bt-inactive': vm.confirmInactive()}\"\n" +
    "           ng-click=\"vm.confirm()\">\n" +
    "            <span translate=\"jsapp.student.groupManager.join.confirmButton\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("group/dtdl/teacher/templates/connect.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/connect.tpl.html",
    "<div class=\"list-container\" ng-switch=\"vm.schoolGroups.length > 0\">\n" +
    "\n" +
    "    <div ng-switch-when=\"true\" class=\"bm-task-list list content-padding\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-name col-name-oneline\"\n" +
    "                        translate=\"jsapp.teacher.groupManager.connect.instruction\"\n" +
    "                        translate-values=\"{'schoolName': 'SCHOOLNAME'}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"school in vm.schoolGroups\">\n" +
    "                <div bm-simple-list-item\n" +
    "                    name=\"school.name\"\n" +
    "                    selectable=\"multi\"\n" +
    "                    selectable-object=\"school\"\n" +
    "                    disabled=\"school.disabled\"\n" +
    "                    disabled-hint=\"{{ 'jsapp.teacher.groupManager.connect.alreadyConnected' | translate }}\"\n" +
    "                    on-selection-change=\"vm.onSelected\">\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/list.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/list.tpl.html",
    "<div class=\"options-bar\">\n" +
    "        <select ng-options=\"vm.getGroupLabel(g) for g in vm.groups | orderBy: 'name' track by g.id\"\n" +
    "            ng-model=\"vm.selectedGroup\"\n" +
    "            ng-change=\"vm.selectGroup()\"\n" +
    "            >\n" +
    "    </select>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"list-container\" ng-switch=\"vm.groupMembers.length > 0\">\n" +
    "\n" +
    "    <div ng-switch-when=\"true\" class=\"bm-task-list list content-padding\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <div class=\"header-row\">\n" +
    "                    <div class=\"col col-light col-name\"\n" +
    "                        translate=\"jsapp.teacher.groupManager.studentList.header\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"member in vm.groupMembers\">\n" +
    "                <bm-simple-list-item name=\"member.displayName\">\n" +
    "                </bm-simple-list-item>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div ng-switch-when=\"false\" class=\"missing-data-container\">\n" +
    "        <div translate=\"jsapp.teacher.groupManager.noMembers.header\" class=\"missing-data-hint\"></div>\n" +
    "        <div translate=\"jsapp.teacher.groupManager.noMembers.body\" class=\"missing-data-hint-subinfo\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/listEmpty.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/listEmpty.tpl.html",
    "<div class=\"missing-data-container\">\n" +
    "    <div translate=\"jsapp.teacher.groupManager.noGroups.header\" class=\"missing-data-hint\"></div>\n" +
    "    <div translate=\"jsapp.teacher.groupManager.noGroups.body\" class=\"missing-data-hint-subinfo\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/menu.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/menu.tpl.html",
    "<div class=\"actions-group\">\n" +
    "    <a href=\"\"\n" +
    "       class=\"button bt-link\"\n" +
    "       ng-click=\"vm.onConnectToGroup()\">\n" +
    "        <i class=\"fa fa-share-alt\"></i>\n" +
    "        <span translate=\"jsapp.teacher.groupManager.actions.connectWithClass\"></span>\n" +
    "    </a>\n" +
    "    <a href=\"\"\n" +
    "       class=\"button bt-link\"\n" +
    "       ng-click=\"vm.onCreateNewGroup()\">\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        <span translate=\"jsapp.teacher.groupManager.actions.createNewClass\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"vm.showGroupOptions\"\n" +
    "     class=\"actions-group\">\n" +
    "    <h4 translate=\"jsapp.teacher.groupManager.actions.class.header\"></h4>\n" +
    "    <a href=\"\"\n" +
    "       class=\"button bt-link\"\n" +
    "       translate=\"jsapp.teacher.groupManager.actions.class.changeName\"\n" +
    "       ng-click=\"vm.onEditGroup()\"></a>\n" +
    "    <a href=\"\"\n" +
    "       class=\"button bt-link\"\n" +
    "       translate=\"jsapp.teacher.groupManager.actions.class.disconnect\"\n" +
    "       ng-click=\"vm.onDisconnectFromGroup()\"></a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"vm.showMemberOptions\"\n" +
    "     class=\"actions-group\">\n" +
    "    <h4 translate=\"jsapp.teacher.groupManager.actions.student.header\"></h4>\n" +
    "    <a href=\"\"\n" +
    "       class=\"button bt-link\"\n" +
    "       translate=\"jsapp.teacher.groupManager.actions.student.remove\"\n" +
    "       ng-click=\"vm.onRemoveMembers()\"></a>\n" +
    "    <a href=\"\"\n" +
    "       ng-if=\"vm.showUpdatePasswords\"\n" +
    "       class=\"button bt-link\"\n" +
    "       translate=\"jsapp.teacher.groupManager.actions.student.passwords\"\n" +
    "       ng-click=\"vm.onUpdatePasswords()\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/naming.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/naming.tpl.html",
    "<div class=\"create-class-wrap\">\n" +
    "    <div class=\"create-class-box\">\n" +
    "        <div ng-if=\"vm.schools && vm.schools.length > 1\">\n" +
    "            <div class=\"instruction\" translate=\"jsapp.teacher.groupManager.createNewClass.instructionSchool\"></div>\n" +
    "            <select ng-model=\"vm.group.schoolId\">\n" +
    "                <option value=\"--select--\"  translate=\"jsapp.teacher.groupManager.createNewClass.selectSchool\"></option>\n" +
    "                <option ng-repeat=\"school in vm.schools | orderBy:name\" ng-value=\"school.schoolId\">{{school.name}}</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "        <div class=\"instruction\" translate=\"{{ vm.instruction }}\"></div>\n" +
    "        <input name=\"groupName\" ng-model=\"vm.group.groupName\" type=\"text\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/removeMembers.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/removeMembers.tpl.html",
    "<div class=\"list-container\" ng-switch=\"vm.groupMembers.length > 0\">\n" +
    "    <div ng-switch-when=\"true\" class=\"bm-task-list list content-padding\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-name col-name-oneline\"\n" +
    "                        translate=\"jsapp.teacher.groupManager.removeMembers.instruction\"\n" +
    "                        translate-values=\"{'className': vm.groupName}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"member in vm.groupMembers\">\n" +
    "                <bm-simple-list-item\n" +
    "                    name=member.displayName\n" +
    "                    selectable=\"multi\"\n" +
    "                    mode=\"warning\"\n" +
    "                    on-selection-change=\"vm.onSelectionChanged\"\n" +
    "                    selectable-object=member>\n" +
    "                </bm-simple-list-item>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/twoColMenuRight.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/twoColMenuRight.tpl.html",
    "<div id=\"content\" ui-view=\"content\">\n" +
    "\n" +
    "</div>\n" +
    "<div id=\"menu\" ui-view=\"menu\"></div>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/updatePasswords.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/updatePasswords.tpl.html",
    "<bm-list class=\"update-passwords\"\n" +
    "         items=\"vm.groupMembers\"\n" +
    "         selectable=\"true\"\n" +
    "         item-renderer=\"bm-update-passwords-item-renderer\">\n" +
    "    <div class=\"col col-name col-name-oneline\">\n" +
    "        <span translate=\"jsapp.teacher.groupManager.passwords.instruction\"\n" +
    "              translate-values=\"{'className': vm.groupName}\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "</bm-list>\n" +
    "");
}]);

angular.module("group/dtdl/teacher/templates/updatePasswordsItemRenderer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("group/dtdl/teacher/templates/updatePasswordsItemRenderer.tpl.html",
    "<div class=\"col\">\n" +
    "    <span>{{::item.displayName }}</span>\n" +
    "    <span class=\"group-member-username\"\n" +
    "          ng-if=\"item.displayName !== item.username\">({{::item.username}})</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col fixed-width\"\n" +
    "    >\n" +
    "\n" +
    "    <a class=\"button bt-regular bt-action-light\"\n" +
    "       ng-class=\"{down:item.bmListSelected}\"\n" +
    "       ng-click=\"showUpdatePassword(item);\"\n" +
    "       id=\"bt-password-{{::item._id}}\"\n" +
    "       translate=\"jsapp.teacher.groupManager.passwords.passwordButton\"></a>\n" +
    "\n" +
    "    <div bm-balloon\n" +
    "         title-key=\"jsapp.teacher.groupManager.groupMember.passwordForm.title\"\n" +
    "         class=\"balloon-260\"\n" +
    "         orientation=\"left\"\n" +
    "         link-element=\"bt-password-{{::item._id}}\"\n" +
    "         box-element=\"edit-mode-content-wrap\"\n" +
    "         show=\"item.bmListSelected\">\n" +
    "        <group-member-password member=\"item\" show=\"item.bmListSelected\"></group-member-password>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("logout/templates/logout.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("logout/templates/logout.tpl.html",
    "<div class=\"logout-wrap\">\n" +
    "    <div class=\"missing-data-container\">\n" +
    "        <div translate=\"jsapp.logout.title\" class=\"missing-data-hint\"></div>\n" +
    "        <div translate=\"jsapp.logout.info\" class=\"missing-data-hint-subinfo\"></div>\n" +
    "        <div class=\"bf bf-betty-cheer betty\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("lti/templates/assign.view.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("lti/templates/assign.view.tpl.html",
    "<div>\n" +
    "    <bm-search-bar\n" +
    "            ng-if=\"!assignedLob\"\n" +
    "            placeholder=\"Suche\"\n" +
    "            select-filter-text=\"jsapp.filter.supertopic\"\n" +
    "            on-search-changed=\"updateResults(text, filter)\"\n" +
    "            >\n" +
    "    </bm-search-bar>\n" +
    "\n" +
    "    <div class=\"scroll-container\" ng-class=\"{'headspace': !assignedLob}\">\n" +
    "        <bm-list ng-if=\"!assignedLob\"\n" +
    "                 ng-show=\"currentText\"\n" +
    "                 items=\"filteredResults\"\n" +
    "                 item-renderer=\"bm-lti-item-renderer\">\n" +
    "            <div class=\"col col-name col-name-oneline\">{{ filteredResults.length }} <span translate=\"jsapp.pdf.results\"></span>:</div>\n" +
    "        </bm-list>\n" +
    "\n" +
    "        <div ng-if=\"!assignedLob\"\n" +
    "             ng-hide=\"currentText\"\n" +
    "             class=\"lti-info-container\">\n" +
    "\n" +
    "            <div class=\"highlight\" translate=\"jsapp.lti.search.info.title\"></div>\n" +
    "            <div translate=\"jsapp.lti.search.info.description\"></div>\n" +
    "            <img ng-src=\"assets/lti-preview.png\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"assignedLob\"\n" +
    "             class=\"lti-info-container\">\n" +
    "\n" +
    "            <p translate=\"jsapp.lti.assigned.info.pre\"></p>\n" +
    "            <p class=\"highlight\">{{::assignedLob.name}}</p>\n" +
    "            <p translate=\"jsapp.lti.assigned.info.post\"></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lti/templates/content.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("lti/templates/content.tpl.html",
    "<div>\n" +
    "\n" +
    "    <div id=\"header\" ng-show=\"showHeader\">\n" +
    "        <div class=\"logo\" />\n" +
    "        <div class=\"title\">\n" +
    "            <h1 translate=\"jsapp.lti.header.title\"></h1>\n" +
    "            <p>\n" +
    "                <span translate=\"jsapp.lti.header.info1\"></span>\n" +
    "                <a class=\"button bt-text-link\"\n" +
    "                   target=\"_blank\"\n" +
    "                   translate=\"jsapp.lti.header.link.website\">\n" +
    "                    Website\n" +
    "                </a>\n" +
    "                <span translate=\"jsapp.lti.header.info2\"></span>\n" +
    "                <a class=\"button bt-text-link\"\n" +
    "                   target=\"_blank\"\n" +
    "                   translate=\"jsapp.lti.header.link.support\">\n" +
    "                </a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"content\" ng-class=\"{'no-header': !showHeader}\" ng-switch=\"displayMode\">\n" +
    "\n" +
    "        <bm-lti-assign-view\n" +
    "            ng-switch-when=\"0\">\n" +
    "        </bm-lti-assign-view>\n" +
    "\n" +
    "        <div ng-switch-when=\"1\"\n" +
    "             class=\"lti-info-container\">\n" +
    "            <p translate=\"jsapp.lti.alreadyAssigned.info.pre\"></p>\n" +
    "            <p class=\"highlight\" ng-bind=\"::lob.name\"></p>\n" +
    "            <p translate=\"jsapp.lti.alreadyAssigned.info.post\"></p>\n" +
    "\n" +
    "            <bm-exercise-preview-button lob=\"lob\"></bm-exercise-preview-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <start-container\n" +
    "                ng-switch-when=\"2\"\n" +
    "                lti-data=\"ltiData\"\n" +
    "                on-start-button-changed=\"onStartButtonChanged($show)\">\n" +
    "        </start-container>\n" +
    "\n" +
    "\n" +
    "        <div ng-switch-when=\"3\" class=\"scroll-container\">\n" +
    "            <div class=\"lti-info-container\">\n" +
    "                <p translate=\"jsapp.lti.student.noAssignment\"></p>\n" +
    "                <div class=\"bf bf-betty-astonished lti-betty\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lti/templates/lobItemRenderer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("lti/templates/lobItemRenderer.tpl.html",
    "<div class=\"col\">\n" +
    "    <span>{{::item.name }}</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col fixed-width\">\n" +
    "\n" +
    "    <bm-exercise-preview-button lob=\"item\"></bm-exercise-preview-button>\n" +
    "\n" +
    "\n" +
    "    <a class=\"button bt-regular bt-action-light\"\n" +
    "       ng-click=\"onLobSelected()\"\n" +
    "       target=\"bm-pdf\"\n" +
    "       translate=\"jsapp.lti.search.item.assign\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lti/templates/startContainer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("lti/templates/startContainer.tpl.html",
    "<div ng-if=\"showPlayButton\" class=\"scroll-container\">\n" +
    "    <div class=\"lti-info-container\">\n" +
    "        <a class=\"bf bf-play-circle-o lti-start-button\" ng-click=\"startPlayer()\"></a>\n" +
    "        <p translate=\"{{isMobile ? 'jsapp.lti.mobile.start' : 'jsapp.lti.student.start'}}\"></p>\n" +
    "        <div class=\"bf bf-betty-cheer lti-betty\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"!showPlayButton\"\n" +
    "     class=\"seriesPlayerWrapper\">\n" +
    "    <div id=\"seriesPlayer\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("navigation/templates/header.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("navigation/templates/header.tpl.html",
    "<div id=\"header\">\n" +
    "    <div id=\"main-navi\">\n" +
    "        <ul>\n" +
    "            <li bm-main-navi-item ng-repeat=\"menuItem in vm.naviPoints\" ng-if=\"menuItem.show\"></li>\n" +
    "        </ul>\n" +
    "        <div ng-if=\"vm.showPoints\" id=\"success-total\" success-total></div>\n" +
    "        <div bm-user-navi></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div bm-sub-navi></div>\n" +
    "");
}]);

angular.module("navigation/templates/mainNaviItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("navigation/templates/mainNaviItem.tpl.html",
    "<div ui-route=\"{{ vm.menuItem.isExternalLink ? undefined : vm.menuItem.href }}\"\n" +
    "    ng-class=\"{active: !vm.menuItem.isExternalLink && vm.menuItem.isActive}\">\n" +
    "    <a href=\"{{ vm.menuItem.isExternalLink ? vm.menuItem.href : '#' + vm.menuItem.href }}\"\n" +
    "       ng-attr-target=\"{{ vm.menuItem.isExternalLink ? '_blank' : undefined }}\"\n" +
    "       open-popup=\"{{ vm.menuItem.openPopup }}\"\n" +
    "       in-app-link=\"{{ vm.menuItem.inAppLink }}\"\n" +
    "       data-cy=\"{{ vm.menuItem.id }}\"\n" +
    "       ng-click=\"{{ vm.menuItem.trackNavEvent }}\">\n" +
    "        <span ng-if=\"vm.menuItem.hint\" class=\"count-small count-important\" ng-bind=\"vm.menuItem.hint\"></span>\n" +
    "        <span class=\"{{::vm.menuItem.icon}}\">\n" +
    "            <svg ng-if=\"vm.menuItem.id === 'interactiveWhiteboard'\" width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <path d=\"M3.6 2.4H20.4V15.6H22.8V1.5C22.8 0.67275 22.1272 0 21.3 0H2.7C1.87275 0 1.2 0.67275 1.2 1.5V15.6H3.6V2.4ZM23.4 16.8H18V14.4H10.8V16.8H0.6C0.2685 16.8 0 17.0685 0 17.4V18.6C0 18.9315 0.2685 19.2 0.6 19.2H23.4C23.7315 19.2 24 18.9315 24 18.6V17.4C24 17.0685 23.7315 16.8 23.4 16.8Z\" fill=\"white\"/>\n" +
    "            </svg>\n" +
    "        </span>\n" +
    "        <span class=\"main-navi-label\" translate=\"{{ vm.menuItem.title }}\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("navigation/templates/subNavi.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("navigation/templates/subNavi.tpl.html",
    "<div id=\"sub-navi\" ng-show=\"vm.subNavi.show && !contentHeader\">\n" +
    "\n" +
    "    <a bm-subnavi-item ng-repeat=\"menuItem in vm.subNavi.currentItems\" \n" +
    "    data-cy=\"navigation-{{ menuItem.dataCy }}\"></a>\n" +
    "</div>");
}]);

angular.module("navigation/templates/subNaviItem.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("navigation/templates/subNaviItem.tpl.html",
    "<a class=\"{{ vm.menuItem.cssClass }}\"\n" +
    "    ng-if=\"vm.menuItem.show\"\n" +
    "    ng-class=\"{active: $uiRoute || (location.path().lastIndexOf(vm.menuItem.href) > -1) || (location.path().lastIndexOf('class-books') > -1 && vm.menuItem.href.lastIndexOf('class-books') > -1)}\"\n" +
    "    ng-href=\"{{ '#' + vm.menuItem.href }}\">\n" +
    "    <i ng-if=\"vm.menuItem.icon\" ng-class=\"vm.menuItem.icon\"></i><span translate=\"{{ vm.menuItem.title }}\"></span>\n" +
    "</a>\n" +
    "");
}]);

angular.module("navigation/templates/userNavi.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("navigation/templates/userNavi.tpl.html",
    "<div id=\"main-navi-toggle\"\n" +
    "     ng-class=\"{'nav-open': navOpen, 'expandable': vm.expandable}\"\n" +
    "     ng-click=\"navOpen=!navOpen\"\n" +
    "     data-cy=\"main-navi-toggle\"\n" +
    "     ng-mouseover=\"!inAppMode && !isMobileBrowser ? (navOpen=true) : ''\"\n" +
    "     ng-mouseleave=\"!inAppMode && !isMobileBrowser ? (navOpen=false) : ''\">\n" +
    "    <span ng-if=\"::vm.expandable === false && displayNameTrusted\" class=\"username\" ng-bind-html=\"::displayNameTrusted | trust\"></span>\n" +
    "    <span ng-if=\"::vm.expandable === false && displayName\" class=\"username\" ng-bind=\"::displayName\"></span>\n" +
    "    <a ng-repeat=\"userNavItem in vm.userNavi\"\n" +
    "       ng-if=\"::vm.expandable === true\"\n" +
    "       class=\"icon {{::userNavItem.icon }}\"\n" +
    "       ng-href=\"{{::userNavItem.href}}\"\n" +
    "       data-cy=\"{{::userNavItem.dataCy }}\"\n" +
    "       open-popup=\"{{::userNavItem.openPopup }}\"\n" +
    "       ng-click={{userNavItem.onClick}}>{{ userNavItem.title }}</a>\n" +
    "    <a class=\"settings-button\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/htmlContainer.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/htmlContainer.tpl.html",
    "<div class=\"lightbox-body-html-content\" ng-include=\"htmlContent\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/previewExercise/templates/exercise.preview.button.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/previewExercise/templates/exercise.preview.button.tpl.html",
    "<a id=\"preview-{{customLobId}}\" class=\"bt-preview\" ng-click=\"onClick()\"></a>\n" +
    "\n" +
    "<div bm-balloon\n" +
    "     orientation=\"left\"\n" +
    "     show=\"showBalloon\"\n" +
    "     title-key=\"{{::lob.name}}\"\n" +
    "     link-element=\"preview-{{customLobId}}\"\n" +
    "     selection-style=\"active\"\n" +
    "     box-element=\"content\"\n" +
    "     class=\"balloon-560\">\n" +
    "\n" +
    "    <div ng-repeat=\"image in result\" class=\"preview-container\">\n" +
    "        <h1><span translate=\"jsapp.books.task\"></span> {{$index +1 }}</h1>\n" +
    "        <img ng-src=\"{{::image}}\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("popup/previewExercise/templates/exercise.preview.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/previewExercise/templates/exercise.preview.tpl.html",
    "<div ng-controller=\"ExercisePreviewPopupController\" style=\"max-height: 300px; width: 515px; overflow: auto\">\n" +
    "    <div ng-repeat=\"image in images\">\n" +
    "        <img ng-src=\"{{::image}}\" style=\"max-width: 500px\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("popup/showCreateOrEditFolderLightbox/templates/createOrEditFolder.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/showCreateOrEditFolderLightbox/templates/createOrEditFolder.tpl.html",
    "<div \n" +
    "    class=\"create-or-edit-folder-lightbox\"\n" +
    "    data-cy=\"create-or-edit-folder-form\"\n" +
    "    ng-controller=\"CreateOrEditFolderController\">\n" +
    "    <form class=\"form\"\n" +
    "            name=\"form\"\n" +
    "            ng-submit=\"handleFolderSubmit()\"\n" +
    "            autocomplete=\"off\">\n" +
    "        <div class=\"form-row\">\n" +
    "            <span translate>{{message}}</span>\n" +
    "        </div>\n" +
    "        <form-item\n" +
    "                item-id=\"{{mode}}-folder\"\n" +
    "                item-name=\"folder_name\"\n" +
    "                item-type=\"text\"\n" +
    "                item-attributes=\"autofocus=autofocus\"\n" +
    "                item-validation-min-length=\"1\"\n" +
    "                item-validation-errors=\"createOrEditValidation\"\n" +
    "                item-validation-required=\"true\"\n" +
    "                item-no-validation=\"true\"\n" +
    "                item-data-cy=\"worksheet-{{mode}}-folder-input\">\n" +
    "        </form-item>\n" +
    "        <div class=\"form-row\">\n" +
    "            <button id=\"folder-name-submit\"\n" +
    "                    ng-class=\"{'bt-inactive': form.$invalid}\"\n" +
    "                    class=\"button bt-regular bt-confirm\"\n" +
    "                    translate=\"{{button}}\"\n" +
    "                    data-cy=\"worksheet-{{mode}}-folder-submit-button\"\n" +
    "                    ng-disabled=\"form.$invalid\">\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/showDestinationFoldersListLightbox/templates/destinationFoldersList.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/showDestinationFoldersListLightbox/templates/destinationFoldersList.tpl.html",
    "<div class=\"destination-folders-list-lightbox bm-task-list list\" ng-controller=\"DestinationFoldersListController\">\n" +
    "    <ul>\n" +
    "        <a href=\"\"\n" +
    "            ng-repeat=\"folder in folders\"\n" +
    "            data-cy=\"move-worksheet-to-folder-{{folder.id}}\"\n" +
    "            ng-click=\"moveWorksheet(folder)\"\n" +
    "        >\n" +
    "            <li class=\"folder-list-item\">\n" +
    "            <span class=\"bm-list-icon fa fa-arrow-circle-right\"\n" +
    "                title=\"{{ 'jsapp.folders.bubble.move.button' | translate:{folderName: folder.name} }}\"></span>\n" +
    "            <span class=\"destination-folder-name\">{{ folder.name }}</span>\n" +
    "            </li>\n" +
    "        </a>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/showFemReferenceLightbox/femReferenceLightbox.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/showFemReferenceLightbox/femReferenceLightbox.tpl.html",
    "<bm-window-lightbox-nav list=\"fems\"\n" +
    "                 on-selected=\"vm.onSelect($selected)\"></bm-window-lightbox-nav>\n" +
    "<div class=\"lightbox-body-content\" ng-class=\"{'single-fem': fems.length === 1}\">\n" +
    "    <iframe src=\"{{ femRefUrl }}\" width=\"100%\" height=\"100%\"></iframe>\n" +
    "</div>");
}]);

angular.module("popup/showFemReferenceLightbox/lightboxnav.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/showFemReferenceLightbox/lightboxnav.tpl.html",
    "<div class=\"window-lightbox-nav\" ng-class=\"{'single-fem': vm.list.length === 1}\">\n" +
    "    <div class=\"list-item\"\n" +
    "         ng-repeat=\"item in vm.list\"\n" +
    "         ng-class=\"{'list-item-active': vm.selectedItem == item}\"\n" +
    "         ng-click=\"vm.select(item)\">\n" +
    "        <!--<i class=\"fa fa-book\"></i>-->\n" +
    "        <label>{{::item.title}}</label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/showTextReferenceLightbox/textReferenceLightbox.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/showTextReferenceLightbox/textReferenceLightbox.tpl.html",
    "<div class=\"lightbox-body-content\">\n" +
    "    <div class=\"book-static-content-wrap\">\n" +
    "        <div class=\"book-static-content\">\n" +
    "\n" +
    "            <div class=\"intro-chapter-box\">\n" +
    "\n" +
    "                <div class=\"chunk\" ng-include=\"includeUrl\">\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("popup/templates/archiveUserInputPopups.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/templates/archiveUserInputPopups.tpl.html",
    "<div class=\"user-archive-pending-request\" ng-if=\"isUserArchiveDownloadRequest || isUserArchiveDownloadFail\">\n" +
    "    <div class=\"progress-info-container\">\n" +
    "        <div ng-if=\"isUserArchiveDownloadInProgress\">\n" +
    "            <div class=\"progress-text\" translate=\"jsapp.archiveUserInput.progressText\"></div>\n" +
    "            <div class=\"fa-2x progress-spinner-container\">\n" +
    "                <i class=\"fa fa-circle-o-notch fa-spin progress-spinner\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"isUserArchiveDownloadFail\" class=\"archive-download-error\">\n" +
    "            <div translate=\"jsapp.archiveUserInput.downloadError.title\" class=\"archive-download-error-text\"></div>\n" +
    "            <div translate=\"jsapp.archiveUserInput.downloadError.text\" class=\"archive-download-error-text\"></div>\n" +
    "            <div ng-if=\"'jsapp.archiveUserInput.downloadError.email' | translate\">\n" +
    "                <a ng-href=\"mailto:{{ 'jsapp.archiveUserInput.downloadError.email' | translate }}\">\n" +
    "                    {{ \"jsapp.archiveUserInput.downloadError.email\" | translate }}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    ng-if=\"'jsapp.archiveUserInput.downloadError.contactInfo' | translate\"\n" +
    "                    translate=\"jsapp.archiveUserInput.downloadError.contactInfo\"\n" +
    "            ></div>\n" +
    "            <div class=\"archive-download-error-ok-btn\">\n" +
    "                <button ng-click=\"resetUserArchivePopupsState()\">OK</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/templates/popup.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/templates/popup.tpl.html",
    "<div id=\"popup\" ng-show=\"show && modal\">\n" +
    "    <div class=\"popup-overlay\" ng-click=\"hideContent()\" ng-show=\"show && modal\"></div>\n" +
    "    <div class=\"popup-container\" ng-style=\"popupStyle\">\n" +
    "\n" +
    "        <div class=\"popup-header\">\n" +
    "            <div class=\"popup-header-text\" translate=\"{{title}}\"></div>\n" +
    "            <div class=\"bt-close\">\n" +
    "                <a class=\"button bt-square bf bf-times-thin\" ng-click=\"hideContent()\" data-cy=\"close-popup\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"popup-content\">\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("popup/templates/window-lightbox.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("popup/templates/window-lightbox.tpl.html",
    "<div id=\"window-lightbox-container\" ng-class=\"[{'hidden':!lightboxVisible},lightboxContainerStyle]\">\n" +
    "    <div class=\"overlay\" ng-click=\"hideContent()\"></div>\n" +
    "    <div class=\"overlay-content\" ng-click=\"$event.target == $event.delegateTarget && hideContent()\">\n" +
    "        <div class=\"lightbox-wrapper\">\n" +
    "            <div class=\"lightbox-header\">\n" +
    "                <h3 translate=\"{{title}}\"></h3>\n" +
    "                <div class=\"bt-close\">\n" +
    "                    <a class=\"button bt-square bf bf-times-thin\" ng-click=\"hideContent()\"></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"lightbox-body\">\n" +
    "                <div class=\"lightbox-body-content\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/templates/bar.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("search/templates/bar.tpl.html",
    "<div class=\"search-container\">\n" +
    "    <div class=\"list-search-showy\">\n" +
    "        <label for=\"searchInput\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "        </label>\n" +
    "        <input id=\"searchInput\"\n" +
    "               type=\"search\"\n" +
    "               size=\"40\"\n" +
    "               ng-model=\"searchText\"\n" +
    "               placeholder=\"{{ ::placeholder | translate }}\"\n" +
    "               ng-model-options=\"{ debounce: 800 }\"\n" +
    "               ng-trim=\"false\"/>\n" +
    "    </div>\n" +
    "    <div class=\"filter-container\" ng-if=\"filters\">\n" +
    "        <a class=\"button fa fa-times-circle\" ng-class=\"{false: 'reset-disabled', true: 'reset-enabled'}[!!selectedFilter]\"\n" +
    "           ng-click=\"resetFilter()\"></a>\n" +
    "        <div class=\"filter\">\n" +
    "            <select ng-model=\"selectedFilter\"\n" +
    "                    ng-options=\"f.label group by f.parent for f in filters | orderBy: ['parent', 'latinisedLabel']\">\n" +
    "                <option value=\"\" translate=\"{{::selectFilterText}}\" selected=\"selected\"></option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
