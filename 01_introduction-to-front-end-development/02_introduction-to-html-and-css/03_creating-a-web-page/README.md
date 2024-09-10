# Lab Instructions: Create and style a webpage

In this exercise you will you will practice building your webpage using HTML and CSS.<br><br>

> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
 <br><br> 
 
<br>

## Task 1: Create the HTML file. 

Objectives
- Add  photo.jpg to the webpage.
- Add your name as a heading to the webpage.
- Add an unordered list of your five favorite music artists.
- Add an ordered list of your top five favorite films.
- Add a hyperlink to your Facebook profile, or, meta.com.

Follow the Step by Step instructions below:

1. Open the `index.html` file and set up the following basic HTML document structure:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    </body>
    </html>
    ```

2. Set the title of the HTML document to your name:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
        <title>your name</title>
    </head>
    <body>
    </body>
    </html>
    ```

3. Link to `styles.css` in the `head` element.

4. Add five divider elements to the `body` element.

5. Add a heading 1 to the first divider element that displays your name.

6. Add `photo.jpg` using an image element in the second divider element..  

7. Add an ID attribute with the value `photo` on the image element.

8. Add a heading 2 for `Favorite Music Artists` in the third divider element. In the same divider add an unordered list with your top 5 favorite artists.

9. Add a heading 2 for `Favorite Films` in the fourth divider element. In the same divider add an ordered list with your top 5 favorite films.

10. Add a hyperlink to your Facebook profile page in the last divider element. Alternatively, add a hyperlink to `https://www.meta.com/`. As a last step, add `My Profile` to the descriptive text of the `<a>` tag. 


<br>

## Task 2: Style the webpage using CSS.

Objectives
- Style the webpage using CSS.

Follow the Step by Step instructions below:

1. Open the `styles.css ` file.

2. Add a CSS rule for your image that sets the `border` property to `2` pixels wide with a `solid blue` color.

3. Add a CSS rule for heading 1 containing your name and set its color to `blue`.

4. Add a CSS rule for all `<h2>` headings and set their color to `grey`.

5. Add a CSS rule that applies a `margin` of `4` pixels to the divider elements.


<br>



## Final Step: Let's submit your code!
Nice work! To complete this assessment:
- Save your file through File -> Save 
- Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 

### Tips

* Make sure that HTML tags are closed properly.
* Use a different heading type for your name.
* Remember the box model.
* Review the lessons *Creating a HTML document*, *Adding Images*, *Selecting and Styling*, and *Different types of selectors*.
# Discuss challenges you faced creating and styling the webpage
Congratulations on creating and styling the webpage! Now it's time to discuss some of the challenges that you had with your fellow learners. What challenges did you face, and what steps did you take to resolve these?

Share your thoughts about this task with your classmates! 

  You can use the following to guide your discussion:

- What topics did you find interesting and why?
- What did you find most challenging and why?
- What would you like to learn more about?

Full source code:
```html
<body>
    <div>
        <h1>Nguyen Quang Anh</h1>
    </div>
    <div>
        <img src="photo.jpg" id="photo" alt="User avatar">
    </div>
    <div>
        <h2>Favorite Music Artists</h2>
        <ul>
            <li>Blackpink</li>
            <li>BTS</li>
            <li>IU</li>
            <li>AMEE</li>
            <li>Hoa Minzy</li>
        </ul>
    </div>
    <div>
        <h2>Favorite Films</h2>
        <ol>
            <li>Titanic</li>
            <li>Slumdog Millionaire</li>
            <li>12 Angry Men</li>
            <li>Inside Out</li>
            <li>Cars</li>
        </ol>
    </div>
    <div>
        <a href="https://www.meta.com/">My Profile</a>
    </div>
</body>
```
```css
img {
    border: 2px solid blue;
}

h1 {
    color: blue;
}

h2 {
    color: grey;
}

div {
    margin: 4px;
}
```
# Module Quiz: Introduction to HTML and CSS
## Question 1
Which two elements should be added to the `html` element to make the structure of an HTML document?
```html
<!DOCTYPE html>
<html>
</html>
```
- [ ] `<div>`
- [ ] `<p>`
- [X] `<body>`
- [X] `<head>`

Explain: The `body` element is added to the `html` element. The `head` element is added to the `html` element.

## Question 2
When using the anchor tag `<a>`, which attribute determines where the hyperlink links to? 

A. link

**B. href**

C. src

The correct answer is href. Explain: The href attribute specifies where the hyperlink links to. `<a href="index.html">Link</a>`

## Question 3
When adding an image to a web page, which of the following is the correct HTML tag?

**A. `<img>`**

B. `<link>`

C. `<image>`

The correct answer is `<img>`. Explain: The img tag adds an image to a web page. 
`<img src="image.jpg">`

## Question 4
How many columns exist on the following HTML table?
```html
<table>
    <tr>
        <td>Falafel</td>
        <td>$10.00</td>
    </tr>
    <tr>
        <td>Pasta Salad</td>
        <td>$12.00</td>
    </tr>
    <tr>
        <td>Dessert</td>
        <td>$8.00</td>
    </tr>
</table>
```
A. 1 column

**B. 2 columns**

C. 3 columns

The correct answer is 2 columns. Explain: There are 2 columns and 3 rows in this HTML table.

## Question 5
When an HTML form is submitted to a web server, which HTTP methods can be used? Select all that apply.

- [ ] PUT
- [ ] DELETE
- [X] POST
- [X] GET

Explain: A POST method can be used for the form submission. `<form method="post">`. A GET method can be used for the form submission. `<form method="get">`

## Question 6
For the following HTML code, which CSS selectors can be used to select the h1 element? Select all that apply.
```html
<h1 id="title">Welcome</h1>
```
- [X] Element Selector
- [X] ID selector
- [ ] Class Selector
- [ ] Descendant Selector

Explain: The element selector can be used to select the `h1` element based on its `h1` tag. The ID selector can be used to select the `h1` element based on its ID attribute.
```css
h1 {

}
```
```css
#title {

}
```
## Question 7
In the following CSS code, what is the `color:` part known as?
```css
h1 {
    color: purple;
} 
```
A. CSS Selector

B. CSS Attribute

**C. CSS Property**

D. CSS Rule

The correct answer is CSS Property. Explain: The CSS properties are defined inside the curly brackets in a CSS rule.

## Question 8
Based on the following CSS, what will be the margin-box width for `div` elements?
```css
div {
    width: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 5px;
    margin-right: 5px;
}
```

A. 10 pixels

B. 20 pixels

**C. 30 pixels**

D. 40 pixels

The correct answer is 30 pixels. Explain: The margin-box width = content width + padding width + border width + margin width. In this scenario, the margin-box width is 30 pixels.

## Question 9
True or false. In document flow, block-level elements always start on a new line.

**A. True**

B. False

It is true statement. Explain: Block-level elements always start on a new line.

## Question 10
Based on the following CSS code, how will the text be aligned for the `p` element?
```css
p {
    text-align: justify;
}
```

A. The text will be aligned to the right of the `p` element.

B. The text will be aligned to the left of the `p` element.

**C. The text will be spread out so that every line of the text has the same width within the `p` element.**

D. The text will be centered inside the `p` element.

The correct answer is C. Explain: The `justify` value will spread out the text within the p element so that every line has the same width.