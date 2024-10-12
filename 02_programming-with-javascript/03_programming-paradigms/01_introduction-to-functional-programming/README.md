# Return values from functions
Many functions, by default, return the value of undefined.

An example is the `console.log()` function.

If I run:
```js
console.log('Hello');
```

...here's the output in the console:
```txt
Hello
undefined
```
Because the `console.log()` function is built so as to not have the explicitly set return value, it gets the default return value of `undefined`.

I'll now code my own implementation of `console.log()`, which doesn't return the value of `undefined`:
```js
function consoleLog(val) {
    console.log(val)
    return val
}
```
I'm using the `console.log()` function inside my custom `consoleLog` function declaration. And I'm specifying it to return the value of its argument.

Now when I run my custom `consoleLog()` function:
```js
consoleLog('Hello')
```
I get the following output:
```txt
Hello
'Hello'
```
So, the value is output in the console, but it's also returned.

Why is this useful?

It's useful because I can use return values from one function inside another function.

Here's an example.

I'll first code a function that returns a double of a number that it received:
```js
function doubleIt(num) {
    return num * 2
}
```
Now I'll code another function that builds an object with a specific value:
```js
function objectMaker(val) {
    return {
        prop: val
    }
}
```
I can call the `objectMaker()` function with any value I like, such as:
```js
objectMaker(20);
```
The returned value will be an object with a single `prop` key set to `20`:
```js
{prop:20}
```
Now consider this code:
```js
doubleIt(10).toString()
```
The above code returns the number `20` as a string, that is: `"20"`.

I can even combine my custom function calls as follows:
```js
objectMaker( doubleIt(100) );
```
This will now return the following value:
```txt
{prop: 200}
```
What does all of this mean?

It means that by JavaScript allowing me to use the `return` keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

Being able to return custom values is one of the foundations that makes functional programming possible.
# The functional programming paradigm
## Learning Objectives
- Be able to explain that there are several programming paradigms
- Be able to explain the basic difference between the two predominant programming paradigms: functional programming and object-oriented programming
- Understand, at a very high level, how the functional programming paradigm works

"There are actually several styles of coding, also known as **paradigms**. A common style is called **functional programming**, or FP for short.

In functional programming, we use a lot of functions and variables.
```js
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
```
When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
```js
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
```
In functional programming, functions return new values and then use those values somewhere else in the code.
```js
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
```
Another style is **object-oriented programming (OOP)**. In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a `virtualPet` object, I can give it a `sleepy` property and a `nap()` method:
```js
var virtualPet = {
    sleepy: true,
    nap: function() {}
}
```
In OOP, methods **update properties** stored in the object instead of generating new return values.

For example, if I check the `sleepy` property on the `virtualPet` object, I can confirm that it's set to `true`.

However, once I've ran the `nap()` method on the `virtualPet` object, will the `sleepy` property's value change?
```js
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```
OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".

Note that the goal here is not to discuss OOP in depth; instead, I just want to show you the simplest explanation of what it is and how it works, in order to make the single most important distinction between FP and OOP.

To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

There are many more concepts and ideas in functional programming.

Here are some of the most important ones:

- First-class functions
- Higher-order function
- Pure functions and side-effects

There are many other concepts and priciples in functional programming, but for now, let's stick to these three.
**First-class functions**

It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

To explain how this works, consider the following program.
```js
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
```
I start the program with the `addTwoNums()` function whose definition I've already used earlier in various variations. The reason why this function is a recurring example is because it's so simple that it helps explain concepts that otherwise might be a bit harder to grasp.

Next, I code a function named `randomNum()` which returns a random number between 0 and 10.

I then code another function named `specificNum()` which returns a specific number, the number 42.

Next, I save a variable named `useRandom`, and I set it to the boolean value of true. I declare another variable, named `getNumber`.

This is where things get interesting.

On the next several lines, I have an if else statement. The if condition is executed when the value of `useRandom` is set to true. If that's the case, the entire `randomNum()` function's declaration is saved into the `getNumber` variable. Otherwise, I'm saving the entire `specificNum()` function's declaration into the `getNumber` variable.

