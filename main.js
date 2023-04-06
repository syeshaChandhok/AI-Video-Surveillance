status="";
function preload(){
}

function setup(){
    canvas=createCanvas(478,401);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,478,401);
}

function start(){
 objectdetector=ml5.objectDetector("cocossd",modelloaded);
 document.getElementById("status").innerHTML="Status: detecting objects";  
}

function modelloaded(){
    console.log("model is loaded");
    status=true;
}