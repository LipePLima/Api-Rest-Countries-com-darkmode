// Dark Mode
function mdDarkMode() {
    const mdIcon      = document.querySelector('#mdIcon-dark');
    const mdLabel     = document.querySelector('#mdLabel');
    const mddark      = document.querySelector('#btn-dkMode__moreDetails');
    const borderC     = document.querySelectorAll('.border-Country')
    const mdlist      = [
        document.querySelector('header'), 
        document.querySelector('.title'), 
        document.querySelector('.dkMode'), 
        document.querySelector('.main__moreDetails'),
        document.querySelector('.btnBack'),
        document.querySelector('.info'),
        document.querySelector('.div__border-countries'),
        document.querySelector('hr'),
    ]

    mddark.addEventListener('change', e => {
        if (e.target.checked) {
            var target          = 'check';                
            mdIcon.textContent  = 'dark_mode';
            mdLabel.textContent = 'Dark Mode';
        } else {
            target              = 'noCheck';            
            mdIcon.textContent  = 'light_mode';
            mdLabel.textContent = 'Light Mode';
        }

        const objLocal = {
            'target': target
        }

        mdlist.forEach( element => element.classList.toggle('dark'));
        borderC.forEach( e => e.classList.toggle('dark'))

        localStorage.setItem('darkmode', JSON.stringify(objLocal))
    })

    const mydarkmode  = JSON.parse(localStorage.getItem('darkmode'));
    
    if (mydarkmode.target === 'check') {
        mdIcon.textContent  = 'dark_mode';
        mdLabel.textContent = 'Dark Mode';
        mdlist.forEach( element => element.classList.add('dark'));
        borderC.forEach( e => e.classList.add('dark'))
    } else {
        mdIcon.textContent  = 'light_mode';
        mdLabel.textContent = 'Light Mode';
        mdlist.forEach( element => element.classList.remove('dark'));
        borderC.forEach( e => e.classList.remove('dark'))
    }
}

mdDarkMode()
