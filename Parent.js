class Parent{
    constructor(x,y,w,h,angle){
        var opt={

            'restitution':0.8,
            'density':1.0,
            'friction':1.0
        }
        this.body=bodies.rectangle(x,y,w,h,opt)
        this.widht=w
        this.height=h
        this.image=loadImage('sprites/base.png')
        world.add(wr,this.body)
    }
    displays(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.widht,this.height)
    

        pop()
    }
}