'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vodka', {
        url: '/basics/spirits/vodka',
        templateUrl: 'app/basics/spirits/vodka/vodka.html',
        controller: 'VodkaCtrl'
      });
  });