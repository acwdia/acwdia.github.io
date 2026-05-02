---
title: Introduction to React
---

# Introduction to React
React is a powerful and popular JavaScript library that's essential for modern web development. Whether you're new to web development or looking to enhance your skills, React is a must-know tool that simplifies the process of building dynamic, interactive user interfaces. In this article, we’ll explore a bit of React's history, and I’ll guide you through the basics of getting started with React, including creating a component, using JSX, and handling events.

## A Brief History of React

React was developed by Facebook and was first released in 2013. The team at Facebook needed a way to build complex, dynamic user interfaces efficiently, especially as their applications grew in size and complexity. Traditional methods of updating the DOM (Document Object Model) were becoming increasingly slow and cumbersome, resulting in performance issues.

React introduced a novel approach by using a virtual DOM — a lightweight copy of the actual DOM — that allows React to update only the parts of the page that need to change, rather than reloading the entire page. This made web applications faster and more efficient. React also popularized the concept of components—reusable, self-contained pieces of UI that make code more manageable and easier to maintain.

Today, React is one of the most widely used libraries for building web applications, and a vibrant community of developers supports it.

Next, we will explore how to create a React application using Vite. 

## Learning about Vite

In recent years, the landscape of front-end web development has undergone rapid evolution, demanding faster build times, an enhanced developer experience, and support for modern JavaScript features. **Vite** (pronounced "veet", meaning "fast" in French) has emerged as a powerful next-generation build tool that meets these needs. Created by Evan You, the developer behind Vue.js, Vite is now widely adopted across the JavaScript ecosystem, including with frameworks like React, Svelte, Vue, and even vanilla JavaScript.

### Why Vite Matters

Traditional build tools, such as Webpack or Parcel, bundle all your assets and JavaScript files before serving them to the browser. While this works well for production, it introduces delays during development, especially in large projects, because any code change requires a full or partial rebuild of the bundle.

**Vite solves this problem** by using **native ES modules** (ESM) in the browser and **on-demand compilation**. Instead of bundling the entire app upfront, Vite serves source code directly to the browser and compiles modules only when they are requested. It also leverages **esbuild**, a blazing-fast bundler written in Go, for lightning-quick preprocessing of TypeScript and JSX.

### Key Advantages of Vite

* **Instant Dev Server Startup**: Because it doesn’t pre-bundle your whole app, Vite can start the development server in milliseconds.
* **Hot Module Replacement (HMR)**: Vite updates only the changed modules instantly without a full reload, drastically improving the development workflow.
* **Optimized Production Builds**: Vite uses Rollup under the hood to generate highly optimized builds for deployment.
* **Framework Agnostic**: While it works seamlessly with Vue and React, Vite supports any framework that uses ESM.

## Creating a React Application

To begin creating a React app using Vite, you can scaffold a new project using the following command:

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```

> #### NOTE
> Starting with React 19, CDN support has been dropped. While it makes setup slightly more complex for beginners, it results in more robust, scalable, and maintainable applications.

After running the command above, a project will be created with the following structure.

```
my-react-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
```

Being familiar with the purpose of each file will help you work more effectively with React. 


### `index.html`

The `index.html` file serves as the entry point for the web app. Unlike Create React App, this file is not hidden and is fully customizable.
It also contains a `<div id="root">` where your React app mounts.

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

### `vite.config.js`

The `vite.config.js` file serves as the configuration file for Vite. You can customize plugins, paths, server settings, etc.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### `package.json`

Like most projects that utilize Node, the `package.json` file manages dependencies and scripts. For our React project, it includes Vite, React, and ReactDOM.

Scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### `src/main.jsx`

As the name suggests, the `main.jsx` file is main entry JavaScript file. It initializes the React app by creating the root and rendering the `<App />` component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `src/App.jsx`

The `App.jsx` contains the `App` component, which is the root component of your React app. With a new project, `App.jsx` will only contain default JSX content that you can start modifying right away.

```jsx
function App() {
  return <h1>Hello, React + Vite!</h1>;
}

