# Getting started with HTML
## What is HTML?
You want to insert a paragraph on your website. Choose the correct format for the opening and closing paragraph tags:   

A. Opening tag: `<p> Closing tag: <p/>` 

**B. Opening tag: `<p> Closing tag: </p>`**

C. Opening tag: `<p> Closing tag: <p>`

D. Opening tag: `<p/> Closing tag: </p>` 

The correct answer is B. Explain: This is the format required for opening and closing paragraph tags.
## HTML Documents
The structure of an HTML document starts with:    

**A. `<!DOCTYPE html>`**

B. `<HTML>` 

C. `<head>` 

D. `<body>`

The correct answer is A. Explain: The first element in an HTML document is the DOCTYPE declaration which notifies the web browser that it is an HTML document.    
## Linking documents
You are creating a website and you want to add a link to the about.html page on your home.html page. What is the correct notation to create this link?   

**A. `<a href = “about.html”>About</a>`**

B. `<a> about.html </a>`

C. `<a> href = about.html </a>`

D. <a href = “home.html”>About</a>`

The correct answer is A. Explain: The href attribute is inside the anchor tag.  
## Adding images to a webpage with HTML
You want to add an image to your webpage. What should you add within the image tag? Please select all that apply.    

- [X] The link to the source file
- [X] The width and height specifications
- [X] The alt description
- [ ] The href attribute

Explain: Just like when linking to a file, you need to provide the link to the image. The code will be `<img src= "example.jpg" width="100" height="100" />`. The image will display at its actual size if you do not specify the dimensions in the img tag. The code will be `<img src= "example.jpg" width="100" height="100" />`. Adding alt descriptions is not required to add an image on your website but it is certainly best practice. This is helpful when the image becomes unavailable, for instance, if the image file is accidentally deleted. But, most importantly, it improves the accessibility of your website to those who are differently abled. Screen readers and other accessibility tools use the Alt attribute to provide information to their users.     
## Use HTML to work with data in tables
You are developing a website for a shoe shop. In order to add a table to your website, which tags can you use? Select all that apply.
- [X] The table header tags: `<th></th>`
- [ ] The table column tag: `<tc></tc>`
- [X] The table data tags: `<td></td>`
- [X] The table tags: `<table></table>`
- [X] The table row tag: `<tr></tr>`

Explain: You use the table header tags to add headings to the table which makes it easier to understand the data. You need to add table data tags for each cell in each row. The table tag is the first tag that you need to insert in order to add a table to a webpage. You need to add table row tags for each line of information in your table. 
## What are forms?
You are building an e-commerce site for a client. What kind of input types could you use? Check all that apply.
- [X] Email
- [X] Textarea
- [X] Text
- [ ] Username
- [X] Checkbox
- [X] Radio
- [X] Password
- [X] Number

Explain: Text, password, checkbox, radio, textarea, email and number are all types of input. 
## Introduction to the DOM
True or false. The Document Object Model allows you to update all HTML elements on a web page.

**A. True**

B. False

It is true statement. Explain: The DOM allows you to update and delete existing elements on the web page.
## Web accessibility
Which of the following technologies are examples of assistive technologies? Select all that apply.    
- [ ] Microphones
- [X] Screen reader software
- [X] Subtitles in videos
- [ ] Speakers
- [X] Speech recognition software

Explain: Other assistive technologies include subtitles in videos and screen reader software.
# CSS Basics
## Selecting and styling
When you create a CSS rule, the part inside the curly brackets is called the:

**A. Declaration block**

B. Selector

C. Property

D. Value

The correct answer is declaration block. Explain: Everything between the curly brackets is called the declaration  block.
## Box model introduction
You are busy designing a web page for a small company. They supplied you with an image that needs to be in the center on the landing page. The image has a content width of 100px, 10px padding on both left and right sides, a 10px border on both left and right sides and a 10px margin on both left and right sides. What is the border box width?

A. 160px

**B. 140px**

C. 180px

The correct answer is 140px. Explain: Border box width = content width (100) + padding width (2x10) + border width (2x10) = 100 + 20 + 20 = 140px.
## Document flow - block vs. inline
True or false. Inline elements appear on a new line.

**A. False**

B. True

It is false statement. Explain: Inline elements only occupy the width and height of their content and they don't appear on a new line, hence the name "inline". 