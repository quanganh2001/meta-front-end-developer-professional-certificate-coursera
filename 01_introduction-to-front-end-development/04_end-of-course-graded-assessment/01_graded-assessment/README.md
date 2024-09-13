# About the Ungraded Lab: Improve your Bio page with Bootstrap
In this Ungraded Lab, you will update your biographical page from Week 2 - Introduction to HTML5 and CSS to use Bootstrap.

The expected outcome is a two-column biographical page with your name and a photo in the left column and your favorite music artists and films in the right column.

The image below shows how your page should look once you finish the assessment.

![EQnW9QNtQhGJ1vUDbTIRLA_7dd180d9248d43b688d3822c765655e1_m4l1_exemplar](https://github.com/user-attachments/assets/6258a94c-ca18-4a78-9495-883a1156e7cb)

# Improve your Bio page with Bootstrap
## Introduction
In this graded assessment, you will revise your biographical page to use Bootstrap.

## Goal
- Use Bootstrap to build your biographical page.

## Objectives
- Add a Bootstrap Grid to the page.
- Set up the grid so that the content will layout correctly on both mobile and desktop.
- Configure your photo to be responsive.
- Change the Meta profile link to use a Bootstrap button style.

## Learner Instructions
**Step 1:** Open `index.html`

**Step 2:** Add a `div` element to the `body` element.
```html
<body>
    <div>
    </div>
</body>
```

**Step 3:** Apply the Bootstrap `container` CSS class to the `div`.

```html
<body>
    <div class="container">
    </div>
</body>
```

**Step 4:** Add a `div` element to the `container` element.

```html
    <div class="container">
        <div>
        </div>
    </div>
```

**Step 5:** Apply the Bootstrap `row` CSS class to the `div`.

```html
    <div class="container">
        <div class="row">
        </div>
    </div>
```

**Step 6:** Add two `div` elements to the `row` element.

```html
    <div class="container">
        <div class="row">
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
```

**Step 7:** On the first div element apply the `id` attribute with the value `bio`.

```html
    <div class="container">
        <div class="row">
            <div id="bio">
            </div>
            <div>
            </div>
        </div>
    </div>
```

**Step 8:** Apply the `id` attribute on the second div element with the value `more`.

```html
    <div class="container">
        <div class="row">
            <div id="bio">
            </div>
            <div id="more">
            </div>
        </div>
    </div>
```

**Step 9:** Apply the correct CSS classes so that each div with be 12 columns wide on mobile and 6 columns wide on desktop.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

**Step 10:** Apply the `text-center` CSS class on the bio div element.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

**Step 11:**  Add an `h1` heading containing your name as the text inside the bio div element.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

**Step 12:** Add an `img` element for `photo.jpg` below the `h1` element.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

**Step 13:** Apply the `img-fluid` CSS class to the img element.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

**Step 14:** Add an `h2` heading containing the text Favorite Music Artists inside the more div element.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
            </div>
        </div>
    </div>
```

**Step 15:** Add an _unordered_ list of your favorite music artists below the h2 heading.

````html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
            </div>
        </div>
    </div>
````

Step 16: Add another `h2` heading containing the text Favorite Films below the favorite music artists list.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
            </div>
        </div>
    </div>
```

**Step 17:** Add an _ordered_ list of your top 5 films after the Favorite Films heading.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
            </div>
        </div>
    </div>
```

**Step 18:** Add an anchor tag after the _ordered_ list.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a></a>
            </div>
        </div>
    </div>
```

**Step 19:** Link to your Meta profile in the anchor tag.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/12"></a>
            </div>
        </div>
    </div>
```

**Step 20:** Set the anchor text to display My Meta Profile.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123">My Meta Profile</a>
            </div>
        </div>
    </div>
```

**Step 21:** Apply the button Bootstrap component CSS class to the anchor tag.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123" class="btn">My Meta Profile</a>
            </div>
        </div>
    </div>
```

**Step 22:** Apply the primary modifier to the button component.

```html
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
            </div>
        </div>
    </div>
```

**Step 23:** Save the file.

**Step 24:** Click on 'Go live', which is at the bottom right of your editor.

![BaW8d0wcSV6lvHdMHCleAQ_67e029598c564c69b3d681d0adf511a1_image003](https://github.com/user-attachments/assets/1d0dca59-695d-4de0-8517-c861e4a83a05)

Once the server is up and running you'll see the exposed port.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/c259a3a5-9f69-4e76-b49a-b559204ac103)

**Step 25:** Now click on browser preview. 

![qslQXL_rQdOJUFy_62HTaQ_29068da7576140abb0f27754ed0d5fa1_browser-preview](https://github.com/user-attachments/assets/a95b8a5f-e70d-42dd-b749-b1b354356456)

Enter the url as `http://localhost:<exposed port>`  

![YiYzqqamQGumM6qmpsBrmQ_50efed47e7e9473b837530397e043ba1_browser-preview-with-port](https://github.com/user-attachments/assets/b7744e3c-4ae9-4187-8a5e-3722c6965ea2)

**Step 26:** Make sure to close the server by clicking on exposed Port number (e.g. 5500) after completing the lab.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/db179632-0609-4f5c-8e38-f45e49479209)


You should see a notification like this which confirms the server has been stopped.

<img width="366" alt="MuWy7PurRq6lsuz7q4auLQ_d8976c06e2f446288135fe16615625a1_Screenshot-2022-05-18-202556" src="https://github.com/user-attachments/assets/bf67e88a-bb87-4bf1-8a62-ff31b47e62a3">

**Step 27:** Make sure to close the server by clicking on exposed Port number (e.g. 5500) after completing the lab.

![wSF3OEQjRbChdzhEI6WwTg_6509ee0e54474852b558698b7c1f4aa1_port-exposed](https://github.com/user-attachments/assets/eeac8d5f-5e42-4ce0-b187-04e3d1a63271)

You should see a notification like this which confirms the server has been stopped.

<img width="366" alt="MuWy7PurRq6lsuz7q4auLQ_d8976c06e2f446288135fe16615625a1_Screenshot-2022-05-18-202556" src="https://github.com/user-attachments/assets/e524edff-ca3e-4260-bf2a-6be3f026539f">


## Tips
- Remember the responsive breakpoints in Bootstrap. Use the correct infixes where appropriate.
- Component modifiers are specified using suffixes.
- Use the Browser Preview to check your progress.
- Review the lessons _Using Bootstrap Styles, Bootstrap Grid_ and _Bootstrap Components_.
# Self review: Improve your Bio page with Bootstrap
## Question 1
Using the web browser developer tools to check, does your web page content stack vertically on a mobile device?

**A. Yes**

B. No

Explain: The web page content stacks vertically on mobile due to the Bootstrap grid rules.

## Question 2
Does the profile photo display in the right column of the page?

A. Yes

**B. No**

Explain: The photo displays on the left side of the page as it was added to the first column of the grid.
## Question 3
Does the link to My Meta Profile display as a button?

**A. Yes**

B. No

Explain: The link displays as a button because the Bootstrap button CSS class was added to the element.
# Exemplar
By updating your biographical page to use Bootstrap, your new page should be similar to the image below.  

![EQnW9QNtQhGJ1vUDbTIRLA_7dd180d9248d43b688d3822c765655e1_m4l1_exemplar](https://github.com/user-attachments/assets/5e0c1cfc-02b9-42fe-b4e2-bfa04b23dde6)

Your HTML file structure and content should be similar to the snippet below. Note where the Bootstrap CSS classes were used in the different HTML elements.  
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Bio Page</title>
    <link href="bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid" />
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
            </div>
        </div>
    </div>
    <script src="bootstrap.bundle.min.js"></script>
</body>
</html>
```
As a developer, Bootstrap is one of the many libraries in your toolkit to help build web applications. Bootstrap has many utilities and components. We encourage you to read their documentation and experiment further with styling your webpage.
# What challenges did you encounter while editing your biographical page?
What challenges did you encounter while editing your biographical page?

Share with your fellow classmates the strategy you implemented to overcome these challenges.
# Course 1 Assessment: Introduction to Web Development
## Question 1
The code that runs on the web server is commonly known as _____________.

A. Hardware

**B. Software**

Explain: The code is the software and the physical components are the hardware.

## Question 2
In the web browser, what is the role of CSS?

A. To describe the content of the web page

B. To provide interactivity and data processing

**C. To describe the visual look and layout**

The correct answer is C. Explain: CSS describes how the content is presented in the web browser.

## Question 3
Which protocol is used to transfer HTML documents to the web browser when browsing the World Wide Web?

**A. HyperText Transfer Protocol (HTTP)**

B. File Transfer Protocol (FTP)

C. Dynamic Host Configuration Protocol (DHCP)

The correct answer is HTTP. Explain: HTTP and HTTPS are used to transfer HTML documents when browsing the World Wide Web.

## Question 4
What will display in the web browser tab for the following HTML document?

```html

<!DOCTYPE html>
<html>
<head>
    <title>Little Lemon</title>
</head>
<body>
    <p>Our Menu</p>
</body>
</html>

```
**A. Little Lemon**

B. Our Menu

Explain: The content inside the title element will display as the web page name in the browser tab.

## Question 5
Which of the following image elements is correct?

```html

<image src="dog.png">
<img href="cat.png">
<img src="mouse.png">

```

A. `<image src="dog.png">`

B. `<img href="cat.png">`

**C. `<img src="mouse.png">`**

The correct answer is C. Explain: The image element is defined using the img tag and src attribute.

## Question 6
What type of selector is used for the following CSS rule?

```css
.header {
    width: 50%;
}
```

A. ID selector

B. Element selector

**C. Class selector**

The correct answer is class selector. Explain: The class selector is prefixed with a `. character`.

## Question 7
What is the border-box width for the following CSS rule?

```css
div {
    width: 10px;
    padding-left: 5px;
    padding-right: 5px;
    border-width: 5px;
    margin-left: 10px;
    margin-right: 10px;
}
```

A. 20 pixels

B. 25 pixels

**C. 30 pixels**

50 pixels

The correct answer is 30px. Explain: The border-box width is the content width + padding width + border width.

## Question 8
How many columns does Bootstrap's grid consist of?

A. 8

B. 10

**C. 12**

The correct answer is 12. Explain: Bootstrap's grid consists of 12 columns.

## Question 9
In the following HTML, the _btn-primary_ CSS class is applied to the button element. What is this CSS class known as in Bootstrap?

```html
<button class="btn btn-primary">Submit</button>
```

A. Infix

**B. Modifier**

C. Component

The correct answer is modifier. Explain: Modifiers adjust the style of Bootstrap components.

## Question 10
React applications are built using reusable pieces of code. What are these pieces known as?

A. Elements

**B. Components**

C. Snippets

The correct answer is components. Explain: React applications are built using reusable pieces of code called Components.