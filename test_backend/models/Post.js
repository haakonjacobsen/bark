const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    dogBreed: String,
    price: Number,
    dogAge: Number,
    description: String,
    date: {
        type: Date,
        default: Date.now()
    },
    pictures: [String]
})

module.exports = mongoose.model('Posts', PostSchema);