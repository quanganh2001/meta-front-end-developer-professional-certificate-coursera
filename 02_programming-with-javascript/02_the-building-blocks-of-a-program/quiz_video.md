# Arrays, Objects and Functions
## Functions
You are creating a function and write the following code:
```js
function hello() {
  console.log(“Hello world”);
}
```
How do you call your function in your code?      

***A. `hello();`***

B. `hello(){};`

C. `hello;`

I call `hello();` function in your code. Explain: In JavaScript, you can call a function by typing the function name followed by the open and close parentheses.
## Storing data in arrays
You have the following array:

`var colors = ["red", "blue", "green", "yellow"];`

Which one of the following would you use to call “green” from this array?

A. colors[3]

B. colors.green

***C. colors[2]***

D. colors[“green”]

Explain: Arrays are zero-indexed, so the third item would be called with index number two.
## Introduction to objects
You have created a “worker” character for your game and would like to assign it several traits. Which of the following best describes the benefits of creating an object for this purpose? Choose all that apply.

- [ ] Variable values can't be changed.
- [X] All properties can be connected to the same object.
- [X] It enables you to use shorter property names.
- [ ] Objects can hold more types of values than arrays can.

Explain: Objects can be assigned multiple properties. Objects tend to allow for shorter names.

## Math object
You have written the following code:
```js
var myNum = Math.ceil(2.49);
console.log(myNum);
```
When you run this code, what value will be returned? Select the correct answer below:      

***A. 3***

B. 2.49

C. 2

D. Error

The correct output is 3. Explain: The ceil() method only rounds upwards to the nearest whole number, which is 3 in this case.
## A closer look at strings
You have the following variables containing string values:

`var parting = "Goodbye";`

`var name = "Robin";`

Which of the following can be used to return both of these values as a combined string? Choose all that apply.

- [X] `console.log( parting + name );`
- [X] `console.log( parting.concat(name) );`
- [ ] `console.log( parting.pop() );`
- [ ] All of the above will work.

Explain: The string values can be joined with a plus operator, or by using the concat method.
## Typeof
In your code, you have a value that is stored as ‘18 > 27’. If you use the typeof operator on this value, which one of these outcomes would the console return?

***A. Boolean***

B. String

C. Number

D. BigInt

The correct answer is Boolean. Explain: When you compare two numbers using the comparison operator, the return value is either true or false - and the typeof returns 'Boolean' as the underlying data type.
# Error Handling
## Bugs and Errors
Which of the following errors occur when you write a piece of code that JavaScript cannot read?

A. ReferenceError

B. TypeError

***C. SyntaxError***

Explain: SyntaxError occurs when you write a piece of code that JavaScript cannot read. 
## Try catch blocks
The try catch JavaScript statement can keep a program running even when it encounters an error. True or false?

***A. True***

B. False

It is true statement. Explain: The try catch statement keeps a program running when it encounters an error.
## Undefined, null and empty values
What is the expected output of the following code?
```js
var food;

console.log(food);
```
A. The console.log will result in the message ‘ReferenceError’.

B. The console.log will display a value of ‘food’.

C. Nothing will be displayed.

***D. The console.log will display a value of ‘undefined’.***

Explain: When declared with 'var', an unassigned variable will be initialized with the value 'undefined'.