(function(angular) {
    'use strict';
    angular.module('bettermarks.resizer', []).service('ResizerService', ["$rootScope", "$timeout", function($rootScope, $timeout) {
        var srv = this;
        /* resizer */
        var resizing = false;
        var timeout = false;
        
        srv.initResize = function(event) {
            resizing = true;
            event.preventDefault();
        };

        srv.resize = function(event) {
            if(!resizing) {
                return;
            }

            var coords = srv.getCoordinates(event);
            //clearTimeout(timeout);
            $timeout.cancel(timeout);
            timeout = $timeout(function() {
                var sidebarOffset = angular.element('#sidebar').offset().top;
                var sidebarHeight = angular.element('#sidebar').height();
                $rootScope.navigationStates.resizerTop = ((coords.y - sidebarOffset) / sidebarHeight) * 100;
                if($rootScope.navigationStates.resizerTop < 10) {
                    $rootScope.navigationStates.resizerTop = 10;
                } else if($rootScope.navigationStates.resizerTop >= 80) {
                    $rootScope.navigationStates.resizerTop = 80;
                }

                $rootScope.$apply(function() {
                    srv.setStyles($rootScope.navigationStates.resizerTop, sidebarHeight);
                });
            }, 1);
            event.preventDefault();
        };

        srv.stopResizing = function () {
            resizing = false;
        };

        srv.setStyles = function(newHeight, sidebarHeight) {
            $rootScope.resizerStyle = {
                'top': newHeight + '%'
            };

            $rootScope.resizerTopStyle = {
                'height': newHeight + '%'
            };

            var resizerHeight = (11 / sidebarHeight) * 100;
            $rootScope.resizerBottomStyle = {
                'height': (100 - (newHeight + resizerHeight)) + '%',
                'margin-top': '12px'
            };
        };

        srv.getCoordinates = function(event) {
            var touches = event.touches && event.touches.length ? event.touches : [event];
            var e = (event.changedTouches && event.changedTouches[0]) ||
                (event.originalEvent && event.originalEvent.changedTouches &&
                    event.originalEvent.changedTouches[0]) ||
                touches[0].originalEvent || touches[0];

            return {
                x: e.clientX,
                y: e.clientY
            };
        };

    }]);
})(angular);