In other words, based on the `useRandom` being set to true or false, the `getNumber` variable will be assigned either the `randomNum()` function declaration or the `specificNum()` function declaration.

With all this code set, I can then invoke the `addTwoNums()` function, passing it the invocation of the `getNumber()` variables as its first and second arguments.

**This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.**

Note: most of the code inside the `randomNum()` function declaration comes from a previous lesson, namely the lesson that discussed the Math object in JavaScript.

This brings me to the second foundational concept of functional programming, which is the concept of higher-order functions.

**Higher-order functions**

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the `addTwoNums()` function so that it is a higher-order function:
```js
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
```
You can think of the above function declaration of `addTwoNums` as describing how it will deal with the `getNumber1` and `getNumber2` inputs: once it receives them as arguments, it will then attempt invoking them and concatenating the values returned from those invocations.

For example:
```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```
**Pure functions and side-effects**

Another concept of functional programming are pure functions.

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the `addTwoNums()` function from the previous section:
```js
function addTwoNums(a, b) {
    console.log(a + b)
}
```
This function will always return the same output, based on the input. For example, as long as we give it a specific value, say, a `5`, and a `6`:  
```js
addTwoNums(5,6); // 11
```
... the output will always be the same.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

- changing variable values outside of the function itself, or even relying on outside variables 
- calling a Browser API (even the console itself!) 
- calling `Math.random()` - since the value cannot be reliably repeated

The topic of pure and impure functions can get somewhat complex.

For now, it's sufficient to know that this concept exists and that it is related to functional programming.
# Visual Studio Code on Coursera
In addition to having Visual Studio Code installed on your own computer, in this course and throughout this program, you'll have the opportunity to work in Visual Studio Code right here on Coursera!   

As you progress through the course, you'll be able to write code in hands-on activities called Labs.  In these labs you'll be able to open Visual Studio Code and start writing code without ever leaving the course.

You'll have plenty of opportunities to see Labs in action later in the course, but for now, use the images below as a visual guide to how Labs will look and operate in your browser.

