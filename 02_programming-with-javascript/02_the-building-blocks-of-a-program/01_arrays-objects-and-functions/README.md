# Building and calling functions
In this reading, you will learn how to build and call a function. The purpose of this reading is to provide you with an example of function declaration (build) and function invocation (call). In the next lesson you will be writing the code.

By the end of this reading you should be able to:

- Code simple functions that can accept an array and iterate through it  

Let's start with giving our function declaration a name:
```js
function listArrayItems(arr) {
    // ... code to be added ...
}
```
So, I've declared a `listArrayItems` function, and I've set it up to accept a single parameter, `arr` - which stands for an array.

Now, I'll need to code a for loop to loop over an array.

An covered in previous lessons in this course, a for loop needs the following information:

1. the starting loop counter name value as a temporary variable `i`
2. the exit condition (the maximum value of the loop counter variable `i`, above which the loop no longer runs)
3. how to update the value of `i` after each loop

Here's the information I'll use in this function declaration:1. The loop's starting counter will be `0`. The reason for setting it to zero is due to the fact that arrays are also counted from zero. 

This means that I'll have a one-to-one mapping of the current value of the `i` variable at any given time, corresponding to the same index position of any item in the `arr` array 2. 

The for loop's exit condition is when the value of `i` is equal or greater than `arr.length`. 

Since the `arr.length` counts the number of items in the array from one, and the array items are indexed from zero, this effectively means that as soon as `i` is equal to `arr.length`, the loop will finish and any other code after it will be run. 

This practically means that the exit condition for this for loop will be `i < arr.length` returning false. 

In other words, as long as `i < arr.length` is true, this for loop will continue to run. 3. To make sure that none of the items in the `arr` array are skipped, I have to increase the value of `i` by `1` after each loop.

Now that I know exactly how my for loop should behave, I can add it to my `listArrayItems()` function:

```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        // ... code pending here ...
    }
}
```
Now all that I have left to decide is how I want to output each item from the received `arr` array.

It can be as simple as console loggint the array item index of the current value of `i`:
```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}
```
If I now invoke the `listArrayItems` function, I can, for example, give it the following array of colors:
```js
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once
```
The output will be:
```txt
red
orange
yellow
green
blue
purple
pink
```
I can update the output any way I like. For example, here are my `arr` items with a number in front of each item:
```js
//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```
Now the output of the above code will be as follows:  
```txt
0 'red'
1 'orange'
2 'yellow'
3 'green'
4 'blue'
5 'purple'
6 'pink'
```
To start the count from one instead of zero, I can update my function declaration as follows:
```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
```
Invoking the above, updated, function declaration on my `colors` array, will now result in the following output:
```txt
1 'red'
2 'orange'
3 'yellow'
4 'green'
5 'blue'
6 'purple'
7 'pink'
```
I can even add one or more conditions, such as:
```js
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
```
Now I'm adding control flow right inside my function, based on whether a specific array member matches a specific value - in this case the string "red".

Invoking my newest updated version of the `listArrayItems` function on the `colors` array will now result in the following output:
```txt
0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink'
```
# Exercise: Practicing with functions
Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word.

**Task 1:**

Write a function named **_letterFinder_** that accepts two parameters: **_word_** and **_match_**.

**Task 2:**

Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the **_word_** parameter.

**Task 3:**

Add an if statement inside the for loop whose condition works as follows:

1. Access each of the letters inside the passed in _**word**_ using the counter variable, with **_word[i]_**. 
2. Check if the current _**word[i]**_ is equal to the value of **_match_**.

**Task 4:**

console.log the following inside the body of the if statement: _**console.log('Found the',match,'at',i).**_

**Task 5:**

Write the else condition. Here you'll just console log the following: _**console.log('---No match found at', i).**_

**Task 6:**

Call the _**letterFinder**_ and pass it as its first argument as the string **_"test"_** and as its second argument, the string **_"t"_**.

Your output should be the following:

