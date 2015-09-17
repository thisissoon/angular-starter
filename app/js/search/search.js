'use strict';
/**
 * Handles searching the google maps API
 * within the view controller for the search
 * page in example app
 * @module   myApp.search
 * @author   SOON_
 * @requires ngRoute {@link https://docs.angularjs.org/api/ngRoute}
 */
angular.module('myApp.search', [
  'ngRoute',
  'myApp.search.SearchCtrl'
])
/**
 * @method config
 * @param  {Provider} $routeProvider
 */
.config([
  '$routeProvider',
  function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      })
        .otherwise({
        redirectTo: '/'
      });

  }
]);
