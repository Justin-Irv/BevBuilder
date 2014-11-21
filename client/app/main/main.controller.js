'use strict';

angular.module('bevBuilderApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.isBreakpoint = function (alias) {

  		return $('.device-' + alias).is(':visible');

  	};

  	$scope.breakpointCheck = function() {
  		if(isBreakpoint('xs')) {
  			return true;
  		}
  	};







//    $scope.awesomeThings = [];
//
//    $http.get('/api/things').success(function(awesomeThings) {
//      $scope.awesomeThings = awesomeThings;
//    });
//
//    $scope.addThing = function() {
//      if($scope.newThing === '') {
//        return;
//      }
//      $http.post('/api/things', { name: $scope.newThing });
//      $scope.newThing = '';
//    };
//
//    $scope.deleteThing = function(thing) {
//      $http.delete('/api/things/' + thing._id);
//    };
  });
