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

    $('.bb-image').imagecover();
    $('hero-image1').imagecover();

    $scope.$on('$stateChangeSuccess',function(event){
    $('html').velocity('scroll', {offset: '0px', mobileHA: false, 
      delay: 500, duration: 500}, 'easeInOutCirc');
    console.log(event);
    }); 
  });