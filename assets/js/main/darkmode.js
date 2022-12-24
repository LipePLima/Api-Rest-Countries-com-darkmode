// Dark Mode
function darkMode() {
    const mydarkmode  = JSON.parse(localStorage.getItem('darkmode'));
    const dataStorage = mydarkmode.target;
    const icon        = document.querySelector('#icon-dark');
    const label       = document.querySelector('#label');
    const dark        = document.querySelector('#btn');
    const div         = document.querySelectorAll('.country-div')
    const data        = document.querySelectorAll('.data');
    const list        = [
        document.querySelector('header'), 
        document.querySelector('.title'), 
        document.querySelector('.dkMode'), 
        document.querySelector('main'), 
        document.querySelector('.search'), 
        document.querySelector('.content__search'), 
        document.querySelector('.search-filter'), 
        document.querySelector('.region-list')
    ]

    if (dataStorage == 'check') {
        icon.textContent  = 'dark_mode'
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
    
    dark.addEventListener('change', e => {
        if (e.target.checked) {
            icon.textContent  = 'dark_mode'
            label.textContent = 'Dark Mode';
            var target        = 'check'
        } else {
            icon.textContent  = 'light_mode';
            label.textContent = 'Light Mode';
            target            = 'noCheck'
        }

        list.forEach( element => element.classList.toggle('dark'));
        div.forEach( e => e.classList.toggle('dark'));
        data.forEach( e => e.classList.toggle('dark'));

        const objLocal = {
            target: target
        }

        localStorage.setItem('darkmode', JSON.stringify(objLocal))
    })
}
