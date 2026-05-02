---
title: CSS Background
---

# CSS Background

Background property is used to add color or images as backgrounds to any HTML element. 
The `background` property is a shorthand for the following properties:

## Background Properties 

- `background-color` will change the background of the targeted element.
```css
body {
  background-color: #7f8c8d;
}
```
- `background-image` we can also set a background image, which will go over top of the color (if the image is not large enough to cover the whole background or the image does not load, the colour will be there instead). We add the path to the image inside the `url()` function.
```css
body {
  background-color: #7f8c8d;
  background-image: url("../images/body-bg.jpg");
}
```
- `background-repeat` If the image is smaller than the area the image will by default `repeat` to cover the entire area. We can set background repeat property to repeat the background in one direction horizontal `repeat-x` or vertical `repeat-y` or not to repeat at all `no-repeat`. 
```css
body {
  background-color: #7f8c8d;
  background-image: url("../images/body-bg.jpg");
  background-repeat: no-repeat;
}
```
- `background-position` background position can be set to place a non-repeating background of an element at a certain position the first value is x and the second is y. Example 
```css
body {
  background-color: #7f8c8d;
  background-image: url("../images/body-bg.jpg");
  background-repeat: no-repeat;
  background-position: 20px 40px;
}
```
- `background` we can use background property to set different sub properties at once color image repeat x-position y-position

```css
body{
	background: #7f8c8d url("../images/body-bg.jpg") no-repeat left top;
}
```

- `background-size` can be used to control the size of the background. We can add two value first for `width` and second for `height` or we can use the following keywords `contain` or `cover`.
```css
body{
	background: #7f8c8d url("../images/body-bg.jpg") no-repeat left top;
  background-size: cover;
}
```

### Image Tag vs CSS Background Image
- If the image is important and should be visible even if the CSS does not work then use the image tag
- If the image is decorative and is not needed to understand the content of the page then use background

## Examples
### Background Image

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/yOmYNB/?height=265&amp;theme-id=47863&amp;default-tab=css,result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="265">See the Pen &amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/yOmYNB/"&amp;amp;amp;amp;amp;gt;CSS Background Image&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;gt;.</iframe>

By default there is a couple things to observe here.  Background images will automatically repeat, and text and other elements can be layered over top of the background.

### Background Repeat

We can prevent the repeating background with the CSS property [background-repeat](http://www.w3schools.com/cssref/pr_background-repeat.asp).

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/ONKyVo/?height=265&amp;theme-id=47863&amp;default-tab=css,result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="265">See the Pen &amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/ONKyVo/"&amp;amp;amp;amp;gt;CSS Background Image - no repeat&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;.</iframe>

There is also repeat-x and repeat-y if we wanted to repeat the image horizontally or vertically.


### Background-position

We can also change the position of the background image both horizontally and vertically.

![Background Image](https://imdac.github.io/images/css-background-image.gif)

### Background Size

We can also add a [full sized background](https://css-tricks.com/perfect-full-page-background-image/) image on the body and we can layer our other elements over top of that.

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/grVaaj/?height=265&amp;theme-id=47863&amp;default-tab=css,result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="265">See the Pen &amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/grVaaj/"&amp;amp;amp;gt;CSS Background Image - Body&amp;amp;amp;lt;/a&amp;amp;amp;gt; by IMD (&amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;gt;@IMD&amp;amp;amp;lt;/a&amp;amp;amp;gt;) on &amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;gt;CodePen&amp;amp;amp;lt;/a&amp;amp;amp;gt;.</iframe>