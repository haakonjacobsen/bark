const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    dogBreed: String,
    price: Number,
    dogAge: {
        type: Date,
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

export const Pist =  mongoose.model('Pist', PostSchema);