# About the Little Lemon receipt maker exercise
In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:

1. If the function is called with the argument `true`, it will output the names of the dishes and calculate their final price (including 20% tax)
2. If the function is called with the argument `false`, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:

Dish: Italian pasta Price (incl.tax): $ 11.46

Dish: Rice with veggies Price (incl.tax): $ 10.38

Dish: Chicken with potatoes Price (incl.tax): $ 18.66

Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:

Dish: Italian pasta Price (incl.tax): $ 9.55

Dish: Rice with veggies Price (incl.tax): $ 8.65

Dish: Chicken with potatoes Price (incl.tax): $ 15.55

Dish: Vegetarian Pizza Price (incl.tax): $ 6.45
# Programming Assignment: Little Lemon Receipt Maker
## Lab Instructions: Little Lemon Receipt Maker
 
> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
> - Questions about using VSCode? Please see our support resources here:  
> [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **To run your JavaScript code**
> - Select your JavaScript file
> - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
> Ex: It looks like a triangular "Play" button. <br><br>

<br>

## Assignment Instructions

In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.
<br><br>

**Step 1:** In the function `getPrices()`, give it the parameter of `taxBoolean`.

**Step 2:** Inside the `getPrices()` function, code a for loop that will loop over all the objects inside the `dishData` array.

**Step 3:** Inside the for loop, declare a `finalPrice` variable, without assigning it a value.

**Step 4:** Still inside the for loop, add an if condition, checking that the `taxBoolean` is set to `true`. Inside the if block, multiply the following: * the price of the currently looped-over object from the `dishData` array, and * the tax value. Assign the multiplied value to the finalPrice variable.

**Step 5:** Right after the if condition, add an else if, checking if the value of `taxBoolean` is false. Inside this condition's block, assign the currently looped-over dish price property in the `dishData` array to the `finalPrice` variable.
<br><br>

**Step 6:** Code the `else` case, and inside of it, add two lines of code:

A console log of the string:  

- "You need to pass a boolean to the getPrices call!"  

- return (to "jump out" of the further function execution)
<br><br>

<b>Step 7:</b> After all the conditional's statements, but still inside the for loop, code another console log with four arguments:

1. The string `"Dish: "`

2. The value of currently looped-over dish object's name property

3. The string `"Price: $"`

5. The value of the `finalPrice` variable
<br><br>

**Step 8:** You're finshed with the `getPrices()` function, and now you're ready to code another function. Give the `getDiscount()` function, two parameters: the `taxBoolean` and the `guests` parameter. 

**Step 9:** Inside the `getDiscount()` function,  on the very first line of its body, invoke the `getPrices()` function, passing it the `taxBoolean` as an argument.

**Step 10:** On another line, you need to implement your defensive coding skills, and check that the type of the `guests` parameter is 'number' and  that the value of the guests variable is greater than zero and less than 30.  If all these conditions return true, code the body of the conditional as described in the next step. If they don't all return true, code the body of the else conditional as instructed in step 12.

**Step 11:** Inside the if statment, declare a new variable, named `discount`, and set it to 0. On the next line, add another if...else if: in the first if, you'll check that the value of the `guests` variable is less than 5. If that's the case, reassign the value of the discount variable to 5; 
- Inside the else if condition, check that the value of the guests variable is greater than or equal to 5 - if that's the case, reassign the discount variable to 10.
- Console log the following after closing your else-if statement: `'Discount is: $' + discount);`


**Step 12:** In the else condition, console log the following string: `'The second argument must be a number between 0 and 30'`. Since you've finished declaring both the `getPrices()` and the `getDiscount()` functions, you can now invoke the `getDiscount()` function several times, with various combinations of arguments, to check the behavior. <br>

Here are two examples: 
- `getDiscount(true, 2) `
- `getDiscount(false, 10)`

What happens when you don't pass-in any arguments?  

What happens when you pass values that are not expected?

**My solution**
```js
// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let dish of dishData) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        console.log("Dish: " + dish.name + " Price: $" + finalPrice.toFixed(2));
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);  // Example call
getDiscount(false, 10); // Another example
```
Output:
```txt
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
Discount is: $5
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
Discount is: $10
```
# Self review: Little Lemon receipt maker
## Question 1
Were you able to code the conditional statements for the value of the passed-in argument to the invoked `getPrices()` function?  

***A. Yes***

B. No

## Question 2
Did you assign the `finalPrice` variable conditionally (in one condition, multiplied by the tax, and in the other condition, with no tax multiplied)?  

***A. Yes***

B. No

## Question 3
Is your loop outputting all the objects' data from the `dishData` array?  

***A. Yes***

B. No
# Final graded quiz: Programming with JavaScript
## 1st time
### Question 1
What will be the output of the following JavaScript?
```js

const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}

```

A. Green

***B. Blue***

C. Nothing

The correct output is Blue. Explain: The NOT operator results in the condition being false. Therefore, the code inside the else statement will execute and Blue will be output.
### Question 2
What will be the output of the following JavaScript?
````js

var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);

