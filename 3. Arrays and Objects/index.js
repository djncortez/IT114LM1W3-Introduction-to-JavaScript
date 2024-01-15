/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
console.log(numbers[0], numbers[4], numbers[numbers.length - 1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
let minimum = Math.min(...numbers)
let maximum = Math.max(...numbers)
let average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length
console.log("min", minimum)
console.log("max", maximum)
console.log("Average", average)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const courseinfo = {
    CourseCode: "IT114L",
    CourseName: "Web Systems and Technology",
    units: "3",
    NumOfStuds: "40"
}
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
courseinfo.ProfName = "Job Lipat"
console.log(courseinfo.ProfName)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
const coursearray = [
    {
        CourseCode: "PE044",
        CourseName: "Physical Activities Towards Health and Fitness",
        units: 1,
        NumOfStuds: "30",
        ProfName: 'Ferdinand Fermin'
    },
    {
        CourseCode: "CS120",
        CourseName: "Structure of Programming Languages",
        units: 3,
        NumOfStuds: "40",
        ProfName: 'Aurelia Sharlene Delos Santos'
    }
    ]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
const total = coursearray.reduce((total, coursearray) => total + coursearray.units, 0)
console.log(total)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
let num = [...numbers, 100]
console.log(num)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
let {CourseCode, units} = {...courseinfo}
console.log(CourseCode, units)
