# Strings

Strings are primitive data types that are used to represent text. They are also one of the most common data types used by JavaScript.

## String Literal

In JavaScript, a string literal is any number of characters (letters, numbers, or special characters) surrounded by a set of quotes (either single or double).

```js
const animal = 'dog'
const phone = '555-555-5555'
```

> #### NOTE
> Both single `'` and double `"` quotes can be used for strings. It is a preference for which one to use, but is it best to stay consistent.


## String Concatenation

The term concatenation refers to the combining of two or more strings together. In JavaScript, this is accomplished by the use of the plus sign (`+`). Concatenation can be used with string literals, numbers and variables. 

```js 
const greeting = 'Hello, ' + 'world'

const pet = 'dogs'
const number = 3

console.log('I have ' + number + ' ' + pet + '.')
```

When concatenating, JavaScript will attempt to convert all values to strings. Furthermore, because the plus sign (`+`) is also used for addition, this can cause unexpected results when working with strings and numbers.

```js
const add = 2 + 1 // 3
const cat = '2' + 1 // 21
```

String Literals do not support multiple lines, but it is possible to include multiple lines in a string by using the newline special character (`\n`) and string concatenation. 

```js
const title = 'Sherlock Holmes\n' +
'The Hound of the Baskervilles'
```

## Template Literals

The [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) is a syntax for string literal that allows for embedded expressions and multi-line support. To create a template literal the backtick (`` ` ``) is used to surround the string literal and any expressions.

```js
const greeting = `Hello, World`
```

Template literals also have multi-line support, which means it is possible to include a return inside of a string without the use of the special character or string concatenation.

```js
const address = `
221B Baker Street
London, England`
```

## Expression Interpolation

Template literal can contain placeholders (`${expression}`) which are used to embed expressions into a string. Expressions can include variables, formulas or functions. 

```js
const name = 'Ted'
const game = `Have you met ${name}?` // Have you met Ted?

const a = 5
const b = 3
const product = `The product of a and b is ${a * b}` // The product of a and b is 15
```








