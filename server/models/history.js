const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HistorySchema = new Schema({
  data: {type: [Schema.Types.Mixed]},
  message: {type: String},
  status: {type: String},
  type: {type: String},
  userMessage: {type: String},
  sentTo: {type:String},
  time: {type: Schema.Types.Date}
});


// Export the model
module.exports = mongoose.model('History', HistorySchema);