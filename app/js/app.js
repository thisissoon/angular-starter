'use strict';
/**
 * Starting point for myApp, we inject all
 * external modules into the app here.
 * @module   myApp
 * @main     myApp
 * @author   SOON_
 * @requires myApp.html5Locations
 * @requires myApp.results
 * @requires myApp.search
 * @requires myApp.version
 */
angular.module('myApp', [
  'myApp.html5Locations',
  'myApp.results',
  'myApp.search',
  'myApp.version'
]);
