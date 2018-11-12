//1. install dependencies:
//    - @babel/cli @babel/core @babel/preset-env
//    - body-parser
//    - concurrently mongoose nodemon
//    - cors
//    - express express-graphql
//    - graphql graphql-tools merge-graphql-schemas

//2. Import dependencies
import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//4. Create a schema for mongoose
//5. Create graphql types and resolvers
//   - resolvers are connected to mongoose
//6. Merge types and resolvers using makeExecutableSchema into schema
//7. Import schema here
import schema from "./graphql/";
//8. Test

//3.Create express server and connect to database
// - server will use /graphql path for accessing data from graphql
// - expressGraphQL => pass schema and enable graphqil
// - cors and bodyparser
const PORT = process.env.PORT || "7000";
const app = express();

mongoose.connect(
  <URL HERE>,
  { useCreateIndex: true, useNewUrlParser: true }
);

app.use("/graphql", expressGraphQL({ schema, graphiql: true }));
app.use(cors(), bodyParser.json());

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
