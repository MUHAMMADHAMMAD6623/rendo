const hamico = document.querySelector('.menu');
const rightsec = document.querySelector('.right');
const universe = document.querySelector('body')

hamico.addEventListener('click', () => {
    hamico.classList.toggle('hamclicked');
    universe.classList.toggle('not-needed')
    if (rightsec.style.height === '0px' || rightsec.style.height === '') {
        rightsec.style.height = '100vh';
    } else {
        rightsec.style.height = '0px';
    }
});
