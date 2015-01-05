'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('zyxt', {
        url: '/recipes/zyxt',
        templateUrl: 'app/recipes/zyxt/zyxt.html',
        controller: 'ZyxtCtrl'
      });
  });