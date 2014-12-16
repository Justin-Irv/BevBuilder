'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rum', {
        url: '/basics/spirits/rum',
        templateUrl: 'app/basics/spirits/rum/rum.html',
        controller: 'RumCtrl'
      });
  });