"use strict";
/**
 * Controller for root view or "/" view of app.
 * @class HomeCtrl
 **/
angular.module("snExampleApp").controller("HomeCtrl", [
    "$scope",
    /**
     * @constructor
     * @param $scope {Object} contains data in controller
     **/
    function ($scope) {

    	/**
         * This is a variable in our view 
         * @property foo
         **/
        $scope.foo = 123;
		 
    }

]);
