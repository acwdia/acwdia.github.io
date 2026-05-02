---
title: Introduction to JavaScript
---

# Introduction to JavaScript

## What is JavaScript?

JavaScript is a scripting language introduced in 1995 as a way to add interactivity to web pages in the Netscape Navigator browser. It allowed developers to interact with HTML dynamically, manipulating the content and responding to a user's actions. Today, JavaScript has been integrated into every modern browser and is a vital component of modern websites.

This additional interactivity makes Web pages behave like a traditional software application. These Web pages are often called Web applications and can be made available either directly in the browser as a Web page, or can be packaged and distributed.

- JavaScript is used to add interactivity to the web pages
- Similar to CSS and HTML JS is also a text file that is linked to HTML
- JavaScript files are saved with a .js extension
- JavaScript targets HTML elements on the page to add interactivity to them
- The syntax of JS is more complex and will be discussed later in the course

JavaScript is **NOT** Java and has very little in common with the language. JavaScript does not need to be compiled as all modern browsers understand it natively. However, JavaScript is often compressed and minified to make it used on the web more efficient.

## Why learn JavaScript?

JavaScript is the programming language for the web, which makes it one of the most popular coding languages in the world. Many of the most popular web frameworks including Angular, React, Vue, JQuery, and Node are built with and require knowledge of JavaScript. But JavaScript is not limited to just the front-end development, it can also be used on servers, desktop machines, and mobile devices.

It is easy to start learning JavaScript. Because it runs natively in the browser, there is no required setup. Developers can start coding in any text editor and run their code right in the browser.

## How to use JavaScript in the browser?

All modern browsers, can read and interpret JavaScript code natively without the need of a web server or installing a plugin in the browser. However, to include JavaScript inside of an HTML file, the code must be inserted between `<script>` and `</script>`.

```html
<script>
  console.log("Hello World");
</script>
```

Of course for longer programs with more code, it is often encouraged to store JavaScript in a separate file with a `.js` extension. This file can then be called by the HTML using the `<script></script>` and the `src` attribute.

```html
<script src="script.js"></script>
```

## What can JavaScript do?

If a web page responds to a user's action or alters itself dynamically, there is a good chance that JavaScript was used. JavaScript is also crucial for SPAs (single-page applications) and is necessary to retrieve data asynchronously from the servers (Ajax).

JavaScript is used to make sliding menus slide, elements appear as you scroll, and can be used to convert a site to dark mode. With JavaScript, the possibilities are endless.
