
// HAVE NO CLUE WHAT THIS AREA IS FOR
var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a,b){
  if (a>b){
    return a;
  }else if (b>a) {
    return b;
// Not really understanding why we need to place another else return b.
  } else {
    return b;

  }
}
// So I commented out the formula and tried to rewrite it from memory, but I had to use the reference for the last else return b; statement.
    // if(a>b){
    //   return a;
    // }else if(b>a){
    //   return b;
    // }else {
    //   return b;
    // }

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
// Trying to write while I read the instructions
function maxOfThree(a,b,c) {
  if (a > b && > c){
    return a;
  }else if (b > a && > c) {
    return b;
  }else {
    return c;
  }
}
// function maxOfThree(a, b, c){
//   if( a > b && a > c ){
//     return a;
//   }else if( b > a && b > c ){
//     return b;
//   }else{return c;}



console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
// Trying to write as I read
// // function isVowel(char){
//   var vowelsArray = [
//     "a","e","i","o","u",
//     "A", "E", "I", "O", "U"
//   ]
//   // Not sure if any of this is right!!
//     if (isVowel) {
//       return true;{
//         else {
//           return false;
//         }
//       }
//     }
//
//   return true;{
//     if (isVowel) {
//     }else {
//       return false;
//     }
//   }
// }

function isVowel(char){
  var vowelsArray = [
    "a","e","i","o","u",
    "A", "E", "I", "O", "U"
  ];
  if(vowelsArray.indexof(char) === -1){
    return false;
  }else{
    return true;
  }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
// THIS IS JUST PLAIN EOEVOVILOL!!!
 */

 function rovarspraket(text){

 }

// This is where I get lost.

// function rovarspraket(text){
//   var vowelsArray = [
//     "a","e","i","o","u",
//     "A", "E", "I", "O", "U"
//   ];
//   for(var i = 0; i < text.length; i++){
//     var currentLetter = vowelsArray[i];
//
//     if(vowelsArray.indexof(char) === -1){
//       var consonant = char;
//       var doubledText = "o" + consonant;
//
//       text.splice(i, 0, doubledText );
//     }
//
//   }
//   return text;
// }

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  // var not sure what the var would be named
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  // var not sure what the var would be named 
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
