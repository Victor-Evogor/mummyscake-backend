import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { getTypeDefs } from "@utils/getTypeDefs";
import { resolvers } from "./resolvers";
import { config } from "dotenv";
import express from "express";
import { connect } from "mongoose";
import { green, yellow } from "colors";
import cors from "cors";
config();

connect(process.env.DB_URI!).then(() =>
  console.log(green("Connected to database successfully!"))
);

const app = express();

const server = new ApolloServer({
  typeDefs: getTypeDefs(),
  resolvers,
});

server.start().then(() => {
  app.use(
    "/graphql",
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
    expressMiddleware(server)
  );
});

app.listen(process.env.PORT, () =>
  console.log(`
${yellow(`app running on ${process.env.PORT}`)}
`)
);
