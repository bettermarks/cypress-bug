angular.module('templates-center_app', [
  'center/teacher/partials/groupsWithBooksList.tpl.html',
  'center/teacher/partials/groupsWithBooksListRanking.tpl.html',
  'center/teacher/partials/studentsList.tpl.html',
  'center/teacher/partials/todoParticipantsList.tpl.html',
  'center/teacher/partials/trial.tpl.html',
  'center/teacher/partials/welcome.tpl.html'
]);

angular.module('center/teacher/partials/groupsWithBooksList.tpl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      'center/teacher/partials/groupsWithBooksList.tpl.html',
      '<div class="sidebar-list" scroll-to=".list-item-active">\n' +
        '    <div id="navi-sidebar">\n' +
        '        <!--<div class="allocations-hint" ng-show="allocationsHint.show" translate="jsapp.teacher.noBooksAllocatedHint" translate-values="{\'p\': \'<p>\', \'pp\': \'</p>\'}"></div>-->\n' +
        '        <a class="list-item list-item-with-info"\n' +
        '           ng-repeat="group in groupsWithBooks"\n' +
        '           href="#/{{ groupUrl }}/{{ group.id }}"\n' +
        '           bindonce\n' +
        '           ng-class="{\'list-item-active\':navigationStates.currentGroupId == group.id}">\n' +
        '            <div class="name" ng-bind="::group.name"></div>\n' +
        '            <div ng-if="withAllocatedBooks" class="percentage bubble"><span class="count count-light"> {{ group.books.length | number:0 }}</span>\n' +
        '            </div>\n' +
        '        </a>\n' +
        '        <div bm-feature="teacherSchoolyearReport" ng-show="archiveAllowed">\n' +
        '            <a class="list-item list-item-with-info"\n' +
        '               href="#/archive"\n' +
        '               ui-sref="twoCol.dashboard.archive"\n' +
        '               ui-sref-active="list-item-active">\n' +
        '               <i class="fa fa-archive"></i><span translate="jsapp.teacher.archive.title"></span>\n' +
        '            </a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        ''
    );
  }
]);

angular
  .module('center/teacher/partials/groupsWithBooksListRanking.tpl.html', [])
  .run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put(
        'center/teacher/partials/groupsWithBooksListRanking.tpl.html',
        '<div class="sidebar-list">\n' +
          '    <div class="allocations-hint" ng-show="allocationsHint.show" translate\n' +
          "         translate-values=\"{'p': '<p>', 'pp': '</p>'}\">{{ 'jsapp.teacher.noBooksAllocatedHint' }}\n" +
          '    </div>\n' +
          '    <div id="navi-sidebar">\n' +
          '        <a class="list-item"\n' +
          '           href="#/ranking"\n' +
          '           ng-repeat="group in groupsWithBooks | filter:{hasBooks: true}"\n' +
          '           ng-click="setRankingGroup(group)"\n' +
          '           ng-class="{\'list-item-active\':navigationStates.rankingGroupId == group.id}">{{ group.name }}</a>\n' +
          '    </div>\n' +
          '</div>\n' +
          ''
      );
    }
  ]);

