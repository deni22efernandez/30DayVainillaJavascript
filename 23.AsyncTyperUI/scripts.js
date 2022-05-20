function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRndmNumber(min=0, max=150, randomNumber=Math.random()){
    return Math.floor(randomNumber*(max-min)+min);
}
// async function draw(e){
//     let text = e.textContent;
//     let soFar='';
//     const {min,max}=e.dataset;
//     const w = getRndmNumber(min,max);

//     for (const letter of text) {        
//         soFar+=letter;
//         e.textContent=soFar;
//         await wait(w);
//     }
// }
async function draw(e){
    let text = e.textContent;
    let index = 1;
    const {min,max}=e.dataset;
    
    async function drawLetter(){
        e.textContent=text.slice(0,index);
        if(index<=text.length){
            index+=1;
            const w = getRndmNumber(min,max);
            await wait(w);
            drawLetter();
        }
    }
    drawLetter();
}

let elem = document.querySelectorAll('[data-type]');
elem.forEach(e=>draw(e));
