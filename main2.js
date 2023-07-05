wx = 0;
wy = 0;


function preload()
{
car = loadImage('https://i.postimg.cc/3xgSGndb/th-1.jpg');
}
function setup()
{
    canvas = createCanvas(600 ,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600 ,400);
    video.hide();
    poseNet = ml5.poseNet(video , loadposenet);
}
  
    


function draw()
{
    tint(70,70,60)
image(video ,0 ,0 ,600 ,400);
image(car, wx, wy ,250 ,50);
}

function loadposenet()
{
console.log("postnet_loaded");
poseNet.on("pose",gotPoses);


}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
wx = results[0].pose.rightWrist.x;
wy = results[0].pose.rightWrist.y;
    console.log("posision_x_de_la_mano_derecha =" + wx);
    console.log("posision_y_de_la_mano_derecha =" + wy);
wy -= 48;



if (wx > 350)
{
    document.getElementById("hi").innerHTML = "ganaste";
    document.getElementById("he").innerHTML = "felisidades levantaste el carrito";

}


}
}