'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('technique', {
        url: '/technique',
        templateUrl: 'app/basics/technique/technique.html',
        controller: 'TechniqueCtrl'
      });
  });