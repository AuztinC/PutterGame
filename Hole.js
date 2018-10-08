
const rHole = this;
rHole.rx = xHole(60,600);
rHole.ry = yHole(30,400);

function yHole(yMin, yMax) {
    return Math.floor(Math.random() * (yMax - yMin + 1) ) + yMin;
}
function xHole(xMin, xMax) {
    return Math.floor(Math.random() * (xMax - xMin + 1) ) + xMin;
}
function newHole(){
    


//console.log(rHole.k);
Hole = new Hole();
    function Hole(){

    ctx.beginPath();
        ctx.fillStyle="white";
        ctx.arc(rHole.rx,rHole.ry,12,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    ctx.beginPath();
        ctx.fillStyle="grey";
        ctx.arc(rHole.rx,rHole.ry,10,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    ctx.beginPath();
        ctx.fillStyle="black";
        ctx.arc(rHole.rx,rHole.ry,7,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    console.log(bhDifference());
    //console.log(ballPwr.y);
function bhDifference(){

    return Math.round(Math.cos(ballPwr.yVel) * Math.PI - rHole.ry);
}

    if(rHole.ry==ballPwr.y){
        alert("Good Job!");
        
    }

}