![vGowNP9VQ-iqMDT_VQPoGg_8b07efd976544e35a6f193cac219c4f1_Screen-Shot-2022-06-24-at-3 39 41-PM](https://github.com/user-attachments/assets/6749cd59-af49-40af-98bb-b9589b0bcdc8)

The Labs contain instructions explaining the coding task.

![iKUP2iD8QV-lD9og_LFfqw_7c22d2f4938c48a18c9cf8d9e1613cf1_Screen-Shot-2022-06-24-at-12 54 48-PM](https://github.com/user-attachments/assets/e7125012-483c-4728-bab9-1b585437efcf)

When you click the button to open the lab, a new tab will open with Visual Studio Code already setup and ready for you to start writing code!

![j2bI-PfPRP2myPj3z7T9RQ_d20ba050929b4f13b1cdecf66973caf1_Screen-Shot-2022-06-24-at-3 42 35-PM](https://github.com/user-attachments/assets/e9438aaf-34e6-4cea-96d2-59c44582f8fe)

You'll see all the files for the lab in the Project folder in the left sidebar.

![Lj6w04QzSnG-sNOEM7pxzQ_ff173aadfaed42edb87ca2c1638ab8f1_files](https://github.com/user-attachments/assets/d455332a-4f0d-41e8-a497-8def904ce243)

And the large editor area where you write your code for the lab.

![0I0KDNoPQsONCgzaD2LDjw_ecc373151e254b37a17f200b026ba4f1_editor](https://github.com/user-attachments/assets/12daacf0-dec0-4d59-a22c-b96317089ba7)

You may need to use a tool called the Terminal from time to time to complete course activities. You can open this by selecting the Terminal option in the upper Visual Studio Code toolbar.

![GE5YoBvqT9-OWKAb6m_fKQ_f929f837d3d74250b00d1603fb3c09f1_VSCode-Terminal-Example](https://github.com/user-attachments/assets/e417bcdf-84c6-4df6-94f4-10f421964dcf)

## How to download files from your Visual Studio Code Lab to your local device

1. Select the **Lab Files** button in your Lab Toolbar. 
2. You'll be able to download your full workspace, specific folders, or individual files through the checkbox selection tool. 
3. After you've selected these files, use the Download link to download your files to your local device. 

![ghF76i7AT7GRe-ouwL-x7w_70c41b2336dc4f71bb3d2d43debb3bf1_Lab-VSCode-File-Download](https://github.com/user-attachments/assets/2d51cd14-bb95-4864-9e31-a5855606adf0)

## How to upload local files to your Visual Studio Code Lab

If you'd like to upload your course files from your local device to your Visual Studio Code lab, **drag and drop** your file from your local device into the Visual Studio Code file tree.

![5cTZREu6TPeE2URLumz3Aw_534ba92baca54f6caf5ecd5868f9f7f1_VSCode-File-Upload](https://github.com/user-attachments/assets/cccc36e0-ccb0-4bf8-89d0-38839b82789c)

## How to get a fresh copy of course-provided starter files

Your work will be saved and persist within your Visual Studio Code lab while you are enrolled in the course. If you'd like to get a fresh copy of the original instructor-provided files at any time, you can do this through the **Lab Help** option in your Lab Toolbar.  Don't worry - your original work and files will still remain in your lab until you personally remove or delete them, even when refreshing your files through the steps below.

1. First rename your original files to something like _[yourfilename] [original].[your file extension]`_. You can do this by right-clicking on your file in the Visual Studio Code file tree, selecting Rename, and providing a new file name.
- For example for index.html, this could be renamed to `index [original].html`

2. Select **Lab Help** from your Lab Toolbar and then select **Get latest version**. 

![uvEGQQCcTbKxBkEAnP2ykg_dc267fc7d0d94384b64a731a39e8d5f1_Refresh-Lab-Files](https://github.com/user-attachments/assets/9a7062c3-eab4-4293-8a0d-d3458ecbca1d)

3. You should now see a fresh copy of the original instructor-provided files in your lab, in addition to your own  (renamed) files.
# Programming Assignment: Building a functional program
In this exercise you'll get hands-on practice with functional programming concepts.

Note: It is best to follow these instructions in the Preview tab on the right side.

> ### **Tips: Before you Begin**
> #### To view your code and instructions side-by-side, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
> - Questions about using VSCode? Please see our support resources here:  
    [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **To run your JavaScript code**
> - Select your JavaScript file
> - Select the "Run Code" button in the upper right hand toolbar of VSCode. Ex: It looks like a triangular "Play" button. <br><br>

<br>

## Task 1: Build a function-based console log message generator
In this exercise, your task is to code a function named `consoleStyler`, which accepts four parameters:
- `color`
- `background`
- `fontSize`
- `txt`

Inside the body of the consoleStyler() function declaration, you need to do the following:

1. Create a new variable named message, and assign the following to it on the very first line inside the consoleStyler() function body.: 
    ```
    "%c" + txt;
    ```

    Tip: Do not copy the 3 back ticks. These are used to format this document in the Preview tab.

2. Create a style variable and assign the following to it on the next line: 
    ```
    `color: ${color};`
    ```
	
	Tip: The single backtick before color and after the semi-colon must be included.

3. Next, update the style variable (using the += operator) with the following code: 
    ```
    `background: ${background};`
    ```
	
	Tip: The single backtick before background and after the semi-colon must be included.

4. Then, update the style variable (again, using the += operator) with the following code: 
    ```
    `font-size: ${fontSize};`
    ```
	
	Tip: The single backtick before font-size and after the semi-colon must be included.

5. Finally, console log the message and style variables inside the `consoleStyler` function declaration.

Hint: Be sure to use backticks (``) when updating your variable styles and not single ('') or double ("") quotes.

<br>

## Task 2: Build another console log message generator. 

Your task is to code another function, and name it `celebrateStyler()`. The function accepts a single parameter, reason, which should be of string data type.

Inside the function declaration's body, code the following: 

1. A new variable, named fontStyle, assigning it this code:
    ```
    "color: tomato; font-size: 50px";
    ```

2. On the next line, an if statement, verifying that `reason == "birthday"`. 

3. Inside the body of the if block, code the following: 
    ```
    console.log(`%cHappy birthday`, fontStyle);
    ```

4. On the next line, add an else if, and inside the parentheses, check that 
    ```
    reason == "champions"
    ```

5. Inside the else if block, add this code: 
    ```
    console.log(`%cCongrats on the title!`, fontStyle);
    ```

6. Add an else block, with the following code inside of it: 
    ```
    console.log(message, style);
    ```

<br>

## Task 3: Run both the consoleStyler and the celebrateStyler functions

1. Invoke the consoleStyler() function, with the following arguments:

    - `'#1d5c63'`

    - `'#ede6db'`

    - `'40px'`

    - `'Congrats!'`

2. Next, invoke the celebrateStyler() function, with the following argument:

    - `'birthday'`


## Task 4: Insert a congratulatory and custom message

1. Code another function, named `styleAndCelebrate()`.   
The function declaration's body should consist of two function invocations:
    ```
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
    ```


2. Next, invoke the new function, using the following arguments:

    - `'ef7c8e'`
    - `'fae8e0'`
    - `'30px'`
    - `'You made it!'`
    - `'champions'`

<br>

## Final Step: Let's submit your code!
Nice work! To complete this assessment:
1. Save your file through File -> Save 
2. Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 

### Great job! Please continue to the next lesson.

**My solution**
```js
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    const message = "%c" + txt;

    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
}

// Example usage
consoleStyler("white", "blue", "20px", "Hello, styled console!");

// Task 2: Build a celebratory function
function celebrateStyler(reason) {
    const fontStyle = "color: tomato; font-size: 50px";

    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(`%c${reason}`, fontStyle);
    }
}

// Example usages
celebrateStyler("birthday");
celebrateStyler("champions");
celebrateStyler("promotion");

// Task 3: Run both functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Task 4: Invoke the new function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
```
# Self review: Build a functional program
## Question 1
Did you complete the Building a functional program exercise?

***A. Yes***

B. No

## Question 2
Were there any parts of the *Building a Functional Program* exercise that you found difficult to complete?

A. Yes

***B. No***

## Question 3
Would you say that you are able to explain, in your own words, the difference between the functional programming paradigm and the object-oriented programming paradigm?

***A. Yes***

B. No
# Knowledge check: Introduction to Functional Programming
## Question 1
What will print out when the following code runs?
```js

    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);

```
A. 77

B. 88

C. null

***D. ReferenceError: localVar is not defined***

The correct output is ReferenceError: localVar is not defined. Explain: localVar  is scoped to the function so therefore it is undefined in the global scope.
## Question 2
Variables declared using  const  can be reassigned.

A. true

***B. false***

It is false statement. Explain: Variables declared using  const  cannot be redeclared or reassigned.
## Question 3
When a function calls itself, this is known as _____________.

***A. Recursion***

B. Looping

C. Higher-order Function

Explain: Recursion is when a function calls itself.
## Question 4
What will print out when the following code runs?
```js

    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);

```
A. 10

B. 20

***C. 30***

D. 40

The correct output is 30. Explain: The food value starts at 10. The meal function is called twice which adds 10 to the food value each time. Therefore, 30 is printed.
## Question 5
What value will print out when the following code runs?
```js

    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));

```
A. 1

B. 2

C. 3

***D. 4***

The correct value will print out when the following code runs is 4. Explain: The  two  function is passed as the first parameter to the  calculate  function and the  one  function is passed as the second parameter. Therefore, when the  calculate  function runs, it will call  two() + one() + one() . The result is then  4 .
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
 
[MDN Glossary: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
 
[MDN Glossary: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
 
[Functional Programming in JavaScript](https://www.toptal.com/javascript/functional-programming-javascript)
 
[MDN: First-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
