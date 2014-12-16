'use strict';

describe('Controller: MixologyCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var MixologyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MixologyCtrl = $controller('MixologyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
