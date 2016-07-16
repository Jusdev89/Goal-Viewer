'use strict';

describe('Service: lgGoalService', function () {

  // load the service's module
  beforeEach(module('goalViewerApp'));

  // instantiate service
  var lgGoalService;
  beforeEach(inject(function (_lgGoalService_) {
    lgGoalService = _lgGoalService_;
  }));

  it('should do something', function () {
    expect(!!lgGoalService).toBe(true);
  });

});
