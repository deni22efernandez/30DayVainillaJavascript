//Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const unordered_list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent='one';
unordered_list.insertAdjacentElement("afterbegin",li1);

const li2 = document.createElement('li');
li2.textContent ='two';
li1.insertAdjacentElement("afterend", li2);

const li3 = document.createElement('li');
li3.textContent='three';
li2.insertAdjacentElement('afterend', li3);

// put that list into the above wrapper
div.appendChild(unordered_list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src='hawaii.jpg';

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `<div class="myDiv">
                    <p ></p>
                    <p ></p>
                    </div>`;
unordered_list.insertAdjacentHTML('beforebegin', htmlString);

// add a class to the second paragraph called warning
document.querySelector('.myDiv').children[1].classList.add('warning');

// remove the first paragraph
document.querySelector('.myDiv').children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height){
    
    const div1 = document.createElement('div');
    div1.classList.add('playerCard');
    const h2 = document.createElement('h2');
    h2.textContent=`${name} - ${age}`;
    div1.insertAdjacentElement('afterbegin', h2);
    const p = document.createElement('p');
    p.textContent = `They are ${height} height and ${age} years old. 
                     In Dog years this person would be ${age * 7}. 
                     That would be a tall dog!`;
    h2.insertAdjacentElement('afterend', p);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('danger');
    deleteButton.textContent ='DELETE';
    p.insertAdjacentElement('afterend', deleteButton);

    return div1;
}
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('firstCard', 10, 10);
const card2 = generatePlayerCard('SecondCard', 11, 11);
const card3 = generatePlayerCard('ThirdCard', 12, 12);
const card4 = generatePlayerCard('fourthCard', 13, 13);

// append those cards to the div
newDiv.appendChild(card1);
newDiv.appendChild(card2);
newDiv.appendChild(card3);
newDiv.appendChild(card4);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('button');
buttons.forEach(elem=>elem.addEventListener('click', hide));

function hide(){
   console.log(this);
   this.parentElement.style.display='none';
}
