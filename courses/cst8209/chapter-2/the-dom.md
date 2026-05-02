---
title: The Document Object Model
---

# The Document Object Model

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/O6BNfJz3rgs?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

HTML and JavaScript are very different languages. One is a declarative markup language and the other object-oriented scripting language. Yet the two languages work together, thanks in large part to the Document Object model.

The [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (DOM) is a programming interface for HTML documents, like a web page. It provides a representation of the page so that programs can change the document structure style and content. Typically, these programs are written in JavaScript.

Because all modern browsers have implemented a variation of the DOM standard, there are no special requirements needed to start using the DOM, and many of the commonly used commands are supported by a majority of the browsers. When working with the DOM, the `document` and `window` elements are immediately available to manipulate the document and its children. 