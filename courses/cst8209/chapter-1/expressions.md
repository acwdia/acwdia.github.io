# Expressions

In programming, an expression is a fragment of code that can be evaluated—resulting in a single value.

## Evaluating Expressions

Consider this expression: `1 + 1`

Evaluating it will result in a value of `2`. 

What about this expression: `1 == 1`

This is a comparison operation that checks if the left and right operands are equal. Since they are, the result of this expression will be `true`. Note that this is not a text value, but rather a boolean value of `true` (as opposed to `false`, the only other option for booleans).

## Using Expressions with Variables

Often, an expression will be evaluated and its result assigned to a variable. Here's how we'd do that in JavaScript.

```js
const value = 1 + 1
```

It's a trivial example, but useful for understanding how expressions are evaluated.

1. The expression `1 + 1` is first evaluated to `2`
1. The variable `value` is then assigned the result

## Other Expression Uses

We've seen so far that we can compute numerical values with expressions.

```js
console.log(10 / 2) //Result: 5
```

However, sometimes we need to see if a value comparison equates to true or false. These are called boolean expressions.

```js
console.log(5 == 5) //Result: true
```

This expression involves a comparison that can either be true or false—comparisons don't evaluate to numerical values. Comparisons are commonly used when determining when to run conditional code, or when to end a loop.

Here are a few more examples:

```js
const value = 10

console.log(value == 10)		//Result: true

console.log(value === 10)		//Result: true (best practice)

console.log(50 === 25 + 25)     //Result: true

console.log(value > 20) 		//Result: false

console.log(1 !== 42)			//Result: true
```

## Complex Expressions

Multiple expressions can be evaluated together using logical operators.

The logical AND `&&` will only evaluate to `true` if all expressions involved are `true`.

```js
console.log(1 === 1 && 10 < 20) //Result: true
console.log(1 === 1 && 1 === 2) //Result: false
```

The logical OR `||` will evaluate to `true` if at least one of the expressions involved is true.

```js
console.log(1 === 1 || 1 === 2) //Result: true
console.log(1 === 0 || 1 <= 0)  //Result: false
```

The logical NOT `!` will convert `false` to `true` and vice versa.

```js
console.log( !(1 === 5) ) //Result: true
```

## Truthy and Falsy Expressions

In programming, we can also perform some rather strange, but useful expression evaluations. Truthy and falsy expressions give general information about a variable without dealing with specific values. Truthy and falsy are best understood in the context of conditional code execution which is covered later in the course.

Here are some examples of falsy values:

1. A variable with a numerical value of `0`
1. An empty string (a piece of text) `''` or `""`
1. A variable with a `null` or `undefined` value

Here are some examples of truthy values:

1. A variable with any non-zero number
1. A string (a piece of text) containing at least one character
1. An empty array `[]` or object `{}`