```txt
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
```

**My solution:**

```js
const letterFinder = (word, match) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
```
# Solution: Practicing with functions
## Task 1
```js
// A function that accepts two parameters
function letterFinder(word, match) {

}

```
## Task 2
```js
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        //this loop exists when i is equal to the length of the word
    }
}

```
## Task 3
```js
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
        }
    }
}

```
## Task 4
```js
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        }
    }
}

```
## Task 5
```js
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

```
## Task 6
```js
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

```
# Self review: Practicing with functions
## Question 1
Did you complete the Practicing with functions exercise?

_A. Yes_

B. No

## Question 2
Were there any parts of the _Practicing with functions_ exercise that you found difficult to complete?

A. Yes

_B. No_

## Question 3
Would you say that you are able to explain, in your own words, how to code functions with loops inside of them?

_A. Yes_

B. No
# Object Literals and the Dot Notation
By the end of this reading, you'll be able to:
- Explain one of the three common ways to build objects (using the object literal notation)
- Outline the common way to add new properties to objects (or update existing properties) using the dot notation

## Object literals and the dot notation
One of the most common ways of building an object in JavaScript is using the object literal syntax: `{}`.

To be able to access this object literal, it is very common to assign it to a variable, such as:
```js
var user = {}; //create an object
```
Now an object literal is assigned to the variable `user`, which means that the object it is bound to can be extended and manipulated in a myriad of ways.

Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties, delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lession.

Here's one such previously built object:
```js
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
```
The beauty of this syntax is that it's so easily readable.

It essentially consists of two steps:

1. Declaring a new variable and assigning an object literal to it - in other words, this: `var assistantManager = {}` 

2. Assigning the values to each of the object's keys, using the assignment operator, `=`

Notice that it's very easy to build any kind of an object in JavaScript using this example syntax.

For example, here's a `table` object:
```js
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
```
To access the `table` object, I can simply console log the entire object:
```js
console.log(table);//display the object in the developer console
```
The returned value is the entire `table` object:
```js
{legs: 3, color: 'brown', priceUSD: 100}
```
Additionally, I can console log any individual property, like this:
```js
console.log(table.color); // 'brown'
```
Now that I have this "syntax recipe", I can build any other object in a similar way:
```js
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
```
An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:
```js
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```
Additionally, nothing is preventing me from combining the two approaches. For example:
```js
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
```
This flexbility additionally means that I can update already existing properties, not just add new ones:
```js
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```
# Object Literals and the Brackets Notation
By the end of this reading, you'll be able to:

- Explain how to build objects using the brackets notation
- Explain that with the brackets notation you can use the space character inside keys, since property keys are strings
- Explain that the keys inside the brackets notation are evaluated

## Object literals and the brackets notation
There is an alternative syntax to the dot notation I used up until this point.

This alternative syntax is known as _the brackets notation._

To understand how it works, it's best to use an example, so I'll go through the process of coding the `house2` object again, in the same way that I did with the dot notation, only this time, I'll use the brackets notation.
```js
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```

Note that using the brackets notation, I essentially just wrap each property's key **as a string**, inside either the single or double quotes - just like with regular strings.

Then I wrap the entire property key into an opening and a closing square bracket.

That's essentially all there is to it.

I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:

```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
```

For the time being, this is probably enough information on object creation.

Before I discuss the topic of arrays and objects, let me just give you another important piece of information about the brackets notation.

With the brackets notation, I can add space characters inside property names, like this:

```js
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
```

Additionally, I can add numbers (as the string data type) as property keys:

```js
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```

However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.

To understand what that means, consider the following example:

```js
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
```

The above code will result in the following output:
```txt
100
200
red
```

Using the fact that brackets notation can evaluate expressions, I accessed the `arrOfKeys[i]` property on the `drone` object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

The value of `i` was `0` 
The value of `arrOfKeys[i]` was `arrOfKeys[0]`, which was "`speed`" 
Thus, `drone[arrOfKeys[i]]` was evaluated to `drone["speed"]` which is equal to `100`

