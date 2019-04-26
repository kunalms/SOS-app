const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {type: String, required: true, max: 255},
  contact: {type: String, required: true},
  email_id: {type: String}
});


// Export the model
module.exports = mongoose.model('User', UserSchema);