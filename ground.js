class Ground{
    constructor(x,y,w,h){
        var opt={

            isStatic:true
        }
        this.body=bodies.rectangle(x,y,w,h,opt)
        this.widht=w
        this.height=h
        world.add(wr,this.body)
        
    }
    displays(){
        var pos=this.body.position
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.widht,this.height)
    }
}