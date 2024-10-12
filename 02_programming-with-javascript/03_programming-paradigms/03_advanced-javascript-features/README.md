# For of loops and objects
In this reading, you'll learn how the for of loop works conceptually.

To begin, it's important to know that a for of loop cannot work on an object directly, since **an object is not iterable**. For example:
```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
```
Running the above code snippet will throw the following error:
```txt
Uncaught TypeError: car is not iterable
```
Contrary to objects, arrays *are* iterable. For example:  
```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
```
This time, the output is as follows:  
```txt
red
orange
yellow
```
Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

But how?

Before you can properly answer this question, you first need to review three built-in methods: `Object.keys()`, `Object.values()`, and `Object.entries()`.
## Built-in methods
**The `Object.keys()` method**

The `Object.keys()` method receives an object as its parameter. Remember, this object is **the object you want to loop over**. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the `Object.keys()` method.

Here's an example of running the `Object.keys()` method on a brand new `car2` object:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```
So, when I run `Object.keys()` and pass it my `car2` object, **the returned value is an array of strings**, where each string is a property key of the properties contained in my `car2` object.

**The `Object.values()` method**

Another useful method is `Object.values()`:
```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```
**The `Object.entries()` method**

Finally, there's another useful method, `Object.entries()`, which returns an array listing both the keys and the values.  
```js
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
```
What gets returned from the invocation of the `Object.entries()` method is the following:  
```js
[ ['speed', 400], ['color', 'magenta'] ]
```
This time, the values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.

Effectively, it's as if you was listing all of a given object's properties, a bit like this:`
```txt
[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]
```
To summarise, you learned that you can loop over arrays using the `for of` loop.  You also learned that you can extract object's keys, values, or both, using the `Object.keys()`, `Object.values()` and `Object.entries()` syntax.
## Examples
You now have all the ingredients that you need to **loop over any object's own property keys and values**.

Here's a very simple example of doing just that:
```js
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
```
The trickiest part to understand in this syntax is probably the `clothingItem[key]`.

Luckily, this is not too hard to comprehend, especially since you've already covered the concept previously when you were learning **how to access an object's member using the brackets notation**. 

Recall that you also learned how you can dynamically access a property name.

To revisit this concept and show a practical demo of how that works, let's code a function declaration that randomly assigns either the string `speed` or the string `color` to a variable name, and then build an object that has only two keys: a `speed` key and a `color` key.

After this setup, you will be able to dynamically access either one of those properties on a brand new `drone` object, using the brackets notation.

Here's the example's code:
```js
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
```
This example might feel a bit convoluted, but its purpose is to demo the fact that you're getting either one or the other value from an object's key, based on the string that got assigned to the `dynamicKey` variable, and accessed without issues, using the brackets notation.

Feel free to run the `testBracketsDynamicAccess()` function a few times, and you'll notice that sometimes the value that gets output is `15`, and sometimes it's `orange`, although I'm always accessing the `drone[dynamicKey]` key. Since the value of the `dynamicKey` is populated on the `Math.random()` invocation, sometimes that expression evaluates to `drone["speed"]`, and other times that expression evaluates to `drone["color"]`.


You have now learned about the building blocks that make the for of loop useful to iterate over objects - *although objects are not iterables*. 

Next, you'll have a go at a practical example of working with both the for of and the for in loop. Each loops have their place and can be considered useful in different situations.
# Template literals examples
The aim of this reading is to help you understand how template literals work.

## What are template literals?
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
```txt
'Hello, World!'
"Hello, World!"
```
Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
```txt
`Hello, World!`
```
The above code snippet is an example of a template string, which is also known as a template literal.

*Note: On most keyboards, the backtick character can be located above the TAB key, to the left of the number 1 key.*

With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string:  
## Differences between a template and regular string
There are several ways in which a template string is different from a regular string.

- First, it allows for **variable interpolation**:
```js
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
```
The above console log will output:  
```txt
Hello World !
```
Essentially, using template literals allows programmers to embed variables directly in between the backticks, without the need to use the `+` operator and the single or double quotes to delimit string literals from variables. In other words, in ES5, the above example would have to be written as follows:  
```js
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals
```
- Besides variable interpolation, template strings can span multiple lines.

For example, this is perfectly good syntax:
```txt
`Hello,
World
!
`
```
Notice that this can't be done using **string literals** (that is, strings delimited in single or double quotes):  
```txt
"Hello,
World"
```
The above code, when run, will throw a syntax error.

Put simply, template literals allow for multi-line strings - something that simply isn't possible with string literals.

- Additionally, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for **expression evaluation**. 

In other words, this:
```js
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
```
The above example will console log the following string: `5 stars!`.

This opens up a host of possibilities. For example, it's possible to evaluate a ternary expression inside a template literal.


Some additional use cases of template literals are **nested template literals** and **tagged templates**. However, they are a bit more involved and are beyond the scope of this reading. 

If you're curious about how they work, please refer to the additional reading provided at the end of this lesson.
# Self review: Array and object iteration
## Question 1
Did you complete the Array and object iteration exercise?

***A. Yes***

B. No

## Question 2
Were there any parts of the *Array and Object Iteration* exercise that you found difficult to complete?

A. Yes

***B. No***

## Question 3
Would you say that you are able to explain, in your own words, how to loop over arrays and objects in JavaScript?

A. Yes

***B. No***

# Programming Assignment: Array and object iteration
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


## Task: Iterate Over an Array

In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.  
<br><br>
**Step 1.** You are given an array of dairy products:  

    
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    


Create a function called `logDairy`. Within it, console log each of the items in the dairy array, using the for...of loop.   

After you create this function, call it as `logDairy()` to see the output on the console.

The expected output should be:

```
cheese
sour cream
milk
yogurt
ice cream
milkshake
```

<br>
<b>Step 2.</b> You are given the following starter code:  

```
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
```

Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as `birdCan()` to see the output on the console.
Remember, you need to console log both the key and the value of each of the bird object's properties.

<br/>
Expected output should be:

```
canFly: true
hasFeathers: true
```


<br>
<b>Step 3.</b> 
    Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.

<br/><br/>
Expected outout should be:

```
canFly: true
hasFeathers: true
canJump: true
```

**My solution:**
```js
// Step 1
function logDairy() {
  var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
  for (let item of dairy) {
    console.log(item);
  }
}
logDairy();

