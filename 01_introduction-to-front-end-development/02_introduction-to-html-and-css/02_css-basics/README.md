# Different types of selectors
When styling a web page, there are many types of selectors available that allow developers to be as broad or as specific as they need to be when selecting HTML elements to apply CSS rules to.

Here you will learn about some of the common CSS selectors that you will use as a developer.

## Element Selectors
The element selector allows developers to select HTML elements based on their element type.

For example, if you use `p` as the selector, the rule will apply to all `p` elements on the webpage.
```html
<p>Once upon a time...</p>
<p>In a hidden land...</p>
```
```css
p { 
  color: blue; 
}
```
## ID Selectors
The ID selector uses the id attribute of an HTML element. Since the id is unique within a webpage, it allows the developer to select a specific element for styling. ID selectors are prefixed with a `#` character.
```html
<span id="latest">New!</span>
```
```css
#latest { 
  background-color: purple; 
}
```
## Class Selectors
Elements can also be selected based on the class attribute applied to them. The CSS rule has been applied to all elements with the specified class name. The class selector is prefixed with a `.` character.

In the following example, the CSS rule applies to both elements as they have the `navigation` CSS class applied to them.
```html
<a class="navigation">Go Back</a>
<p class="navigation">Go Forward</p>
```
```css
.navigation { 
  margin: 2px;
}
```
## Element with Class Selector
A more specific method for selecting HTML elements is by first selecting the HTML element, then selecting the CSS class or ID.

The example below selects all `p` elements that have the CSS class `introduction` applied to them.
```html
<p class="introduction"></p>
```
```css
p.introduction { 
  margin: 2px;
}
```
## Descendant Selectors
Descendant selectors are useful if you need to select HTML elements that are contained within another selector.

Let's explore an example.

You have the following HTML structure and CSS rule.
```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1>
</div>
```
```css
#blog h1 {
  color: blue;
}
```
The CSS rule will select all `h1` elements that are contained within the element with the ID `blog`. The CSS rule will not apply to the `h1` element containing the text `Archives`.

The structure of a descendant selector is a CSS selector, followed by a single space character, followed by another CSS selector.

Multiple descendants can also be selected. For example, to select all `h1` elements that are descendants of `div` elements which are descendants of the `blog` element, the selector is specified as follows.
```css
#blog div h1 {
  color: blue;
}
```
## Child Selectors
Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).

For example, you have the following HTML structure:
```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
```
If you wanted to style the `h1` element containing the text `Latest News`, you can use the following child selector:
```css
#blog > h1 {
  color: blue;
}
```
This will select the element with the ID `blog` (the parent), then it will select all `h1` elements that are contained directly in that element (the children). The structure of the child selector is a CSS selector followed by the child combinator symbol > followed by another CSS selector.

**Note** that this will not go beyond a single depth level. Therefore, the CSS rule will **not** be applied to the `h1` element containing the text `Today's Weather`.
## :hover Pseudo-Class
A special keyword called a pseudo-class allows developers to select elements based on their state. Don't worry too much about what that means right now. For now, let's look at how the hover pseudo-class allows you to style an element when the mouse cursor hovers over the element.

The simplest example of this is changing the color of a hyperlink when it is hovered over. To do this, you add the `:hover` pseudo-class to the end of the selector. In the following example, adding `:hover` to the `a` element will change the color of the hyperlink to orange when it is hovered over.
```css
a:hover {
  color: orange;
}
```
This pseudo-class is very useful for creating visual effects based on user interaction.

## Other Selectors
There are many other CSS selectors available to style your webpage. 
# Text and color in CSS
As you design websites, you'll be working a lot with colors and text. There are many different ways to display text and equally as many ways to define colors.

This reading covers how text and color work in CSS.

## Color
Colors are used in many CSS properties, for example:
```css
p { 
  color: blue; 
}
```
From CSS Version 3, there are five main ways to reference a color.
- By RGB value,
- By RGBA value,
- By HSL value,
- By hex value and
- By predefined color names.
## RGB value
RGB is a color model that adds the colors red (R), green (G) and blue (B) together to create colors. This is based on how the human eye sees colors.

Each value is defined as a number between 0 and 255, representing the intensity of that color.

For example, the color red would have the RGB value of `255,0,0` since the intensity of the red color would be 100% while blue and green would be 0%.

The color black then would be `0,0,0` and the color white `255,255,255`.

When using RGB values in CSS, they can be defined using the `rgb` keyword:
```css
p { 
  color: rgb(255, 0, 0); 
}
```
## RGBA value
RGBA is an extension of RGB that add an alpha (A) channel. The alpha channel represents the opacity, or transparency, of the color.

