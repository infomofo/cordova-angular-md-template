'use strict';

describe('Directive: scrollToTopOnNavClick', function () {

  // load the directive's module
  beforeEach(module('yoAngularCordovaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-to-top-on-nav-click></scroll-to-top-on-nav-click>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollToTopOnNavClick directive');
  }));
});
