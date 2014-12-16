'use strict';

describe('Controller: WhiskeyCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var WhiskeyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhiskeyCtrl = $controller('WhiskeyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
