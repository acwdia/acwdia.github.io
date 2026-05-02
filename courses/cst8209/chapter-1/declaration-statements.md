# Declaration Statements

There are three declaration statements in JavaScript: [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const). To understand why there are three different declaration statements, we must look at the history of JavaScript. 

In 1995, when JavaScript was first created, it had only one declaration statement `var`. For two decades it was the only way of declaring variables. However, `var` had limitations that some programmers, especially those who came from languages like Java, found annoying. So, in July 2015, the JavaScript version known as ES2015 or ES6 introduced two new declaration statements, `let` and `const`. 

Each declaration statement will cause the variable to act a little differently. Below is a brief explanation of those differences. 

## Basics

While there are a few technicalities to explore regarding the three declaration statements, we will begin by only covering the crucial differences:

1. While `var` does work, there is essentially no reason to use it anymore. **Do not use `var` in this course.**
1. Use `const` when the variable's value will not change after initialization.
1. Use `let` when you plan on changing the variable's value after initialization.

## var

The `var` statement is used to declare a variable that has function scope or is accessible anywhere within a function. If declared outside of a function it will be given a global scope and be added to the global object. Variables declared with `var` do not need to be assigned a value, can be re-assigned a value, and can be re-declared without an error. 

> #### NOTE
> While the `var` declaration statement still works, it is considered **"bad practice"** to use. It is better to use `let` or `const`.

<iframe style={{width: '100%'}} title="var Statement" src="//codepen.io/IMD/embed/OzwMBj/?height=365&amp;theme-id=47863&amp;default-tab=js,result&amp;embed-version=2" width="300" height="365" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/OzwMBj/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;var Statement&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.</iframe>

## let

The `let` statement is used to declare a variable that has block scope or is accessible anywhere within a block or a set of curly braces. If declared outside of a function or block it will be given global scope but is **NOT** added to the global object. Variables declared with `let` do not need to be assigned a value can be re-assigned a value, but **CANNOT** be re-declared and will result in an error.

<iframe style={{width: '100%'}} title="let Statement" src="//codepen.io/IMD/embed/wpxMVy/?height=422&amp;theme-id=47863&amp;default-tab=js,result&amp;embed-version=2" width="300" height="422" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/wpxMVy/"&amp;amp;amp;amp;amp;amp;amp;gt;let Statement&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.</iframe>

## const

The `const` statement is used to declare a variable that has block scope or is accessible anywhere within a block or a set of curly braces. If declared outside of a function or block it will be given global scope but is **NOT** added to the global object. Variables declared with `const` **MUST** be assigned a value, **CANNOT** be re-assigned a value, and **CANNOT** be re-declared. If any of these situations occur it will result in an error.

> #### NOTE
> Because `const` forces a value to be set to any variable declared and prevents re-declaration, it is considered best practice to use `const` in all cases, except when it is known that a variable value will change. Then use `let`. 

<iframe style={{width: '100%'}} title="const Statement" src="//codepen.io/IMD/embed/dJjMGO/?height=456&amp;theme-id=47863&amp;default-tab=js,result&amp;embed-version=2" width="300" height="456" allowfullscreen="allowfullscreen">See the Pen &amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD/pen/dJjMGO/"&amp;amp;amp;amp;amp;amp;amp;gt;const Statement&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;lt;a href="https://codepen.io"&amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;gt;.</iframe>