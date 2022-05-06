const typer = document.querySelector('.typer');
const text = document.querySelector('textarea').value;
const result = document.querySelector('.result');
let textArray = [...text.split('')];

function toUpperLower(letter, index){   
    return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();    
}

function handleStyle(e){
    switch(e.target.value){
        case 'uppercase': textArray = textArray.map(x=>x.toUpperCase());
        result.textContent=textArray.join('');
        break;
        case 'italic': result.classList.add('italic');
        result.textContent = text;
        break;
        default: textArray = textArray.map(toUpperLower);
        result.textContent=textArray.join('');
        break;
    }
    
}

typer.addEventListener('input', handleStyle);
