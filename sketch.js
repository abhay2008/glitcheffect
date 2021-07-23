let capture;

function setup() {
    createCanvas(750, 350);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    //capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);
    filter(POSTERIZE);
}