export default App;
```

### `src/assets/`

The `assets` directory is where static assets like images or stylesheets are stored. These resources can be imported directly into components. 


## Understanding JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. Although browsers cannot interpret JSX directly, tools like Vite and Babel transpile it into standard JavaScript using `React.createElement`. JSX improves code readability by combining markup and logic in a single file.

Here’s an example of JSX in action:

```jsx
function WelcomeMessage() {
  return <h1>Welcome to React!</h1>;
}
```

In this snippet, the JSX `<h1>Welcome to React!</h1>` is syntactic sugar that gets compiled into a JavaScript function call that constructs a virtual DOM element. JSX expressions must be wrapped in a single enclosing tag and can contain dynamic expressions using curly braces `{}`:

```jsx
function GreetUser({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```

## Using Functional Components

React promotes the use of *functional components*, which are simple JavaScript functions that return JSX. Unlike class components, functional components are stateless by default but can use hooks like `useState` and `useEffect` to manage state and side effects.

Here’s a simple functional component:

```jsx
function Header() {
  return <header><h1>My React App</h1></header>;
}
```

You can compose components by nesting them within each other. This compositional model makes React extremely modular and scalable.

```jsx
function App() {
  return (
    <div>
      <Header />
      <GreetUser name="Alex" />
    </div>
  );
}
```

## Passing Data with Props

*Props* (short for properties) are how data is passed from one component to another. They are read-only, which means child components can access them but cannot modify them. Props allow components to be dynamic and reusable.

```jsx
function ProductCard({ title, price }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}
```

This `ProductCard` component can now be reused for different products:

```jsx
<ProductCard title="Wireless Mouse" price={29.99} />
<ProductCard title="Mechanical Keyboard" price={99.95} />
```


## Passing Content with Children

In React, a powerful way to make components flexible and reusable is by passing content between the opening and closing tags of a component using the special `children` prop. This approach is particularly useful when you want a component to wrap other elements or components while maintaining control over their layout or behavior.

When you render a component like this:

```jsx
<Container>
  <p>This is some inner content.</p>
</Container>
```

The paragraph inside the `<Container>` tags is automatically passed to the `Container` component as `props.children`. You can then use `props.children` (or `children` directly via destructuring) to render this content wherever needed inside the component.

Here’s a simple example of a component that accepts children:

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}
```

And in use:

```jsx
function App() {
  return (
    <Container>
      <h1>Welcome</h1>
      <p>This content is passed using children.</p>
    </Container>
  );
}
```

This renders the heading and paragraph *inside* the container’s `<div>`. The `children` prop enables developers to create layout components, such as modals, cards, panels, and wrappers, without needing to define explicit props for every possible nested element.

React’s `children` system also supports more advanced use cases, such as filtering, mapping, or cloning child elements using `React.Children` utilities.

For more information, the official React documentation provides a detailed explanation on this topic here:
[React: Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
[React: children prop](https://react.dev/learn/passing-props-to-a-component#passing-jsx)

This pattern reinforces the idea of component composition in React, where you build complex interfaces by assembling smaller, flexible pieces.


## Conditional Rendering

In real-world applications, it's often necessary to render different elements based on conditions. React supports conditional rendering using JavaScript control structures like ternary operators and logical `&&`.

Here’s a basic example using a ternary operator:

```jsx
function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}
```

Alternatively, with `&&`:

```jsx
function AdminPanel({ isAdmin }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}
```

These patterns allow developers to build interfaces that react dynamically to application state.

## List Rendering

One of React’s powerful features is its ability to render lists efficiently using the `map()` function. When rendering lists, it’s important to provide a unique `key` prop for each element to help React manage re-renders efficiently.

```jsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

React uses the `key` to detect changes in the list, such as additions, deletions, or moves, making updates faster and more reliable.


