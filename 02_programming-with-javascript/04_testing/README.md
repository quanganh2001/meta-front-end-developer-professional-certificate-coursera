Here you will learn about Node.js and Node Package Manager (npm). And you will explore how to install npm packages and how to work with package.json. Furthermore, you will learn about testing in JavaScript and you'll code a simple unit test in Jest. After completing this module, you will be able to:

**Learning Objectives**

- Describe Node.js and npm
- Explain how to install npm packages
- Describe how to work with package.json
- Explain the process of testing in JavaScript
- List the three most prevalent kinds of testing
- Demonstrate how to code a simple unit test in Jest

# Installing Node and NPM
Before installing Node.js and npm on your machine, you first need to verify if it's already installed.  

## Verifying the existing installation on Windows
On Windows, you can use the `WINKEY+r` shortcut key, which opens the Run window. Inside the Open: input of the Run window, type `cmd` and press the enter key. This will open the command prompt.

Inside the command prompt, type:
- `node --version`

If there is Node.js installed on your Windows OS, it will return a value similar to this:
- `v16.14.2`  

Then you can confirm that you have npm as well, running this:
- `npm --version`  

If npm is installed, you'll get output similar to this:
- `8.5.0`

## Verifying the existing Node.js and npm installation on Ubuntu (Linux)
You can quickly open a new bash (terminal) window on Ubuntu by pressing the CTRL+ALT+t shortcut key.

In the bash window that opens, type:

- `node --version && npm --version`

Both version numbers should appear in the bash window.  

## Installing Node.js and npm
### On Windows OS
In case Node.js and npm are not installed on your Windows OS, navigate to https://nodejs.org. 

Locate the big download button, listing the LTS version. As of May 2022, the LTS version available for download is 16.15.0.
### On Mac OS - XCode
To install brew, you need to install Xcode first. Homebrew does not come with its own compiler and it needs Xcode installed for it to work correctly. To install Xcode do the following:

1. Open a terminal.
2. Run the following: `shell xcode-select --install`
3. A popup will appear asking you to confirm the installation. Click on the Install button.
4. Agree to the license agreement.

