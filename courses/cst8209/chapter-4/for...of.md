---
title: The for...of Loop
---

# for...of

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/wc4jMuumqLM?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

The [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) is specifically designed to iterate over iterable objects, like strings and arrays, but does not work on object literals. Unlike the `for` statement, the `for...of` statement does not rely on an index to retrieve a value but instead stores each value to a defined variable.

## With Arrays

The expression of the `for...of` statement starts with an initialization of the variable used to hold each item's value. This is followed by the `of` keyword and ends with the iterable.

```js
const animals = ['cat', 'dog', 'mouse']

for (const animal of animals) {
  // Logs all the animals in the array
  console.log(animal) 
}

const incomes = [62000, 67000, 75000]
let total = 0

for (const income of incomes) {
  total += income
}

console.log(total) // 204000
```

## With Strings

The `for...of` statement also works with strings. When iterating over a string, the defined variable will be assigned to each character, one at a time. 

```js
const name = 'Ted Mosby'

for (const char of name) {
  // Logs each character of the name
  console.log(char)
}
```