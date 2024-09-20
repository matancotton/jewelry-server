import express from 'express';
import connectToDatabase from '../db/connection.js';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolver.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import importData from '../db/importData.js';

await connectToDatabase();
// await importData();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
