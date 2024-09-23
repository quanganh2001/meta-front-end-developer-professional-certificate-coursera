# Conditional examples
In this reading, you will learn when to use the `if else` statement and when to use the `switch` statement.

Both `if else` and `switch` are used to determine the program execution flow based on whether or not some conditions have been met.

This is why they are sometimes referred to as **flow control statements**. In other words, they control the flow of execution of your code, so that some code can be skipped, while other code can be executed.

At the heart of both flow control structures lies the evaluation of one or more conditions.

Generally, `if else` is better suited if there is a binary choice in the condition.

For example, in plain English: _if it's sunny, wear sunglasses. Otherwise, don't._

In this case, using an if statement is an obvious choice.

When there are a smaller number of possible outcomes of truthy checks, it is still possible to use an `if else` statement, such as:

```js
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}
```

However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is easier less verbose. Being easier to read, it is easier to follow the logic, and thus reduce cognitive load of reading multiple conditions.

Nevertheless, this is not a rule set in stone. It is simply a stylistic choice.

To reinforce this point, here's an example of the earlier `if else` conditional statement, using the switch syntax: 
```js
//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}
```
# Exercise: Practice conditional statements
## Introduction
In this exercise, you will practice working with `if else` statements. By the end of this exercise, you will be able to write an `if else` statement that determines your source of income based on your age. You will also be able to write a `switch` statement that determines your evening routine based on the day of the week.
## Complete the following steps to create: Are You Old Enough? 
1. Declare a variable age using the `var` keyword and set it to the number **10**.
2. Add an `if` statement that checks if the value of the `age` variable is greater than or equal to the number **65**. Inside the `if` block, console.log the sentence: "You get your income from your pension".
3. Add an "`else if`", where you'll check if the value of the age is less than **65** and greater than or equal to **18**. Inside this "`else if`" block, type "console.log" and then "Each month you get a salary".
4. Add another "`else if`", and this time check if the value of the age is under **18**. Inside the "`else if`" block, "type console.log" and then "You get an allowance".
5. Add an "`else`" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.

## Code the _days of the week_ program as a switch statement

1. On the next line, define a new variable, name it `day`, and set its value to `"Sunday"`
2. Start coding a `switch` statement, passing the `day` variable as the expression to evaluate.
3. Inside the `switch`, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
4. At the very bottom of the `switch` statement, add the default case and add a console.log('There is no such day').
5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

## Tips
- If you need to make sure that multiple conditions are true in an if statement, you can do so using the `&&` operator
- In JavaScript, the correct syntax of the "greater than or equal to" operator is: `>=`.
- Don't forget to add a break at the very end of each case in a switch statement.

**Note: You can find solutions in a separate reading (following this one)**

**My solution**

```js
var day = "Sunday"

switch (day) {
    case 'Monday':
        console.log("Wake up")
        break;
    case 'Tuesday':
        console.log("Cleaning")
        break;
    case 'Wednesday':
        console.log("Go to school Physics")
        break;
    case 'Thursday':
        console.log("Watch TV")
        break;
    case 'Friday':
        console.log("Go to school deep learning")
        break;
    case 'Saturday':
        console.log("Playing video games")
        break;
    case 'Sunday':
        console.log("Watching football matches")
        break;
    default:
        console.log("There is no such day")
        break;
}
```
# Solution: Practice conditional statements
## Solutions to the task - Are you old enough?
```js
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}
```
## Solutions to the Days of the Week program
```js
var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}
```
# Self review: Practice conditional statements
## Question 1
Did you complete the Practice conditional statements exercise?

_A. Yes_

B. No

## Question 2
Were there any parts of the Practice conditional statements exercise that you found difficult to complete?

A. Yes

_B. No_

## Question 3
Would you say that you are able to explain, in your own words, how an if statement and a switch statement work in JavaScript?

_A. Yes_

