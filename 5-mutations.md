Use input objects for mutation inputs rather than multiple fields. For output, return a mutation ID, along with whatever entities you want. Helpful when a mutation returns multiple entities.
For naming conventions, Mutations should be named as verbs. Inputs should be mutation name with Input appended at the end, and payloads should be mutation name with Payload appended.

[Relay Input Object Specification](https://doc.ebichu.cc/relay/graphql/mutations.htm)
[GraphQL Mutations](https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/)

## Problem:

```graphql
mutation CreateFieldMutation($name: String!, $description: String) {
  addField(name: $name, description: $description) {
    id
    name
    description
  }
}
```

```json
{
  "id": "1234",
  "name": "field name",
  "description": "field description"
}
```

---

## Solution:

```graphql
mutation CreateFieldMutation($input: CreateFieldInput!): CreateFieldPayload! {
  addField(input: $input) {
    mutationId
    field {
      id
      name
      description
    }
  }
}
```

```json
{
  "createField": {
    "field": {
      "id": "1234",
      "name": "field name",
      "description": "field description"
    }
  }
}
```
