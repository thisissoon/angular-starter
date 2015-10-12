'use strict';

describe('myApp.version.versionDirective', function() {
  var $element, $scope, $rootScope, version;

  beforeEach(module('myApp.version.appVersionDirective'));

  beforeEach(inject(function (_$rootScope_, $compile, $injector) {
    $rootScope = _$rootScope_;

    $scope = $rootScope.$new();

    version = $injector.get('bower').version;

    $element = '<app-version></app-version>';

    $element = $compile($element)($scope);
    $scope.$digest();

  }));

  it('should display the correct version number', function(){
    expect($element.html()).toContain(version);
  });

});
