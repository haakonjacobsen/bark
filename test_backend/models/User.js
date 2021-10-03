const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    birthday:{
      type:Date,
      required: true,
      default: new Date(1970,1,1)
    },
    breeder:{
        type:Boolean,
        default: false
    },
    verifiedBreeder:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema);