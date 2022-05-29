const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

app.use(cors());
app.use(express.json());

async function startServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => res.send("Server is running"));
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}
startServer();
