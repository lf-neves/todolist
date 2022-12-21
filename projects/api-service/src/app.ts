import express from "express";

import { apolloServer } from "./apolloServer";

export const app = express();
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
