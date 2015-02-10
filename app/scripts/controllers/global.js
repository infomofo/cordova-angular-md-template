'use strict';

/**
 * @ngdoc function
 * @name yoAngularCordovaApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the yoAngularCordovaApp
 */
angular.module('yoAngularCordovaApp')
  .controller('GlobalCtrl', function ($scope, $rootScope, $mdSidenav, $mdToast){

  $scope.searchModel = {
    searchActive: false,
    searchQuery: null
  };

  $scope.clickNav = function() {
    // Publish an event that can be handled by directives
    //console.log("nav clicked");
    $rootScope.$emit('NavClicked');
  };

  /**
   * Closes the mdSidenav and handles any related behavior
   */
  $scope.closeSideNav = function(){
    $mdSidenav('left').close()
      .then(function(){
        //console.debug("toggle left is done");
      });
  };

  /**
   * A replacement for the sidenav toggle button if it is replaced with a hamburger action.
   */
  $scope.handleHamburger = function() {
    if ($rootScope.isHistoryEmpty()) {
      $scope.toggleSideNav();
    } else {
      $rootScope.backFunction(true);
    }
  };

  $scope.openSidenav = function() {
    $mdToast.hide();
    console.log('toggling left');
    $mdSidenav('left').open()
      .then(function(){
        console.debug('toggle left is done');
      });
  };

  $scope.executeSearch = function() {
    var path = '/search/' + $scope.searchModel.searchQuery;
    console.debug('go to path ' + path);
    $scope.disableSearch();
    // lose focus on search bar
    $rootScope.go(path);
  };

  $scope.disableSearch = function() {
    //var searchBox = angular.element('#searchBox');
    //searchBox.blur();
    $scope.searchModel.searchActive = false;
    $scope.searchModel.searchQuery = null;
  };

  /**
   * Closes the mdSidenav and handles any related behavior
   */
  $scope.closeSideNav = function(){
    $mdSidenav('left').close()
      .then(function(){
        //console.debug("toggle left is done");
      });
  };

  /**
   * A replacement for the sidenav toggle button if it is replaced with a hamburger action.
   */
  $scope.handleHamburger = function() {
    if ($rootScope.isHistoryEmpty()) {
      $scope.toggleSideNav();
    } else {
      $rootScope.backFunction(true);
    }
  };

  /**
   * Handles the event of clicking on the nav bar- this is a common application convention that will make the active
   * scrollable container scroll to the top.
   */
  $scope.$on('NavClicked', function() {
    var domElement = document.getElementById('scrollcontainer');
    domElement.style.overflow = 'hidden';
    // wait for any current momentum scrolling to finish and then jump to top
    //$('#scrollcontainer').animate({scrollTop: 0}, 'fast');
    domElement.style.overflow = '';
  });

  /**
   * Displays the search box element on the toolbar
   */
  $scope.showSearch = function() {
    //var searchBox = angular.element('#searchBox');
    //searchBox.focus();
    $scope.searchModel.searchActive = true;
  };

  $scope.toggleSearch = function() {
    if ($scope.searchModel.searchActive) {
      $scope.disableSearch();
    } else {
      $scope.showSearch();
    }
  };

  /**
   * Displays an alert toast in the bottom right that disappears after 3 seconds
   *
   * Suitable for displaying short unactionable messages to the user
   *
   * @param message The alert message to display to the user
   */
  $scope.showAlertToast = function(message) {
    var toast = $mdToast.simple()
      .content(message)
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(2000);
    $mdToast.show(toast);
  };

  /**
   * Displays an alert toast in the bottom right that disappears when dismissed by the user
   *
   * Suitable for displaying short unactionable messages to the user
   *
   * @param message The alert message to display to the user
   */
  $scope.showAlertToastPersistent = function(message) {
    var toast = $mdToast.simple()
      .content(message)
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(0);
    $mdToast.show(toast);
  };

  /**
   * Displays an undoable toast in the bottom right that disappears after 3 seconds
   *
   * @param message the message to display to the user
   * @param callback the function to call when the undo action is clicked
   */
  $scope.showUndoToast = function(message, callback) {
    var toast = $mdToast.simple()
      .content(message)
      .action('undo')
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(2000);
    $mdToast.show(toast).then(function() {
      callback(true);
    });
  };

  /**
   * Displays an undoable toast in the bottom right that disappears when dismissed by the user
   *
   * @param message the message to display to the user
   * @param callback the function to call when the undo action is clicked
   */
  $scope.showUndoToastPersistent = function(message, callback) {
    var toast = $mdToast.simple()
      .content(message)
      .action('undo')
      .highlightAction(false)
      .position('bottom right')
      .hideDelay(0);
    $mdToast.show(toast).then(function() {
      callback(true);
    });
  };

});
