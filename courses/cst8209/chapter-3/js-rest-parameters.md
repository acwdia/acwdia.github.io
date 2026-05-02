# JavaScript Rest Parameters

<div className="video">
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://v2.scrimba.com/s06fie?pl=p4Mrt9"
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

The **[rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)** is used to represent an infinite number of arguments as an array. The rest parameter syntax is `...` preceding the parameter name. This can be effect when the number of arguments is unknown, or required to be grouped together. 

> #### NOTE
> Only the last parameter can be a "rest parameter"

```js
function add (...numbers) {
  return numbers.reduce(function (total, number) {
    return total += number
  })
}

console.log(add(4, 8, 3, 5, 2)) // 22
```

## See Also
- [Take the Rest Parameter challenge on freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters)
- [Watch "ES6 Rest & Spread operators on YouTube"](https://www.youtube.com/watch?v=QtGbcvZ6774)