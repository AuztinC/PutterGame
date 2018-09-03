
const pwrParent = this;
//var Height = new Array(300); 
//Height.reverse();
pwrParent.height = 300;
var power = pwrParent.height/3;
pwrSpeed=2;
//hitPwr=pwrParent.height/4;
function MasterPwr(){
    //hitPwr = 0;
    hitPwr=pwrParent.height/4;
    pwrColor = new pwrColor();
    //AddtoMeter
    function pwrColor(){
        //console.log(hitPwr);
    ctx.beginPath();

    let grd=ctx.createLinearGradient(100,0,0,700);
    grd.addColorStop(0, "#000");
    grd.addColorStop(.2,"red");
    grd.addColorStop(.5, "yellow");
    grd.addColorStop(1,"cyan");

    ctx.fillStyle=grd;
    ctx.fillRect(10,520,40,30);
        ctx.rect(10,250,40,300);
        ctx.fill();
        ctx.stroke();
    ctx.closePath();
    }

    PwrMtr = new PwrMtr();
//setTimeout(PwrMtr, 10);
//Meter

    function PwrMtr(){

    ctx.beginPath();
        ctx.fillStyle="white";
        ctx.rect(10,250,40,pwrParent.height);
        ctx.fill();
        ctx.stroke();
    ctx.closePath();

    }

    if(Input.down == 1 && pwrParent.height>=7){
        pwrSpeed--;
        //Height.length-=pwrSpeed;
        pwrParent.height+=pwrSpeed;
        //console.log("Should be Down");
        }else if(Input.down == 0 && pwrParent.height <= 300){
            pwrSpeed=2;
            pwrParent.height+=pwrSpeed;
        }

}
