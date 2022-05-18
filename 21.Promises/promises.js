function makePizza(toppings){
    const timeOfBake = 500 + (toppings.length*200);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
                    resolve(`Heres the pizza promise with ${toppings.join(' ')} toppings`), 
                    timeOfBake); 
        if(toppings.includes('pineapple')){
            reject('Pineapple on a pizza?, really?');
        }                
    });

    
}
makePizza(['cheese', 'peperoni','olives'])
.then(pizza=>{
    console.log(pizza);
    return makePizza(['olives','onion','egg']);
})
.then(pizza=>{
    console.log(pizza);
    return makePizza(['cheese']);
}).then(pizza=>console.log(pizza))
.catch(error=>console.log(error));

const first = makePizza(['cheese', 'peperonni', 'olives']);
const second = makePizza(['pineapple']);
const last = makePizza(['onion', 'olives']);
const allPizzas = Promise.all([first,second,last]).then(pizzas=>console.log(pizzas)).catch(error=>console.log(error));
const fastestPizza = Promise.race([first,second,last]).then(pizza=>console.log(pizza)).catch(error=>console.log(error));
//will tell you when all the promises are done, regardless of whether they were rejected or resolved.
const allgoodAndBadPizzas = Promise.allSettled([first,second,last]).then(pizzas=>console.log(pizzas));


// function go(e) {
//     const el = e.currentTarget;
//     // 1. Change the text to GO when clicked.
//     el.textContent = 'GO';
//     setTimeout(function () {
//       // 2. Make it a circle after 2 seconds
//       el.classList.add('circle');
//       setTimeout(function () {
//         // 3. Make it red after 0.5s
//         el.classList.add('red');
//         setTimeout(function () {
//           // 4. make it square after 0.25s
//           el.classList.remove('circle');
//           setTimeout(function () {
//             // 5. make it purple
//             el.classList.remove('red');
//             el.classList.add('purple');
//             setTimeout(function () {
//               // 6. fade out after 0.5s
//               el.classList.add('invisible');
//               setTimeout(function () {
//                 console.log('You have reacted the 7th layer of callback hell');
//                 el.classList.remove('invisible', 'purple');
//               }, 500);
//             }, 500);
//           }, 500);
//         }, 500)
//       }, 500)
//     }, 500)
//   }

const button = document.querySelector('.go');

function Wait(miliseconds=0){
    return new Promise(resolve=>{
        setTimeout(resolve, miliseconds);
    });
}


function animate(e){
    const but = e.currentTarget;
    but.textContent = 'GO';
    Wait(500).then(()=>{
        but.classList.add('circle');
        return Wait(500);
    }).then(()=>{
        but.classList.add('red');
        return Wait(500);
    }).then(()=>{
        but.classList.remove('circle');
        return Wait(500);
    }).then(()=>{
        but.classList.remove('red');
        but.classList.add('purple');
        return Wait(500);
    }).then(()=>{
        but.classList.add('fadeOut');
        //return Wait(500);
    });
}
button.addEventListener('click', animate);