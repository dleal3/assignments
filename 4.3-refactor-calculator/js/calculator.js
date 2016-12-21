$(function(){
  // Everything in here will be able to see content / after it loads
var $cButtonElement = $("[data-js='cButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$cButtonElement.on("click", function(){
    $outputElement.textContent = "";
});
// wasn't sure if I needed a var element for the input area that shows
// var inputAreaButtonElement = document.querySelector("[data-js='inputAreaButton']")
// var outputElement = document.querySelector("[data-js='inputAreaButton']")

var $sevenButtonElement = $("[data-js='sevenButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$sevenButtonElement.on("click", function(){
  $outputElement.textContent += 7;
});

var $eightButtonElement = $("[data-js='eightButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$eightButtonElement.on("click", function(){
  $outputElement.textContent += 8;
});

var $nineButtonElement = $("[data-js='nineButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$nineButtonElement.on("click", function(){
  $outputElement.textContent += 9;
});

var $divideButtonElement = $("[data-js='divideButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$divideButtonElement.on("click", function(){
  $outputElement.textContent += "/"
})

var $fourButtonElement = $("[data-js='fourButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$fourButtonElement.on("click", function(){
  $outputElement.textContent += 4;
});
var $fiveButtonElement = $("[data-js='fiveButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$fiveButtonElement.on("click", function(){
  $outputElement.textContent += 5;
});
var $sixButtonElement = $("[data-js='sixButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$sixButtonElement.on("click", function(){
  $outputElement.textContent += 6;
});
var $multiplyButtonElement = $("[data-js='multiplyButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$multiplyButtonElement.on("click", function(){
  $outputElement.textContent += "*";
});

var $oneButtonElement = $("[data-js='oneButton']");
var $outputElement = $("[data-js='inputAreaButton']");
$oneButtonElement.on("click", function(){
  $outputElement.textContent += 1;
});
var twoButtonElement = document.querySelector("[data-js='twoButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
twoButtonElement.addEventListener("click", function(){
  outputElement.textContent += 2;
});
var threeButtonElement = document.querySelector("[data-js='threeButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
threeButtonElement.addEventListener("click", function(){
  outputElement.textContent += 3;
});

var minusButtonElement = document.querySelector("[data-js='minusButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
minusButtonElement.addEventListener("click", function(){
  outputElement.textContent += "-";
});
var zeroButtonElement = document.querySelector("[data-js='zeroButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
zeroButtonElement.addEventListener("click", function(){
  outputElement.textContent += 0;
});

var periodButtonElement = document.querySelector("[data-js='periodButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
periodButtonElement.addEventListener("click", function(){
  outputElement.textContent += ".";
});

var equalButtonElement = document.querySelector("[data-js='equalButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
equalButtonElement.addEventListener("click", function(){
  var answerOutput = eval(outputElement.textContent);
  outputElement.textContent = answerOutput;
});

var plusButtonElement = document.querySelector("[data-js='plusButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
plusButtonElement.addEventListener("click", function(){
  outputElement.textContent += "+";
});

});
