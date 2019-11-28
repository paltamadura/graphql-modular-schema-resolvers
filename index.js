// https://github.com/paltamadura/graphql-modular-schema-resolvers
// Based on https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2

const { typeDefs: User, resolvers: userResolvers } = require("./user");
const { typeDefs: Post, resolvers: postResolvers } = require("./post");
const { ApolloServer, makeExecutableSchema } = require("apollo-server");

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query, Post, User],
  resolvers: [resolvers, postResolvers, userResolvers]
});

const server = new ApolloServer({
  schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
