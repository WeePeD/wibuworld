// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n)

}

function showSlides(n) {
  // Add element in slider

  var slider;
  if (n > 5) {
    slideIndex = 1
    n = slideIndex;
  }
  if (n < 1) {
    slideIndex = 5;
    n = slideIndex;
  }


  slider = document.getElementsByTagName("slider")[0];
  slider.setAttribute("id",data[n-1].id);
  slider.innerHTML =
    `<div class="mySlides fade">
<img id ="${data[n-1].id}" class="slideImg" src="./poster/${data[n-1].id}.jpg">
<div class="text"id ="${data[n-1].id}"><h1>${data[n-1].name}</h1><h2>Describe</h2><br>${data[n-1].describe}</div>`;


  var i;
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider.style.display = "block";
  dots[slideIndex - 1].className += " active";

}
// Add film list
// poster

// for (var i = 0; i < data.length; i++) {
//   // create poster
//   var poster = document.createElement("img");
//   poster.className = "poster";
//   poster.setAttribute("id", data[i].id);
//   poster.src = `./poster/${data[i].id}.jpg`;
//   // Title
//   var title = document.createElement("div");
//   var textTitle = document.createAttribute("class");
//   textTitle.value = "text-title";
//   title.setAttribute("id", data[i].id);
//   title.setAttributeNode(textTitle);
//   title.textContent = `${data[i].name}`;
//   // create a component div 
//   var divMid = document.createElement("div");
//   var attMid = document.createAttribute("class");
//   divMid.setAttribute("id", data[i].id);
//   attMid.value = "movie-component";
//   divMid.setAttributeNode(attMid);

//   // complete a component
//   divMid.appendChild(poster);
//   divMid.appendChild(title);
//   document.getElementsByClassName("movie-list")[0].appendChild(divMid);

// }

// //Listener

// var SliderTag = document.getElementsByTagName('slider')[0];
// SliderTag.addEventListener('click', event => {
//     var idReq = event.target.id;
//     localStorage.setItem("idReq",idReq);
//     location.href='./view.jsp';
//     console.log(idReq);
// });

//  document.querySelectorAll('.movie-component').forEach(item => {
//     item.addEventListener('click', event => {
//         var idReq = event.target.id;
//         localStorage.setItem("idReq",idReq);
//         location.href='./view.html';
//         console.log(idReq);
//     })
// });