angular.module('center/teacher/partials/studentsList.tpl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      'center/teacher/partials/studentsList.tpl.html',
      '<div class="sidebar-list sidebar-list-narrow student-list-only">\n' +
        '    <div id="navi-sidebar">\n' +
        '        <div bindonce>\n' +
        '            <div ng-click="selectStudent(0)" class="list-item list-item-all-items"\n' +
        '                 ng-class="{\'list-item-active\': !selectedStudent}">\n' +
        '                <i class="fa fa-user"></i>\n' +
        '                <span translate="jsapp.teacher.allParticipants"></span>\n' +
        '            </div>\n' +
        '            <div class="list-item list-item-student"\n' +
        '                 ng-repeat="student in students | filter:handleEmptyValue"\n' +
        '                 ng-click="selectStudent()"\n' +
        "                 ng-class=\"{'list-item-active': selectedStudent == student._id, 'list-item-first': $index === 0}\"\n" +
        '                 ng-show="todoData.assignee_ids.indexOf(student._id) !== -1">\n' +
        '                <div bm-feature="userNameIframe" class="name" ng-bind-html="::student.displayNameTrusted | trust"></div>\n' +
        '                <div bm-feature="!userNameIframe" class="name" ng-bind="::student.displayName"></div>\n' +
        '                <div class="percentage flat"\n' +
        '                     ng-if="todoData.user_results[student._id] && ((todoData.user_results[student._id].best_percentage === 0 || todoData.user_results[student._id].best_percentage > 0) ||\n' +
        '                                (todoData.user_results[student._id].success_percentage === 0 || todoData.user_results[student._id].success_percentage > 0))"\n' +
        "                     ng-class=\"{'color-success': todoData.user_results[student._id].coins != '0' , 'color-error': todoData.user_results[student._id].coins == '0'}\"\n" +
        '                        >{{ todoData.user_results[student._id].best_percentage | number:0 }}{{ todoData.user_results[student._id].success_percentage  | number:0}}%<span class="delayed-sign" ng-if="todoData.user_results[student._id].handover_date > todoData.end">*</span>\n' +
        '                </div>\n' +
        '                <div class="percentage flat started" ng-if="!todoData.user_results[student._id] && todoData.started_series[student._id]">\n' +
        '                    <span translate="jsapp.teacher.studentStartedSeries"></span>\n' +
        '                </div>\n' +
        '                <div class="percentage flat" ng-if="!todoData.user_results[student._id] && !todoData.started_series[student._id]">\n' +
        '                    -\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        ''
    );
  }
]);

angular
  .module('center/teacher/partials/todoParticipantsList.tpl.html', [])
  .run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put(
        'center/teacher/partials/todoParticipantsList.tpl.html',
        '<div class="sidebar-list sidebar-list-narrow student-list-only">\n' +
          '    <div id="navi-sidebar">\n' +
          '        <div bindonce>\n' +
          '            <div ng-click="selectGroup()" class="list-item list-item-all-items"\n' +
          '                 ng-class="{\'list-item-active\': !selectedStudentId}">\n' +
          '                <i class="fa fa-user"></i>\n' +
          '                <span translate="jsapp.teacher.allParticipants"></span>\n' +
          '            </div>\n' +
          '            <div class="list-item list-item-student cy-list-position-{{$index}}"\n' +
          '                 ng-repeat="result in results"\n' +
          '                 ng-click="selectStudent(result)"\n' +
          '                 data-cy="todo-details-participant-list-select-{{result.username}}"\n' +
          "                 ng-class=\"{'list-item-active': selectedStudentId == result._id, 'list-item-first': $index === 0, 'no-group-member': result.leftGroup}\">\n" +
          '                <div bm-feature="userNameIframe" class="name" ng-bind-html="::result.displayNameTrusted | trust"></div>\n' +
          '                <div bm-feature="!userNameIframe" class="name" ng-bind="::result.displayName"></div>\n' +
          '                <div class="percentage flat"\n' +
          '                     data-cy="todo-details-percentage-{{result.username}}"\n' +
          '                     ng-if="result.result && (result.result.best_percentage >= 0 || result.result.best_percentage >= 0)"\n' +
          "                     ng-class=\"{'color-success': result.result.coins != '0' , 'color-error': result.result.coins == '0'}\"\n" +
          '                        >{{ result.result.best_percentage | number:0 }}{{ result.result.success_percentage  | number:0}}%<span class="delayed-sign" ng-if="result.result.handover_date > todo.end">*</span>\n' +
          '                </div>\n' +
          '                <div ng-if="!result.result && result.started" class="percentage flat started">\n' +
          '                    <span translate="jsapp.teacher.studentStartedSeries"></span>\n' +
          '                </div>\n' +
          '                <div ng-if="!result.result && !result.started" class="percentage flat">\n' +
          '                    -\n' +
          '                </div>\n' +
          '            </div>\n' +
          '        </div>\n' +
          '    </div>\n' +
          '</div>\n' +
          ''
      );
    }
  ]);

