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
var $body = $("calc__body");
var $numberKeyClearElement = $body.find("[data-js='numberKeyClear']");
var $numberKeyEqualElement = $body.find("[data-js='numberKeyEqual']");
var $outputWindowElement = $body.find("[data-js='output__Window']");
var $numberKeyElement = $body.find("[data-js='numberKey']");

  $numberKeyElement.on("click", function(e){
    var $clickedNumberString = $(this);
    var numberOutputString = $outputWindowElement.text();
    var numberString = $clickedNumberString.text();
    $outputWindowElement.text(numberOutputString + numberString);

    $numberKeyEqualElement.on("click", function(e){
      var total = eval($outputWindowElement.text());
      $outputWindowElement.text(total);
    });

    $clearElement.on("click", function(){
      var $this = $("this");
      $this = $outputWindowElement.text("");
    });
  });

});
