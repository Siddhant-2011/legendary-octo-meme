img="";
status="";
function setup(){
canvas=createCanvas(650,420);
canvas.center();

}

function preload(){
img = loadImage('https://st2.depositphotos.com/1854227/6468/i/950/depositphotos_64686511-stock-photo-desk-lots-of-stationery-objects.jpg');

}

function modelLoasd(){
    status=true;
    console.log('cwgjkycqvfbjcfwwfcwqfac fsyacvjybhzdefmg');
    mooose.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
console.log(results);
}