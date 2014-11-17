"use strict";
/**
 * Controller for homepage view of soonExampleApp.
 * @class  HomeCtrl
 * @module soonExampleApp
 * @author SOON_
 */
angular.module("soonExampleApp").controller("HomeCtrl", [
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
