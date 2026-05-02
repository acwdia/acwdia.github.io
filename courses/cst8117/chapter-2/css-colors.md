---
title: CSS Colors
---

# CSS Colors

CSS supports a wide variety of [color values](http://www.w3schools.com/colors/colors_hex.asp). A quick and simple way to get a nice range of shades of any colors is the HSL value.  With a range of percentages we have a range of light to dark shades of a particular color.  Here's a quick little app that demo's the range of HSL.

## Colors in CSS

Color can be added in several ways through CSS. It can also be written in multiple ways.

The CSS properties which allow you to set a color are:

**color** - text color

**background-color** - color behind the text

**border-color** - color of the border drawn around elements

**outline-color** - similar to a border but doesn't create any space on the page. Outlines are drawn over top of the padding.

Remember to use the American spelling for color.

### Color Values

There are many different ways to write a color value in CSS. Any of these are acceptable in all modern browsers.  [caniuse.com](http://caniuse.com/#search=hsla)

1. **Named Colors**. Values can be any of the 140 named colors. Eg: black, white, red, blue, salmon, khaki, goldenrod, etc. [Color Names](https://www.w3schools.com/colors/colors_names.asp)
2. **Six-digit HEX** values. Starting with a number sign and followed by six digits. The first two digits are red, the second two are green, and the last two are blue. Each value ranges from 00 to FF. In decimal values these are the equivalent of 0 - 255. Eg. #34FF72
3. **Three-digit HEX** values. If the first and second digit of each HEX value are the same then you can use a three-digit version of the color. #44FF66 could be written as. You have to use either six or three digits. Any other number will fail.
4. **rgb( )** function. If you have the red, green, and blue values as number-values instead of HEX values then you can use the rgb( ) function. Each of the three numbers can be between 0 and 255. Eg: rgb(45, 255, 0)

![Color Wheel](https://imdac.github.io/images/color-wheel.png)

5. **rgba( )** function. If you want to include an alpha channel (degree of transparency) with your color then use the rgba( ) function. The first three values will be the red, green and blue values. The fourth value will be the percentage of alpha. eg: rgba(45, 255, 0, .50) - 50% transparent version of the previous color.
6. **hsl( )** function. The Hue, Saturation, Lightness values for a color. This is a different way of looking at color. The first value is HUE - a number between 0 and 360 which represents where on the color wheel the color would appear. Second value is saturation and it represents the amount of or lack of color intensity with a value between 0 and 100. The third value is the lightness. It is a value between 0 and 100 that represents the amount of white or black added to the color. zero would be all black and 100 would be as much white as possible. Eg: hsl(120, 100%, 50%) - this would be a redish hue with as much color intensity as possible and no extra white or black.

![HSL Colors](https://imdac.github.io/images/hsl.png)

7. **hsla( )** function. This is the same as the hsl( ) function except there is an alpha value added at the end. Eg: hsla( 120, 100%, 50%, .5) - Same as the previous example except at 50% alpha.

[COLOR CONVERTER](http://www.cssportal.com/css-color-converter/)

**RGB / HEX Range**

<iframe scrolling="no" title="RGB Color Picker" src="//codepen.io/dedica/embed/qMJKEO/?height=265&amp;theme-id=47863&amp;default-tab=js,result&amp;embed-version=2" allowtransparency="true" allowfullscreen="true" style={{width: '100%'}} height="265" frameborder="no">See the Pen &lt;a href="https://codepen.io/dedica/pen/qMJKEO/" data-mce-href="https://codepen.io/dedica/pen/qMJKEO/"&gt;RGB Color Picker&lt;/a&gt; by Amel Dedic (&lt;a href="https://codepen.io/dedica" data-mce-href="https://codepen.io/dedica"&gt;@dedica&lt;/a&gt;) on &lt;a href="https://codepen.io" data-mce-href="https://codepen.io"&gt;CodePen&lt;/a&gt;.</iframe>

**HSL Color Range**

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/EKqZWN/?height=465&amp;theme-id=47863&amp;default-tab=result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="465">See the Pen &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/EKqZWN/"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;HSL Shade Pallett&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;.</iframe>