This allowed me to loop over each of the values stored inside the `drone` object, based on each of its properties' keys.
# Arrays are Objects
By the end of this reading, you'll be able to:
- Explain that arrays are objects, with their own built-in properties and methods
- Outline the common way to extend arrays using the push() method
- and explain how to trim the last member of an array using the pop() method

## Arrays are objects
In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the `push()` and the `pop()` methods.

To add new items to an array, I can use the `push()` method:

```js
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
```

To remove the last item from an array, I can use the `pop()` method:
```js
fruits.pop();
console.log(fruits); // ['apple']
```

Tying into some earlier lessons in this course, I can now build a function that takes all its arguments and pushes them into an array, like this:
```js
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
```
I can now call the `arrayBuilder()` function, for example, like this:
```js
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
```
Even better, I don't have to console log the newly built array.

Instead, I can return it:
```js
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
```
Additionally, I can save this function call to a variable.

I can name it anything, but this time I'll use the name: `simpleArr`.

```js
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
```

And now I can console.log the values stored in `simpleArr`:
```js
console.log(simpleArr); // ['apple','pear','plum']
```
# Math object cheat sheet
JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

By the end of this reading, you'll be able to:

- Outline the built-in properties and methods of the Math object
## Number constants
Here are some of the built-in number constants that exist on the Math object:
- The PI number: `Math.PI` which is approximately 3.14159.
- The Euler's constant: `Math.E` which is approximately 2.718
- The natural logarithm of 2: `Math.LN2` which is approximately 0.693
## Rounding methods
These include:
- `Math.ceil()` - rounds up to the closest integer
- `Math.floor()` - rounds down to the closest integer
- `Math.round()` - rounds up to the closest integer if the decimal is `.5` or above; otherwise, rounds down to the closest integer
- `Math.trunc()` - trims the decimal, leaving only the integer
## Arithmetic and calculus methods
Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the `Math` object: 

- `Math.pow(2,3)` - calculates the number `2` to the power of `3`, the result is `8` 
- `Math.sqrt(16)` - calculates the square root of `16`, the result is `4` 
- `Math.cbrt(8)` - finds the cube root of `8`, the result is `2` 
- `Math.abs(-10)` - returns the absolute value, the result is `10` 
- Logarithmic methods: `Math.log()`, `Math.log2()`, `Math.log10()` 
- Return the minimum and maximum values of all the inputs: `Math.min(9,8,7)` returns `7`, `Math.max(9,8,7)` returns `9`.
- Trigonometric methods: `Math.sin()`, `Math.cos()`, `Math.tan()`, etc.
# String cheat sheet
By the end of this reading, you'll be able to:
- Identify examples of String functions and explain how to call them

In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings.

For all the examples, I'll be using either one or both of the following variables:
```js
var greet = "Hello, ";
var place = "World"
```

Note that whatever string properties and methods I demo in the following examples, I could have ran it on those strings directly, without saving them to a variable such as the ones I named `greet` and `place`.

In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the `length` property, which is used like this:

```js
greet.length; // 7
```

To read each individual character at a specific index in a string, starting from zero, I can use the `charAt()` method:
```js
greet.charAt(0); // 'H'
```
The `concat()` method joins two strings:
```js
"Wo".concat("rl").concat("d"); // 'World'
```
The `indexOf` returns the location of the first position that matches a character:
```js
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
```
The `lastIndexOf` finds the last match, otherwise it works the same as `indexOf`

The `split` method chops up the string into an array of sub-strings:
```js
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```
There are also some methods to change the casing of strings. For example:
```js
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```
Here's a list of all the methods covered in this cheat sheet:

- `charAt()`
- `concat()`
- `indexOf()`
- `lastIndexOf()`
- `split()`
- `toUpperCase()`
- `toLowerCase()`
# Exercise: Creating arrays and objects
In this exercise lab you will practice creating arrays and objects.

