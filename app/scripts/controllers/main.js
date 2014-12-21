'use strict';

/**
 * @ngdoc function
 * @name yoAngularChromeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularChromeApp
 */
angular.module('yoAngularChromeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
