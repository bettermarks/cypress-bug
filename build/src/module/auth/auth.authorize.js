(function (angular) {
    'use strict';
    var authModule = angular.module('bettermarks.auth');
    var directiveList = [];

    var defaultPriority = 1000;

    directiveList.push({
        name: "bmCheckAuthorization",
        priority: defaultPriority,
        handler: function(AuthorizationService){
            return AuthorizationService.isAuthorized();
        }
    });

    directiveList.push({
        name: "bmCheckTeacher",
        priority: defaultPriority,
        handler: function(UserService){
            return UserService.isTeacher();
        }
    });

    directiveList.push({
        name: "bmCheckStudent",
        priority: defaultPriority,
        handler: function(UserService){
            return UserService.isStudent();
        }
    });

    directiveList.push({
        name: "bmCheckAppMode",
        priority: defaultPriority,
        handler: function($inAppMode){
            return $inAppMode;
        }
    });

    angular.forEach(directiveList, function(directiveObject){

        var directiveName = directiveObject.name;
        var directiveHandler = directiveObject.handler;

        authModule.directive(directiveName, function ($injector, $animate){
            return {

                priority: 1000,
                multiElement: true,
                restrict: 'A',
                transclude: 'element',

                link: function (scope, $element, $attr, _, $transclude) {
                    var prevClone;

                    var unbinder = scope.$watch(function () {
                        return $injector.invoke(directiveHandler, scope);
                    }, function (isAuthorized) {

                        if (isAuthorized) {
                            unbinder();
                        }

                        var negated = $attr[directiveName] == "!";

                        if (isAuthorized != negated) {
                            $transclude(function (clone) {
                                $animate.enter(clone, $element.parent(), $element);
                                prevClone = clone;
                            });
                        } else if (prevClone) {
                            $animate.leave(prevClone);
                            prevClone = null;
                        }
                    });
                }
            };
        });
    });







})
(angular);
