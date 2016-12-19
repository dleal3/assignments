// [x] We need to factory call the document to start
// [x] We need to factory call the $body and $text
// [x] We need to create vars to reference html elements
// [x] We need to add data-js to connect to html
// [x] We need to on click for the add button
// [x] We need to add the preventDefault 
// []
// []
// []
// []
$(function(){
  var fafa_check_circle_oURL = "http://fontawesome.io/icon/check-circle-o/"
  var $body = $("body");
  var $text = $body.find("[data-js='text_input']");
  var $addButton = $body.find("[data-js='submit']");
  var $articleElement = $body.find("[data-js='articles']");
  var $sectionElement = $body.find("[data-js='section']");
  var totalElement = $body.find("[data-js='total']");
  $addButton.on("click", function(e){
    e.preventDefault();

  })



  // this is all code related to DOM
  // var $body = $("body");
  //
  // var $textarea = $body.find("[data-js='shoppingListForm__text']");
  // var $submitButton = $body.find("[data-js='shoppingListText__submit']");
  // var $shoppingListPostsElement = $body.find("[data-js='shoppingListPosts']");
  //
  // $submitButton.on("click", function(e){
  //
  //   e.preventDefault();
  //
  //   var textAreaValue = $textarea.val();
  //
  //   var $paragraphElement = $("<p>").text(textAreaValue);
  //
  //   var $articleHTML = $("<article>")
  //     .append($paragraphElement);
  //
  //     $shoppingListPostsElement.prepend($articleHTML)
  //
  //
  // });

});
