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
const {width, height} = canvas;//destructuring asignment
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);
const MOVE_AMOUNT = 10;

// write a draw function
function draw(e) {
    if (e.type === 'keydown') {
        if (e.key.includes('Arrow')) {
            e.preventDefault();//for prevent scrolling         
            switch (e.key) {
                case 'ArrowUp': y -= MOVE_AMOUNT;
                    break;
                case 'ArrowDown': y += MOVE_AMOUNT;
                    break;
                case 'ArrowRight': x += MOVE_AMOUNT;
                    break;
                case 'ArrowLeft': x -= MOVE_AMOUNT;
                    break;
                default:
                    break;
            }

        }
    }
    if (e.type === 'click') {
        let classs = e.target.className;
        switch (classs) {
            case 'fa-solid fa-arrow-right': x += MOVE_AMOUNT;
                break;
            case 'fa-solid fa-arrow-left': x -= MOVE_AMOUNT;
                break;
            case 'fa-solid fa-arrow-up': y -= MOVE_AMOUNT;
                break;
            case 'fa-solid fa-arrow-down': y += MOVE_AMOUNT;
                break;
            default:
                break;
        }
    }
    ctxt.beginPath();
    ctxt.strokeStyle = `hsl(${x}, 100%, 50%)`;
    ctxt.moveTo(x, y);
    ctxt.lineTo(x, y);
    ctxt.stroke();
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
const arrows = window.document.querySelectorAll('.buttons .key');
arrows.forEach(element => {
    element.addEventListener('click', draw);
});   
