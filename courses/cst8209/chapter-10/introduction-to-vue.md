---
title: Introduction to Vue
---

# Introduction to Vue

Vue is a popular and approachable JavaScript framework that’s perfect for building modern web applications. If you’re new to web development or looking to expand your skills, Vue is a fantastic tool to have in your arsenal. In this article, we’ll explore the basics of Vue, including a bit of its history and a quick start guide on how to create your first Vue application.

## A Brief History of Vue

Vue (pronounced "view") was created by Evan You and was first released in 2014. Evan had previously worked at Google, where he used AngularJS for various projects. While AngularJS was powerful, it was also complex and had a steep learning curve. Evan wanted to create something that was more flexible, easier to learn, and that could be adopted incrementally—meaning developers could start using it for just a small part of their application and scale up from there.

Vue was designed to be an approachable, versatile framework that can be used for anything from small widgets to full-scale applications. One of the reasons Vue has become so popular is its simplicity and ease of integration. It’s often described as the “progressive” framework because it allows you to use as much or as little of it as you need.

Today, Vue is one of the most popular front-end frameworks, and it’s used by developers around the world to build everything from personal projects to large enterprise applications.

## Getting Started with Vue

Now that you have a bit of background on Vue, let’s jump into how you can start using it. We’ll keep things simple by setting up Vue using a CDN (Content Delivery Network), which is great for learning and small projects.

### Setting Up Vue with a CDN

You can quickly set up a Vue project by including Vue from a CDN. Here’s how you can do it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Quick Start</title>
    <!-- Include Vue from a CDN -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="app">
        <!-- Vue will control this part of the DOM -->
    </div>
    <script>
        // Your Vue code will go here
    </script>
</body>
</html>
```

In this setup:

- We include Vue via a CDN. This brings in the latest version of Vue and makes it available in our project.
- We have a `<div>` with the ID `app`. This is where Vue will take control and render our content.

### Creating Your First Vue Application

Vue applications are built around instances of the Vue object. Let’s create a simple Vue application using the options syntax, which is the traditional way of defining Vue components and applications.

```html
<script>
    const app = Vue.createApp({
        data() {
            return {
                message: 'Hello, Vue!'
            };
        }
    });

    app.mount('#app');
</script>
```

Here’s what’s happening in this code:

- We use `Vue.createApp()` to create a new Vue application instance. The object we pass to `createApp` contains options that define the data and behavior of our application.
- The `data` function returns an object that holds the reactive state of our application. In this case, we have a single piece of state: `message`.
- Finally, we call `app.mount('#app')` to tell Vue to take over the DOM element with the ID `app`.

Now, let’s add some markup inside the `#app` element to display our message:

```html
<div id="app">
    <h1>{{ message }}</h1>
</div>
```

When you open this HTML file in a browser, you’ll see "Hello, Vue!" displayed on the page. The `{{ message }}` syntax is called a mustache syntax, and it’s how we bind data to the DOM in Vue.

### Understanding the Options Syntax

The options syntax is a structured way to define a Vue component or application. Here are some of the key options you might use:

- **data**: Defines the reactive data for your component. It must be a function that returns an object.
- **methods**: Contains functions that can be called in response to events or from other methods.
- **computed**: Defines computed properties, which are values derived from your data that update automatically when the underlying data changes.

Here’s an example of using `methods` to handle events:

```html
<script>
    const app = Vue.createApp({
        data() {
            return {
                message: 'Hello, Vue!',
                count: 0
            };
        },
        methods: {
            incrementCount() {
                this.count++;
            }
        }
    });

    app.mount('#app');
</script>
```

And update your HTML like this:

```html
<div id="app">
    <h1>{{ message }}</h1>
    <p>You've clicked the button {{ count }} times.</p>
    <button @click="incrementCount">Click Me</button>
</div>
```

Here’s what’s happening:

- We added a new piece of data called `count` to track how many times the button has been clicked.
- We defined a method called `incrementCount` that increases `count` by one whenever it’s called.
- In the HTML, we use the `@click` directive to bind the `incrementCount` method to the button’s click event.

Now, when you click the button, the `count` value will increase, and the text on the page will update to reflect the new count.

## Wrapping Up

We’ve covered the basics of setting up Vue using a CDN, creating a simple Vue application using the options syntax, and handling events. Vue’s simplicity and flexibility make it a great choice for both beginners and experienced developers.

If you’re eager to learn more, the [official Vue documentation](https://vuejs.org/guide/introduction.html) is a fantastic resource. Keep experimenting, and you’ll quickly see why so many developers love working with Vue.