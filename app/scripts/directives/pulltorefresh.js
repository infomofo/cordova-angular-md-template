'use strict';

/**
 * @ngdoc directive
 * @name yoAngularCordovaApp.directive:pullToRefresh
 * @description
 * # pullToRefresh
 */
angular.module('yoAngularCordovaApp')
  .directive('pullToRefresh', function ($timeout) {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: 'template/pulltorefresh.tpl.html',
      scope: {
        refreshFunction: '&' // This function is expected to return a future
      },
      link: function postLink(scope, element, attrs) {

        scope.hasCallback = angular.isDefined(attrs.refreshFunction);
        scope.isAtTop = false;
        scope.pullToRefreshActive = false;

        scope.pullToRefresh = function () {
          if (scope.hasCallback) {
            if (!scope.pullToRefreshActive) {
              scope.pullToRefreshActive = true;
              scope.refreshFunction().then(function () {
                scope.pullToRefreshActive = false;
              });
              scope.$digest();
            }
          }

        };

        // Wait 1 second and then add an event listener to the scroll events on this list- this enables pull to refresh functionality
        $timeout(function () {
          var onScroll = function () {
            if (element[0].scrollTop <= 1) {
              //if (scope.isAtTop) {
                scope.pullToRefresh();
              //} else {
              //  scope.isAtTop = true;
              //}
            }
          };
          element[0].addEventListener('scroll', onScroll);
          element[0].addEventListener('touchmove', onScroll);
        }, 1000);




      }
    };
  });
