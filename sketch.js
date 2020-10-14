var fixedrect, movingrect
function setup() {
  createCanvas(400,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(250, 250, 50, 50);

  fixedrect.shapeColor="pink"
  movingrect.shapeColor="pink"
}

function draw() {
  background(0);
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(fixedrect.x-movingrect.x <=fixedrect.width/2 + movingrect.width/2 && 
    movingrect.x-fixedrect.x<=fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.y-movingrect.y<=fixedrect.height/2 +movingrect.height/2 &&
    movingrect.y-fixedrect.y<=fixedrect.height/2 +movingrect.height/2){
    fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
  } else{
    fixedrect.shapeColor="pink"
  movingrect.shapeColor="pink"
  }

  drawSprites();
}