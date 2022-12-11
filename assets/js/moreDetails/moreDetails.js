fetch(`https://restcountries.com/v3.1/all`).then( data => data.json() ).then( countries => moreDetail(countries))

function moreDetail (data) {
    const myBtn         = JSON.parse(localStorage.getItem('button'));
    const titleDetail   = document.querySelector('title');
    const imgDetail     = document.querySelector('#imgDetail');
    const nameDetail    = document.querySelector('#moreDetail-title');
    const information   = document.querySelectorAll('.information');
    const borderCountry = document.querySelector('.border-Countries');

    titleDetail.textContent    = `Paises do Mundo | ${data[myBtn.id].translations.por.common}`
    imgDetail.src              = data[myBtn.id].flags.svg;
    nameDetail.textContent     = myBtn.name;
    information[1].textContent = (parseInt(myBtn.population)).toLocaleString('pt-BR');
    information[2].textContent = myBtn.continent;
    information[3].textContent = data[myBtn.id].subregion;
    information[4].textContent = myBtn.capital;

    for (const name in data[myBtn.id].name.nativeName) {
        information[0].textContent = data[myBtn.id].name.nativeName[name].official
    }

    for (const currency in data[myBtn.id].currencies) {
        information[5].textContent = data[myBtn.id].currencies[currency].name
    }

    for (const language in data[myBtn.id].languages) {
        information[6].textContent = data[myBtn.id].languages[language]
    }

    if (data[myBtn.id].borders == undefined) {
        borderCountry.innerHTML += `<div class="border-Country"><p id="border-Country__name"></p></div>`
        const borderCountryName = document.querySelector('#border-Country__name')
        borderCountryName.textContent = "Não faz fronteira com outro país"
    } else {
        for (let i = 0; i < data[myBtn.id].borders.length; i++) {
            borderCountry.innerHTML += `<div class="border-Country"><p id="border-Country__name"></p></div>`

            const element = data[myBtn.id].borders[i]

            data.forEach( e => {
                if (e.cca3 == element) {
                    const borderCountryName = document.querySelectorAll('#border-Country__name')
                    borderCountryName[i].textContent = e.translations.por.common
                }
            })
        }   
    }

    const count = [document.querySelectorAll('.border-Country'), document.querySelector('.border-countries__details')]
    if (count[0].length > 4) {
        count[0].forEach( e => {
            e.style.margin = "0 1rem 1rem 0"
            count[1].style.width = '9rem'
        })
    }
}
