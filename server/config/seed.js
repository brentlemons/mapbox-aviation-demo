/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Airport from '../api/airport/airport.model';

Airport.find({}).remove()
  .then(() => {
    Airport.create({
      _id: 'ATL',
      iata_id: 'KATL',
      name: 'Hartsfield - Jackson Atlanta International Airport',
      city: 'Atlanta',
      state: 'GA',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-84.4278640, 33.6366996]
        },
        elevation: 312.8
      }
    }, {
      _id: 'BOS',
      iata_id: 'KBOS',
      name: 'General Edward Lawrence Logan International Airport',
      city: 'Boston',
      state: 'MA',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-71.0063889, 42.3629444]
        },
        elevation: 5.8
      }
    }, {
      _id: 'DCA',
      iata_id: 'KDCA',
      name: 'Ronald Reagan Washington National Airport',
      city: 'Washington',
      state: 'DC',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-77.0377222, 38.8514444]
        },
        elevation: 4.3
      }
    }, {
      _id: 'DFW',
      iata_id: 'KDFW',
      name: 'Dallas-Fort Worth International Airport',
      city: 'Dallas-Fort Worth',
      state: 'TX',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-97.0376949, 32.8972316]
        },
        elevation: 185.0
      }
    }, {
      _id: 'LAX',
      iata_id: 'KLAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
      state: 'CA',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-118.4071129, 33.9425049]
        },
        elevation: 38.9
      }
    }, {
      _id: 'ORD',
      iata_id: 'KORD',
      name: "Chicago O'Hare International Airport",
      city: 'Chicago',
      state: 'IL',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-87.9080059, 41.9773201]
        },
        elevation: 207.3
      }
    }, {
      _id: 'SFO',
      iata_id: 'KSFO',
      name: 'San Francisco International Airport',
      city: 'San Francisco',
      state: 'CA',
      geography: {
        loc: { 
          type: 'Point',
          coordinates: [-122.3754167, 37.6188056]
        },
        elevation: 4.0
      }
    });
  });

