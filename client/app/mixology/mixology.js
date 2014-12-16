'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mixology', {
        url: '/mixology',
        templateUrl: 'app/mixology/mixology.html',
        controller: 'MixologyCtrl'
      });
  });