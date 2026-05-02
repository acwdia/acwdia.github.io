---
title: Basic Selectors
---

# Basic Selectors

Every HTML element supports a variety of attributes. Some of the [common attributes](http://www.w3schools.com/html/html_attributes.asp) we can use to style our elements are:

1. Element Selector - Style any HTML Element p{}
2. id Selector - A unique id that should only be used once.
3. Class Selector - A style we can use on more than one element.
4. Attribute Selector - More unique attribute contions.
5. nth-child Selector - Odd or even, every first, second, third..

## Attribute Selector Styles

<p><iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/YqKqMo/?height=400&amp;theme-id=47863&amp;default-tab=result" allowfullscreen="allowfullscreen" width="300" height="400">See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/YqKqMo/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CSS Selectors&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.</iframe></p>

> #### Note
> As we progress further along we will most commonly use the class selector. This helps avoid specificity issues for instance an id overriding the styles of the class


![id overriding the styles of the class](https://imdac.github.io/images/id-priority.gif)


## Class Attribute on the HTML Element

There are many instances where we need a unique style for only a specific element. Or a group of elements. We can select elements by their attributes most commonly by the class attribute. In this example we want to distinguish the first list item from the rest.

![Referencing a class](https://imdac.github.io/images/class-selector.gif)

## Multiple Classes, Multiple Styles

And we can apply multiple classes to a single element for additional styles.

![Referencing multiple classes](https://imdac.github.io/images/multiple-classes.gif)

## Reusable Classes

Another powerful feature of CSS and the class attribute is how easy it is to reuse styles across a variety of element types.

![Class reuse](https://imdac.github.io/images/reusing-class.gif)