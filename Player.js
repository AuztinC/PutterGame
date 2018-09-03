



Player = new Player();

function Player(){


const Parent=this;
Parent.x = 212;
Parent.y = 640;
Parent.xVel = 0;
Parent.exVel = 0;
Parent.speed = 2;
Parent.angle = 0;


Parent.update = function(){

    Body = new BuildaBody();
    function BuildaBody(){
        //body
        ctx.beginPath();
            ctx.fillStyle="chocolate";
            ctx.arc(Parent.x,Parent.y,40,0,2*Math.PI);
            ctx.stroke();
            ctx.fill();
        ctx.closePath();
        //head
        ctx.beginPath();
            ctx.fillStyle="tan";
            ctx.arc(Parent.x-7,Parent.y,20,0,2*Math.PI);
            ctx.stroke();
            ctx.fill();
        ctx.closePath();
        //hair
        ctx.beginPath();
            ctx.fillStyle="yellow";
            ctx.arc(Parent.x-12,Parent.y,20,1,5);
            ctx.stroke();
            ctx.fill();
        ctx.closePath();
        //right eye
        ctx.beginPath();
            ctx.fillStyle="white";
            ctx.arc(Parent.x-2,Parent.y+8,8,5,1);
            ctx.stroke();
            ctx.fill();
        ctx.closePath();
        //left eye
        ctx.beginPath();
            ctx.fillStyle="white";
            ctx.arc(Parent.x-2,Parent.y-8,8,5,1);
            ctx.stroke();
            ctx.fill();
        ctx.closePath();
    }

        Club = new Club();
        function Club(){

            //this.angle = 180;

            ctx.beginPath();
            //ctx.fillStyle="red";

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y-20);
            ctx.lineTo(Parent.x+108,Parent.y-20);

            ctx.stroke();
            ctx.closePath();
        }


        // HOW TO MOVE
Parent.xVel += Math.cos((Parent.angle + 180) * Math.PI / 180) * Input.right * Parent.speed;
Parent.exVel += Math.cos((Parent.angle + 180) * Math.PI / 180) * Input.left * Parent.speed;
//right
Parent.x -= Parent.xVel;
//left
Parent.x += Parent.exVel;
//Slow down
if(Input.right == 0){
    if(Parent.xVel<0){
        Parent.xVel+=0.5;
    }
}
if(Input.left == 0){
    if(Parent.exVel<0){
        Parent.exVel+=0.5;
    }
}
//console.log(Parent.xVel);
if(Parent.xVel>=10){
    Parent.xVel+=.5;
}
    else {
        Parent.xVel=0;
    }
if(Parent.exVel>=10){
    Parent.exVel+0.5;
}
    else {
        Parent.exVel=0;
    }
if(dblTapBool == true){
    Parent.speed = 4;
}
    else{
        Parent.speed=2;
    }
    // end update
    }

}
