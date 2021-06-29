var shipImg1
var shipImg2
var seaImg
function preload(){
sea = loadImage("sea.png");
shipImg1 = loadImage(ship-1, ship-2)
}

function setup(){
  createCanvas(400,400);

  if(sea.x < 0){
    sea.x = sea.width/2;
 }
 sea.addImage(seaImg)
}

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}
