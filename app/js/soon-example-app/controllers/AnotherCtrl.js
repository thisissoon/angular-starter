"use strict";
/**
 * Controller for '/another' view of soonExampleApp.
 * @class  AnotherCtrl
 * @module soonExampleApp
 * @author SOON_
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
