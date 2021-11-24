# Notes

- What is GraphQL?
  - Not a graph database. Not a database query language like SQL. Not a state management tool. Not an ORM.
  - An API communication specification. Like REST & SOAP.
  - Solves overfetching and multiple HTTP calls, big benefit to mobile clients
  - While it can be versioned in the same way as REST, best practice is to be [versionless](https://graphql.org/learn/best-practices/#versioning)
  - Documentation is a first class citizen. Documentation stays to date.
  - Deprecation is a first class citizen.
- History
  - Originally created by Facebook back in 2012, first released publically in 2015.
- What is Apollo GraphQL?

  - "provides the data graph layer that connects modern apps to the cloud."
  - A library that implements the specification. Technically, multiple libraries: Apollo Client, Apollo Server, Apollo Federation, etc.
  - There's also the Apollo platform which manages even more (tracing, gateway, analytics, etc)
  - Handles a lot, especially on the client side (caching, etc)

- Recommended places ways to learn graphQL by learning style

  - Interactive (brand new): [Apollo Odyssey](https://odyssey.apollographql.com/)
  - Read: [HowToGraphQL.com](https://www.howtographql.com/)
  - Video (free): [What Is GraphQL](https://www.youtube.com/watch?v=VjXb3PRL9WI) by Scott Tolinski
  - Video (paid): [GraphQL Query Language](https://egghead.io/courses/graphql-query-language) by Eve Porcello, [Designing GraphQL Schemas](https://egghead.io/courses/designing-graphql-schemas-99db) by Nik Graf
  - Blog/Tools: [The Guild](https://the-guild.dev/)
  - Whitepaper: [GraphQL at Enterprise Scale](https://mcusercontent.com/161da4a2a76cd151a9ae22fec/files/575b044d-db40-42d0-a172-04f73eaa0471/Apollo_graphql_at_enterprise_scale_final.pdf?mc_cid=5c66166597)
  - Book: [The GraphQL Guide](https://graphql.guide/)
    - Released TODAY April 12th, 2021! [Use `LAUNCH` for 20% off](https://blog.graphql.guide/releasing-the-graphql-guide-d9be04747148)
