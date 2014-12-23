'use strict';

/**
 * @ngdoc overview
 * @name yoAngularChromeApp
 * @description
 * # yoAngularChromeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('yoAngularChromeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ]);
app
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
      .otherwise({
        redirectTo: '/'
      });
  });

//app
//  .controller('SidenavController', function($scope, $mdSidenav) {
//    $scope.openLeftMenu = function() {
//      $mdSidenav('left').toggle();
//    };
//  });
