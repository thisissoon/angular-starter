"use strict";
/**
 * Display the app version number in html
 * @example
    <app-version></app-version>
 * @class  appVersion
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").directive("appVersion", [
    "bower",
    /**
     * @constructor
     * @param {Object} bower
     */
    function (bower){
        return {
            restrict: "EAC",
            scope: {},
            template: "<p class=\"text-right\">App version: <b>{{ version }}</b></p>",
            link: function($scope){

                /**
                 * @property version
                 * @type     {String}
                 */
                $scope.version = bower.version;
            }
        };
    }
]);
