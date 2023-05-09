An expression is a phrase of JavaScript that can be evaluated to produce a value.

Primary Expressions.

Primary expressions in JavaScript are
constant or literal values, certain language keywords, and variable references.

Literals are constant values that are embedded directly in your program. They look
like these:
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

Some of JavaScript’s reserved words are primary expressions:
true // Evalutes to the boolean true value
false // Evaluates to the boolean false value
null // Evaluates to the null value
this // Evaluates to the "current" object

Finally, the third type of primary expression is a reference to a variable, constant, or
property of the global object:
i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object
When any identifier appears by itself in a program, JavaScript assumes it is a variable
or constant or property of the global object and looks up its value. If no variable with
that name exists, an attempt to evaluate a nonexistent variable throws a ReferenceEr‐
ror instead



Object and Array Initializers

Object and array initializers are expressions whose value is a newly created object or
array. These initializer expressions are sometimes called object literals and array liter‐
als. Unlike true literals, however, they are not primary expressions, because they
include a number of subexpressions that specify property and element values. Array
initializers have a slightly simpler syntax, and we’ll begin with those

[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

The element expressions in an array initializer can themselves be array initializers,
which means that these expressions can create nested arrays:
let matrix = [[1,2,3], [4,5,6], [7,8,9]];

Undefined elements can be included in an array literal by simply omitting a value
between commas. For example, the following array contains five elements, including
three undefined elements:
let sparseArray = [1,,,,5];
A single trailing comma is allowed after the last expression in an array initializer and
does not create an undefined element. However, any array access expression for an
index after that of the last expression will necessarily evaluate to undefined.


Object initializer expressions are like array initializer expressions, but the square
brackets are replaced by curly brackets, and each subexpression is prefixed with a
property name and a colon:
let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

Object literals can be nested. For example:
let rectangle = {
 upperLeft: { x: 2, y: 2 },
 lowerRight: { x: 4, y: 5 }
};



Function Defination Expressions

A function definition expression defines a JavaScript function, and the value of such an
expression is the newly defined function. In a sense, a function definition expression
is a “function literal” in the same way that an object initializer is an “object literal.” A
function definition expression typically consists of the keyword function followed by
a comma-separated list of zero or more identifiers (the parameter names) in
parentheses and a block of JavaScript code (the function body) in curly braces. For
example:
// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };
A function definition expression can also include a name for the function. Functions
can also be defined using a function statement rather than a function expression. And
in ES6 and later, function expressions can use a compact new “arrow function” syn‐
tax.


Property Access Expressions

A property access expression evaluates to the value of an object property or an array
element. JavaScript defines two syntaxes for property access:
expression . identifier
expression [ expression ]
The first style of property access is an expression followed by a period and an identi‐
fier. The expression specifies the object, and the identifier specifies the name of the
desired property. The second style of property access follows the first expression (the
object or array) with another expression in square brackets. This second expression
specifies the name of the desired property or the index of the desired array element.
Here are some concrete examples:
let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]


Conditional Property Access

expression ?. identifier
expression ?.[ expression ]
In JavaScript, the values null and undefined are the only two values that do not have
properties. In a regular property access expression using . or [], you get a TypeError
if the expression on the left evaluates to null or undefined. You can use ?. and ?.[]
syntax to guard against errors of this type.

In JavaScript, the values null and undefined are the only two values that do not have
properties. In a regular property access expression using . or [], you get a TypeError
if the expression on the left evaluates to null or undefined. You can use ?. and ?.[]
syntax to guard against errors of this type.

Conditional property access is also possible using ?.[] instead of []. In the expres‐
sion a?.[b][c], if the value of a is null or undefined, then the entire expression
immediately evaluates to undefined, and subexpressions b and c are never even eval‐
uated. If either of those expressions has side effects, the side effect will not occur if a
is not defined:
let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
 a[index++]; // Throws TypeError
} catch(e) {
 index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] short-circuits
a[index++] // !TypeError: can't index undefined.
Conditional property access with ?. and ?.[] is one of the newest features of Java‐
Script. As of early 2020, this new syntax is supported in the current or beta versions
of most major browsers.


