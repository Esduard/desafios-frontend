let x = 0; //posicao da logo no eixo x
let y = 0;  //posicao da logo no eixo y

let xspeed = 10; //velocidade horizontal
let yspeed = 10; //velocidade vertical

let dvd = document.getElementById('dvd_logo'); // referencia ao SVG todo
let background = document.getElementById('body'); // referencia ao fundo

const colors = "cores.json"

//funcao request color

const width = dvd.clientWidth;
const height = dvd.clientHeight;

function move{

    const background_width = background.clientWidth;
    const background_height = background.clientHeight;

    x += xspeed;
    y += yspeed;

    console.log(x)
    console.log(y)

    //COMO ASSOCIAR A NOVA POSICAO AO OBJETO REAL EM HTML?

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

    move();
}
