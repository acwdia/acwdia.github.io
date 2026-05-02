# Event Types

An event can be triggered by many different means. How this event is triggered is referred to as an event type. The following is an overview of the more common event types. For a more complete list, review the [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events). 

## Mouse Events

Mouse events occur when the user uses the mouse to interact with the page. While there are many different [Mouse Events](https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events), the most commonly used are `click`, `mouseover`, and `mouseout`. 

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Mouse Events: Click, Mouseover, Mouseout" src="//codepen.io/IMD/embed/XGEopJ/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/XGEopJ/'>Mouse Events: Click, Mouseover, Mouseout</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Keyboard Events

[Keyboard events](https://developer.mozilla.org/en-US/docs/Web/Events#Keyboard_events) occur when the user uses the keyboard to interact with the page. There are only three keyboard events: `keydown`, `keydown`, and `keypress` (ignores modifier keys). When a key is pressed the browser will provide a key code that can be used to identify which key was pressed. These codes are retrieved using a property from the Event object. Unfortunately, this part of the API is in the middle of a transition period, so two common properties can be used to retrieve the key code. 

The old property is `keyCode`, which will provide a number that represents the key pressed. 

<iframe height="380" style={{width: '100%'}} scrolling="no" title="Keyboard Events: The keyCode Property" src="//codepen.io/IMD/embed/JzLmyv/?height=380&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/JzLmyv/'>Keyboard Events: The keyCode Property</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


The new property is `key`, which provides a string that represents the key pressed.

<iframe height="393" style={{width: '100%'}} scrolling="no" title="Keyboard Events: The key Property" src="//codepen.io/IMD/embed/rRdoOX/?height=393&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/rRdoOX/'>Keyboard Events: The key Property</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Other Standard Events

While the most common event types are going to come from the mouse or keyboard, many other [Standard Events](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events) can be used. 

For example, the `change` and `input` events are fired for `<input>`, `<select>`, and `<textarea>` elements when a change to the element's value is committed by the user. We will talk more about input events when we explore form handling. 

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Standard Events: The change Event" src="//codepen.io/IMD/embed/wOmRbZ/?height=265&theme-id=47863&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/wOmRbZ/'>Standard Events: The change Event</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## See Also
- [MouseEnter and MouseLeave VS. MouseOver and MouseOut](https://www.youtube.com/watch?v=pzT4hAY82q4)
- [JavaScript Keyboard Events](https://www.youtube.com/watch?v=5-koI06rmcA)
