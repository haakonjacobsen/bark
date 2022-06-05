import Post from './models/Post.model';
import User from './models/User.model';
import {
  CreatePostMutationArgs,
  CreateUserMutationArgs,
} from './types/mutationArgs';
import { GetSearchPostQueryArgs } from './types/queryArgs';

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World';
    },
    getAllPost: async () => {
      return await Post.find();
    },
    getSearchPost: async (_: any, args: GetSearchPostQueryArgs) => {
      const { searchKeyword, limit, offset } = args;
      return await Post.find({ $text: { $search: searchKeyword } })
        .limit(limit)
        .skip(offset);
    },
  },
  Mutation: {
    createPost: async (_: any, args: CreatePostMutationArgs) => {
      const { dogBreed, price, description } = args.post;
      const post = new Post({ dogBreed, price, description });
      await post.save();
      return post;
    },
    createUser: async (_: any, args: CreateUserMutationArgs) => {
      const { firstname, lastname, email, phoneNr, verifiedBreeder } =
        args.user;
      const user = new User({ firstname, lastname });
      await user.save();
      return user;
    },
  },
};

export default resolvers;
