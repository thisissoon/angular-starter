'use strict';
/**
 * Controller which displays results of search from
 * app search. Gets the results from app $rootScope
 * to be displayed in results view.
 * @module myApp.results.ResultsCtrl
 * @author SOON_
 */
angular.module('myApp.results.ResultsCtrl', [])
/**
 * @constructor
 * @class ResultsCtrl
 * @param {Object}  $scope
 * @param {Service} $rootScope
 */
.controller('ResultsCtrl', [
  '$scope',
  '$rootScope',
  function ($scope, $rootScope) {

    /**
     * The result from the search query
     * @property results
     * @type     {Array}
     */
    $scope.results = $rootScope.results;

  }
]);
