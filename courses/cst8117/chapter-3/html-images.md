---
title: HTML Images
---

# HTML Images

The use of images makes our websites engaging and helps with the aesthetics of the design. Images are used for displaying logos, products, team members, stores and more.

Unlike Word or other documents, we do not embed images into our HTML document rather we link to the image in our HTML.

## The Image Element

The HTML element to display an image on the webpage is `<img>` which is a singular tag.

The `<img>` tag needs two pieces of information one which image to link to and two a short description of the image.

These two pieces of information are supplied to the `<img>` tag by using attributes. Attributes are additional information that can be added to an HTML element.

With the image, we will be using the following attributes:

- `src` source, is to provide the relative or absolute path to the image
- `alt` alternate text, is to describe the image for search engines, screen readers and in case the image does not load.

```html
<img src="images/birds.jpg" alt="image of a bird" />
```

<p><iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/JXQOpp/?height=265&amp;theme-id=47863&amp;default-tab=result&amp;embed-version=2" width="300" height="265" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/JXQOpp/"&amp;amp;amp;amp;amp;amp;gt;HTML Images&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.</iframe></p>

## Additional Attributes

### `title` Attribute

We can also describe the image with a tooltip if the mouse is held over it for a few seconds. The tooltip text is populated from the title attribute.

<p><iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/xOKGPv/?height=265&amp;theme-id=47863&amp;default-tab=html,result&amp;embed-version=2" width="300" height="265" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/xOKGPv/"&amp;amp;amp;gt;xOKGPv&amp;amp;amp;lt;/a&amp;amp;amp;gt; by IMD (&amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;gt;@IMD&amp;amp;amp;lt;/a&amp;amp;amp;gt;) on &amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;gt;CodePen&amp;amp;amp;lt;/a&amp;amp;amp;gt;.</iframe></p>

### `width` and `height` Attributes

We can also set explicit widths and heights of an image overriding its size of the image dimensions. We have to note however this does not affect image file size and we will discuss alternative image-loading strategies later in this semester.

<p><iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/GZbOxe/?height=265&amp;theme-id=47863&amp;default-tab=result&amp;embed-version=2" width="300" height="265" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/GZbOxe/"&amp;amp;amp;amp;amp;amp;gt;HTML Images&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.</iframe></p>

The image dimensions are rendered at 150 x 150, these attributes are rendered in pixels and have overridden the image's native 600 x 400 dimensions
