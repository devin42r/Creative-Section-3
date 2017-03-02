/**
 * Created by devin on 2/28/17.
 */

/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('EmailApp')
    .directive('inbox', function InboxD () {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "js/directive/inbox.tmpl.html",
            controllerAs: 'inbox',

            controller: function (InboxFact) {
                this.messages = [];

                this.goToMessage = function (id) {
                    InboxFact.goToMessage(id);
                };

                this.deleteMessage = function (id, index) {
                    InboxFact.deleteMessage(id, index);
                };

                InboxFact.getMessages()
                    .then( angular.bind( this, function then() {
                        // console.log(arguments)
                        this.messages = InboxFact.messages;
                    }) );

            },

            link: function (scope, element, attrs, ctrl) {
                /*
                 by convention we do not $ prefix arguments to the link function
                 this is to be explicit that they have a fixed order
                 */
            }
        }
    });