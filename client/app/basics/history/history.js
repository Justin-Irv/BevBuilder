'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('history', {
        url: '/history',
        templateUrl: 'app/basics/history/history.html',
        controller: 'HistoryCtrl'
      });
  });