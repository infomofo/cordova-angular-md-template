'use strict';

describe('rootScope', function () {

  // load the controller's module
  beforeEach(module('yoAngularCordovaApp'));

  var scope, rootscope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootscope = $rootScope;
  }));


  it('should obey history logic', function () {
    expect(scope.isHistoryEmpty()).toBe(true);
    expect(scope.isHistory()).toBe(false);

    scope.go('/about');
    rootscope.$broadcast('$routeChangeSuccess', {});
    //expect(scope.isHistory()).toBe(true);
    //expect(scope.isHistoryEmpty()).toBe(false);

    scope.backFunction();
    expect(scope.isHistoryEmpty()).toBe(true);
    expect(scope.isHistory()).toBe(false);

    scope.go('/about');
    rootscope.$broadcast('$routeChangeSuccess', {});
    //expect(scope.isHistory()).toBe(true);
    //expect(scope.isHistoryEmpty()).toBe(false);

    scope.clearHistory();
    expect(scope.isHistoryEmpty()).toBe(true);
    expect(scope.isHistory()).toBe(false);
  });

});
