---
title: Arrays
---
# Arrays

<div class="video">
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      src="https://v2.scrimba.com/s0tao0"
      frameborder="0"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
  <p>
    <small>
      This Scrimba screencast was created by
      <a
        href="https://scrimba.com/@PizzaPokerGuy"
      >Dylan C. Israel</a>.
    </small>
  </p>
</div>

In most programming languages, it is possible to store a list of values in a single container. In JavaScript, this container is known as an array. An [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a comma-separated list of values, enclosed by a set of square brackets. 

## Creating an Array
In JavaScript, an array is created with a set of square brackets (`[]`). When nothing is between the square brackets, this will create an empty array.

```js
// Creates an empty array
const empty = []
```

Items can be added to the array by inserting a comma-separated list between the square brackets.

```js
// Creates an array of colors
const colors = ['blue', 'green', 'yellow', 'red', 'orange']

// Creates an array of numbers
const numbers = [1, 17, 8, 24]

// Creates a groceries list
const groceries = ['Apples', 'Milk', 'Ice Cream', 'Bread']
```

## Retrieving Array Items

Each item in an array is assigned a numbered index. This index will be used to retrieve each item from the array. 

> #### NOTE
> In JavaScript, like many other programming languages, arrays start with index `0`, not `1`.

To retrieve an item from an array, the variable name is followed by a set of square brackets (`[]`). Inside the square brackets is the numbered index of the desired items. This is known as **Bracket Notation**. 

```js
// Creates an array of colors
const colors = ['blue', 'green', 'yellow', 'red', 'orange']

// Logging the FIRST color in the colors array
console.log(colors[0]) // blue

// Logging the THIRD color in the colors array. 
console.log(colors[2]) // yellow
```

If a requested index is not in the array, the value `undefined` will be returned. 

```js
// Creates a groceries list
const groceries = ['Apples', 'Milk', 'Ice Cream', 'Bread']

// Logging an item that is not defined 
console.log(groceries[4]) // undefined
```

## Updating Array Items

Just as variables can be assigned values, so can the items of an array. Items can be added or replaced using the **Bracket Notation** and the equal sign (`=`).

```js
// Creates a groceries list
const groceries = ['Apples', 'Milk', 'Ice Cream', 'Bread']

// Replaces the FIRST item in the groceries array
groceries[0] = 'Bananas' // groceries = ['Bananas', 'Milk', 'Ice Cream', 'Bread']

// Replaces the THIRD item in the groceries array 
groceries[2] = 'Yogurt' // groceries = ['Bananas', 'Milk', 'Yogurt', 'Bread']

// Adds an item to the groceries array
groceries[4] = 'Carrots' // groceries = ['Bananas', 'Milk', 'Yogurt', 'Bread', 'Carrots']

```

> #### NOTE
> While possible, it is discouraged to use Bracket Notation for adding new items to an array. It is better to use Array methods like `push()` or `unshift()`, which we explore later in the course. 

## Multidimensional Arrays

Arrays may hold many different types of data including other arrays. Such arrays are known as multidimensional arrays. 

```js
// creating an array of arrays
const studentGroups = [
  ['John', 'Jane', 'Harry'],
  ['Sue', 'James', 'Lisa'],
  ['Tom', 'Kelly', 'Greg']
]
```

When accessing data from a multidimensional array, an extra set of notation is required. 

```js
// creating an array of arrays
const studentGroups = [
  ['John', 'Jane', 'Harry'],
  ['Sue', 'James', 'Lisa'],
  ['Tom', 'Kelly', 'Greg']
]

// logging the first group
console.log(studentGroups[0]) // ['John', 'Jane', 'Harry']

// logging the second student of the first group
console.log(studentGroups[0][1]) // 'Jane'
```




