// We need a jQuery factory call
  // We also need to give it an anonymous function so we can wait for page content to load
$(function(){
  // We must put all DOM related code inside of this object.

  // We need to make a variable to reference the students
  var $studentElements = $("[data-jsj='student']");

  // Now we need to give the student reference a listener
  $studentElements.on("click", function(e){
    // Now we need to find a reference to the element that was clicked by using 'this' keyword
    var $clickedStudent = $(this);
  })

})
