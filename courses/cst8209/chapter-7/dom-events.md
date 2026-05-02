# DOM Events

[DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events) are notifications that some action has occurred on the page and can represent a basic user action or the status of the render model. For example, when a user clicks on a button, that is a DOM Event. When the page loads, that is a DOM Event. When the page is scrolled, the window is resized, or the mouse is moved are all DOM Events. There are DOM Events for the keyboard, mouse, touch, clipboard, media, view, printing, drag & drop, animation, forms, and more. 

Each event is represented by an [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface, which acts as an object. It will include the event type and on which element the event occurred. Adding event listeners to DOM elements gives us a programmatic ability to interact with this Event interface and respond to these DOM events. 

There are two common approaches for registering event handlers on elements: using an onevent property and using event listeners. 

## Using onevent Property

The first approach assigns a function to an HTML element [using an onevent property](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#using_onevent_properties). Only one event handler can be assigned for every event for each element. 

The following code demonstrates how to respond to a `click` event using the `onclick` property. 

```js
const $button = document.querySelector('button')

$button.onclick = function () {
  console.log('Button clicked!')
}
```

## Using event listeners

<div class="video">
  <div class="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/EaRrmOtPYTM?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

The second approach is to [use event listeners](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#eventtarget.addeventlistener), which are the most flexible and preferred way for event handling. Event Listeners are JavaScript objects that listen for a specific DOM Event to occur and execute a function when it does. Event Listeners can be created by using the [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method to a target element. The `addEventListener()` method takes two arguments, the event type and a function that will execute when the event occurs. 

> #### NOTE
> Using `addEventListener()` is the preferred method for listening to DOM event and has generally replaced using the older HTML event handler attribute. 

In the example below, the event type is `'click'` and the function is an anonymous function that logs a message to the console. 

```js
const $button = document.getElementById('button')

// using an anonymous function
$button.addEventListener('click', function () {
  console.log(`The button was clicked`)
})
```

The event handler function may also be predefined. When using a predefined function inside a method, no parentheses are included with the function name. This is because we do not want to invoke the function at this time, but instead just pass it as an argument, for the `addEventListener()` method will invoke the passed function for us.


```js
const $button = document.getElementById('button')

// a predefined function
function handleButtonClick () {
    console.log('The button was clicked!')
}

// using a predefined function
$button.addEventListener('click', handleButtonClick)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Event Listeners" src="https://codepen.io/IMD/embed/poqgOBJ?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/poqgOBJ">
  Event Listeners</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>