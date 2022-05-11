
function Gallery(gallery){
    if(!gallery)
    return;
    const images = [...gallery.querySelectorAll('img')];
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImg;
    
    function showImage(el){
        if(!el){
            alert('No image to show');
            return;
        }    
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImg = el;        
        openModal();
    }

    function openModal(){
        if(modal.matches('.open')){
            return;
        }
        modal.classList.add('open');
        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }
    function closeModal(){
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e){
        if(e.target===e.currentTarget)
        closeModal();
    }

    function handleKeyUp(e){
        if(e.key === 'Escape') closeModal();
    }
    function showNextImage(){
       showImage(currentImg.nextElementSibling || gallery.firstElementChild);
    }
    function showPrevImage(){
        showImage(currentImg.previousElementSiblig || gallery.lastElementChild);
    }
    //event listeners
    images.forEach(elem=>elem.addEventListener('click', e=>showImage(e.currentTarget)));
    modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));