// [x] We need to factory call the document to start
// [x] We need to factory call the $body and $text
// [x] We need to create vars to reference html elements
// [x] We need to add data-js to connect to html
// [x] We need to on click for the add button
// [x] We need to add the preventDefault
// [x] We need to make a var to capture the text input
// [x] We need to create var elements for data-js things
// [x] Created a new list item using JQUERY! made a var for button and article lines 25 and 32
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
    var textInputValue = $text.val();
    var textInputArray = textInputValue.split(",");
    var listTextElement = textInputArray[0];
    var priceElement = textInputArray[1];
    var $circleButton = $("<button>") // created a var for circle button
      .attr({ // here we are going to create a circle button in jquery.. WHICH IS EFFIN AWESOME!
        class: "circleButton",
        type: "button",
        value: "line",
        "data-js": "circle"
      });
    var $listTextElement = $("<p>")
      .attr({
        class: "listItem__text",
        "data-js": "itemName"
      })
      .text(listTextElement);
  });
