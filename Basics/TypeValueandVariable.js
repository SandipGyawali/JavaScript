JavaScript types can be divided into two categories: primitive types and object types.
JavaScript’s primitive types include numbers, strings of text (known as strings), and
Boolean truth values (known as booleans).

The special JavaScript values null and undefined are primitive values, but they are
not numbers, strings, or booleans. Each value is typically considered to be the sole
member of its own special type.

ES6 adds a new special-purpose type, known as Symbol, that enables the definition of language
extensions without harming backward compatibility. 

Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or unde
fined is an object.

An object (that is, a member of the type object) is a collection of
properties where each property has a name and a value (either a primitive value or
another object). One very special object, the global object.

An ordinary JavaScript object is an unordered collection of named values. The lan‐
guage also defines a special kind of object, known as an array, that represents an
ordered collection of numbered values. The JavaScript language includes special syn‐
tax for working with arrays, and arrays have some special behavior that distinguishes
them from ordinary objects.

Note: The RegExp type represents textual patterns and enables
      sophisticated matching, searching, and replacing operations on strings.


The JavaScript interpreter performs automatic garbage collection for memory man‐
agement. This means that a JavaScript programmer generally does not need to worry
about destruction or deallocation of objects or other values. When a value is no
longer reachable—when a program no longer has any way to refer to it—the inter‐
preter knows it can never be used again and automatically reclaims the memory it
was occupying. (JavaScript programmers do sometimes need to take care to ensure
that values do not inadvertently remain reachable—and therefore nonreclaimable—
longer than necessary.)      

In JavaScript, null and undefined are the only values that meth‐
ods cannot be invoked on.


JavaScript’s object types are mutable and its primitive types are immutable. A value of
a mutable type can change: a JavaScript program can change the values of object
properties and array elements. Numbers, booleans, symbols, null, and undefined are
immutable—it doesn’t even make sense to talk about changing the value of a number,
for example. Strings can be thought of as arrays of characters, and you might expect
them to be mutable. In JavaScript, however, strings are immutable: you can access the
text at any index of a string, but JavaScript provides no way to alter the text of an
existing string.

JavaScript liberally converts values from one type to another. If a program expects a
string, for example, and you give it a number, it will automatically convert the num‐
ber to a string for you. And if you use a non-boolean value where a boolean is
expected, JavaScript will convert accordingly.

Constants and variables allow you to use names to refer to values in your programs.
Constants are declared with const and variables are declared with let (or with var in
older JavaScript code). JavaScript constants and variables are untyped: declarations do
not specify what kind of values will be assigned

When a number appears directly in a JavaScript program, it’s called a numeric literal
Floating-point literals can have a decimal point.


In addition to these basic arithmetic operators, JavaScript supports more complex
mathematical operations through a set of functions and constants defined as proper‐
ties of the Math object:
Math.pow(2,53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // => 3**0.5: the square root of 3
Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100

ES6 defines more functions on the Math object:
Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024) // => 10: Base-2 logarithm
Math.log1p(x) // Natural log of (1+x); accurate for very small x
Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part
Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()


Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or divi‐
sion by zero. When the result of a numeric operation is larger than the largest repre‐
sentable number (overflow), the result is a special infinity value, Infinity. Similarly,
when the absolute value of a negative value becomes larger than the absolute value of
the largest representable negative number, the result is negative infinity, -Infinity.
The infinite values behave as you would expect: adding, subtracting, multiplying, or
dividing them by anything results in an infinite value (possibly with the sign
reversed)

Underflow occurs when the result of a numeric operation is closer to zero than the
smallest representable number. In this case, JavaScript returns 0. If underflow occurs
from a negative number, JavaScript returns a special value known as “negative zero.”
This value is almost completely indistinguishable from regular zero and JavaScript
programmers rarely need to detect it.

