class Cuadrado{
    //Constructor de los cuadrados//
    constructor(x, y, side){
        this.x=x;
        this.y=y;
        this.side=side;
    }
    //Metodo para pintar los cuadrados//
    drawCuadrado(){
        fill(255,0,255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.side, this.side);
        rectMode(CORNER);
        stroke(1);
    }
}