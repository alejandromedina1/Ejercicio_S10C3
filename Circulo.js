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
        if ( dist(px,py,this.x,this.y) < 25) {
                console.log("click")
                selected = true;
        }
        return selected;

    }
    
}