# Writing your first Javascript code
In this reading, you'll learn about comments in JavaScript. Additionally, you'll learn about the semi-colon in JavaScript: what it does and why it is used. You will then download a browser if you don't have one installed and run your first piece of JavaScript using the Console.

## Comments in JavaScript
I've chosen comments as the starting point for two reasons: 

1. Their syntax - the way comments are written is easy to understand. 
2. Writing comments can empower you as a developer.

First, I'll explain the syntax, and after that, I'll discuss why being able to write comments is so empowering.
### Comments in Javascript: the syntax
There are two varieties of comments in JavaScript: 

1. Single-line comments 
2. Multi-line comments

A single-line comment is created when you add two forward-slash characters one after the other, without spaces. 

```js
// this is a comment!
```

Anything that follows a single-line comment in JavaScript is ignored by the browser.

This means that, essentially, you can write any kind of text, code, characters, emojis, whatever - and the browser will ignore it.

A multi-line comment, as its name says, spans for several lines of code and is created with a forward slash and a star. For example: 

```js
/*
this
is
a
multi-line
comment
*/
```

You can also use the multi-line comment syntax on a single line of code, as follows: 

```js
/* this is a multi-line comment on a single line */
```

## Why writing comments is empowering
In this course, it is assumed that you've never written a single line of JavaScript code.

With this assumption in mind, consider the effects of what you've just learned, that is, the effects of learning how to write comments in JavaScript: 

1. You can now freely express your ideas about any code that you write. 
2. You can add comments to any code that already exists.
3. Those comments can be intended for your future self, or for colleagues on your development team.

So, comments are empowering because they facilitate communication with your future self or with your team members, allowing you to ask questions about the code, mark the code as "to do", or as "to improve", or just simply explain what a given piece of code does. 

Additionally, you can even comment out some working code in a JavaScript file - to prevent it from running.

Effectively, comments allow you to "switch off" pieces of JavaScript code.

There can be many reasons for that: 

1. Trying to understand how a given piece of code works.
2. Testing different solutions to a coding problem - while not having to delete existing code.
3. Debugging - trying to pin-point why your code is broken or behaving unprediticably.

## The semi-colon in Javascript
In the English language, the fullstop or period - the `.` character - is used to separate thoughts into sentences.

By clearly separating thoughts with the fullstop, you avoid being misunderstood.

In JavaScript, the semi-colon - the `;` character - has a similar purpose: it is used to clearly delimit parts of the code from some other parts of the code.

### Automatic Semi-Colon Insertion (ASI)
Interestingly, the browser has a feature known as "Automatic Semi-colon Insertion" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.

Effectively, what that means for developers is that most of the time, it makes no difference if a semi-colon is added or not, since the browser is likely to figure it out anyway.

That's why some developers say that you shouldn't bother with adding semi-colons at all.

However, other developers argue that it's better to use it wherever it's needed - for the sake of clarity.

The truth is that most of the time, you can think of adding semi-colons in JavaScript as optional - and somewhat of a stylistic preference.

## A note on using the console in the developer tools in your browser
As already mentioned earlier on in this course, one of the reasons why JavaScript is so popular is because it's so approachable.

To get started with JavaScript, all you need is a browser. In this course I'll be using Google Chrome.

Once you've installed the browser and run it, right-click on the currently active web page and click the `Inspect` command on the right-click contextual menu.

This will open the Developer Tools and then you can click on the Console tab to open the console, or alternatively, pressing the `ESC` key will toggle on and off the console regardless of the currently active Developer Tools panel.

You can type any JavaScript command you like into the DevTools console.

**If you need to type multiple lines of code before you run them, make sure to press the SHIFT + ENTER shortcut key to get onto the next line.**

Notice the distinction between pressing the `ENTER` key to run the JavaScript code you've typed, versus pressing the `SHIFT + ENTER` shortcut to move onto the next line of code (rather than running the code you've already typed up).

This is all that you need to get started writing JavaScript code!

In the upcoming lessons, feel free to follow along in either of two ways: 

1. Using the VS Code editor and the Code Runner extension as previously described 
2. Using the Chrome browser itself, and running the code inside the DevTools console as described in this reading

## Output a greeting into the console
Now that you know how to get to the Developer Tools' Console tab, let's now use it to run your first piece of real JavaScript code.

