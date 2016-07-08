/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/airports              ->  index
 * POST    /api/airports              ->  create
 * GET     /api/airports/:id          ->  show
 * PUT     /api/airports/:id          ->  update
 * DELETE  /api/airports/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Airport from './airport.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function toGeojson(airport) {
  return {
    type: 'Feature',
    geometry: airport.geography.loc,
    properties: {
      _id: airport._id,
      iata_id: airport.iata_id,
      name: airport.name,
      city: airport.city,
      state: airport.state,
      elevation: airport.geography.elevation,
      icon: 'landplane-civil-tower'
    }
  };
}

function formatGeojson(format, res) {
  console.log(format ? 'yep' : 'nope');
  return function(entity) {
    if (format) {
      return { type: 'FeatureCollection', features: entity.map(toGeojson) };
    }
    return entity;
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Airports
export function index(req, res) {
  var geojson = (_.has(req.query, 'format') && req.query.format.toLowerCase() === 'geojson');
  return Airport.find().exec()
    .then(formatGeojson(geojson, res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Airport from the DB
export function show(req, res) {
  var geojson = (_.has(req.query, 'format') && req.query.format.toLowerCase() === 'geojson');
  return Airport.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(formatGeojson(geojson, res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
