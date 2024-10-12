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