/**
 * Created by devin on 3/1/17.
 */
angular.module('EmailApp')
    .directive('email', function emailD ($timeout) {
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "js/directive/email.tmpl.html",
            controllerAs: 'email',
            controller: function ($routeParams, $scope, emailF) {
                this.message = {};
                // this.reply = function (message) {
                //     emailF.reply(message);
                // };
                var getmessage = emailF.getMessage($routeParams);
                if (getmessage) {
                    getmessage.then( angular.bind(this, function (response) {
                        emailF.message = response;
                        this.message = emailF.message;
                        $scope.$parent.email.title = this.message.subject;
                    }) );
                }
            },
            // link: function (scope, element, attrs, ctrl) {
            //     var textarea = element.find('.email__response-text')[0];
            //     scope.$watch('reply', function (newVal, oldVal) {
            //         if (newVal === oldVal) return;
            //         if (newVal) {
            //             $timeout(function () {
            //                 textarea.focus();
            //             }, 0);
            //         }
            //     })
            // }
        }
    });