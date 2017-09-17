import gql from 'graphql-tag';

export const listTypeDefs = gql`
  type List {
    _id: ID!
    text: String!
  }

  type Query {
    list: [List]
    list(text: String): [List]
  }

  type Mutation {
    addText(text: String!): List
    updateText(_id: ID!, text: String!): List
    deleteText(_id: ID!): List
  }
`;
