objects = [];
video = "";
Status = "";

function preload(){
video = createVideo('video.mp4');
video.hide();
}





function setup(){
canvas = createCanvas(480, 380)
canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Dectecting Objects";


}


function modelLoaded(){
    console.log("Model Loaded!")
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error, results){
if (error){
console.log(error);



}
console.log(results);
objects = results;




}
function draw(){
if(Status !="")
    {
      



      objectDetector.detect(video, gotResult);

      for (i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Objects detected";
        document.getElementById("number_of_objects").innerHTML = "Number of the objects detected are : "+ objects.length;
        fill(r,g,b);
         percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill(),
        stroke(r,g,b)
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        

        

      }
       
    }

    
    
}