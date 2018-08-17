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

document.querySelector('#arrow-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.querySelector('.polosa');
	left = left - 270;
	if (left < -810) {
		left = 0;
	}
	polosa.style.left = left +'px';
}

document.querySelector('#arrow-right').onclick = sliderRight;

function sliderRight(){
	var polosa = document.querySelector('.polosa');
	if(left <= -270){
	    left = left + 270;
		polosa.style.left = left + 'px';
	}
	
	
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

// https://idg.net.ua/blog/devyat-prostyh-primerov-css3-perehodov