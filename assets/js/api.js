fetch(`https://restcountries.com/v3.1/all`).then( data => data.json() ).then( countries => countryData(countries) )

function countryData (data) {
    const img        = document.querySelector('#img');
    const name       = document.querySelector('#name');
    const population = document.querySelector('#population');
    const region     = document.querySelector('#region');
    const capital    = document.querySelector('#capital');

    console.log(data[0]);

    img.src = data[0].flags.png
    name.textContent = data [0].translations.por.official
    population.textContent = data[0].population
    region.textContent = data[0].continents
    capital.textContent = data[0].capital
}

function CreateDiv () {
    const container = document.querySelector('#container__countries');
    const button    = document.createElement('button');
    const imgCreate = document.createElement('img');
    const divCreate = document.createElement('div');
    const h1Create  = document.createElement('h1');
    const listElements = [document.createElement('h2'), document.createElement('h3'), document.createElement('h4')];

    container.appendChild(button);
    button.appendChild(imgCreate, divCreate);
    divCreate.appendChild(h1Create, listElements[0], listElements[1], listElements[2]);
}
