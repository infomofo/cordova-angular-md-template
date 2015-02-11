'use strict';

describe('Directive: pullToRefresh', function () {

  // load the directive's module
  beforeEach(module('yoAngularCordovaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pull-to-refresh></pull-to-refresh>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pullToRefresh directive');
  }));
});
