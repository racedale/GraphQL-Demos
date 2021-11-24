Consider how the mutations will be used on the client side and optimize for static usage.

## Problem:

```graphql
addProductToCart(input: { productId: 'asdf' })
addProductToCart(input: { productId: 'qwer' })
```

```js
// Client would need to loop mutations to add multiple items to cart
selectedProducts.forEach((product) => addProductToCartMutation(product));
```

---

## Solution:

```graphql
addProductsToCart(input: { productIds: ['asdf', 'qwer'] })
```

With two `addProductToCart` mutations, on the backend the second mutation would only start when the first one executes successfully. With one `addProductsToCart` mutation, the implementation of whether to insert individually or in parallel is up to you.
