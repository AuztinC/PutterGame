
const pwrParent = this;
pwrParent.height = 0;
pwrSpeed=2
var power = 0;
function MasterPwr(){

function PwrMtr(){
    //console.log();
    ctx.beginPath();
        ctx.fillStyle="white";
        ctx.rect(10,250,40,300);
        ctx.fill();
        ctx.stroke();
    ctx.closePath();

    }
    PwrMtr = new PwrMtr();
    pwrColor = new pwrColor();

function pwrColor(){
        //console.log(hitPwr);
    ctx.beginPath();

    let grd=ctx.createLinearGradient(100,100,100,600);
    grd.addColorStop(0, "#000");
    grd.addColorStop(.2,"red");
    grd.addColorStop(.5, "yellow");
    grd.addColorStop(1,"cyan");

    ctx.fillStyle=grd;
        ctx.rect(10,550,40,pwrParent.height);
        ctx.fill();
        ctx.stroke();
    ctx.closePath();
    }

//setTimeout(PwrMtr, 10);
//Meter

power = Math.round(pwrParent.height/9);
//console.log(pwrParent.height);
    if(Input.down == 1 && pwrParent.height<=0){
        Math.round(pwrSpeed--);
        Math.round(pwrParent.height+=pwrSpeed);
        if(pwrParent.height<=-299){
            pwrParent.height=-300;
        }
        
    }
    if(Input.down == 0 && pwrParent.height <= 0){
        pwrSpeed=2
        //pwrSpeed++;
        pwrParent.height+=2;
    }
    if(pwrParent.height>-1){
        pwrParent.height=0;
    }
}
