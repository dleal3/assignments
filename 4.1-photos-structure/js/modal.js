var $ = require ("jquery");
$(function(){
  var $this = $("this");
  var $body = $("body");
  var $modal = $body.find("[data-js='modal1']");
  var $backButton = $body.find("[data-js='backButton']");
  var $button1 = $body.find("[data-js='button1']");

  $button1.on("click", function(e){
    $modal.removeClass("hidden");
    var $albumImg1 = $("<img>")
    .attr({
      alt:"Jordan 1"
      class: "Jordan1Button",
      src: "styles/Jordan_1.jpg"
    });
    var imgModal1 = $modal.append($albumImg1);
  });
  $backButton.on("click",function(e){
    $modal.addClass("hidden")
  })
};
