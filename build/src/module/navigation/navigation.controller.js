(function(angular) {
    'use strict';
    angular
        .module('bettermarks.navigation')

        .controller('MainNavigationCtrl', ["$scope", "$rootScope", "$window", "AccessService", "UserService", "MenuService", function ($scope, $rootScope, $window, AccessService, UserService,
                                                    MenuService) {
            var vm = this;
            vm.naviPoints = [];
            var isTeacher = UserService.isTeacher();
            var isVerified = UserService.isVerified();

            MenuService.init();
            MenuService.bind($scope);

            $scope.$on('react:selectGroup', function (_, groupId) {
                $rootScope.navigationStates.currentGroupId = groupId;
                $window.localStorage.setItem('lastSelectedGroupId', groupId);
            });

            $scope.$watch('$root.navigationStates.currentGroupId', function(newGroupId, prevGroupId) {
                if ($window.localStorage && newGroupId && newGroupId !== prevGroupId) {
                    $window.localStorage.setItem('lastSelectedGroupId', newGroupId);
                } else if ($window.localStorage && !newGroupId && !prevGroupId) {
                    $window.localStorage.removeItem('lastSelectedGroupId');
                }
            });

            function addWorksheetsItem() {
                if (isVerified) {
                    var manageWorksheets = AccessService.checkEnabledFeature('manageWorksheets');
                    var href = manageWorksheets ? '/worksheet-folders/': '/worksheets/list';
                    var worksheets = createMainNaviItem("worksheets", href)
                        .setTitel('jsapp.navigation.worksheets')
                        .setIcon('fa-file-text-o')
                        .setFeature('worksheets')
                        .setStates([
                        '**.worksheets.**',
                        '**.worksheetGenerator.**',
                        '**.worksheetEditor.**',
                        '**.worksheetCopy.**',
                        '**.worksheetsDefault.**',
                        '**.manageWorksheets.**'
                    ]);

                    MenuService.addMainItem(worksheets);

                    var defaultWorksheets = AccessService.checkEnabledFeature('defaultWorksheets');
                    if (!manageWorksheets && defaultWorksheets) {
                        MenuService.setSubMenu(worksheets, [
                            {
                                title: 'jsapp.worksheets.my',
                                href: '/worksheets/list',
                                cssClass: 'bt-subnavi'
                            },
                            {
                                title: 'jsapp.worksheets.default',
                                href: '/worksheets/default',
                                cssClass: 'bt-subnavi'
                            }
                        ]);
                    }
                }
            }

            function getMainNaviIconString(icon) {
                return "icon " + icon;
            }

            function createMainNaviItem(id, href) {
                return {
                    id: id,
                    href: href,

                    setEvents: function (events) {
                        this.showEvent = events.showEvent;
                        this.urlEvent = events.urlEvent;
                        this.hintEvent = events.hintEvent;
                        return this;
                    },
                    setSubMenu: function (items) {
                        MenuService.setSubMenu(this, items);
                    },
                    setStates: function (states) {
                        this.activeStates = states;
                        return this;
                    },
                    setFeature: function (feature) {
                        this.feature = feature;
                        return this;
                    },

                    setTitel: function (titleKey) {
                        this.title = titleKey;
                        return this;
                    },

                    setIcon: function (icon) {
                        this.icon = getMainNaviIconString(icon);
                        return this;
                    },

                    setIsExternalLink: function (isLink) {
                        this.isExternalLink = isLink;
                        return this;
                    },

                    setInAppLink: function (inAppLink) {
                        this.inAppLink = inAppLink;
                        return this;
                    }
                };
            }
            if (isTeacher) {
                addWorksheetsItem();
            }
            MenuService.appendItemsByProvider();
            MenuService.getMenuItems().then(function (items) {
                vm.naviPoints = items;
            });
            $rootScope.$on('$stateChangeSuccess', MenuService.validateActiveMainNaviPoint);

        }])

        .controller('UserNavigationCtrl', ["$scope", "$translate", "$rootScope", "UserService", "UserNavigation", "AccessService", function (
            $scope, $translate, $rootScope, UserService, UserNavigation, AccessService
        ) {
            var vm = this;
            var displayNameFallback = $translate.instant('jsapp.navigation.namePlaceholder');
            var userNameIframeEnabled = false;
            vm.expandable = !userNameIframeEnabled && !AccessService.checkEnabledFeature('noUserNavi');
            if (vm.expandable) {
                $rootScope.$on("TeacherSettings:updatePersonalInfo", function (_, firstName, lastName) {
                    $scope.displayName = UserService.getDisplayName(
                      firstName, lastName, displayNameFallback
                    );
                    vm.userNavi[0].title = $scope.displayName;
                    $scope.$apply();
                });

                var isTeacher = UserService.isTeacher();
                vm.userNavi = UserNavigation.getNavigationPoints([
                    {
                        title: $scope.displayName,
                        icon: 'users',
                        dataCy: UserService.getUserName()
                    },
                    {
                        href: '#/settings',
                        title: $translate.instant('jsapp.navigation.settings'),
                        icon: 'user-settings',
                        feature: 'settingsTeacher',
                        dataCy: 'settings',
                    },
                    {
                        href: '/payment',
                        title: $translate.instant('jsapp.navigation.licence'),
                        icon: 'payment',
                        feature: 'paymentLink',
                        openPopup: isTeacher ? 'voucher' : 'payment',
                        dataCy: 'prospective_buyer'
                    },
                    {
                        title: $translate.instant('jsapp.general.logout'),
                        href: '#/logout',
                        feature: 'logoutLink',
                        icon: 'sign-out',
                        dataCy: 'logout',
                    }
                ].filter(function notToggledOrFeatureEnabled (navItem) {
                    return navItem.feature ? AccessService.checkEnabledFeature(navItem.feature) : true;
                }));
            } else {
                vm.userNavi = UserNavigation.getNavigationPoints([]);
            }
        }])

        .controller("NavigationItemCtrl", ["$scope", function($scope){
            var vm = this;
            vm.menuItem = $scope.menuItem;
        }])

        .controller('SubNavigationCtrl', ["$scope", "$location", "MenuService", function($scope, $location, MenuService){
            var vm = this;
            vm.subNavi = MenuService.getSubNavi();
            $scope.location = $location;
        }])
        ;
})
(angular);
