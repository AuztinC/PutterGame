document.addEventListener("keydown", this.keyDown);
document.addEventListener("keyup", this.keyUp);

let Input ={}

Input.left = 0;
Input.right = 0;
Input.down = 0;
Input.spacebar = 0;
Input.r = 0;
var delta = 400;
var lastKeypressTime = 0;

var dblTapBool;

function keyDown(event){
    if (event.key == "ArrowRight" || event.key == "d") {
        Input.right = 1;
    }
    if (event.key == "ArrowLeft" || event.key == "a") {
        Input.left = 1;
        }
    if (event.key == "ArrowDown" || event.key == "s") {
        Input.down = 1;
        }
    if (event.key == "r") {
        Input.r = 1;
        }
    if(event.key == " "){
        Input.spacebar = 1;
        
    }
        var thisKeypressTime = new Date();
        if ( thisKeypressTime.left - lastKeypressTime.left <= delta )
        {
        dblTap();
        thisKeypressTime = 0;
        }
    lastKeypressTime = thisKeypressTime;
   //document.removeEventListener("keydown",keyDown);
    //Input.left=0;
    //Input.right=0;
}
function keyUp(event){
    if (event.key == "ArrowRight" || event.key == "d") {
        Input.right = 0;
    }
    if (event.key == "ArrowLeft" || event.key == "a") {
        Input.left = 0;
    }
    if (event.key == "ArrowDown" || event.key == "s") {
        Input.down = 0;
    }
    if(event.key == "r"){
        Input.r = 0;
  
    }
    if(event.key == " "){
        Input.spacebar = 0;
  
    }
    dblTapBool=false;
    //document.addEventListener("keydown",keyDown);
}


function dblTap(){
console.log("DOUBLEDOO");
dblTapBool = true;
}




