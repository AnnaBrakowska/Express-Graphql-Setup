import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./types/User/index.js";
import resolvers from "./resolvers/User/index.js";
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
