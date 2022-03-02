(function (angular) {
  'use strict';
  angular
    .module('bettermarks.group')

    .controller('MainGroupCtrl', [
      '$state',
      'UserData',
      function ($state, UserData) {
        var selectedState = STATE_GROUP_GLUE;
        var features = UserData.features;

        if (features && features.generalGroupManager) {
          selectedState = 'groups.dtdl';
        }
        $state.go(selectedState);
      }
    ]);
})(angular);
