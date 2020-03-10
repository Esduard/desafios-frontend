let x;
let y;

let xspeed;
let yspeed;

function setup(){
    createCanvas(800,600);
    x = 400;
    y = 300;

    xspeed = 10;
    yspeed = 10;

}

function draw(){
    background(0);
    rect(x,y,80,60);

    x = x + xspeed;
    y = y + yspeed;
}
