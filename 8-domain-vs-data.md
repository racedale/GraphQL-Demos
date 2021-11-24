Focus on designing mutations around the domain rather than the data model.

## Problem:

```graphql
input UpdateCartInput {
  productIds: [ID]
  couponCode: String
}

updateCart(input: { productIds: ['asdf']}) # add product
updateCart(input: { productIds: ['asdf', 'qwer']}) # add product
updateCart(input: { couponCode: 'coupon'}) # add coupon
createOrder(input: {address: '', paymentInfo: ''}) # checkout
```

---

## Solution:

```graphql
addProductToCart(input: { productId: 'asdf'})
addProductToCart(input: { productId: 'qwer'})
applyCouponToCart(input: { couponCode: 'coupon'})
checkout(input: {address: '', paymentInfo: ''})
```

An issue with `updateCart` is that we always need to provide the full list of `productIds` whenever we want to add a product. We can fix this by not doing a one-to-one mapping between properties and input fields, but then we also don't match the data model exactly anymore.
While `createOrder` indicates well that an order is created, which is really valuable, it's not obvious that it also resets the cart. Checkout also doesn't indicate this, but at least it doesn't hint to the idea that only an order is created.
With the domain model, we indicate which actions or use cases are supported. **There is no need for nullable input fields for non-nullable properties of a model, and we can define which input fields must be provided together in separate mutations.**

By focusing on the domain model rather than the data model we get benefits from

- We indicate which actions/use-cases are supported.
- There is no need for nullable input fields for non-nullable properties of a model.
- We can define which input fields must be provided together in separate mutations.
