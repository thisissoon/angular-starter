'use strict';

describe('myApp.results', function (){

  var $location, $route, $rootScope;

  beforeEach(function(){
    module('myApp.results');
  });

  beforeEach(inject(function ( _$location_, _$route_, _$rootScope_) {
    $location = _$location_;
    $route = _$route_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($httpBackend) {
    $httpBackend.whenGET(/.*/).respond(200);
  }));

  it('should load views', function() {
    $location.path('/results');
    $rootScope.$digest();
    expect($route.current.controller).toBe('ResultsCtrl');
  });


});
