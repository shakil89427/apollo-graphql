const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    phone: Int!
    location: String!
  }
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    addUser(name: String!, phone: Int!, location: String!): User
  }
`;

module.exports = typeDefs;