// Step 2
function birdCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (let prop of Object.keys(bird)) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}
birdCan();

// Step 3
function animalCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (let prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}
animalCan();
```
# Data Structures examples
In this reading, you'll learn about some of the most common examples of data structures.

The focus will be on working with the Object, Array, Map and Set data structures in JavaScript, through a series of examples.

*Note that this reading will not include a discussion of some data structures that exist in some other languages, such as Queues or Linked Lists.  Although these data structures (and other data structures too!) can be custom-coded in JavaScript, the advanced nature of these topics and the difficulty with implementing related exercises means they are beyond the scope of this reading. *
## Working with arrays in JavaScript
Previously, you've covered a lot of concepts related to how to work with JavaScript arrays.

However, there are still a few important topics that can be covered, and one of those is, for example, working with some built-in methods.

In this reading, the focus is on three specific methods that exist on arrays:

1. `forEach` 
2. `filter`
3. `map`

Let's explore these methods.
### The `forEach()` method
Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

Here's the basic syntax:
```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
```
The result of running the above code is this:  
```txt
0. kiwi
1. mango
2. apple
3. pear
```
To explain the syntax, the `forEach()` method accepts **a function that will work on each array item**. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the `forEach()` method needs to use is passed in directly into the method call, like this:
````js
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
````
This makes for more compact code, but perhaps somewhat harder to read. To increase readability, sometimes arrow functions are used. You can find out more about arrow functions in the additional reading.
### The `filter()` method
Another very useful method on the array is the `filter()` method. It filters your arrays **based on a specific test**. Those array items that pass the test are returned.

Here's an example:
````js
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
````
Here's the returned array value:  
```txt
[30,40,50]
```
Similar to the `forEach()` method, the `filter()` method also accepts a function and that function performs some work on each of the items in the array.
### The `map` method
Finally, there's a very useful `map` method. 

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:
```js
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
```
The return value from the above code is:  
```txt
[0,1,2,3,4,5]
```
As already discussed, choosing a proper data structure affects the very code that you can write. This is because the data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it harder or even impossible without converting your code to a proper data structure.

Now that you've covered the methods, let's explore how to work with different built-in data structures in JavaScript.
## Working with Objects in Javascript
A lot of the information on how to work with objects in JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:
```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
```
This is the result of executing the above code:  
```txt
['speed',100,'color','yellow']
```
Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. You'll learn more about the interchange of data on the web when you learn about JSON (JavaScript Object Notation).
## Working with Maps in JavaScript
To make a new Map, you can use the `Map` constructor:
```js
new Map();
```
A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

For example:
```js
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
```
Here's the console output:  
```txt
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
```
To get a specific value, you need to use the `get()` method. For example:  
```js
bestBoxers.get(1); // 'The Champion'
```
## Working with Sets in JavaScript
A set is a collection of unique values.

To build a new set, you can use the Set constructor:
```js
new Set();
```
The `Set` constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.
```js
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
```
The above code outputs the following in the console:  
```txt
{'apple', 'pear', 'plum'}
```
## Other data structures in JavaScript
Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

- Queues
- Linked lists (singly-linked and doubly-linked)
- Trees
- Graphs

For resources on building these data structures, please refer to the additional reading.
# Using Spread and Rest
In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

- Add new members to arrays without using the `push()` method,
- Convert a string to an array and
- Copy either an object or an array into a separate object 

**Recall that the `push()` and `pop()` methods are used to add and remove items from the end of an array.**
## Join arrays, objects using the rest operator
Using the spread operator, it's easy to concatenate arrays:
```js
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
```
Here's the result:
```txt
['apple', 'pear', 'plum', 'blueberry', 'strawberry']
```
It's also easy to join objects:  
```js
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
```
## Add new members to arrays without using the `push()` method
Here's how to use the spread operator to easily add one or more members to an existing array:
```js
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

