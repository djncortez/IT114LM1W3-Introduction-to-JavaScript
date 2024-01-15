/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name){
    console.log("Hello", name)
}
greet('Dave')

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
function calculateArea(length, width){
    return length * width
}
const area = calculateArea(5, 10)
console.log(area)
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
let number = [1,2,3]
function modifyArray (arr, func){
    return arr.map(func)
}

function plusOne(num){
    return num + 1
}

let arrPlusOne = modifyArray(number, plusOne)
console.log(arrPlusOne)


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
const { add, approxpi } = require('./mathUtils')

console.log(add(2,2))
console.log(approxpi)


// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
isPalindrome = require('./isPalindrome')


console.log(isPalindrome('tacocat')); 
console.log(isPalindrome('computer'));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
