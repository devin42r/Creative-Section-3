/**
 * Created by devin on 2/28/17.
 */
angular.module('EmailApp', [
    'ngRoute'
]).config(function ( $routeProvider ) {
    'use strict';
    $routeProvider
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'inboxC',
            controllerAs: 'inbox'
        })
        // .when('/inbox/email/:id', {
        //     templateUrl: 'views/email.html',
        //     controller: 'EmailCtrl',
        //     controllerAs: 'email'
        // })
        .otherwise({
            redirectTo: '/inbox'
        });
// }).run(function($rootScope){
//     $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
//         console.log(event, current, previous, rejection)
//     })
});