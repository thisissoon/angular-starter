"use strict";
/**
 * Controller to perform search in sn.example.
 * @class  SearchCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("SearchCtrl", [
    "$scope",
    "$rootScope",
    "$http",
    "$location",
    "env",
    /**
     * @constructor
     * @param {Object}  $scope
     * @param {Service} $rootScope
     * @param {Service} $http
     * @param {Service} $location
     * @param {Object}  env
     */
    function ($scope, $rootScope, $http, $location, env) {

        /**
         * Search locations based on val
         * @method getLocation
         * @param  {String} val location to query
         */
        $scope.getLocation = function getLocation(val){
            $http.get(env.GOOGLE_MAPS_API_ADDRESS + "maps/api/geocode/json", {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function (response){
                $rootScope.results = response.data.results;
                $location.path("/results");
            });
        };

    }

]);
