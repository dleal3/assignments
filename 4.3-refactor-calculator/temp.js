var calculator = require("./calculator")
document.addEventListener("DOMContentLoaded", function(){

var cButtonElement = document.querySelector("[data-js='cButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
cButtonElement.addEventListener("click", function(){
    outputElement.textContent = "";
});
// wasn't sure if I needed a var element for the input area that shows
// var inputAreaButtonElement = document.querySelector("[data-js='inputAreaButton']")
// var outputElement = document.querySelector("[data-js='inputAreaButton']")

var sevenButtonElement = document.querySelector("[data-js='sevenButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
sevenButtonElement.addEventListener("click", function(){
  outputElement.textContent += 7;
});

var eightButtonElement = document.querySelector("[data-js='eightButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
eightButtonElement.addEventListener("click", function(){
  outputElement.textContent += 8;
});

var nineButtonElement = document.querySelector("[data-js='nineButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
nineButtonElement.addEventListener("click", function(){
  outputElement.textContent += 9;
});

var divideButtonElement = document.querySelector("[data-js='divideButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
divideButtonElement.addEventListener("click", function(){
  outputElement.textContent += "/"
})

var fourButtonElement = document.querySelector("[data-js='fourButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
fourButtonElement.addEventListener("click", function(){
  outputElement.textContent += 4;
});
var fiveButtonElement = document.querySelector("[data-js='fiveButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
fiveButtonElement.addEventListener("click", function(){
  outputElement.textContent += 5;
});
var sixButtonElement = document.querySelector("[data-js='sixButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
sixButtonElement.addEventListener("click", function(){
  outputElement.textContent += 6;
});
var multiplyButtonElement = document.querySelector("[data-js='multiplyButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
multiplyButtonElement.addEventListener("click", function(){
  outputElement.textContent += "*";
});

var oneButtonElement = document.querySelector("[data-js='oneButton']");
var outputElement = document.querySelector("[data-js='inputAreaButton']");
oneButtonElement.addEventListener("click", function(){
  outputElement.textContent += 1;
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
