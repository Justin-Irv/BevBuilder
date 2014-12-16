'use strict';

describe('Controller: GinCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var GinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GinCtrl = $controller('GinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