````

A. Hello

B. World!

C. Hello World!

D. ***Goodbye!***

The correct output is `Goodbye!`. Explain: The message variable is re-assigned as *Goodbye!* and output in the console.

### Question 3
What is the data type of the x variable in the following code?
````js
var x = 23.2;
````

***A. Number***

B. BigInt

C. String

D. Boolean

The correct data type of the x variable is number. Explain: Numbers can store whole numbers such as 23 and decimal numbers such as 23.2.
### Question 4
What will the following JavaScript code output?
```js

var x = 20;

if(x < 5) {
    console.log("Apple");
} else if(x > 10 && x < 20) {
    console.log("Pear");
} else {
    console.log("Orange");
}

```

A. Apple

B. Pear

***C. Orange***

The correct output is Orange. Explain: All conditions will fail because x is equal to 20. Therefore, the code inside the else statement will run and output Orange.
### Question 5
What will the following JavaScript code output?
```js

var result = 0;

var i = 4;
while(i > 0) {
    result += 2;
    i--;
}

console.log(result);

```
A. 0

B. 2

C. 4

***D. 8***

The correct output is 8. Explain: The loop will run 4 times and each time add 2 to the result variable. Therefore, 8 will be output.
### Question 6
What will the following JavaScript code output?

```js

var result;
console.log(result);
result = 7;

```
The correct output is undefined. 
### Question 7
What's missing from this JavaScript function declaration?
```js

function(a,b) {
    return a + b
}

```
***A. The function name***

B. The assignment operator

C. The dot notation

The missing from this JS function declaration is the function name. Explain: When coding function declarations, you need to give them a name.
### Question 8
What is the output of the code below?
````js

var cat = {}
cat["sound"] = "meow"
var catSound = "purr"
console.log(cat.sound)

````

***A. meow***

B. purr

C. {}

D. catSound

The correct output is meow. Explain: Console logging the sound property on the cat object will output the string "meow".

### Question 9
What is the output of the code below?
````js

var veggies = ['parsley', 'carrot']
console.log(veggies[2])

````
***A. undefined***

B. 2

C. 1

D. 3

The correct output is undefined. Explain: Trying to output the third item in the veggies array, using the syntax veggies [2]  will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
### Question 10
What is the first argument passed to the addEventListener function?

***A. A string describing the type of event (such as, "click").***

B. A function that will handle the event.

C. The target of the event.

The first argument passed to the `addEventListener` function is a string describing the type of event. Explain: The first argument to pass to the addEventListener function is the type of the event you're listening for, such as "click".

### Question 11
What does this line of code do?
```js

document.createElement('h2').innerText = "Heading Level 2"

```

***A. It creates an h2 element without adding it to the page.***

B. This syntax is invalid.

