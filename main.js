noseX = 0;
noseY = 0;
wi = 0;
win = 0;
hen =0;
glasy = 0;
glasx = 0;
function  preload() {
    gl = loadImage('https://i.postimg.cc/9Q0qjSV6/pngg.png');
    ns = loadImage('https://i.postimg.cc/446k4SyS/ma.png');


}

function setup()
{
    canvas = createCanvas(300, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 ,450);
    video.hide();
    poseNet = ml5.poseNet(video , loadposenet);
    
}

function draw()
{
image(video ,0 ,0 ,300 ,450);
image(ns ,noseX ,noseY ,win ,hen);
image(gl ,glasx ,glasy ,wi ,hen);
}

function take_snapshot()
{
    save('private.png');
}

function loadposenet()
{
    console.log("postnet loaded");
    poseNet.on("pose" ,gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        glasx=results[0].pose.rightEye.x;
        glasy=results[0].pose.rightEye.y;
        noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
        console.log("nose_position_x =" +  noseX);
        console.log("nose_position_y =" + noseY);
        noseX -= 16;
        noseY -= 16;
glasx -=  20;
glasy -= 20;
 wi = results[0].pose.leftEye.x - results[0].pose.rightEye.x;
 win = wi;
 wi += 50;  
 hen = results[0].pose.nose.y -  results[0].pose.rightEye.y;
    }
    
}








function chp()
{
    window.location = "index2.html";
}