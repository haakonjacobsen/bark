import { gql } from 'apollo-server-express';
import { GraphQLScalarType, Kind } from 'graphql';
// const {gql} = require("apollo-server-express");
// const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  scalar Date

  type Post {
    id: ID
    dogBreed: String
    price: Int
    dogAge: Date
    postDate: Date
    description: String
  }

  type User {
    id: ID
    firstname: String
    lastname: String
    password: String
    birthday: Date
    email: String
    verifiedBreeder: Boolean
    phoneNr: String
    dogBreeds: [String]
    picture: [String]
  }

  input SearchInput {
    searchKeyword: String
    limit: Int
    offset: Int
  }

  type Query {
    hello: String
    getAllPost: [Post]
    getSearchPost(searchKeyword: String, limit: Int, offset: Int): [Post]
  }

  input PostInput {
    dogBreed: String
    price: Int
    description: String
  }

  input UserInput {
    firstname: String
  }

  type Mutation {
    createPost(post: PostInput): Post
    createUser(user: UserInput): User
  }
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

export default typeDefs;
