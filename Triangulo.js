class Triangulo{
    //Constructor del triangulo//
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    //Metodo para pintar triangulos//
    drawTriangulo(){
        fill(0,255,0);
        noStroke();
        triangle(this.x, this.y, this.x+25, this.y-40,this.x+50,this.y);
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
        if ( dist(px,py,this.x+25,this.y-25)<25) {
                console.log("click")
                selected = true;
        }
        return selected;

    }
    
}