Similar to RGB, this is specified in CSS using the `rgba` keyword:
```css
p { 
  color: rgba(255, 0, 0, 0.8); 
}
```
## HSL value
HSL is a newer color model defined as Hue (H), Saturation (S) and Lightness (L). The aim of the model is to simplify mental visualization of the color that the value represents.

Think of a rainbow that has been turned into a full circle. This represents the Hue. The Hue value is the degree value on this circle, from 0 degrees to 360 degrees. 0 is red, 120 is green and 240 is blue.

![6W-NFfelTF-vjRX3pXxfHw_71bfe705b84941a1b8f51eea05a848e1_text_color_hue](https://github.com/user-attachments/assets/5477d679-0ad0-4541-a9ea-bf60a6f1abb4)

Saturation is the distance from the center of the circle to its edge. The saturation value is represented by a percentage from 0% to 100% where 0% is the center of the circle and 100% is its edge. For example, 0% will mean that the color is more grey and 100% represents the full color.

Lightness is the third element of this color model. Think of it as turning the circle into a 3D cylinder where the bottom of the cylinder is more black and toward the top is more white. Therefore, lightness is the distance from the bottom of the cylinder to the top. Again, lightness is represented by a percentage from 0% to 100% where 0% is the bottom of the cylinder and 100% is its top. In other words, 0% will mean that the color is more black and 100% is white.

![EoftTRz8S7uH7U0c_Fu7KQ_ba9919ab0ef54d29bb897ce29dcd03e1_text_color_hue2](https://github.com/user-attachments/assets/b8cc6dde-22d2-4dc5-8aae-91da96d8c520)

In CSS, you use the `hsl` keyword to define a color with HSL.
```css
p { 
  color: hsl(0, 100%, 50%);
}
```

## Hex value
Colors can be specified using a hexadecimal value. If you're unfamiliar with hexadecimal, think of it as a different number set.

Decimal is what you use every day. Digits range from 0 to 9 before tens and hundreds are used.

Hexadecimal is similar, except it has 16 digits. This is counted as `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`.

In fact, you can convert between decimal and hexadecimal. Decimal 10 is equal to hexadecimal A. Hexadecimal F is equal to decimal 15.

Hexadecimal can also go to tens and hundreds. For example, decimal 16 is equal to hexadecimal 10, with 10 being the next number after F.

It can be a little confusing at first but don't worry, there are plenty of converters available if you get stuck.

Colors specified using hexadecimal are prefixed with a `#` symbol followed by the RGB value in hexadecimal format.

For example, the color red which is RGB `255,0,0` would be written as hexadecimal `#FF0000`.

Again don't worry if you get stuck, there are plenty of converters available for this too!

## Predefined color names
Modern web browsers support 140 predefined color names. These color names are for convenience purposes and can be mapped to equivalent hex/RGB/HSL values.

Some common color names available are listed below.
```txt
black
silver
gray
white
maroon
red
purple
fuchsia
green
lime
olive
yellow
navy
blue
teal
aqua
```
## Text
With CSS there are many ways to change how text is displayed. In this section, you'll learn the most common text manipulation CSS properties.

## Text Color

The `color` property sets the color of text. The following CSS sets the text color for all paragraph elements to red.
```css
p { 
  color: red;
}
```
## Text Font and Size
There are many different fonts to display text on your computer. In simple terms, a font is a collection of text characters written in a specific style and size.

If you've used a word processor before, you're probably familiar with the fonts Times New Roman and Calibri.

To set the font used by text in CSS you use the `font-family` property.
```css
p { 
  font-family: "Courier New", monospace;
}
```
Since computers vary in what fonts they have installed, it is recommended to include several fonts when using the `font-family` property. These are specified in a fallback order, meaning that if the first font is not available, it will check for the second font. If the second font is not available, then it will check for the third font and so on. If none of the fonts are available, it will use the browser's default font.

To set the size of the font, the `font-size` property is used.
```css
p { 
  font-family: "Courier New", monospace;
  font-size: 12px;
}
```
## Text Transformation

Text transformation is useful if you want to ensure the correct capitalization of the text content. In the example below, the CSS rule will change all text in paragraph elements to uppercase using the `text-transform` property:
```css
p { 
  text-transform: uppercase;
}
```
The most commonly used values for the `text-transform` property are: `uppercase`,  `lowercase`, `capitalize` and `none`. The default value used is `none`, which means the text displays as it was written in the HTML document.
## Text Decoration
The `text-decoration` property is useful to apply additional decoration to text such as underlining and line-through (strikethrough).
```css
p { 
  text-decoration: underline;
}
```
It is possible to set the color, thickness and styling of the decoration too. In the example below, the underline will be a solid red line that is 5 pixels thick.
```css
p { 
  text-decoration: underline red solid 5px;
}
```
If this is confusing, don't worry. These properties can be individually set using the `text-decoration-line`, `text-decoration-color`, `text-decoration-style` and `text-decoration-thickness` properties. Let's use the same example again and define it using the individual properties:
```css
p { 
  text-decoration-line: underline;
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-thickness: 5px;
}
```
The most common `text-decoration-line` values used are: `underline`, `overline`, `line-through` and `none`. None is the default value to use no text decoration.

There are many styles available for the `text-decoration-style` property; `solid`,  `double`, `dotted`, `dashed` and `wavy`. The `text-decoration-style` property requires the decoration line to be defined. If the decoration style is not specified, `solid` will be used.
# Alignment basics
Let's explore how to align text and HTML elements using CSS.

Let's first focus on horizontal alignment. Vertical alignment is more difficult so you'll explore that later on.

## Text Alignment

Aligning text within an HTML element is very simple. To do this, you use the `text-align` CSS property. In the following example, the CSS rule is setting the text of all paragraph elements to be center aligned.

```css
p {
    text-align: center;
}
```
Text alignment can be set to `left`, `right`, `center` and `justify`.

The `justify` alignment spreads the text out so that every line of the text has the same width.

The default alignment is `left` for languages that are left-to-right such as English. For right-to-left languages such as Arabic, the default alignment is `right`.

## HTML Element Alignment
HTML element alignment is more complicated than text alignment. To align HTML elements, you must consider the box model and document flow from previous lessons. Aligning an HTML element is done by changing the properties of its box model and how it impacts the document flow.

## HTML Element Center Alignment

To center align an element, you set a width on the element and push its margins out to fill the remaining available space of the parent element as in the following HTML structure:
```html
<div class="parent">
  <div class="child">
  </div>
</div>
```
In your CSS, you'll set the parent element to have a red border to visualize the space it occupies:
```css
.parent {
  border: 4px solid red;
}
```
The `child` element will have a width equal to 50% of the `parent` element with a padding of 20 pixels. Note that `padding: 20px` is shorthand for setting the padding top, bottom, left and right to `20px`. To visualize the space it occupies, set the border to green:
```css
.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green;
}
```
To align the element to the center, set its `margin` property to `auto`. The `auto` will tell the browser to calculate the margin automatically based on the space available.
```css
.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green;
  margin: auto;
}
```
The result is the `child` element is centered within the `parent` element:

<img width="313" alt="ElKjOOdnT2GSozjnZy9hJw_0670f63ae6e548a28dfa041b7983bfe1_css_center_div" src="https://github.com/user-attachments/assets/20646b29-2593-4dfc-b22e-809694564950">

It is important to note that this works because the `div` element is a block-level element.  

If you want to align an inline element like `img`, you will need to change it to a block-level element. Similar to the `div` example, you add the `img` to a parent element:

```html
<div class="parent">
  <img src="photo.png" class="child">
</div>
```
The CSS rule then changes the `img` element to a block-level element and sets its margin to `auto`:
```css
.child {
  display: block;
  width: 50%;
  margin: auto;
}
```
To be more precise, in CSS you can set only the left and right margins to auto. This allows you to set the top and bottom margins to specific values if needed.
```css
.child {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
```
## HTML Element Left / Right Alignment
The two most common ways to left and right align elements are to use the `float` property and the `position` property.

The `position` property has several value options that impact how the element displays in the document flow. You'll explore how to use the `position` property later on. For now, let's focus on the `float` property.

The `float` property sets an element's position relative to the text content within a parent element. Text will wrap around the element.

In the following example, the image will be aligned to the right of the `div` element. The text content will wrap around the image:
```html
<div class="parent">
  <img src="photo.png" class="child"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu odio eget leo auctor porta sit amet sit amet justo. Donec fermentum quam in diam volutpat, at lacinia diam placerat. Aenean quis feugiat sem. Suspendisse a dui massa. Phasellus scelerisque, mi vestibulum iaculis tristique, orci tellus gravida nisi, in pellentesque elit massa ut lorem. Sed elementum ornare nunc vel cursus. Duis sed enim in nulla efficitur convallis sed eget dolor. Curabitur scelerisque eros erat, in vulputate dolor consequat vel. Praesent ac sapien condimentum, ultricies libero at, auctor orci. Curabitur ut augue ac massa convallis faucibus sed in magna. Phasellus scelerisque auctor est a auctor. Nam laoreet sem sapien, porta imperdiet urna laoreet eu. Morbi dolor turpis, congue id bibendum eget, viverra et risus. Quisque vitae erat id tortor ullamcorper maximus.
</div>
```
```css
.child {
  float: right;
}
```
The following displays in the web browser:

![JBGR11KmTT-RkddSpn0_WA_a961d58ec8334d8387cc2df53c9b15e1_css_float_right](https://github.com/user-attachments/assets/ecba30ef-780c-40d7-bc1b-886d06051775)

# Knowledge check: CSS basics
## Question 1
To reference a CSS file in an HTML document, you use the ______________ tag.

A. head

B. script

C. style

**D. link**

To reference a CSS file in an HTML document, you use the link tag. Explain: The link tag is used to reference a CSS file.

## Question 2
In the following CSS rule, the `h1` part of the rule is called the ______________.
```css
h1 {
    color: green;
}
```

A. Box model

**B. Selector**

C. Inheritance

D. HTML

In the following CSS rule, the `h1` part of the rule is called the selector.
## Question 3
What is the total horizontal margin of the following CSS rule?
```css
div {
    width: 10px;
    padding: 20px;
    margin: 40px;
}
```
A. 10 pixels

B. 30 pixels

**C. 80 pixels**

D. 70 pixels

The correct answer is 80px. Explain: For the given CSS rule, the total horizontal margin is the sum of the left and right margins. In this rule, the margin on the left is 40px, and the margin on the right is also 40px. Thus, the total horizontal margin is 40px (margin-left) + 40px (margin-right) = 80px.

## Question 4
Which CSS property and value change the HTML element to a block-level element?

A. align-content

B. content

C. list-style

**D. display: block**

The correct answer is display: block. Explain: The display property and block value are used to change the HTML element to a block-level element.

## Question 5
Which CSS property and value change the text to center alignment?

**A. text-align: center**

B. align-self

C. vertical-align

D. align-items

Explain: The text-align property and center value change the text to center alignment.
# Programming Assignment: Styling a page

In this exercise you will you will practice applying CSS rules to HTML elements.<br><br>

> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
 <br><br> 
 
<br>

## Task 1: Style an HTML page using CSS..

Objectives
- Define a CSS rule using an element selector.
- Define a CSS rule using an id selector.
- Define a CSS rule using a class selector.
- Define a CSS rule using a descendant selector.

Follow the Step by Step instructions below:

1. Open the `styles.css` file.

2. Add a CSS rule for the `body` element that sets the background color to `#E0E0E2`.

3. Add a CSS rule for the `h1` element that sets the text color to: `#721817`.

4. Add a CSS rule for the `h2` element that sets the text color to: `#721817`.  

5. Add a CSS rule for the `center-text` CSS class that aligns the text to `center`.

6. Add a CSS rule for the HTML element with the id `logo`. Set its left and right margins to `auto` and changes its display to a `block` element.  

7. Add a CSS rule for all `span` elements that are children of `h2` elements that sets the text color to `#FA9F42` and its font size to `0.75em`.

8. Add a CSS rule for the HTML element with the id `copyright`. Set its top padding to `12` pixels and its font size to `0.75em`. 


<br>



## Final Step: Let's submit your code!
Nice work! To complete this assessment:
- Save your file through File -> Save 
- Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 

### Tips

* If you get stuck, apply the CSS rules one at a time and verify their behaviour is what you expect.
* Review the lessons *Selecting and Styling*, *Text and color in CSS*, *Different types of selectors*, and *Box Model Introducction*.

My result and source code:

![image](https://github.com/user-attachments/assets/b7d3eb5d-fb96-49c9-8fc5-8ac03aefbf51)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Little Lemon</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div>
        <img src="logo.png" id="logo">
    </div>
    <div class="center-text">
        <h1>Our Menu</h1>
        <h2>Falafel <span>NEW</span></h2>
        <p>Chickpea, herbs, spices.</p>
        <h2>Pasta Salad</h2>
        <p>Pasta, vegetables, mozzarella.</p>
        <h2>Fried Calamari</h2>
        <p>Squid, buttermilk.</p>
    </div>
    <div class="center-text">
        <p id="copyright">
            Copyright Little Lemon
        </p>
    </div>
</body>
</html>
```
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

- [CSS Reference (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [HTML and CSS: Design and build websites by Jon Duckett](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS Definitive Guide by Eric Meyer](https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195/)