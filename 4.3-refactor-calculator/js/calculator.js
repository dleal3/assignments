var $ = require("jquery");
$(function(){

var $body = $("body");

var $numButtonElement = $body.find("[data-js='numButton']");

var $symbolButtonElements = $body.find("[data-js='symbolButton']");

var $outputElement = $body.find("[data-js='output']");


$numButtonElement.on("click", function(e){
  var $clickednumButtonElement = $(this);
  var currentOutputString = $outputElement.text();
  var number = $clickednumButtonElement.text();
  $outputElement.text(currentOutputString + number);
});

  // Everything in here will be able to see content / after it loads
// var $clearButtonElement = $("[data-js='clearButton']");
// var $outputElement = $("[data-js='output']");
// $cButtonElement.on("click", function(){
//     $outputElement.textContent = "";
// });
//
// var $sevenButtonElement = $("[data-js='sevenButton']");
// var $outputElement = $("[data-js='output']");
// $sevenButtonElement.on("click", function(){
//   $outputElement.textContent += 7;
// });
//
// //
// // //
// var $eightButtonElement = $("[data-js='eightButton']");
// var $outputElement = $("[data-js='output']");
// $eightButtonElement.on("click", function(){
//   $outputElement.textContent += 8;
// });
//
// //
// var $nineButtonElement = $("[data-js='nineButton']");
// var $outputElement = $("[data-js='output']");
// $nineButtonElement.on("click", function(){
//   $outputElement.textContent += 9;
// });
//
// //
// var $divideButtonElement = $("[data-js='divideButton']");
// var $outputElement = $("[data-js='output']");
// $divideButtonElement.on("click", function(){
//   $outputElement.textContent += "/"
// });
// //
// var $fourButtonElement = $("[data-js='fourButton']");
// var $outputElement = $("[data-js='output']");
// $fourButtonElement.on("click", function(){
//   $outputElement.textContent += 4;
// });
//
// //
// var $fiveButtonElement = $("[data-js='fiveButton']");
// var $outputElement = $("[data-js='output']");
// $fiveButtonElement.on("click", function(){
//   $outputElement.textContent += 5;
// });
//
// //
// var $sixButtonElement = $("[data-js='sixButton']");
// var $outputElement = $("[data-js='output']");
// $sixButtonElement.on("click", function(){
//   $outputElement.textContent += 6;
// });
//
// //
// var $multiplyButtonElement = $("[data-js='multiplyButton']");
// var $outputElement = $("[data-js='output']");
// $multiplyButtonElement.on("click", function(){
//   $outputElement.textContent += "*";
// });
//
// //
// // //
// var $oneButtonElement = $("[data-js='oneButton']");
// var $outputElement = $("[data-js='output']");
// $oneButtonElement.on("click", function(){
//   $outputElement.textContent += 1;
// });
// //
// var $twoButtonElement = $("[data-js='twoButton']");
// var $outputElement = $("[data-js='output']");
// $twoButtonElement.on("click", function(){
//   $outputElement.textContent += 2;
// });
// //
// //
// var $threeButtonElement = $("[data-js='threeButton']");
// var $outputElement = $("[data-js='output']");
// $threeButtonElement.on("click", function(){
//   $outputElement.textContent += 3;
// });
//
// //
// var $minusButtonElement = $("[data-js='minusButton']");
// var $outputElement = $("[data-js='output']");
// $minusButtonElement.on("click", function(){
//   $outputElement.textContent += "-";
// });
//
// //
// var $zeroButtonElement = $("[data-js='zeroButton']");
// var outputElement = $("[data-js='output']");
// $zeroButtonElement.on("click", function(){
//   $outputElement.textContent += 0;
// });
//
// //
// // //
// var $periodButtonElement = $("[data-js='periodButton']");
// var $outputElement = $("[data-js='output']");
// $periodButtonElement.on("click", function(){
//   $outputElement.textContent += ".";
// });
//
// //
// // //
// var $equalButtonElement = $("[data-js='equalButton']");
// var $outputElement = $("[data-js='output']");
// $equalButtonElement.on("click", function(){
//   var $answerOutput = eval($outputElement.textContent);
//   $outputElement.textContent = $answerOutput;
// });
// //
// // //
// var $plusButtonElement = $("[data-js='plusButton']");
// var $outputElement = $("[data-js='output']");
// $plusButtonElement.on("click", function(){
//   $outputElement.textContent += "+";
// });
//
// //
// });
