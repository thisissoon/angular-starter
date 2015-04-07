"use strict";

describe("myApp.search", function (){

     var $location, $route, $rootScope;

    beforeEach(function(){
        module("myApp.search");
    });

    beforeEach(inject(function ( _$location_, _$route_, _$rootScope_) {
        $location = _$location_;
        $route = _$route_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.whenGET(/.*/).respond(200);
    }));

    it("should load views", function() {
        $location.path("/");
        $rootScope.$digest();
        expect($route.current.controller).toBe("SearchCtrl");

        $location.path("/viewthatdoesnotexist");
        $rootScope.$digest();
        expect($route.current.controller).toBe("SearchCtrl");
    });


});
