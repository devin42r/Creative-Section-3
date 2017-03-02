/**
 * Created by devin on 2/28/17.
 */
angular.module('EmailApp')
    .factory('InboxFact', function InboxFact (
        $q, $http, $location
    ) {
        'use strict';
        var exports = {};
        //
        exports.messages = [];

        exports.goToMessage = function(id) {
            if ( angular.isNumber(id) ) {
                console.log('inbox/email/' + id)
                $location.path('inbox/email/' + id)
            }
        }

        exports.deleteMessage = function (id, index) {
            this.messages.data.splice(index, 1);
        }

        exports.getMessages = function () {
            var deferred = $q.defer();
            return $http.get('json/emails.json')
                .then(function (data) {
                    exports.messages = data;
                    deferred.resolve(data);
                }, function (data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        return exports;
    });