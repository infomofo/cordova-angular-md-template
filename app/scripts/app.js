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

app.run(function ($rootScope, $location, $mdSidenav, $mdToast) {

  var searchActive = false;

  $rootScope.toggleSidenav = function() {
    $mdToast.hide();
    //console.log("toggling left");
    $mdSidenav('left').toggle()
      .then(function(){
        //console.debug("toggle left is done");
      });
  };

  var history = [];

  $rootScope.$on('$routeChangeSuccess', function() {

    var path = $location.$$path;
    //tracker.sendAppView(path);
    if (path !== '/') {
      history.push($location.$$path);
    }
  });

  var disableSearch = function() {
    var searchBox = angular.element('#searchBox');
    searchBox.blur();
    searchActive = false;
  };

  var backFunction = function() {
    if (searchActive) {
      disableSearch();
    } else {
      var prevUrl = history.length > 1 ? history.splice(-2)[0] : '/';
      $location.path(prevUrl);
    }
  };

  $rootScope.backFunction = function () {
    backFunction();
  };

  var backButton = function() {
    backFunction();
    $rootScope.$apply();
  };

  var onResume = function() {
    $rootScope.$emit('Resumed');
  };

  var onDeviceReady = function(){
    document.addEventListener('backbutton', backButton, false);
    document.addEventListener('resume', onResume, false);
    document.addEventListener('online', onResume, false);
    // detect application touches and emit an event on rootscope:
    window.addEventListener('statusTap', function() {
      $rootScope.$emit('NavClicked');
    });
  };
  document.addEventListener('deviceready', onDeviceReady, false);

  /**
   * Clears the known history
   */
  $rootScope.clearHistory = function() {
    history = [];
  };

  /**
   * Returns if there is no history left to return to
   * @returns {boolean}
   */
  $rootScope.isHistoryEmpty = function() {
    return history.length <= 1;
  };

  /**
   * Returns if there is eligible history to go back to
   * @returns {boolean}
   */
  $rootScope.isHistory = function() {
    return history.length > 1;
  };

  /**
   * Closes the mdSidenav and handles any related behavior
   */
  $rootScope.closeSideNav = function(){
    $mdSidenav('left').close()
      .then(function(){
        //console.debug("toggle left is done");
      });
  };

  /**
   * A replacement for the sidenav toggle button if it is replaced with a hamburger action.
   */
  $rootScope.handleHamburger = function() {
    if ($rootScope.isHistoryEmpty()) {
      $rootScope.toggleSideNav();
    } else {
      $rootScope.backFunction(true);
    }
  };

  /**
   * This function should be called to change views- this will retain history and encapsulate any other behaviors.
   * @param url
   */
  $rootScope.go = function (url) {
    // Hide any active toasts when the route changes
    $mdToast.hide();

    $rootScope.closeSideNav();
    $location.path(url);
  };

  /**
   * Handles the event of clicking on the nav bar- this is a common application convention that will make the active
   * scrollable container scroll to the top.
   */
  $rootScope.$on('NavClicked', function() {
    var domElement = document.getElementById('scrollcontainer');
    domElement.style.overflow = 'hidden';
    // wait for any current momentum scrolling to finish and then jump to top
    //$('#scrollcontainer').animate({scrollTop: 0}, 'fast');
    domElement.style.overflow = '';
  });

  /**
   * Displays the search box element on the toolbar
   */
  $rootScope.showSearch = function() {
    var searchBox = angular.element('#searchBox');
    searchBox.focus();
  };

  /**
   * Displays an alert toast in the bottom right that disappears after 3 seconds
   *
   * Suitable for displaying short unactionable messages to the user
   *
   * @param message The alert message to display to the user
   */
  $rootScope.showAlertToast = function(message) {
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
  $rootScope.showAlertToastPersistent = function(message) {
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
  $rootScope.showUndoToast = function(message, callback) {
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
  $rootScope.showUndoToastPersistent = function(message, callback) {
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

app
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange');
  });
