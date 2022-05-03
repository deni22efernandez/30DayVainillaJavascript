function handleCardButtonClick(e) {
    const card = e.currentTarget.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const title = card.querySelector('h2').textContent;

    innerModal.innerHTML = `<img width="600" height="600" src="${imgSrc.replace('200', '600')}" >
                            <p>${title}</p>`;
    outerModal.classList.add('open');
    console.log();
}

function closeModal(e) {
    outerModal.classList.remove('open');
}


const buttons = document.querySelectorAll('button');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

buttons.forEach(x => x.addEventListener('click', handleCardButtonClick));

outerModal.addEventListener('click', (e) => {
    const isOutside = !e.target.closest('.modal-inner');
    console.log(isOutside);
    if (isOutside) { closeModal(); }
});

window.addEventListener('keydown', e => {
    console.log(e);
    if (e.key === 'Escape') {
        closeModal();
    }
})