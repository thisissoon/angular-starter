'use strict';
/**
 * Directive to display the current app version
 * number in element
 * @module   myApp.version.appVersionDirective
 * @author   SOON_
 * @requires config
 */
angular.module('myApp.version.appVersionDirective', [

])
/**
 * @constructor
 * @example
    <app-version></app-version>
 * @class appVersion
 */
.directive('appVersion', [
  function (){
    return {
      restrict: 'EAC',
      link: function($scope, $element){

        $element.text('2.0.0');

      }
    };
  }
]);
