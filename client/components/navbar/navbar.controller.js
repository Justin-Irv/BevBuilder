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
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  

    $rootScope.userLogin = function() {
      $rootScope.userStatus = 'login';

    };

    $rootScope.userSignin = function() {
      $rootScope.userStatus = 'signin';

    };

  });