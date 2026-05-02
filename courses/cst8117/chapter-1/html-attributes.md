---
title: HTML Attributes
---

# HTML Attributes

HTML attributes are the additional information we add to the tags. 

Attributes are added in the opening tag syntax after the tag name and before the `>` to complete the opening tag. An equals sign `=` following the attribute name and then the value for the attribute in double quotes `""`. A space is used to separate multiple attributes. 

```html
<a href="about.html" title="Google">Google</a>
```

Some attributes are required for the HTML element to work properly such as a hyperlink-reference `href` attribute inside an anchor tag `<a></a>` or source `src` and alternate-text `alt` attributes inside an `<img>` tag.

However, other attributes are used to help identify an HTML tag. Two such attributes are `id` and `class`. 


| `id`                                                                                                                               | `class`                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Attribute can be added to any HTML tag for assigning a unique identifier for the tag                                               | Attribute can be added to any HTML element for assigning a generic name                                             |
| We should **not** repeat the value of `id` attribute on the page. No two elements should have same value of the `id` attribute on one page | We can repeat `class` names for different elements on the page. Multiple elements can have same `class` attribute value |
| One element can have only single `id` attribute                                                                                    | One element can have multiple `class` names                                                                           |

```html
<!-- unique id value news -->
<div id="news">
  <!-- common class div-title between both headings -->
  <h2 className="div-title">News</h2>
  
  <!-- 
    common class content between both paragraphs
    second class of news-para 
  -->
  <p className="content">
    Read todays news
  </p>
</div>
<!-- unique id value events -->
<div id="events">
  <!-- common class div-title between both headings -->
  <h2 className="div-title">Events</h2>

  <!-- 
    common class content between both paragraphs
    second class of events-para 
  -->
  <p className="content events-para">
    Check our events
  </p>
</div>
```