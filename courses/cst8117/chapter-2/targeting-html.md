---
title: Targeting HTML
---

# Targeting HTML

Targeting is referred to as selecting the elements on the page for styling them in CSS.

## Tag name sector
The simplest way to target HTML elements is by using the tag name.

![Targeting html elements by tag](https://imdac.github.io/images/header-colour.gif)

```css
/* selecting all the <h1> tags on the page */
h1{
  /* color will change the font color of the element */
  color: coral;
}
/* selecting all the <p> tags on the page */
p{
  /* background-color will change the background of the element */
  background-color: lightblue;
}
```
> #### Note
> When we use a tag name in the rule set the browser will select all the tags or elements with that name on the page. Example using `h1` or `p` will select all the `h1` tags and `p` tags

## Targeting multiple elements
We can target multiple elements together to apply the same set of styles in css by separating the selectors with a comma `,`.

```css
/* targeting all <h1>, <h2>, <h3> and <h4> tags on the page */
h1, h2, h3, h4{
  text-decoration: underline;
}
```

## Targeting child elements
If we wish to target only elements that are inside another element we can do that using the **descendant selector**.

For writing the descendant selector we start with the parent adding a space for each level of child elements.

```HTML
<article>
  <h2>Rose</h2>
  <section>
    <h3>Botany</h3>
  </section>
</article>
<aside>
  <h2>More Flowers</h2>
  <section>
    <h3>Similar to rose</h3>
  </section>
</aside>
```

If we have the HTML above and try to use `h2` selector it will select the `<h2>` tags inside `<article>` and `<aside>` tags. In this case we can use the **descendant selector** for selecting the specific heading

```css
/* targeting only the <h2> inside the <article> */
article h2{
  color: red;
}

/* targeting the <h3> tag inside the <section> tag inside the <article> */
article section h3{
  /* 
    border property adds a border around the element
    We add 3 values to the border property 
    thickness style color
  */
  border: 1px solid red;
}
```