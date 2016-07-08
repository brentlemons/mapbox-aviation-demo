/**
 * Airport model events
 */

'use strict';

import {EventEmitter} from 'events';
import Airport from './airport.model';
var AirportEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AirportEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Airport.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AirportEvents.emit(event + ':' + doc._id, doc);
    AirportEvents.emit(event, doc);
  }
}

export default AirportEvents;
