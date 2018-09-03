

const ballPwr = this;
var follow = setInterval(follow, 1000/fps);
ballPwr.speed = 15;
ballPwr.x = 0;
ballPwr.y = 0;
ballPwr.xVel = 0;
ballPwr.yVel = 0;
ballPwr.angle = 90;
function drawBall(){

    
Ball = new Ball();

    function Ball(){
        ctx.beginPath();
        ctx.fillStyle="white";
        ctx.arc(ballPwr.x,ballPwr.y,8,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //shadow1
        ctx.beginPath();
        ctx.fillStyle="grey";
        ctx.arc(ballPwr.x-4,ballPwr.y-4,.5,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //shadow2
        ctx.beginPath();
        ctx.fillStyle="grey";
        ctx.arc(ballPwr.x+4,ballPwr.y-4,.5,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //shadow3
        ctx.beginPath();
        ctx.fillStyle="dark-grey";
        ctx.arc(ballPwr.x+2,ballPwr.y-2,.5,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //shadow4
        ctx.beginPath();
        ctx.fillStyle="dark-grey";
        ctx.arc(ballPwr.x+1,ballPwr.y+2,.5,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //shadow4
        ctx.beginPath();
        ctx.fillStyle="dark-grey";
        ctx.arc(ballPwr.x-4,ballPwr.y+4,.5,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    if(ballPwr.y<500 && ballPwr.yVel<=0){
        ballPwr.yVel+=0.5;
        if(ballPwr.yVel>0){
            ballPwr.yVel-=0.5;
        }
    }
// SHOOT ZE BALL
    if(pwrParent.height < 299 && Input.spacebar==1){
        Shoot();
        }else{follow;}
    function Shoot(){
        ballPwr.yVel += Math.sin((ballPwr.angle + 180) * Math.PI / 180) * Input.spacebar * ballPwr.speed;
        clearInterval(follow);
        pwrParent.height = 299;
        //console.log("Pushing");
    }
//pwrParent.xVel += Math.cos((pwrParent.angle + 180) * Math.PI / 180) * Input.spacebar * ballPwr.speed;
//pwrParent.x += pwrParent.xVel;
ballPwr.y += ballPwr.yVel;
    // /console.log(hitPwr);
    

// END DRAWBALL()
}


function reset(){
    follow();
}

function follow(){
    ballPwr.x = Player.x +98;
    ballPwr.y = Player.y -30;
    console.log("following");
}

