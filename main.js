var mouseEvent="empty";
var last_x,last_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="Black";
width_of_pen=2;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e){

    color=document.getElementById("color").value;
    width_of_pen=document.getElementById("width_of_pen").value;

    mouseEvent="mousedown";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){

    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_pen;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }

    last_x=currentx;
    last_y=currenty;

}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e){
    mouseEvent="mouseleave";

}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}