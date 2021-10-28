const {gql} = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require('graphql');

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
    input SearchInput {
        searchKeyword: String
    }
    
    type Query {
        hello: String
        getAllPost: [Post]
        getSearchPost(input: SearchInput): [Post]
    }
    
    input PostInput {
        dogBreed: String
        price: Int
        description: String
    }
    
    type Mutation {
        createPost(post: PostInput): Post
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

module.exports = typeDefs;