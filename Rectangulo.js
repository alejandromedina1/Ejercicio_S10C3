class Rectangulo{
    //Constructor de los rectangulos//
    constructor(x, y, side){
        this.x=x;
        this.y=y;
        this.side=side;
    }
    //Metodo para pintar rectangulos//
    drawRectangulo(){
        fill(0,0,255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.side*2, this.side);
        rectMode(CORNER);
        stroke(1);
    }
    
}