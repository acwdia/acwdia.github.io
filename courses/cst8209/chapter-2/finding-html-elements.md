---
title: Finding HTML Elements
---

# Finding HTML Elements

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/DO02UZaedIo?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

## getElementById()

The [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) function returns a single element whose id matches the string provided. If no element is found with the matching `id` attribute, `null` will be returned. 

```js
const box = document.getElementById('box')
```

> #### NOTE
> Since element IDs are required to be unique if specified, `getElementById()` is considered the best way to find a specific element.

## textContent

The [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property provides access to an HTML element's text content. This property can be used to access and update an element's text content.

```js
const $box = document.getElementById('box')
$box.textContent = 'I am a box.'
```

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Finding HTML Elements - getElementById" src="//codepen.io/IMD/embed/jONWxoL/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/jONWxoL/'>Finding HTML Elements - getElementById</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> #### NOTE
> The [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) property also allows access to get and set the text of the element. However, there several [difference between how to the two properties work](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext). 


## querySelector()

The [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) function returns a single element through the use of a CSS Selector. In the case that a CSS Selector matches more than one element, the first element matched will be retrieved.

```js
const $box1 = document.querySelector('.box')
```

Any valid CSS Selector will work with `querySelector()`.

```js
// using tags and pseudo-classes
const $box2 = document.querySelector('div:nth-child(2)')

// using attributes
const $box3 = document.querySelector('[data-color]')
```

In the example below, three different CSS selectors are used to retrieve each of the three boxes and set the background color and text.

<iframe height="508" style={{width: '100%'}} scrolling="no" title="HTML Element - Using querySelector()" src="//codepen.io/IMD/embed/bwEORJ/?height=508&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/bwEORJ/'>HTML Element - Using querySelector()</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## querySelectorAll()

The [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) function returns all the elements as a list that matches the provided CSS Selector. Using the Array returned, it is possible to manipulate all of the matched elements.

```js
const $boxes = document.querySelectorAll('.box')
```

In the example below, all the boxes except the second one are retrieved using the `querySelectorAll()` function and the [`:not`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) selector. 

<iframe height="265" style={{width: '100%'}} scrolling="no" title="HTML Elements - Using querySelectorAll()" src="//codepen.io/IMD/embed/dpGwrz/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/dpGwrz/'>HTML Elements - Using querySelectorAll()</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>