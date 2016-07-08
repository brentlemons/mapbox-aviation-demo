'use strict';

describe('Service: airports', function () {

  // load the service's module
  beforeEach(module('mapboxAviationDemoApp.airports'));

  // instantiate service
  var airports;
  beforeEach(inject(function (_airports_) {
    airports = _airports_;
  }));

  it('should do something', function () {
    expect(!!airports).to.be.true;
  });

});
