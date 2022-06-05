import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  dogBreed: String,
  price: Number,
  dogAge: {
    type: Date,
    default: Date.UTC(2020, 10, 17),
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
  description: String,
  picture: [String],
});

const Post = mongoose.model('post', PostSchema);
export default Post;
