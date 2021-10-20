//Arreglo de las casillas de fondo//
let casillas=[];

//Formas de las casillas//
let c1;
let r;
let c2;
let t;

//Formas movibles//
let cuadrado;
let rectangulo;
let circulo;
let triangulo;

function setup() {
  createCanvas(500, 600);
  //Creamos los espacio en el arreglo//
  casillas.push(new Prision(150,150));
  casillas.push(new Prision(350,150));
  casillas.push(new Prision(150,350));
  casillas.push(new Prision(350,350));

  //Definimos las formas dentro de las casillas//
  c1= new Cuadrado(100,500,50);
  r= new Rectangulo(200,500,50);
  c2= new Circulo(300,500,50);
  t= new Triangulo(350,520);

  //Definimos las formas que se mueven//
  cuadrado= new Cuadrado(150,150,50);
  rectangulo= new Rectangulo(350,150,50);
  circulo= new Circulo(150,350,50);
  triangulo= new Triangulo(325,370);

  
}

function draw() {
  background(220);
  //Pintamos las casillas del fondo//
  for (let index = 0; index < casillas.length; index++) {
    casillas[index].printPrision();
  }
  //Pintamos las formas de cada casilla//
  c1.drawCuadrado();
  r.drawRectangulo();
  c2.drawCirculo();
  t.drawTriangulo();

  //Pintamos las formas movibles
  cuadrado.drawCuadrado();
  rectangulo.drawRectangulo();
  circulo.drawCirculo();
  triangulo.drawTriangulo();
}


function mousePressed(){
  
}

function mouseDragged(){
  
}

function mouseRelease(){
  
}
