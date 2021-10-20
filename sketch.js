let casillas=[];

let c1;
let r;
let c2;
let t;

let cuadrado;
let rectangulo;
let circulo;
let triangulo;

let selected;

function setup() {
  createCanvas(500, 600);

  casillas.push(new Prision(150,150));
  casillas.push(new Prision(350,150));
  casillas.push(new Prision(150,350));
  casillas.push(new Prision(350,350));

  c1= new Cuadrado(100,500,50);
  r= new Rectangulo(200,500,50);
  c2= new Circulo(300,500,50);
  t= new Triangulo(350,520);

  cuadrado= new Cuadrado(150,150,50);
  rectangulo= new Rectangulo(350,150,50);
  circulo= new Circulo(150,350,50);
  triangulo= new Triangulo(325,370);

  selected=null;
}

function draw() {
  background(220);
  
  for (let index = 0; index < casillas.length; index++) {
    casillas[index].printPrision();
  }

  c1.drawCuadrado();
  r.drawRectangulo();
  c2.drawCirculo();
  t.drawTriangulo();

  cuadrado.drawCuadrado();
  rectangulo.drawRectangulo();
  circulo.drawCirculo();
  triangulo.drawTriangulo();

}

function mousePressed(){
  if (circulo.isOver(mouseX,mouseY)) {
    selected=circulo.get(index);
  }
}

function mouseDragged(){
  if (selected!=null) {
    selected.setX(mouseX);
    selected.setY(mouseY);
  }
}

function mouseRelease(){
  selected=null;
}
