'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var airportCtrlStub = {
  index: 'airportCtrl.index',
  show: 'airportCtrl.show',
  create: 'airportCtrl.create',
  update: 'airportCtrl.update',
  destroy: 'airportCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var airportIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './airport.controller': airportCtrlStub
});

describe('Airport API Router:', function() {

  it('should return an express router instance', function() {
    expect(airportIndex).to.equal(routerStub);
  });

  describe('GET /api/airports', function() {

    it('should route to airport.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'airportCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/airports/:id', function() {

    it('should route to airport.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'airportCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/airports', function() {

    it('should route to airport.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'airportCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/airports/:id', function() {

    it('should route to airport.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'airportCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/airports/:id', function() {

    it('should route to airport.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'airportCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/airports/:id', function() {

    it('should route to airport.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'airportCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
