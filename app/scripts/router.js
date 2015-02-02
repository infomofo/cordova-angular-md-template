'use strict';

angular.module('yoAngularChromeApp')
  .config(function($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/scrollshrink', {
        templateUrl: 'views/scrollshrink.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

