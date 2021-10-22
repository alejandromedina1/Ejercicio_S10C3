//Arreglo de las casillas de fondo//
let casillas = [];

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

//Arreglo de booleanos//
let selected;

function setup() {
  createCanvas(500, 600);
  //Creamos los espacio en el arreglo//
  casillas.push(new Prision(150, 150));
  casillas.push(new Prision(350, 150));
  casillas.push(new Prision(150, 350));
  casillas.push(new Prision(350, 350));

  //Definimos las formas movibles//
  c1 = new Cuadrado(100, 500, 50);
  r = new Rectangulo(200, 500, 50);
  c2 = new Circulo(300, 500, 50);
  t = new Triangulo(350, 520);

  //Definimos las formas de cada casilla//
  cuadrado = new Cuadrado(150, 150, 50);
  rectangulo = new Rectangulo(350, 150, 50);
  circulo = new Circulo(150, 350, 50);
  triangulo = new Triangulo(325, 370);

  //Definimos arreglo de booleanos//
  selected = null;
}

function draw() {
  background(220);
  //Pintamos las casillas del fondo//
  for (let index = 0; index < casillas.length; index++) {
    casillas[index].printPrision();
  }
  //Pintamos las formas de cada casilla//
  cuadrado.drawCuadrado();
  rectangulo.drawRectangulo();
  circulo.drawCirculo();
  triangulo.drawTriangulo();

  //Pintamos las formas movibles//
  c1.drawCuadrado();
  r.drawRectangulo();
  c2.drawCirculo();
  t.drawTriangulo();

  // Figuras
  for (let i = 0; i < casillas.length; i++) {
    // Figura 1
    if (casillas[i].gX - 100 < c1.gX && c1.gX < casillas[i].gX + 100 &&
      casillas[i].gY - 100 < c1.gY && c1.gY < casillas[i].gY + 100) {
      casillas[i].sR = 255
    }else{
      casillas[i].sR = 0
    }
    if (casillas[0].gX - 100 < c1.gX && c1.gX < casillas[0].gX + 100 &&
      casillas[0].gY - 100 < c1.gY && c1.gY < casillas[0].gY + 100) {
      casillas[0].sR = 0
      casillas[0].sG = 255
    }else{
      casillas[0].sG = 0
    }
    //Figura 2
    if (casillas[i].gX - 100 < r.gX && r.gX < casillas[i].gX + 100 &&
      casillas[i].gY - 100 < r.gY && r.gY < casillas[i].gY + 100) {
      casillas[i].sR = 255
    }
    if (casillas[1].gX - 100 < r.gX && r.gX < casillas[1].gX + 100 &&
      casillas[1].gY - 100 < r.gY && r.gY < casillas[1].gY + 100) {
        casillas[1].sR = 0
        casillas[1].sG = 255
    }else{
      casillas[1].sG = 0
    }
    //Figura 3
    if (casillas[i].gX - 100 < c2.gX && c2.gX < casillas[i].gX + 100 &&
      casillas[i].gY - 100 < c2.gY && c2.gY < casillas[i].gY + 100) {
      casillas[i].sR = 255
    }
    if (casillas[2].gX - 100 < c2.gX && c2.gX < casillas[2].gX + 100 &&
      casillas[2].gY - 100 < c2.gY && c2.gY < casillas[2].gY + 100) {
        casillas[2].sR = 0
        casillas[2].sG = 255
    }else{
      casillas[2].sG = 0
    }
    //Figura 4
    if (casillas[i].gX - 100 < t.gX && t.gX < casillas[i].gX + 100 &&
      casillas[i].gY - 100 < t.gY && t.gY < casillas[i].gY + 100) {
      casillas[i].sR = 255
    }
    if (casillas[3].gX - 100 < t.gX && t.gX < casillas[3].gX + 100 &&
      casillas[3].gY - 100 < t.gY && t.gY < casillas[3].gY + 100) {
        casillas[3].sR = 0
        casillas[3].sG = 255
    }else{
      casillas[3].sG = 0
    }
  }
}

function mousePressed() {
  if (c1.click(mouseX, mouseY)) {
    selected = c1;
  }
  if (r.click(mouseX, mouseY)) {
    selected = r;
  }
  if (c2.click(mouseX, mouseY)) {
    selected = c2;
  }
  if (t.click(mouseX, mouseY)) {
    selected = t;
  }
}

function mouseDragged() {
  if (selected == c1) {
    c1.sX = mouseX;
    c1.sY = mouseY;
  }
  if (selected == r) {
    r.sX = mouseX;
    r.sY = mouseY;
  }
  if (selected == c2) {
    c2.sX = mouseX;
    c2.sY = mouseY;
  }
  if (selected == t) {
    t.sX = mouseX;
    t.sY = mouseY;
  }
}

function mouseRelease() {
  selected = null;
}