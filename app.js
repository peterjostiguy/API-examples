// $.get("http://www.omdbapi.com/?apikey=c5a8df09&t=jaws")
// .then(function(data){
//   console.log(data);
// })

// jQuery .ajax request
// $.ajax({
//   method: "GET",
//   url: "http://www.omdbapi.com/?apikey=c5a8df09&t=jaws",
// })
//   .done(function( msg ) {
//     console.log(msg);
//   });

//Vanilla JS
//
// function loadXMLDoc() {
//     var xmlhttp = new XMLHttpRequest();
//
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
//            if (xmlhttp.status == 200) {
//               //  document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//                console.log(xmlhttp.responseText);
//                var parsed  = JSON.parse(xmlhttp.responseText)
//                console.log(parsed);
//            }
//            else if (xmlhttp.status == 400) {
//               alert('There was an error 400');
//            }
//            else {
//                alert('something else other than 200 was returned');
//            }
//         }
//     };
//
//     xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=c5a8df09&t=jaws", true);
//     xmlhttp.send();
// }
//
// loadXMLDoc()

// var url = "http://www.omdbapi.com/?apikey=c5a8df09&t="

// $('input').click(function())


var movieData = "first"

console.log(movieData);

fetch("http://www.omdbapi.com/?apikey=c5a8df09&t=jurassic-park")
.then(function(data){
  return data.json()
}).then(function(dataFormatted){
  movieData = dataFormatted
  console.log(movieData);
})

console.log(movieData);
