---
title: Other Primitive Data Types
---

# Other Primitive Data Types

## Undefined

The [Undefined type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) has only one value: `undefined`. Because JavaScript usually defaults to `undefined` for all new variables, it can indicate that a variable has yet been assigned a value. It should also be mentioned that functions with a `return` will also return `undefined`. 

```js
let container

console.log(container) // undefined
 ```

## Null 

The [Null type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) has only one value: `null`. While `null`, like `undefined`, can indicate the absence of a value, conceptually `null` indicates the absence of an object. However, unlike `undefined`, the Null type must be explicitly defined.

```js
let container = null

console.log(container) // null
```

## Booleans

A [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) is a data type that can only have two values: `true` or `false`. In JavaScript, these `true` and `false` values are not strings but special keywords. Booleans might seem trivial and inconsequential, but they are very valuable and frequently used. 

```js
const isActive = true
const isAdmin = false
```

## Symbols

A [symbol] is a unique and immutable (unchangeable) primitive value. To create a new symbol, the `Symbol()` constructor is used with an optional string as its description. 

> #### NOTE
> The optional description does not change or alter the value of the symbol. Each time a `Symbol()` constructor use called a new symbol is created. 

```js
const one = Symbol("key")
const two = Symbol("key")

// the above are two unique symbols
```

Because of its unique and immutable nature, symbols can be used as a property key of an Object without the fear that it might clash with other keys. However, symbols are not enumberable, meaning that properties using a symbol will not return within a `for...in` interations or when using `console.log` on the whole object.

```js
const one = Symbol("key")
const two = Symbol("key")

const object = {}
object[one] = '1'
object[two] = '2'

console.log(object[one]) // '1'
console.log(object) // {}
```