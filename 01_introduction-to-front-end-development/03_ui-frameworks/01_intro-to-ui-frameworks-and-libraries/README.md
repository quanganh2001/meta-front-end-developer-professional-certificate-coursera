# Bootstrap
Bootstrap is often described as a way to "build fast, responsive sites" and it is a "feature-packed, powerful, and extensible frontend toolkit". 

Some people refer to it as a "front-end" framework, and some are trying to be more specific by referring to it as a "CSS framework" or a “CSS library”. 

So, what is Bootstrap?

Simply put, Bootstrap is a library of CSS and JavaScript code that you can combine to quickly build visually appealing websites.

Modern web development is all about **components**. Small pieces of reusable code that allow you to build websites quickly. Bootstrap comes with multiple components for very fast construction of multiple components, or parts of components. 

Another important aspect of modern development is **responsive grids** which allow web pages to adapt their layout and content depending on the device in which they are viewed. Bootstrap comes with a pre-made set of CSS rules for building a responsive grid.

Bootstrap is very popular amongst developers as it saves development time and provides a way for developers to build visually appealing prototypes and websites.

Bootstrap saves significant time because all the CSS code that styles its grid and pre-built components is already written. Instead of having to have a high level of expertise in various CSS concepts, you can just use the existing Bootstrap CSS classes to produce nicely-looking websites. This is indispensable when you need to quickly iterate on website layouts. 

Once you know how Bootstrap works, you’ll have enough knowledge to tweak its styling and a whole new world of development opens up to you.

Since Bootstrap is so popular, understanding how to work with it is a prerequisite in many web development companies. Additionally, you can be safe in knowing that both you and your team members have a common design system and you don't have to spend time deciding how to build one. You are free to jump from team to team, from project to project, even from one company to another, and you don't need to re-learn "their way of doing things".

All of these points make investing time to learn Bootstrap a great way to boost your web development skills. In this lesson, you’ll be introduced to the core concepts of Bootstrap and learn how to build web pages using it.
# Working with Bootstrap grid
## Instructions
### Introduction
In this exercise, you will practice building a webpage using the Bootstrap Grid.
### Goal
- Create a two-column food menu for Little Lemon.
### Objectives
- Set up the Bootstrap container.
- Display the Little Lemon logo in the top center of the webpage using Bootstrap.
- Display the food menu in two columns using Bootstrap Grid.

### Instructions
**Step 1:** Open index.html

**Step 2:** Add a div element inside the body element. This div will be the Bootstrap container. 

**Step 3:** Add the class attribute to this element with the value container.

```html
<body>
    <div class="container">
    </div>
</body>
```
**Step 4:** Add three div elements to the Bootstrap container element. Each of these div elements will be a Bootstrap row. Add the class attribute to this element with the value row.
```html
<body>
    <div class="container">
        <div class="row">
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 5:** The first row will contain the Little Lemon logo. Add a div element to the first row. 

**Step 6:** Add the class attribute to this element with the value col-12. This will take up 12 column spaces.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 7:** Add another div element to the col-12 element. 

**Step 8:** Add the class attribute to this element with the value text-center. This will allow you to center the logo.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 9:** Add an image element in the text-center element with the img-fluid class applied to it.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 10:** In the second row, add another div element with the class col-12.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 11:** Add a div element to the column and apply the class text-center.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 12:** Inside the element, add an h1 element with the text Our Menu.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
**Step 13:** Add two div elements in the final row. 

**Step 14:** Add a class attribute to each element with the value col-12 col-lg-6.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
            </div>
            <div class="col-12 col-lg-6">
            </div>
        </div>
    </div>
</body>
```
**Step 15:** Add the following elements in the first col-12 col-lg-6 element: 

- An h2 element containing the text Falafel.
- A paragraph element containing the text Chickpea, herbs, spices.
- An h2 element containing the text Fried Calamari.
- A paragraph element containing the text Squid, buttermilk.

**Step 16:** Add the following elements In the second col-12 col-lg-6 element:

