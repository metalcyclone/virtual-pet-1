//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{

  //load images here
  dog = loadImage('sprites/dogImg.png');
  happyDog = loadImage('sprites/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,30,30);
  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
dog = addImage('dogImg');


if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);


}
  drawSprites();

  Text("press the up arrow key to feed the dog milk",250,150);
  //add styles here

}


function readStock(){

  foodS = data.val();
}


function writeStock(){

  if(x <= 0){
    x = 0;
      }
      else{
    x = x-1;
    
      }


  database.ref('/').update({
Food:x

  })
}


