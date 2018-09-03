
const pwrParent = this;
pwrParent.height = 300;
pwrSpeed=2
var power = 0;

function MasterPwr(){

    pwrColor = new pwrColor();

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
power = Math.round(pwrParent.height/-9);
console.log(pwrSpeed);
    if(Input.down == 1 && pwrParent.height>=0){
        Math.round(pwrSpeed--);
        Math.round(pwrParent.height+=pwrSpeed);
        
        }else if(Input.down == 0 && pwrParent.height <= 300 && pwrSpeed<=10){
        pwrSpeed++;
            pwrParent.height+=pwrSpeed;
        }

}
