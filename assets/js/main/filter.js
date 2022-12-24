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
    const div = document.querySelectorAll('.informations');

    div.forEach( element => { 
        if (!element.childNodes[2].textContent.includes(e.textContent)) {
            element.parentNode.classList.add('desactive')
        } else {
            element.parentNode.classList.remove('desactive')
        } if (e.textContent == 'Todos') {
            element.parentNode.classList.remove('desactive')
        }
    })
}))

// Filtro Input
const input = document.querySelector('#search')
input.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    console.log(inputValue)

    const divBtn = document.querySelectorAll('.informations');

    divBtn.forEach( element => { 
        if (!element.childNodes[0].textContent.toLowerCase().includes(inputValue)) {
            element.parentNode.classList.add('desactive')
        } else {
            element.parentNode.classList.remove('desactive')
        }
    })
})

