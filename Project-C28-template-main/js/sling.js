class Sling{
constructor(body,point){
var options={
 bodyA:body,pointB:point,stiffness:0.04,length:1   
}
this.bodyA=body
this.pointB=point
this.sling=Constraint.create(options)
World.add(world,this.sling)
}
fly(){
this.sling.bodyA=null


}
attach(body){
this.sling.bodyA=body

}
display(){
if(this.sling.bodyA){
strokeWeight(3)
line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)

}

}



}