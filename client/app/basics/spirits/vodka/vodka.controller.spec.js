'use strict';

describe('Controller: VodkaCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var VodkaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VodkaCtrl = $controller('VodkaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
