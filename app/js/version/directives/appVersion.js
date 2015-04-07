"use strict";
/**
 * Directive to display the current app version
 * number in element
 * @module   myApp.version.appVersionDirective
 * @author   SOON_
 * @requires config
 */
angular.module("myApp.version.appVersionDirective", [
    "config"
])
/**
 * @constructor
 * @example
    <app-version></app-version>
 * @class appVersion
 * @param {Object} bower
 */
.directive("appVersion", [
    "bower",
    function (bower){
        return {
            restrict: "EAC",
            link: function($scope, $element){

                $element.text(bower.version);

            }
        };
    }
]);
