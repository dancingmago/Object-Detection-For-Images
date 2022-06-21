status1 = ""

function back(){
    window.location.href = "index.html";
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function modelLoaded(){
    console.log("Model loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}