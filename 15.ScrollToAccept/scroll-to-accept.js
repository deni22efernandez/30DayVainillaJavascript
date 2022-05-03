const text = document.querySelector('.terms-and-conditions');
const watchElement = document.querySelector('.watch');
const acceptButton = document.querySelector('.accept');

function obsCallback(payload) {
    console.log(payload[0].isIntersecting);
    if (payload[0].isIntersecting) {
        acceptButton.disabled = false;
    }
    else {
        acceptButton.disabled = true;
    }
}

text.addEventListener('scroll', scrollFunc);
const observer = new IntersectionObserver(obsCallback);
observer.observe(text.lastElementChild);