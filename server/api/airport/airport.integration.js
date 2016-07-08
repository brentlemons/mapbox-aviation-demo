'use strict';

var app = require('../../../server');
import request from 'supertest';

var newAirport;

describe('Airport API:', function() {

  describe('GET /api/airports', function() {
    var airports;

    beforeEach(function(done) {
      request(app)
        .get('/api/airports')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          airports = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(airports).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/airports', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/airports')
        .send({
          name: 'New Airport',
          info: 'This is the brand new airport!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAirport = res.body;
          done();
        });
    });

    it('should respond with the newly created airport', function() {
      expect(newAirport.name).to.equal('New Airport');
      expect(newAirport.info).to.equal('This is the brand new airport!!!');
    });

  });

  describe('GET /api/airports/:id', function() {
    var airport;

    beforeEach(function(done) {
      request(app)
        .get('/api/airports/' + newAirport._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          airport = res.body;
          done();
        });
    });

    afterEach(function() {
      airport = {};
    });

    it('should respond with the requested airport', function() {
      expect(airport.name).to.equal('New Airport');
      expect(airport.info).to.equal('This is the brand new airport!!!');
    });

  });

  describe('PUT /api/airports/:id', function() {
    var updatedAirport;

    beforeEach(function(done) {
      request(app)
        .put('/api/airports/' + newAirport._id)
        .send({
          name: 'Updated Airport',
          info: 'This is the updated airport!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAirport = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAirport = {};
    });

    it('should respond with the updated airport', function() {
      expect(updatedAirport.name).to.equal('Updated Airport');
      expect(updatedAirport.info).to.equal('This is the updated airport!!!');
    });

  });

  describe('DELETE /api/airports/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/airports/' + newAirport._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when airport does not exist', function(done) {
      request(app)
        .delete('/api/airports/' + newAirport._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
