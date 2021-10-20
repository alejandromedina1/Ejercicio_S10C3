class Triangulo{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    drawTriangulo(){
        fill(0,255,0);
        noStroke();
        triangle(this.x, this.y, this.x+25, this.y-40,this.x+50,this.y);
        stroke(1);
    }
}