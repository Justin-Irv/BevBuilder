'use strict';

describe('Service: signUp', function () {

  // load the service's module
  beforeEach(module('bevBuilderApp'));

  // instantiate service
  var signUp;
  beforeEach(inject(function (_signUp_) {
    signUp = _signUp_;
  }));

  it('should do something', function () {
    expect(!!signUp).toBe(true);
  });

});
