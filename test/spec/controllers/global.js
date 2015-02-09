'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularCordovaApp'));

  var GlobalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlobalCtrl = $controller('GlobalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.searchActive).toBe(false);
    scope.showSearch();
    expect(scope.searchActive).toBe(true);
    scope.disableSearch();
    expect(scope.searchActive).toBe(false);
  });
});
