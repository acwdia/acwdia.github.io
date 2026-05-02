---
title: Creating New Strings
---

# Creating New Strings

Most string methods in JavaScript create and return new strings, instead of altering the original. However, the following methods are used to modify the characters of the original strings to create a whole new string. 

## concat()

The [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) method is used to concatenate strings together. This is an alternative to using the plus sign (`+`). The method accepts multiple string arguments. 

```js
const greeting = 'Hello'
const subject = 'World'

// combine greeting and subject with a comma and space between
console.log(greeting.concat(', ', subject)) // 'Hello, World'
```

## repeat()

The [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method creates and returns a new string by combining the specified number of copies of the string. 

```js
const chant = 'I think I can. '

// repeat chant three times.
console.log(chant.repeat(3)) // 'I think I can. I think I can. I think I can.'
```

## replace()

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/mcCn1NAu22k?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

The [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. 

```js
const chant = 'I think I can.'

console.log(chant.replace('think', 'know')) // 'I know I can.'
```

The `pattern` can also be a regular expression, which will allow multiple occurrences of the pattern to be replaced.

```js
const title = 'The Little Engine that Could'

// create a slug from the title
console.log(title.replace(/\s/g, '-').toLowerCase()) // 'the-little-engine-that-could'
```

## trim()

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/ZE1hi41_ZzE?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

The [`trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) method removes whitespace from the beginning and the end of a string. In this context, whitespace refers to all the whitespace characters including spaces, tabs and returns.  

```js
const greeting = '    Hello, World!     ';

// removing all whitespace from string
console.log(greeting.trim()) // 'Hello, World!'
```

> #### NOTE
> Use the [`trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) and [`trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) methods can also be used to remove whitespace from a string. 

