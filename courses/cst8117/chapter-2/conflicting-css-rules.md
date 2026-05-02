---
title: Conflicting CSS Rules
---

# Conflicting CSS Rules

Browsers use a complex process to determine the styling applied to a site and developers need to have an understanding of how this process works to correctly apply styling to the solutions they build. Three concepts help determine which styles will be applied to an element: Cascade, Inheritance, and Specificity. 

## Cascade

The [cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#cascade) in CSS is designed to allow multiple style sheets to affect the styling of a webpage.  With multiple sources of styling information, an element or selector could have conflicting associated declarations in need of resolution. So, the **cascade** takes an unordered list of declared values for a given property on a given element, sorts them by their declaration’s precedence as determined below, and outputs a single cascaded value.  

The cascade determines the correct value by the origin of a declaration. The origin of a declaration is based on where it comes from and its importance is whether or not it is declared `!important`. The precedence of the various origins is, in descending order:  

1. Transition declarations
2. Important user agent declarations
3. Important user declarations
4. Important author declarations
5. Animation declarations 
6. Normal author declarations
7. Normal user declarations
8. Normal user agent declarations
  
*Declarations from origins earlier in this list win over declarations from later origins.*

## Inheritance

When no value is specified for a property, the value of the parent element property can be inherited as part of the defaulting process.  It’s worth noting however that not all property values are automatically inherited.  For example, developers likely wouldn’t want a width property to be inherited by child elements for a layout.  

Developers can assign special property values to control inheritance if needed. 

- `inherit`: will trigger the inheritance of the computed value of its parent element and can be applied to any CSS property. 

- `initial`: applies the initial or default value of a property as set by the browser. 

- `unset`: resets the property to its inherited value if available or to its initial value if not.  The `unset` property can be thought of as a conditional combination of `inherit` and `initial`. 

- `revert` is a newer option but not widely supported by all major browsers. It will roll back the value of a property to the value it would have if no changes had been made within the context of its origin.


## Specificity

[Specificity](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) is how browsers further determine which style declarations are applied by prioritizing the most relevant style to an element. Specificity is calculated by assigning a heavier weight to those selectors that are more specific.

- Tag-name or type selectors are not very specific. A website could have hundreds of `<p>` tags embedded in it making it difficult to target selected groups of them. 
- The `class` attribute increases specificity by targeting subsets of elements that have common styling rules beyond the element selector.  
- The `id` attribute of an element should be unique within a website making it very specific giving it the highest priority. 
- Finally, if an element has inline styling `<p style=“color: brown”>` it automatically overrides all others. 

Where specificity is determined to be equal between two competing declarations, the last declaration wins. To calculate specificity, we count the occurrences of each selector and order them from highest to lowest using the following formula:

| Identifiers | Classes | Elements | 
| ----------- | ------- | -------- |
| # of ID selectors contained in the overall selector | # of class selectors, attribute selectors, or pseudo-classes contained in the overall selector | # of element selectors or pseudo-elements cotnained inside the overall selector |

> #### NOTE
> Each column in the table above is its own level of specifity that cannot be overwritten by selectors with a lower specificity. 

The following table shows examples of using the specificity score for different selectors. 

| Selector | Identifiers | Classes | Elements | Total Specificity |
| -------- | :---------: | :-----: | :------: | :---------------: | 
| `h1`     | 0           | 0       | 1        | 0-0-1             |
| `header > h1` | 0      | 0       | 2        | 0-0-2             |
| `.title` | 0           | 1       | 0        | 0-1-0             |
| `header > .title` | 0  | 1       | 1        | 0-1-1             |
| `#title` | 1           | 0       | 0        | 1-0-0             |



