class Dustbin{
    constructor(x,y,width,height){
    var options= {
        restitution:0,
        friction:5,
        density:0,
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.leftbody=Bodies.rectangle(970,550,20,100);
    this.righttbody=Bodies.rectangle(1180,550,20,100);
    this.basebody=Bodies.rectangle(1080,590,200,20);

    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}