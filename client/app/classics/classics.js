'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('classics', {
        url: '/classics',
        templateUrl: 'app/classics/classics.html',
        controller: 'ClassicsCtrl'
      });
  });