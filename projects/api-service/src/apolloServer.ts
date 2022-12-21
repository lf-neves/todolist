import { resolvers, typeDefs } from "./graphql/schema";
import { ApolloServer } from "apollo-server-express";

export const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.start();
