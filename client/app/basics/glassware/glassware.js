'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('glassware', {
        url: '/glassware',
        templateUrl: 'app/basics/glassware/glassware.html',
        controller: 'GlasswareCtrl'
      });
  });