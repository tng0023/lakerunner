var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//represents lake data
var lakeSchema = new mongoose.Schema({
  date: {type: Date, default: Date.now, required: true, validate: {
    validator : function(date){
      return(date.getTime() < Date.now());
    },message:'{VALUE} is not a valid date. Date must be in the past!'}},
  lakename: {type: String, required: true, unique: true, uniqueCaseInsensitive: true},
  laketimeminutes: {type: Number, required: true},
  laketimeseconds: {type: Number, required: true}
});

var Lake = mongoose.model('Lake', lakeSchema);
lakeSchema.plugin(uniqueValidator);

module.exports = Lake;