angular.module('center/teacher/partials/trial.tpl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      'center/teacher/partials/trial.tpl.html',
      '<div id="trial-container">\n' +
        '\n' +
        '    <h1 translate="jsapp.teacher.trial.header"></h1>\n' +
        '    <div class="trial-description" translate="jsapp.teacher.trial.description"></div>\n' +
        '\n' +
        '    <h2 translate="jsapp.teacher.trial.phone.header"></h2>\n' +
        '    <span translate="jsapp.teacher.trial.phone.label"></span>\n' +
        '    <span translate="jsapp.teacher.trial.phone.number"></span>\n' +
        '    <div id="opening" translate="jsapp.teacher.trial.openingTime"></div>\n' +
        '\n' +
        '    <h2 translate="jsapp.teacher.trial.email.header"></h2>\n' +
        '    <span translate="jsapp.teacher.trial.email.label"></span>\n' +
        '    <span translate="jsapp.teacher.trial.email.value"></span>\n' +
        '\n' +
        '</div>\n' +
        ''
    );
  }
]);

angular.module('center/teacher/partials/welcome.tpl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      'center/teacher/partials/welcome.tpl.html',
      '<div class="scroll-container">\n' +
        '    <div class="welcome-container">\n' +
        '        \n' +
        '        <h1 translate="jsapp.teacher.welcome.material.header"></h1>\n' +
        '\n' +
        '        <div class="article">\n' +
        '            <div class="article-image article-image-right article-image-interactive"></div>\n' +
        '            <div class="article-body">\n' +
        '                <h3 translate="jsapp.teacher.welcome.material.interactive.superheader"></h3>\n' +
        '                <h2 translate="jsapp.teacher.welcome.material.interactive.header"></h2>\n' +
        '                <div translate="jsapp.teacher.welcome.material.interactive.body"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="article">\n' +
        '            <div class="article-image article-image-left article-image-reporting"></div>\n' +
        '            <div class="article-body">\n' +
        '                <h3 translate="jsapp.teacher.welcome.material.reporting.superheader"></h3>\n' +
        '                <h2 translate="jsapp.teacher.welcome.material.reporting.header"></h2>\n' +
        '                <div translate="jsapp.teacher.welcome.material.reporting.body"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        \n' +
        '        <div class="trial-button-wrapper">\n' +
        '            <a class="button bt-medium bt-action"\n' +
        '                href="#/trial">\n' +
        '                <i class="fa fa-angle-right"></i>\n' +
        '                <span translate>jsapp.teacher.welcome.material.button</span>\n' +
        '            </a>\n' +
        '        </div>\n' +
        '    \n' +
        '        <div class="article">\n' +
        '            <div class="article-image article-image-right article-image-knowledgegaps"></div>\n' +
        '            <div class="article-body">\n' +
        '                <h3 translate="jsapp.teacher.welcome.material.knowledgegaps.superheader"></h3>\n' +
        '                <h2 translate="jsapp.teacher.welcome.material.knowledgegaps.header"></h2>\n' +
        '                <div translate="jsapp.teacher.welcome.material.knowledgegaps.body"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="article">\n' +
        '            <div class="article-image article-image-left article-image-worksheets"></div>\n' +
        '            <div class="article-body">\n' +
        '                <h3 translate="jsapp.teacher.welcome.material.worksheets.superheader"></h3>\n' +
        '                <h2 translate="jsapp.teacher.welcome.material.worksheets.header"></h2>\n' +
        '                <div translate="jsapp.teacher.welcome.material.worksheets.body"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        \n' +
        '        <div class="trial-button-wrapper">\n' +
        '            <a class="button bt-medium bt-action"\n' +
        '                href="#/trial">\n' +
        '                <i class="fa fa-angle-right"></i>\n' +
        '                <span translate>jsapp.teacher.welcome.material.button</span>\n' +
        '            </a>\n' +
        '        </div>\n' +
        '        \n' +
        '        <h1 translate="jsapp.teacher.welcome.pdf.header"></h1>\n' +
        '\n' +
        '        <div class="article">\n' +
        '            <div class="article-image article-image-left article-image-pdf"></div>\n' +
        '            <div class="article-body">\n' +
        '                <div translate="jsapp.teacher.welcome.pdf.body"></div>\n' +
        '                <a class="button bt-medium bt-action"\n' +
        '                    href="#/pdfs">\n' +
        '                    <i class="fa fa-angle-right"></i>\n' +
        '                    <span translate>jsapp.teacher.welcome.pdf.button</span>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '        </div>  \n' +
        '    </div>\n' +
        '</div>\n' +
        ''
    );
  }
]);
