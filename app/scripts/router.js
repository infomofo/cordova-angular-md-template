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
      .when('/list', {
        templateUrl: 'views/list.html'
      })
      .when('/form', {
        templateUrl: 'views/form.html'
      })
      .when('/dialog', {
        templateUrl: 'views/dialog.html'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

