'use strict';
/**
 * Retrieves results to display in results view
 * @module   myApp.results
 * @author   SOON_
 * @requires ngRoute {@link https://docs.angularjs.org/api/ngRoute}
 * @requires myApp.results.ResultsCtrl
 */
angular.module('myApp.results', [
  'ngRoute',
  'myApp.results.ResultsCtrl'
])
/**
 * @class  config
 * @module myApp.results
 * @param  {Provider} $routeProvider
 */
.config([
  '$routeProvider',
  function ($routeProvider) {

    $routeProvider
      .when('/results', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsCtrl'
      });

  }
]);
