"use strict";

angular.module("snExampleApp")
    .config([
        "$routeProvider",
        function ($routeProvider) {

            $routeProvider
                .when("/", {
                    templateUrl: "partials/home.html",
                    controller: "HomeCtrl"
                })
                .when("/another", {
                    templateUrl: "partials/another-view.html",
                    controller: "AnotherCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                })

        }
    ])
    
