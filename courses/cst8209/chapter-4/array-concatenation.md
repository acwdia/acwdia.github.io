# Array Concatenation

<div class="video">
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      src="https://v2.scrimba.com/s0taob"
      frameborder="0"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</div>

Array concatenation, like string concatenation, is the combining of two arrays together. There are two convenient techniques for doing just that.

## The concat() Method

The [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method is used to merge two or more arrays. It does not change existing arrays but instead returns a new array. 

```js
const primary = ['red', 'blue', 'yellow']
const secondary = ['purple', 'green', 'orange']


console.log(primary.concat(secondary)) 
// ['red', 'blue', 'yellow', 'purple', 'green', 'orange']
```

## The Spread Syntax

The [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is one of the more confusing yet incredibly useful features recently introduced to JavaScript. It is a shortcut that will write out or spread all the elements of an array. This can be useful for combining arrays. 

```js
const primary = ['red', 'blue', 'yellow']
const secondary = ['purple', 'green', 'orange']


console.log([...primary, ...secondary]) 
// ['red', 'blue', 'yellow', 'purple', 'green', 'orange']
```


## See Also
- [JavaScript Array concat method](https://www.youtube.com/watch?v=LuZunhQkkf0)


