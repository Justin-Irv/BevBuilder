'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('whiskey', {
        url: '/basics/spirits/whiskey',
        templateUrl: 'app/basics/spirits/whiskey/whiskey.html',
        controller: 'WhiskeyCtrl'
      });
  });