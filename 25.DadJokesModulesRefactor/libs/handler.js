import { buttons } from "../data/buttonText.js";
import selectButtonText from "./utils.js";
import { handleJokes as gimmeJoke } from "../Index.js";
import {txt, button} from './elements.js';

export async function getJoke(){
    const {joke} = await gimmeJoke();
    txt.innerHTML = joke;
    button.textContent = selectButtonText(buttons, button.textContent);

}