Fragments are selection sets that can be used across multiple queries. Particularly useful when you start using union types, and and to ensure you are only grabbing fields that exist on a section of a union.

## Fragments Example:

```graphql
query {
  fieldById(id: "1") {
    ...FieldDetails
  }
  fields {
    ...FieldDetails
  }
}

fragment FieldDetails on Field {
  name
  description
}
```

## There are also Inline Fragments:

```graphql
type CornField {cornSpecificInfo: ""}
type SoyField {soySpecificInfo: ""}

union Field = CornField | SoyField | {
  id: ID
  name: String
  description: String
}

query {
  allFields {
    __typename
    id
    name
    description
    ... on SoyField {
      soyType
    }
    ... on CornField {
      cornType
    }
  }
}
```
