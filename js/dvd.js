const colors = "../api/cores.json"

//funcao request color
function requestColor(){

    fetch(colors)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    });
    

}

let dvd = document.getElementById('dvd_logo'); // referencia ao SVG todo
let background = document.getElementById('container'); // referencia ao fundo

let background_width = background.clientWidth; //largura do fundo
let background_height = background.clientHeight; //altura do fundo

//captura das medidas da logo
const width = dvd.clientWidth;
const height = dvd.clientHeight;


//inicio aleatorio das coordenadas x e y:

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; //funcao para obter valor aleatório plausível a posicao inicial da logo
  }



let x = getRndInteger(0,background_width - width); //posicao inical da logo no eixo x
let y = getRndInteger(0,background_height - height);  //posicao inicial da logo no eixo y

//associando a nova posicao ao objeto real em html
dvd.style.left = x + 'px';
dvd.style.top = y + 'px';

let xspeed = 3; //velocidade horizontal inicial
let yspeed = 3; //velocidade vertical inicial


function move(){

    //captura das medidas do fundo. captura deve acontecer em tempo real para ajustar
    background_width = background.clientWidth;
    background_height = background.clientHeight;

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
  
