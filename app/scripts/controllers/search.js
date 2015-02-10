'use strict';

/**
 * @ngdoc function
 * @name yoAngularCordovaApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the yoAngularCordovaApp
 */
angular.module('yoAngularCordovaApp')
  .controller('SearchCtrl', function ($scope, $routeParams) {

    $scope.searchModel = {
      query: null
    };

    $scope.searchModel.query = $routeParams.query;

  });
