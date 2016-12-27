// [x] make jquery factory call
var $ = require ("jquery");
// [x] make Jquery dom ready
$(function(){
//[x] Add data-js to html
//[x] Create var referencing each data-js attribute
var $body = $("body");
var $modal = $body.find("[data-js='modal1']");
var $albumPage = $body.find("[data-js='albumPage']");
var $backButton = $body.find("[data-js='backButton']");
var $photo1 = $body.find("[data-js='photo1']");
var $photo2 = $body.find("[data-js='photo2']");
var $photo3 = $body.find("[data-js='photo3']");
var $photo4 = $body.find("[data-js='photo4']");
var $photo5 = $body.find("[data-js='photo5']");
var $photo6 = $body.find("[data-js='photo6']");
var $modalImage = $body.find("[data-js='modalImage']");


   // Add a click event listener on photo1 element
  $photo1.on("click", function(e){
    // Created a var for ClickedImageSrc and assigned it to return current clicked element and the .attr returns value of
    // whatever attribute we pass it / in this case we want to return the value of "src"
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);
  });

  // This click event for the backbutton closes the modal and returns to album page
  $backButton.on("click", function(e){
    $modal.addClass("hide");

  });

  $photo2.on("click", function(e){
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);
  });

  $photo3.on("click", function(e){
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);

  });

  $photo4.on("click", function(e){
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);

  });
  $photo5.on("click", function(e){
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);

  });
  $photo6.on("click", function(e){
    var $clickedImageSrc = $(e.currentTarget).attr("src");
    // Inside of click event open modal
    $modal.removeClass("hide");
    $modalImage.attr("src", $clickedImageSrc);

  });
  // closes the entire jquery function
});
