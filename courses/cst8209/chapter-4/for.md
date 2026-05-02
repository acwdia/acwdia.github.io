---
title: The for Loop
---

# for

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/CidzYW-8I7s?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

The [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) creates a loop that consists of three expressions separated by semi-colons and enclosed in parentheses. The three expressions are as follows: 
1. The ***initialization*** of the iterator
2. The ***condition*** is checked before each loop to see if the loop should continue
3. The ***iteration*** of the iterator

```
for (initialization; condition; iteration) {...}
```

The body of the `for` statement is enclosed in a set of curly braces (`{}`) and is executed each the statement loops as long as the ***condition*** evaluates to true.

```js
for (let i = 0; i < 5; i++) {
  console.log(i) // Logs 0 to 4
}

let total = 0

for (let i = 0; i < 5; i++) {
  total += i
}

console.log(total) // 10
```

The `for` statement can also be used to iterate over arrays by using the iterator as the array index. 

```js
const animals = ['cat', 'dog', 'mouse']

for (let i = 0; i < animals.length; i++) {
  // Logs all the animals in the array
  console.log(animals[i]) 
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]  
}

console.log(total) // 450
```
