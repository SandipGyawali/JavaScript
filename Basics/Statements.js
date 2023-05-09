A computer program is a list of "instructions" to be "executed" by a computer. 
In a programming language, these programming instructions are called statements.

JavaScript programs are nothing more than a sequence of statements to execute. By
default, the JavaScript interpreter executes these statements one after another in the
order they are written. Another way to “make something happen” is to alter this
default order of execution, and JavaScript has a number of statements or control struc‐
tures that do just this:

Conditionals
Statements like if and switch that make the JavaScript interpreter execute or
skip other statements depending on the value of an expression

Loops
Statements like while and for that execute other statements repetitively

Jumps
Statements like break, return, and throw that cause the interpreter to jump to
another part of the program

A JavaScript program is simply a sequence of statements, separated from one another with
semicolons, so once you are familiar with the statements of JavaScript, you can begin
writing JavaScript programs


1.Expression Statements
  Ans:Alredy disscussed all the expresions in previous chapter



2.Compound and Empty Statements
  
A statement block is simply a sequence of statements enclosed within curly
braces. Thus, the following lines act as a single statement and can be used anywhere
that JavaScript expects a single statement:
{
 x = Math.PI;
 cx = Math.cos(x);
 console.log("cos(π) = " + cx);
}

Just as expressions often contain subexpressions, many JavaScript statements contain
substatements. Formally, JavaScript syntax usually allows a single substatement. For
example, the while loop syntax includes a single statement that serves as the body of
the loop. Using a statement block, you can place any number of statements within this
single allowed substatement.

A compound statement allows you to use multiple statements where JavaScript syntax
expects a single statement. The empty statement is the opposite: it allows you to
include no statements where one is expected. The empty statement looks like this:
Ans: ;

The JavaScript interpreter takes no action when it executes an empty statement. The
empty statement is occasionally useful when you want to create a loop that has an
empty body. Consider the following for loop

// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) ;
In this loop, all the work is done by the expression a[i++] = 0, and no loop body is
necessary. JavaScript syntax requires a statement as a loop body, however, so an empty
statement—just a bare semicolon—is used.
Note that the accidental inclusion of a semicolon after the right parenthesis of a for
loop, while loop, or if statement can cause frustrating bugs that are difficult to
detect. For example, the following code probably does not do what the author
intended:

if ((a === 0) || (b === 0)); // Oops! This line does nothing...
 o = null; // and this line is always executed.
When you intentionally use the empty statement, it is a good idea to comment your
code in a way that makes it clear that you are doing it on purpose. For example:
for(let i = 0; i < a.length; a[i++] = 0) /* empty */ ;


Conditionals 

Conditional statements execute or skip other statements depending on the value of a
specified expression. These statements are the decision points of your code, and they
are also sometimes known as “branches.” If you imagine a JavaScript interpreter fol‐
lowing a path through your code, the conditional statements are the places where the
code branches into two or more paths and the interpreter must choose which path to
follow.
The following subsections explain JavaScript’s basic conditional, the if/else state‐
ment, and also cover switch, a more complicated, multiway branch statement


Some of the conditional statements are:
 1.if
 2.if else
 3.switch
 Note:Try these conditional statement by yourself


Loops

1.while
let count = 0;
while(count < 10) {
 console.log(count);
 count++;
}

2.Dowhile
function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
    console.log("Empty Array");
    } else {
    do {
    console.log(a[i]);
    } while(++i < len);
    }
   }


3.For
for(let count = 0; count < 10; count++) {
    console.log(count);
   }
   

4.forof Loop:
  
The for/of loop works with iterable objects.
it is enough to know that arrays, strings, sets, and maps are iterable: they represent a sequence or set of ele‐
ments that you can loop or iterate through using a for/of loop.

Here, for example, is how we can use for/of to loop through the elements of an array
of numbers and compute their sum:
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
 sum += element;
}
sum // => 45

