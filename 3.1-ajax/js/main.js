document.addEventListener("DOMContentLoaded", function(){

  var moviesSectionElement = document.querySelector("[data-js='movies']")

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://www.omdbapi.com/?t=snow+white&y=&plot=short&r=json");

  xhr.addEventListener("load", function(e){

   var xhrData = this.response;

  //  var searchArray = JSONData.Search;
  //
  //  searchArray.forEach(function(movieData){

    var movieData = JSON.parse(xhrData);

     var movieArticleHTML = "<article>";
     movieArticleHTML += "<h2 class=' ";
     movieArticleHTML += "title'>";
     movieArticleHTML += movieData.Title;
     movieArticleHTML += "</h2>";

     movieArticleHTML += `<img class="image" src='${movieData.Poster}'/>`;

     movieArticleHTML += "<h3 class=' ";
     movieArticleHTML += "year'>";
     movieArticleHTML += movieData.Year;
     movieArticleHTML += "</h3>";
     movieArticleHTML += "<h3 class=' ";
     movieArticleHTML += "Rated'>";
     movieArticleHTML += movieData.Rated;
     movieArticleHTML += "</h3>";
     movieArticleHTML += "<h4 class=' ";
     movieArticleHTML += "Plot'>";
     movieArticleHTML += movieData.Plot;
     movieArticleHTML += "</h4>";
     movieArticleHTML += "<h4 class=' ";
     movieArticleHTML += "Featuring'>";
     movieArticleHTML += movieData.Actors;
     movieArticleHTML += "</h4>";
     movieArticleHTML += "</article>";
     moviesSectionElement.innerHTML += movieArticleHTML;
   })

   xhr.send();
 })


  //  console.log(xhrData);
//      var JSONData = JSON.parse(xhrData);
//
//      var MovieTitleHTML = "<h2'>";
//      MovieTitleHTML += JSONData.Title;
//      MovieTitleHTML += "</h2>";
//   moviesSectionElement.innerHTML += MovieTitleHTML;
//     var MoviePosterHTML = "<img src='";
//     MoviePosterHTML += JSONData.Poster;
//     MoviePosterHTML += "'>";
//   moviesSectionElement.innerHTML += MoviePosterHTML;
//     var MovieActorsHtml = "<h3>";
//     MovieActorsHtml += "Actors: " + JSONData.Actors;
//     MovieActorsHtml += "</h3>";
//   moviesSectionElement.innerHTML += MovieActorsHtml;
//     var MovieRatedHTML = "<h3>";
//     MovieRatedHTML += "Rated: " + JSONData.Rated;
//     MovieRatedHTML += "</h3>";
//   moviesSectionElement.innerHTML += MovieRatedHTML;
//     var MovieGenreHTML = "<h3 class="font">";
//     MovieGenreHTML += "Genre: " + JSONData.Genre;
//     MovieGenreHTML += "</h3>";
//   moviesSectionElement.innerHTML += MovieGenreHTML;
//
//   // moviesSectionElement.innerHTML += MoviePlotHTML;
//   //   var MoviePlotHTML = "<h3>";
//   //   var MoviePlotHTML = "Plot: " + JSONData.Plot;
//   //   MoviePlotHTML += "</h3>";
// //   var MovieReleaseDateHTML = "<h3>";
// //   MovieReleaseDateHTML += "ReleaseDate: " + JSONData.ReleaseDate;
// //   MovieReleaseDateHTML += "</h3>";
// // moviesSectionElement.innerHTML += MovieReleaseDateHTML;
//   })
//
//   xhr.send();
// })
