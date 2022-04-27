// code adapted from https://openprocessing.org/sketch/1217094

"use strict";
let capture;

function setup() {
	createCanvas(1200, 900);
	capture = createCapture(VIDEO);
	capture.hide();
	capture.size(1200, 900);
}


function draw() {
	//let mainColor = '#2C3A47';
	let mainColor = color (random(205), random (155), random(115));
	let bgColor = '#CAD3C8';
	background(bgColor);
	noStroke();
	fill(mainColor);

	if (capture.width > 0) {
		let img = capture.get(0, 0, capture.width, capture.height);
		img.loadPixels();

		const step = 12;
		for (var y = step; y < img.height; y += step) {
			for (var x = step; x < img.width; x += step) {
				const darkness = getPixelDarknessAtPosition(img, x, y);
				const radius = 14 * darkness;
				let sX = x * width / img.width;
				let sY = y * height / img.height;
				circle(sX, sY, radius);
				fill(random(210, 240), random(10, 30), random(0, 70), 83);
			}
		}
	}
}

//ignore this, initially
function getPixelDarknessAtPosition(img, x, y) {
	const mirroring = true;
	var i = y * img.width + (mirroring ? (img.width - x - 1) : x);
	return (255 - img.pixels[i * 4]) / 255;
}