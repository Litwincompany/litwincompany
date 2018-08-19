document.addEventListener('DOMContentLoaded', function () {

var creativedesign = document.querySelector('#creativedesign');
var unicporfolio = document.querySelector('#unicporfolio');
var endless = document.querySelector('#endless');
var kinds = document.querySelector('.kinds');
var burger = document.querySelector('#burger');
var nav = document.querySelector('nav');

burger.onclick = function(e){
	if(nav.style.display == 'block'){
    nav.style.display = 'none';
	} else{
		nav.style.display = 'block';
	}
 
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');

arrowLeft.onclick = function(e){
	plusSlides(-1);
}

arrowRight.onclick = function(e){
	plusSlides(1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


var maps = document.querySelector('.maps');
var arrowDown = document.querySelector('#arrow-down');
arrowDown.onclick = function(e){
if(maps.style.display == 'block'){
    maps.style.display = 'none';
	} else{
		maps.style.display = 'block';
}
}

var obj1 = {
	name: 'Name1',
    email: 'petOwner1',
    message: 'message'
};

var array = [obj1];

var form = document.querySelector('form');
var thanks = document.querySelector('.thanks');
var name = document.querySelector('#name');
var email = document.querySelector('#email');
var message = document.querySelector('#message');

form.onsubmit = function(e){
e.preventDefault();
thanks.style.display = 'block';
var newObject = {
	name: name.value,
    email: email.value,
    message: message.value,
};
array.push(newObject);
name.value = '';
email.value = '';
message.value = '';
//doMarkup(array);
}

thanks.onclick = function(e){
	thanks.style.display = 'none';
}

});


