// function opsi 1
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

// function opsi 2
/*
document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
};
*/

// function opsi 3
/*
var myHTML = document.querySelector('html');
myHTML.onclick = function() {
  alert('Ouch! Stop poking me!');
};
*/

// Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'assets/images/firefox-icon.png') {
      myImage.setAttribute ('src','assets/images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','assets/images/firefox-icon.png');
	}
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hi, ' + myName;
}

if(! localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hi, ' + storedName;
}

localStorage.removeItem("name");

myButton.onclick = function() {
  setUserName();
}