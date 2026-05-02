---
title: CSS Units of Measurement
---

# CSS Units of Measurement

There are a variety of unit's that we can use to build our websites.

The primary ones that we will be focusing on are:

- **px** - Pixel based measurements are ideal for base values and media queries.
- **%** - Percentage based measurements for sizing such as width, height, etc.
- **rem** - is based on `html` element's font size also called root element's font size value. These are best for fonts size and spacing. Example: if font size of `html` is `16px` then value of `1.5rem` is `24px`
- **em** - em unit is based on the font size value of the element. If used for the font-size property it is derived from the inherited font-size from the parent element. Mainly used for spacing such padding. Example: If the element's font-size is `14px` then `1.5em` is `21px`
- **vh** - is the unit that is based on the height of the viewport(browser) window. 100vh is 100 % of the viewport(browser) height.
- **vw** - is based on the width of the viewport(browser) window. 100vw is 100% of the viewport(browser) width.

**rem** and **em** are relative units of measurement mainly used with font sizing and and are important because of the diversity of screen sizes and devices our web applications need to support. 

Not all devices will render a default font size of 16px. 16px however is arguably the most common font size but it could very well be 14px on a smaller device.

With a relative unit of measurement we can rely on the default font size of the device or we can force all devices to have the same root element font-size by adding a value for `font-size` to `html`

**Example of rem**

If we have the following CSS

```css
body{
  font-size: 1rem;
}
header{
  font-size: 1.5rem;
}
```
In case of root element's font-size being 16px we will get the following result
```css
body{
  font-size: 16px;
}
header{
  font-size: 24px;
}
```

In case of root element's font-size being 14px we will get the following result
```css
body{
  font-size: 14px;
}
header{
  font-size: 21px;
}
```

**Example of em**

If we have the following CSS

```css
p {
  font-size: 24px;
  width: 2.5em;
}
```

The end result is going to be
```css
p {
  font-size: 24px;
  width: 60px;
}
```

If the font-size value of an element is 24px and the width is set to 2.5em then the width will be calculated to 2.5 x 24 = 60px