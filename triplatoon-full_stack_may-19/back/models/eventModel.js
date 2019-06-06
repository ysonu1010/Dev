const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    leader: {
        type :String,
        required: true,
        ref:'leader'
    },
    trek_start:{type:String,required:true},
    trek_end:{type:String,required:true},
    meeting_address:{type:String,required:true},
    meeting_date:{type:String,required:true},
    meeting_time:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    //eventImage:{type:String,required:true},
    joinerscount:{type:Number,default:1},
    price:{type:Number,required:true}
});

module.exports = mongoose.model('event',eventSchema);

