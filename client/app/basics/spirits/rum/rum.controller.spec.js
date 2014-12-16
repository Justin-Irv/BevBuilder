'use strict';

describe('Controller: RumCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var RumCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RumCtrl = $controller('RumCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
