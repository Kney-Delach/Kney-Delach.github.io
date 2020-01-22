/*
	Handle the navigation buttons and change the contents of the screen as appropriate.
*/

const ContentNames = [
    "Exalted",
    "Game-Tech"
];

const TextAreaMinHeightExtended = "900px";
const TextAreaMinHeightClosed = "0px";
const TransitionDuration = 600;

let IncludeText = [];

let lastButtonIndex = -1;
let buttonLock = false;

for (let i = 0; i < ContentNames.length; ++i) {
	IncludeText.push("");
	fetch("./Data/Pages/" + ContentNames[i] + ".txt")
		.then( r => r.text() )
		.then( t => IncludeText[i] = t )
}

function currentYPosition() {
	// Firefox, Chrome, Opera, Safari
	if (self.pageYOffset) return self.pageYOffset;
	// Internet Explorer 6 - standards mode
	if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	// Internet Explorer 6, 7 and 8
	if (document.body.scrollTop) return document.body.scrollTop;
	return 0;
}

function elmYPosition(eID) {
	var elm = document.getElementById(eID);
	var y = elm.offsetTop;
	var node = elm;
	while (node.offsetParent && node.offsetParent != document.body) {
		node = node.offsetParent;
		y += node.offsetTop;
	} return y;
}

function smoothScroll(stopY) {
	var startY = currentYPosition();
	var distance = stopY > startY ? stopY - startY : startY - stopY;
	if (distance < 100) {
		scrollTo(0, stopY); return;
	}
	var speed = Math.round(distance / 100);
	if (speed >= 20) speed = 20;
	var step = Math.round(distance / 25);
	var leapY = stopY > startY ? startY + step : startY - step;
	var timer = 0;
	if (stopY > startY) {
		for ( var i=startY; i<stopY; i+=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		} return;
	}
	for ( var i=startY; i>stopY; i-=step ) {
		setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	}
	return false;
}

function smoothScrollToElement(eID) {
	smoothScroll(elmYPosition(eID));
}

function revealIncludeText(textArea, i) {
	if (textArea.style.opacity == 0) {
		textArea.innerHTML = IncludeText[i];
		textArea.style.opacity = 1;
		smoothScrollToElement("nav-buttons-area");
	}
	else {
		textArea.style.opacity = 0;
		setTimeout(function(){
			textArea.innerHTML = IncludeText[i];
			textArea.style.opacity = 1;
			smoothScrollToElement("nav-buttons-area");
		}, TransitionDuration / 2);
	}
}
	
document.addEventListener('DOMContentLoaded', function(){
	let textArea = document.getElementById("data_selection_area");

	let buttons = [];
	let textFiles = [];
	for (let i = 0; i < ContentNames.length; ++i) {
		buttons.push(document.getElementById(ContentNames[i] + "-button"));
		textFiles.push(document.getElementById(ContentNames[i] + "-file"));
	}
	
	for (let i = 0; i < buttons.length; ++i) {
		buttons[i].addEventListener("click", function() {
			if (!buttonLock) {
				if (lastButtonIndex >= 0) {
					buttons[lastButtonIndex].className = "kd-button";
					buttons[lastButtonIndex].style.border = "2px solid black";
				}
				if (i != lastButtonIndex) {
					buttons[i].className = "kd-button";
					buttons[i].style.border = "2px solid pink";
					for (let j = 0; j < buttons.length; ++j) {
						buttons[j].className = j != i ? "kd-button-idle" : buttons[j].className;
					}
					revealIncludeText(textArea, i);
					lastButtonIndex = i;
					if (textArea.style.minHeight == TextAreaMinHeightClosed || textArea.style.minHeight == "") {
						textArea.style.minHeight = TextAreaMinHeightExtended;
					}
				}
				else {
					for (let j = 0; j < buttons.length; ++j) {
						buttons[j].className = "kd-button";
					}
					textArea.innerHTML = "";
					lastButtonIndex = -1;
					smoothScroll(0);
					setTimeout(function() {
						textArea.style.minHeight = TextAreaMinHeightClosed;
					}, TransitionDuration / 2);
				}
				buttonLock = true;
				setTimeout(function() {
					buttonLock = false;
				}, TransitionDuration);
			}
		});
	}
});
