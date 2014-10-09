"use strict";
/**
 * Controller for "/another" view of app.
 * @class AnotherCtrl
 **/
angular.module("snExampleApp").controller("AnotherCtrl", [
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
		$scope.bar = 456;

	}

]);
