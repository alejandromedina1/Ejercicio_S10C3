class Circulo{
    constructor(x, y, diameter){
        this.x=x;
        this.y=y;
        this.diameter=diameter;
    }
    drawCirculo(){
        fill(255,0,0);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
        stroke(1);
    }
    isOver(px, py){
        return dist(px,py,this.x,this.y)< this.diameter/2;
    }
}