**Tasks to complete**
1. Create a new empty array literal and assign it to the variable `clothes`.
2. Add 5 of your favorite items of clothing as strings using the `push()` method.
3. Remove the fifth piece of clothing from the array using the `pop()` method.
4. Add a new piece of clothing using the `push()` method.
5. Use console.log to show the third item from the `clothes` array in the console.
6. Create a new empty object literal and assign it to the variable `favCar`.
7. Using the dot notation, assign a `color` property to the `favCar` object and give it a string value with the color of your choice.
8. Using the dot notation, assign a `covertible` property to the `favCar` object and give it a boolean value of your choice.
9. Use the console to log the entire `favCar` object.

**My solution:**
```js
var clothes = [];
// Add 5 clothes
clothes.push("jacket");
clothes.push("coat");
clothes.push("t-shirt");
clothes.push("pants");
clothes.push("dresss");

// Remove the fifth piece of clothing from the array
clothes.pop()

// Add a new piece of clothing
clothes.push("Polyeste")

// Print the third clothes
console.log(clothes[2]);

var favCar = {};

// assign a color
favCar.color = "green";

// convertible property
favCar.convertible = true;

console.log(favCar);
```
**Tips**

- Remember to use the object literal syntax: `{}`.
- Remember to use the array literal syntax: `[]`.

**Resources**

- Video (Conceptual): Arrays
- Video (Mix): Introduction to Arrays
- Video (Conceptual): Objects
- Video (Mix): Objects
# Creating arrays and objects (solutions)
## Step 1
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 2
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 3
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 4
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 5
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 6
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 7
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 8
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
## Step 9
```js
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
```
# Self review: Creating arrays and objects
## Question 1
Did you complete the Creating arrays and objects exercise?

_A. Yes_

B. No

## Question 2
Were there any parts of the _Creating arrays and objects_ exercise that you found difficult to complete?

A. Yes

_B. No_

## Question 3
Would you say that you are able to explain, in your own words, how to create arrays and objects in JavaScript?

_A. Yes_

B. No

# Object Methods
You might already be familiar with objects in JavaScript.

In this video, you will learn how to design objects as combinations of data and functionality.

As you might already know, an object consists of key-value pairs, known as properties.

We can add new key-value pairs to existing objects using the dot notation and the assignment operator.
```js
var car = {};
car.color = "red"; //update the value of a property of the car objject
```
These are known as properties, and can take many data types, including functions.
```js
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
```
If the function is a property of an object, it is then referred to as a method. 

This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.

`console.log('Hello world');`

Let's explore this further now. I will create an object using something known as the constructor function.
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
```
First, I'll build a new object literally named `car`. I type `var`, space, `car`, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.

Now, I'll extend the `car` object by assigning it a property named `mileage`. 

When I inspect the object, I can confirm that it contains a `mileage` property set to `98765`. 

I want to add another property to the `car` object. This time, I will add a property named `color` and set it to the value of `"red"`.

I can inspect the object again by typing its name into the browser console. So now, when I type `console.log(car)`, I get an object with two properties: the `mileage` property, which is set to `98765`, and the `color` property, set to `"red"`. 

Great, now I've added two properties to my object.

Next, I want to add a method to my `car` object. And this method, when called, will output some text to the console. 

So, once again, I add another property to my `car` object. After all, a method is just another property of the `car` object. It's just another key-value par that the car object holds.

What's unique is that the value I'm assigning to it is a function. 
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
```

So, I begin by typing `car` dot `turnTheKey`, equals, and then I type the code for my function. So function, open-close parentheses. Then the two curly braces where I will place my code. Finally, inside the curly braces, I type the console dot log followed by the message `"The engine is running"`.

Now I can inspect my `car` object again by typing its name into the console log method. This time, it displays that the `car` object contains three properties; the `color` property, the `mileage` property, and the `turnTheKey` property. 

