

const ballPwr = this;
var follow = setInterval(follow, 1000/fps);
ballPwr.speed = 0;
ballPwr.x = 0;
ballPwr.y = 0;
ballPwr.xVel = 0;
ballPwr.yVel = 0;
ballPwr.angle = 90;

//console.log(this);
function follow(){
    ballPwr.x = Player.x +98;
    ballPwr.y = Player.y -30;
    //console.log("following");
}   

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
    // SLOW DOWN
    if(ballPwr.y<600 && ballPwr.yVel>=.25){
        ballPwr.yVel-=0.5;
        if(ballPwr.yVel>10){
            ballPwr.yVel-=.25;
        }
        
    
    }
    
// SHOOT ZE BALL
//ballPwr.speed = pwrParent.height /4;
    if(pwrParent.height < 299 && Input.spacebar==1){
        setTimeout(Shoot,100);
        }else{follow;}
    function Shoot(){
        
        ballPwr.yVel += Math.round(Math.sin((ballPwr.angle + 180) * Math.PI / 180)  * power * Input.spacebar);
        clearInterval(follow);
        pwrParent.height = -1;
        //console.log("Pushing");
    }
    ballPwr.y -= ballPwr.yVel;

    //BALL ANIMATION    
    if(score==true){
        setTimeout(frame1, 100);
        setTimeout(frame2, 200);
        setTimeout(frame3, 300);
        setTimeout(frame4, 400);

        
    }
    function frame1(){
        ballPwr.x = rHole.rx - 2;
        ballPwr.y = rHole.ry - 2;
    }
    function frame2(){
        ballPwr.x = rHole.rx - 1;
        ballPwr.y = rHole.ry - 1;
    }
    function frame3(){
        ballPwr.x = rHole.rx - 4;
        ballPwr.y = rHole.ry - 3;
    }
    function frame4(){
        ballPwr.x = rHole.rx - 4;
        ballPwr.y = rHole.ry - 3;
    }
    //console.log(yVel);
// END DRAWBALL()
}


