// Exibição de lista e animação de seta
const filter = document.querySelector('#filter');

filter.addEventListener('click', () => {
    const arrow = document.querySelector('#arrow');
    arrow.classList.toggle('active');

    const list = document.querySelector('#list');
    list.classList.toggle('list-active')
})

// Filtro Lista 
const item = document.querySelectorAll('.region');
item.forEach( e => e.addEventListener('click', () => {
    const btn    = document.querySelectorAll('country-div');
    const region = document.querySelectorAll('#region');
    region.forEach( element => {
        if (element.textContent != e.textContent ) {
            console.log(btn)
        } 
    })
    console.log(e.textContent)
}))

