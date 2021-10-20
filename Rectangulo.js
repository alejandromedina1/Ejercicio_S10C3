class Rectangulo{
    constructor(x, y, side){
        this.x=x;
        this.y=y;
        this.side=side;
    }
    drawRectangulo(){
        fill(0,0,255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.side*2, this.side);
        rectMode(CORNER);
        stroke(1);
    }
    selectedRectangulo(selected){
        if ( this.x- this.side/2 < mouseX && mouseX < this.x+side/2 &&
            this.y- this.side/2 < mouseY && mouseY < this.y+side/2) {
            return this.selectedRectangulo=true;
        }
    }
}