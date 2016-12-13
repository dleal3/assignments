// Need to tell the system to wait for all content to be loaded
document.addEventListener("DOMContentLoaded", function(){
  // Created a formDataElement
  var formArticleElement = document.querySelector("[data-js='form']");

  var xhr = new XMLHttpRequest();
// Entered the webpage we are going to be pulling data from
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

    var xhrData = this.response;

    var formData = JSON.parse(xhrData);

    var formHTML = "";

    formData.forEach(function(inputData){

      var placeholderString = "";

      if(inputData.type === "text"){
        placeholderString = `<label> ${inputData.label}</label>`;
        placeholderString = `<input id="${inputData.id}"
        type="${inputData.type}"/>`;
      }



    formHTML += placeholderString
    // formHTML += areaString
      // formHTML += iconString
    })

    formArticleElement.innerHTML += formHTML

  });
  xhr.send();

});
