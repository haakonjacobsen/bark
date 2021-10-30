const Post = require('./models/Post.model');
const User = require('./models/User.model');

const resolvers ={
    Query: {
        hello: () => {
            return "Hello World";
        },
        getAllPost: async () => {
            return await Post.find()
        },
        getSearchPost: async (parent, args, context, info) => {
            const { searchKeyword, limit, offset } = args;
            return await Post.find({$text: { $search: searchKeyword }})
                .limit(limit)
                .skip(offset)
        },
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { dogBreed, price, description } = args.post;
            const post = new Post({dogBreed, price, description});
            await post.save();
            return post;
        },
        createUser: async (parent, args, context, info) => {
            const { firstname, lastname, email, phoneNr, verifiedBreeder } = args.user;
            const user = new User({firstname, lastname});
            await user.save();
            return user;
        }
    },
};

module.exports = resolvers;