Invocation Expressions

An invocation expression is JavaScript’s syntax for calling (or executing) a function or
method. It starts with a function expression that identifies the function to be called.
The function expression is followed by an open parenthesis, a comma-separated list
of zero or more argument expressions, and a close parenthesis. Some examples:
f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments

When an invocation expression is evaluated, the function expression is evaluated
first, and then the argument expressions are evaluated to produce a list of argument
values. If the value of the function expression is not a function, a TypeError is
thrown.

If the function uses a return statement to return a value, then that value
becomes the value of the invocation expression. Otherwise, the value of the invoca‐
tion expression is undefined

Every invocation expression includes a pair of parentheses and an expression before
the open parenthesis. If that expression is a property access expression, then the invo‐
cation is known as a method invocation. In method invocations, the object or array
that is the subject of the property access becomes the value of the this keyword while
the body of the function is being executed. This enables an object-oriented program‐
ming paradigm in which functions (which we call “methods” when used this way)
operate on the object of which they are part


Conditioal Invocation

In ES2020, you can also invoke a function using ?.() instead of (). Normally when
you invoke a function, if the expression to the left of the parentheses is null or unde
fined or any other non-function, a TypeError is thrown. With the new ?.() invoca‐
tion syntax, if the expression to the left of the ?. evaluates to null or undefined, then
the entire invocation expression evaluates to undefined and no exception is thrown

function invocation with ?.()
is short-circuiting: if the value to the left of ?. is null or undefined, then none of the
argument expressions within the parentheses are evaluated:
let f = null, x = 0;
try {
 f(x++); // Throws TypeError because f is null
} catch(e) {
 x // => 1: x gets incremented before the exception is thrown
}
f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of short-circuiting

Conditional invocation expressions with ?.() work just as well for methods as they
do for functions. But because method invocation also involves property access, it is
worth taking a moment to be sure you understand the differences between the fol‐
lowing expressions:
o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation
In the first expression, o must be an object with a property m and the value of that
property must be a function. In the second expression, if o is null or undefined, then
the expression evaluates to undefined. But if o has any other value, then it must have
a property m whose value is a function. And in the third expression, o must not be
null or undefined. If it does not have a property m, or if the value of that property is
null, then the entire expression evaluates to undefined.


Object Creation Expressions

An object creation expression creates a new object and invokes a function (called a
    constructor) to initialize the properties of that object. Object creation expressions are
    like invocation expressions except that they are prefixed with the keyword new:
    new Object()
    new Point(2,3)


Operator Overview
Ans:These are operator presidence and associativity which is very important.A
It is just like of c programming languages but some extra operator there.A
You can go through it from Internet


Unary ArithmeticExpressions

Unary operators modify the value of a single operand to produce a new value. In
JavaScript, the unary operators all have high precedence and are all right-associative.
The arithmetic unary operators described in this section (+, -, ++, and --) all convert
their single operand to a number, if necessary. Note that the punctuation characters +
and - are used as both unary and binary operators.

Unary plus (+)
The unary plus operator converts its operand to a number (or to NaN) and
returns that converted value. When used with an operand that is already a num‐
ber, it doesn’t do anything. This operator may not be used with BigInt values,
since they cannot be converted to regular numbers.
Unary minus (-)
When - is used as a unary operator, it converts its operand to a number, if neces‐
sary, and then changes the sign of the result.

Increment (++)
The ++ operator increments (i.e., adds 1 to) its single operand, which must be an
lvalue (a variable, an element of an array, or a property of an object). The opera‐
tor converts its operand to a number, adds 1 to that number, and assigns the
incremented value back into the variable, element, or property.
The return value of the ++ operator depends on its position relative to the
operand. When used before the operand, where it is known as the pre-increment
operator, it increments the operand and evaluates to the incremented value of
that operand. When used after the operand, where it is known as the postincrement operator, it increments its operand but evaluates to the unincremented
value of that operand. Consider the difference between these two lines of code:
let i = 1, j = ++i; // i and j are both 2
let n = 1, m = n++; // n is 2, m is 1
Note that the expression x++ is not always the same as x=x+1. The ++ operator
never performs string concatenation: it always converts its operand to a number
and increments it. If x is the string “1”, ++x is the number 2, but x+1 is the string
“11”.
Also note that, because of JavaScript’s automatic semicolon insertion, you cannot
insert a line break between the post-increment operator and the operand that
precedes it. If you do so, JavaScript will treat the operand as a complete statement
by itself and insert a semicolon before it.
This operator, in both its pre- and post-increment forms, is most commonly used
to increment a counter that controls a for loop

