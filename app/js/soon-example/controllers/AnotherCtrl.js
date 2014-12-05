"use strict";
/**
 * Controller for '/another' view of sn.example.
 * @class  AnotherCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("AnotherCtrl", [
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
