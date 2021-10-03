const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    dogBreed: {
        type: String,
        default: "mixed",
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    dogAge: {
        type: Date,
        required: true,
        default: Date.now()
    },
    description: String,
    postDate: {
        type: Date,
        default: Date.now()
    },
    pictures: {
        type: [String],
        default: ['default-picture.jpg']
    }
})

module.exports = mongoose.model('Post', PostSchema);