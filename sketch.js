var runner,runnerImg;
var building1,building2,building3,building4,building5;
var building;
var buildingbg, buildingbgimg;
var farm,farmImg;
var parachute,parachuteImg;
var mountain, mountainImg,mountI;
var c1,c1img,c2,c2img;
var coin,coinImg;
var cycling,cyclingImg;
var desertImg,desert;
var dig,digImg;
var farm,farmImg;
var farm,farmImg, paper,paperImg;
var treasureChest,stadium;
var treasureChestimg,stadiumimg;
var buildingGroup;
var steps,stepsimg;
var ig, ig2, ig3, ig4;
var PLAY=1;
var END= 0;
var gamestate= PLAY;
var LEVEL1;
var LEVEL2;
var LEVEL3;
var level1start=2;
var level1end=3;
var level2start=4;
var level2end=5;
var level3start=6;
var level3end=7;
var level=LEVEL1;
var coingroup, buildingGroup;
var retry, retryimg;
var count,coin;
var farmbg;
var nextlevel;
var plant, cactusimg, cactusgroup;
var rock, rockimg;
var rockgroup,igt;
var flagimg, flag;
var digbutton, digbuttonimg;
var scroll, scrollimg;
//var life1, lifeimg, life2,life3, life4, life5;
//var life=5;
var lifeimg
var backgroundSound;
var winSound;
function preload(){
  runnerImg=loadAnimation("Images/runner1.png","Images/runner3.png","Images/runner2.png","Images/runner4.png");
  runnerJump= loadImage("Images/runner2.png");
  runnerfall= loadImage("Images/runner3.png");
  digImg=loadAnimation("Images/dig1.png","Images/dig2.png","Images/dig3.png");
  building1= loadImage("Images/building1.png");
  building2= loadImage("Images/building2.png");
  building3= loadImage("Images/building3.png");
  building4= loadImage("Images/building4.png");
  building5= loadImage("Images/building5.png");
  buildingbgimg= loadImage("Images/buildingBG.png");
  farmImg=loadImage("Images/farm.jpg");
  parachuteImg=loadImage("Images/parachute.png");
  mountainImg=loadImage("Images/mountainClimb.gif");
  mountI= loadImage("Images/mountain.jpg");
  c1img=loadImage("Images/c1.jpg");
  c2img=loadImage("Images/c2.png");
  coinImg=loadImage("Images/coin.png");
  cyclingImg= loadAnimation("Images/cycling.gif");
  desertImg= loadImage("Images/desert.jpg");
  digImg= loadAnimation("Images/dig.gif");
  farmImg= loadImage("Images/farm.jpg");
  paperImg= loadImage("Images/paper.png");
  treasureChestimg=loadImage("Images/treasureChest.jpg");
  stadiumimg= loadImage("Images/stadium.jpg");
  stepsimg= loadImage("Images/steps.png");
  retryimg= loadImage("Images/retry.png");
  nextlevelimg= loadImage ("Images/nextlevel.png");
  rockimg= loadImage("Images/rock.png");
  cactusimg= loadImage("Images/cactus.png");
  digbuttonimg= loadImage("Images/digbutton.png");
  flagimg= loadImage("Images/flag.png");
  scrollimg= loadImage("Images/scroll.png");
  lifeimg= loadImage("Images/life.png");
  backgroundSound= loadSound("sounds/backgroundFull.mp3");
  winSound= loadSound("sounds/win.mp3");
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  buildingbg= createSprite(displayWidth/2,displayHeight/2, 2500, 1000);
  buildingbg.addImage(buildingbgimg);
  farmbg= createSprite(displayWidth/2, displayHeight/2, 2500, 1000);
  farmbg.addImage(farmImg);
  desertbg= createSprite(displayWidth/2, displayHeight/2, 2500, 1000);
  desertbg.addImage(desertImg);
  farmbg.visible=false;
  desertbg.visible=false;
  buildingbg.scale= 3.5;
  farmbg.scale=3.2;
  desertbg.scale=3.2;
  runner= createSprite(displayWidth/10, displayHeight/6,30,50);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.4;
  dig= createSprite(650, 300, 2500, 1000);
  dig.addAnimation("digging",digImg);
  dig.visible=false;
  runner.setCollider("circle",0,0,100);
  treasureChest= createSprite(1000,300,40,30);
  treasureChest.addImage(treasureChestimg);
  treasureChest.visible=false;
  buildingGroup= createGroup();
  coingroup= createGroup();
  rockgroup= createGroup();
  cactusgroup= createGroup();
  ig= createSprite(displayWidth/13,displayHeight/4.285714285,150,20);
  ig.visible=false;
  ig2= createSprite(displayWidth/2.36363,displayHeight/1.13207,1500,20);
  ig2.visible=false; 
  //ig4= createSprite(650,450 ,1300,20);
  //ig4.visible=false;
  retry= createSprite(displayWidth/2,displayHeight/2);
  retry.addImage(retryimg);
  retry.scale=0.7;
  retry.visible= false;
  nextlevel=createSprite(displayWidth/2,displayHeight/2);
  nextlevel.addImage(nextlevelimg);
  nextlevel.visible=false;
  igt= createSprite(0,displayHeight/2,20,600);
  igt.visible=false;
  igt.velocityX=0;
  igt.velocityY=0;
  igm= createSprite(displayWidth/13,displayHeight/2,150,20);
  igm.visible= false;
  scroll=createSprite(displayWidth/2.167,displayHeight/3,30,50);
  scroll.addImage(scrollimg);
  scroll.visible=false;
  
}
function draw() {
 // console.log(frameCount);
  backgroundSound.play();
  background("white"); 
  igt.collide(runner);
  //runner.collide(igm);
  runner.velocityX=0;
  if(frameCount===1){
    alert('Use space key to make the runner jump.');
  }
  if(gamestate===level1start|| gamestate===level2start|| gamestate===level3start){
    gamestate=PLAY;
  }
  
 // lives();
  if(gamestate===PLAY)  { 
    if(touches.length>0 || keyDown("space")&& runner.y > 150){
      runner.velocityY=-10 ;
      runner.addImage(runnerJump);
      touches=[];
    }
   
    runner.velocityY=runner.velocityY+0.8;
    if(frameCount>0 && frameCount<999){
      buildingbg.visible=true;
      level=LEVEL1;
      buildings(); 
      buildingGroup.setVisibleEach(true);
      rockgroup.setVisibleEach(false);
    }
    
    if(frameCount<285 || frameCount===285){
      runner.collide(ig);
      coingroup.setVisibilityEach= false;
    }
     else{
       runner.collide(buildingGroup);
       coingroup.setVisibilityEach= true;
     }
    
    if(frameCount>0 && frameCount<999){
      buildingbg.visible=true;
      count= Math.round(World.frameCount/5);
      level=LEVEL1;
      coingroup.setVisibleEach(false);
       buildingbg.velocityX=-(4+Math.round(World.frameCount/100));
      if(buildingbg.x<0){
        buildingbg.x= buildingbg.width/2;
      }  
      buildingbg.cvelocityX=-(4+Math.round(World.frameCount/200));
      if(buildingbg.x<0){
        buildingbg.x= buildingbg.width/2;
        rockgroup.setVisibilityEach(false);
        cactusgroup.setVisibleEach(false);
      }
      if(mousePressedOver(retry)){
        reset();
      }
          /* if(life===0){
          buildingbg.velocityX = 0;
          // console.log(buildingbg.velocityX);
           gamestate= END;
           runner.addAnimation(runnerfall);
           retry.visible=true;
           buildingbg.velocityX = 0;
           buildingbg.velocityY = 0;
           
           buildingGroup.setLifetimeEach(-1);
           runner.velocityY= 0;
           buildingGroup.setVelocityXEach(0);
           buildingGroup.setVelocityYEach(0);     
           runner.changeAnimation(runnerfall);
           count= count;
        
       }*/
     }
    if(frameCount>999 || frameCount===1000 && frameCount<1001){
      gamestate= level1end;
     // alert('LEVEL2 : Use space key to make the runner jump.Collect coins to increase your score');
    }
      if(gamestate===level1end){
      
       //nextlevel.visible=true;
       gamestate=level2start;
  }

  else{
   // nextlevel.visible=false;
  }
  if(frameCount>1000 && frameCount<2500){
    gamestate= level2start;
    runner.velocityX=0;
  }
 /* console.log(gamestate);
  console.log(level);*/
   if(gamestate===level2start){
   // gamestate=level2start
   farmbg.visible=true;
    
    //runner.velocityY=0;
    runner.collide(igt);
    retry.visible=false;
    buildingbg.visible=false;
    if(farmbg.x<0){
      farmbg.x= farmbg.width/2;
    }  
    runner.collide(ig2);
    coins();
    rocks();
    farmbg.velocityX=-(4+Math.round(World.frameCount/200));
    if(runner.isTouching(coingroup)){
      count= count+1;
      coingroup.visibility=false;
    }  
    
    if(rockgroup.isTouching(runner)){
      gamestate=END;
    }
    if(frameCount>2500 || frameCount<2502 ){
      gameState=level2end;
     // nextlevel.visible=true;
    }
    else{
      //nextlevel.visible=false;
    }
   // console.log(frameCount);
    }   
    if(frameCount>2500 || frameCount===4000 && frameCount<4001){
      desertbg.visible=true;
      gameState=level3start;
      level= LEVEL3;
      desertbg.visible=true;
      retry.visible=false;
      buildingbg.visible=false;
      farmbg.visible=false;
      cactusgroup.setVisibleEach(true);
      rockgroup.setVisibleEach(false);
      if(desertbg.x<0){
        desertbg.x= desertbg.width/2;
      }  
      cactus();
      desertbg.velocityX=-(4+Math.round(World.frameCount/250));
      count= Math.round(World.frameCount/5);
      if(cactusgroup.isTouching(runner)){
        gamestate=END;
      }
      if(cactusgroup.isTouching(runner) && frameCount>3500){
        gamestate=END;
        scroll.visible=true;
        retry.visible=false;
      }
    }
   
  
   if(gamestate===END){
      if(buildingGroup.isTouching(runner)|| rockgroup.isTouching(runner)|| runner.x<0 || cactusgroup.isTouching(runner)){
        // buildingGroup.collide(runner);
         buildingbg.velocityX = 0;
         buildingbg.velocityY = 0;
         farmbg.velocityX = 0;
         farmbg.velocityY = 0;
         buildingGroup.setLifetimeEach(-1);
         coingroup.setLifetimeEach(-1);
         rockgroup.setLifetimeEach(-1);
         runner.velocityY= 0;
         buildingGroup.setVelocityXEach(0);
         buildingGroup.setVelocityYEach(0); 
         coingroup.setVelocityXEach(0);
         coingroup.setVelocityYEach(0);   
         rockgroup.setVelocityXEach(0);
         rockgroup.setVelocityYEach(0);
         runner.addAnimation(runnerfall);
         retry.visible=true;
         frameCount=0;
        
          }
      }
      if(mousePressedOver(retry)){
        gameState=PLAY;
         runner.collide(ig);
        reset();
      }
  drawSprites();
  text("Score 0"+count,1200,50);
  fill(0,0,0);
  //fontSize(10);
}
}
function buildings(){
if(frameCount % 100 === 0){
  building= createSprite(displayWidth,displayHeight/1.2 ,50,200);
   building.velocityX=-6;
   //building.debug=true;
   buildingGroup.add(building);
   var rand = Math.round (random(1,5));
   //steps.visible=false;
   //console.log(rand);
   switch (rand){
    case 1 : building.addImage(building1);
    break;
    case 2 : building.addImage(building2);
    break;
    case 3 : building.addImage(building3);
    break;
    case 4 : building.addImage(building4);
    break;
    case 5 : building.addImage(building5);
    break;
    default : break;
   }
   building.depth=1;
 }
 
}