B. No
# Exercise: Repetitive tasks with loops
In this exercise, you will practice writing "for" and "while" loops.
## Task 1
Write a "`for`" loop that will perform exactly the same repetitive code as this:
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
```
**My solution:**
```js
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Counting completed")
```
## Task 2
Write a "`for`" loop that will perform exactly the same repetitive code as this:
```js
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
```
**My solution:**
```js
for (var i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Counting finished")
```
## Task 3
Write a "`while`" loop that will perform exactly the same repetitive code as this:
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
```
**My solution:**
```js
var i = 1;
while (i <= 5) {
    console.log(i)
    i++
}

console.log('Counting completed')
```
**Note**: Name your increment variable `i`. Update the variable in the while loop using `i++`.
## Task 4
Write a "`while`" loop that will perform exactly the same repetitive code as this:
```js
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
```
**My solution:**
```js
var i = 5;
while (i > 0) {
    console.log(i)
    i--
}

console.log('Counting finished')
```

**Note**: In the while loop, decrement the value of `i` using: `i = i - 1`.

## Task 5
Write a "`while`" loop that will perform exactly the same repetitive code as this:
```js
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
```
**My solution:**
```js
var i = 2018;
while (i <= 2022) {
    console.log(i)
    i++
}
```
# Repetitive tasks with loops (solutions)
Here are the solutions to the `for` and `while` loop exercise.
## Task 1
```js
for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');
```
## Task 2
```js
for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');
```
## Task 3
```js
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');
```
## Task 4
```js
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');
```
## Task 5
```js
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
```
# Self review: Repetitive tasks with loops
## Question 1
Did you complete the Repetitive tasks with loops exercise?

_A. Yes_

B. No

## Question 2
Were there any parts of the _Repetitive tasks with loops_ exercise that you found difficult to complete?

A. Yes

_B. No_

## Question 3
Would you say that you are able to explain, in your own words, what does the i++ do?

_A. Yes_

B. No

## Question 4
Are you able to explain, in your own words, the syntax of a for loop in JavaScript?

_A. Yes_

B. No
# Loops and nested loops
Let's say I want to output a custom multiplication table.

This is a perfect use case scenartio for nested loops.

The outer loop's counter variable will act as the first number to be multiplied, and the inner loop counter variable will act as the second number to be multiplied.

Here's my code:

```js
//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}
```

The output of the above code will be:

```txt
0
1
```

This means that my for loop starts at 0 and stops after 1.

So now I can code what will later become the inner loop, whose counter variable will be the second number in this multiplication:
```js
//single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}
```

This time, the output is:
```txt
0
1
2
3
4
5
6
7
8
9
```

Now's the time to combine the first and the second loop:
```js
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
```

Now that I'm nesting the second for loop inside the first one, and that I'm console logging the values of both counter variables as the loops are progressing, the output looks like this:

```txt
0, 0
0, 1
0, 2
0, 3
0, 4
0, 5
0, 6
0, 7
0, 8
0, 9
1, 0
1, 1
1, 2
1, 3
1, 4
1, 5
1, 6
1, 7
1, 8
1, 9
```
Now that I have a list of all the numbers that will be multiplied, having the actual result of this multiplication is as easy as updating the `console.log()` call:
```js
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
```

The output now is:
```txt
0 times 0 equals 0
0 times 1 equals 0
0 times 2 equals 0
0 times 3 equals 0
0 times 4 equals 0
0 times 5 equals 0
0 times 6 equals 0
0 times 7 equals 0
0 times 8 equals 0
0 times 9 equals 0
1 times 0 equals 0
1 times 1 equals 1
1 times 2 equals 2
1 times 3 equals 3
1 times 4 equals 4
1 times 5 equals 5
1 times 6 equals 6
1 times 7 equals 7
1 times 8 equals 8
1 times 9 equals 9
```
This makes for some very interesting combinations.

For example, I can make a custom division table:

```js
//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
```

Here's the output of the above nested loop:
```txt
100 divided by 10 equals 10
100 divided by 5 equals 20
90 divided by 10 equals 9
90 divided by 5 equals 18
80 divided by 10 equals 8
80 divided by 5 equals 16
70 divided by 10 equals 7
70 divided by 5 equals 14
60 divided by 10 equals 6
60 divided by 5 equals 12
50 divided by 10 equals 5
50 divided by 5 equals 10
40 divided by 10 equals 4
40 divided by 5 equals 8
30 divided by 10 equals 3
30 divided by 5 equals 6
20 divided by 10 equals 2
20 divided by 5 equals 4
```
Feel free to try out some other combinations of nested loop iterations, and see what kind of output you'll get.
# Uses of loops
In this reading, we'll discuss, at a very high level, the reasons to use loops in JavaScript.

Note that we will keep this discussion high-level because there are multiple "pieces of the puzzle" that are still missing from your understanding at this point.

This is why we will not get bogged-down in the detail of syntax and implementation, but instead, simply discuss how and why loops are used in everyday work of JavaScript developers.

Consider the following example: You work as a developer for an online store.

The store is selling letter cubes for toddlers, and the entire "Shop now" section of the site is organized in a layout where each cube on sale is displayed in a simple card component, with an image of the cube, the letter it teaches, a short description, and the price.

Cards are organized in rows, so that each row contains three cards - three different letters.

Each card is a preview of that specific letter cube on sale, and it's also a link to an entire page, dedicated to providing more info about the cubes, their teaching value, and providing the visitor with a way to complete their checkout process.

Now, here's a quick question: where would loops fit into displaying this grid of cards showcasing the letter cubes on sale?

To understand just how this works, let me code a basic prototype of how this might work.

Since you still don't have enough knowledge to display website layouts in browser with the help of JavaScript, for now I'll have to settle for using a simple string and the console.

Still, this should be a fun exercise.
```js
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
```

_**Note: In order to have the styles applied, try running this code snippet in your browser's console.**_
That's it, with this simple code, the output in the console shows each letter on a separate line, styled like a letter cube for toddlers.

The code itself should be mostly familiar, except for the `cubes.length` and the `cubes[i]` syntax.

Without getting into too many details, here are both code snippets explained as simple as possible.

The `cubes.length` returns a number. Since `cubes` is a string of characters the `cubes.length` gives me the length of the string saved in the variable.

So this gives me the number 7, effectively making my for loop look like this:

```js
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
```
<img width="1178" alt="80UV44AjRfe3wSiZ5hrO3Q_cc31ca26763041eb84d824c6facbeca1_console-output-1" src="https://github.com/user-attachments/assets/66a8697b-c130-4b46-b537-20ca7c4a3b8b">

The second piece of code that's new here is the `cubes[i]` snippet.

This simply targets each individual letter in the loop, based on the current value of the `i` variable.

In other words, `cubes[i]`, when `i` is equal to `0`, is: `A`.

Then, `cubes[i]`, when `i` is equal to `1`, is: `B`.

This goes on for as many loops my for loop runs - and this is determined by the `cubes.length` value.

It's also very versatile, since, if I, for example, decided to change the length of the `cubes` string, I would not have to update the condition of `i < cubes.length`, because it gets automatically updated when I change the length of the `cubes` string.

There are some other ways to store data in JavaScript apps that you haven't heard about.

But we can use the same approach with those other kinds of data, to achieve results that essentially work on the same principle as the one just described.

Using loops is the essence of the approach taken in developing many different pieces of functionality in software today.

**Some additional examples**

If I'm coding an email client, I will get some structured data about the emails to be displayed in the inbox, then I'll use a loop to actually display it in a nicely-formatted way.

If I'm coding an e-commerce site selling cars, I will get a source of nicely-structured data on each of the cars, then loop over that data to display it on the screen.

If I'm coding a calendar online, I'll loop over the data contained in each of the days to display a nicely-formatted calendar.

There are many, many other examples of using loops in code.

Using loops with data that is properly formatted for a given task is a crucial component of building software.

In the lessons that follow, we'll learn about different ways of grouping related data and of displaying it on the screen using JavaScript.

When combined with what you've already learned about loops, this gives you the skills to build various kinds of user interfaces where there is repetitive information.

Some more specific examples include:

- looping over blog post titles in some structured data, and displaying each blog post title on a blog home page
- looping over social media posts in some structured data, and displaying each social media post based on some conditions
- looping over some structured data on clothing available for sale in an online clothing store, and displaying relevant data for each item of clothing

Now you understand the importance of knowing how to work with loops in JavaScript. In the upcoming lessons, we'll learn other relevant information which will allow you to be able to do this.

# Exercise: Working with conditionals and loops
## Exercise 1
In this exercise, you will create the code for a `for loop`, using the counter variable named `i` starting from **1**.

To make the counter increment by 1 on each loop, you will use `i++`

The exit condition for the for loop should match the output given below.

Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of _**i**_ is _**1**_. If it is, your code will console log the string _**"Gold medal".**_
2. Next, I will check if the value of _**i**_ is _**2**_. If it is, your code will console log the string _**"Silver medal".**_
3. Then, your code will check if the value of _**i**_ is _**3**_. If it is, it will console log the string _**"Bronze medal".**_
4. For all the remaining values of _**i**_, your code will console log just the value of _**i**_.

**Note:** The expected console log of the entire code should be as follow.

```txt
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
```
**My solution:**

```js
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}
```
## Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

**Note:** You'll need three separate cases for the three medals, and a default case for all other values of the i variable.

**My solution:**

```js
for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
    }
}
```
# Solution: Working with conditionals and loops
## Answer 1
```js
for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}
```
## Answer 2
```js
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}
```
# Self review: Working with conditionals and loops
## Question 1
Did you complete the Working with conditionals and loops exercise?

_A. Yes_

B. No

## Question 2
Were there any parts of the Working with conditionals and loops exercise that you found difficult to complete?

A. Yes

_B. No_

## Question 3
Would you say that you are able to explain, in your own words, how to code for loops and switch statements in JavaScript?

_A. Yes_

B. No
# Knowledge check - Conditionals and loops
## Question 1
Based on the following code, what will print out when the variable  i  has the value  3 ?
```js

  if(i < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

```

_A. Hello_

B. Goodbye

The output is Hello. Explain: The code inside the if statement will execute because the condition  i < 5  is true.

## Question 2
Based on the following code, what will print out when the variable  i  has the value  1 ?

```js

  if(i == 0 && i == 1) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

```

A. Hello

_B. Goodbye_

The output is Goodbye. Explain: The condition checks if  i  is equal to  0  AND  1 . Since it is not possible for  i  to be both values at the same time, the result of this check is false. Therefore, the code inside the else statement will run.

## Question 3
How many times will the following code print the word 'Hello'?
```js

  for (i = 0; i < 2; i++) {
      console.log("Hello");
  }

```

A. 1

_B. 2_

C. 3

D. 4

The times will print the word 'Hello' is 2. Explain: The loop will run twice based on the condition  i < 2 .

## Question 4
How many times will the following code print the word 'Hello'?

```js

  var i = 0;
  while(i < 3) {
    console.log("Hello");
    i++;
  }

```

A. 1

B. 2

_C. 3_

D. 4

The times will the following code print the word 'Hello' is 3. Explain: The loop will run 3 times based on the condition  i < 3 .

## Question 5
How many times will the following code print the word 'Hello'?

```js

  for (i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++) {
          console.log("Hello");
      }
  }

```

A. 2

B. 3

C. 4

_D. 6_

Explain: The inner loop will be run twice by the outer loop. Since the inner loop runs 3 times, the  console.log  will be called 6 times in total.

## Question 6
Based on the following code, what will print out when the variable  i  has the value  7 ?

```js

  if(i <= 5) {
    console.log("Hello");
  } else if(i <= 10) {
    console.log("Goodnight");
  } else {
    console.log("Goodbye");
  }

```

A. Hello

_B. Goodnight_

C. Goodbye

The output is Goodnight. Explain: The code inside the else if statement will execute. The first condition fails because the value of  i  is greater than 5. The second condition succeeds because the value of  i  is less than 10.

## Question 7
Based on the following code, what will print out when the variable  i  has the value  3 ?

```js

  switch(i) {
    case 1:
      console.log("Hello");
      break;
    case 2:
      console.log("Goodnight");
      break;
    case 3:
      console.log("Goodbye");
      break;
  }

```

A. Hello

B. Goodnight

_C. Goodbye_

The output is Goodbye. Explain: The code for case  3  will run.

## Question 8
Based on the following code, what will print out when the variable  i  has the value  3 ?

```js

  if(i == 2 || i == 3) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

```

_A. Hello_

B. Goodbye

The output is Hello. Explain: The condition checks if  i  is equal to  2  OR  3 . Since the value of  i  is  3 , the code inside the if statement will run.
# Module quiz: Introduction to JavaScript
## Question 1
You can run JavaScript in a web browser's devtools console.

_A. true_

B. false

It is true statement. Explain: The devtools console is useful for running JavaScript code.

## Question 2
Which of the following are valid comments in JavaScript? Select all that apply.

- [ ] `\ Comment 1`
- [X] `// Comment 2`
- [ ] 
````js
##
## Comment 3
##
````
- [X]
```js

  /*
   * Comment 4
   */

```

Explain: /*  and  */  are define the beginning and end of multi-line comments.

## Question 3
Which of the following are valid data types in JavaScript? Select all that apply.

- [X] string
- [X] numbers
- [X] booleans
- [X] null

Explain: The string data type represents a sequence of characters in JavaScript. Numbers represent both integer and decimal point numeric values. The boolean data type has one of two values; true or false. The null data type represents the absense of a value.

## Question 4
Which of the following is the logical AND operator in JavaScript?

A. `&`

_B. `&&`_

C. `||`

D. `|\`

Explain: && is the logical AND operator used for condition checks.

## Question 5
Which of the following is the assignment operator in JavaScript?

_A. `=`_

B. `==`

C. `===`

Explain: The = symbol is used to assign to variables in JavaScript.

## Question 6
How many times will the following code print the word 'Hello'?

```js

  for(var i = 0; i <= 5; i++) {
    console.log("Hello");
  }

```

A. 4

B. 5

_C. 6_

The correct answer is 6. Explain: 'i' starts with the value '0'. The condition checks if 'i' is less than or equal to '5'. Each loop increments 'i' by '1'. This means that the loop will run 6 times.

## Question 7
What will print out when the following code runs?

```js

  var i = 3;
  var j = 5;

  if(i == 3 && j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

```

A. Hello

_B. Goodbye_

C. Nothing

The output is Goodbye. Explain: The condition checks if 'i' is equal to '3' AND if 'j' is less than '5'. Since the result of this condition is false, the code inside the else statement will run.

## Question 8
What will print out when the following code runs?

```js

  var i = 7;
  var j = 2;

  if(i < 7 || j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

```

_A. Hello_

B. Goodbye

C. Nothing

The output is Hello. Explain: The condition checks if 'i' is less than '7' OR if 'j' is less than '5'. Since the result of this condition is true, the code inside the if statement will run.

## Question 9
The result of `!false` is:

_A. true_

B. undefined

The result is true. Explain: When you add the NOT operator before a boolean value, the returned value is the opposite of the boolean value. Thus, !false is evaluated to true, and !true is evaluated to false.

## Question 10
What does the operator symbol || represent in JavaScript?

A. The logical AND operator

B. The logical NOT operator

_C. The logical OR operator_

Explain: In JavaScript, the || is the logical OR operator.
# Additional resources for Conditionals and Loops
Here is a list of resources that may be helpful as you continue your learning journey.

[Comparison Operators](https://www.javascripttutorial.net/javascript-comparison-operators/)
 

[Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
 

[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
 

[Conditional statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

In JavaScript, there is also a shorthand version of writing a conditional statement, known as the conditional (ternary) operator: 
[Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)