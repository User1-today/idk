function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas = createCanvas(300, 300)
}


function draw() {
    Image(video, 0, 0, 480, 380);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}