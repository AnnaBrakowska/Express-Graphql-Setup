//import types from user folder and merge them in one

import { mergeTypes } from "merge-graphql-schemas";
import User from "./User/";

const typeDefs = [User];

export default mergeTypes(typeDefs, { all: true });
