import {Project} from "../model/Project";

const dummy = require('mongoose-dummy');
const ignoredFields = ['created_at', '__v', /detail.*_info/];

export const typeDef = `
    type Project {
        _id: ID!
        name: String
        description: String
        tasks: [Task]
    }

    input ProjectInput{
        name: String
        description: String
    }

    extend type Query {
        projectSchemaAssert: String
        projects: [Project]
        project(_id: ID!): Project
    }
`;

export const resolvers = {
  Query: {
    projectSchemaAssert: async () => {
      return "Hello world, from Project schema";
    },

    projects: async () => {
      let projects = [];
      for (let index = 0; index < 3; index++) {
        projects.push(dummy(Project, {
          ignore: ignoredFields,
          returnDate: true
        }))
      } 
      return projects;
    },

    project: async (root, { _id }, context, info) => {
      return dummy(Project, {
        ignore: ignoredFields,
        returnDate: true
      })
    },
  },

};