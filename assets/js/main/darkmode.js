// Dark Mode
function darkMode() {
    const icon  = document.querySelector('#icon-dark');
    const label = document.querySelector('#label');
    const dark  = document.querySelector('#btn');
    const div   = document.querySelectorAll('.country-div')
    const data  = document.querySelectorAll('.data');
    const list  = [
        document.querySelector('header'), 
        document.querySelector('.title'), 
        document.querySelector('.dkMode'), 
        document.querySelector('main'), 
        document.querySelector('.search'), 
        document.querySelector('.content__search'), 
        document.querySelector('.search-filter'), 
        document.querySelector('.region-list')
    ]

    dark.addEventListener('change', e => {
        if (e.target.checked) {
            var target        = 'check';
            icon.textContent  = 'dark_mode';
            label.textContent = 'Dark Mode';
        } else {
            target            = 'noCheck';
            icon.textContent  = 'light_mode';
            label.textContent = 'Light Mode';
        }

        const objLocal = {
            'target': target
        }

        list.forEach( element => element.classList.toggle('dark'));
        div.forEach( e => e.classList.toggle('dark'));
        data.forEach( e => e.classList.toggle('dark'));

        localStorage.setItem('darkmode', JSON.stringify(objLocal))
    })

    const mydarkmode  = JSON.parse(localStorage.getItem('darkmode'));
    
    if (mydarkmode.target === 'check') {
        icon.textContent  = 'dark_mode';
        label.textContent = 'Dark Mode';
        list.forEach( element => element.classList.add('dark'));
        div.forEach( e => e.classList.add('dark'));
        data.forEach( e => e.classList.add('dark'));
    } else {
        icon.textContent  = 'light_mode';
        label.textContent = 'Light Mode';
        list.forEach( element => element.classList.remove('dark'));
        div.forEach( e => e.classList.remove('dark'));
        data.forEach( e => e.classList.remove('dark'));
    }
}
