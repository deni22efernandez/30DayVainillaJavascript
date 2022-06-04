import selectButtonText from "./selectButtonTextModule.js";
import { handleJokes as gimmeJoke } from "./handleJokesModule.js";

const button = document.querySelector('.getJoke');
const txt = document.querySelector('.joke');
const buttons = [
    'please stop',
    'seriously',
    'is not funny',
    'Im out of here',
    'please shut up'
];
async function getJoke(){
    const {joke} = await gimmeJoke();
    txt.innerHTML = joke;
    button.textContent = selectButtonText(buttons, button.textContent);

}
button.addEventListener('click', getJoke);