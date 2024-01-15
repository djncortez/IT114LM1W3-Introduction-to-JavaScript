/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const MapArray = numbers.map(number => number * number)
console.log(MapArray)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const FilterArray = numbers.filter(number => number % 2 == 0)
console.log(FilterArray)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const ReduceArray = numbers.reduce((number, sum) => number + sum, 0)
console.log(ReduceArray)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const MapUpperArray = words.map(word => word.toUpperCase())
console.log(MapUpperArray)


// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const Filter4Array = words.filter(four => four.length > 4)
console.log(Filter4Array)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const ReduceConcArray = words.reduce((ha, word) => ha + word, "")
console.log(ReduceConcArray)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 