- An h2 element containing the text Pasta Salad.
- A paragraph element containing the text Lettuce, vegetables, mozzarella.
- An h2 element containing the text Greek Salad.
- A paragraph element containing the text Cucumbers, onion, feta cheese.
```html
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2>Falafel</h2>
                <p>Chickpea, herbs, spices.</p>
                <h2>Fried Calamari</h2>
                <p>Squid, buttermilk.</p>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Pasta Salad</h2>
                <p>Lettuce, vegetables, mozzarella.</p>
                <h2>Greek Salad</h2>
                <p>Cucumbers, onion, feta cheese.</p>
            </div>
        </div>
    </div>
</body>
```
**Step 17:** Save the file.

**Step 18:** Click on 'Go live' which is at the bottom right of your editor.

![BaW8d0wcSV6lvHdMHCleAQ_67e029598c564c69b3d681d0adf511a1_image003](https://github.com/user-attachments/assets/394a83d4-9311-48c7-bb77-3becdc34f762)

Once the server is up and running you'll see the exposed port.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/bcebd68f-f7f8-450d-ba89-1672d0884679)

**Step 19:** Now click on browser preview. 

![qslQXL_rQdOJUFy_62HTaQ_29068da7576140abb0f27754ed0d5fa1_browser-preview](https://github.com/user-attachments/assets/f23155a9-7d8f-435b-9bfd-2892bf16f64c)

Enter the url as `http://localhost:<exposed port>`  

![YiYzqqamQGumM6qmpsBrmQ_50efed47e7e9473b837530397e043ba1_browser-preview-with-port](https://github.com/user-attachments/assets/30cda6ab-c02d-4c6d-9b9f-02b033bd11a3)

**Step 20:** Select the device toolbar and choose Macbook 15 as the device.

![QRdfr8ilSUWXX6_IpSlFjg_6d73e3087c29462ca9026d49f850ece1_vscode_responsive_desktop_mode](https://github.com/user-attachments/assets/149a0de1-4cd7-485c-b7ff-af6edd92339f)

**Step 21:** Verify that the web page displays the Little Lemon menu in two columns. Your web page should look similar to the screenshot below.

![bMLpC8gaRD6C6QvIGlQ-xA_24ba573ea0aa4df1a4284bf9082788e1_expected](https://github.com/user-attachments/assets/acb98f72-8b45-4b03-996b-8d65468fcfe3)

**Step 22:** Make sure to close the server by clicking on exposed Port number (e.g. 5500) after completing the lab.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/09934b24-5ef4-48b3-b2f1-3c5842f65c09)

You should see a notification like this which confirms the server has been stopped.

<img width="366" alt="MuWy7PurRq6lsuz7q4auLQ_d8976c06e2f446288135fe16615625a1_Screenshot-2022-05-18-202556" src="https://github.com/user-attachments/assets/2d68bfec-82e9-4067-a494-0231131886c4">

### Tips
- Make sure to add your columns to row elements.
- Remember that Bootstrap uses a 12 column grid system.
- Review the lessons _Using Bootstrap Styles_ and _Bootstrap Grid_

Full source code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Little Lemon</title>
    <link href="bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2>Falafel</h2>
                <p>Chickpea, herbs, spices.</p>
                <h2>Fried Calamari</h2>
                <p>Squid, buttermilk.</p>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Pasta Salad</h2>
                <p>Lettuce, vegetables, mozzarella.</p>
                <h2>Greek Salad</h2>
                <p>Cucumbers, onion, feta cheese.</p>
            </div>
        </div>
    </div>
    <script src="bootstrap.bundle.min.js"></script>
</body>
</html>
```
# Self Review: Working with Bootstrap Grid
## Question 1
When viewing the page in the web browser, is the logo centered on the webpage?

**A. Yes**

B. No

Explain: The text-center CSS class centers the image.

## Question 2
When viewing the page in the web browser on a desktop, do the four menu items display in one column?

A. Yes

**B. No**

Explain: The two div elements take up half the row each on desktop. This is specified using the col-lg-6 CSS class (6 out of 12 Bootstrap columns).

## Question 3
Use the developer tools to preview the webpage on a mobile device. How many columns does the content display in?

A. 0

**B. 1**

C. 2

D. 3

Explain: The two div elements take up a full row each on mobile. This is specified using the col-12 CSS class (12 out of 12 Bootstrap columns).
# Working with Bootstrap components
## Instructions
### Introduction
In this exercise, you will practice adding Bootstrap components to a webpage.

### Goal
Update the Little Lemon website to use Bootstrap Components.

### Objectives
- Add a Badge component to the page to notify customers of the new falafel dish.
- Add an Alert component to the page to notify customers that the restaurant will be closed on New Year's Day.
- Add a Button component to the page with the text Order Online.

### Instructions
**Step 1:** Open index.html

**Step 2:** Add another div element below the Our Menu text-center div element.

**Step 3:** Add a `class` attribute to the element with the value `alert alert-info`.

**Step 4:** Add a `role` attribute to the element with the value `alert`.

**Step 5:** Add the message Our restaurant will be closed on New Year's Day, inside the div element.
```html
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <h1>Our Menu</h1>
        </div>
        <div class="alert alert-info" role="alert">
            Our resturaunt will be closed on New Year's Day
        </div>
    </div>
</div>
```
**Step 6:** Add a `span` element inside the Falafel h2 element, before the closing h2 tag.

**Step 7:** Add a `class` attribute to the span element, with the value `badge bg-secondary`.

```html
<h2>Falafel <span class="badge bg-secondary">New</span></h2>
```
**Step 8:** Add another `div` element after the last row element.

**Step 9:** Add a `class` attribute with the value `row` to the div element.

**Step 10:** Add a div element inside the row div element.

**Step 11:** Add a `class` attribute with the value col-12 to the div element.

**Step 12:** Add another `div` element inside the col-12 div element.

**Step 13:** Add a `class` attribute with the value `text-center` to the div element.

**Step 14:** Add a `button` element inside the text-center div element.

Step 15: Add a `type` attribute with the value `button`.

Step 16: Add a `class` attribute with the value `btn btn-primary`.

Step 17: Add the text `Order Online` inside the button element.
```html
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <button type="button" class="btn btn-primary">Order Online</button>
        </div>
    </div>
</div>
```
**Step 18:** Save the file.

**Step 19:** Click on 'Go live', which is at the bottom right of your editor.

![BaW8d0wcSV6lvHdMHCleAQ_67e029598c564c69b3d681d0adf511a1_image003](https://github.com/user-attachments/assets/9c6f83ce-89df-40bd-a4d8-b44629ca3e7b)

Once the server is up and running you'll see the exposed port.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/b434742a-30cc-4ee6-a353-347f88a655e3)

**Step 20:** Now click on browser preview. 

![qslQXL_rQdOJUFy_62HTaQ_29068da7576140abb0f27754ed0d5fa1_browser-preview](https://github.com/user-attachments/assets/b56b97ee-b9ab-4c23-a9db-496ac8578094)

Enter the url as `http://localhost:<exposed port>`

  
![YiYzqqamQGumM6qmpsBrmQ_50efed47e7e9473b837530397e043ba1_browser-preview-with-port](https://github.com/user-attachments/assets/8fbae8d1-7cdd-44a8-abe4-b6d68f9b2777)

**Step 21:** Verify that the alert is displayed on the web page.

**Step 22:** Verify at the `new` badge is displayed on the Falafel header.

**Step 23:** Verify that the Order Online button is displayed.

<img width="449" alt="gio6ea0MT7uqOnmtDP-7aA_300d5aea5b4244d2bf9ca69e8ac5a5a1_Screenshot-2022-05-18-215258" src="https://github.com/user-attachments/assets/a5a89cea-8d8b-475a-9096-87352246079b">

**Step 24:** Make sure to close the server by clicking on exposed Port number (e.g. 5500) after completing the lab.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/6c51118d-d17b-499d-9413-91bdd8d34eb7)

You should see a notification like this which confirms the server has been stopped.

<img width="366" alt="MuWy7PurRq6lsuz7q4auLQ_d8976c06e2f446288135fe16615625a1_Screenshot-2022-05-18-202556" src="https://github.com/user-attachments/assets/8e95db92-ae27-4efc-b0e6-4399a4bfd972">

### Tips
- Make sure to add your columns to row elements.
- Remember that Bootstrap uses a 12 column grid system.
- There are plenty of examples in the Bootstrap documentation.
- Review the lessons _Using Bootstrap Styles_ and _Bootstrap Components_.
# Self review: Working with Bootstrap components
## Question 1
In the Browser Preview, does the New badge display beside the Falafel heading?

**A. Yes**

B. No

Explain: The badge element is specified by the span element inside the heading.

## Question 2
In the Browser Preview, does the alert display below the Order Online button?

A. Yes

**B. No**

Explain: The alert is displayed at the top of the page.

## Question 3
In the Browser Preview, does the Order Online button display using Bootstrap button design?

**A. Yes**

B. No

Explain: The CSS classes ‘btn btn-primary’ will apply Bootstrap’s button design.
# Using Bootstrap documentation
Bootstrap comes with detailed documentation on setting up and using the features available in its library. The documentation is clear and has many code examples to help you get started.

In this reading, you'll explore the frequently used documentation sections.

The documentation for Bootstrap is currently available at the following link.

https://getbootstrap.com/docs

## Navigating the documentation
The sidebar on the webpage allows you to navigate through the different sections of the documentation. There is also a search box if you need to search for a specific piece of information.

![VWhuQ2jdTOWobkNo3Tzlig_4e8c558329ff45728a69e3b0aa2909e1_bootstrap_docs_navigation](https://github.com/user-attachments/assets/9b618bca-0e63-4852-9a87-0d012d59d423)

## Layout
The layout section of the documentation describes how to use the grid system of Bootstrap. This covers what you've learned so far and includes more advanced usage such as offsets, column alignment, auto-layout and variable width columns.

![gtR6MVzDSMeUejFcw9jHuQ_94b91c6eacdd4a1eb1d525f4100972e1_bootstrap_docs_layout](https://github.com/user-attachments/assets/83bb56d9-65bd-49ca-a303-4d06d1420020)

## Content
The content section of the documentation describes Bootstrap's default text styling and how to use responsive images and tables. You've learned the basics of these earlier on and this section goes into further detail.

![8aeY4Cx-QwinmOAsfsMIdQ_c567a25e837f458b871c29b5ebf4b9e1_bootstrap_docs_content](https://github.com/user-attachments/assets/0676506d-95e4-4e33-ab5a-baf941f3eff7)


## Forms
The forms section of the documentation describes how to build forms using Bootstrap's styles. The library has many CSS rules to improve your form's user interface and experience. Below are some features you'll frequently use as a developer:

![KH7sNjT0QAS-7DY09AAEGQ_155d8f197dbd4a979f9d3c9cd7b29ce1_bootstrap_docs_forms](https://github.com/user-attachments/assets/3a2c48e8-9ea6-4f60-b217-5d8e85947e66)

## Form Styling
Bootstrap includes CSS rules to improve the visual style of input elements.

For example:

![kZRMrVcjR1uUTK1XI1dbpw_96c7aebfb62e42f49766f0e63257b1e1_bootstrap_form_control](https://github.com/user-attachments/assets/6fc6e973-cb9c-483c-b7fe-8f4311ef1ae6)

This table outlines the different HTML form elements and which Bootstrap CSS class should be used for them.

| Form Element            | CSS Class          |
|-------------------------|--------------------|
| `input`                 | `form-control`     |
| `input type="checkbox"` | `form-check-input` |
| `input type="radio"`    | `form-check-input` |
| `input type="range"`    | `form-range`       |
| `select`                | `form-select`      |

Using these CSS classes will style the elements appropriately for different input types, sizings and states. More information is available on the 
[Forms documentation page](https://getbootstrap.com/docs/5.0/forms/overview/)
.


## Switches
If you've used an app on your mobile device, you're probably familiar with the switch input type.

![t-RILIyKSwekSCyMipsHug_9b79ddf623c54c6f8719964fc25e20e1_bootstrap_docs_switches](https://github.com/user-attachments/assets/dba3768e-a4f9-4499-ac66-f6de92af03ca)

Bootstrap includes CSS rules to style checkbox input elements as switches. 

To do this:

1. Add the `input` to a `div` element. 
2. On the `div` element, apply the `form-check` and `form-switch` CSS classes. 
3. On the `input` element, add the `form-check-input` CSS class.

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox">
</div>
```

More information is available in the 
[Switches section of the documentation](https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches)
.

## Input Groups
Input groups are useful for providing additional content to the input field. For example, if you wanted to request the user to input a US dollar amount, you can use an input group to show the dollar symbol and cents amount.

![mr7x2CKwQ86-8dgisGPOQQ_b4407177d0b74adc8b4affb9fc8efde1_bootstrap_input_group](https://github.com/user-attachments/assets/2c5ef828-22ce-4c6a-ab4e-2c372ba68294)

To do this:

1. Add the `input` to a `div` element. 
2. Apply the `input-group` CSS classes on the `div` element. 
3. Add a `span` element before and/or after the input element and apply the `input-group-text` CSS class to it. The text content is then added inside the `span` element.
```HTML
<div class="input-group">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control">
  <span class="input-group-text">.00</span>
</div>
```

## Floating Labels
Floating labels help provide form information to the user as part of the input itself. These are different from regular form placeholders. The information stays visible if the user is interacting with the element or if the element has content.

![d91CBY4JQoOdQgWOCaKD5Q_cee428e3084f4f51bb27b71a353924e1_bootstrap_docs_floating_label1](https://github.com/user-attachments/assets/5dd304ae-207d-4900-ba88-ce2c16653302)

![-5va2gC4R56b2toAuPeehQ_159ac1bc9ba744778bccd91d679fa2e1_bootstrap_docs_floating_label2](https://github.com/user-attachments/assets/446d1dc9-97ac-402b-bd5b-680ab8d69246)

To do this, add the `input` to a `div` element. On the `div` element, apply the `form-floating` CSS classes.

````html
<div class="form-floating">
  <input type="email" class="form-control" id="addressInput" placeholder="Address">
  <label for="addressInput">Address</label>
</div>
````

More information is available on the 
[Floating Labels documentation page](https://getbootstrap.com/docs/5.0/forms/floating-labels/)

## Components
As you have learned, Bootstrap comes with many pre-made UI elements and styles to help speed up your development.

Some of these components require Javascript to work, while others only require CSS classes applied to HTML elements. The Components section of the documentation explains these requirements on each component page and provides many code examples.

![SF1dLntLRAqdXS57S1QKcg_27e2d870013f468ab187f7a708113fe1_bootstrap_docs_components](https://github.com/user-attachments/assets/4dfbad9f-d5ff-441c-b796-8f4f28d142df)

## Conclusion
Now that you are familiar with how to use the Bootstrap documentation, maybe try some new components and styles on a webpage that you've previously built.
# Other CSS frameworks and libraries
As a developer, you'll use many CSS libraries and frameworks throughout your career. As you move on to different projects and as technologies advance, knowing what solutions are available is critical. While Bootstrap is one of the most popular CSS libraries, many others are available, each with different purposes, designs and technical approaches. This reading will introduce you to other popular CSS libraries and frameworks.

## Foundation
[Official Website](https://get.foundation/)

Foundation is a framework for building user interfaces similar to Bootstrap. It is used by many large companies such as Pixar, Polar and Sonos. One prominent feature of Foundation is that it can be used to style content for sending via email.

![foslwC8wROOLJcAvMITjaA_d6da1727d66f4cd8bc1808a1c11e9fe1_foundation_css](https://github.com/user-attachments/assets/f6391caf-395e-48ad-9ffa-4eb6c9fbf8e5)

## Pure.css
[Official Website](https://purecss.io/)

Pure.css is another library for building user interfaces. While it doesn't have as many features as Bootstrap, it is designed to be minimal in file size. Smaller file sizes improve loading times for web pages as there is less data to transfer from the web server. If your next project is focused on minimal loading time, this library is worth considering.

![6gnbSAZ0Qz2J20gGdHM9jQ_9aa03238128e440fad05631d074a1ee1_pure_css](https://github.com/user-attachments/assets/00fa71eb-1668-42df-ae1e-c34054294c55)

## Tailwind CSS
[Official Website](https://tailwindcss.com/)

Tailwind CSS is a CSS framework that uses a utility-based approach for its CSS rules. This means that the framework provides many CSS classes with a single purpose. For example, the CSS class pt-6 sets the padding-top CSS property to 6 pixels. This means that you can be precise in applying styling to your HTML without writing CSS. The advantage to this is that it is more flexible for customizing your webpage's design using the framework. However, the disadvantage is that if multiple developers are working on a project, it could lead to inconsistent design if the team is not strict on its design rules.

![GV70oZyoQN6e9KGcqHDeCg_48f4a5e47e554a9ba7b1e91e54c199e1_tailwind_css](https://github.com/user-attachments/assets/6f056b93-bc71-499e-a146-a8147cb141e2)

## UIKit
[Official Website](https://getuikit.com/)

UIKit is a lightweight CSS framework featuring a small set of responsive components. Its simple design allows developers to easily customize the style rules and visuals.

![6YbWaiJrQbCG1moiayGwIg_1ce6122a4b264eb5b6bb66454dbec4e1_uikit_css](https://github.com/user-attachments/assets/9b254054-9e82-44f2-a81e-1fd34ef7dfae)

## MVP.css
[Official Website](https://andybrewer.github.io/mvp/)

MVP.css is a small CSS library that automatically styles HTML elements without needing to apply CSS classes to them. The library aims to allow a developer to quickly prototype a user interface without worrying about the final design, while still being visually appealing. MVP comes from the technical term Minimal Viable Product, a product with sufficient features to demo to customers or other business stakeholders.

![gAYcWB16TrqGHFgdek66zg_67d37bca7b964cdfbad348969633bde1_mvp_css](https://github.com/user-attachments/assets/17d8ca03-ec73-4c84-b686-c282ba8fb205)

## Conclusion
If you're curious to learn more about these frameworks, their websites feature set up guides, tutorials and documentation to get started. It is a good exercise to compare and contrast different libraries and frameworks to understand different workflows available to you as a developer.
# Knowledge Check: Introduction to UI frameworks and libraries
## Question 1
To reference a JavaScript script or file in an HTML document, you use the ______________ tag.

A. javascript

B. library

**C. script**

D. code

The correct answer is script. Explain: The script tag is used to reference a JavaScript script or file.

## Question 2
If your application requires a library or framework to run, this is called a ______________.

A. child

B. parent

C. **dependency**

If your application requires a library or framework to run, this is called a dependency. Explain: Libraries and frameworks are dependencies of your application.

## Question 3
A point at which a website's content and design will adapt in order to provide the best user experience is called a ______________.

A. Design Point

** B. Breakpoint**

C. Box Point

A point at which a website's content and design will adapt in order to provide the best user experience is called a breakpoint. Explain: A responsive breakpoint is the point at which a website's content and design will adapt in order to provide the best user experience.

## Question 4
The Bootstrap Grid System always starts with which element?

**A. Container**

B. Row

C. Column

D. Component

The correct answer is container. Explain: The container element is the base element for using the Bootstrap grid.

# Question 5 
The responsive breakpoint for Bootstrap CSS rules is determined by the ______________?

A. Modifier

**B. Infix**

The responsive breakpoint for Bootstrap CSS rules is determined by the infix. Explain: Infixes are used for the responsive breakpoints. 
# Additional Resources
Bootstrap Official Website

https://getbootstrap.com/

Bootstrap 5 Foundations by Daniel Foreman  

https://www.amazon.com/Bootstrap-Foundations-Mr-Daniel-Foreman/dp/B0948GRS8W/

Responsive Web Design with HTML5 and CSS  by Ben Frain  

https://www.amazon.com/Responsive-Web-Design-HTML5-CSS/dp/1839211563/

Bootstrap Themes  

https://themes.getbootstrap.com/