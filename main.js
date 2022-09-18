leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on("pose", gotPoses);
}

function modeloaded(){
    console.log("poseNet is initinilized");
}

function draw(){
    background("#808080");
document.getElementById("font_size").innerHTML = "Width and height of the text is" + difference + "px";
    textSize(difference);
    fill("#FF0000");
    stroke("#FFFF00");
    text("Ayaansh", 50, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX -" + leftWristX + "rightWristX -" + rightWristX + "difference -" + difference);
    }
}