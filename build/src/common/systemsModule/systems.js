(function(angular) {
    "use strict";

    var systemsWithCss = {
        UY_ceibal: 'bettermarks-systems',
        DE_homeschool: 'bettermarks-systems'
    };

    angular
        .module('bettermarks.systems', ['bettermarks'])
        .service('SystemsConfig', ["UserService", function(UserService) {
            this.getCustomCss = function() {
                return systemsWithCss[UserService.getSystem()];
            };
        }])
    ;

})(angular);