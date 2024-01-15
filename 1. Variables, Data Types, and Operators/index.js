/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
console.log(a)
var a = 1

// TODO 1.2 Use the let keyword to define a variable.
let b = 2
console.log(b)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const c = 3
console.log(c)

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
var d = 5 + 10 * 2
var e = 20
var f = ++e
console.log(f)
console.log(d)
var g = 100
var h = 2
let i = Math.floor(g/h)
console.log(i)

// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let mystring = "Com";
mystring += "puter";
console.log(mystring)

// Checkpoint 1.3 What operators did you use?
// Answer: 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
const logic = "Computer" && "Science";
console.log(logic)


// Checkpoint 1.4 What operators did you use?
// Answer: 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const CCIS = ["Computer Science", "Information Technology"];
console.log(CCIS[1])

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here