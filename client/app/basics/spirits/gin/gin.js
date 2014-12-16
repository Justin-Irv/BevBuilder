'use strict';

angular.module('bevBuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gin', {
        url: '/basics/spirits/gin',
        templateUrl: 'app/basics/spirits/gin/gin.html',
        controller: 'GinCtrl'
      });
  });