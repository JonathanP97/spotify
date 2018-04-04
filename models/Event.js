var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  eventName: {
    type: String
  },
  hostName: {
    type: String,
    required: 'need host name'
  },
  hostId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  responses: {
    type: Array
  }
});


var Event = mongoose.model("Event", EventSchema);
module.exports = Event;