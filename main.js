var carx = 20;
var cary = 100;
var car2x = 20;
var car2y = 250;
var width = 100;
var height = 120;
var carimage = "ferrari.png";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasimage = "track.jpg";

function add(){
    backgroundimg = new Image();
    backgroundimg.src = canvasimage;
    backgroundimg.onload = uploadcanvas;

    carimg = new Image();
    carimg.src = carimage;
    carimg.onload = uploadcar;

    car2img = new Image();
    car2img.src = carimage;
    car2img.onload = uploadcar2;

}

function uploadcanvas(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(carimg,carx,cary,width,height);
}
function uploadcar2(){
    ctx.drawImage(carimg,car2x,car2y,width,height);
}

addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
    }
    if(keypressed == '40'){
        console.log("down");
    }
    if(keypressed == '39'){
        console.log("right");
    }
    if(keypressed == '37'){
        console.log("left");
    }
    if(keypressed == '87'){
        console.log("w");
    }
    if(keypressed == '83'){
        console.log("s");
    }
    if(keypressed == '68'){
        console.log("d");
    }
    if(keypressed == '65'){
        console.log("a");
    }
}