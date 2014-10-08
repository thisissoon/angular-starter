"use strict";

angular.module("snApp")
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
    
