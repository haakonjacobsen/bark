const {gql} = require("apollo-server");


export const typeDefs = gql`
  type Cat {
    id: ID!
    name: String!
  }
  
  scalar Date

  type MyType {
    created: Date
  }
  
  type Pist {
    id: ID!
    dogBreed: String!
    price: Int!
    dogAge: Date
    postDate: Date
    pictures: [String]!
  }
  
  type Query {
    hello: String
    cats: [Cat!]!
    pist: [Pist!]!
    stuff: String
  }
   
  type Mutation {
    createCat(name: String!): Cat!
    createPist(dogBreed: String!, price: Int!): Pist!
  }
`;