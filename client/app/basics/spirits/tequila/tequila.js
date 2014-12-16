'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tequila', {
        url: '/basics/spirits/tequila',
        templateUrl: 'app/basics/spirits/tequila/tequila.html',
        controller: 'TequilaCtrl'
      });
  });