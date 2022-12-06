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
  if (n > 3) {
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