Superficially, the syntax looks like a regular for loop: the for keyword is followed by
parentheses that contain details about what the loop should do. In this case, the
parentheses contain a variable declaration (or, for variables that have already been
declared, simply the name of the variable) followed by the of keyword and an expres‐
sion that evaluates to an iterable object, like the data array in this case. As with all
loops, the body of a for/of loop follows the parentheses, typically within curly
braces.

In the code just shown, the loop body runs once for each element of the data array.
Before each execution of the loop body, the next element of the array is assigned to
the element variable. Array elements are iterated in order from first to last.


for/of with objects

Objects are not (by default) iterable. Attempting to use for/of on a regular object
throws a TypeError at runtime:
let o = { x: 1, y: 2, z: 3 };
for(let element of o) { // Throws TypeError because o is not iterable
 console.log(element);
}

If you want to iterate through the properties of an object, you can use the for/in loop
or use for/of with the Object.keys() method:

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
 keys += k;
}
keys // => "xyz"

This works because Object.keys() returns an array of property names for an object,
and arrays are iterable with for/of. Note also that this iteration of the keys of an
object is not live as the array example above was—changes to the object o made in the
loop body will have no effect on the iteration. If you don’t care about the keys of an
object, you can also iterate through their corresponding values like this:
let sum = 0;
for(let v of Object.values(o)) {
 sum += v;
}
sum // => 6

And if you are interested in both the keys and the values of an object’s properties, you
can use for/of with Object.entries() and destructuring assignment:
let pairs = "";
for(let [k, v] of Object.entries(o)) {
 pairs += k + v;
}
pairs // => "x1y2z3"

Object.entries() returns an array of arrays, where each inner array represents a
key/value pair for one property of the object. We use destructuring assignment in this
code example to unpack those inner arrays into two individual variables


for/of with strings

Strings are iterable character-by-character in ES6:
let frequency = {};
for(let letter of "mississippi") {
 if (frequency[letter]) {
 frequency[letter]++;
 } else {
 frequency[letter] = 1;
 }
}
frequency // => {m: 1, i: 4, s: 4, p: 2}
Note that strings are iterated by Unicode codepoint, not by UTF-16 character. The
string “I ❤ ” has a .length of 5 (because the two emoji characters each require two
UTF-16 characters to represent). But if you iterate that string with for/of, the loop
body will run three times, once for each of the three code points “I”, “❤”, and “ .”


for/of with set and maps

The built-in ES6 Set and Map classes are iterable. When you iterate a Set with for/of,
the loop body runs once for each element of the set. You could use code like this to
print the unique words in a string of text:
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
 unique.push(word);
}
unique // => ["Na", "na", "Batman!"]
Maps are an interesting case because the iterator for a Map object does not iterate the
Map keys, or the Map values, but key/value pairs. Each time through the iteration, the
iterator returns an array whose first element is a key and whose second element is the
corresponding value. Given a Map m, you could iterate and destructure its key/value
pairs like this:
let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
 key // => 1
 value // => "one"
}


#for/in loop

A for/in loop looks a lot like a for/of loop, with the of keyword changed to in.
While a for/of loop requires an iterable object after the of, a for/in loop works with
any object after the in. The for/of loop is new in ES6, but for/in has been part of
JavaScript since the very beginning (which is why it has the more natural sounding
syntax).

variable typically names a variable, but it may be a variable declaration or anything
suitable as the left-hand side of an assignment expression. object is an expression that
evaluates to an object. As usual, statement is the statement or statement block that
serves as the body of the loop.
And you might use a for/in loop like this:
for(let p in o) { // Assign property names of o to variable p
 console.log(o[p]); // Print the value of each property
}

To execute a for/in statement, the JavaScript interpreter first evaluates the object
expression. If it evaluates to null or undefined, the interpreter skips the loop and
moves on to the next statement. The interpreter now executes the body of the loop
once for each enumerable property of the object. Before each iteration, however, the
interpreter evaluates the variable expression and assigns the name of the property (a
string value) to it.

find that a common source of bugs in my own code is the accidental use of for/in
with arrays when I meant to use for/of. When working with arrays, you almost
always want to use for/of instead of for/in.

