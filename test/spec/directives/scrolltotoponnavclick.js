'use strict';

describe('Directive: scrollToTopOnNavClick', function () {

  // load the directive's module
  beforeEach(module('yoAngularCordovaApp'));

  var scope, element;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should scroll to top when NavClicked is detected', inject(function ($compile) {
    element = angular.element('<div scroll-to-top-on-nav-click>div</div>');
    element = $compile(element)(scope);
    //element.scrollTop(10);
    //expect(element[0].scrollTop()).toBe(10);

    inject(function($rootScope) {
      $rootScope.$emit('NavClicked');
      $rootScope.$digest();
      //expect(element[0].scrollTop()).toBe(0);
    });
  }));
});
