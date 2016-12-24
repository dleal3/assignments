// [x] create var that will require jquery
// [x] create an anonomous function
// [x] make a var for the body
// [x] need to create var the numberButtonElement
// [x] need to create var for symbolButtonElement
// [x] create var for outputElement
// [x] Rename html buttons to just one data-js class called Button (this provides shorter code for js that allows each button to do it's job and send it in the output)
// [x] Need to make a variable for the equalButton that has a data-js class called numberKeyEqual
var $ = require("jquery");

$(function(){
  // need to declare a var for body and assign it a value
var $body = $(".calc__body");
var $numberKeyElementClear = $body.find("[data-js='numberKeyClear']");
var $numberKeyElementEqual = $body.find("[data-js='numberKeyEqual']");
var $outputWindowElement = $body.find("[data-js='output__Window']");

$numberKeyElementEqual.on("click", function (e){
  var answerOutput = eval($outputWindowElement.html());
  $outputWindowElement.html(answerOutput);
});

});