C. It adds an  inner-text  HTML attribute to the h2 element.

It creates an h2 element without adding it to the page.

### Question 12
True or false? Using the  npm init -y  command you can initialize a new project with npm with all the prompts answered with a 'yes'.

***A. True***

B. False

It is true statement. Explain: Using  npm init -y  is handy way to save time setting up a new project.
## 2nd time
### Question 1
What will be the output of the following JavaScript?
```js

const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}

```

A. Green

***B. Blue***

C. Nothing

The correct output is Blue. Explain: The NOT operator results in the condition being false. Therefore, the code inside the else statement will execute and Blue will be output.
### Question 2
What will be the output of the following JavaScript?
````js

var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);

````

A. Hello

B. World!

C. Hello World!

D. ***Goodbye!***

The correct output is `Goodbye!`. Explain: The message variable is re-assigned as *Goodbye!* and output in the console.
### Question 3
What is the data type of the x variable in the following code?
```js
var x = "Hello";
```

A. Number

B. BigInt

***C. String***

D. Boolean

The data type of the x variable is String. Explain: Text wrapped in double quotes represents a string data type.
### Question 4
What will the following JavaScript code output?
```js

var x = 20;

if(x >= 10) {
    console.log("Apple");
} else if(x <= 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}

```

***A. Apple***

B. Pear

C. Orange

The correct output is Apple. Explain: The x variable has the value of 20, therefore the first condition succeeds. The code inside the if statement will run and output Apple.
### Question 5
What will the following JavaScript code output?
````js

var result = 0;

var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}

console.log(result);

````

A. 0

B. 2

C. 3

***D. 6***

The correct output is 6. Explain: The loop will run 3 times and each time add 2 to the result variable. Therefore, 6 will be output.
### Question 6
What will the following JavaScript code output?
```js

console.log(result);
var result = 7;

```

A. null

***B. undefined***

C. 7

The correct output is undefined. Explain: Since result is not yet defined when it is output, the value *undefined* is output.

### Question 7
What will be the result of running the following JavaScript code snippet?
```js

function addTwo(a,b) {
    return a
}
addTwo(5,10)

```

***A. 5***

B. 10

C. undefined

The correct output is 5. Explain: The function is coded so that it only returns the first passed-in argument.
### Question 8
What is the output of the code below?
```js

var cat = {}
cat.sound = "meow"
var catSound = "purr"
console.log(cat.sound)

```
***A. meow***

B. purr

C. {}

D. catSound

The correct output is meow.
### Question 9
What is the output of the code below?
````js

var veggies = ['parsley', 'carrot']
console.log(veggies[2])

````
***A. undefined***

B. 2

C. 1

D. 3

The correct output is undefined. Explain: Trying to output the third item in the veggies array, using the syntax veggies [2]  will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
### Question 10
True or False. The second argument passed to the addEventListener function is the actual function that will handle the event, when it gets triggered.

***A. True***

B. False

It is true statement. Explain: The second argument passed to the addEventListener handles the event.
### Question 11
How can you add an HTML attribute to an HTML element using JavaScript?

***A. By invoking the  setAttribute  method on a given element.***

B. By invoking the  getAttribute  method on a given element.

C. By invoking the  createAttribute  method on a given element.

Explain: For example, to add an id attribute to an element, you can run  setAttribute('id', 'sub-heading')
### Question 12
What does this code do?
```js

function addFive(val) {
  return val + 5;
};
module.exports = addFive;

```
***A. It defines the addFive function and exports it as a Node module so that it can be used in other files.***

B. This syntax is invalid.

C. It allows you to invoke the addFive function without the parentheses.

This code defines the addFive function and exports it as a Node module so that it can be used in other files. Explain: It's a way to export the addFive function as a module that can be used elsewhere.
# What challenges did you encounter during the assignment?
What challenges did you encounter during the assignment?

Share with your classmates a challenge that you faced and the solution you implemented to overcome it.