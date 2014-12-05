"use strict";
/**
 * Controller for homepage view of sn.example.
 * @class  HomeCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("HomeCtrl", [
    "$scope",
    /**
     * @constructor
     * @param {Object} $scope
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
