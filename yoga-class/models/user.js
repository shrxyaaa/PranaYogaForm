import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name:{
    type:String,
    required:true
   },
   email:{
      type:String,
      required:true
     },
   batch:{
    type:String,
    required:true
     },
    dueFee:{
      type:Number,
      default:500
     },
   age:{
    type:String,
    required:true
   }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;
