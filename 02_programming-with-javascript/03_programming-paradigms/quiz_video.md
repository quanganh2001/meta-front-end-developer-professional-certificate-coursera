# Introduction to Functional Programming
## Introduction to Functional Programming
In functional programming, the data and functions that work on that data are combined inside objects.  

A. True

***B. False***

It is false statement. Explain: In functional programming, data and functions that operate on it are clearly separated, not combined inside objects.
## Function calling and recursion
Do you recall these comparison operators == and ===    ?

***A. Yes***

B. No

Explain: Great! But just in case, check out the reading, Operators in depth in Module 1 Lesson 2.

<hr>

Consider the following code:
```js
function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay();
}
```
Which one of the following best describes what will happen if you run this code?

***A. The function will run in an infinite loop.***

B. The function will only run once.

Explain: The function will run over and over, as there is no condition to stop it.
## Introduction to scope
You decide to create a variable within the local scope while scripting a new JavaScript file. Is this variable accessible to code at the global scope level? 

A. Yes

***B. No***

Explain: Variables created within the local scope cannot be read by code at the global scope level. They are accessible only to functions located within the local scope.  
## Scoping with var, let and const
You are performing an update to some code and you need to create a variable named quantity, which calculates the total number of items.

You need this variable to be accessible only inside a for loop. 

You declare the variable using the let keyword and it is within a for loop that performs the calculation of the total number of items. 

Does this variable declaration address your needs?

***A. Yes***

B. No

Explain: When you use let and const to declare a variable, it is scoped to the block - even within if statements and loops, like the for or while loops. Therefore, the quantity variable you create will only exist within the for loop.  
## Comparing var, let and const
Which one of the following statements is true when declaring variables using either var, let or const?

***A. Variables declared with const must be assigned during declaration.***

B. Variables declared with var must be assigned during declaration.

C. Variables declared with let must be assigned during declaration.

Explain: Variables declared with const must be assigned during declaration.
# Introduction to Object-Oriented Programming
## Introduction to object-oriented programming
You are coding in OOP style. Why would you want to use the "this" keyword?

A. To refer the current method or function.

***B. To refer to the object itself without specifying the object's name.***

C. To declare an object's methods.

Explain: The "this" keyword is an alias for the name of the object.
## Classes
You are working with classes in JavaScript. Which of the following instructions should you adhere to? Check all that apply.

- [ ] Make sure that the name of your class is lowercase.
- [X] Create an instance of the class using the keyword new and that class' name, followed by opening and closing parentheses, and optional arguments, based on how the class itself is defined.
- [X] Build your classes using the "class" keyword.
- [X] Add a constructor function to accept your parameters.

Explain: For example, if a class named Car doesn't take any arguments, you'd instantiate it like this: new Car(). Any class is built using the “class” keyword. The constructor function assigns passed-in parameters to the future object’s properties.
## Inheritance
True or false? In JavaScript, you can use a prototype object to hold properties that can be shared with various other objects.  

***A. True***

B. False

It is true statement. Explain: The prototype is an object that can have properties to be shared by multiple other objects.
# Advanced Javascript Features
## De-structuring arrays and objects
True or False. In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.

***A. True***

B. False

It is true statement. Explain: In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.
## For-of loops and objects
When working with objects, the for-of loop and for-in loop can be used to iterate over the object's properties. Which of the following statements are correct? Choose all that apply. 
- [X] The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
- [X] The for-of loop will not iterate over the object and its prototype properties.
- [ ] The for-in loop will not iterate over the object and its properties.

Explain: The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over. The for-of loop will not iterate over the object and its prototype properties.
## Working with template literals
In what ways can template literals be used to write JavaScript code more efficiently? Check all that apply:

- [X] You can create multi-line strings.
- [X] You can interpolate variables.
- [X] You can combine strings with less code.
- [ ] You can use variables that have not been declared.

Explain: Template literals can be used to create multi-line strings, interpolate variables, and to combine strings with simpler code. 
## Data Structures
Which one of these data structures consists of iterable key-value pairs?

***A. Maps***

B. Arrays

C. Sets

D. Objects

Explain: Maps are made up of iterable key value pairs.
## Spread operator
The spread operator allows you to pass all array elements into a function without having to type them all individually. Is this true or false?

***A. True***

B. False

It is true statement. Explain: The spread operator will include all of the array elements with much less code.
## Rest operator
The rest operator allows you to take items from an array and use them to create a separate sub-array. True or false?

***A. True***

B. False

It is true statement. Explain: The rest operator can be used to destructure existing array items, rather than typing them out again.
# Javascript in the browser
## JavaScript modules
Which of the following statements about modules in JavaScript are true? Choose all that apply.  

- [ ] Different module specifications, such asCommonJS, are universally compatible .
- [X] Modules were added to ECMAScript ES6 specification  
- [X] Modules allow for code to be reused and more easily replaced.
- [X] To use an ES6 module in a browser, you need to set the script type attribute to “module”  

Explain: Modules were added to JavaScript in version ES6. Modules were added to JavaScript in version ES6 and allow for code to be imported, reused and more easily replaced. To use an ES6 module in a browser, the script's type attribute must be set to “module”.  
## JavaScript DOM manipulation
True or false? Editing the local DOM of a webpage does not affect the document stored on the webserver.

***A. True***

B. False

It is true statement. Explain: The DOM is an in-memory representation of the active HTML document. Any changes made are local and do not affect the document stored on the webserver.
## JavaScript selectors
Which of the following are JavaScript DOM selectors? Check all that apply .

- [X] querySelector()
- [X] querySelectorAll()
- [X] getElementById()
- [X] getElementsByClassName()
- [ ] getAttribute()

Explain: This querySelector() method returns the first element in the document that matches the selector. This querySelectorAll() method returns all elements in the document that match the selector. This getElementById() method returns a specific element whose id matches the selector. This getElementsByClassName() method returns all elements in the document that has the class specified in the selector. 
## Event handling
You are using JavaScript code on your website to listen out for events. Which of the following are examples of events that your code can listen out for? Check all that apply.

- [X] Button click
- [X] Icon tap
- [ ] Using the command line software on your computer.

Explain: Button click is an example of an event that your code can listen out for. Icon tap is an example of an event that your code can listen out for.
## JavaScript Object Notation - JSON
You can convert a JSON file to a JavaScript object so that you can work with that object's properties.

***A. True***

B. False

It is true statement. Explain: When working with JSON it is common to convert it back to a JavaScript object to work with its properties. To do this you need to use the global built-in JSON object and its parse method.  