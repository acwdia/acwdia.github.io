---
title: CSS Typography
---

# CSS Typography

Strong typography can have a big impact on the perceivable quality of a website.

Let's look at some examples of strong typography:

* [Best examples of typgraphy](http://www.awwwards.com/websites/typography/) - [awwwards](http://www.awwwards.com/)
* [A journey through beautiful typography](https://www.smashingmagazine.com/2013/08/beautiful-typography-web-design/) - [Smashing Magazine](https://www.smashingmagazine.com/)
* [Responsive Typography The Basics](https://ia.net/know-how/responsive-typography-the-basics) - [ia.net](https://ia.net/)

In CSS, we have a variety of font based styles we can apply to our CSS. The line-height, font-size and margins are the most commonly associated styles with vertical rythym.

![](https://imdac.github.io/images/fsize.jpg)

Image from www.w3.org

The most commonly used font-families: [https://www.cssfontstack.com/](https://www.cssfontstack.com)

To quote [Improving Layout with Vertical Rythm](http://webdesign.tutsplus.com/articles/improving-layout-with-vertical-rhythm--webdesign-14070):

*If you have a font-size of 16px and a line-height of 1 then your line-height will also be 16px. However, line-heights are usually best sitting between 1.4-1.6 times the size of your font (visually, this just seems to work with most fonts - though don’t take that as a rule, just play around with it). If we then look at having a line-height right in the middle of that, of 1.5, our line-height will be 24px - and that is our baseline number. From here on out, we want to make sure that all the content and typographical elements on our design match or add up to this 24px figure.*

[Typecast](http://typecast.com/blog/4-simple-steps-to-vertical-rhythm)  dives a little deeper into the math of the alignment of ideal text.

[Typographic Scales and Vertical Rhythm - VIDEO](https://app.pluralsight.com/player?course=introduction-building-website-layouts-2184&amp;author=susan-simkins&amp;name=introduction-building-website-layouts-2184-m2&amp;clip=12&amp;mode=live)

[http://www.modularscale.com](http://www.modularscale.com/)

[http://type-scale.com](http://type-scale.com/)

## CSS Typography Properties

### font-family
The choice of font used for the element(s).

![font family](https://imdac.github.io/images/font-family.gif)

### font-size
The size of the font

![font size](https://imdac.github.io/images/font-size.gif)


### line-height
The space between the lines of text
![Line Height](https://imdac.github.io/images/line-height.gif)

### font-weight
The Boldness of fonts
![Font Weight](https://imdac.github.io/images/font-weight.gif)

### text-transform
Uppercase, lowercase
![Test Transform](https://imdac.github.io/images/text-transform.gif)

**Example:** Dissecting [A List Apart](http://alistapart.com/)

By default, the HTML elements will have their own styles.

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/yJNEKM/?height=665&amp;theme-id=47863&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="665">See the Pen &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/yJNEKM/"&amp;amp;amp;amp;amp;amp;gt;Vertical Rythm&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;gt;.</iframe>

By examining the styles of the H1, H2, and P elements we've copied the styles into our default example and explore the spacing and font styles for these elements. It's a big improvement.

<iframe style={{width: '100%'}} src="//codepen.io/IMD/embed/WxvyJw/?height=665&amp;theme-id=47863&amp;default-tab=html,result&amp;embed-version=2" allowfullscreen="allowfullscreen" width="300" height="665">See the Pen &amp;amp;amp;amp;lt;a href="http://codepen.io/IMD/pen/WxvyJw/"&amp;amp;amp;amp;gt;Vertical Rythm&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt; by IMD (&amp;amp;amp;amp;lt;a href="http://codepen.io/IMD"&amp;amp;amp;amp;gt;@IMD&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;) on &amp;amp;amp;amp;lt;a href="http://codepen.io"&amp;amp;amp;amp;gt;CodePen&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;.</iframe>

## Web Fonts
The `font-family` property, as described above, allows us to set which font we want to display on our site. However, there is a limitation. The user's browser can only display fonts that are available on the user's computer. Traditionally, this means our font choices are limited. 

Fortunately, CSS allows us to specify font files available on the web that will be downloaded along with our website. This means that any browser will be able to display whichever font we choose. This feature is known as Web Fonts.

To implement [Web Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts), we have to define a `@font-face` ruleset, which specifies the font and files to download.

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}

html {
  font-family: "myFont", sans-serif;
}
```

When looking for a web font, you can either use a font distributor or an online font service. 

A font distributor will provide you with a collection of fonts and allow you to download those fonts in a format that is compatible with the web. The most common format is WOFF/WOFF2 (Web Open Font Format versions 1 and 2), which is supported by all major browsers. The font file is then placed with your site to be downloaded by visitors to your site.  There are both free and paid font distributors (see the list below). 

**Free Font Distributors**
- [Font Squirrel](https://www.fontsquirrel.com/)
- [dafont](https://www.dafont.com)
- [Everything Font](https://everythingfonts.com)

**Paid Font Distributors**
- [fonts.com](https://www.fonts.com)
- [MyFonts](https://www.myfonts.com)

> #### NOTE
> Many fonts are not free to use. Even fonts from free font distributors have certian restrictions associated with there use. Besure to read font usage requirements carefully to ensure that you have the rights to use a web font before you use it. 

Online font services, unlike font distributors, serve fonts directly on their own servers and generally require only a simple line or two of code to use a web font. Most online font services are subscription-based, like [Adobe Fonts](https://fonts.adobe.com/) and [Cloud.typography](https://www.typography.com/webfonts), however, [Google Fonts](https://fonts.google.com/) is free. 

## Google Fonts
Using Google Fonts is a straightforward process.

**Step 1: Search for a desired font from a service like [Google Fonts](https://fonts.google.com/)**

![Screenshot of search Google Fonts](/img/searching-google-fonts.png)

**Step 2: Select the desired font styles. Selected font styles can be viewed by clicking on the shopping bag icon in the top right corner.**

![Screenshot of selecting Google Fonts](/img/selecting-google-fonts.png)

**Step 3: View the selected fonts by clicking the shopping bag icon. Copy and paste the provided code into your HTML and/or CSS.**

![Screenshot of showing the selected Google Fonts](/img/selected-google-fonts.png)


## See Also
- [Fundamentals text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [Typography Cheatsheet](https://www.codecademy.com/learn/learn-css/modules/learn-css-typography/cheatsheet)
- [Web Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
- [Google Fonts API](https://developers.google.com/fonts/docs/getting_started)
- [How to Import New Fonts Using HTML](https://www.youtube.com/watch?v=g15mF_XAOB8)






