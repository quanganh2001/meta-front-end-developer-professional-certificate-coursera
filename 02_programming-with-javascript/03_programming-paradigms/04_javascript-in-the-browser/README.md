# JavaScript interactivity
The purpose of this reading is to introduce you to a simple explanation of web page manipulation and some examples of it.

Did you know that JavaScript's initial purpose was to **provide interactivity in the browser?**

In other words, it was the "set of controls" that would allow web developers to control the behavior of the webpages and even the browsers that these webpages worked on.

This is still the case today.

As the web ecosystem developed and the world became ever more digitized, so did the myriad of ways that one can use JavaScript as a web developer to manipulate websites.

Initially, in the late 1990s, there was plain JavaScript that had to be tweaked to suit individual browsers.

Then, by the mid-2000s, the jQuery library came out, with the idea of writing less code, but doing more with it. It "leveled the playing field" as it allowed developers to use a single code-base for various browsers.

This trend continued and many other frameworks such as React, Vue, Angular, D3, and more came along.

Together with npm and Node.js, the JavaScript ecosystem is not slowing down.

Even though it has gone a long way, sometimes it's good to go back to basics. JavaScript is still the king when it comes to making our websites interactive.

Although CSS has developed significantly over the years, it is still JavaScript that allows users to: 

- Get their geolocation,
- Interact with maps,
- Play games in the browser, 
- Handle all kinds of user-triggered events, regardless of the device,
- Verify form input before sending it to the backend of a webapp,
- and more!

There are many, many ways in which JavaScript allows you to build rich, interactive experiences on the web.
# Exercise: Web page content update
In this reading, you will learn how to capture user input and process it. You'll be introduced to a simple example that demonstrates how to manipulate information displayed based on user input.

To capture user input, you can use the built-in prompt() method, like this:
```js
let answer = prompt('What is your name?');
```
Once you have the user-provided input inside the `answer` variable, you can manipulate it any way you need to.

For example, you can output the typed-in information on the screen, as an `<h1>` HTML element.

Here's how you'd do that:
```js
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
```
This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most efficient approach, especially in more complex scenarios.

This is where HTML forms come in.

You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

Here's how this is done.

You'll begin by coding out a "test solution" to the task at hand:
```js
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);
```
So, you're essentially doing the same thing that you did before, only this time you're also dynamically adding the `input` element, and you're setting its HTML `type` attribute to `text`. That way, when you start typing into it, the letters will be showing in the `h1` element above.

However, you're not there quite yet. At this point, the code above, when run on a live website, will add the h1 element with the text "Type into the input to make this text change", and an empty input form field under it.

You can try this code out yourself, for example, by pointing your browser to the `example.com` website, and running the above code in the console.

**Remember you can access the console from the developer tools in your browser.**

Another opinionated thing that you did in the code above is: setting my variables using the `var` keyword.

Although it's better to use either `let` or `const`, you're just running a quick experiment on a live website, and you want to use the most lenient variable keyword, the one which will not complain about you having already set the `h1` or the `input` variables.

If you had a complete project with a modern JavaScript tooling setup, you'd be using `let` or `const`, but this is just a quick demo, so using `var` in this case is ok.

The next thing that you need to do is: set up an event listener. The event you're listening for is the `change` event. In this case, the change event will fire after you've typed into the input and pressed the ENTER key.

Here's your updated code:
```js
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
})
```
This time, when you run the above code on the said `example.com` website, subsequently typing some text into the input field and pressing the enter key, you'll get the value of the typed-in text logged to the console.

Now, the only thing that you still need to do to complete my code is to update the text content of the `h1` element with the value you got from the `input` field.

Here's the complete, updated code:
```js
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
```
After this update, whatever you type into the input, after pressing the ENTER key, will be shown as the text inside the `h1` element.

Although this completes this lesson item, it's important to note that combining DOM manipulation and event handling allows for some truly remarkable interactive websites.
# Exercise: Capture Data
## Description
The aim of this exercise is to access the content of an element, specifically to use a button click to replace text.

