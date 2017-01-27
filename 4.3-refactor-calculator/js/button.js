// [x] create var that will require jquery
// [x] create an anonomous function
// [x] make a var for the body
// [x] need to create var the numberButtonElement
// [x] need to create var for symbolButtonElement
// [x] create var for outputElement
// [x] Rename html buttons to just one data-js class called Button (this provides shorter code for js that allows each button to do it's job and send it in the output)
// [x] Need to make a variable for the equalButton that has a data-js class called numberKeyEqual
var $ = require("jquery");
$(function (){
  var $body = $("body");
  var $nameButtonElements = $body.find("[data-js='buttonNum']");
  var $outputElement = $body.find("[data-js='outputDisplay']");
  var $equalButtonElement = $body.find("[data-js='buttonEqual']")
  $nameButtonElements.on("click", function(){
    var $this = $(this);
    var currentOutputDigits = $outputElement.text();
    var currentDigit = $this.text();
    $outputElement.text(currentOutputDigits+currentDigit);
    if ($this.text() === "C") {
      $outputElement.text("");
    }
    if ($this.text() === "X") {
      $outputElement.text(currentOutputDigits+"*");
    }
    if ($this.text() === "=") {
      var answer = eval($outputElement.html());
      $outputElement.text(answer.toFixed(3));
    }
  });
});