function coins(){
  if(frameCount % 60 === 0  || frameCount % 80 === 0){
    var rand= Math.round(random(displaywidth/1.083, displayWidth));
    var rand1= Math.round(random(displayHeight/6,displayHeight/2));
    coin= createSprite(rand,rand1 ,50,200);
    coin.addImage(coinImg);
     coin.velocityX=-8;
     coin.scale=0.1;
     coingroup.add(coin);
   }
   
  }

function reset(){
  //gamestate= PLAY;
  retry.visible= false;
 /* if(frameCount<285 || frameCount===285){
    runner.collide(ig); 
   }*/
  
   runner.x=90;
  buildingGroup.destroyEach();
  buildingbg.velocityX=-(4+Math.round(World.frameCount/100));
  count=0;
 }
 function rocks(){
  if(frameCount % 80 === 0){
    rock= createSprite(displayWidth,displayHeight/1.090909090909091,50,200);
    rock.addImage(rockimg);
    rock.velocityX=-10;
    rock.scale=0.1;
    rockgroup.add(rock);
    runner.depth= rock.depth;
   }
   
  }

  function cactus(){
    if(frameCount % 80 === 0){
      plant= createSprite(displayWidth,displayHeight/1.2,50,200);
      plant.addImage(cactusimg);
      plant.velocityX=-8;
      plant.scale=0.3;
      cactusgroup.add(plant);
      runner.depth= plant.depth;
    }
  }

  /*function lives(){
    life=5;
    heart1= createSprite(1150,50,30,30);
    heart1.addImage(lifeimg);
    heart1.scale=0.1;
    heart2=createSprite(1100,50,30,30);
    heart2.addImage(lifeimg);
    heart2.scale=0.1;
    heart3=createSprite(1050,50,30,30);
    heart3.addImage(lifeimg);
    heart3.scale=0.1;
    heart4=createSprite(1000,50,30,30);
    heart4.addImage(lifeimg);
    heart4.scale=0.1;
    heart5=createSprite(950,50,30,30);
    heart5.addImage(lifeimg);
    heart5.scale=0.1;
    if(runner.isTouching(ig2)){
      life-=1;
      if(life=4)
      heart4.visible=false;
      if(life=3)
      heart3.visible=false;
      if(life=2)
      heart2.visible=false;
      if(life=1)
      heart1.visible=false;
    }
  }*/
