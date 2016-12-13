// Need to tell the system to wait for all content to be loaded
document.addEventListener("DOMContentLoaded", function(){
  // Created a formDataElement
  var bodyElement = document.querySelector("[data-js='bodyElement']");

  var xhr = new XMLHttpRequest();
// Entered the webpage we are going to be pulling data from
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

    var xhrData = this.response;

    var JSONData = JSON.parse(xhrData);

    var formHTML = "";

    JSONData.forEach(function(inputData){
      console.log(inputData.id);
    var labelString = `<label> ${inputData.label}</label>`;
    var inputString = `<input id="${inputData.id}" type="${inputData.type}"/>`;
    // var iconString = `<icon>${inputData.icon}</icon>`;


    formHTML += labelString
    formHTML += inputString
    // formHTML += iconString
    })

    bodyElement.innerHTML += formHTML

  });
  xhr.send();

});
