'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('basics', {
        url: '/basics',
        templateUrl: 'app/basics/basics.html',
        controller: 'BasicsCtrl'
      });
  });