Decrement (--)
The -- operator expects an lvalue operand. It converts the value of the operand
to a number, subtracts 1, and assigns the decremented value back to the operand.
Like the ++ operator, the return value of -- depends on its position relative to the
operand. When used before the operand, it decrements and returns the decre‐
mented value. When used after the operand, it decrements the operand but
returns the undecremented value. When used after its operand, no line break is
allowed between the operand and the operator.


Bitwise Operator

The bitwise operators perform low-level manipulation of the bits in the binary repre‐
sentation of numbers. Although they do not perform traditional arithmetic opera‐
tions, they are categorized as arithmetic operators here because they operate on
numeric operands and return a numeric value.

Bitwise AND (&)
The & operator performs a Boolean AND operation on each bit of its integer
arguments. A bit is set in the result only if the corresponding bit is set in both
operands. For example, 0x1234 & 0x00FF evaluates to 0x0034.

Bitwise OR (|)
The | operator performs a Boolean OR operation on each bit of its integer argu‐
ments. A bit is set in the result if the corresponding bit is set in one or both of the
operands. For example, 0x1234 | 0x00FF evaluates to 0x12FF.

Bitwise XOR (^)
The ^ operator performs a Boolean exclusive OR operation on each bit of its inte‐
ger arguments. Exclusive OR means that either operand one is true or operand
two is true, but not both. A bit is set in this operation’s result if a corresponding
bit is set in one (but not both) of the two operands. For example, 0xFF00 ^
0xF0F0 evaluates to 0x0FF0

Bitwise NOT (~)
The ~ operator is a unary operator that appears before its single integer operand.
It operates by reversing all bits in the operand. Because of the way signed integers
are represented in JavaScript, applying the ~ operator to a value is equivalent to
changing its sign and subtracting 1. For example, ~0x0F evaluates to 0xFFFFFFF0,
or −16.

Shift left (<<)
The << operator moves all bits in its first operand to the left by the number of
places specified in the second operand, which should be an integer between 0 and
31. For example, in the operation a << 1, the first bit (the ones bit) of a becomes
the second bit (the twos bit), the second bit of a becomes the third, etc. A zero is
used for the new first bit, and the value of the 32nd bit is lost. Shifting a value left
by one position is equivalent to multiplying by 2, shifting two positions is equiva‐
lent to multiplying by 4, and so on. For example, 7 << 2 evaluates to 28.

Shift right with sign (>>)
The >> operator moves all bits in its first operand to the right by the number of
places specified in the second operand (an integer between 0 and 31). Bits that
are shifted off the right are lost. The bits filled in on the left depend on the sign
bit of the original operand, in order to preserve the sign of the result. If the first
operand is positive, the result has zeros placed in the high bits; if the first
operand is negative, the result has ones placed in the high bits. Shifting a positive
value right one place is equivalent to dividing by 2 (discarding the remainder),
shifting right two places is equivalent to integer division by 4, and so on. 7 >> 1
evaluates to 3, for example, but note that and −7 >> 1 evaluates to −4.

Shift right with zero fill (>>>)
The >>> operator is just like the >> operator, except that the bits shifted in on the
left are always zero, regardless of the sign of the first operand. This is useful when
you want to treat signed 32-bit values as if they are unsigned integers. −1 >> 4
evaluates to −1, but −1 >>> 4 evaluates to 0x0FFFFFFF, for example. This is the
only one of the JavaScript bitwise operators that cannot be used with BigInt val‐
ues. BigInt does not represent negative numbers by setting the high bit the way
that 32-bit integers do, and this operator only makes sense for that particular
two’s complement representation.



