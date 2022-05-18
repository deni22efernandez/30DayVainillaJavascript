function Gallery(gallery){
    let currentImage;
    const modal = document.querySelector('.modal');
    const nextButton = modal.querySelector('.next');
    const prevButton = modal.querySelector('.prev');
    
    function showImage(e){
        modal.querySelector('img').src = e.src;
        modal.querySelector('h2').textContent = e.title;
        modal.querySelector('p').textContent = e.dataset.description;
        currentImage = e;
        openModal();
    }
    function openModal(){
        if(modal.matches('.open')) return;
        modal.classList.add('open');
        window.addEventListener('keyup', handleEscapeKey);
        prevButton.addEventListener('click', handlePrevButton);
        nextButton.addEventListener('click', handleNextButton);
    }
    function closeModal(){
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleEscapeKey);
        prevButton.removeEventListener('click', handlePrevButton);
        nextButton.removeEventListener('click', handleNextButton);
    }
    function handleClicksOutside(e){
        if(e.target === e.currentTarget) 
        closeModal();
    }
    function handleEscapeKey(e){
        if(e.key === 'Escape') closeModal();
    }
    function handleNextButton(){
        return showImage(currentImage.nextElementSibling);
    }
    function handlePrevButton(){
        return showImage(currentImage.previousElementSibling);
    }
    let images = gallery.querySelectorAll('img');
    images.forEach(element => {
        element.addEventListener('click', (e)=>showImage(e.target));
    });
    modal.addEventListener('click', handleClicksOutside);
}
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));