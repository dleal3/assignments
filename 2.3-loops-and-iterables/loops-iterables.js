// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(numbersArray){
  // var squaredNumber = Math.pow(numbersArray[1],2);
  for (var i = 0; i < numbersArray.length; i++) {
    // hold a referecne to current number
    var currentNumber = numbersArray[i];
    // square the current number and set it back into array.
    numbersArray[i] = Math.pow(currentNumber, 2);
    // array[i]
  }
  // console.log(numbersArray);
  return numbersArray;
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
// [x] write a function called nicer.
// [x] Clean up language in it's input sentence.
// [x] Create for loop to loop over array
// [x] Create var sentenceArray = sentence.split(" ")

function nicer(sentence){
  // converted into array
  var sentenceArray = sentence.split(" ");
  // console.log(sentenceArray);
  // create a var that makes both strings equal eachother.
  for (var i = 0; i < sentenceArray.length; i++) {

    var currentWord = sentenceArray[i];

    if(currentWord === "heck" || currentWord === "darn" || currentWord === "crappy" || currentWord === "dang"){
      sentenceArray.splice(i, 1);
    }
    // remove from array @ i
    // sentenceArray.splice(i.1)
    // sentenceArray[i] = currentSentence;
    // var str = "dad get the heck in here and bring me a darn sandwich."
    // var res = sentence.slice(2,3,10); THIS DID NOT WORK
  }
  // var string1 = string2
  // need to define string2 THIS didn't work at all.
  var cleanSentence = sentenceArray.join(" ");
  return cleanSentence;
}

console.assert(nicer("dad get the heck in here and bring me a darn sandwich.") === "dad get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.
// [x] write function named capitalizeAll()
// [x] going to need a for loop
// [x] going to need a if statement
// [x] going to need to create a var for the input
// [x] going to need to make new sentence with capital letters. (possibly using replace syntax)
function capitalizeAll(sentence){
  // since the string is what we need to convert, we use an array.
  var sentenceArray = sentence.split(" ");

  for (var i = 0; i < sentenceArray.length; i++) {

    var wordArray = sentenceArray[i].split("");

    var capitalizedLetter = wordArray[0].toUpperCase();

    wordArray[0] = capitalizedLetter;

    var joinedWord = wordArray.join("");

    sentenceArray[i] = joinedWord;

  }
  var joinedSentence = sentenceArray.join(" ")
  return joinedSentence;
}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
// [x]write a function properSentenses()
// [x]make a argument/input
//[x]make a reference to the paragraph
//[x] make the paragraph array
//[x] set it equal to where you want it split.
//[x]create a loop that will run through the array


// So what do we want to input? - A set of sententes in a string. Since there are several, we'll call it paragraph

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

function properSentenses(paragraph){
  // we create a reference to the paragraph and say that we want to split at every period in that string.
  var paragraphArray = paragraph.split(". ");
// So we create a loop that will run through the array of the paragraph, and split at every period.
  for (var i = 0; i < paragraphArray.length; i++) {
    // then we create a variable for the currentSentence that will equal the paragraphArray. The i means we will do something in the array.
    var currentSentence = paragraphArray[i];
    // here we create a variable for the sentencewordArray that equals splitting between words
    var sentenceWordsArray = currentSentence.split(" ");

    var currentwordArray = sentenceWordsArray[i];

  }

}


console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
// [x]write a function called iPutTheFunIn()
// [x]make an argument as a string/sentence
// []create a loop for the argument
// []
// []
// []
function iPutTheFunIn(sentence){
  var sentenceArray = sentence.slice
}
//
console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'dad bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
    return n * n
}

var addOne = function(n) {
    return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + '!')
    }
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
