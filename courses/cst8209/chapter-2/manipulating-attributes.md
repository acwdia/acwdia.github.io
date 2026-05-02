---
title: Manipulating Attributes
---

# Manipulating Attributes

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/tPSpyyjmFtA?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

When retrieving an HTML Element, each HTML Element is represented as an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) in JavaScript. Updating the properties of the `HTMLElement` will also manipulate how the HTML is displayed in the browser. With an `HTMLElement` it is possible to add, remove or change an element's attributes, classes, text and even its inner HTML.

All native attributes (non-custom attributes), can be accessed as properties in the HTML Element Object. So if we were to have an anchor tag like the one below, we would be able to read, change, add, and remove its attributes.

```html
<a id="link" href="https://facebook.com"></a>
```

## Reading Attributes

The [`getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) method returns the value of the specified attribute of the target element. If the attribute does not exist, the value returned will be `null` or an empty string (`" "`). 

If we had the HTML example above, we could retrieve the values of the attributes using the `getAttribute()` method like so.

```js
const $link = document.getElementById('link')
console.log($link.getAttribute('id')) // link
console.log($link.getAttribute('href')) // https://facebook.com
```

It is important to note that most standard attributes can be accessed directly from an element, using the attribute name as the property.

```js
const $link = document.getElementById('link')
console.log($link.id) // link
console.log($link.href) // https://facebook.com
```

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Manipulating Attributes - getAttribute()" src="//codepen.io/IMD/embed/WNerKQY/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/WNerKQY/'>Manipulating Attributes - getAttribute()</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## Changing Attributes

The [`setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method sets the value of an attribute on the specified element. If the attribute already exists, the value will be updated, otherwise, a new attribute will be added. 

```js
const $link = document.getElementById('link')
$link.setAttribute('href', 'https://twitter.com') // updates the attribute
$link.setAttribute('target', '_blank') // adds a new attribute
```

It is also possible to use the attribute properties to update and add new properties. 

```js
const $link = document.getElementById('link')
$link.href = 'https://twitter.com' // updates the attribute
$link.target = '_blank' // adds a new attribute
```

> #### NOTE
> This does **NOT** make changes to the HTML file itself. Only how the browser renders the HTML.

<iframe height="484" style={{width: '100%'}} scrolling="no" title="Manipulating Attributes - Changing Attributes" src="//codepen.io/IMD/embed/PoYZdNr/?height=484&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/PoYZdNr/'>Manipulating Attributes - Changing Attributes</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## Removing Attributes

The [`removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) method removes an attribute from an element.

```js
const $link = document.getElementById('link')
$link.removeAttribute('href')
```

> #### NOTE
> Using the `removeAttribute()` method is the preferred way to set an attribute to `null`, as attempting to do so with `setAttribute()` or the attribute property can have unexpected results.

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Manipulating Attributes - Removing Attributes" src="//codepen.io/IMD/embed/bGbExqd/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/bGbExqd/'>Manipulating Attributes - Removing Attributes</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>