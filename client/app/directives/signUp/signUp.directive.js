'use strict';

angular.module('SignUpDirective', [])
  .directive('signUp', function () {
    return {
      templateUrl: 'app/directives/signUp/signUp.html',
      restrict: 'E',
      controller: 'signupController',
      link: function (scope, element, attrs) {
      }
    };
  });

  // angular.module('bevBuilderApp')
  // .directive('signUp', function () {
  //   return {
  //     templateUrl: 'app/directives/signUp/signUp.html',
  //     restrict: 'E',
  //     controller: 'signupController',
  //     link: function (scope, element, attrs) {
  //     }
  //   };
  // });