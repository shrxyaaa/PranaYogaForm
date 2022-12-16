import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var batch = new Schema({
   time:{
    type:String,
    required:true
   },
    profit:{
      type:Number,
      default:0
    }
});

mongoose.models = {};

var Batch = mongoose.model('Batch', batch);

export default Batch;
