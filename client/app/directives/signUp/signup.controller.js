'use strict';

angular.module('bevBuilderApp')
  .controller('signupController', function ($scope, $http, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};
    $scope.isLoggedIn = Auth.isLoggedIn;



    

    $scope.register = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
            Auth.createUser({
                name: $scope.user.name,
                email: $scope.user.email,
                password: $scope.user.password
            })
                .then( function() {
                    // Account created, redirect to home
                    //$location.path('/');
                    $scope.user.name = '';
                    $scope.user.email = '';
                    $scope.user.password = '';
                    
                })
                .catch( function(err) {
                    err = err.data;
                    $scope.errors = {};

                    // Update validity of form fields that match the mongoose errors
                    angular.forEach(err.errors, function(error, field) {
                        form[field].$setValidity('mongoose', false);
                        $scope.errors[field] = error.message;
                    });
                });
        }
    };

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
        $window.location.href = '/auth/' + provider;
    };


    $scope.regEx =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


});

// $scope.login = function(form) {
    //   $scope.submitted = true;

    //   if(form.$valid) {
    //     Auth.login({
    //       email: $scope.user.email,
    //       password: $scope.user.password
    //     })
    //     .then( function() {
    //       // Logged in, redirect to home
    //       $location.path('/');
    //     })
    //     .catch( function(err) {
    //       $scope.errors.other = err.message;
    //     });
    //   }
    // };


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

