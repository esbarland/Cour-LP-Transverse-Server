import { Task } from "../model/Task";

const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];

export const typeDef = `
    type Task {
        _id: ID!
        name: String
        description: String
        duration: String
        priority: Int
        assignee: [User]
    }

    extend type Query {
        taskSchemaAssert: String
        tasks: [Task]
    }
`;

export const resolvers = {
  Query: {
    taskSchemaAssert: async () => {
      return "get task schema";
    },
    tasks: async () => {
      let tasks = [];
      for (let index = 0; index < 3; index++) {
        tasks.push(dummy(Task, {
          ignore: ignoredFields,
          returnDate: true
        }))
      } 
      return tasks;
    },
  },



};