## Task 1: The example.com website
Open the [example.com](https://exampledomain.github.io/capture-data/index.html) website in your browser. Open the developer tools and focus on the Console tab.

Example.com is a domain that can be used as an example in documents, papers and websites.

If you navigate in your browser to http://www.example.com/ you will see a webpage with a simple message:

**Example Domain**

This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.
## Task 2: Get h1 into a variable
Use the `document.querySelector()` method to query the h1 element on the page and assign it to the variable named `h1`.
## Task 3: Code an array
Declare a new variable, name it `arr`, and save the following array into it:
```js
[
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]
```
## Task 4: Write a click-handling function
Write a new function declaration, named `handleClicks`. It should not accept any parameters.

Inside of it, code a `switch` statement, and pass a single parameter to it, `h1.innerText`.

The body of the switch statement should have a total of 4 cases (the fourth being the default case).

The first case should start with `case arr[0]`:. It should set the `h1.innerText` to `arr[1]`. In other words, it should assign the value of `arr[1]` to the `h1.innerText` property. The next line should have only the break keyword.

The second case should start with case `arr[1]`:. It should set the `h1.innerText` to `arr[2]`. In other words, it should assign the value of `arr[2]` to the `h1.innerText` property. The next line should have only the break keyword.

The third case should start with case `arr[2]`:. It should set the `h1.innerText` to `arr[3]`. In other words, it should assign the value of `arr[3]` to the `h1.innerText` property. The next line should have only the break keyword.

The `default` case should set the value of the `h1.innerText` property to `arr[0]`.
## Task 5: Add an event listener
You've created an h1 variable in Task 2. Now, use that variable to run the `addEventListener()` method on it. Pass two arguments to the `addEventListener()` method: `'click'` and `handleClicks`.
# Solution: Capture Data
## Task 1 solution: The example.com website
1. Open your favorite browser and navigate to https://example.com/.
2. Next open its developer tools using either the F12 key, or right-clicking onto the page and selecting the contextual menu's Inspect command, or by pressing CTRL SHIFT I or COMMAND SHIFT I.
3. Next, click on the Console tab to open it in a dedicated tab, or press the ESC key to have the console open while any tab is in focus.
## Task 2 solution: Get h1 into a variable
```js
var h1 = document.querySelector('h1')

```
## Task 3 solution: Code an array
```js
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

```
## Task 4 solution: Write a click-handling function
```js
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}
```
## Task 5 solution: Add an event listener
```js
h1.addEventListener('click', handleClicks);

```
# Self review: Capture data
## Question 1
Did you complete the Capture Data exercise?

***A. Yes***

B. No

## Question 2
Were there any parts of the *Capture Data exercise* that you found difficult to complete?

A. Yes

***B. No***

## Question 3
Would you say that you are able to explain, in your own words, how to capture event data in JavaScript?

***A. Yes***

B. No
# Moving data around on the web
The modern web consists of millions and millions of web pages, connected services and databases.

There are websites communicating with other websites, getting data from data feeds and data providers, both paid and free.

All of these data flows must be facilitated with some kind of data format.

Around 2001, Douglas Crockford came up with a data interchange format based on JavaScript objects. The name given to this format was JSON, which is JavaScript Object Notation.

Before JSON, the most common data interchange file format was XML (Extensible Markup Language). However, due to XML's syntax, it required more characters to describe the data that was sent. Also, since it was a specific stand-alone language, it wasn't as easily inter-operable with JavaScript.

Thus, the two major reasons for the JSON format becoming the dominant data interchange format that it is today is two-fold:

- First, it's very lightweight, with syntax very similar to "a stringified JavaScript object". You'll learn more about the specifics of this later.
- Second, it's easier to handle in JavaScript code, since, JSON, after all, is *just JavaScript*.

It is often said that JSON is a *subset* of JavaScript, meaning it adheres to syntax rules of the JavaScript language, but it's even more strict in how proper JSON code should be formatted. In other words, all JSON code is JavaScript, but not all JavaScript code is JSON.

Besides being a data interchange format, JSON is also a file format. It's not uncommon to access some third-party data from a third-party website into our own code in the form of a `json` file.

For example, if you had a website with the data on stock price movements, you might want to get the data of the current stock prices from a data vendor. They might offer their data service by giving you access to the file named, say `stockPrices.json`, that you could access from their servers.

Once you'd downloaded that stringified JSON data into your own code, you could then convert that data to a plain JavaScript object.

That would mean that you could use your web application's code to "dig into" the third-party data-converted-to-a-JavaScript-object, so as to obtain specific information based on a given set of criteria.

For example, if the stringified JSON data was converted to an object that had the following structure:
```js
const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}
```
You could then access only the data on the `USD` property, if that's what was needed by you app at a given point in time.

Hopefully, with this explanation, you understand, at a high level, how and why you might want to use JSON in your own code.

It's all about getting stringified JSON data from a server, converting ("parsing") that data into JS objects in your own code, working with the converted data in your own code, and perhaps even stringifying the result into JSON, so that this data is then ready to, for example, be sent back to a server after your code has processed it locally.

## JSON is just a string - but there are rules that it must follow
JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

- primitive values: strings, numbers, bolleans, null
- complex values: objects and arrays (no functions!)
- Objects have double-quoted strings for all keys
- Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
- String properties must be surrounded in double quotes. For example:
```txt
"fruits",

"vegetables"
```
- Number properties are represented using the regular JavaScript number syntax; e.g
````txt
5,
10,
1.2
````
- Boolean properties are represented using the regular JavaScript boolean syntax, that is: `true` and `false`
- Null as a property is the same as in regular JavaScript; it's just a `null`.

You can use object literals and array literals, as long as you follow the above rules

What happens if you try to stringify a data type which is not accepted in JSON syntax?

For example, what if you try to stringify a function? **The operation will silently fail**.

If you try to stringify some other data types, such as a BigInt number, say `123n`, you'd get the following error: `Uncaught TypeError: Do not know how to serialize a BigInt`.

**Some examples of JSON strings**

Finally, here is an example of a stringified JSON object, with a single key-value pair:

`'{"color":"red"}' `

Here's a bit more complex JSON object:

`'{"color":"red", "nestedObject": { "color": "blue" } }' `

The above JSON object encodes two properties:

- `"color":"red"`
- `"nestedObject": { "color": "blue" }`

It's also possible to have a JSON string encoding just an array:

`'["one", "two", "three"]'`

The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

For example:

`'[{ "color": "blue" }, {"color: "red"}]'`

In the above example, the JSON string encodes an array which holds two objects, where each object consists of a single key-value pair, where both values are strings.
# Knowledge Check - JavaScript in the browser
## Question 1
In the following code, the  type  attribute can be omitted.
```html

    <script type="text/javascript">
        //Comment
    </script>

```
***A. True***

B. False

It is true statement. Explain: type="text/javascript"  is the implicit value of the  script  tag when it is omitted.
## Question 2
What does the  document  variable return in JavaScript?
```js
console.log(document);
```
A. The entire body tag of the webpage in the browser's memory, as a JavaScript object.

***B. The entire webpage in the browser's memory, as a JavaScript object.***

C. The HTML code of the downloaded webpage, as a JavaScript string.

Explain: The  document  object holds the entire structure of the active webpage in the browser's memory.
## Question 3
What does the following function return?
```js
getElementById('main-heading')
```
A. It doesn't return anything.

B. All elements that have the  class  attribute with a value  main-heading

***C. The first element that has the  id  attribute with a value  main-heading***

D. The last element that has the  id  attribute with a value  main-heading

Explain: The first element with the attribute  id="main-header"  is returned.
## Question 4
After the following code is run, what will happen when the user clicks on a  p  element in the browser?
```js

    document.querySelector('h1').addEventListener('click', 
        function() { 
            console.log('clicked');
        });

```

A. 'clicked' is printed to the console log.

***B. Nothing.***

Explain: The click event listener is registered on  h1  elements.
## Question 5
What will be printed when the following code runs?
```js

    var result = {
      value: 7
    };
    console.log(JSON.stringify(result));

```

A. {}

B. {value: 7}

***C. {"value": 7}***

The correct answer is C. Explain: JSON.stringify will turn the object into a string representation. The property name is wrapped in double quotes in the representation.
# Module quiz: Programming Paradigms
## Question 1
Variables declared using  'let' can be reassigned.

***A. true***

B. false

It is true statement. Explain: Variables declared using  let  cannot be redeclared but can be reassigned.
## Question 2
What will print out when the following code runs?
```js

    function scopeTest() {
        var y = 44;

        console.log(x);
    }

    var x = 33;
    scopeTest();

```
A. null

B. undefined

***C. 33***

D. 44

Explain: x  is defined in the global scope before the  console.log  is called.
## Question 3
What will print out when the following code runs?
```js

    class Cake {
        constructor(lyr) {
            this.layers = lyr;
        }

        getLayers() {
            return this.layers;
        }
    }

    class WeddingCake extends Cake {
        constructor() {
            super(2);
        }

        getLayers() {
            return super.getLayers() * 5;
        }
    }

    var result = new WeddingCake();
    console.log(result.getLayers());

```
A. 0

B. 2

C. 5

***D. 10***

The correct output is 10. Explain: The WeddingCake constructor stores the amount of layers as 2. However, WeddingCake overrides the  getLayers()  function to multiple the result by 5. Therefore,  10  is outcome.
## Question 4
What will print out when the following code runs?
```js

    class Animal {

    }

    class Dog extends Animal {
        constructor() {
            super();
            this.noise = "bark";
        }

        makeNoise() {
          return this.noise;
        }
    }

    class Wolf extends Dog {
        constructor() {
            super();
            this.noise = "growl";
        }
    }

    var result = new Wolf();
    console.log(result.makeNoise());

```
A. bark

***B. growl***

C. undefined

The correct output is growl. Explain: The  noise  property is overridden when the Wolf constructor is called.
## Question 5
Consider this code snippet: 'const  [a, b]  =  [1,2,3,4] '. What is the value of  b?

A. undefined

B. 1

***C. 2***

D. [1,2,3,4]

The value of b is 2. Explain: The value  b  is assigned the second item value of the array through de-structuring.
## Question 6
What value will be printed out when the following code runs?
```js

    function count(...food) {
        console.log(food.length)
    }

    count("Burgers", "Fries", null);

```
A. 2

***B. 3***

C. "Burgers", "Fries", null

D. "Burgers", "Fries", undefined

The value will be printed out was 3. Explain: The rest operator  ...  allows a function to accept an indefinite amount of parameters. The length property of the  food  variable will return 3 because there were 3 parameters passed to the method call. The value  null  counts as a parameter. Therefore, 3 will be printed out.
## Question 7
Which of the following are JavaScript methods for querying the Document Object Model? Select all that apply.

- [X] getElementsByClassName
- [ ] getElementsById
- [X] getElementById
- [ ] getElementByClassName
- [ ] queryAllSelectors
- [X] querySelector

Explain: getElementsByClassName  will return all elements with the specified class. getElementById  will return the first matching element with the specified ID. querySelector  will return all elements matching the specified CSS selector.
## Question 8
Which of the following methods convert a JavaScript object to and from a JSON string?

- [X] JSON.parse
- [X] JSON.stringify
- [ ] JSON.fromString
- [ ] JSON.toString

Explain: JSON.parse  will convert a JSON string to a JavaScript object. JSON.stringify  will convert a JavaScript object to a JSON string.
## Question 9
What will be the result of running this code?  
```js
const letter = "a"
letter = "b"
```

***A. Uncaught TypeError: Assignment to constant variable   ***

B. b

C. a

D. Uncaught SyntaxError: Invalid or unexpected token

Explain: You cannot reassign a variable assigned using the `const` keyword.
## Question 10
What is a constructor?

***A. A function that is called to create an instance of an object.***

B. An instance of a class.

C. A specific object that has been created using the class name.

D. An object literal 

Explain: A constructor function details how an object will be built using the keyword new.  
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[Nodejs.org official docs on CommonJS](https://nodejs.org/api/modules.html#modules-commonjs-modules)

[MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

[MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[MDN: Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

[MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)