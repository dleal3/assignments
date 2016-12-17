$(function(){

  var id = 1;

  $(document).ready(function(e){
    editButton();
    $("tbody").on("click",".cross",function(){
      $(this).closest("tr").remove();
    });

    $("button").on("click", getInput);

    $("tbody").on("click", ".box", function(){
      $(this).closest("tr").find("span").toggleClass("checked");
    });
  });

// triggered on enter
$(document).on("keydown",function(e){
  if(e.keyCode === 13) {
    getInput();
  }
});



// trigger delete icon when edit button is clicked
function editButton() {}























})








// $(function(){
//   // var fafa_check_circle_oURL = "http://fontawesome.io/icon/check-circle-o/"
//
//   // this is all code related to DOM
//   var $body = $("body");
//
//   var $textarea = $body.find("[data-js='shoppingListForm__text']");
//   var $submitButton = $body.find("[data-js='shoppingListText__submit']");
//   var $shoppingListPostsElement = $body.find("[data-js='shoppingListPosts']");
//
//   $submitButton.on("click", function(e){
//
//     e.preventDefault();
//
//     var textAreaValue = $textarea.val();
//
//     var $paragraphElement = $("<p>").text(textAreaValue);
//
//     var $articleHTML = $("<article>")
//       .append($paragraphElement);
//
//       $shoppingListPostsElement.prepend($articleHTML)
//
//
//   });
//
// });
