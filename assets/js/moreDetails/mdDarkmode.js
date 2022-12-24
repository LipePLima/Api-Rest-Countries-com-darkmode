// Dark Mode
function mdDarkMode() {
    const mydarkmode  = JSON.parse(localStorage.getItem('darkmode'));
    const dataStorage = mydarkmode.target;
    const mdIcon      = document.querySelector('#mdIcon-dark');
    const mdLabel     = document.querySelector('#mdLabel');
    const mddark      = document.querySelector('#btn-dkMode__moreDetails');
    const mdlist      = [
        document.querySelector('header'), 
        document.querySelector('.title'), 
        document.querySelector('.dkMode'), 
        document.querySelector('.main__moreDetails'),
        document.querySelector('.btnBack'),
        document.querySelector('.info'),
        document.querySelector('.div__border-countries'),
        document.querySelector('.border-Countries'),
        document.querySelector('hr')
    ]

    if (dataStorage == 'check') {
        mdIcon.textContent  = 'dark_mode';
        mdLabel.textContent = 'Dark Mode';
        mdlist.forEach( element => element.classList.add('dark'));
    } else {
        mdIcon.textContent  = 'light_mode';
        mdLabel.textContent = 'Light Mode';
        mdlist.forEach( element => element.classList.remove('dark'));
    }

    mddark.addEventListener('change', e => {
        if (e.target.checked) {
            mdIcon.textContent  = 'dark_mode'
            mdLabel.textContent = 'Dark Mode';
            var target          = 'check'                
        } else {
            mdIcon.textContent  = 'light_mode';
            mdLabel.textContent = 'Light Mode';
            target              = 'noCheck'            
        }

        mdlist.forEach( element => element.classList.toggle('dark'));

        const objLocal = {
            'target': target
        }

        localStorage.setItem('darkmode', JSON.stringify(objLocal))
    })
}

mdDarkMode()
