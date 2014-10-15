"use strict";
/**
 * Controller for "/another" view of app.
 * @class  AnotherCtrl
 */
angular.module("snExampleApp").controller("AnotherCtrl", [
    "$scope",
    /**
     * @constructor
     * @param  {Object} $scope
     */
    function ($scope) {

        /**
         * This is a variable in our view
         * @property bar
         * @type {Number}
         */
        $scope.bar = 456;

    }

]);
