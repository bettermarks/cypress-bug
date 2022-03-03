(function(angular) {
    'use strict';
    angular
        .module('bettermarks.lightbox', ['ui.router'])
        .directive('lightbox', function() {
            return {
                templateUrl: 'directives/partials/lightbox.tpl.html',
                restrict: 'EACM',
                replace: true,
                controller: 'LightboxController'
            };
        })

        .controller('LightboxController', ["$scope", "$rootScope", "$window", "$state", "$stateParams", function($scope, $rootScope, $window, $state, $stateParams) {

            function initLightBox() {
                $rootScope.lightbox = {};
                $rootScope.lightbox.content = '';
                $rootScope.lightbox.cssClass = ['closed'];
            }


            $scope.reloadState = function() {
                $state.transitionTo($state.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
                $scope.closeLightbox();
            };

            $scope.closeLightbox = function() {
                $rootScope.$broadcast('lightboxClose');
                initLightBox();
            };

            $scope.expr = function(expr, b_event) {

                if(b_event) {
                    $scope.$broadcast(b_event, expr);
                }

                return $scope.$eval(expr);
            };

            $rootScope.$broadcast('lightbox-initialized', '');

            $rootScope.$on('triggerLightboxClose', function() {
                $scope.closeLightbox();
            });

            $scope.retry = function(){
                var i = document.createElement("img");
                i.src = "/retry";

                var d = $rootScope.lightbox.deferred;
                $scope.closeLightbox();
                if (d){
                    d.resolve();
                }
            };

            $scope.cancel = function(){
                var d = $rootScope.lightbox.deferred;
                $scope.closeLightbox();
                if (d){
                    d.reject("canceled");
                }
            };

            $scope.requestCollectUnfinishedTests = function () {
                $scope.closeLightbox();
                $rootScope.$broadcast('collect-unfinished-tests:collect');
            };

        }])

        .service('LightboxService', ["$rootScope", "$q", function($rootScope, $q) {

            var self = this;

            var auth = 'jsapp.dialog.authorize';
            var authTitle = auth + '.title';
            var authSubmit = auth + '.submit';
            var authText = auth + '.details';
            var authError = auth + '.error';


            function wrapNgClassList(styleString){
                if(styleString){
                    return styleString.trim().split(" ");
                }else{
                    return [];
                }
            }
            
            this.showRetryPopup = function(){
                var d = $q.defer();

                $rootScope.lightbox = {
                    content:  'jsapp.popup.retry.text',
                    headline: '',
                    style: 'lightbox-popup',
                    buttons: [
                        {
                            b_class: 'button bt-regular bt-action',
                            b_text: 'jsapp.popup.retry.submit',
                            b_click: 'retry()'
                        },
                        {

                            b_class: 'button bt-regular bt-view',
                            b_text: 'jsapp.popup.retry.cancel',
                            b_click: 'cancel()'
                        }
                    ],
                    cssClass: wrapNgClassList('open lightbox-popup'),
                    hideClose: true,
                    preventOverlayClose: true,
                    deferred: d
                };

                return d.promise;
            };
            
            this.showAuthorization = function(retry) {
                var d = $q.defer();

                function onSubmitButton() {
                    d.resolve($rootScope.lightbox.input);
                    self.close();
                }

                var authorizeButtons = [
                    {
                        b_class: 'button bt-medium bt-action bt-wide',
                        b_click: onSubmitButton,
                        b_text: authSubmit
                    }
                ];

                $rootScope.lightbox = {
                    headline: authTitle,
                    content: authText,
                    style: 'lightbox-popup',
                    buttons: authorizeButtons,
                    cssClass: wrapNgClassList('open lightbox-popup'),
                    points: false,
                    inputType: 'password',
                    error: retry ? authError : ""
                };

                return d.promise;
            };

            this.close = function(){
                var currentBox = $rootScope.lightbox;

                if(currentBox) {
                    currentBox.headline = '';
                    currentBox.content = '';
                    currentBox.info = '';
                    currentBox.input = '';
                    currentBox.inputType = null;
                    currentBox.buttons = [];
                    currentBox.error = '';
                    currentBox.cssClass = ['closed'];

                    $rootScope.$broadcast('triggerLightboxClose');
                }
            };

            this.showRetry = function(errorMessage, hash){
                var newLightbox = this.lightbox.popup(
                    false,
                    errorMessage,
                    [
                        {
                            b_link: hash[1],
                            b_class: 'button bt-regular bt-action bt-wide',
                            b_text: 'jsapp.general.reload',
                            b_click: 'reloadState()'
                        }
                    ],
                    ''
                );

                newLightbox.hideClose = true;
                newLightbox.preventOverlayClose = true;
            };

            this.showUserBlockedPopup = function(){
                var newLightbox = this.lightbox.popup(
                  false,
                  'jsapp.user.blocked.text',
                  ''
                );

                newLightbox.hideClose = true;
                newLightbox.preventOverlayClose = true;
            };

            this.showNewPasswordConfirmationPopup = function(userType /* teacher | student */) {
                if (window.localStorage['newPasswordConfirmation']) {
                    var newLightbox = this.lightbox.popup(
                        'jsapp.popup.newPasswordConfirmation.title',
                        'jsapp.popup.newPasswordConfirmation.text.' + userType,
                        [
                            {
                                b_class: 'button bt-regular bt-action',
                                b_text: 'jsapp.popup.newPasswordConfirmation.button',
                                b_click: 'closeLightbox()',
                            },
                        ],
                        'popup-new-password-confirmation'
                        );
                    newLightbox.hideClose = true;
                    newLightbox.preventOverlayClose = true;
                    delete window.localStorage.newPasswordConfirmation;
                }
                
            };

            this.showConfirmCollectUnfinishedTestsPopup = function () {
                var newLightbox = this.lightbox.popup(
                  false,
                  'jsapp.collectUnfinishedTests.text',
                  [
                      {
                          b_class: 'button bt-regular bt-view bt-wide',
                          b_text: 'jsapp.collectUnfinishedTests.button.cancel',
                          b_click: 'closeLightbox()'
                      },
                      {
                          b_class: 'button bt-regular bt-action bt-wide',
                          b_text: 'jsapp.collectUnfinishedTests.button.confirm',
                          b_click: 'requestCollectUnfinishedTests()'
                      }
                  ],
                  ''
                );

                newLightbox.hideClose = true;
                newLightbox.preventOverlayClose = true;
            };

            this.showNewEmailConfirmationPopup = function() {
                if (window.localStorage['newEmailConfirmation']) {
                    var newLightbox = this.lightbox.popup(
                        'jsapp.popup.newEmailConfirmation.title',
                        'jsapp.popup.newEmailConfirmation.text',
                        [
                            {
                                b_class: 'button bt-regular bt-action',
                                b_text: 'jsapp.popup.newEmailConfirmation.button',
                                b_click: 'closeLightbox()',
                            },
                        ],
                        'popup-new-email-confirmation'
                        );
                    newLightbox.hideClose = true;
                    newLightbox.preventOverlayClose = true;
                    delete window.localStorage.newEmailConfirmation;
                }
                
            };

            this.lightbox = {
                textBox: function(text, style, buttons) {
                    $rootScope.lightbox = {
                        content:  text,
                        style: (style ? ('lightbox-' + style) : ''),
                        buttons: buttons,
                        cssClass: wrapNgClassList('open lightbox-textbox')
                    };

                    return $rootScope.lightbox;
                },

                popup: function(title, text, buttons, cssClass, points) {
                    $rootScope.lightbox = {
                        content:  text,
                        headline: title,
                        style: 'lightbox-popup',
                        buttons: buttons,
                        cssClass: wrapNgClassList('open lightbox-popup ' + cssClass),
                        points: points
                    };

                    return $rootScope.lightbox;

                },
                input: function(title, text, info, cssClass, defaultText,
                                btSubmitText, btAbortText, on_submit) {
                    var newBox = {
                        content:  text,
                        headline: title,
                        style: 'lightbox-input',
                        buttons: null,
                        cssClass: wrapNgClassList('open lightbox-input ' + cssClass),
                        points: false,
                        info:  info,
                        input: defaultText,
                        inputType: 'text',
                        error: null
                    };

                    var on_submit_impl = function() {
                        on_submit(newBox.input);
                    };

                    $rootScope.$on('triggerLightboxClose', function (){
                        newBox.headline = '';
                        newBox.content = '';
                        newBox.info = '';
                        newBox.input = '';
                        newBox.inputType = null;
                        newBox.buttons = [];
                    });

                    var on_abort_impl = function() {
                        self.close();
                    };

                    newBox.buttons = [
                        {
                            b_class: 'button bt-medium bt-confirm bt-wide',
                            b_click: on_submit_impl,
                            b_text: btSubmitText
                        },
                        {
                            b_class: 'button bt-medium bt-view bt-wide',
                            b_click: on_abort_impl,
                            b_text: btAbortText
                        }
                    ];

                    $rootScope.$apply(function(){
                        $rootScope.lightbox = newBox;
                    });

                    return newBox;
                }
            };
        }])
    ;

})(angular);


