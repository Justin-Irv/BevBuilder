'use strict';

describe('Controller: BrandyCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var BrandyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrandyCtrl = $controller('BrandyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