```
Here's the output:
````txt
['onion', 'parsley', 'carrot', 'beetroot']
````
## Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items:
```js
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
```
## Copy either an object or an array into a separate one
Here's how to copy an object into a completely separate object, using the spread operator.
```js
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)
```
The output is `201, 200`.

You can copy an array into a completely separate array, also using the spread operator, like this:
```js
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)
```
This time, the output is:
```txt
['apples'] 'not' ['apples','pears']
```
Note that the spread operator only performs a shallow copy of the source array or object. For more information on this, please refer to the additional reading.

There are many more tricks that you can perform with the spread operator. Some of them are really handy when you start working with a library such as React.
# Knowledge check: Advanced JavaScript Features
## Question 1
What will print out when the following code runs?
```js

    const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);

```
***A. soup***

B. ice cream

C. steak

The correct output is soup. Explain: The first item in the  meal  array is de-structured to the  starter  variable. Therefore, the code will print out  soup .
## Question 2
The for-of loop works for Object data types.

A. true

***B. false***

It is false statement. Explain: The for-of loop must use an iterable such as arrays.
## Question 3
What will print out when the following code runs?`
```js

    let food = "Chocolate";
    console.log(`My favourite food is ${food}`);

```
***A. My favourite food is Chocolate***

B. My favourite food is ${food}

Explain: The template literal will replace  ${food}  with  Chocolate .
## Question 4
What values will be stored in the  set  collection after the following code runs?
```js

    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2);
    set.add(1);

```
A. 1, 2, 3, 2, 1

***B. 1, 2, 3***

The correct values are 1, 2, 3. Explain: A Set only stores unique items.
## Question 5
What value will be printed out when the following code runs?
```js

    let obj = {
        key: 1,
        value: 4
    };

    let output = { ...obj };
    output.value -= obj.key;

    console.log(output.value);

```

A. 1

B. 2

***C. 3***

D. 4

The correc output is 3. Explain: The spread operator  ...  will copy the properties from  obj . Therefore, when  output  is created, it's  value  property will be equal to 4. Then 1 is substracted from the  value  property and result is stored back in the  value  property. Therefore, 3 will be printed out.
## Question 6
What value will be printed out when the following code runs?
```js

    function count(...basket) {
        console.log(basket.length)
    }

    count(10, 9, 8, 7, 6);

```
A. 10, 9, 8, 7, 6

B. 1, 2, 3, 4, 5

***C. 6***

D. 5

The correct value is 6. Explain: The rest operator  ...  allows a function to accept an indefinite amount of parameters. The length property of the  basket  variable will return 5 because there were 5 parameters passed to the method call. Therefore, 5 will be printed out.
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 
[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
 
[JavaScript data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  