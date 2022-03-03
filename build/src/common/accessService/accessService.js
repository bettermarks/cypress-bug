(function(angular) {
    'use strict';
    angular
        .module('bettermarks')
        .factory('AccessService', ["UserService", function(UserService) {

            var features = {};

            return {
                setEnabledFeatures: function(f) {
                    features = f;
                },
                getEnabledFeatures: function() {
                    return features;
                },

                checkEnabledFeature: function(name) {
                    return typeof(features) !== 'undefined' && typeof(features[name]) !== 'undefined' ? features[name] :
                        false;
                },

                checkABGroup: function(name) {
                    var inGroup = false;
                    switch(name) {
                        case 'downloadButton':
                            inGroup = parseInt(UserService.getUserId().substr(-1), 10) % 2 === 0;
                            break;
                    }

                    return inGroup;
                }
            };

        }])
    ;
})(angular);

