class Prision{
    //Constructor de las casillas//
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    //Metodo para pintar casillas//
    printPrision(){
        fill(255);
        stroke(0);
        strokeWeight(3);
        rectMode(CENTER);
        rect(this.x, this.y, 200, 200);
        rectMode(CORNER);
        stroke(0);
        strokeWeight(1);
    }
}