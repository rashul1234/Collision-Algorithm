var fixedrect , movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "red";
  fixedrect.debug = true;

  movingrect = createSprite(600, 400, 30, 80);
  movingrect.shapeColor = "red";
  movingrect.debug = true;



}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (movingrect.x- fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
     fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
     movingrect.y- fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
     fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";

  }
  else{
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";

  }
  drawSprites();
}