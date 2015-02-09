'use strict';

/**
 * @ngdoc directive
 * @name yoAngularCordovaApp.directive:scrollToTopOnNavClick
 * @description
 * # scrollToTopOnNavClick
 */
angular.module('yoAngularCordovaApp')
  .directive('scrollToTopOnNavClick', function ($rootScope, $timeout, $window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $rootScope.$on('NavClicked', function () {
          $timeout(function () {
            //console.debug('NavClicked detected on ' + element[0].outerHTML + ' has scrollTop ' + element[0].scrollTop);
            element[0].scrollTop = 0;
            //$window.scrollTo(0,0);
          });
        });
      }
    };
  });
