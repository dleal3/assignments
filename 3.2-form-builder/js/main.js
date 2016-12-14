// Need to tell the system to wait for all content to be loaded
document.addEventListener("DOMContentLoaded", function(){
  // Need to get the data from the website
  var xhr = new XMLHttpRequest;
// Entered the webpage we are going to be pulling data from
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

    var responseData = JSON.parse(this.response);

    var formElement = document.querySelector("[data-js='form']")

    var allInputDataHtml = "";

    responseData.forEach(function(inputData){

      var inputDataPlaceholder = "";

      if(inputData.type === "select"){
        inputDataPlaceholder += `<select class="selector">`;

        inputData.options.forEach(function(optionData){
          inputDataPlaceholder += `<option label="${optionData.label}" value="${optionData.value}"</option>`;
        })

      }else{
        inputDataPlaceholder += `<input class="textInput"
        placeholder=" ${inputData.label}" type="${inputData.type}"
        id="${inputData.id}" icon="${inputData.icon}">`;
        console.log(inputData.icon);
      }

      allInputDataHtml += inputDataPlaceholder;

    });

    formElement.innerHTML += allInputDataHtml;

  });
  xhr.send();

});
