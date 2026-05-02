---
title: HTML Dialog
---

# HTML Dialog

The [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) tag is used to represent a modal and non-modal dialog box with included interactivity. 

## Non-Modal Dialog

Non-modal dialog, or HTML-only dialog, is using the `<dialog>` element without the use of JavaScript. This is accomplished by adding the `open` attribute on the `<dialog>` so that the dialog appears open when the page loads.  Adding a `<form>` with a `method` attribute set to `dialog` and a button allows the user to close the dialog. 

```html
<dialog open>
  <h2>Hello World</h2>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Dialog - Non-Modal Dialog" src="https://codepen.io/IMD/embed/zYbvwpz?default-tab=result&theme-id=47863" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/zYbvwpz">
  HTML Dialog - Non-Modal Dialog</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

While simple to implement, the non-modal dialog does have some limitations. Because the `open` attribute is applied to the HTML, the dialog will always be open when the page loads. Reversely, once the dialog is closed there is no method to reopen it without refreshing the page. Also, non-modal dialogs do not have access to a backdrop, which we will learn about in the next section.  

## Modal Dialog
A modal dialog still uses the `<dialog>` element. However, because JavaScript will be used to control the visibility of the modal, neither the `open` attribute nor the `form` is required. A button or some trigger element is required to open and close the modal. 

```html
<dialog id="dialog">
  <button id="close">close</button>
  <h2>Hello World</h2>
</dialog>

<button id="open">open</button>
```

A dialog can be opened using the `.showModal()` method and closed using the `.close()` method.

> #### NOTE
> Using the `esc` key will also close an open modal dialog. 

```js
const $dialog = document.getElementById('dialog')
const $close = document.getElementById('close')
const $open = document.getElementById('open')

$open.addEventListener('click', function () {
  $dialog.showModal()
})

$close.addEventListener('click', function () {
  $dialog.close()
})
```

A modal dialog also allows for the styling of the backdrop. This is accomplished using the [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) pseudo-element. The dialog box itself can also be styles using standard box-model properties.

```css
::backdrop {
  background-color: salmon;
  opacity: 0.75;
}

dialog {
  width: 240px;
  padding: 2rem;
  border: 1px solid #676767;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3)
}
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Dialog - Modal Dialog" src="https://codepen.io/IMD/embed/eYXpREr?default-tab=result&theme-id=47863" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/eYXpREr">
  HTML Dialog - Modal Dialog</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
