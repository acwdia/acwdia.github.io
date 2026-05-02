---
title: Creating HTML using Methods
---

# Creating HTML with Methods

An alternative way to create HTML elements with JavaScript is to use the `createElement()` method. This is the preferred technique for creating HTML elements because it is more secure and typically has better performance. However, it is more complex and difficult to use for novice developers.

## Creating HTML Elements

The [`createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method creates an HTML element with a specified tag name. The new element will have all of the properties and methods of elements retrieved from the DOM. However, the new element will only exist in JavaScript, as it has yet to be inserted into the HTML.

```js
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'
```

> #### NOTE 
> The `createElement()` method creates an HTML element. It does not immediately add it to the page.


## Inserting HTML Elements

After an HTML element has been created, it can be inserted into the HTML using an inserting method including [`append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append), [`preprend()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend), [`before()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/before), or [`after()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/after). 

Each of these methods will take one or more HTML elements to insert into the HTML. For example, if we had the following HTML:

```html
<ul id="list" class="list-group">
  <li class="list-group-item">Milk</li>
</ul>
```

We could add additional list items using the `append()` method. 

```js
const $list = document.getElementById('list')
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'

$list.append($item)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Creating HTML using Strings - insertAdjacentHTML" src="https://codepen.io/IMD/embed/poqgbWZ?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/poqgbWZ">
  Creating HTML using Strings - insertAdjacentHTML</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Cloning HTML Elements

In the above example, we added a list item to our list. It might be tempting to add another list item by reusing the previous element Like this:

```js
const $list = document.getElementById('list')
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'

$list.append($item)

// attempting to insert another list item
$item.textContent = 'Bread'
$list.append($item) // moves item, does not copy
```

However, this will not work. The variable `$item` is still connected to the first list item created. So by changing its text and appending the HTML will simply move the first element, not create a new one. One solution is the clone the element first using [`cloneNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode). 

```js
const $list = document.getElementById('list')
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'

$list.append($item)

// clones list item
$clone = $item.cloneNode(true)
$clone.textContent = 'Bread'
$list.append($clone)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Creating HTML using Methods - Cloning HTML Elements" src="https://codepen.io/IMD/embed/poqgbdZ?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/poqgbdZ">
  Creating HTML using Methods - Cloning HTML Elements</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Using DocumentFragments

When inserting many elements on the page, it is best to store all the elements in a `DocumentFragment`. A [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) is a contain that is "offscreen" and therefore not part of the main DOM tree. The advantage of working with a `DocumentFragment` is that appending children to it does not cause page reflow. 

To create a `DocumentFragment` the [`createDocumentFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment) method can be used. 

```js
const $fragment = document.createDocumentFragment();
```

Once a `DocumentFragment` has been created, children may be appended using the same method as any existing element.

```js
const $fragment = document.createDocumentFragment();
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'

$fragment.append($item)
```

Of course, because the `DocumentFragment` is offscreen, nothing appended to it will appear on the page until the `DocumentFragment` is appended to an existing element. 

```js
const $list = document.getElementById('list')
const $fragment = document.createDocumentFragment();
const $item = document.createElement('li')
$item.className = 'list-group-item'
$item.textContent = 'Eggs'

$fragment.append($item)

// appending the fragment to the list
$list.append($fragment)
```

A `DocumentFragment` is best utilized when many elements need to be added to the HTML. This is best accomplished using a loop, as demonstrated in the following example.

```js
const $list = document.getElementById('list')
const $fragment = document.createDocumentFragment();
const items = ['Eggs', 'Bread', 'Sugar']

for (const item of items) {
  const $item = document.createElement('li')
  $item.className = 'list-group-item'
  $item.textContent = item

  $fragment.append($item)
}

$list.append($fragment)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Creating HTML using Methods - Using DocumentFragments" src="https://codepen.io/IMD/embed/qBLbaGp?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/qBLbaGp">
  Creating HTML using Methods - Using DocumentFragments</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
