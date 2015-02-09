'use strict';

/**
 * app.js
 *
 * This file will contain the module definition, routing, and themeing for the application
 */

/**
 * @ngdoc overview
 * @name yoAngularCordovaApp
 * @description
 * # yoAngularCordovaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('yoAngularCordovaApp', [
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

app
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange');
  });
