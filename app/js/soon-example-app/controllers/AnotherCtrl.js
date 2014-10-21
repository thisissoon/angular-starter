"use strict";
/**
 * Controller for '/another' view of soonExampleApp.
 * @author SOON_
 * @module soonExampleApp
 * @class  AnotherCtrl
 */
angular.module("soonExampleApp").controller("AnotherCtrl", [
    "$scope",
    /**
     * @constructor
     * @param {Object} $scope
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
