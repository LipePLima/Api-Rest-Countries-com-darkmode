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
