console.log('Starting the server...');

import express from 'express';
import { ApolloServer, ExpressContext, gql } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 4003;

dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  console.log('Connecting to MongoDB...');
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined');
  }
  await mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions);
  console.log('Connected to MongoDB');
};

const startApolloServer = async (): Promise<ApolloServer<ExpressContext>> => {
  console.log('Creating Apollo server...');
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  console.log('Created Apollo server');
  return apolloServer;
};

const init = async () => {
  await connectToDatabase();

  const apolloServer = await startApolloServer();

  console.log(
    `Server is running on http://localhost:${port}${apolloServer.graphqlPath}`
  );
};

app.listen(port, init);
