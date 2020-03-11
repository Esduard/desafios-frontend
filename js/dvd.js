let dvd = document.getElementById('dvd_logo'); // referencia ao SVG todo
let background = document.getElementById('container'); // referencia ao fundo

let x = 0; //posicao inical da logo no eixo x
let y = 0;  //posicao inicial da logo no eixo y

let xspeed = 5; //velocidade horizontal
let yspeed = 5; //velocidade vertical


const colors = "cores.json"

//funcao request color
function requestColor(){

    return fetch(colors);
    

}

//captura das medidas da logo
const width = dvd.clientWidth;
const height = dvd.clientHeight;




function move(){

    //captura das medidas do fundo. captura deve acontecer em tempo real para ajustar
    let background_width = background.clientWidth;
    let background_height = background.clientHeight;

    x += xspeed;
    y += yspeed;


    //colisao horizontal
    if(x + width >= background_width || x <= 0)
    {
        //request color
        xspeed = -xspeed;
    }

    //colisao vertical
    if(y + height >= background_height || y <= 0)
    {
        //request color
        yspeed = -yspeed;
    }

     //associando a nova posicao ao objeto real em html
     dvd.style.left = x + 'px';
     dvd.style.top = y + 'px';
}

//animacao com taxa de 60fps
setInterval(move,1000/60);
  
