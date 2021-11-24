const { ApolloServer, gql } = require("apollo-server");
import { fields } from "./manual-mocks";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  "Logical representation of a Field with a name. Spatial attributes of the Field are provided in the Boundary"
  type Field {
    "Unique identifier for a Field"
    id: ID
    "Name of the Field"
    name: String
    "Unique identifier of the resource owner that owns the Field"
    resourceOwnerId: ID @deprecated(reason: "Use resourceOwner instead")
    "The resource owner that owns the Field."
    resourceOwner: ResourceOwner
  }

  type ResourceOwner {
    id: ID
    name: String
    email: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "fields" query returns an array of zero or more Fields (defined above).
  type Query {
    fields: [Field]
    fieldById(id: ID!): Field
    resourceOwner(id: ID!): ResourceOwner
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
const resolvers = {
  Query: {
    fields: () => fields,
    fieldById: (parent, args, context, info) =>
      fields.find((field) => field.id === args.id),
  },
};

// For custom mocks
const mocks = {
  String: () => "Mocked String",
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks, // can be boolean "true", or config object for more control
  mockEntireSchema: false, // useful for using resolvers for specific queries, and defaulting to mocks for the rest
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
