Best to use specific use case field naming for top level fields rather than adding lots of optional (or required) inputs. Using multiple inputs makes it not clear to the client which can be provided or omitted, and makes it very difficult to deprecate an input compared to a separate field.

## Problem:

```graphql
query {
  # using alias so there isn't multiple "fields"
  fieldsById: fields(id: "1234") {
    id
    name
    description
  }
  # using alias so there isn't multiple "fields"
  fieldsByName: fields(name: "field name") {
    id
    name
    description
  }
  # what happens when both are sent??
  fields(id: "1234", name: "field name") {
    id
    name
    description
  }
}
```

```json
{
  "fields": {
    "id": "1234",
    "name": "field name",
    "description": "field description"
  }
}
```

---

## Solution:

```graphql
query {
  fields {
    id
    name
    description
  }
  fieldsById(id: "1234") {
    id
    name
    description
  }
  fieldsByName(name: "field name") {
    id
    name
    description
  }
}
```

```json
{
  "fields": {
    "id": "1234",
    "name": "field name",
    "description": "field description"
  },
  "fieldsByName": {
    "id": "1234",
    "description": "field description"
  }
}
```
