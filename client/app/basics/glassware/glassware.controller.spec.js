'use strict';

describe('Controller: GlasswareCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var GlasswareCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlasswareCtrl = $controller('GlasswareCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
