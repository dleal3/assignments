/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

	// [x]`addEventListener` accepts TWO arguments:
	// [x]1. What event to listen for
	//   2. What to do when the event happens (callback)
	//   https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
	//
	// document.addEventListener("DOMContentLoaded",function(){
	//
	//
	// })


/***/ }
/******/ ]);