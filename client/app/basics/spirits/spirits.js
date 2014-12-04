'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('spirits', {
        url: '/spirits',
        templateUrl: 'app/basics/spirits/spirits.html',
        controller: 'SpiritsCtrl'
      });
  });