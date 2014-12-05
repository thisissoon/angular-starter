"use strict";

describe("HomeCtrl", function (){

    var scope;

    beforeEach(function(){
        module("sn.example");
    });

    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        $controller("HomeCtrl", {
            $scope: scope
        });

    }));

    it("should have a variable foo which equals 123", function (){
        expect(scope.foo).toBe(123);
    });


});
