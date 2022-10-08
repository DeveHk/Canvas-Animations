////
const canvas = document.getElementById("in")
const fra=document.getElementById("frame")

const ctx = canvas.getContext('2d')
console.dir(ctx)
canvas.width = fra.clientWidth
canvas.height = fra.clientHeight

window.addEventListener('resize', function() {
    canvas.width = frame.innerWidth
    canvas.height = frame.innerHeight

})
////


//Pointer Update
const mause={
    x:undefined,
    y:undefined
}
/*canvas.addEventListener('mousemove', function(e){
    mause.x=e.x
    mause.y=e.y+10
})*/
//


//Class Defining a particle
let particlesArray=[]
let hue=0
class Particle {
    constructor(direc) {
        this.x=mause.x
        this.y=mause.y
        this.color=`hsl(${hue},100%,50%)`
        this.size = Math.random() 
        this.speedX=0
        this.speedY=0
        if(direc=='x')
        this.speedX = Math.random() * 3 - 1.5
        else if(direc=='y')
        this.speedY = Math.random() * 3 - 1.5
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
        console.log(this.x,this.y)
        if(this.size>0.2)
        this.size=this.size-0.01
    }
    drawCircle() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)//(x,y,r,sAngle,eAngle,counterclockwise)
        ctx.fillStyle = this.color
        ctx.fill()
        //ctx.strokeStyle = 'white'
       ///ctx.stroke()
    }
    drawlines(){

    }
}


//Event Listeners:::
//Creates partile depending on event
canvas.addEventListener('mousemove', function(e){
    let [px,py]=[mause.x,mause.y]
    mause.x=e.x
    mause.y=e.y
    let [dx,dy]=[px-e.x,py-e.y]
    let direc
    if((dx*dx)>(dy*dy))
    direc='y'
    else
    direc='x'
    j=Math.random()*5+1
    for(let i=0;i<j;i++){
        particlesArray.push(new Particle(direc))
    }
})
canvas.addEventListener('click', function(e){
    j=Math.random()*10+1
    for(let i=0;i<1;i++){
        particlesArray.push(new Particle())
    }
})
//

function handleParticles(){
    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update()
        particlesArray[i].drawCircle()
        if(particlesArray[i].size<=0.2)
            {
                particlesArray.splice(i,1)
                i--
            }
        
    }
}


//Frame adjust
function animate() {
   // ctx.clearRect(0,0,canvas.width,canvas.height)
   ctx.fillStyle='rgba(0,0,0,0.1)'
   //hue++
   ctx.fillRect(0,0,canvas.width,canvas.height)
    handleParticles()
    
    //return
    requestAnimationFrame(animate)
}
animate()
