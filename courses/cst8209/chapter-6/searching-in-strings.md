---
title: Searching in Strings
---

# Searching in Strings

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/5NGnMnCSsnM?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

JavaScript includes a few different methods that can be used to search for a string within another string. 

## indexOf()

The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method returns the index within a string of the **first** occurrence of the specified substring. The method will return `-1` if the substring cannot be found. 

```js
const phrase = 'Almost before we knew it, we had left the ground.'

// get the index of the string 'we'
console.log(phrase.indexOf('we')) // 14

// get the index of the string 'we' after index 20
console.log(phrase.indexOf('we', 20)) // 26

// get the index of the string 'ship'
console.log(phrase.indexOf('ship')) // -1
```

> #### NOTE
> The [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) method for returning the index of the **last** occurrence of the specified substring.

## includes()

The [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method determines whether a substring is within another string. The method returns `true` or `false` appropriately. 

```js
const phrase = 'Almost before we knew it, we had left the ground.'

// check for the string 'we'
console.log(phrase.includes('we')) // true

// check for the string 'ship'
console.log(phrase.includes('ship')) // false
```

## search()
The [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) method searches for a match between a string and the provided *regular expression*. The method will return the index of the first match, or `-1` if no match is found. 

```js
const quote = 'To be, or not to be: that is the question'

// Search for a character that is not a letter or whitespace
console.log(quote.search(/[^\s\w]/g)) // 5 
console.log(quote[quote.search(/[^\s\w]/g)]) // , 

// Search for a period (.)
console.log(quote.search(/[.]/g)) // -1 
```

## match()
The [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) method retrieves the result of matching a string against a *regular expression*. The method will return an array with any matched patterns. 

```js
const quote = 'Beware the Ides of March.'

// Match for uppercase letters
console.log(quote.match(/[A-Z]/g)) // ['B', 'I', 'M']

// Match for word follow by comma
console.log(quote.match(/(\w+,)/g)) // null
```

## test()
The [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) method searches for a match between a *regular expression* and the provided string. The method will return `true` if a match is found and `false` if not. 

> #### NOTE
> The `test()` method is **NOT** a string method, but a method of the `RegExp` object. However, it is considered the best way to confirm if a pattern exists inside a string. 

```js
const quote = 'Romeo, Romeo! wherefore art thou Romeo?'

// Search for a character that is not a letter or whitespace
console.log(/[^\s\w]/g.test(quote)) // true

// Search for a period (.)
console.log(/[.]/g.test(quote)) // false
```

## startsWith()

The [`startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) method determines whether a string begins with the specified substring. The method returns `true` or `false` appropriately. 

```js
const phrase = 'Almost before we knew it, we had left the ground.'

// check if the string 'Almost' is at the beginning
console.log(phrase.startsWith('Almost')) // true

// check if the string 'we' is at the beginning
console.log(phrase.startsWith('we')) // false
```

> #### NOTE
> The [`endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) method for determining whether a string ends with the specified substring. 

## substring()

The [`substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method returns part of a string between the provided start index and the provided end index or the end of the string. 

> #### NOTE
> Do **NOT** confuse the `substring()` method with the [`substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) method. While `substr()` is a valid method, it is considered to be a legacy function and should not be used. 

```js
const greeting = 'Hello, World!'

// includes the first index but excludes the second
console.log(greeting.substring(0, 5)) // 'Hello'

// if only one index, goes to the end of the string
console.log(greeting.substring(7)) // 'World!'

// swaps the indexes, if the first is larger
console.log(greeting.substring(12, 7)) // 'World'

// negative indexes are treated as 0
console.log(greeting.substring(-6)) // 'Hello, World!'

// negative indexes are treated as 0
console.log(greeting.substring(-6, -1)) // ''
```

## slice()

The [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method returns part of a string between the provided start index and the provided end index or the end of the string. 

```js
const greeting = 'Hello, World!'

// includes the first index but excludes the second
console.log(greeting.slice(0, 5)) // 'Hello'

// if only one index, goes to the end of the string
console.log(greeting.slice(7)) // 'World!'

// returns an empty string, if the first is larger
console.log(greeting.slice(12, 7)) // ''

// negative indexes start from the end and work backwards
console.log(greeting.slice(-6)) // 'World!'

// negative indexes start from the end and work backwards
console.log(greeting.slice(-6, -1)) // 'World'
```


