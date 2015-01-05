'use strict';

describe('Controller: ZyxtCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var ZyxtCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZyxtCtrl = $controller('ZyxtCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
