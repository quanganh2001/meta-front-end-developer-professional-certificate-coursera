# Syntax, logical and runtime errors
By the end of this reading, you'll be able to:
- Recognize common types of errors in JavaScript

Here are some of the most common errors in JavaScript: 

- ReferenceError 
- SyntaxError 
- TypeError 
- RangeError

There are some other errors in JavaScript. These other errors include: 

- AggregateError 
- Error 
- InternalError 
- URIError

However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.
## ReferenceError
A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:
```js
console.log(username);
```
If the variable named `username` hasn't been declared, the above line of code will result in the following output:
```txt
Uncaught ReferenceError: username is not defined
```
## SyntaxError
Any kind of invalid JavaScript code will cause a SyntaxError.

For example:
```js
var a "there's no assignment operator here";
```
The above line of code will throw the following error:  
```txt
Uncaught SyntaxError: Unexpected string
```
There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the `try-catch` block.  
## TypeError
A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the `pop()` method on a string:
```js
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```
The array-like behavior of strings was already covered in an earlier lesson in this course. 

However, as can be confirmed by running the above line of code, strings do not have all the array methods readily available to them, and trying to use some of those methods will result in a TypeError being thrown.  
## RangeError
A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday *Base 10 number* (a number of the common decimal system) to a *Base 2 number* (i.e binary number).

For example:
```js
(10).toString(2); // '1010'
```
The value of `2` when passed to the `toString()` method, is like saying to JavaScript: "convert the value of `10` of the Base 10 number system, to its counter-part in the Base 2 number system".

JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part.

Besides using Base 2 number system, I can also use the Base 8, like this:
```js
(10).toString(8); // 12
```
I get back the value `12`, which is the plain number 10, writen in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary *Base 100*, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing *Base 100* system is **out of range** of the number systems that are available to the `toString()` method:
```js
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
```
# Exercise: Error prevention
## Instructions
**Task 1: Code a function declaration**

You need to code a function declaration named `addTwoNums`, which accepts numbers `a` and `b` and console logs `a + b`.

**Task 2: Invoke the `addTwoNums` function with a number and a string**

You need to invoke the `addTwoNums` using the following arguments: `5` and `"5"`.

**Task 3: Update the `addTwoNums` function with a try...catch block**

Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of `a + b` is inside the try block. Additionally, the `catch` block should catch an error named `err` and, inside the body of the `catch` block, you need to console log the `err` value.

**Task 4: If the passed-in arguments are not numbers, throw an error**

If either of the arguments passed to the `addTwoNums` are not numbers, you'll throw an error.

Specifically, code a conditional with the following logic:

- if the `typeof` the `a` parameter is not equal to `'number'`, throw a new `ReferenceError`. Inside the `ReferenceError`, pass a custom error message of `'the first argument is not a number'`.
- else if the `typeof` the `b` parameter is not equal to `'number'`, throw a new `ReferenceError`. Inside the `ReferenceError`, pass a custom error message of `'the second argument is not a number'`.
- else, console log `a + b`  

Once you've completed this task, all the code inside the `try` block will be inside these conditional statements.

**Task 5: Update the catch block**

Inside the catch block, update the code from `console.log(err)` to `console.log("Error!", err)`.

**Task 6: Invoke the `addTwoNums` function**

Invoke the `addTwoNums` function using `5` and `"5"` as arguments.

**Task 7: Add another console log under the addTwoNums function invocation**

Add another line of code that console logs the string `"It still works"`.

**My solution:**
```js
function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof (b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");
console.log("It still works!");
```
# Solution: Error prevention
## Solution to task 1: Code a function declaration
```js
function addTwoNums(a,b) {
    console.log(a + b) //display the result
}
```
## Solution to task 2: Invoke the `addTwoNums` function with a number and a string
```js
function addTwoNums(a,b) {
    console.log(a + b)
}
addTwoNums(5, "5") // "55"
```
## Solution to task 3: Update the `addTwoNums` function with a try...catch block
```js
function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}
```
## Solution to task 4: If the passed-in arguments are not numbers, throw an error
```js
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}
```
## Solution to task 5: Update the catch block
```js
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
```
## Solution to tasks 6 and 7: Invoke the `addTwoNums` function *and* Add another console log under the `addTwoNums` function invocation
```js
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")
```
# Self review: Error prevention
## Question 1
Did you complete the Error Prevention exercise?

***A. Yes***

B. No

## Question 2
Were there any parts of the *Error Prevention* exercise that you found difficult to complete?

A. Yes

***B. No***

## Question 3
Would you say that you are able to explain, in your own words, how to prevent errors in JavaScript?

***A. Yes***

B. No
# Exercise: Defensive programming
Defensive programming is all about *assuming* that all the arguments a function will receive are of the wrong type,  the wrong value or both.

In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

How would you then refactor the function given below with defensive programming in mind?

For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

- The length of the `word` parameter cannot be less than `2`.
- The length of the `match` parameter must be `1`.
- The type of both the `word` and the `match` parameters must be *string*.

You will use the code below to complete your task:
```js
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

```
Here are the tasks to complete:

