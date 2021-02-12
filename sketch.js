/*
	Simple image display example
	by Scott Kildall

	Displays an image, centered.

	* Use to show how to launch a localhost from terminal/command prompt
	* Shows preload() command
	* Shows use of subdirectories
	
*/
import calm from "./assets/calm.png"
import cheerful from "./assets/cheerful.png"
import comforting from "./assets/comforting.png"

// Global variable that we will use in all the functions
var img; 

// Run the program
setup();

// preload() will execture before setup()
function preload() {
  	print("SimpleImageDisplay: preload()");
  	let imgs = ['assets/figure16.png', calm, cheerful, comforting].map(imgUrl => loadImage(imgUrl)); // Load the image
  	return imgs
}

// set image mode to center, so that it is center-drawn
function setup() {
	const imgs = preload()
	print("SimpleImageDisplay: setup()");
	print(img);

	createCanvas(800, 600);
	imgs.forEach(img => imageMode(CENTER));

	draw(imgs);
}

// draw image in the center of the screen
function draw(imgs = []) {
	// draw the background
	background(128);
		
  	// Displays the image at center point - add param 3 and 4 fo width and height
  	imgs.forEach(img => image(img, width/2, height/2));
}

function iter(list){
	for (let item of list) {
		console.log(item)
	}

	for (let i = 0; i < list.length; i++) {
		console.log(list[i])
	}
}

