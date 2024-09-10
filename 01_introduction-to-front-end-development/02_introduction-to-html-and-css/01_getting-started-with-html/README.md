# Creating an HTML Document

In this exercise you will you will practice creating a simple HTML document.<br><br>

> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
 <br><br> 
 
<br>

## Task 1: Create a valid HTML document that displays a piece of text.

Objectives
- Add the **DOCTYPE**.
- Add the HTML, head and body elements.
- Add the title element.
- Add the text to the body element.

Follow the Step by Step instructions below:

1. Open the `index.html` file.

2. Type `<!DOCTYPE html>` on the first line.

3. Create your `html` element on the next line. This will be the root element of the document.

4. Add the `head` element inside the `html` element. The head element contains data about the HTML document that does not display in the web browser.  

5. Add the `title` element inside the `head` element.

6. Add the text `My First HTML Document` inside the `title` element. The content of the `title` element is the text that will be displayed in the web browser tab.   

7. Close the `head` tag and add the `body` element. The ``body element contains all displayable content of the webpage.

8. Add the text `I successfully created my first document` inside the `body` element. This displays on the webpage. 


<br>



## Final Step: Let's submit your code!
Nice work! To complete this assessment:
- Save your file through File -> Save 
- Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 

### Tips

* Ensure that the **DOCTYPE** is declared at the beginning of the file.
* Remember that HTML documents have a specific structure.
* Review the lessons *What is HTML?* and *HTML Documents.*

# Simple HTML tags
There are many tags available in HTML. Here you will learn about common tags that you'll use as a developer.

## Headings
Headings allow you to display titles and subtitles on your webpage.
```html
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
```
The following displays in the web browser:

