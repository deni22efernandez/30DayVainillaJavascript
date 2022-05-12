
function Gallery(gallery){
    this.gallery = gallery;
    if(!gallery)
    return;
    this.images = [...gallery.querySelectorAll('img')];
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');
    //let currentImg;
    this.showPrevImage = this.showPrevImage.bind(this);
    this.showNextImage = this.showNextImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
    
    //event listeners
    this.images.forEach(elem=>elem.addEventListener('click', e=>this.showImage(e.currentTarget)));
    this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function(){
    if(this.modal.matches('.open')){
        return;
    }
    this.modal.classList.add('open');
    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
};
Gallery.prototype.closeModal = function(){
    this.modal.classList.remove('open');
    window.removeEventListener('keyup', this.handleKeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    
    this.prevButton.removeEventListener('click', this.showPrevImage);
    
};

Gallery.prototype.handleClickOutside = function(e){
    if(e.target===e.currentTarget){

        return this.closeModal();
    }
};

Gallery.prototype.handleKeyUp = function(e){
    if(e.key === 'Escape') return this.closeModal();
};
Gallery.prototype.showNextImage = function(){
    return this.showImage(this.currentImg.nextElementSibling || this.gallery.firstElementChild);
};
Gallery.prototype.showPrevImage = function(){
    return this.showImage(this.currentImg.previousElementSibling || this.gallery.lastElementChild);
};

Gallery.prototype.showImage = function(el){
    if(!el){
        alert('No image to show');
        return;
    }    
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImg = el;        
    this.openModal();
};
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));