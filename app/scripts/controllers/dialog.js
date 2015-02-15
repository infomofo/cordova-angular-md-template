'use strict';

/**
 * @ngdoc function
 * @name yoAngularChromeApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the yoAngularCordovaApp
 */
console.log('test');
angular.module('yoAngularCordovaApp')
  .controller('DialogCtrl', function ($scope, $mdBottomSheet) {
    console.log('initialized dialog ctrl');
    $scope.showListBottomSheet = function($event) {
      console.log('show list');
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'template/bottom-sheet-list-template.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'template/bottom-sheet-grid-template.html',
        controller: 'GridBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })
.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
  .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Hangout', icon: 'google' },
      { name: 'Mail', icon: 'envelope' },
      { name: 'Message', icon: 'whatsapp' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Twitter', icon: 'twitter' },
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });
