"use strict";

describe("AnotherCtrl", function (){

    var scope;

    beforeEach(function(){
        module("snApp");
    });

    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        $controller("AnotherCtrl", {
            $scope: scope
        });

    }));

    it("should have a variable foo which equals 456", function (){
        expect(scope.bar).toBe(456);
    });

   
});