## brew
Macs do not come with package managers like most Linux distributions. To make up for this an external tool called brew was created. To install brew, go to the official website  (https://brew.sh/)  and copy the command provided, open a terminal and run the command :
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Once Brew is installed you can run the following command in the terminal

`brew install node`  

Homebrew will download and install the dependancies, once this is complete, confirm the installation by typing 

`node -v`

This will display the Node.js version

Type :

`npm -v`

to display the NPM version number.
### On Ubuntu
Use the `CTRL+ALT+t` shortcut key to open a new bash window, then run the following commands:

- `sudo apt update` 
- `sudo apt install nodejs`  


That's it, you should be all set.

For a more advanced set up and troubleshooting, please refer to the additional reading.
# Programming Assignment: Writing a Unit Test
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
> Ex: It looks like a triangular "Play" button. 
<br><br>

## Task 1: Add Jest as a devDependency

Open terminal. Make sure that it's pointing to `jest-testing` directory.  
Install the jest npm package using the npm install command and the --save-dev flag.  
Verify that the installation was completed successfully by opening the package.json file and confirming that the "devDependencies" entry lists jest similar to the following:

```
"devDependencies": {
    "jest": "^28.0.0"
}
```
<br>

## Task 2: Update the test entry

In the package.json file, locate the "scripts" entry, and inside of it, update the test entry to `jest`.
<br><br>

## Task 3: Code the timesTwo function

Open the timesTwo.js file and add a function named `timesTwo`. The function should take number as input and return the value 2 multiplied by the number.
Export the timesTwo function as a module. 
<br><br>

## Task 4: Write the first test
Code a test call with the following arguments: 
1. The description that reads: "returns the number times 2". 
2. The second argument should expect the call to the timesTwo function, when passed the number 10, to be 20.
<br><br>

## Task 5: Run the first test 
With the terminal pointed at the `jest-testing` directory, run the test script using npm.

**My solution**

```js
// Task 1: Code the timesTwo function declaration
function timesTwo(num) {
    return 2 * num
}
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo
```
```js
const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});
```
# Self review: Writing a Unit Test
## Question 1
Did you complete the Writing a Unit Test exercise?

***A. Yes***

B. No

## Question 2
Were there any parts of *Writing a Unit Test exercise* that you found difficult to complete?

A. Yes

***B. No***

## Question 3
Would you say that you are able to explain, in your own words, what are unit tests?

***A. Yes***

B. No
# Knowledge check: Introduction to testing
## Question 1
What is the correct way to export the  timesTwo  function as a module so that Jest can use it in testing files?

A. export module(timesTwo)

B. module(exported(timesTwo))

C. document.module.export = timesTwo

***D. module.exports = timesTwo***

The correct answer is D. Explain: This is the correct way to export the function.

## Question 2
Testing is a way to verify the expectations you have regarding the behavior of your code.

***A. true***

B. false

It is true statement. Explain: Testing is good practice as a software engineer for verifying expectations.

## Question 3
Node.js can be used to build multiple types of applications. Select all that apply.

- [X] Command line applications
- [X] Desktop applications
- [X] Web application backends

Explain: Command line applications, Desktop applications and Backends can be built with using Node.js.
## Question 4
When the following test executes, what will the test result be?

```js

    function add(a, b) {
        return a + b;
    }

    expect(add(10, 5)).toBe(16);

```

A. Success

***B. Fail***

The result will be Fail. Explain: The expectation will fail as the function will return 15 which does not equal 16.

## Question 5
Which of the following is the slowest and most expensive form of testing?

A. Unit testing

B. Integration testing

***C. End-to-end testing (e2e)***

The slowest and most expensive form of testing is End-to-end testing (e2e). Explain: End-to-end testing (e2e) is the most expensive as these tests take the most time to set up and run.
## Question 6
Mocking allows you to separate the code that you are testing from its related dependencies.

***A. True***

B. False

It is true statement. Explain: Mocking allows you to isolate the code being tested in your unit tests.
# Module quiz: Testing
## 1st time
### Question 1
Which of the following is a framework that can help you run a unit test?

A. JavaFrame

B. JFrame

C. JavaTest

***D. Jest***

The framework that can help you run a unit test is Jest. Explain: Jest is an open-source testing framework built on JavaScript.
### Question 2
When the following test executes, what will the test result be?

`function multiply(a, b) { return a; } expect(multiply(2, 2)).toBe(4);`

A. Success

***B. Fail***

The test result is Fail. Explain: The function will fail because it has a bug which returns only the a variable. Therefore, 2 is returned from the function which does not match the expectation.
### Question 3
What is End-to-end testing (e2e)?

A. End-to-end testing is a comprehensive test that starts at the beginning of your code and runs to the end.

***B. End-to-end testing tries to imitate how a user might interact with your application.***

C. End-to-end testing revolves around the idea of having separate, small pieces of code that are easy to test.

D. End-to-end testing is testing how parts of your system interact with other parts of your system.

Explain: End-to-end testing mimics how users will interact with your application.
### Question 4
What reason would you want to know about your code coverage?

***A. It lets you know where more testing may be required.***

B. It lets you know if you are testing correctly.

C. It lets you know if you are done writing code.

D. It lets you know if your code is in Javascript.

Explain: Code coverage shows what percentage of your code is covered by tests and where more testing may be required.

### Question 5
`Node.js` is typically used to do which of the following?

***A. Build web application backends***

B. Run unit tests

C. Estimate code coverage

D. Download and manage packages

Explain: Node.js is a popular JavaScript runtime for building backends.

### Question 6
Integration testing is defined how?

A. Testing revolves around the idea of having separate, small pieces of code that are easy to test.

B. Testing how much of your code is covered by tests.

***C. Testing how parts of your system interact with other parts of your system.***

D. Testing tries to imitate how a user might interact with your application.

Explain: Integration testing is testing how parts of your system interact with other parts of your system.

### Question 7
True or False: You can install packages from the `npm` repository using the node command.

A. True

***B. False***

It is false statement.
### Question 8
True or False: If you have built a project with different node packages, they will all be listed inside the `package.json` file.

A. True

***B. False***

It is false statement.

### Question 9
True or False: End-to-end tests can be performed in a web browser without writing code. 

***A. True***

B. False

It is true statement.

### Question 10
Which of the below statements would NOT be a benefit of Mocking?

A. Mocking allows you to separate the code that you are testing from its related dependencies.

***B. Mocking is a substitute for testing.***

C. Mocks, allow you to pretend that users are already there if the backend hasn't been built yet.

D. You can test the front end functionality of your web app by mocking the data as if it came back from a server.
## 2nd times
### Question 1
The idea of having separate, small pieces of code that are easy to test is called what?

A. Post-hoc testing

B. Integration testing

***C. Unit testing***

D. End-to-end testing

Explain: Unit testing is focused on testing small, specific "units" of code

### Question 2
When the following test executes, what will the test result be?

`function subtract(a, b) { return a - b; } expect(subtract(10, 4)).toBe(6);`


***A. Success***

B. Fail

### Question 3
True or False: End-to-end testing is the slowest and most expensive type of testing.

***A. True***

B. False

It is true statement. Explain: End-to-end tests are the slowest and take the most time to set up and run.

### Question 4
What is Code Coverage?

A. What percentage of your code is in Javascript.

***B. A measure of what percentage of your code is covered by tests.***

C. A measure of what percentage of your code has failing tests.

D. What percentage of your code is complete.

The correct answer is B. Explain: Code coverage shows what percentage of your code is covered by tests and where more testing may be required.

### Question 5
Which of the following runtimes are typically used for building backends?

A. Cyprus

B. `Node.js`

C. Protractor

D. Jest

The correct answer is `Node.js`. Explain: Node.js is a popular JavaScript runtime for building backends.

### Question 6
Integration testing is defined how?

A. Testing tries to imitate how a user might interact with your application.

B. Testing revolves around the idea of having separate, small pieces of code that are easy to test.

***C. Testing how parts of your system interact with other parts of your system.***

D. Testing how much of your code is covered by tests.

### Question 7
Node package manager (`npm`) is used to do which of the following?

A. Test code coverage

***B. Use a large number of libraries and frameworks as `Node.js` modules.***

C. Build a back end

D. Add code from places like Stack Overflow or github.

Explain: You can use the `npm` command to install any node module from the `npm` repository.

### Question 8
Which file lists all your application's required node packages?

A. `node.json`

***B. `package.json`***

C. `pkg.json`

D. `npm.json`

The correct answer is `package.json`. Explain: `package.json` will store all the dependencies required for application.

### Question 9
A person on your team wants to help with testing. However, they are not a developer and cannot write code. What type of testing is most suited for them?

A. Integration testing

B. Post-hoc testing

***C. End-to-end testing***

D. Unit testing

The correct answer is End-to-end testing. Explain: End-to-end tests can be performed in a web browser without writing code. This is because the tests mimic how a user will interact with the application.

### Question 10
In Jest you use mocking by employing which of the following?

A. External mock libraries

B. Jest Snapshot

***C. Jest Mock functions***

D. Jest Fakes

The correct answer is Jest Mock functions. Explain: Mocking allows developers to simulate the behavior of dependent code during tests.
# Additional resources
Here is a list of resources that may be helpful as you continue your learning journey.

[MDN: Server-side website programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side)

[Nodejs.org docs website](https://nodejs.org/api/documentation.html)

[Jest testing framework website](https://jestjs.io/)

[Cypress testing framework](https://www.cypress.io/)

[npm website](https://www.npmjs.com/)

[Unit testing in JavaScript](https://www.browserstack.com/guide/unit-testing-in-javascript)