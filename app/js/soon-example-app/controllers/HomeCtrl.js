"use strict";
/**
 * Controller for root view or "/" view of app.
 * @class  HomeCtrl
 */
angular.module("soonExampleApp").controller("HomeCtrl", [
    "$scope",
    /**
     * @constructor
     * @param  {Object} $scope
     */
    function ($scope) {

        /**
         * This is a variable in our view
         * @property foo
         * @type {Number}
         */
        $scope.foo = 123;

    }

]);
