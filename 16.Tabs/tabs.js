const tabDiv = document.querySelector('.tabs');
const tabButtons = tabDiv.querySelectorAll('[role="tab"]');
const tabPanels = tabDiv.querySelectorAll('[role="tabpanel"]');

function onClick(e){
    //hide all panels
    tabPanels.forEach(panel => panel.hidden = true);
    //set aria-selected false
    tabButtons.forEach(button => button.setAttribute('aria-selected', false));
    //select current panel
    e.currentTarget.setAttribute('aria-selected', true);
    let {id} = e.currentTarget;
    let panels = [...tabPanels];
    //hide panels not related
    let p = panels.find(x => x.getAttribute('aria-labelledby') === id);
    p.hidden = false;

}

tabButtons.forEach(elem => elem.addEventListener('click', onClick));