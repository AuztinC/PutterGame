

//console.log(rHole.x);
const rHole = this;
rHole.x = xHole(50,600);
rHole.y = yHole(30,400);

function yHole(yMin, yMax) {
    return Math.floor(Math.random() * (yMax - yMin + 1) ) + yMin;
}
function xHole(xMin, xMax) {
    return Math.floor(Math.random() * (xMax - xMin + 1) ) + xMin;
}
function newHole(){
    

Hole = new Hole();
    function Hole(){

    ctx.beginPath();
        ctx.fillStyle="white";
        ctx.arc(rHole.x,rHole.y,12,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    ctx.beginPath();
        ctx.fillStyle="grey";
        ctx.arc(rHole.x,rHole.y,10,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    ctx.beginPath();
        ctx.fillStyle="black";
        ctx.arc(rHole.x,rHole.y,7,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}