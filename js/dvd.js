let dvd = document.getElementById('dvd_logo'); // referencia ao SVG todo
let background = document.getElementById('body'); // referencia ao fundo

let x = dvd.style.top; //posicao inical da logo no eixo x
let y = dvd.style.left;  //posicao inicial da logo no eixo y

let xspeed = 10; //velocidade horizontal
let yspeed = 10; //velocidade vertical


const colors = "cores.json"

//funcao request color

console.log('ola');

function requestColor(){

    return fetch(colors);
    

}

const width = dvd.clientWidth;
const height = dvd.clientHeight;

function move(){

    const background_width = background.clientWidth;
    const background_height = background.clientHeight;

    x += xspeed;
    y += yspeed;

    //associando a nova posicao ao objeto real em html
    dvd.style.top = pos + 'px';
    dvd.style.left = pos + 'px';

    if(x + width == background_width && x == 0)
    {
        //request color
        xspeed = -xspeed;
    }

    if(y + height == background_height && y == 0)
    {
        //request color
        yspeed = -yspeed;
    }

    window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);
