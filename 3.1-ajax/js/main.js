document.addEventListener("DOMContentLoaded", function(){

  var moviesSectionElement = document.querySelector("[data-js='movies']")

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://www.omdbapi.com/?s=the+karate+kid&y=&plot=short&r=json");

  xhr.addEventListener("load", function(e){

   var xhrData = this.response;

   var JSONData = JSON.parse(xhrData);

   var searchArray = JSONData.Search;

   searchArray.forEach(function(movieData){

     var movieArticleHTML = "<article>";
     movieArticleHTML += "<h2>";
     movieArticleHTML += movieData.Title;
     movieArticleHTML += "</h2>";
     movieArticleHTML += "<img src='";
     movieArticleHTML += movieData.Poster;
     movieArticleHTML += "</article>";

     moviesSectionElement.innerHTML += movieArticleHTML;
   });
 });
 xhr.send();
});
