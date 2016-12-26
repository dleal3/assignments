var $ = require ("jquery");
$(function(){
  var $this = $("this");
  var $body = $("body");
  var $modal = $body.find("[data-js='modal1']");
  var $backButton = $body.find("[data-js='backButton']");
  var $Jordan1Button = $body.find("[data-js='Jordan1Button']");

  $Jordan1Button.on("click", function(e){
    $modal.removeClass("hidden");
    var $photo1 = $("<img>")
    .attr({
      alt:"Jordan 1"
      class: "image",
      src: "styles/Jordan_1.jpg"
    });
    var imgModal1 = $modal.append($photo1);
  });
  $backButton.on("click",function(e){
    $modal.addClass("hidden")
  })
};
