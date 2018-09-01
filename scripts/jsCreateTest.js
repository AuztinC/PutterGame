
//YoBox
var dot = document.createElement("div");
//var t = document.createTextNode(" Yo");

dot.setAttribute("class","dotBox");
dot.style.backgroundColor=("red");
dot.style.align=("center");


//Link
var linky = document.createElement("button");
var linktext = document.createTextNode("Reset");
linky.style.padding=("5px");
linky.addEventListener("click", ohSnap);
linky.setAttribute("class","linky");

//children
document.body.appendChild(dot);
linky.appendChild(linktext);
dot.appendChild(linky);
//dot.appendChild(t);

function ohSnap(){
    linky.style.backgroundColor=("orange");
    ballPwr.reset();
        //console.log("Its Hapennin");
}

        
