# Cascading Style Sheets

[Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) is a language for styling webpages using colors, layout, and fonts. It also allows a developer or designer to adapt the presentation of the webpage to different types of devices, such as large screens, small screens, or printers.

CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments. This is referred to as the separation of structure (or: content) from presentation.

- Used to style HTML elements on a webpage
- CSS is a plain text file, linked to the HTML file
- CSS files are saved with a .css extension
- Styles are defined for different properties of HTML elements such as height, width, margin, font-size, background, etc.

## Creating a CSS File
Just like HTML we can create and edit a CSS file in any text editor. Some text editors, such as Visual Studio Code,  have different benefits such as code highlighting, syntax hints, auto-completion and more.

For organizing the files properly we add our CSS files in a folder next to our HTML files.

```
  - project/
    - images/
      - coffee-cup.jpg
    - css/
      - style.css
    - index.html
    - contact.html
```

## Linking to a CSS file
To style our HTML document with the CSS file we have to link the CSS with the HTML document.

We add the link to the CSS file in our HTML document, inside the `<head></head>` tag.

- We use the singular `<link>` tag inside the `<head></head>` tag.
- The link tag must have the following two attributes:
  - `href` containing the path for the location of the CSS file
  - `rel` defining the relation of the linked file in this case `stylesheet`

```html
<head>
  <link href="css/main.css" rel="stylesheet">
</head>
```

## Syntax of CSS
We use a standard syntax when writing CSS. Stating by selecting the HTML element that we want to style, followed by the block of code that contains the properties we want to style for the element and the values for those properties.

```CSS
body {
  color: red;
}
```
![CSS Syntax Basics](https://imdac.github.io/images/css-syntax-basic.png)
- `rule set` is composed of a selector and any number of declarations contained in `{}` curly braces.
- `selector` identifies which HTML element we want to style. Also referred to as **targeting**
- `declaration` a single line of CSS that assigns a property to its value using the colon `:`. Each declaration must end with a semi-colon `;`
- `property` of the HTML element, such as color, height, width, background, border, etc.
- `value` the valid value accepted by the property.

## CSS Comments

Just like HTML, we can add comments to our CSS code for leaving notes as we write the code. Added using the opening comment `/*` and closing comment `*/` syntax.

```css
/* 
  using the body selector 
  styling two properties by adding two declarations
  yes, this is a css comment
*/
body {
  color: red;
  font-size: 20px;
}
```

> #### VS Code Shortcut
> For creating a comment we can use `control + /` or `command + /` inside VS Code 

Under the hood, every web page is fundamentally made of HTML.

Taking [www.algonquincollege.com](http://www.algonquincollege.com) we can see how much CSS has to offer.

With Styles algonquincollege.com looks great, without CSS, all the links are functional, and the content is still readable, but it certainly looks much better with styles.

![Algonquin College website with and without styling](https://imdac.github.io/images/algonquin-css-nocss-1.jpg)

## CSS Inheritance

The first thing to consider when styling elements is the inheritance effect of CSS. The easiest example of this to see is when we apply color property to the body of our HTML Document that style will be applied to every element contained in the body. Unless the element has its own value for that style to overwrite the inheritance.

![CSS inheritance effect](https://imdac.github.io/images/font-family-body.gif)

> #### Note
> Not all the properties are inherited by the child elements from the parent element