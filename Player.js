


Player = new Player();

function Player(){


const Parent=this;
Parent.x = 212;
Parent.y = 640;
Parent.xVel = 0;
Parent.exVel = 0;
Parent.speed = 2;
Parent.angle = 0;


// COLOR ME SILLY

//hair
hairColor=document.getElementById("hairColor");
hairColor.defaultValue = "#ecec01";

shirtDiv = document.getElementById("shirtColor");
shirtDiv.defaultValue = "#d05900";

shirtRange=document.getElementById("shirtRange");
shirtLeft=document.getElementById("leftPicker");
shirtRight=document.getElementById("rightPicker");
shirtLeft.onclick=(leftPicker());
shirtRight.addEventListener("click", rightPicker());

function leftPicker(){
    shirtRange.value-=2;
    console.log("clickedleft");
}
function rightPicker(){
    shirtRange.value+=2;
    console.log("clickedright");
}



// COLOR ME SILLY

Parent.update = function(){
    console.log(shirtRange.value);
    Body = new BuildaBody();
    function BuildaBody(){
        //body
        ctx.beginPath();
            ctx.fillStyle=shirtDiv.value;
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
            ctx.fillStyle=hairColor.value;
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
//      CLUB ANIMATION

            //Frame 1 / 0Pwr
           if(pwrParent.height=="0"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y-20);
            ctx.lineTo(Parent.x+108,Parent.y-20);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 2 / -30Pwr
           if(pwrParent.height<"0"&&pwrParent.height>"-30"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y-10);
            ctx.lineTo(Parent.x+108,Parent.y-10);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 3 / -100Pwr
           if(pwrParent.height<"-30"&&pwrParent.height>"-100"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y-5);
            ctx.lineTo(Parent.x+108,Parent.y-5);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 4 / -175Pwr
           if(pwrParent.height<"-100"&&pwrParent.height>"-175"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y+5);
            ctx.lineTo(Parent.x+108,Parent.y+5);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 5 / -250Pwr
           if(pwrParent.height<"-175"&&pwrParent.height>"-250"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y+15);
            ctx.lineTo(Parent.x+108,Parent.y+15);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 6 / -275Pwr
           if(pwrParent.height<"-250"&&pwrParent.height>"-275"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y+20);
            ctx.lineTo(Parent.x+108,Parent.y+20);

            ctx.stroke();
            ctx.closePath();
           }
           //Frame 7 / -297Pwr
           if(pwrParent.height<"-275"){
            ctx.beginPath();

            ctx.moveTo(Parent.x+38, Parent.y+10);
            ctx.lineTo(Parent.x+88, Parent.y+25);
            ctx.lineTo(Parent.x+108,Parent.y+25);

            ctx.stroke();
            ctx.closePath();
           }
           
           
           

            
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
//console.log(pwrParent.height);
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