![PRNSX1WdSgqTUl9VnZoKoA_f18fed5168e54dee9538cd69c1a38de1_html_headings](https://github.com/user-attachments/assets/74966337-1036-4140-81b6-f6461709889a)

## Paragraphs
Paragraphs contain text content.
```html
<p>
   This paragraph
   contains a lot of lines
   but they are ignored.
</p>
```
The following displays in the web browser.

![_xbIdMIgTi-WyHTCIE4v1g_be711d2eef824cb9969e1778d8f457e1_html_paragraph](https://github.com/user-attachments/assets/a951a112-1509-4bd9-bf48-3829f8b6a865)

**Note** that putting content on a new line is ignored by the web browser.

## Line Breaks
As you've learned, line breaks in the paragraph tag line are ignored by HTML. Instead, they must be specified using the `<br>` tag. The `<br>` tag does not need a closing tag.
```html
<p>
   This paragraph<br>
   contains a lot of lines<br>
   and they are displayed.
</p>
```
The following displays in the web browser: 

![RfGHPZlBRW-xhz2ZQVVvLw_b1ea92a480e64b3a97687bd7187690e1_html_line_breaks](https://github.com/user-attachments/assets/88ac0ec4-bc78-400e-baff-148ac586cd44)

## Strong
Strong tags can be used to indicate that a range of text has importance.

```html
<p>
   No matter how much the dog barks: <strong>don't feed him chocolate</strong>.
</p>
```

The following displays in the web browser: 

![kG1k9jWyTJ2tZPY1ssyd4g_4038e41f410644ed98d386a4b8f3cee1_html_strong](https://github.com/user-attachments/assets/f58c1555-1096-40c9-8744-490d1cef1319)

## Bold
Bold tags can be used to draw the reader's attention to a range of text.

```html
<p>
   The primary colors are <b>red</b>, <b>yellow</b> and <b>blue</b>.
</p>
```

The following displays in the web browser: 

![NcBXsKWPTqSAV7Clj46kIg_0c8f5c21ff0348eda77d180bde7fcfe1_html_bold](https://github.com/user-attachments/assets/6fe4a229-125b-4432-8ead-d52be1450ce7)


![nTRzPC9rQFq0czwva-BaRg_59ee4123b1d145cf88ad6e9a99049ee1_html_strong2](https://github.com/user-attachments/assets/423a730c-d0e3-456a-9f69-5ad79b1662e6)

Bold tags should be used to draw attention but not to indicate that something is more important. Consider the following example:

```html
The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>.
```

The following displays in the web browser: 

![id5Z3KN_Sk6eWdyjf8pO5Q_c5ccf4481f6a4ba48fffcd9150dd6fe1_html_bold2](https://github.com/user-attachments/assets/96c089a3-529e-4f75-89d3-447eb2f17c25)

## Emphasis
Emphasis tags can be used to add emphasis to text.
```html
<p>
   Wake up <em>now</em>!
</p>
```

The following displays in the web browser: 

![4atY9nihR4KrWPZ4oWeCog_8090869c6fa445d1ab113e549cd8ece1_html_emphasis](https://github.com/user-attachments/assets/08cc9535-ed73-4274-b375-fec4d7385647)

## Italics
Italics tags can be used to offset a range of text.

```html
<p>
   The term <i>HTML</i> stands for HyperText Markup Language.
</p>
```

The following displays in the web browser: 

![ql0_4hlsQXOdP-IZbOFzgg_aec5800603b747b1b9dd3438324afee1_html_italics](https://github.com/user-attachments/assets/4ad37030-03bf-4bca-9684-67690e4e6a93)

## Emphasis vs. Italics
By default both tags will have the same visual effect in the web browser. The only difference is the meaning.

Emphasis tags stress the text contained in them. Let's explore the following example:

```html
I <em>really</em> want ice cream.
```

The following displays in the web browser: 

![MJzhVigfS7Sc4VYoHwu0BA_13cbab9970bb430493691d7c282574e1_html_emphasis2](https://github.com/user-attachments/assets/093e945c-a89e-4d14-99df-5b74942614fb)

Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language, for example:

```html
My favourite book is <i>Dracula</i>.
```

The following displays in the web browser: 

![wqqCrRMMQuaqgq0TDHLmDA_16e1d563fb804784be2b75c06ed4b8e1_html_italics2](https://github.com/user-attachments/assets/6ff0c959-0d31-4151-93dc-421301c31735)

Screen readers will not announce any difference if an _italics_ tag is used.

## Lists
You can add lists to your web pages. There are two types of lists in HTML.

Lists can be unordered using the `<ul>` tag. List items are specified using the `<li>` tag, for example:

```html
<ul>
   <li>Tea</li>
   <li>Sugar</li>
   <li>Milk</li>
</ul>

```

This displays in the web browser as:

![cLAXzcy6S0iwF83MuktI-g_85d0bfc5f85847a08ef7149bb48f42e1_html_unordered_list](https://github.com/user-attachments/assets/e73e2e7a-1048-42b3-bd2c-a041f97c69a2)

Lists can also be ordered using the `<ol>` tag. Again, list items are specified using the `<li>` tag.

```html
<ol>
   <li>Rocky</li>
   <li>Rocky II</li>
   <li>Rocky III</li>
</ol>
```

This displays as the following in the web browser.

![-NWYeiVmQSSVmHolZjEkdw_6403655f554b4e76b471f38ada0135e1_html_ordered_list](https://github.com/user-attachments/assets/cfa375fe-34a8-4b3f-ad3c-69889ccd203e)

## Div tags
A `<div>` tag defines a content division in a HTML document. It acts as a generic container and has no effect on the content unless it is styled by CSS.

The following example shows a `<div>` element that contains a paragraph element:

```html
<div>
   <p>This is a paragraph inside a div</p>
</div>
```

This displays as the following in the web browser.

![5OMnkkHmQNWjJ5JB5kDVDA_4407dda8486b438e8883c679f53fdae1_html_div_no_style](https://github.com/user-attachments/assets/15d47b54-36da-47e7-878f-b187365b5aa1)

It can be nested inside other elements, for example:

```html
<div>
   <div>
      <p>This is a paragraph inside a div that’s inside another div</p>
   </div>
</div>
```

This displays in the web browser as:

![PbbzB2RQQvq28wdkUDL6Hg_1705c9d50efb4b5dbd11c7d1c0edf1e1_html_nested_div](https://github.com/user-attachments/assets/75f6ce5d-1bcb-4511-82dd-63030a53be71)

As mentioned, the div has no impact on content unless it is styled by CSS. Let’s add a small CSS rule that styles all divs on the page.

Don't worry about the meaning of the CSS just yet, you'll explore CSS further in a later lesson. In summary, you're applying a rule that adds a border and some visual spacing to the element.

```html
<style>
   div {
      border: 1px solid black;
      padding: 2px;
   }
</style>
<div>
   <div>
      <p>This is a paragraph inside stylized divs</p>
   </div>
</div>
```

This displays in the web browser as:

![bVdFeS21TUSXRXkttd1EVw_3cd3c9ca71214bafa65b0144efae3ee1_html_nested_div_with_style](https://github.com/user-attachments/assets/e3db2a89-7e89-44ca-b82f-ceb122a07ff4)

Div elements are an important part of building webpages. More advanced usage of div elements will be explored in another course.

## Comments
If you want to leave a comment in the code for other developers, it can be added as:
```html
<!-- This is a comment --> 
```
The comment will not be displayed in the web browser.
# Knowledge Check - Getting started with HTML
## Question 1
An HTML document begins with ______________.

A. The html tag

**B. The DOCTYPE declaration**

C. The head tag

D. The body tag

An HTML document begins with the DOCTYPE declaration. Explain: An HTML document always begins with a DOCTYPE declaration followed by the html tag.

## Question 2
To display a link to another HTML document, the ______________ tag is used.

A. link

B. html

**C. anchor (a)**

D. img

To display a link to another HTML document, the anchor tag is used. Explain: The anchor tag is used to link to another HTML document.

## Question 3
To add an image to a webpage, the ______________ tag is used.

**A. img**

B. image

C. anchor (a)

D. link

To add an image to a webpage, the img tag is used. Explain: The img tag is used to include images in an HTML document.

## Question 4
To represent the HTML document in JavaScript, the browser builds  _____________.

A. an HTML Element Model

B. an HTML Script

**C. Document Object Model**

To represent the HTML document in JavaScript, the browser builds Document Object Model. Explain: A Document Object Model (DOM) is built to represent the HTML document in JavaScript.

## Question 5
Which of the following answer choices improves web accessibility for people with disabilities? Select all that apply.

- [X] Correct HTML structure
- [X] Accessible Rich Internet Application (ARIA) techniques
- [X] Appropriate use of HTML elements

Explain: Ensuring correct HTML structure will help assistive technologies to describe, navigate and interact with the content. ARIA techniques improve accessibility for complex web applications. Using HTML elements appropriately such as using paragraph tags for text and button tags for buttons will help assistive technologies to describe, navigate and interact with the content.
# Additional Resources
Here is a list of resources that may be helpful as you continue your learning journey.
- [HTML Elements Reference (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [The Form Element (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [What is the Document Object Model? (W3C)](https://www.w3.org/TR/WD-DOM/introduction.html)
- [ARIA in HTML (W3C in Github)](https://www.w3.org/TR/WD-DOM/introduction.html)
- [ARIA Authoring Practices (W3C)](https://www.w3.org/TR/wai-aria-practices-1.2/)