The for/in loop does not actually enumerate all properties of an object. It does not
enumerate properties whose names are symbols. And of the properties whose names
are strings, it only loops over the enumerable properties


label statement:

mainloop: while(token !== null) {
    // Code omitted...
    continue mainloop; // Jump to the next iteration of the named loop
    // More code omitted...
   }
   
   
break statement:

for(let i = 0; i < a.length; i++) {
    if (a[i] === target) break;
   }

continue statemenet:

for(let i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
   }


return statemetn: This statement appear only in the body of the function. Otherwise it is a syntax error.


yield statement:
Note: It is quite tricky watch some youtube Video

// A generator function that yields a range of integers
function* range(from, to) {
    for(let i = from; i <= to; i++) {
    yield i;
    }
   }


Throw Statement:

An exception is a signal that indicates that some sort of exceptional condition or error
has occurred. To throw an exception is to signal such an error or exceptional condi‐
tion. To catch an exception is to handle it—to take whatever actions are necessary or
appropriate to recover from the exception. In JavaScript, exceptions are thrown
whenever a runtime error occurs and whenever the program explicitly throws one
using the throw statement. Exceptions are caught with the try/catch/finally state‐
ment, which is described in the next section.

function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
 // Otherwise, compute a value and return normally
 let f;
 for(f = 1; x > 1; f *= x, x--) /* empty */ ;
 return f;
}
factorial(4) // => 24


try/catch/finally

try {
    // Ask the user to enter a number
    let n = Number(prompt("Please enter a positive integer", ""));
    // Compute the factorial of the number, assuming the input is valid
    let f = factorial(n);
    // Display the result
    alert(n + "! = " + f);
   }
   catch(ex) { // If the user's input was not valid, we end up here
    alert(ex); // Tell the user what the error is
   }
   
   The try/catch/finally statement is JavaScript’s exception handling mechanism.
The try clause of this statement simply defines the block of code whose exceptions
are to be handled. The try block is followed by a catch clause, which is a block of
statements that are invoked when an exception occurs anywhere within the try block.
The catch clause is followed by a finally block containing cleanup code that is guar‐
anteed to be executed, regardless of what happens in the try block. Both the catch
and finally blocks are optional, but a try block must be accompanied by at least one
of these blocks. The try, catch, and finally blocks all begin and end with curly
braces. These braces are a required part of the syntax and cannot be omitted, even if a
clause contains only a single statement.

Note: Watch youtube for extra referal


debugger:

function f(o) {
    if (o === undefined) debugger; // Temporary line for debugging purposes
    ... // The rest of the function goes here.
   }
   Now, when f() is called with no argument, execution will stop, and you can use the
   debugger to inspect the call stack and find out where this incorrect call is coming
   from.
   Note that it is not enough to have a debugger available: the debugger statement won’t
   start the debugger for you. If you’re using a web browser and have the developer tools
   console open, however, this statement will cause a breakpoint.

"use strict"
//use it in the beginner of the code base which will throw error if any rule inside the code is break


export and import:

The import and export declarations are used together to make values defined in one
module of JavaScript code available in another module. A module is a file of Java‐
Script code with its own global namespace, completely independent of all other mod‐
ules. The only way that a value (such as function or class) defined in one module can
be used in another module is if the defining module exports it with export and the
using module imports it with import. Modules are the subject of Chapter 10, and
import and export are covered in detail in §10.3.
import directives are used to import one or more values from another file of Java‐
Script code and give them names within the current module. import directives come
in a few different forms. Here are some examples:
import Circle from './geometry/circle.js';
import { PI, TAU } from './geometry/constants.js';
import { magnitude as hypotenuse } from './vectors/utils.js';
Values within a JavaScript module are private and cannot be imported into other
modules unless they have been explicitly exported. The export directive does this: it
declares that one or more values defined in the current module are exported and
therefore available for import by other modules. The export directive has more var‐
iants than the import directive does. Here is one of them:
// geometry/constants.js
const PI = Math.PI;
const TAU = 2 * PI;
export { PI, TAU };
