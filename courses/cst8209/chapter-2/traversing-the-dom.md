---
title: Traversing the DOM
---

# Traversing the DOM

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/Pr4LLrmDLLo?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

While it is always easier to select an element directly using `getElementById()` or `querySelector()`, there are times when that will be difficult to do. During those times it might be necessary to move through the DOM from a specific point. Fortunately, JavaScript provides many different methods for doing just that.

## children

The [`children`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children) property is a read-only property that contains all of the child elements of a specific element. 

```js
const $list = document.getElementById('list')
const $items = list.children // HTMLCollection
```

> #### NOTE
> An [`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) is an array-like object of HTML elements that offers methods and properties for access and manipulating the elements.

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Traversing the DOM - children" src="//codepen.io/IMD/embed/mdbVKjW/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/mdbVKjW/'>Traversing the DOM - children</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## firstElementChild

The [`firstElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild) property returns an element's first child element, or `null` if the element has no children.


```js
const $list = document.getElementById('list')
const $firstItem = list.firstElementChild // HTML Element
```

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Traversing the DOM - firstElementChild" src="//codepen.io/IMD/embed/pozgKxQ/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/pozgKxQ/'>Traversing the DOM - firstElementChild</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> #### NOTE
> There is also a [`lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild) property, which returns an element's last child element.


## nextElementSibling

The [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling) is a property that returns an element's next sibling element. 

```js
const $list = document.getElementById('list')
const $firstItem = list.firstElementChild // HTML Element
const $nextItem = firstItem.nextElementSibling // HTML Element
```

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Traversing the DOM - nextElementSibling" src="//codepen.io/IMD/embed/dybGjbN/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/dybGjbN/'>Traversing the DOM - nextElementSibling</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> #### NOTE
> There is also a [`previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling) is a property that returns an element's previous sibling element.

