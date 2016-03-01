'use strict';
/**
 * Handles searching the google maps API
 * within the view controller for the search
 * page in example app
 * @module   myApp.search.SearchCtrl
 * @author   SOON_
 *
 */
angular.module('myApp.search.SearchCtrl', [

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
  function ($scope, $rootScope, $http, $location) {

    /**
     * Search locations based on val
     * @method getLocation
     * @param  {String} val location to query
     */
    $scope.getLocation = function getLocation(val){
      $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
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
