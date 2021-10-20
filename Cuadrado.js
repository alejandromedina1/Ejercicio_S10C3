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
    get gX(){
        return this.x;
    }
    set sX(px){
        this.x = px;
    }
    get gY(){
        return this.y;
    }
    set sY(py){
        this.y = py;
    }
    get cSide(){
        return this.side;
    }
    click(px, py){
        let selected = false;
        if ( this.x - this.side/2 < px && px < this.x + this.side/2 && 
            this.y - this.side/2 < py && py < this.y + this.side/2) {
                console.log("click")
                selected = true;
        }
        return selected;

    }
}