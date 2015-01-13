'use strict';

describe('Directive: imagefill', function () {

  // load the directive's module
  beforeEach(module('bevBuilderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imagefill></imagefill>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imagefill directive');
  }));
});