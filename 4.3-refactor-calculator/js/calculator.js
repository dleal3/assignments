// [x] create var that will require jquery
// [x] create an anonomous function
// [x] make a var for the body
// [x] need to create var the numberButtonElement
// [x] need to create var for symbolButtonElement
// [x] create var for outputElement
// [x] Rename html buttons to just one data-js class called Button (this provides shorter code for js that allows each button to do it's job and send it in the output)
// [x] Need to make a variable for the equalButton that has a data-js class called equalButton
var $ = require("jquery");
$(function(){
  var $body = $("body");

  var $ButtonElement = $body.find("[data-js='Button']");

  var $outputElement = $body.find("[data-js='output']");

  var $equalButtonElement = $body.find("[data-js='equalButton']")



// need to make a jquery function for the ButtonElement which will have a click listener
// create a var for when button is clicked (clickedButtonElement) and set it to $(this)
// create a var for number that will display the clicked button
// set the jquery outputElement
  $ButtonElement.on("click", function(e){

    var $clickedButtonElement = $(this);

    var currentOutputString = $outputElement.text();

    var number = $clickedButtonElement.text();
// we are concatinating the currentOutputString and the number to show in the output
    $outputElement.text(currentOutputString + number);
  });




  $equalButtonElement.on("click", function(e){

    var answer = "";
      answer = eval($outputElement.html());
      $outputElement.html(answer);

    });
});
