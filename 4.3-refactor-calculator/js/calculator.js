var $ = require("jquery");
$(function(){
  // Everything in here will be able to see content / after it loads
var $cButtonElement = $("[data-js='cButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$cButtonElement.on("click", function(){
    $outputElement.textContent = "";
});
// });
var $sevenButtonElement = $("[data-js='sevenButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$sevenButtonElement.on("click", function(){
  $outputElement.textContent += 7;
});

//
// //
var $eightButtonElement = $("[data-js='eightButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$eightButtonElement.on("click", function(){
  $outputElement.textContent += 8;
});

//
var $nineButtonElement = $("[data-js='nineButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$nineButtonElement.on("click", function(){
  $outputElement.textContent += 9;
});

//
var $divideButtonElement = $("[data-js='divideButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$divideButtonElement.on("click", function(){
  $outputElement.textContent += "/"
});
//
var $fourButtonElement = $("[data-js='fourButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$fourButtonElement.on("click", function(){
  $outputElement.textContent += 4;
});

//
var $fiveButtonElement = $("[data-js='fiveButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$fiveButtonElement.on("click", function(){
  $outputElement.textContent += 5;
});

//
var $sixButtonElement = $("[data-js='sixButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$sixButtonElement.on("click", function(){
  $outputElement.textContent += 6;
});

//
var $multiplyButtonElement = $("[data-js='multiplyButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$multiplyButtonElement.on("click", function(){
  $outputElement.textContent += "*";
});

//
// //
var $oneButtonElement = $("[data-js='oneButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$oneButtonElement.on("click", function(){
  $outputElement.textContent += 1;
});
//
var $twoButtonElement = $("[data-js='twoButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$twoButtonElement.on("click", function(){
  $outputElement.textContent += 2;
});
//
//
var $threeButtonElement = $("[data-js='threeButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$threeButtonElement.on("click", function(){
  $outputElement.textContent += 3;
});

//
var $minusButtonElement = $("[data-js='minusButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$minusButtonElement.on("click", function(){
  $outputElement.textContent += "-";
});

//
var $zeroButtonElement = $("[data-js='zeroButton']");
var outputElement = $("[data-js='inputAreaButton']");
$zeroButtonElement.on("click", function(){
  $outputElement.textContent += 0;
});

//
// //
var $periodButtonElement = $("[data-js='periodButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$periodButtonElement.on("click", function(){
  $outputElement.textContent += ".";
});

//
// //
var $equalButtonElement = $("[data-js='equalButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$equalButtonElement.on("click", function(){
  var $answerOutput = eval($outputElement.textContent);
  $outputElement.textContent = $answerOutput;
});
//
// //
var $plusButtonElement = $("[data-js='plusButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$plusButtonElement.on("click", function(){
  $outputElement.textContent += "+";
});
console.log("this is a textlskfjlsdfj;afldj");

//
});
