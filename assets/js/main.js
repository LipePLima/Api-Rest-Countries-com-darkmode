// const dark = document.querySelector('#dkMode');
// const link = document.querySelector('#linkDarkMode');

// if (link.href = '') {
//     dark.addEventListener('click', () => {
//         link.href = 'assets/css/darkmode.css'
        
//         const icon = document.querySelector('#icon-dark');
//         icon.textContent = 'light_mode';
//     })
// }

const filter = document.querySelector('#filter');

filter.addEventListener('click', () => {
    const arrow = document.querySelector('#arrow');
    arrow.classList.toggle('active');

    const list = document.querySelector('#list');
    list.classList.toggle('list-active')
})
