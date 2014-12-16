'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('classes', {
        url: '/classes',
        templateUrl: 'app/classes/classes.html',
        controller: 'ClassesCtrl'
      });
  });