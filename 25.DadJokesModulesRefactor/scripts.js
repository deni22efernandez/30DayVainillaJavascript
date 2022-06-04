import {button} from './libs/elements.js';
import {getJoke} from './libs/handler.js';

button.addEventListener('click', getJoke);