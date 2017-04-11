var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//represents lake data
var lakeSchema = new mongoose.Schema({
  date: {type: Date, required: true},
  lakename: {type: String, required: true, unique: true},
  laketimeminutes: {type: Number, required: true},
  laketimeseconds: {type: Number, required: true}
});

var Lake = mongoose.model('Lake', lakeSchema);

module.exports = Lake;
