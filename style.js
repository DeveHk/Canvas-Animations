const canvas = document.getElementById("in")
const ctx = canvas.getContext('2d')
console.dir(ctx)

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

})


//creating mouse events
const mouse={
    x:undefined,
    y:undefined    
}
canvas.addEventListener('mousemove',function(e){
    mouse.x=e.x
    mouse.y=e.y
    console.log(e)
    draw(mouse)
})
function draw(mouse){
///////drawing
ctx.beginPath()
ctx.lineWidth=5
//(x,y,r,sAngle,eAngle,counterclockwise)
ctx.arc(mouse.x,mouse.y,10,0,Math.PI*2)
///////fill
ctx.fillStyle = 'white'
ctx.fill()
///////outline
ctx.strokeStyle = 'red'
ctx.stroke()
}
draw(mouse)

function animate(){
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    
    requestAnimationFrame(animate)
}
animate()