//Create variables here
var dog, database, foodS, foodStock, dogimg, happyDogimg;


//preload
function preload()
{
  dogimg= loadImage("Dog.png")
  happyDogimg= loadImage("happydog.png")
}

//setup
function setup() {
	createCanvas(500, 500);
 
// dog  
  dog=createSprite(250,300,10,10);
  dog.addImage(dogimg);
  dog.scale=0.15;

database = firebase.database();
foodStock= database.ref('Food');
foodStock.on("value", readStock)
}

//draw
function draw() {  
  background("green")

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg)
  }

  drawSprites();
  //add styles here

  fill("white");
  stroke ("white")
  strokeWeight(0)
  text ("Food Stock: "+ foodS, 200, 50)
  text("Press UP ARROW key to feed the dog", 150, 480)

  
}

function readStock(data){
  foodS= data.val()
  console.log(foodS)
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else {
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}



