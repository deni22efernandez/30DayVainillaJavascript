function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRndmNumber(min=0, max=150, randomNumber=Math.random()){
    return Math.floor(randomNumber*(max-min)+min);
}
async function draw(e){
    let text = e.textContent;
    let soFar='';
    const {min,max}=e.dataset;
    const w = getRndmNumber(min,max);

    for (const letter of text) {
        
        soFar+=letter;
        e.textContent=soFar;
        await wait(w);
    }
}
let elem = document.querySelectorAll('[data-type]');
elem.forEach(e=>draw(e));
