import { ApolloServer, gql } from "apollo-server";
import { books } from "./manual-mocks";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  "Logical representation of a Book with a name. Spatial attributes of the Book are provided in the Boundary"
  type Book {
    "Unique identifier for a Book"
    id: ID
    "Name of the Book"
    name: String
    "Unique identifier of the resource owner that owns the Book"
    resourceOwnerId: ID @deprecated(reason: "Use resourceOwner instead")
    "The resource owner that owns the Book."
    resourceOwner: ResourceOwner
  }

  type ResourceOwner {
    id: ID
    name: String
    email: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    bookById(id: ID!): Book
    resourceOwner(id: ID!): ResourceOwner
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// https://www.apollographql.com/docs/apollo-server/data/resolvers/
const resolvers = {
  Query: {
    books: () => books,
    bookById: (parent: any, args: any, context: any, info: any) =>
      books.find((book) => book.id === args.id),
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
