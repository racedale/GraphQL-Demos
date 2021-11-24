Can use default values to enable internationalization (and other use cases) where a field that used to return one type, needs to be more dynamic while still returning the same type. With default values, won't need to set the input as Non-Null, avoiding breaking changes to existing clients.
Can use aliases to get multiple of the same field at the same time

## Problem:

```graphql
query {
  fields {
    id
    name
    description
  }
}
```

```json
{
  "fields": [
    {
      "id": "1234",
      "name": "field name",
      "description": "english description"
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
    englishDescription: description(locale: "en")
    frenchDescription: description(locale: "fr")
  }
}
```

```json
{
  "fields": [
    {
      "id": "1234",
      "name": "field name",
      "englishDescription": "english description",
      "frenchDescription": "french description"
    }
  ]
}
```
