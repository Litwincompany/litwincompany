document.addEventListener('DOMContentLoaded', function () {

var creativedesign = document.querySelector('#creativedesign');
var unicporfolio = document.querySelector('#unicporfolio');
var endless = document.querySelector('#endless');
var kinds = document.querySelector('.kinds');

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

var burger = document.querySelector('#burger');
var nav = document.querySelector('nav');
var wrapper = document.querySelector('.wrapper');
var ul = document.querySelector('.menu');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');

var wrapper = document.querySelector('.wrapper');

burger.onclick = function(e){
	if(nav.style.display == 'block'){
    nav.style.display = 'none';
	} else{
		nav.style.display = 'block';
		burger.style.display = 'none';
	}
}

var aboutUs = document.querySelector('.about-us');
one.onclick = function(e){
 	nav.style.display = 'none';
	burger.style.display = 'block';
	window.scrollTo(0, aboutUs.getBoundingClientRect().top);
}
var clients = document.querySelector('.clients');
two.onclick = function(e){
	nav.style.display = 'none';
	burger.style.display = 'block';
	window.scrollTo(0, clients.getBoundingClientRect().top);
}
var features = document.querySelector('.features');
three.onclick = function(e){
	nav.style.display = 'none';
	burger.style.display = 'block';
	window.scrollTo(0, features.getBoundingClientRect().top);
}
var contacts = document.querySelector('.contacts');
four.onclick = function(e){
	nav.style.display = 'none';
	burger.style.display = 'block';
	window.scrollTo(0, contacts.getBoundingClientRect().top);
}
var footer = document.querySelector('.footer');
five.onclick = function(e){
	nav.style.display = 'none';
	burger.style.display = 'block';
	maps.style.display = 'block';
	window.scrollTo(0, footer.getBoundingClientRect().top);
}


});


