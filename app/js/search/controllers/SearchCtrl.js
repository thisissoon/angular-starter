'use strict';
/**
 * Handles searching the google maps API
 * within the view controller for the search
 * page in example app
 * @module   myApp.search.SearchCtrl
 * @author   SOON_
 * @requires config
 *
 */
angular.module('myApp.search.SearchCtrl', [
  'config'
])
/**
 * @constructor
 * @class SearchCtrl
 * @param {Object}  $scope
 * @param {Service} $rootScope
 * @param {Service} $http
 * @param {Service} $location
 * @param {Object}  env
 */
.controller('SearchCtrl', [
  '$scope',
  '$rootScope',
  '$http',
  '$location',
  'env',
  function ($scope, $rootScope, $http, $location, env) {

    /**
     * Search locations based on val
     * @method getLocation
     * @param  {String} val location to query
     */
    $scope.getLocation = function getLocation(val){
      $http.get(env.GOOGLE_MAPS_API_ADDRESS + 'maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function (response){
        $rootScope.results = response.data.results;
        $location.path('/results');
      });
    };

  }

]);
