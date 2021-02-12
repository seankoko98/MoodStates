/*
	Simple image display example
	by Scott Kildall

	Displays an image, centered.

	* Use to show how to launch a localhost from terminal/command prompt
	* Shows preload() command
	* Shows use of subdirectories
	
*/
// Global variable that we will use in all the functions
var img; 

// Run the program
setup();

// preload() will execture before setup()
function preload() {
  	print("SimpleImageDisplay: preload()");
  	let imgs = ['assets/figure16.png',"./assets/calm.png", "./assets/cheerful.png", "./assets/comforting.png"].map(imgUrl => loadImage(imgUrl)); // Load the image
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

