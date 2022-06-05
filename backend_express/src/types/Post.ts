import User from './User';

export type Post = {
  user: User;
  dogBreed: string;
  price: number;
  description: string;
  dogAge: Date;
  location: {
    type: string;
    coordinates: [number, number];
  };
};

export default Post;
