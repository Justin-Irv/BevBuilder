'use strict';

describe('Controller: SpiritsCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var SpiritsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpiritsCtrl = $controller('SpiritsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
