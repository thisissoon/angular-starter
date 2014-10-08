"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("snApp", function() {

    browser.get("app/index.html#/");

    it("should automatically redirect to / when location hash/fragment is empty", function() {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    describe("view1", function() {

	    beforeEach(function() {
	     	browser.get("app/index.html#/");
	    });


	    it("should render home partial when user navigates to /", function() {
	     	expect(element.all(by.css("ng-view h1")).first().getText()).toEqual("Home");
	    });

	  });


	 describe("view2", function() {

	    beforeEach(function() {
	    	browser.get("app/index.html#/another");
	    });


	    it("should render another view when user navigates to /another", function() {
	    	expect(element.all(by.css("ng-view h1")).first().getText()).toEqual("Another view");
	    });

	});

});
