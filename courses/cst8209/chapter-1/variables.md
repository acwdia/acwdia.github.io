# Variables

<div className="video">
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://v2.scrimba.com/s0tatk"
      frameborder="0"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
  <p>
    <small>This Scrimba screencast was created by <a href="https://scrimba.com/@PizzaPokerGuy">Dylan C. Israel</a>. </small>
  </p>
</div>

One of the most basic components of any programming language is a variable. A variable serves as a container that stores data. Each variable is given an identifier, which is used to recall the data stored in a variable. In most cases, the value of the variable can change, while the identifier will stay the same. 

## Declaring a Variable

In JavaScript, a variable must be declared before it can be used. A variable is declared by using a declaration statement followed by the variable identifier. The identifier is the variable's name. You learn more about [naming a variable](#naming-a-variable) below.

A value can be assigned to a variable using the equal sign ( `=` ). This is known as the **assignment operator**. When a variable has been assigned a value, that value can be retrieved by calling the variable identifier.

```js
var employeeName // Declaring without assignment
let employeeTitle = 'Professor' // Declaring with assignment
const pi = 3.14159 // Declaring a constant


console.log(employeeName) // null - because this variable will not be assigned a value
console.log(employeeTitle) // 'Professor'
console.log(pi) // 3.14159
```

## Naming a Variable

All JavaScript variables must be identified with a unique name. These unique names are often referred to as identifiers. When creating identifiers for the variables there are some general rules to follow:

- Names can contain letters, digits, underscores (`_`), and dollar signs (`$`)
- Names must begin with a letter, `$`, or `_`
- Names are case sensitive (`name`, `Name`, and `NAME` are all different variables)
- [Reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) cannot be used as names 

Beyond these general rules, there are some best practices conventions when comes to naming variables. 

#### Variable names should be descriptive

A variable name should be descriptive and related to the value the variable is or will be holding.

```js
const n = 'Ed' // Bad!
const name = 'Red' // Bad!

const studentName = 'Ted' // Good!
```

Descriptive variable names make a program easier to read and understand. 

#### Variable names should be concise

While it is important for a variable name to be descriptive, it is also important for variable names to be concise. Shorter variable names make them easier to write and less error-prone. However, it is more important that names be descriptive over conciseness. 

#### Avoid one-letter variable names

While one-letter variable names are very concise, they are not descriptive. It can be difficult to remember what a variable is for when it is only one letter and not very descriptive. The exception to this rule is when working with loops or small functions.

```js
const i = [] // Bad!

for (let i = 0; i < 10; i++) {...} // Good!
```

#### Use camelCase for variable names

When a variable name contains more than one word, it is common practice to capitalize all words after the first word. This is known as camelCase.

```js
const student_name = 'Ed' // Bad!
const StudentName = 'Red' // Bad!

const studentName = 'Ted' // Good!
```


## See Also

- [Working with JavaScript Variables and Datatypes](https://www.youtube.com/watch?v=RpU7NezV8PM)
- [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Declaring variables in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
- [JavaScript naming conventions: do's and don'ts](https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/)
- [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
