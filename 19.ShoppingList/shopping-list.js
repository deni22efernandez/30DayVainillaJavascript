const form = document.querySelector('.shopping');
const input = document.querySelector('#item');
const uls = document.querySelector('.list');
let items = [];
function handleSubmit(e){
    e.preventDefault(); 
    if(!e.currentTarget.item.value)
    return;   
    let currentItem = {
        name : e.currentTarget.item.value,
        id : Date.now(),
        completed : false,
    }
    items.push(currentItem);   
    uls.dispatchEvent(new CustomEvent('itemsUpdated'));
    e.target.reset();    
}

function displayItems(){
    let html = items.map(x=>`<li class='shopping-item'>
    <input type="checkbox" value="${x.id}" ${x.completed ?'checked':''}>
    <span>${x.name}${x.id}</span>
    <button aria-label='remove ${x.name}' value="${x.id}">&times;</button>
    </li>`).join('');
    uls.innerHTML = html;
}

function mirrorToLocalStorage(){
   localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage(){
    console.log('restoring from localStorage');
    let localItems = JSON.parse(localStorage.getItem('items'));
    if(localItems){
        items=localItems;
        uls.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}
function deleteButton(id){
    items = items.filter(x=>x.id!=id);
    uls.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsCompleted(id){
    let comp = items.find(x=>x.id===id);
    comp.completed=!comp.completed;
    uls.dispatchEvent(new CustomEvent('itemsUpdated'));
}

form.addEventListener('submit', handleSubmit);
uls.addEventListener('itemsUpdated', displayItems);
uls.addEventListener('itemsUpdated', mirrorToLocalStorage);
uls.addEventListener('click', (e)=>{
    if(e.target.matches('button'))
    deleteButton(parseInt(e.target.value));

    if(e.target.matches('input[type="checkbox"]')){
        markAsCompleted(parseInt(e.target.value));
    }
});
restoreFromLocalStorage();