Division by zero is not an error in JavaScript: it simply returns infinity or negative
infinity. There is one exception, however: zero divided by zero does not have a welldefined value, and the result of this operation is the special not-a-number value, NaN.
NaN also arises if you attempt to divide infinity by infinity, take the square root of a
negative number, or use arithmetic operators with non-numeric operands that cannot
be converted to numbers.
Number object:
Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value
1/0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; overflow
-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value
-1/0 // => -Infinity
-Number.MAX_VALUE * 2 // => -Infinity
NaN // The not-a-number value
Number.NaN // The same value, written another way
0/0 // => NaN
Infinity/Infinity // => NaN
Number.MIN_VALUE/2 // => 0: underflow
-Number.MIN_VALUE/2 // => -0: negative zero
-1/Infinity // -> -0: also negative 0
-0


// The following Number properties are defined in ES6
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers



JavaScript numbers have plenty of precision and can approximate 0.1 very closely.
But the fact that this number cannot be represented exactly can lead to problems.
Consider this code:
let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1
Because of rounding error, the difference between the approximations of .3 and .2 is
not exactly the same as the difference between the approximations of .2 and .1. It is
important to understand that this problem is not specific to JavaScript: it affects any
programming language that uses binary floating-point numbers. Also, note that the
values x and y in the code shown here are very close to each other and to the correct
value. The computed values are adequate for almost any purpose; the problem only
arises when we attempt to compare values for equality.


BigInt is a numeric type whose values are integers. The type was added to JavaScript
mainly to allow the representation of 64-bit integers, which are required for compati‐
bility with many other programming languages and APIs. But BigInt values can have
thousands or even millions of digits, should you have need to work with numbers
that large. (Note, however, that BigInt implementations are not suitable for cryptog‐
raphy because they do not attempt to prevent timing attacks.)

BigInt literals are written as a string of digits followed by a lowercase letter n.
1234n

You can use BigInt() as a function for converting regular JavaScript numbers or
strings to BigInt values:
BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string) // => 10n**100n: one googol


Although the standard +, -, *, /, %, and ** operators work with BigInt, it is important
to understand that you may not mix operands of type BigInt with regular number
operands.

Imp:A string is an immutable
    ordered sequence of 16-bit values, each of which typically represents a Unicode char‐
    acter. The length of a string is the number of 16-bit values it contains. JavaScript’s
    strings (and its arrays) use zero-based indexing: the first 16-bit value is at position 0,
    the second at position 1, and so on. The empty string is the string of length 0. Java‐
    Script does not have a special type that represents a single element of a string. To rep‐
    resent a single 16-bit value, simply use a string that has a length of 1.
   
In ES6, however, strings are iterable, and if you use the for/of loop or ... operator
with a string, it will iterate the actual characters of the string, not the 16-bit values.


Srtring Literals:

