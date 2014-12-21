'use strict';

/**
 * @ngdoc function
 * @name yoAngularChromeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularChromeApp
 */
angular.module('yoAngularChromeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
