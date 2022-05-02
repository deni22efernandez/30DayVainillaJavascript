// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
// set up our canvas for drawing
const ctxt = canvas.getContext('2d');
ctxt.heigh = 500;
ctxt.width = 800;
ctxt.lineJoin = 'round';
ctxt.lineCap = 'square';
ctxt.lineWidth = 10;
const {width, height} = canvas;
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);

// write a draw function
function draw(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        console.log(e);
        switch(e.key){
            case 'ArrowUp': y -= 10;
            break;
            case 'ArrowDown' : y += 10;
            break;
            case 'ArrowRight' : x += 10;
            break;
            case 'ArrowLeft' : x -=10;
            break;
            default:
            break;
        }
        ctxt.beginPath();
        ctxt.strokeStyle =`hsl(${x}, 100%, 50%)`;
        ctxt.moveTo(x, y);
        ctxt.lineTo(x, y);
        ctxt.stroke();
    }

}
// write a handler for the keys
window.addEventListener('keydown', draw);
// clear or shake function
function clearCanvas(){
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', removeShakeClass, {once:true});//unbind eventListener after shaking
    ctxt.clearRect(0,0,width,height);
}

function removeShakeClass(){
    this.classList.remove('shake');
}
shakeButton.addEventListener('click', clearCanvas);
// listen for arrow keys