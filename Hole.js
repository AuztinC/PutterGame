
const rHole = this;
rHole.rx = xHole(60,600);
rHole.ry = yHole(30,400);
var score = false;
function yHole(yMin, yMax) {
    return Math.floor(Math.random() * (yMax - yMin + 1) ) + yMin;
}
function xHole(xMin, xMax) {
    return Math.floor(Math.random() * (xMax - xMin + 1) ) + xMin;
}
function newHole(){
    
    let angle = Math.round( Math.atan2(rHole.ry - ballPwr.y, rHole.rx - ballPwr.x));
    let dist = Math.round( Math.sqrt(Math.pow(ballPwr.x - rHole.rx, 2) + Math.pow(ballPwr.y - rHole.ry, 2)));

//console.log(ballPwr.yVel);
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
        ctx.fillStyle="white";
        ctx.arc(rHole.rx,rHole.ry,7,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

    ctx.beginPath();
        ctx.fillStyle="white";
        ctx.arc(rHole.rx,rHole.ry,2,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    

    if(dist<=9 && ballPwr.yVel<=9){
        // /alert("Good Job!");
    score = true;
    }


}

