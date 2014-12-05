"use strict";
/**
 * Controller for '/example-form' view of sn.example.
 * @class  ExampleFormCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("ExampleFormCtrl", [
    "$scope",
    /**
     * @constructor
     * @param {Object} $scope
     */
    function ($scope) {

        /**
         * object which stores values of fields from the form
         * @property user
         * @type     {Object}
         */
        $scope.user = {};

        /**
         * save the user details and display message to user
         * @function submit
         * @return   {[type]} [description]
         */
        $scope.submit = function submit(){
            if ($scope.form.$valid) {
                $scope.added = {
                    user: $scope.user
                };
            } else {
                delete $scope.added;
            }
        };

    }

]);
