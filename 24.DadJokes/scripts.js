const button = document.querySelector('.getJoke');
const txt = document.querySelector('.joke');
const buttons = [
    'please stop',
    'seriously',
    'is not funny',
    'Im out of here',
    'please shut up'
];
async function handleJokes(){
    return await fetch("https://icanhazdadjoke.com",{
        headers:{Accept:'application/json'}
    }).then(response=>response.json());
}
function selectButtonText(array, not){  
    console.log(not) 
    const text = array[Math.floor(Math.random() * array.length)];
    if(text == not){
        return selectButtonText(array, not);
    }
    return text;
}
async function getJoke(){
    const {joke} = await handleJokes();
    txt.innerHTML = joke;
    button.textContent = selectButtonText(buttons, button.textContent);

}
button.addEventListener('click', getJoke);