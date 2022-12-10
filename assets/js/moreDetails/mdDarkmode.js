// Dark Mode
function mdDarkMode() {
    const mddark = document.querySelector('#btn-dkMode__moreDetails');
    const mdlist = [
        document.querySelector('header'), 
        document.querySelector('.title'), 
        document.querySelector('.dkMode'), 
        document.querySelector('.main__moreDetails'),
        document.querySelector('.btnBack'),
        document.querySelector('.info'),
        document.querySelector('.border-Countries'),
        document.querySelector('hr')
    ]
    mddark.addEventListener('change', e => {
        const mdIcon  = document.querySelector('#mdIcon-dark');
        const mdLabel = document.querySelector('#mdLabel');
        if (e.target.checked) {
            mdIcon.textContent = 'dark_mode'
            mdLabel.textContent = 'Dark Mode';
        } else {
            mdIcon.textContent = 'light_mode';
            mdLabel.textContent = 'Light Mode';
        }

        mdlist.forEach( element => element.classList.toggle('dark'));  
    })
}

mdDarkMode()
