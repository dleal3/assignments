// Need to tell the system to wait for all content to be loaded
document.addEventListener("DOMContentLoaded", function(){
  // Created a formDataElement
  var formDataElement = document.querySelector("[data-js='form']")

  var xhr = new XMLHttpRequest();
// Entered the webpage we are going to be pulling data from
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);

    console.log(JSONData);

  })
  xhr.send();

  })
