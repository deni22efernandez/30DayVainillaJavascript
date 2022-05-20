async function destroyPopup(popUp){
    popUp.classList.remove('open');
    await wait(1000);
    popUp=null;
}
function ask(options){
    return new Promise(async function(resolve){
        const popUp = document.createElement('form');
        popUp.classList.add('popup');
        popUp.insertAdjacentHTML('afterbegin', `
                                     <fieldset>
                                     <label>${options.title}</label>
                                     <input type='text' name='input'></input>
                                     <button type='submit'>Submit</button>
                                     </fieldset>`);
     
        if(options.cancel){
            const skipButton = document.createElement('button');
            skipButton.type='button';
            skipButton.textContent='Cancel';
            popUp.firstElementChild.appendChild(skipButton);
            //add event listener to button
            skipButton.addEventListener('click', ()=>{
                resolve(null);
                destroyPopup(popUp);}, {once:true});
                
        }
        document.body.appendChild(popUp);
        await wait(50).then(()=>popUp.classList.add('open'));
        popUp.addEventListener('submit', function(e){
            e.preventDefault();
            resolve(e.target.input.value);
            destroyPopup(popUp);
        },{once:true})
    
    });
    
}

async function wait(ms=0){
    return await new Promise(resolve=>{
        setTimeout(resolve,ms);
    });
}
async function askQuestion(e){
    const button = e.target;
    const shouldCancel = 'cancel' in button.dataset;
    await ask({title:button.dataset.question, cancel:shouldCancel,}).then(result=>console.log(result));
  
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(elem=>elem.addEventListener('click', askQuestion));
