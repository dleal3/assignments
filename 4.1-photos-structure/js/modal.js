// [x] make jquery factory call
// [x] create var for body
// [x] create var for modal
// [x] create var for backButton
// [x] create var for modal image
// [] click on an image
// [] have modal unhide (or show)
// [] Click BacktoAlbums button to 'hide' modal

var $ = require ("jquery");
$(function(){

var $body = $("body");
var $modal = $body.find("[data-js='modal1']");
var $backButton = $body.find("[data-js='backButton']");
var $photo1 = $body.find("[data-js='photo1']");
var $photo2 = $body.find("[data-js='photo2']");
var $photo3 = $body.find("[data-js='photo3']");
var $photo4 = $body.find("[data-js='photo4']");
var $photo5 = $body.find("[data-js='photo5']");
var $photo6 = $body.find("[data-js='photo6']");


$modalImage.on("click", function(e){
  $modalImage.
})

//   var $this = $("this");
//   var $body = $("body");
//   var $modal = $body.find("[data-js='modal1']");
//   var $backButton = $body.find("[data-js='backButton']");
//   var $button1 = $body.find("[data-js='button1']");
//
//   $button1.on("click", function(e){
//     $modal.removeClass("hidden");
//     var $albumImg1 = $("<img>")
//     .attr({
//       alt:"Jordan 1"
//       class: "Jordan1Button",
//       src: "styles/Jordan_1.jpg"
//     });
//     var imgModal1 = $modal.append($albumImg1);
//   });
//   $backButton.on("click",function(e){
//     $modal.addClass("hidden")
//   })
// };
