'use strict';

angular.module('bevBuilderApp')
  .service('signUpService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
   this.things = ['signUp','login'];
   this.userStatus1 = this.things[0];

   this.loggingIn = function() {
           this.userStatus1 = this.things[0];
           
        };
  });
