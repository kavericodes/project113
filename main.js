function setup(){
    canvas = createCanvas(700,500);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,130,100,450,300);
    circle(40,40,60);
    circle(660,40,60);
    circle(660,250,60);
    circle(40,250,60);
    circle(40,460,60);
    circle(660,460,60);
    circle(340,40,60);
    circle(340,460,60);
    circle(190,460,60);
    circle(500,460,60);
    circle(190,40,60);
    circle(500,40,60);
    circle(660,350,60);
    circle(660,150,60);
    circle(40,350,60);
    circle(40,150,60);
}

function takeSnapshot(){
    save("birthday.png");
}