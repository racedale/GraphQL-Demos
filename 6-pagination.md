When we need to add pagination, there is a specification from Facebook that is best practice to follow that solves almost all use cases for pagination. Called the [Relay Cursor Connections Spec](https://facebook.github.io/relay/graphql/connections.htm).

```graphql
query {
  fields(first: 5, after: "abc") {
    edges {
      node {
        {
          id
          name
          description
        }
      }
    }
  }
}
```

```json
{
  "fields": {
    "edges": [
      {
        "node": {
          "id": "1234",
          "name": "field name",
          "description": "field description"
        }
      }
    ]
  }
}
```
