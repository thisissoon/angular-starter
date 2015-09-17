'use strict';
/**
 * @module   myApp
 * @main     myApp
 * @author   SOON_
 * @requires myApp.search
 * @requires myApp.results
 * @requires myApp.version
 */
angular.module('myApp', [
  'myApp.search',
  'myApp.results',
  'myApp.version'
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
