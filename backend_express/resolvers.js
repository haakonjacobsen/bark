const Post = require('./models/Post.model');

const resolvers ={
    Query: {
        hello: () => {
            return "Hello World";
        },
        getAllPost: async () => {
            return await Post.find()
        },
        getSearchPost: async (parent, args, context, info) => {
            const { searchKeyword } = args.input;
            return await Post.find({
                $text: { $search: searchKeyword }
            })
        },
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { dogBreed, price, description } = args.post;
            const post = new Post({dogBreed, price, description});
            await post.save();
            return post;
        }
    },
};

module.exports = resolvers;