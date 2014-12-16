'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brandy', {
        url: '/basics/spirits/brandy',
        templateUrl: 'app/basics/spirits/brandy/brandy.html',
        controller: 'BrandyCtrl'
      });
  });