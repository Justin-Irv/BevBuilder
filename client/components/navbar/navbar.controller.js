'use strict';

angular.module('bevBuilderApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $rootScope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $rootScope.userStatus = 'login';
      //$location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $rootScope.userStatus = 'signup';

    $scope.userLogin = function() {
      $rootScope.userStatus = 'login';
      console.log($scope.userStatus);

    };

    $scope.userSignin = function() {
      $rootScope.userStatus = 'signup';
      console.log($rootScope.userStatus);

    };

  });