To include a string in a JavaScript program, simply enclose the characters of the
string within a matched pair of single or double quotes or backticks (' or " or `).
Double-quote characters and backticks may be contained within strings delimited by
single-quote characters, and similarly for strings delimited by double quotes and
backticks. Here are examples of string literals:
"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`
Strings delimited with backticks are a feature of ES6, and allow JavaScript expressions
to be embedded within (or interpolated into) the string literal. 

The ES6
backtick syntax allows strings to be broken across multiple lines, and in this case, the
line terminators are part of the string literal:
// A string representing 2 lines written on one line:
'two\nlines'
// A one-line string written on 3 lines:
"one\
 long\
 line"
// A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`
Note that when you use single quotes to delimit your strings, you must be careful
with English contractions and possessives, such as can’t and O’Reilly’s. Since the apos‐
trophe is the same as the single-quote character, you must use the backslash character
(\) to “escape” any apostrophes that appear in single-quoted strings (escapes are
explained in the next section).

One of the built-in features of JavaScript is the ability to concatenate strings. If you
use the + operator with numbers, it adds them. But if you use this operator on strings,
it joins them by appending the second to the first. For example:
let msg = "Hello, " + "world"; // Produces the string "Hello, world"

Strings can be compared with the standard === equality and !== inequality operators:
two strings are equal if and only if they consist of exactly the same sequence of 16-bit
values. Strings can also be compared with the <, <=, >, and >= operators. String com‐
parison is done simply by comparing the 16-bit values.

To determine the length of a string—the number of 16-bit values it contains—use the
length property of the string:
s.length
In addition to this length property, JavaScript provides a rich API for working with
strings:
let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6
Remember that strings are immutable in JavaScript. Methods like replace() and
toUpperCase() return new strings: they do not modify the string on which they are
invoked.
Strings can also be treated like read-only arrays, and you can access individual char‐
acters (16-bit values) from a string using square brackets instead of the charAt()
method:
let s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"



Template Literals:

In ES6 and later, string literals can be delimited with backticks:
let s = `hello world`;
This is more than just another string literal syntax, however, because these template
literals can include arbitrary JavaScript expressions. The final value of a string literal
in backticks is computed by evaluating any included expressions, converting the val‐
ues of those expressions to strings and combining those computed strings with the
literal characters within the backticks:
let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."
Everything between the ${ and the matching } is interpreted as a JavaScript expres‐
sion. Everything outside the curly braces is normal string literal text. The expression
inside the braces is evaluated and then converted to a string and inserted into the
template, replacing the dollar sign, the curly braces, and everything in between them.



Pattern Matching:

JavaScript defines a datatype known as a regular expression (or RegExp) for describing
and matching patterns in strings of text. RegExps are not one of the fundamental
datatypes in JavaScript, but they have a literal syntax like numbers and strings do, so
they sometimes seem like they are fundamental.

Text between a pair of slashes constitutes a regular expression literal. The second
slash in the pair can also be followed by one or more letters, which modify the mean‐
ing of the pattern. For example:
/^HTML/; // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i; // Match "javascript" as a word, case-insensitive
RegExp objects define a number of useful methods, and strings also have methods
that accept RegExp arguments. For example:
let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits



Boolean Value:

. The
following values convert to, and therefore work like, false:
undefined
null
0
-0
NaN
"" // the empty string
All other values, including all objects (and arrays) convert to, and work like, true.
false, and the six values that convert to it, are sometimes called falsy values, and all
other values are called truthy. Any time JavaScript expects a boolean value, a falsy
value works like false and a truthy value works like true.


Null and undefined:
null is a language keyword that evaluates to a special value that is usually used to
indicate the absence of a value. Using the typeof operator on null returns the string
“object”, indicating that null can be thought of as a special object value that indicates
“no object”. In practice, however, null is typically regarded as the sole member of its
own type, and it can be used to indicate “no value” for numbers and strings as well as
objects. Most programming languages have an equivalent to JavaScript’s null: you
may be familiar with it as NULL, nil, or None.

JavaScript also has a second value that indicates absence of value. The undefined
value represents a deeper kind of absence. It is the value of variables that have not
been initialized and the value you get when you query the value of an object property
or array element that does not exist. The undefined value is also the return value of
functions that do not explicitly return a value and the value of function parameters
for which no argument is passed. undefined is a predefined global constant (not a
language keyword like null, though this is not an important distinction in practice)
that is initialized to the undefined value. If you apply the typeof operator to the unde
fined value, it returns “undefined”, indicating that this value is the sole member of a
special type.

Despite these differences, null and undefined both indicate an absence of value and
can often be used interchangeably. The equality operator == considers them to be
equal. (Use the strict equality operator === to distinguish them.) Both are falsy values:
they behave like false when a boolean value is required.
. Neither null nor undefined have any properties or methods. In fact, using . or [] to access a property or method
of these values causes a TypeError


Symbols:

Symbols were introduced in ES6 to serve as non-string property names. To under‐
stand Symbols, you need to know that JavaScript’s fundamental Object type is an
unordered collection of properties, where each property has a name and a value.
Property names are typically (and until ES6, were exclusively) strings. But in ES6 and
later, Symbols can also serve this purpose:
let strname = "string name"; // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname // => "string": strname is a string
typeof symname // => "symbol": symname is a symbol
let o = {}; // Create a new object
o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a Symbol name
o[strname] // => 1: access the string-named property
o[symname] // => 2: access the symbol-named property
The Symbol type does not have a literal syntax. To obtain a Symbol value, you call the
Symbol() function.This function never returns the same value twice, even when
called with the same argument. This means that if you call Symbol() to obtain a Sym‐
bol value, you can safely use that value as a property name to add a new property to
an object and do not need to worry that you might be overwriting an existing prop‐
erty with the same name. Similarly, if you use symbolic property names and do not
share those symbols, you can be confident that other modules of code in your pro‐
gram will not accidentally overwrite your properties

let s = Symbol("sym_x");
s.toString() // => "Symbol(sym_x)"
toString() is the only interesting method of Symbol instances.

To serve this latter use case, JavaScript defines a global Symbol registry. The
Symbol.for() function takes a string argument and returns a Symbol value that is
associated with the string you pass. If no Symbol is already associated with that string,
then a new one is created and returned; otherwise, the already existing Symbol is
returned. That is, the Symbol.for() function is completely different than the Sym
bol() function: Symbol() never returns the same value twice, but Symbol.for()
always returns the same value when called with the same string. The string passed to
Symbol.for() appears in the output of toString() for the returned Symbol, and it
can also be retrieved by calling Symbol.keyFor() on the returned Symbol.
let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t // => true
s.toString() // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"


The Global Object

A global object is an object that always exists in the global scope. 
In JavaScript, there's always a global object defined. 
In a web browser, when scripts create global variables defined with the var keyword, they're created as members of the global object, function can also be assigned.
Example of global object are : alert, console for moew you can use mdn refrence website
window is known as JavaScript global object.
For nodejs to access global object we write global not window.
Calling of global object is different for different broweser.
So , the universal keyword for accessing global object in any broswer is globalThis



8 Immutable Primitive Values and Mutable Object References
Ans:
Objects are different than primitives. First, they are mutable—their values can
change:

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
let a = [1,2,3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

Objects are not compared by value: two distinct objects are not equal even if they
have the same properties and values. And two distinct arrays are not equal even if
they have the same elements in the same order:

let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
let a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal

Objects are sometimes called reference types to distinguish them from JavaScript’s
primitive types. Using this terminology, object values are references, and we say that
objects are compared by reference: two object values are the same if and only if they
refer to the same underlying object.

let a = []; // The variable a refers to an empty array.
let b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.

As you can see from this code, assigning an object (or array) to a variable simply
assigns the reference: it does not create a new copy of the object. If you want to make
a new copy of an object or array, you must explicitly copy the properties of the object
or the elements of the array. This example demonstrates using a for loop (§5.4.3):

let a = ["a","b","c"]; // An array we want to copy
let b = []; // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
 b[i] = a[i]; // Copy an element of a into b
}
let c = Array.from(b); // In ES6, copy arrays with Array.from()

Similarly, if we want to compare two distinct objects or arrays, we must compare their
properties or elements. This code defines a function to compare two arrays:

function equalArrays(a, b) {
 if (a === b) return true; // Identical arrays are equal
 if (a.length !== b.length) return false; // Different-size arrays not equal
 for(let i = 0; i < a.length; i++) { // Loop through all elements
 if (a[i] !== b[i]) return false; // If any differ, arrays not equal
 }


Conversions and Equality

JavaScript has two operators that test whether two values are equal. The “strict equal‐
ity operator,” ===, does not consider its operands to be equal if they are not of the
same type, and this is almost always the right operator to use when coding. But
because JavaScript is so flexible with type conversions, it also defines the == operator
with a flexible definition of equality. All of the following comparisons are true, for
example:
null == undefined // => true: These two values are treated as equal.
"0" == 0 // => true: String converts to a number before comparing.
0 == false // => true: Boolean converts to number before comparing.
"0" == false // => true: Both operands convert to 0 before comparing!



Explicit Conversion

Although JavaScript performs many type conversions automatically, you may some‐
times need to perform an explicit conversion, or you may prefer to make the conver‐
sions explicit to keep your code clearer.

The simplest way to perform an explicit type conversion is to use the Boolean(), Num
ber(), and String() functions:
Number("3") // => 3
String(false) // => "false": Or use false.toString()
Boolean([]) // => true
Any value other than null or undefined has a toString() method, and the result of
this method is usually the same as that returned by the String() function.

let n = 123456.789;
n.toFixed(0) // => "123457"
n.toFixed(2) // => "123456.79"
n.toFixed(5) // => "123456.78900"
n.toExponential(1) // => "1.2e+5"
n.toExponential(3) // => "1.235e+5"
n.toPrecision(4) // => "1.235e+5"
n.toPrecision(7) // => "123456.8"
n.toPrecision(10) // => "123456.7890"

parseInt("3 blind mice") // => 3
parseFloat(" 3.14 meters") // => 3.14
parseInt("-12.34") // => -12
parseInt("0xFF") // => 255
parseInt("0xff") // => 255
parseInt("-0XFF") // => -255
parseFloat(".1") // => 0.1
parseInt("0.1") // => 0
parseInt(".1") // => NaN: integers can't start with "."
parseFloat("$72.47") // => NaN: numbers can't start with "$"

parseInt() accepts an optional second argument specifying the radix (base) of the
number to be parsed. Legal values are between 2 and 36. For example:

parseInt("11", 2) // => 3: (1*2 + 1)
parseInt("ff", 16) // => 255: (15*16 + 15)
parseInt("zz", 36) // => 1295: (35*36 + 35)
parseInt("077", 8) // => 63: (7*8 + 7)
parseInt("077", 10) // => 77: (7*10 + 7)

The toString() and valueOf() methods

[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) { f(x); }"
/\d+/g.toString() // => "/\\d+/g"
let d = new Date(2020,0,1);
d.toString() // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

let d = new Date(2010, 0, 1); // January 1, 2010, (Pacific time)
d.valueOf() // => 1262332800000



Variable Declaration and Assignment

In modern JavaScript (ES6 and later), variables are declared with the let keyword,
like this:
let i;
let sum;
You can also declare multiple variables in a single let statement:
let i, sum;
It is a good programming practice to assign an initial value to your variables when
you declare them, when this is possible:
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x*x; // Initializers can use previously declared variables
If you don’t specify an initial value for a variable with the let statement, the variable
is declared, but its value is undefined until your code assigns a value to it.
To declare a constant instead of a variable, use const instead of let. const works just
like let except that you must initialize the constant when you declare it:
const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496E8; // Astronomical Unit: distance to the sun (km)
As the name implies, constants cannot have their values changed, and any attempt to
do so causes a TypeError to be thrown.
It is a common (but not universal) convention to declare constants using names with
all capital letters such as H0 or HTTP_NOT_FOUND as a way to distinguish them from
variables.



destructuring Assignment
ES6 implements a kind of compound declaration and assignment syntax known as
destructuring assignment. In a destructuring assignment, the value on the righthand
side of the equals sign is an array or object (a “structured” value), and the lefthand
side specifies one or more variable names using a syntax that mimics array and object
literal syntax. When a destructuring assignment occurs, one or more values are
extracted (“destructured”) from the value on the right and stored into the variables
named on the left. Destructuring assignment is perhaps most commonly used to ini‐
tialize variables as part of a const, let, or var declaration statement, but it can also be
done in regular assignment expressions (with variables that have already been
declared).destructuring can also be used when defining
the parameters to a function.

Here are simple destructuring assignments using arrays of values:
let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values
Notice how destructuring assignment makes it easy to work with functions that
return arrays of values:
// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
 return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}
// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
 return [r*Math.cos(theta), r*Math.sin(theta)];
}
let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
let [x,y] = toCartesian(r,theta); // [x, y] == [1.0, 1,0]

The number of variables on the left of a destructuring assignment does not have to
match the number of array elements on the right. Extra variables on the left are set to
undefined, and extra values on the right are ignored. The list of variables on the left
can include extra commas to skip certain values on the right:
let [x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4
If you want to collect all unused or remaining values into a single variable when
destructuring an array, use three dots (...) before the last variable name on the lefthand side:
let [x, ...y] = [1,2,3,4]; // y == [2,3,4]