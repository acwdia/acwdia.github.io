# A Declarative Approach

Declarative programming has gained popularity in the JavaScript community in recent years, especially with the rise of JavaScript frameworks that take a declarative approach. But what is declarative programming and why would we want to take a declarative approach to writing our JavaScript?

## Declarative Programming
Before talking about declarative programming, let's take a moment to talk about imperative programming. Imperative programming is what most would consider traditional programming. It involves writing step-by-step instructions that the computer has to complete. Up to this point, most of JavaScript we have written has been imperative.

Declarative programming, on the other hand, does not require step-by-step instructions but instead requires a precise description of what we want the computer to give us. Another way to think about is imperative is the HOW (How we want the computer to complete a task) and declarative is the WHAT (What we want from the computer). Declarative programming generally requires less code, is less error-prone, and is easier to read. 

As mentioned above, declarative programming in JavaScript has gained in popularity because of modern JavaScript Frameworks like Angular, React, and Vue. While learning these frameworks is beyond the scope of this course, we can look at how these frameworks are created to improve our own JavaScript code. 

## React createElement

[React.js](https://react.dev) is arguably the most popular JavaScript Framework today. For good reason. It is a fast, light-weight, and relatively easy-to-learn framework. It also takes a declarative approach to most tasks including HTML Creation. 

React has two approaches to HTML Creation, [JSX](https://react.dev/learn/writing-markup-with-jsx) and the [`createElement`](https://react.dev/reference/react/createElement) method. It is this second approach that we are going to look at and attempt to reverse engineer to use in our own code. 

The `createElement` method is used create React elements by specifying the element's `type`, `props` or attributes, and `children` (any text of nested HTML). Using the `createElement` method would look something like this: 

```js
const title = createElement('h1', { className: 'title' }, 'Hello World')
```

From this one line, we can reverse engineer the `createElement` method and create our own `createElement` function that will allow us to more easily create HTML elements. 

## The createElement Function

Our first step is to create the function that we will call when we want to create an HTML Element. We give this function the name `createElement`. We also know, from the React documentation, that the React `createElement` method takes a `type` as a string, `props` as an object, and `children` which will be an array of nodes. So we want to add these same arguments to our function. 

> #### NOTE
> Because the build-in `createElement` method is part of the `document` object, we will not be overriding or affect the `createElement` method by using the same name. 

```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...node} children
 * */
function createElement (type, props, ...children) {

}
```

> #### NOTE 
> The last parameter is a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters). This allows the users of the function to continue to add arguments, but they will all be condensed into a single array.  

Now, that we have our function defined, let's start adding functionality. This first step is to create the desired HTML element using the build-in `createElement` method. The type of element we create will match the `type` parameter. Then we will return the newly created element. 


```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...nodes} children
 * @return element
 * */
function createElement (type, props, ...children) {
  const el = document.createElement(type)

  return el
}
```

Next, we will want to add the desired attributes or `props` to our element. Because `props` is an object, that could contain multiple properties, we will want to iterate over each property and apply it to our element. We can use the `for...in` loop to handle the iteration. 

```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...nodes} children
 * @return element
 * */
function createElement (type, props, ...children) {
  const el = document.createElement(type)

  for (const prop in props) {
    el[prop] = props[prop]
  }

  return el
}
```

The `for...in` loop gets each key from the `props` object, which can be used to apply to the element and also retrieve the value from the `props` object. While the `for...in` loop is an effective way to get access to all of the properties passed to our function. It is an imperative approach to the problem. Let's see if we can make it more declarative. 

By using the [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method, we can get all the keys from `props` object and then use the [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method to handle the iteration. 

```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...nodes} children
 * @return element
 * */
function createElement (type, props, ...children) {
  const el = document.createElement(type)

  Object.keys(props).forEach(prop => el[prop] = props[prop])

  return el
}
```

Now, that we have the props or attributes added to our element, the last part is to add the children nodes. Because we are using a rest parameter, `children` is an array, so it might be tempting to use a loop or even the `forEach` method, but there is a simpler way. Using the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and the [`append`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append) method it is possible to directly append all of the children to the element.

```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...nodes} children
 * @return element
 * */
function createElement (type, props, ...children) {
  const el = document.createElement(type)

  Object.keys(props).forEach(prop => el[prop] = props[prop])
  el.append(...children)

  return el
}
```

> #### NOTE
> Although the rest parameter and spread syntax look the same, they actually perform oposite opporations. While the rest parameter combines multiple parameter into a single array, the spread syntax takes a single array and "spreads" it out as individual values. 

And this completes our `createElement` function, now we can use it the same way as we would in React.

```js
/** 
 * createElement
 * Used to declaratively create HTML elements
 * @param {string} type
 * @param {object} props
 * @param {...nodes} children
 * @return element
 * */
function createElement (type, props, ...children) {
  const el = document.createElement(type)

  Object.keys(props).forEach(prop => el[prop] = props[prop])
  el.append(...children)

  return el
}

const title = createElement('h1', { className: 'title' }, 'Hello World')
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Creation - Declarative Approach" src="https://codepen.io/IMD/embed/KKEdzqd?default-tab=html%2Cresult&theme-id=47863" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/KKEdzqd">
  HTML Creation - Declarative Approach</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Complex Structures

While creating our `createElement` function may be seen as a good practice in working with declarative programming, it is also beneficial when it comes to generating complex HTML structures using JavaScript.  

Imagine if we wanted to dynamically create the following HTML using JavaScript.

```html
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <a class="fw-bold text-decoration-none text-dark">Inbox</a>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <a class="fw-bold text-decoration-none text-dark">Work</a>
    <span class="badge bg-primary rounded-pill">5</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <a class="fw-bold text-decoration-none text-dark">Personal</a>
    <span class="badge bg-primary rounded-pill">10</span>
  </li>
</ul>
```

While not that complicated to understand, using traditional imperative techniques would still take a significant amount of code. But by using a declarative approach and our newly completed `createElement` function we can greatly decrease the necessary code. 

```js
const mailboxes = [
  { name: 'Inbox', number: 14 },
  { name: 'Work', number: 5 },
  { name: 'Personal', number: 10 }
]

const list = createElement(
  'ul', 
  { className: 'list-group' }, 
  ...mailboxes.map(mailbox => 
     createElement('li', { className: 'list-group-item d-flex justify-content-between align-items-start'}, 
        createElement('a', { className: 'fw-bold text-decoration-none text-dark' }, mailbox.name),
        createElement('span', { className: 'badge bg-primary rounded-pill' }, mailbox.number)
     )
  )                          
)
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Creation - Declarative Approach" src="https://codepen.io/IMD/embed/eYXpzNy?default-tab=result&theme-id=47863" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/eYXpzNy">
  HTML Creation - Declarative Approach</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
