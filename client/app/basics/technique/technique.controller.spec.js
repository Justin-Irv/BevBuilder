'use strict';

describe('Controller: TechniqueCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var TechniqueCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechniqueCtrl = $controller('TechniqueCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
