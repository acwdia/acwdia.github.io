# Comments

JavaScript, like most programming languages, provides developers with ways to leave comments through the code. JavaScript comments can be used to explain a block code, to make code more readable, or to leave messages for other developers or yourself. They can also be used to prevent execution when testing or experimenting with code.

JavaScript has two forms of comments Single Line Comments and Multi-line Comments. 

## Single Line Comments
Single-line comments start with `//` and continue until the end of the line. Any text following the `//` and before the end of the line will be ignored by JavaScript.

```js
// The following line demonstrates how to log a message to the console
console.log('Hello, World!')

// The following line demonstrates how to log a warning to the console
console.warn('Take me to your leader!')
```

Single-line comments can be used on the same line as code. These comments are referred to as inline comments. 

```js
const a = 3
const b = 5 

const c = a + b // The value of c should be 8 
```

## Multi-line Comments

Multi-line comments, or block comments, start with `/*` and end with `*/`

Any text between `/*` and `*/` will be ignored by JavaScript.

```js
/* 
The multiply function takes 
two numbers and multiplies them together
and returns the product.
*/
function multiply (a, b) {
  return a * b
} 
```

> #### NOTE
> Multi-line comments are often used for formal documentation

## Preventing Code Execution

Using comments to prevent code execution is an acceptable way to test and experiment with code. 

Adding `//` in front of a line of code will prevent the line of code from executing. 

```js
// The following line demonstrates how to log a message to the console
console.log('Hello, World!')

// The following line demonstrates how to log a warning to the console
console.warn('Take me to your leader!')

// The following line will not be executed
// console.error('Resistance is futile!')

```

## See Also
- [How to Write Comments in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
- [JavaScript Comments](https://www.w3schools.com/js/js_comments.asp)

