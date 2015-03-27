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
            link: function($scope, $element){

                $element.text(bower.version);

            }
        };
    }
]);