In Chrome, with the Developer Tools open, click into the empty space in the console tab, just to the right of the blue > character. You should see a blinking vertical line (also referred to as "the cursor"). The cursor indicates that you can type into the console.

If you type valid JavaScript code, it will be executed, meaning: it will be processed and it might result in some kind of output.

You'll now use the `console.log` function to output the words "Hello, World".

To do so, type the following command into the console: 
```js
console.log("Hello, World");
```

![OE_8TdFzQXOP_E3RcwFzXg_8b49e78ded554d63bc325a5d05fc13e1_console-log-authors-own-screenshot](https://github.com/user-attachments/assets/ea64c7dc-85f5-47d2-bfc7-fc2a43d44e5a)

If you've done everything as instructed, the words "Hello, World" should be output in the console.

Here's another, more complex command, to show you that the `console.log` command comes with a number of tricks.

For example, did you know that you can style the output in the console?

In this code snippet, there are a few additions: the font size is different and the color is blue: 

```js
console.log("%cHello, World", "color: blue; font-size: 40px");
```

![QQw1d181QE-MNXdfNUBPhA_d303233cd4db486482f2f753479f74e1_console-log-with-percentage-c-authors-screeshot](https://github.com/user-attachments/assets/5b3bcab1-c280-439e-8098-dd38a638b4c0)

If you copy-paste this piece of code, or perhaps, simply type it into the console, once you press the `ENTER` key to run it, you'll get the words "Hello, World" output to the console. This time, however, the color of the letters will be blue, and the font size will be 40px. So, you've just learned a nice trick with the console. 

If you add the `%c` right after the `"` character, you can then style the console output by adding the `,` character after the second `"`, and then, inside another pair of `"` and `"` characters, use valid CSS code to style the words you want to output in the console.

The reason for showing you this little trick was to hopefully get you motivated to practice writing various words into the `console.log` command, and to use your CSS skills to change the styling of these words in the console output. That way, you might find it fun to practice this newly acquired skill - and learning and fun always go nicely together.

## Output multiple words into the console
To output multiple words into the console, you can join them using the + character, formally known as the "concatenation operator" when we're joining pieces of text, or the "addition operator", for performing the mathematical operation of adding two numbers. 

Here is an example of joining three separate pieces of text: `console.log("Hello " + "there, " + "World")`. The output of this command will be: Hello there, World.

Here is an example of outputting three separate pieces of text using the , character instead:

`console.log("Hello ", "there, ", "World")`

The output of this command will still be: _Hello there, World_.
# Exercise: Declaring variables
In this exercise, you will practice declaring variables.

To check the output of your code, please enter it into the text box provided and click the "Run" button. This will execute the code and display the resulting output.
## Tasks
1. Declare a new variable named `petDog` and give it the name `Rex`.
2. Declare a new variable named `petCat` and give it the name `Pepper`.
3. Console.log the `petDog` variable.
4. Console.log the `petCat` variable.
5. Console.log the text `"My pet dog's name is: "` and the `petDog` variable.
6. Console.log the text `"My pet cat's name is: "` and the `petCat` variable.
7. Declare another variable and name it `catSound`. Assign the string of `"purr"` to it.
8. Declare another variable and name it `dogSound`. Assign the string of `"woof"` to it.
9. Console.log the variable `petDog`, then the string `"says"`, then the variable `dogSound`.
10. Console.log the variable `petCat`, then the string `"says"`, then the variable `catSound`.
11. Reassign the value stored in `catSound` to the string `"meow"`.
12. Console.log the variable `petCat`, then the string `"now says"`, then the variable `catSound`.

Make sure to output all your variables. Feel free to play.

## Solutions
Here are the solutions to the previous exercise, which was to practice declaring variables.

**Please note:** The solutions presented here use single quotes and double quotes interchangeably to delimit pieces of text. This is done on purpose to illustrate that both ways of representing text are possible and acceptable so that you are aware of it. 
```js
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
var catSound = "meow";
console.log(petCat, "now says", catSound);
```
# Self review: Declaring variables
## Question 1
When you ran the following code, what was the output?
```js
var petDog = 'Rex'; // Task 1 solution
console.log(petDog);
```

A. petDog

B. No output

**C. Rex**

The correct answer is Rex. Explain: The value of the `petDog` variable will print out in the console.

## Question 2
When you ran the following code, what was the output?
```js
var petDog = 'Rex'; // Task 1 solution
console.log("My pet dog's name is: " + petDog);
```

**A. My pet dog's name is Rex**

B. My pet dog's name is petDog

The output my pet dog's name is Rex. Explain: The value of the `petDog` variable is appended to the  `"My pet dog's name is: "`  string and printed in the console.

## Question 3
When you ran the following code, what was the output?
```js
var petCat = 'Pepper'; // Task 2 solution
var catSound = "purr"; // Task 7 solution
console.log(petCat, "says", catSound);
```

A. purr says Pepper

**B. Pepper says purr**

The output is Pepper says purr. Explain: The 3 values passed to the console.log function are combined into a single string.
# Operators in depth
In this reading, you will learn about additional operators, operator precedence and operator associativity. I'll also provide you with some examples of logical operators.
## 1. Additional operators
- Logical AND operator: `&&`
- Logical OR operator: `||` 
- Logical NOT operator: `!` 
- The modulus operator: `%` 
- The equality operator: `==`
- The strict equality operator: `===`
- The inequality operator: `!=`
- The strict inequality operator: `!==`
- The addition assignment operator: `+=`
- The concatenation assignment operator: `+=` (it's the same as the previous one - more on that later)

**The logical AND operator in JavaScript: `&&`**
The **logical AND operator** is, for example, used to confirm if multiple comparisons will return true.

In JavaScript, this operator consists of two ampersand symbols together: `&&`.

Let's say you're tasked with coming up with some code that will check if the `currentTime` variable is between `9 a.m`. and `5 p.m`. The code needs to console.log `true` if `currentTime > 9` and if `currentTime < 17`.
```js
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
```

How does this code work?

First, on line one, I set the `currentTime` variable, and assign the value of 10 to it.

Next, on line two I console log two comparisons: 

`currentTime > 9` 

`currentTime < 17`

I also use the `&&` logical operator to join the two comparisons.

Effectively, my code is interpretted as the following:
```js
console.log(10 > 9 && 10 < 17);
```

The comparison of `10 > 9` will return `true`.

Also, the comparison of `10 < 17` will return `true`.

This means I can further re-write the line two of my solution as follows: 
```js
console.log(true && true);
```

In essence, this is how my code works.

Now, the question is, what will be the result of `console.log(true && true)`?

To understand the answer, you need to know the behavior of the `&&` logical operator.

The `&&` logical operator returns a single value: the boolean `true` or `false`, based on the following rules: 

- It returns `true` if both the values on its right and on its left are evaluated to `true` 
- It returns `false` in all the other instances

In other words: 

`console.log(true && true)` will output: `true` 

`console.log(true && false)` will output: `false` 

`console.log(false && true)` will output: `false` 

`console.log(false && false)` will output: `false`

The logical OR operator will always return `true`, except when both sides evaluate to `false`. In other words, for the logical OR operator to return `false`, the results of both comparisons **must** return false.

Going back to the example of checking if either `currentTime < 9` or `currentTime > 17`, this makes sense: the only time you will get `false` is when the value stored in the `currentTime` variable is greater than `9` and less then `17`.

**The logical NOT operator: `!`**
In JavaScript, the logical NOT operator's symbol is the exclamation mark: `!`.

You can think of the `!` operator as a switch, which flips the evaluated boolean value from `true` to `false` and from `false` to `true`.

For example if I assign the boolean value of `true` to the `petHungry` variable: 

`var petHungry = true;`

...then I can console log the fact that the pet is no longer hungry by using the `!` operator to flip the boolean value stored inside of the `petHungry` variable, like so:

`console.log('Feeding the pet');`

`console.log("Pet is hungry: ", !petHungry);`

`console.log(petHungry);`

This is the output of the above code:   
```txt
Pet is hungry: true
Feeding the pet
Pet is hungry: false
true
```

The reason for the changed output in the console is because you have flipped the value stored inside the `petHungry` variable, from `true` to `false`.

Notice, however, that the code on line five of the example above still outputs `true` - that's due to the fact that I didn't reassign the value of the `petHungry` variable.

Here's how I could permanently change the value stored in the `petHungry` variable from `true` to `false`: 

```js
var petHungry = true;
petHungry = !petHungry;
```

In this example, I first assign the value of `true` to the new variable of `petHungry`. Then, on line two, I assign the opposite value, the `!true` - read: not true - to the existing `petHungry` variable.

**The modulus operator: `%`**

The modulus operator is another mathematical operator in JavaScript. It returns the remainder of division.

To demonstrate how it works, imagine that a small restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guests.

How many guests will not be able to sit down in the restaurant?

You can use the modulus operator to solve this.
```js
console.log(22 % 5); // 2
```

The output is 2, meaning, when I divide 22 and 5, I get a 4, and the remainder is 2, meaning, there are 2 people who couldn't get a place in this restaurant.

**The equality operator, `==`**

The equality operator checks if two values are equal.

For example, this comparison returns `true`: `5 == 5`. Indeed, it is true that 5 is equal to 5.

Here's an example of the equality operator returning `false`: `5 == 6`. Indeed, it is true that 5 is not equal to 6.

Additionally, even if one of the compared values is of the number type, and the other is of the string type, the returned value is still `true`: `5 == "5"`. 

This means that the equality operator compares only the values, but not the types.

**The strict equality operator, `===`**

The strict equality operator compares for both the values and the data types.

With the strict equality operator, comparing `5 === 5` still returns `true`. The values on each side of the strict equality operator have the same value and the same type. However, comparing `5 == "5"` now returns `false`, because the values are equal, but the data type is different.

**The inequality operator, `!=`**

The inequality operator checks if two values are not the same, but it does not check against the difference in types.

For example, `5 != "5"` returns false, because it's false to claim that the number 5 is not equal to number 5, even though this other number is of the string data type.

**The strict inequality operator `!==`**

For the strict inequality operator to return `false`, the compared values have to have the same value and the same data type. 

For example,  `5 !== 5` returns `false` because it is false to say that the number 5 is not of the same value and data type and another number 5.

However, comparing the number 5 and the string 5, using the strict inequality operator, returns `true`.
```js
console.log(5 !== "5")
```

## 2. Using the `+` operators on strings and numbers
**Combining two strings using the `+` operator**

The `+` operator, when used with number data type, adds those values together.

However, the `+` operator is also used to join string data type together.

For example:
```js
"inter" + "net" // "internet"
"note" + "book" // "notebook"
```

If the `+` operator is used to join strings, then it is referred to as the _concatenation_ operator, and you'll say that it's used to _concatenate_ strings.

When used with numbers, the `+` operator is the **addition operator**, and when used with strings, the `+` operator is the **concatenation operator**.

**Combining strings and numbers using the `+` operator**

But what happens when one combines a string and a number using the `+` operator?

Here's an example:
```js
365 + " days" // "365 days"
12 + " months" // "12 months"
```

Here, JavaScript tries to help by converting the numbers to strings, and then **concatenating the number and the string together**, ending up with **a string value**.

The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". JavaScript _coerces_ a number value to a string value - so that it can run the `+` operator on disparate data types.

The process of coercion can sometimes be a bit unexpected.

Consider the following example:
```js
1 + "2"
```
What will be the result of `1 + "2"`?

Note that the value of `1` is of the number data type, and the value of `"2"` is of the string data type, and so JavaScript will coerce the number `1` to a string of `"1"`, and then concatenate it with the string of `"2"`, so the result is a string of `"12"`.

**The addition assignment operator, `+=`**

The addition assignment operator is used when one wants to accumulate the values stored in a variable.

Here's an example: You are counting the number of overtime hours worked in a week.

You don't have to specify the type of work, you just want to count total hours.

You might code a program to track it, like this:
```js
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9
```

You can simplify the above code by using the addition assignment operator, as follows:
```js
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9
```

Using the addition assignment operator reduces the lines of your code.

**The concatenation assignment operator, `+=`**

This operator's syntax is exactly the same as the addition assignment operator. The difference is in the data type used:

```js
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
```

**Operator precedence and associativity**

Operator precedence is a set of rules that determines which operator should be evaluated first.

Consider the following example:
```js
1 * 2 + 3
```

The result of the above code is 5, because the multiplication operator has precedence over the addition operator.

Operator associativity determines how the precedence works when the code uses operators with the same precedence.

There are two kinds: 

- left-to-right associativity
- right-to-left associativity

For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:

```js
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
```
# Exercise: Advanced use of operators
**Task 1: Using the logical && operator**

You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

1. Create a variable named `score` and set it to `8`
2. Use `console.log()` that includes the string `"Mid-level skills:"` and compares the `score` variable to above `0` and below `10` using the `&&` operator

The expected output in the console should be: `"Mid-level skills: true"`.

```js
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)
```
**Task 2: Using the logical || operator**

Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.

You need to code a new variable named `timeRemaining` and set it to `0`. You also need to code a new variable named `energy` and set it to `10`.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the `timeRemaining` variable is `0` or the value of the `energy` variable is `0`.

Complete the task using the following steps:

1. Declare the variable `timeRemaining`, and assign the value of `0` to it.
2. Declare the variable `energy`, and assign the value of `10` to it.
3. Console log the following parameters: `"Game over: "`, and `timeRemaining == 0 || energy == 0`

Note that the expected output in the console should be: `"Game over: true"`.
```js
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);
```

Try changing the `timeRemaining` variable to anything above `0` and then see how it affects the result.

**Task 3: Using the modulus operator, `%`, to test if a given number is odd**

You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:

1. The first variable, named `num1`,  should be assigned a number value of `2`.
2. The second variable, named `num2`, should be assigned a number value of `5`.
3. The third variable, named `test1`, should be assigned the calculation of `num1 % 2`. **Note:** executing this code will return a number.
4. The fourth variable, named `test2`, should be assigned the calculation of `num2 % 2`. **Note:** executing this code will also return a number.
5. The fifth variable, named `result1`, should be assigned the result of comparing if the number stored in the `test1` variable is not equal to `0`, in other words, this: `test1 == 0`.
6. The sixth variable, named `result2`, should be assigned the result of comparing if the number stored in the `test2` variable is not equal to `0`, in other words, `test2 == 0`.

Run console log two times after you've set the variables:

1. The first console log should have the following code between parentheses: `"Is", num1, "an even number?", result1`
2. The second console log should have the following code between parentheses: `"Is", num2, "an even number?", result2`

**Note:** The output to the console should be as follows:

`Is 2 an even number? true`

`Is 5 an even number? false`

```js
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
```

Try it yourself with different values to explore the modulus operator.

**Task 4: Add numbers using the + operator**

Console log the result of adding two numbers, `5` and `10`, using the `+` operator.

**Note:** This task should be completed on a single line of code. The output in the console should be `15`.

```js
console.log(5 + 10);
```

**Task 5: Concatenate numbers and strings using the + operator**

Code three variables:

1. The first variable should be a string with the following value: `"Now in "`. Name the variable `now`.
2. The second variable should be a number with the value: `3`. Name the variable `three`.
3. The third variable should a string with the following value: `"D!"`. Name the variable `d`.
4. Console log the following code: `now + three + d`.

**Note:** The expected output should be: `"Now in 3D!"`.

```js
var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d);
```

**Task 6: Use the `+=` operator to accumulate values in a variable**

Code a new variable and name it `counter`, assigning it to the value of `0`.

On the next line, use the `+=` operator to increase the value of counter by `5`.

On the next line, use the `+=` operator to increase the value of counter by `3`.

On the fourth line, console log the value of the counter variable.

**Note:** The output value should be `8`.
```JS
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
```

## Solutions
**Task 1 Solution**
```js
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)

```

**Task 2 Solution**
```js
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

```
**Task 3 Solution**
````js
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

````
**Task 4 Solution**
```js
console.log(5 + 10); // 15

```
**Task 5 Solution**
```js
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"
```

**Task 6 Solution**
```js
var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8

```
# Self Review - Advanced use of operators
## Question 1
Did you complete the Advanced use of operators exercise?

**A. Yes**

B. No

Explain: Well done on completing the exercise!

## Question 2
Did you find any part of the exercise on the Advanced Use of Operators difficult?

A. Yes

**B. No**

Thank you for completing the Advanced Use of Operators exercise.

## Question 3
Would you say that you are able to explain, in your own words, how logical operators &&, ||, and ! work in JavaScript?

**A. Yes**

B. No

Explain: Great! Being able to describe newly-learned concepts in your own words is a reflection of a better understanding of the subject matter.
# Knowledge check: Welcome to Programming
## Question 1
What is the data type of the value "Hello, World"?

**A. string**

B. number

C. boolean

The correct answer is string. Explain: The value of "Hello, World" is of the string data type.

## Question 2
What is the data type of the value  true ?

A. string

B. number

**C. boolean**

The correct answer is boolean. Explain: The values of  true  and `false are of the boolean data type.

## Question 3
What is the % operator?

**A. The modulus operator**

B. The division operator

C. The concatenation operator

Explain: The modulus operator is represented using the % symbol.

## Question 4
What happens when you use the + operator on two strings?

**A. They get joined into a single string**

B. You can't use the + operator on two strings

Explain: Using the + operator on two strings joins the strings together.

## Question 5
What is the operator symbol && represent in JavaScript?

A. The logical OR operator

**B. The logical AND operator**

C. The logical NOT operator

Explain: In JavaScript, the && is the logical AND operator.

## Question 6
What happens when you use the + operator on a string and a number?

A. Nothing - you can't use the + operator on different data types

**B. They get joined together as if both of them were strings**

Explain: Using the + operator on a string and a number joins them together as if both of them were strings.

## Question 7
What is the value of  i  after the following code runs?

```js

 var i = 7;
 i += 1;
 i += 2;

```

A. 7

B. 8

C. 9

**D. 10**

The correct answer is 10. Explain: 1 is added to  i  and the result is stored in  i . The value is now 8. Then, 2 is added to  i  and the result is stored in  i . The value is now  10 .
# Javascript improvements
In this reading, you will learn about the history of JavaScript and the importance of ECMA (European Computer Manufacturers Association) and ECMAScript.  

JavaScript is a programming language that had humble beginnings.

It was built in only 10 days in 1995 by a single person, Brendan Eich, who was tasked with building a simple scripting language to be used in version 2 of the Netscape browser. It was initially called LiveScript, but since the Java language was so popular at the time, the name was changed to JavaScript - although Java and JavaScript are in no way related.

For the first few years, after it was built, JavaScript was a simple scripting language to add mouseover effects and other interactivity. Those effects were being added to webpages using the <script> HTML element.

Inside each of the script elements, there could be some JavaScript code. Due to the rule that HTML, CSS, and JavaScript must be backward compatible, even the most advanced code written in JavaScript today ends up being written between those script tags.

Over the years, JavaScript grew ever more powerful, and in recent times, it's continually touted as among the top three commonly used languages.

In 1996 Netscape made a deal with the organization known as ECMA (European Computer Manufacturers Association) to draft the specification of the JavaScript language, and in 1997 the first edition of the ECMAScript specification was published.

ECMA publishes this specification as the ECMA-262 standard.

You can think of a standard as an agreed-upon way of how things should work. Thus, ECMA-262 is a standard that specifies how the JavaScript language should work.

There have been 12 ECMA-262 updates - the first one was in 1997.

JavaScript as a language is not a completely separate, stand-alone entity. It only exists as an implementation. This implementation is known as a JavaScript engine.

Traditionally, the only environment in which it was possible to run a JavaScript engine, was the browser. More specifically, a JavaScript engine was just another building block of the browser. It was there to help a browser accomplish its users' goal of utilizing the internet for work, research, and play.

So, when developers write JavaScript code, they are using it to interact with a JavaScript engine. Put differently, developers write JavaScript code so that they can "talk to" a JavaScript engine.

Additionally, the JavaScript engine itself comes with different ways to interact with various other parts of the browser. These are known as Browser APIs.

Thus, the code that you write in the JavaScript programming language allows you to: 1. Interact with the JavaScript engine inside of the browser 2. Interact with other browser functionality that exists outside of the JavaScript engine, but is still inside the browser.

Although traditionally it was possible to interact with the JavaScript engine only inside of the browser, this all changed in 2009, when Node.js was built by Ryan Dahl.

He came up with a way to use a JavaScript engine as a stand-alone entity. Suddenly, it was possible to use JavaScript outside of the browser, as a separate program on the command line, or as a server-side environment.

Today, JavaScript is ubiquitous and is running in browsers, on servers, actually, on any device that can run a JavaScript engine.
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

These resources provide some more in-depth information on the topics covered in this module.

[Mozilla Developer Network Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
 

[Mozilla Developer Network Operator Precedence and Associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
 

[JavaScript Primitive Values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 

[ECMA262 Specification](https://tc39.es/ecma262/)
 

[jQuery Official Website](https://jquery.com/)
 

[React Official Website](https://reactjs.org/)
 

[StackOverflow Developer Survey 2021 Most Popular Technologies](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies)

[Emojis](http://unicode.org/emoji/charts/full-emoji-list.html#1f600)