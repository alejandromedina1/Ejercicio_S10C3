class Circulo{
    //Constructor de circulos//
    constructor(x, y, diameter){
        this.x=x;
        this.y=y;
        this.diameter=diameter;
    }
    //Metodo para pintar circulos//
    drawCirculo(){
        fill(255,0,0);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
        stroke(1);
    }
}