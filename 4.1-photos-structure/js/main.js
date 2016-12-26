var $ = require ("jquery");
$(function(){

  var $body = $("body");

  var modal = document.getElementByID('myModal');

  var btn = document.getElementByID('myBtn');

  var JordanOne = document.getElementByID('myJordan');


  btn.onclick = function(){
    modal.style.display = "block";
  }

  JordanOne.onclick = function(){
    modal.style.display = "none";
  }
  // var $photo1 = $body.find("[data-js='photo1']");
  // var $photo2 = $body.find("[data-js='photo2']");
  // var $photo3 = $body.find("[data-js='photo3']");
  // var $photo4 = $body.find("[data-js='photo4']");
  // var $photo5 = $body.find("[data-js='photo5']");
  // var $photo6 = $body.find("[data-js='photo6']");
  //
  // var $backButtonElement = ("[data-js='backButton']");
  //
  // var #modalElement = ("[data-js='modal']");
  //
  // $photo1.on("click", function(e){
  //   $modalElement.removeClass("hidden");
  // });
  //
  // $backButtonElement.on("click", function(e){
  //   $modalElement.addClass("hidden");
  // });

});
  // var $mainElement = $body.find("[data-js='main']");
  // var $imgElement = $body.find("[data-js='image']");
  //
  // var $backButton = $body.find("[data-js='']");
  // var $albumHeading2 = $body.find("[data-js='']");
  //
  //   $imgElement.on("click", function(e){
  //     $albumHeading2.addClass("");
  //     $mainElement.addClass("");
  //     $modalClose.removeClass("");
  // });
  //
  //   $backButton.on("click", function(e){
  //     $albumHeading2.removeClass("");
  //     $mainElement.removeClass("");
  //     $modalClose.addClass("");
  // });
