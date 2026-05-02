---
title: HTML Lists
---

# HTML Lists

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/eWpRm5fZGEU?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

We have three types of lists that are used based on the type of information being listed. Each list contains items of content listed inside the list.

## Unordered List

An unordered list is used when the items inside the list do not have a specific order or the order is not important.

The unordered list starts with an opening `<ul>` tag and ends with a closing `</ul>` tag

Inside the opening `<ul>` and closing `</ul>` tags we add each list item in its own opening list item `<li>` and closing list item `</li>` tags

Example: List of fruits

```html
<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Banana</li>
</ul>
```

> #### Note
> We can only add list items `<li></li>` as direct children of unordered list `<ul></ul>`. Any other elements like `<div></div>`, `<span></span>`, `<p></p>` need to be added inside the list item tags.

## Ordered List

Based on the name ordered lists are used when the order of items in the list is important.

The ordered list starts with an opening `<ol>` tag and ends with a closing `</ol>` tag

Inside the opening `<ol>` and closing `</ol>` tags we add each list item in its own opening list item `<li>` and closing list item `</li>` tags

Example: List of Dates

```html
<ol>
  <li>Halloween - October 31st</li>
  <li>Christmas - December 25th</li>
  <li>New Year - January 1st</li>
</ol>
```

## Description List

This is a special type of list where we have a term and a description of the term.

The description list starts with an opening `<dl>` tag and ends with a closing `</dl>` tag

Inside the opening `<dl>` and closing `</dl>` tags we add the information using two tags.

- `<dt></dt>` - Description term, that we are describing
- `<dd></dd>` - Description, the description of the term

Example: A person's vehicle information

```html
<dl>
  <dt>Vehicle</dt>
  <dd>Motorcycle</dd>

  <dt>Type</dt>
  <dd>Two wheeler</dd>

  <dt>Licence</dt>
  <dd>MDF102</dd>
</dl>
```

> #### Note
> We can add elements like `<div></div>`, `<span></span>`, `<p></p>` as the direct children of `<dl></dl>` tag if need.

