const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HistorySchema = new Schema({
  data: {type: [Schema.Types.Mixed]},
  message: {type: String},
  status: {type: String}
});


// Export the model
module.exports = mongoose.model('History', HistorySchema);