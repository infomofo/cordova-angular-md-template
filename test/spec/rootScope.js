'use strict';

describe('rootScope', function () {

  // load the controller's module
  beforeEach(module('yoAngularCordovaApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend) {
    $httpBackend.when('GET', 'views/about.html').respond('about');
    $httpBackend.when('GET', 'views/list.html').respond('list');
    $httpBackend.when('GET', 'views/main.html').respond('main');
  }));


  it('should obey history logic', function () {

    inject(function($route, $location, $rootScope) {
      expect($rootScope.isHistoryEmpty()).toBe(true);
      expect($rootScope.isHistory()).toBe(false);
      $rootScope.go('/about');
      $rootScope.$digest();
      expect($route.current.controller).toBe('AboutCtrl');
      expect($route.current.templateUrl).toBe('views/about.html');
      expect($route.current.originalPath).toBe('/about');
      expect($rootScope.isHistoryEmpty()).toBe(true);
      expect($rootScope.isHistory()).toBe(false);

      $rootScope.go('/list');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('views/list.html');
      expect($route.current.originalPath).toBe('/list');

      $rootScope.backFunction();
      $rootScope.$digest();
      expect($route.current.controller).toBe('MainCtrl');
      expect($route.current.templateUrl).toBe('views/main.html');
      expect($route.current.originalPath).toBe('/');
      expect($rootScope.isHistoryEmpty()).toBe(true);
      expect($rootScope.isHistory()).toBe(false);

      $rootScope.go('/list');
      $rootScope.$digest();
      expect($route.current.templateUrl).toBe('views/list.html');
      expect($route.current.originalPath).toBe('/list');

      $rootScope.clearHistory();
      $rootScope.$digest();
    });

  });

});
