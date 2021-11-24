Nullable vs Non-nullable is important upfront to prevent breaking changes. When a Non-Null field changes to Nullable, clients can break because they aren't expecting the absence of that field. When a Nullable field changes to Non-Null, clients can break because they may not be sending a field.
[nullable vs non-nullable](https://graphql.org/learn/best-practices/#nullability)

Generally:

- For Queries always try to use Nullable fields, and only make them Non-Null if you can GUARANTEE that the field will always be available in every possible scenario (now, future, error, etc). For this reason, Nullable tends to make sense even when you think a field will always be available.
- Nullable allows for a better experience by letting fields be null for services that go down, and to still be able to return the rest of the data rather than having to return an error for the entire request.
  - This also extends to different authorizations levels for different fields
- Consider all the possible problems that can go wrong and if `null` is an appropriate value for a failed field. If it's not, use Non-null.

- Deprecate a Nullable field: Use `@deprecated` to signify that a field will no longer be supported. Then transition towards returning `null` for it.
- Deprecate a Non-Null field: Use `@deprecated` to signify that a field will no longer be supported. Must confirm that no clients are using the field (with field level tracing), work with those teams to make updates, or potentially do brown-outs if used by the public and updates to stop using the field are not made.
