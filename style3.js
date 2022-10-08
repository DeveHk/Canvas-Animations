const canvas = document.getElementById("in")
const ctx = canvas.getContext('2d')
console.dir(ctx)
//adjusting canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})



//click:: and update mouse pointer 
const mause={
    x:undefined,
    y:undefined
}

canvas.addEventListener('mousemove', function(e){
    console.log(e.x,e.y)
    mause.x=e.x
    mause.y=e.y+10
    j=10
    for(let i=0;i<j;i++){
        particlesArray.push(new Particle())
    }
})
canvas.addEventListener('click', function(e){
    console.log(e.x,e.y)
    mause.x=e.x
    mause.y=e.y+10
    j=Math.random()*800+0
    for(let i=0;i<j;i++){
        particlesArray.push(new Particle())
    }
})

let particlesArray=[]
////////class Defining a particle

//particles have differnt location and differnt speed and size
class Particle {
    constructor(p,q) {
        this.x=mause.x
        this.y=mause.y
       // this.x = Math.random()*canvas.width
       // this.y = Math.random()*canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 5 - 1.5
        this.speedY = Math.random() * 5 - 1.5
    }
    //change location to another
    update() {
        
        this.x += this.speedX
        this.y += this.speedY
        if(this.size>0.2)
        this.size=this.size-0.02

    }
    /////drawing each particle
    drawCircle() {
        ///////drawing
        ctx.beginPath()
        
        //(x,y,r,sAngle,eAngle,counterclockwise)
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ///////fill
        ctx.fillStyle = `rgb(${Math.random()*155+100},${Math.random()*255+0},${Math.random()*255+0})`
        ctx.fill()
        ///////outline
        ctx.strokeStyle = 'red'
        ctx.stroke()
    }
    drawlines(){
        
    }
}
///////create particles
function init(){
    for(let i=0;i<100;i++){
        particlesArray.push(new Particle())
    }
}
//init()

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

////infinite recurssion causing animation
function animate() {
    //previous canvous clear
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //agin chnaged position
    handleParticles()
    requestAnimationFrame(animate)
}
animate()
