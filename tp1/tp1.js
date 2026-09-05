let fondo, suelo, logo;
let corre=[];
let pega=[];
let araña=[];
let posFinal;
let tiempoAn, estado, sprite, vel;
let posXLogo;
let posicion=[];


function preload(){
  fondo =loadImage("data/fondony.jpg");
  suelo=loadImage("data/trenspidey.png");
  logo=loadImage("data/logo.png");
  posFinal =loadImage("data/20.png");
  for (i=0;i<=5;i++){
  corre[i]=loadImage("data/"+(i)+".png");
  }
  for (i=0;i<=7;i++){
  pega[i]=loadImage("data/"+(i+6)+".png");
  }
  for (i=0;i<=6;i++){
  araña[i]=loadImage("data/"+(i+14)+".png");
  }
}

function setup() {
createCanvas(800,600);
estado=0;
sprite=0;
tiempoAn=0;
posicion[0] = -75;  //posicion X
posicion[1] = 395;//posicion Y
posicion[2] = 0;  //sprite
vel=2;
posXLogo=width;
}

function draw() {  
 image(fondo,0,0);
 image(suelo,-35,300,850,550);

if (estado==0){
 if (frameCount>0 && frameCount<175){
   posicion = correr(posicion, vel);
     }
    
    if (frameCount>175 && frameCount<195){
    image(araña[0],posicion[0],posicion[1]-15,araña[0].width*2,araña[0].height*2);
    }
 if (frameCount>195 && frameCount<330){
      posicion = pegar(posicion);
 }
  if (frameCount>=330){
  estado=1;
  tiempoAn=0;
  }
 } 
 if (estado==1){
   tiempoAn++;
if (frameCount>330){
  tiraTelaraña(posicion, tiempoAn);
  if(tiempoAn>90){
 image(araña[4],posicion[0],posicion[1],araña[4].width*2,araña[4].height*2);
 posXLogo=despLogo(posXLogo,1.5);
 if (posXLogo<width/2){
 estado=2;
 tiempoAn=0;
   }
  }
}
}
if (estado==2){
tiempoAn++;
 posXLogo=despLogo(width/2,1.5);
 cruzaBrazos(posicion, tiempoAn);
 if(tiempoAn > 80) {
    estado = 0;
    sprite=0;
    tiempoAn=0;
    posicion[0] = -75;  //posicion X
    posicion[1] = 395;//posicion Y
    posicion[2] = 0;  //sprite
    posXLogo=width;
    frameCount = 0;
 }
}
 }
 
 function despLogo(x,velocidad){
  x-=velocidad;
  push();
  imageMode(CENTER);
  image(logo,x,400,131,58);
  pop();
  return x;
 }
 
 function correr(correPosicion, velocidad){
  correPosicion[2]+=frameCount%7===2;
  correPosicion[0]+=velocidad;
  image(corre[correPosicion[2]],correPosicion[0],correPosicion[1],corre[correPosicion[2]].width*2,corre[correPosicion[2]].height*2);
  if (correPosicion[2]>=5){
  correPosicion[2]=0;
     }
    return correPosicion;
 }
 
 function pegar(pegaPosicion) {
   pegaPosicion[2]+=frameCount%6===2;
   image(pega[pegaPosicion[2]],pegaPosicion[0],pegaPosicion[1]-10,pega[pegaPosicion[2]].width*2,pega[pegaPosicion[2]].height*2);
    if (pegaPosicion[2]>=7){
        pegaPosicion[2]=0;
      } 
   return pegaPosicion; 
 }
 
 function tiraTelaraña(arañaPosicion, tiempo){
   if(tiempo>0 && tiempo<20){
     image(araña[1],arañaPosicion[0],arañaPosicion[1],araña[1].width*2,araña[1].height*2);
  }if(tiempo>20 && tiempo<40){
     image(araña[2],arañaPosicion[0],arañaPosicion[1],araña[2].width*2,araña[2].height*2);
  }if(tiempo>40 && tiempo<60){
     image(araña[1],arañaPosicion[0],arañaPosicion[1],araña[1].width*2,araña[1].height*2);
  }if(tiempo>60 && tiempo<90){
     image(araña[3],arañaPosicion[0],arañaPosicion[1],araña[3].width*2,araña[3].height*2);
}
 }
     
function cruzaBrazos(finalPosicion, tiempo){
  if (tiempo>0 && tiempo<25){
image(araña[5],finalPosicion[0],finalPosicion[1],araña[5].width*2,araña[5].height*2);
 } if (tiempo>25){
 image(posFinal,finalPosicion[0]+20,finalPosicion[1]-15,posFinal.width*2,posFinal.height*2);
 }
}
