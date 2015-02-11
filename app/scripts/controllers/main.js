'use strict';

/**
 * @ngdoc function
 * @name yoAngularCordovaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularCordovaApp
 */
angular.module('yoAngularCordovaApp')
  .controller('MainCtrl', function ($scope) {
    console.log('test');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
