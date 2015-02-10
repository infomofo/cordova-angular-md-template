'use strict';

describe('Controller: GlobalCtrl', function () {

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
    expect(scope.searchModel.searchActive).toBe(false);
    scope.showSearch();
    expect(scope.searchModel.searchActive).toBe(true);
    scope.disableSearch();
    expect(scope.searchModel.searchActive).toBe(false);
  });
});
