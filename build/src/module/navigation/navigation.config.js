(function (angular) {
  'use strict';
  angular
    .module('bettermarks.navigation', [
      'bettermarks.group.service',
      'bettermarks.util.filter'
    ])
    .config([
      '$provide',
      'UserData',
      function ($provide, UserData) {
        function registerServiceEvent(eventName, functionName, postProcessor) {
          var serviceParts = functionName.split('.');

          if (serviceParts.length > 0) {
            var serviceName = serviceParts[0];
            serviceParts = serviceParts.slice(1, serviceParts.length);

            $provide.decorator(serviceName, [
              '$delegate',
              '$q',
              '$rootScope',
              '$injector',
              function ($delegate, $q, $rootScope, $injector) {
                function triggerEvent(eventData) {
                  $rootScope.$broadcast(eventName, eventData);
                }

                var objectWhichOwnsTheFunction = $delegate;

                for (var i = 0; i < serviceParts.length - 1; i++) {
                  objectWhichOwnsTheFunction =
                    objectWhichOwnsTheFunction[serviceParts[i]];
                }

                var functionName = serviceParts[serviceParts.length - 1];
                var orgFunc = objectWhichOwnsTheFunction[functionName];

                var decorateFunc = function () {
                  var serviceResult = orgFunc.apply(null, arguments);

                  $q.when(serviceResult).then(function (result) {
                    var eventData;

                    if (postProcessor) {
                      eventData = $injector.invoke(postProcessor, null, {
                        $serviceResult: result
                      });
                    } else {
                      eventData = result;
                    }

                    $q.when(eventData).then(function (data) {
                      triggerEvent(data);
                    });
                  });
                  return serviceResult;
                };
                objectWhichOwnsTheFunction[functionName] = decorateFunc;

                return $delegate;
              }
            ]);
          }
        }

        var forceSchoolContext = UserData.features
          ? UserData.features.forceSchoolContext
          : false;

        var counterResolver = function ($serviceResult) {
          return $serviceResult.length > 0 || forceSchoolContext;
        };

        var undoneToDos = function ($serviceResult) {
          var notDone = function (elem) {
            return !Boolean(elem.points);
          };
          var undoneCount = 0;
          if ($serviceResult) {
            undoneCount = $serviceResult.filter(notDone).length;
          }
          return undoneCount;
        };

        var booksUrl = function ($serviceResult) {
          if ($serviceResult.length > 0) {
            return '/school-books';
          } else {
            return '/private-books';
          }
        };
        registerServiceEvent(
          'hasGroups',
          'GroupManagerService.getAll',
          counterResolver
        );
        registerServiceEvent(
          'booksUrlChanged',
          'GroupManagerService.getAll',
          booksUrl
        );
      }
    ]);
})(angular);