Equality and Inequality Operator

The == and === operators check whether two values are the same, using two different
definitions of sameness. Both operators accept operands of any type, and both return
true if their operands are the same and false if they are different. The === operator
is known as the strict equality operator (or sometimes the identity operator), and it
checks whether its two operands are “identical” using a strict definition of sameness.
The == operator is known as the equality operator; it checks whether its two operands
are “equal” using a more relaxed definition of sameness that allows type conversions.
The != and !== operators test for the exact opposite of the == and === operators.
The != inequality operator returns false if two values are equal to each other accord‐
ing to == and returns true otherwise. The !== operator returns false if two values
are strictly equal to each other and returns true otherwise. As you’ll see in §4.10,
the ! operator computes the Boolean NOT operation. This makes it easy to remem‐
ber that != and !== stand for “not equal to” and “not strictly equal to.”


The in operator

The in operator expects a left-side operand that is a string, symbol, or value that can
be converted to a string. It expects a right-side operand that is an object. It evaluates
to true if the left-side value is the name of a property of the right-side object. For
example:
let point = {x: 1, y: 1}; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7,8,9]; // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3


The instanceof Operator

The instanceof operator expects a left-side operand that is an object and a right-side
operand that identifies a class of objects. 
The operator evaluates to true if the leftside object is
an instance of the right-side class and evaluates to false otherwise

. Here are examples:
let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions

Note that all objects are instances of Object. instanceof considers the “superclasses”
when deciding whether an object is an instance of a class. If the left-side operand of
instanceof is not an object, instanceof returns false. If the righthand side is not a
class of objects, it throws a TypeError.

Logial Expressions 
 &&(And)
 || (OR)
 ! (Not)


Assignment Expressions

JavaScript uses the = operator to assign a value to a variable or property. For example:
i = 0; // Set the variable i to 0.
o.x = 1; // Set the property x of object o to 1.
The = operator expects its left-side operand to be an lvalue: a variable or object prop‐
erty (or array element). It expects its right-side operand to be an arbitrary value of
any type. The value of an assignment expression is the value of the right-side
operand. As a side effect, the = operator assigns the value on the right to the variable
or property on the left so that future references to the variable or property evaluate to
the value.


Assignment with operation

Besides the normal = assignment operator, JavaScript supports a number of other
assignment operators that provide shortcuts by combining assignment with some
other operation. For example, the += operator performs addition and assignment. The
following expression:
total += salesTax;
is equivalent to this one:
total = total + salesTax;
As you might expect, the += operator works for numbers or strings. For numeric
operands, it performs addition and assignment; for string operands, it performs con‐
catenation and assignment.
Similar operators include -=, *=, &=, and so on


Evalutaion Expressions

Like many interpreted languages, JavaScript has the ability to interpret strings of Java‐
Script source code, evaluating them to produce a value. JavaScript does this with the
global function eval():
eval("3+2") // => 5
Dynamic evaluation of strings of source code is a powerful language feature that is
almost never necessary in practice. If you find yourself using eval(), you should
think carefully about whether you really need to use it. In particular, eval() can be a
security hole, and you should never pass any string derived from user input to
eval(). With a language as complicated as JavaScript, there is no way to sanitize user
input to make it safe to use with eval(). Because of these security issues, some web
servers use the HTTP “Content-Security-Policy” header to disable eval() for an
entire website.