Remember that all the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods. 

So, now I want to add another method to the `car` object. I'll name this one `lightsOn`. 

Once again, I type `car.lightsOn`, and then I add an equals sign, and again since it's a method, I'm assigning it to a function. This function will also have a console log in its body, and I'm just logging the string with the text `"The lights are on"`. 

```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
```

Ok, so now I have added four properties to my object. And two of those are methods. 

I've already ensured that I'm getting the correct `mileage` and `color` from my `car` object. Now, I'll try executing the `turnTheKey` and the `lightsOn` methods. 

First, I'll invoke the `turnTheKey` method. 

Remember that this method can be accessed only through the `car` object, so I first need to type the name of the object that holds the `turnTheKey` method. In other words, I need to type the word `car`, followed by a dot, and then the name of my method, which is `turnTheKey`. 

Remember that this property is a method. So, to run it, I need to append an opening and a closing parenthesis so that the JavaScript engine can process my JavaScript code. 

Notice that this results in the `"The engine is running"` string logged to the console. 

Now I'll test the other method. Once again, I need to access it through the `car` object, so I type `car.lightsOn`, and again, I need to add those parentheses to invoke the `lightsOn` method. I press the ENTER key and notice the text displays in the console.

Success! It's important to remember that when the JavaScript engine runs this line of code, it locates the `car` object in its memory. Then, it finds the `lightsOn` method on the `car` object. It reads the function declaration that's saved on this property and runs it, line by line.

Since there's only a single line of code, the JavaScript engine logs the string `"The lights are on"` to the console. 
# Knowledge check: Arrays, Objects and Functions
## Question 1
What data type is the variable  item ?
```js
var item = [];
```

A. Boolean

B. Function

_C. Array_

The correct answer is Array. Explain: [] is the array literal.
## Question 2
What is the value of  result  for the following code?
```js
var result = "Hello".indexOf('l');
```

A. 1

_B. 2_

C. 3

D. 4

The value of result for the following code is 2. Explain: Indices start at 0. Therefore the first index of  l  is 2.
## Question 3
What is the length of the  clothes  array after this code runs?
```js

  var clothes = [];
  clothes.push('gray t-shirt');
  clothes.push('green scarf');
  clothes.pop();
  clothes.push('slippers');
  clothes.pop();
  clothes.push('boots');
  clothes.push('old jeans');

```

A. 1

B. 2

_C. 3_

D. 4

The length of the clothes array after this code runs is 3. Explain: 5 items are added (push) to the array and 2 items are removed (pop). The result is 3 items in the array.
## Question 4
What value is printed out by the following code?
```js

  var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');

  console.log(food[1])

```
A. Chocolate

_B. Ice cream_

C. Dount

The value is printed out by the following code is Ice cream. Explain: Array indices start at 0, so the value at index 1 is Ice cream.
## Question 5
How many properties does the  dog  object have after the following code is run?
```js

  var dog = {
      color: "brown",
      height: 30,
      length: 60
  };
  dog["type"] = "corgi";
```

A. 1

B. 2

C. 3

_D. 4_

There are 4 properties does the dog object have after the following code is run. Explain: Additional properties can be assigned after an object is created. In this code, the object is created with three properties (color, height, length) and then a fourth property is assigned.
## Question 6
In the following function, the variables  a  and  b  are known as _______________.

```js

  function add(a, b) {
      return a + b;
  }

```

_A. Parameters_

B. Return Values

In the following function, the variables a and b are known as parameters. Explain: Parameters are the inputs to a function.
## Question 7
Which of the following are functions of the Math object?

- [X] random()
- [X] round()
- [X] sqrt()
- [ ] trim()

Explain: Math.random() returns a random value between 0.0 and 1.0. Math.round() rounds a decimal value up to the closest integer. Math.sqrt() returns the mathematical square root of a number.
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
 

[JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
 

[typeof operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
 

[Arrays are "list-like objects"](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)