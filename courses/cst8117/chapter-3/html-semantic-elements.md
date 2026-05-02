---
title: HTML Semantic Elements
---

# HTML Semantic Elements

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/kGW8Al_cga4?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/@NetNinja">Net Ninja</a>. </small>
  </p>
</div> 


There are a variety of elements in HTML that are used for providing structure to the content. The [semantics and hierarchical structure](http://html5doctor.com/lets-talk-about-semantics/) of the HTML document are important for a variety of reasons including:

1. Keeping the content well-formatted and organized
2. Increasing the accessibility of the content
3. Improving search engine optimization

## Page layout
When creating the HTML Documents we will mainly be focusing on the content displayed to the user of our website which is the content we add inside the `<body></body>` tag.

Page layout semantic tags are used to give specific meaning to different parts of our page, such as the main article, header of the page, the footer of the page, navigation, different sections of the page and so on.

### header
The `<header></header>` tag, when used as the child of `<body></body>` tag, acts as the master header of the page. When added inside the `<article></article>` tag it acts as the header for the article.

### footer
The `<footer></footer>` tag, when used as the child of `<body></body>` tag, acts as the footer of the web page. When added inside the `<article></article>` tag it acts as the footer for the article.

### nav
The `<nav></nav>` tag serves the navigation of the page, this will contain the links to other pages.

### main
The `<main></main>` tag contains the primary content of the page.

### article
The `<article></article>` tag is used for containing independent pieces of content. It could be shared as a stand-alone piece of content and will still make sense.

### aside
The `<aside></aside>` tag contains secondary content on the page. This information is not part of the main topic of the page and is not required.

### section
The `<section></section>` tag groups related content on the page. A section usually has its own heading.

### search
The `<search></search>` tag contains the form and other content related to performing a search or other filtering operations. 


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <header>
      This is my Website Header
      <nav>This is where the navigation links will be added</nav>
      <search>This is where the search form will be added</search>
    </header>
    <main>
      This is the main content of the page
      <section>
        <header>Section Title</header>
        <article>This is the article on the page</article>
      </section>
      <aside>Some additional but not relevant information</aside>
    </main>
    <footer>The footer of the web page</footer>
  </body>
</html>
```

## Generic Tags
There are two main meaningless or generic tags we use in HTML. These tags are used to mainly wrap around any content when we do not want to give any semantic meaning to the content but need a parent to style the content or add interactivity using JavaScript.

### div
The `<div></div>` tag is used to wrap around multiple child elements. This tag divides the content into logical groups which will show the content on a separate line.

### span
The `<span></span>` tag is used for single elements or a short piece of content. This tag shows the content in line with the rest of the content.

## Text Semantics
Text semantics tags allow us to give semantic meaning to the text we have on the page. The content of these tags is styled by the browser to visually display the text differently.

### Headings
We can use the `<h1></h1>` tag for the most important heading of the page. For the next level of heading we have `<h2></h2>`, `<h3></h3>`, `<h4></h5>`, and `<h6></h6>`. The browser will style each heading differently, starting with the biggest size for `h1` then `h2` and so on.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Headings" src="https://codepen.io/IMD/embed/gOZMxKX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/gOZMxKX">
  HTML Semantics - Headings</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Paragraphs
For adding a paragraph of text we can use the `<p></p>` tag. The browser will add a space before and after the content of the paragraph.

```html
<p>This is a paragraph</p>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Headings" src="https://codepen.io/IMD/embed/abPZyjO?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/abPZyjO">
  HTML Semantics - Headings</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Quote
The `<q></q>` tag adds a small quotation embedded within other content. 

```html
<q>You become what you think</q>
```
<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Quote" src="https://codepen.io/IMD/embed/poqbrZG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/poqbrZG">
  HTML Semantics - Quote</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### Blockquote
The `<blockquote></blockquote>` tag is a large, stand-alone quote from another source.

### Citation
The `<cite></cite>` tag is a citation for another source, often used with quotations. A person’s name, a URL, a book, a movie title, etc.

```html
<blockquote>Love yourself! Because you're the only person that will be with you, your entire life. -<cite>Mr. Bean</cite></blockquote>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Blockquote" src="https://codepen.io/IMD/embed/qBLNXMN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/qBLNXMN">
  HTML Semantics - Blockquote</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Emphasis
The `<em></em>` tag is used to <em>emphasize</em> a string to make it slightly more important text. Screen readers will change their voice for this text.

### Important text
The `<strong></strong>` tag is used to <strong>highly emphasize</strong> a string to make it a much more important text. Screen readers will change their voice for this text.

### Abbreviation 
The `<abbr title="…"></abbr>` tag is to identify an acronym or abbreviation, like “HTML”, “CSS”, etc. title attribute contains the expanded version, like:

```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Abbreviation" src="https://codepen.io/IMD/embed/KKbMvxJ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/KKbMvxJ">
  HTML Semantics - Abbreviation</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### Highlighting text
The `<mark></mark>` tag is used to <mark>highlight a piece of text</mark> for reference. The keywords in a search results page, the current navigation item, etc.

### Technical term
The `<i></i>` tag defines <i>technical terms</i>, a ship name, a book title, a thought, sarcasm, or another language.

### Keyword
The `<b></b>` tag defines a <b>keyword</b>, like a product name in a review or a lead sentence in a paragraph.

### Subscript text
The `<sub></sub>` tag defines text as being subscript. H<sub>2</sub>O

### Superscript text
The `<sup></sup>` tag defines text as being superscript. 10<sup>th</sup>

### Deleted content
The `<del datetime="…"></del>` tag displays content that was deleted after the document was published. The `datetime` attribute defines when it was removed. 

```html
<del datetime="2015-11-15T22:55:03Z">No pun intended</del>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Deleted Content" src="https://codepen.io/IMD/embed/JjwKymX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/JjwKymX">
  HTML Semantics - Deleted Content</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Address
The `<address></address>` tag is used to display contact information, email, tel, postal address, etc. 

```html
<address>1345 Woodroffe Avenue</address>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Semantics - Address" src="https://codepen.io/IMD/embed/xxmOyKO?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/xxmOyKO">
  HTML Semantics - Address</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Line Break
The `<br>` tag creates a line break that’s significant to the content. Useful in poems and addresses where the division of lines is important. Do not use it to create space in a design—use CSS margins and padding instead.

### Horizontal Line
The `<hr>` tag represents a thematic break in the content. For example, a scene change or topic change. Do not use it to create a decorative horizontal line — use CSS borders instead.

