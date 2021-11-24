Naming fields is important to prevent breaking changes. Starting with `resourceOwnerName` prevents needing to create a `resourceOwnerObject`

[Schema Naming Guide](https://www.apollographql.com/docs/apollo-server/schema/schema/#query-driven-schema-design)

## Problem:

```graphql
query {
  fields {
    id
    name
    resourceOwner
    resourceOwnerObject {
      name
      email
    }
  }
}
```

```json
{
  "fields": [
    {
      "id": "1234",
      "name": "field name",
      "resourceOwner": "owner name",
      "resourceOwnerObject": {
        "name": "owner name",
        "email": "owner email"
      }
    }
  ]
}
```

---

## Solution:

```graphql
query {
  fields {
    id
    name
    resourceOwnerName # deprecated
    resourceOwner {
      name
      email
    }
  }
}
```

```json
{
  "fields": [
    {
      "id": "1234",
      "name": "field name",
      "resourceOwnerName": "owner name",
      "resourceOwner": {
        "name": "owner name",
        "email": "owner email"
      }
    }
  ]
}
```
