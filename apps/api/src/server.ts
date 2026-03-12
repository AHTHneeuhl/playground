import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

app.use(express.json());

const apolloServer = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello GraphQL",
    },
  },
});

async function startServer() {
  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));

  app.get("/", (req, res) => {
    res.send("API running");
  });

  app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
    console.log("GraphQL at http://localhost:4000/graphql");
  });
}

startServer();
