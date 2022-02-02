img="";
status = "";

function preload(){
    img = loadImage ('dog_cat.jpg')
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#FFF000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,60,270,350);

    fill("#FFF000");
    text("Cat", 320,75);
    noFill();
    stroke("#1167b1");
    rect(300,60,270,350);

    fill("#FFF000");
    text("Bowl",290,330);
    noFill();
    stroke("#1167b1");
    rect(280,310,130,100);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}