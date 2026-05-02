---
title: Form Handling
---

# Form Handling

One of the most common and undesirable tasks a user must do on the web is completing a form. Fortunately, JavaScript can make working with web forms more pleasant and enjoyable. 

## Add an Event Listener to a Form
Like with other HTML elements, an event listener can be added to a form using the `addEventListener()` method. For forms, the event type would be `'submit'`. 

```js
const $form = document.getElementById('form')
$form.addEventListener('submit', function (e) {})
```

## Prevent Page Refresh
By default, an HTML form will cause a page refresh when the form is submitted. This will also cause the JavaScript to be reset as well. Therefore, it is common to use the `preventDefault()` method on the event object. 

```js
const $form = document.getElementById('form')
$form.addEventListener('submit', function (e) {
  e.preventDefault()
})
```

## Retrieve Form Elements
While it is possible to retrieve each form element individually, this can be tedious and time-consuming, especially on larger forms. Therefore, it is often more favorable to retrieve all of the form elements using the [`elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) property. This property will return an `HTMLFormControlsCollection`, which is an array-like object. 

A specific element can be retrieved using the element's name or id. A `for...of` loop could also be used to cycle through all the elements.

```js
const $form = document.getElementById('form')
$form.addEventListener('submit', function (e) {
  e.preventDefault()

  const elements = $form.elements

  for (const element of elements) {
    console.log(element.name)
  }
})
```

## Get an Element's Value
The main purpose of using JavaScript with a form is to retrieve the values to the form's elements. How to retrieve the value of an element will differ depending on the element's type. 

### Text boxes, text areas, and select boxes
For text boxes, including the type: `text`, `number`, `email`, or `tel`, text areas, or select boxes, the `value` property can be used. 

```html
<form id="form">
  <input type="text" name="color" value="blue">
  <textarea name="question">Why is the sky blue?</textarea>
  <select name="colors">
    <option value="red">red</option>
    <option value="blue" selected>blue</option>
    <option value="green">green</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

```js
const $form = document.getElementById('form')

$form.addEventListener('submit', function (e) {
  e.preventDefault()

  for (const element of $form.elements) {
    if (element.name) {
      console.log(element.name, element.value)
    }
  }
})
```

<iframe height="508" style={{width: '100%'}} scrolling="no" title="Form Handling - Getting Values" src="https://codepen.io/IMD/embed/eYzzQXr?height=508&theme-id=47863&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/eYzzQXr'>Form Handling - Getting Values</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Radio buttons
For radio buttons, the [`RadioNodeList`](https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList) can be retrieved directly from the `HTMLFormControlsCollection` by using the name of the radio group as a key. 

```html
<form id="form">
  <label><input type="radio" name="color" value="red"> Red</label>
  <label><input type="radio" name="color" value="blue"> Blue</label>
</form>
```

```js
const $form = document.getElementById('form')
$form.elements['color'] // RadioNodeList
```

Then, like the example above, the `value` property can be used with the `RadioNodeList`. This will return the value of the checked radio button. 

> #### NOTE
> Using the `value` property on radio inputs in a loop will not provide the same result.

```html
<form id="form">
  <label><input type="radio" name="color" value="red" checked> Red</label>
  <label><input type="radio" name="color" value="blue"> Blue</label>
</form>
```

```js
const $form = document.getElementById('form')
$form.elements['color'].value // red
```

<iframe height="265" style={{width: '100%'}} scrolling="no" title="Form Handling - RadioNodeList" src="https://codepen.io/IMD/embed/yLJaegE?height=265&theme-id=47863&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/IMD/pen/yLJaegE'>Form Handling - RadioNodeList</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

