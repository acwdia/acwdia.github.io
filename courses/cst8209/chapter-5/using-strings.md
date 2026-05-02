# Creating HTML Using Strings

JavaScript allows developers to get and set HTML using strings that contain HTML. This is primarily accomplished using the `innerHTML` property. Using HTML strings can be a quick and effective way to create and insert HTML using JavaScript, but it does come with some drawbacks. 

## Using innerHTML

The [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property is used to get or set the HTML contained within an element. The `innerHTML` property will return the HTML as a string. Setting the value of `innerHTML` replaces the contents of the element. 

Consider the following HTML.

```html
<ul id="list">
  <li>Milk</li>
</ul>
```

We can retrieve the HTML within the list using the `innerHTML` property. 

```js
const $list = document.getElementById('list')
console.log($list.innerHTML) // <li>Milk</li>
```

In turn, we can change the HTML within the list by setting the `innerHTML` property to an HTML string.

```js
$list.innerHTML = '<li>Eggs</li>'
```

Of course, the line above will replace any HTML that was inside the list. This can be avoided through concatenation using `+=`. 

```js
$list.innerHTML += '<li>Eggs</li>'
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Creating HTML using Strings - innerHTML" src="https://codepen.io/IMD/embed/NWeGQJK?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/NWeGQJK">
  Creating HTML using Strings - innerHTML</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Using Template Literals

In the previous example, we dynamically added a new list item using a string. While this approach does work, it is limited and should only be used for very simple HTML. For more complex HTML, using Template Literals is preferred. Using template literals, it is possible to create an HTML template, complete with white space, tabs, and carriage returns.  

For example, we update the previous example by adding classes and additional list items. 

```html
<ul id="list" class="list-group">
  <li class="list-group-item">Milk</li>
</ul>
```

```js
const $list = document.getElementById('list')
$list.innerHTML += `
  <li class="list-group-item">Eggs</li>
  <li class="list-group-item">Bread</li>
  <li class="list-group-item">Sugar</li>`
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Creating HTML using Strings - Templates" src="https://codepen.io/IMD/embed/MWZaNdj?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/MWZaNdj">
  Creating HTML using Strings - Templates</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Using Templates and Loops

We have now successfully added multiple list items to our list. However, this approach is not ideal. Instead of creating each list item within the string, we can take a more programmatic approach by using templates, arrays, and loops. 

Let's start by creating an array that will contain all of the list items we want to add to our list.

```js
const $list = document.getElementById('list')
const items = ['Eggs', 'Bread', 'Sugar']
```

Next, we can use a `for..of` loop to iterate over each item in the array.

```js
const $list = document.getElementById('list')
const items = ['Eggs', 'Bread', 'Sugar']

foreach (const item of items) {

}
```

Finally, we can create a list item template, using a template literal and expression interpolation to create and insert the `<li>` tag for each item in the array. 

```js
const $list = document.getElementById('list')
const items = ['Eggs', 'Bread', 'Sugar']

for (const item of items) {
  $list.innerHTML += `<li class="list-group-item">${item}</li>`
}
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Creating HTML using Strings - Template Literals" src="https://codepen.io/IMD/embed/jOXWqXw?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/jOXWqXw">
  Creating HTML using Strings - Template Literals</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Avoiding Too Many DOM Insertions

While the above technique works for our small example, it has a crucial flaw. For each item, we are retrieving and setting the `innerHTML` of the list, which can become processor-intensive if too many requests and insertions are made. 

One way to avoid this problem is to save each list item to an array, and then insert all of the list items at once. 

```js
const $list = document.getElementById('list')
const items = ['Eggs', 'Bread', 'Sugar']
const list = []

for (const item of items) {
  list.push(`<li class="list-group-item">${item}</li>`)
}

$list.innerHTML += list.join('')
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Creating HTML using Strings - Too Many DOM Insertions" src="https://codepen.io/IMD/embed/xxmZObB?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/xxmZObB">
  Creating HTML using Strings - Too Many DOM Insertions</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Using insertAdjacentHTML
Unlike the `innerHTML` property, which replaces all the HTML of an element, the [`insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method inserts an HTML string into a specified position. 

The method takes two parameters. The first is the position, which will consist of one of the four predefined positions (see below). The second is a string of HTML.

The four predefined positions are: 
- `beforebegin`: Before the element
- `afterbegin`: Inside the element, before its first child 
- `beforeend`: Inside the element, after its last child 
- `afterend`: After the element

```html
<!-- beforebegin -->
<div id="element">
  <!-- afterbegin -->
  <p class="child"></p>
  <p class="child"></p>
  <!-- beforeend -->
</div>
<!-- afterend -->
```

Using `insertAdjacentHTML()` method, it is possible to add a title before our list. 

```js
$list.insertAdjacentHTML('beforebegin', '<h2>Grocery List</h2>')
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Creating HTML using Strings - insertAdjacentHTML" src="https://codepen.io/IMD/embed/mdaVEVP?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/mdaVEVP">
  Creating HTML using Strings - insertAdjacentHTML</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

