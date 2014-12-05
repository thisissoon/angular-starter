"use strict";
/**
 * Configuration for sn.example dependencies are set here.
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").config([
    "$routeProvider",
    "$locationProvider",
    /**
     * @constructor
     * @param {Service} $routeProvider
     * @param {Service} $locationProvider
     */
    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = "!";

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "HomeCtrl"
            })
            .when("/another", {
                templateUrl: "partials/another-view.html",
                controller: "AnotherCtrl"
            })
            .when("/example-form", {
                templateUrl: "partials/example-form.html",
                controller: "ExampleFormCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });

    }
]);
