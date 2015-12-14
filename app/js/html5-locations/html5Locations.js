'use strict';
/**
 * Adds config for html5 routing
 * @module   myApp.html5Locations
 * @author   SOON_
 * @requires ngRoute {@link https://docs.angularjs.org/api/ngRoute}
 */
angular.module('myApp.html5Locations', [
  'ngRoute',
])
/**
 * @method config
 * @param  {Service} $locationProvider
 */
.config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix = '!';
  }
]);
