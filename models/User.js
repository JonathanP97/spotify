var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  name: {
    type: String
  },
  dateCreated: {
  	type: Date,
  	default: Date.now
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  }
});

// UserSchema.methods.generateHash = function(pass) {
//   return bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
// }

// UserSchema.methods.validPassword = function(pass) {
//   return bcrypt.compareSync(pass, this.password);
// }

var User = mongoose.model("User", UserSchema);
module.exports = User;