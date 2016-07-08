'use strict';

import mongoose from 'mongoose';

var AirportSchema = new mongoose.Schema({
  _id: String,
  iata_id: String,
  name: String,
  city: String,
  state: String,
  geography: {
    loc: { 
      type: { type: String },
      coordinates: [Number]
    },
    elevation: Number,
  }
});

AirportSchema.index({'geography.loc': '2dsphere'});

export default mongoose.model('Airport', AirportSchema);
