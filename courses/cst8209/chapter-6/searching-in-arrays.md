---
title: Search in Arrays
---

# Searching in Arrays

## The indexOf() Method

The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns the **first** index of the item that matches the provided value. If no matches were found the method will return `-1`.

```js
const colors = ['red', 'orange', 'red', 'purple', 'blue']

console.log(colors.indexOf('purple'))  // 3
console.log(colors.indexOf('red'))     // 0
console.log(colors.indexOf('black'))   // -1
```

> #### NOTE
> The [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) method can be used to return the **last** index of the item that matches the provided value. 


## The includes() Method

The [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method determines whether an array includes the specified value, and returns `true` or `false` appropriately. 

```js
const colors = ['red', 'orange', 'red', 'purple', 'blue']

console.log(colors.includes('purple')) // true
console.log(colors.includes('red'))    // true
console.log(colors.includes('black'))  // false
```

## The find() Methods

The [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method returns the **value** of the **first** item in the array that satisfies the provided testing function. If no item passes the test, undefined is returned. 

```js
const numbers = [5, 12, 15, 8]

console.log(numbers.find(item => item > 10)) // 12
console.log(numbers.find(item => item > 20)) // undefined
```

> #### NOTE
> The [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method will return the **index** of a found element in the array instead of its value. 