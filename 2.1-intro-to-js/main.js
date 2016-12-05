/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: Nothing, it is only a declaration. We have not given it an assignment yet.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: "Tim"


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: So I would guess that the given name now equals "Tim" and "JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: "Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: Set to 40

math = high - "5";
// Q: What is `math` set to?
// A: Set to 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;
// Answers Below:
var TimsAge = today - born
console.log(TimsAge);



// Store some information following in variables.
var yourName = "Daniel "
var instructorName = " Jason"

// Update the variables above so the expression reads correctly.
// Answers Below:
console.log(statement);

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;





// WHAT I LEARNED today
// OBJECT SYNTAX - AN OBJECT SYNTAX HAS CURLY BRACKETS {} AND IS USED TO INCLUDE COMPLEX DATA OR INFORMATION. IF WE HAVE AN OBJECT AND WOULD LIKE TO PULL THE INFORMATION WITHIN THE OBJECT {} WE JUST USE A DOT SYNTAX TO OPEN A SPECIFIC OBJECT.

// ARRAY SYNTAX - AN ARRAY SYNTAX IS USED FOR A COLLECTION OF THINGS. THERE CAN BE AS BIG OR AS SMALL OF A COLLECTION OF THINGS INSIDE AN ARRAY. IF WE WANTED TO OPEN A CERTAIN "ITEM OR COLLECTION" WE WOULD USE THE [] SYNTAX IN SEQUENTIAL ORDER. (I.E - 0,1,2,3)

// CONSOLE.LOG() - CONSOLE.LOG() ALLOWS US TO OPEN UP OR "CALL" AN ASSIGNED VARIABLE.

// DOM - When browsers started supporting and implementing the Document Object Model (DOM), which allows us to have much richer interaction with web pages, JavaScript started to get more interesting.The DOM is an object representation of the document. In human words you can say that the DOM explains both the types, the values and the hierarchy of everything in the document. Using the DOM you can: Access any element in the document and manipulate its look, content and attributes. Create new elements and content and apply them to the document when and if they are needed.This means that we don’t have to rely on windows, frames, forms and ugly alerts any longer, and can give feedback to the user in the document in a nicely styled manner. REFERENCED THIS WEBSITE - https://www.w3.org/community/webed/wiki/What_can_you_do_with_JavaScript#The_downside_of_JavaScript
