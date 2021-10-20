class Prision{
    //Constructor de las casillas//
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.r=0;
        this.g=0;
        this.b=0;
        this.sw=3;
    }
    //Metodo para pintar casillas//
    printPrision(){
        fill(255);
        stroke(this.r,this.g,this.b);
        strokeWeight(this.sw);
        rectMode(CENTER);
        rect(this.x, this.y, 200, 200);
        rectMode(CORNER);
        stroke(0);
        strokeWeight(1);
    }
    get gX(){
        return this.x;
    }
    get gY(){
        return this.y;
    }
    get gR(){
        return this.r;
    }
    set sR(rojo){
        this.r = rojo;
    }
    get gG(){
        return this.g;
    }
    set sG(verde){
        this.g = verde;
    } 
    set sW(grosor){
        this.sw = grosor;
    } 
    
}