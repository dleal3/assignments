// We need a jQuery factory call
  // We also need to give it an anonymous function so we can wait for page content to load
$(function(){
  // We must put all DOM related code inside of this object.

  // We need to make a variable to reference the students
  var $studentElements = $("[data-js='student']");

  // Now we need to give the student reference a listener
  $studentElements.on("click", function(e){
    // Now we need to find a reference to the element that was clicked by using 'this' keyword
    var $clickedStudent = $(this);

    // Now we must remove the element that was clicked by using the .remove() method to remove the clicked element
    // $clickedStudent.remove();

    // We need to remove the class of expand from the one that already has the class of expand
    $studentElements.filter(".expand").removeClass("expand");


    // Need to expand element to be taller
    // We give the clicked student the class of expand in html
    $clickedStudent.addClass("expand");
  });

});
