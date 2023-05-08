
  -Lexical Structure of a programming language is the set of elementary rule 
   that specifies how you write programs in that language.
  
  -It is also known as the lowest level syntax of a language.
  
  -specifies what variable names look like, the delimiter characters for com‐
   ments, and how one program statement is separated from the next, for example. This
   short chapter documents the lexical structure of JavaScript.

   It covers:

   • Case sensitivity, spaces, and line breaks
   • Comments
   • Literals
   • Identifiers and reserved words
   • Unicode
   • Optional semicolons
   
    Note: JavaScript is Case Sensitive language.
         Always declare variables in cameCase format.
  
    Tokens: These are words or symbols used by code to specify the application's logic. 
          These include +, -, ?, if, else, and var.These are reserved by the JavaScript engine and cannot be misused.
          They also cannot be used as part of variable names       


 -> A literal is a data value that appears directly in a program. The following are all literals:

12 // The number twelve
1.2 // The number one point two
"hello world" // A string of text
'Hi' // Another string
true // A Boolean value
false // The other Boolean value
null // Absence of an object



Identifiers;

-> An identifier is simply a name which are use to name constants, variable , properties, functions and classes and to provide labels
     for certain loops in JavaScript code
   
   -Javascript identirfier must begin with a letter an underscore(_) or a dollar sign.($)
   
   -Subsequent characters can be letters, digits, underscore or dollar sign.(Digits are not allowed)


Reserved Words

 -> A reserved word or a reserved identifier is a word that cannot be used as an identifier, 
   such as the name of a variable, function, or label. Thus, it is reserved and cannot be used for defining any of these.
   This is a syntactic definition, and a reserved word may have no meaning.
   
  Some of the reserved words are:
   
   ->as const export get null target void
     async continue extends if of this while
     await debugger false import return throw with
     break default finally in set true yield
     case delete for instanceof static try
     catch do from let super typeof
     class else function new switch var.



Unicode.
  --> Unicode is a universal character set that defines the list of characters from the majority of the writing systems, 
      and associates for every character a unique number (code point).

   
Optional Semicolon.

--> Yes you herd it right.Semi-colon are usually optional in JavaScript.
    -Semicolon are used to seperate statements from one another.$
    
    -Note: Always try to use semicolon in the code. It will be easier to seperate the statements and at some case will be easier to understand code,
    
    -Sometime also prevents from unwanted error/ bugs caued due to missing semicolon,
    
    -So, better always to use it.$
  
    a = 3;
    b = 4;

Imp:

Note that JavaScript does not treat every line break as a semicolon: it usually treats
line breaks as semicolons only if it can’t parse the code without adding an implicit
semicolon. More formally (and with three exceptions described a bit later), JavaScript
treats a line break as a semicolon if the next nonspace character cannot be interpreted
as a continuation of the current statement. Consider the following code:
let a
a
=
3
console.log(a)
JavaScript interprets this code like this:
let a; a = 3; console.log(a);

JavaScript does treat the first line break as a semicolon because it cannot parse the
code let a a without a semicolon. The second a could stand alone as the statement
a;, but JavaScript does not treat the second line break as a semicolon because it can
continue parsing the longer statement a = 3;.


you must not insert a line break between return, break, or continue
and the expression that follows the keyword. If you do insert a line break, your code
is likely to fail in a nonobvious way that is difficult to debug.

The second exception involves the ++ and −− operators


These operators can be
prefix operators that appear before an expression or postfix operators that appear
after an expression. If you want to use either of these operators as postfix operators,
they must appear on the same line as the expression they apply to. The third excep‐
tion involves functions defined using concise “arrow” syntax: the => arrow itself must
appear on the same line as the parameter list