'use strict';

/**
 * rootScope.js
 *
 * This file is for all functions that need to be globally accessible or access shared memory between routes.
 */
angular.module('yoAngularCordovaApp')
  .run(function ($rootScope, $location, $mdToast, $mdSidenav) {

  var history = [];

  $rootScope.$on('$routeChangeSuccess', function() {

    var path = $location.$$path;
    //tracker.sendAppView(path);
    if (path !== '/') {
      history.push($location.$$path);
    }
  });

  var backFunction = function() {
    var prevUrl = history.length > 1 ? history.splice(-2)[0] : '/';
    $location.path(prevUrl);
  };

  $rootScope.backFunction = function () {
    backFunction();
  };


  var onResume = function() {
    $rootScope.$emit('Resumed');
  };

  //document.addEventListener("deviceready", function() {
    console.log('deviceready');
      document.addEventListener('resume', onResume, false);
      document.addEventListener('online', onResume, false);
      // detect application touches and emit an event on rootscope:
      window.addEventListener('statusTap', function () {
        $rootScope.$emit('NavClicked');
      });
    //});

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
   * This function should be called to change views- this will retain history and encapsulate any other behaviors.
   * @param url
   */
  $rootScope.go = function (url) {
    // Hide any active toasts when the route changes
    $mdToast.hide();

    $mdSidenav('left').close()
      .then(function(){
      });
    $location.path(url);
  };

});
