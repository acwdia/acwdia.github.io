---
title: Array Methods
---

# Array Methods

Because arrays are such a vital part of most programs, JavaScript provides many different methods and expressions for working with them. These methods and expressions can be used to manipulate or search within arrays or create whole new arrays from existing arrays. 

These first methods are of the utility type and can be quite useful.

## The isArray() Method

Sometimes it is necessary to know if a variable contains an array. Unfortunately, we cannot rely on the value datatype. This is because, in JavaScript, arrays are of the object datatype. So, if we were to use `typeof` on an array, it would return `object`. Fortunately, there is a method for testing if a value is an array, the `isArray()` method. 

The [`isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) method determines whether the passed value is an `Array`. The method will return a `boolean`, `true` if the value is an `Array` or `false` if it is not. 

```js
// Creates an array of colors
const colors = ['blue', 'green', 'yellow', 'red', 'orange']

// Create an object of colors 
const theme = { color: 'black', background: 'white' }

// Checking the datatype of the variables
console.log(typeof colors) // object
console.log(typeof theme)  // object

// Checking the variables contain Arrays
console.log(Array.isArray(colors)) // true
console.log(Array.isArray(theme))  // false
```

## The join() Method

The [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method creates a string by concatenating all the elements of an array. 

```js 
// Creates a groceries list
const fruits = ['Apples', 'Bananas', 'Cherries']

console.log(fruits.join()) // Apples,Bananas,Cherries

console.log(fruits.join('')) // ApplesBananasCherries

console.log(fruits.join(' | ')) // Apples | Bananas | Cherries
```


