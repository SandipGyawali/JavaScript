Comments.

//Anything following double slashes is an comment.  
//It can be of two type single line comment and multiline comment.
//Single line comment
/*

Multiple 
line

   comment.
Note: Whatever is written inside the comment it is going to be ignored.
*/



// JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x = undefined; // Undefined is another special value like null.



Two very important types that JavaScript programs can manipulate are objects and Array.
It is very important conecpt in Javascript.

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // The property "topic" has value "JavaScript."
    edition: 7 // The property "edition" has value 7
   }; // The curly brace marks the end of the object.
   

   // Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.
// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0
// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements.
 {x: 0, y: 0}, // Each element is an object.
 {x: 1, y: 1}
];
let data = { // An object with 2 properties
 trial1: [[1,2], [3,4]], // The value of each property is an array.
6 | Chapter 1: Introduction to JavaScript
 trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};


Some of the important topics of Javascript are:
1. Expression and Operators
2.Statements.
3. Arrays and objects
4. Functions
5. Object oriented programming.
6. modules
7. iterators and generators.
8. metaprogarmming
9. javascript in web brower
10.Server-Side javascript with node
