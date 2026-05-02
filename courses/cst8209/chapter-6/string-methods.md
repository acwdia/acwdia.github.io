---
title: String Methods
---

# String Methods

It is often necessary to search inside and manipulate strings. So common are these tasks, that JavaScript has many different methods to help perform these tasks. 

The following methods are some of the most commonly used methods when working with strings. 

> #### NOTE
> Most string methods do **NOT** change the original string, but instead return a new altered string.


## toLowerCase() / toUpperCase()

It is often necessary to change the case of a string. JavaScript provides two easy-to-use methods for changing the case of the letter, [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) and [`toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase). Like most string methods, these methods do not change the original string. 

```js
const greeting = 'Hello, World!'

// converting the letters to lowercase
console.log(greeting.toLowerCase()) // 'hello, world!'

// converting the letters to uppercase
console.log(greeting.toUpperCase()) // 'HELLO, WORLD!'

// The original string is unchanged
console.log(greeting) // 'Hello, World!'
```

## split()

The [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method splits a string into an array of strings, by separating the string on a specified separator. 

```js
const command = "Take me to your leader!"

// splitting the string at each space
console.log(command.split(' ')) // ['Take', 'me', 'to', 'your', 'leader!']
```

## See Also
- [JavaScript String.split and Array.join](https://www.youtube.com/watch?v=ub9s1TPyZ00)