he following code demonstrates:
const geval = eval; // Using another name does a global eval
let x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
 let x = "local"; // Define a local variable
 eval("x += 'changed';"); // Direct eval sets local variable
 return x; // Return changed local variable
}
function g() { // This function does a global eval
 let y = "local"; // A local variable
 geval("y += 'changed';"); // Indirect eval sets global variable
 return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":


Miscellaneous Operators

1.The (?)/ternary Operator
  greeting = "hello " + (username ? username : "there");
  It is just like if else statement.

2.First Defined(??)
The first-defined operator ?? evaluates to its first defined operand: if its left operand
is not null and not undefined, it returns that value. Otherwise, it returns the value of
the right operand. Like the && and || operators, ?? is short-circuiting: it only evalu‐
ates its second operand if the first operand evaluates to null or undefined. If the
expression a has no side effects, then the expression a ?? b is equivalent to:
(a !== null && a !== undefined) ? a : b
?? is a useful alternative to ||
when you want to select the first defined
operand rather than the first truthy operand. Although || is nominally a logical OR
operator, it is also used idiomatically to select the first non-falsy operand with code
like this:
// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;

The problem with this idiomatic use is that zero, the empty string, and false are all
falsy values that may be perfectly valid in some circumstances. In this code example,
if maxWidth is zero, that value will be ignored. But if we change the || operator to ??,
we end up with an expression where zero is a valid value:
// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;
Here are more examples showing how ?? works when the first operand is falsy. If that
operand is falsy but defined, then ?? returns it. It is only when the first operand is
“nullish” (i.e., null or undefined) that this operator evaluates and returns the second
operand:
let options = { timeout: 0, title: "", verbose: false, n: null };
options.timeout ?? 1000 // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the object
options.verbose ?? true // => false: as defined in the object
options.quiet ?? false // => false: property is not defined
options.n ?? 10 // => 10: property is null
Note that the timeout, title, and verbose expressions here would have different val‐
ues if we used || instead of ??.

3.The typeof Operator.
  typeof is a unary operator that is placed before its single operand, which can be of
  any type. Its value is a string that specifies the type of the operand
 x             typeof(x)
  undefined    "undefined"
  null         "object"
  true or false "boolean"
  any number or NaN "number"
  any BigInt    "bigint"
  any string    "string"
  any symbol    "symbol"
  any function  "function"
  any nonfunction object "object"

4.Delete Operator

delete is a unary operator that attempts to delete the object property or array ele‐
ment specified as its operand. Like the assignment, increment, and decrement opera‐
tors, delete is typically used for its property deletion side effect and not for the value
it returns. Some examples:
let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

Note that a deleted property or array element is not merely set to the undefined
value. When a property is deleted, the property ceases to exist. Attempting to read a
nonexistent property returns undefined, but you can test for the actual existence of a
property with the in operator

Deleting an array element leaves a “hole” in
the array and does not change the array’s length. The resulting array is sparse

Here are some example uses of the delete operator:
let o = {x: 1, y: 2};
delete o.x; // Delete one of the object properties; returns true.
typeof o.x; // Property does not exist; returns "undefined".
delete o.x; // Delete a nonexistent property; returns true.
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SyntaxError in strict mode.
delete o;
// Undeletable property: returns false, or TypeError in strict mode.
delete Object.prototype;


5.The void Operator

void is a unary operator that appears before its single operand, which may be of any
type. This operator is unusual and infrequently used; it evaluates its operand, then
discards the value and returns undefined. Since the operand value is discarded, using
the void operator makes sense only if the operand has side effects.
The void operator is so obscure that it is difficult to come up with a practical example
of its use. One case would be when you want to define a function that returns nothing
but also uses the arrow function shortcut syntax (see §8.1.3) where the body of the
function is a single expression that is evaluated and returned. If you are evaluating the
expression solely for its side effects and do not want to return its value, then the sim‐
plest thing is to use curly braces around the function body. But, as an alternative, you
could also use the void operator in this case:
let counter = 0;
const increment = () => void counter++;
increment() // => undefined
counter // => 1


6.Comma Operator

The comma operator is a binary operator whose operands may be of any type. It evalu‐
ates its left operand, evaluates its right operand, and then returns the value of the
right operand. Thus, the following line:
i=0, j=1, k=2;
evaluates to 2 and is basically equivalent to:
i = 0; j = 1; k = 2;

The lefthand expression is always evaluated, but its value is discarded, which means
that it only makes sense to use the comma operator when the lefthand expression has
side effects. The only situation in which the comma operator is commonly used is
with a for loop (§5.4.3) that has multiple loop variables:
// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for(let i=0,j=10; i < j; i++,j--) {
 console.log(i+j);
}