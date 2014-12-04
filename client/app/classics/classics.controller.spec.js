'use strict';

describe('Controller: ClassicsCtrl', function () {

  // load the controller's module
  beforeEach(module('bevBuilderApp'));

  var ClassicsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassicsCtrl = $controller('ClassicsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
