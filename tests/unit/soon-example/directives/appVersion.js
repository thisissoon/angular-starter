"use strict";

describe("appVersion", function() {
    var $element, $scope, $rootScope, version;

    beforeEach(module("sn.example"));

    beforeEach(inject(function (_$rootScope_, $compile, $injector) {
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();

        version = $injector.get("pkg").version;

        $element = "<app-version></app-version>";

        $element = $compile($element)($scope);
        $scope.$digest();

    }));

    it("should display the correct version number", function(){
        expect($element.html()).toContain(version);
    });

});
