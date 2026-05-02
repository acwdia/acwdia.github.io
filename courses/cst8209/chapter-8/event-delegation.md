# Event Delegation

Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.

Consider the following HTML:

```html

<ul id="list">
    <li class="item">Clean the car</li>
    <li class="item completed">Feed the cat</li>
    <li class="item">Buy milk</li>
</ul>

```

Using traditional event listener techniques, if we wanted to toggle the `completed` class when a list item is clicked, we would have to add an event listener to each list item. However, by using event delegation, this can be done with a single event listener added to the list, instead of the list items. However, to make this work, we will need to add an if statement to verify that the event target is a list item and not the list itself. This can be accomplished by using the `classList.contains()` method.

```js

const $list = document.getElementById('list')

$list.addEventListener('click', function (e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.toggle('completed')
    }
})

```

In this example, a parameter `e` is defined in the event handler which will take on the value of the Event Interface. This object has a `target` property (the element targeted by the event). The `target` provides a standard HTML element reference, so we can access information about it using the techniques we've already learned.

However, if there are additional children inside the target element, such as an icon, there may be a problem. If you were to click on the icon instead of the list item using the JavaScript code above, nothing will happen. However, this problem is solved using the `closest()` method. 

The [`closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) method of the Element interface returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in a parameter. If no such element exists, it returns null. 

```html

<ul id="list">
    <li class="item">Clean the car</li>
    <li class="item completed"><i class="fas fa-exclamation"></i> Feed the cat</li>
    <li class="item">Buy milk</li>
</ul>

```

```js

const $list = document.getElementById('list')

$list.addEventListener('click', function (e) {
    const $item = e.target.closest('.item')
    
    if ($item) {
      $item.classList.toggle('completed')
    }
})

```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="Event Delegation" src="https://codepen.io/IMD/embed/KKPxZqa?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/KKPxZqa">
  Event Delegation</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## See Also

- [JavaScript Event Bubbling and Propagation](https://www.youtube.com/watch?v=JYc7gr9Ehl0)
