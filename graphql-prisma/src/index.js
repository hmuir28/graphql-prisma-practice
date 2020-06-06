import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolver/Query';
import Mutation from './resolver/Mutation';
import Comment from './resolver/Comment';
import Post from './resolver/Post';
import User from './resolver/User';
import Subscription from './resolver/Subscription';

// Resolvers
// hello within a Resolver is considered as an operation
// Parent, Arguments, Context and Info those are the parameters...
const resolvers = { Query, Mutation, Subscription, Comment, Post, User };

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    ...db,
    pubsub,
  }
});

server.start(() => {
  console.log(`It's up and running...`);
})