1. Just above the `for` loop in the `letterFinder` function definition, declare a variable named `condition1` and assign to it the following code: `typeof(word) == 'string' && word.length >= 2`.
2. Declare a variable named `condition2` on the next line and assign to it and assign to it a check that makes sure that the type of `match` is a string AND that the length of the `match` variable is equal to `1`.
3. Write an if statement on the next line that checks that `condition1` is `true`, and `condition2` is `true`
4. Move the rest of the function's body into the if statement you wrote in the previous step.
5. Code an "else" block after the "if" condition and console.log the following: `"Please pass correct arguments to the function."`.
6. As a failing test, run the `letterFinder` function and pass it with any two numbers as arguments.
7. As a passing test, run the `letterFinder` function and pass it with correct arguments, such as: `letterFinder("cat", "c")`.
  
**My solution**:
```js
const letterFinder = (word, match) => {
    let condition1 = typeof(word) == 'string' && word.length >= 2;
    let condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function");
    }
}

letterFinder([],[]);
letterFinder("cat", "c");
```
# Solution: Defensive programming
Full source code:
```js
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")
```
# Self review: Defensive programming
## Question 1
Did you complete the Defensive Programming exercise?

***A. Yes***

B. No
## Question 2
Were there any parts of the *Defensive Programming* exercise that you found difficult to complete?

***A. Yes***

B. No
## Question 3
Would you say that you are able to explain, in your own words, how to code a function declaration defensively?

***A. Yes***

B. No
# Knowledge check: Error handling
## Question 1
What will be printed when the following code runs?
```js

  var result = null;
  console.log(result);

```

A. undefined

***B. null***

C. 0

The correct output is null. Explain: Since the value is initialised with null, null will be output.
## Question 2
When the following code runs, what will print out?
````js

  try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

````
***A. Hello***

B. Goodbye

The correct output is Hello. Explain: Since there is no error thrown inside the  try  block, the catch  block  will not run. Therefore, "Hello" will print out.
## Question 3
If you pass an unsupported data type to a function, what error will be thrown?

A. RangeError

B. SyntaxError

***C. TypeError***

The correct error is TypeError. Explain: TypeError will be thrown when an incorrect data type is passed to a function.
## Question 4
What will print out when the following code runs?
```js

  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }

```
A. null

***B. undefined***

C. ok

The correct output is undefined. Explain: Since the value is not initialised, it will have the undefined data type.
## Question 5
What will print out when the following code runs?
```js

  throw new Error();
  console.log("Hello");

```

A. Hello

***B. Nothing will print out***

Explain: Throwing an error will stop the execution of the code.
# Module quiz: The Building Blocks of a Program
## Question 1
What data type is the variable  x ?
```js

  var x = {};

```
A. Function

B. Array

***C. Object***

The correct data type is Object. Explain:  {}  is the array literal.
## Question 2
What will be the output of running the following code?  
```js
try {
console.log('hello)
} catch(e) {
console.log('caught')
}
```

***A. Uncaught SyntaxError: Invalid or unexpected token.***

B. Caught

The correct output is Uncaught SyntaxError: Invalid or unexpected token. Explain:  you cannot handle SyntaxErrors in JavaScript using a try catch block.  
## Question 3
What value is printed when the following code runs?
```js

  var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);

```

A. bun

B. beef

***C. lettuce***

D. tomato sauce

E. onion

The correct value is lettuce. Explain: Indices start at 0. Therefore  lettuce  will print out as it is at index 2.
## Question 4
In the following code, how many methods does the  bicycle  object have?
```js

  var bicycle = {
      wheels: 2,
      start: function() {

      },
      stop: function() {

      }
  };

```
A. 1

***B. 2***

C. 3

There are 2 methods does the bicycle object have. Explain: wheels  is a property and  start  and  stop  are methods.
## Question 5
When the following code runs, what will print out?
```js

  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

```
A. Hello

***B. Goodbye***

The correct output is Goodbye. Explain: When the error is thrown, the code will execute the code inside the catch statement.
## Question 6
If you mis-type some code in your JavaScript, what kind of error will that result in?

A. RangeError

***B. SyntaxError***

C. TypeError

The correct error is SyntaxError.

## Question 7
Will the following code execute without an error?
```js

  function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");

```
***A. Yes***

B. No

This code execute without an error. Explain: Although the code has a bug, it will execute without error. Instead of adding the numbers and printing  7 , it will print  34 .
## Question 8
What will be printed when the following code runs?
```js

  var result;
  console.log(result);

```
***A. undefined***

B. null

C. 0

The correct output is undefined. Explain: Since no value was assigned to  result ,  undefined  will print out.
## Question 9
What will be the output of the following code?
```js
var str = "Hello";
str.match("jello");
```

***A. null***

B. undefined

C. empty string

The correct output is null. Explain: Since the string "Hello" doesn't contain the string "jello", it cannot be matched, and thus an array object with the matching result cannot be created. Hence, the return value is null, signaling the absence of a matching result.  

## Question 10
What will be the output of the following code?
```js
try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
```
A. RangeError

B. 5

C. e

***D. "There was an error"***

The output is: There was an error. Explain: The *catch block* will execute and print because of the Range error.
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[MDN functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
 

[MDN try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
 

[Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
 

[The Math object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 

[The String object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 

[MDN JavaScript error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
 

[The null value on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
 

[The undefined property on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)