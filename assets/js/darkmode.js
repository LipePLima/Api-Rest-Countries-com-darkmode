// Dark Mode
const dark = document.querySelector('#btn');
const div  = document.querySelectorAll('.country-div')
const data = document.querySelectorAll('.data');


const list = [
    document.querySelector('header'), 
    document.querySelector('.title'), 
    document.querySelector('.dkMode'), 
    document.querySelector('main'), 
    document.querySelector('.search'), 
    document.querySelector('.content__search'), 
    document.querySelector('.search-filter'), 
    document.querySelector('.region-list'),
]

dark.addEventListener('change', e => {
    const icon  = document.querySelector('#icon-dark');
    const label = document.querySelector('#label')
    if (e.target.checked) {
        icon.textContent = 'dark_mode'
        label.textContent = 'Dark Mode';
    } else {
        icon.textContent = 'light_mode';
        label.textContent = 'Light Mode';
    }

    list.forEach( element => element.classList.toggle('dark'));
    div.forEach( e => e.classList.toggle('dark'));
    data.forEach( e => e.classList.toggle('dark'));
})



// Filtro de busca
const filter = document.querySelector('#filter');

filter.addEventListener('click', () => {
    const arrow = document.querySelector('#arrow');
    arrow.classList.toggle('active');

    const list = document.querySelector('#list');
    list.classList.toggle('list-active')
})
