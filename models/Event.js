var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  event-name: {
    type: String
  },
  host-name: {
    type: String,
    required: 'need host name'
  },
  host-id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  responses: {
    type: Array
  }
});


var Event = mongoose.model("Event", EventSchema);
module.exports = Event;