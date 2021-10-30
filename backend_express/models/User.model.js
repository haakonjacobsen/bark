const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: {
        type: String,
        default: "jacobsen"
    },
    password: {
        type: String,
        default: "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
    },
    birthday: {
        type: Date,
        default: Date.UTC(1995, 10, 17)
    },
    email: {
        type: String,
        default: "user@gmail.com"
    },
    verifiedBreeder: {
        type: Boolean,
        default: false
    },
    phoneNr: {
        type: String,
        default: "90152117"
    },
    dogBreeds:{
        type:[String],
        default: ["golden-retriver"]
    },
    picture:{
        type: [String],
        default: ["default-profile.jpg"]
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;