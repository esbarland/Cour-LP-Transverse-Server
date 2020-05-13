import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// User typedefs and resolvers
import {
  typeDef as User,
  resolvers as userResolvers,
} from './schema/User.schema';

// Task typedefs and resolvers
import {
    typeDef as Task,
    resolvers as taskResolvers,
  } from './schema/Task.schema';

// General query
const Query = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

// Do not forget to merge at the end of typeDefs and resolvers
export const schema = makeExecutableSchema({
  typeDefs: [Query, User, Task],
  resolvers: merge(userResolvers, taskResolvers),
});