fetch(`https://restcountries.com/v3.1/all`).then( data => data.json() ).then( countries => countryData(countries) )

function countryData (data) {
    for (let i = 0; i < data.length; i++) {
        const container = document.querySelector('#container__countries');
        container.innerHTML += '<button class="country-div"><img src="" class="country-img" id="img"><div class="informations"><h1 class="country-data country-name" id="name">País</h1><h2 class="country-data"><b>População:</b><p class="data" id="population"></p></h2><h3 class="country-data"><b>Continente:</b><p class="data" id="region"></p></h3><h4 class="country-data last"><b>Capital:</b><p class="data" id="capital"></p></h4></div></button>'
    }

    const img        = document.querySelectorAll('#img');
    const name       = document.querySelectorAll('#name');
    const population = document.querySelectorAll('#population');
    const region     = document.querySelectorAll('#region');
    const capital    = document.querySelectorAll('#capital');

    console.log(data);

    for (let i = 0; i < data.length; i++) {
        img[i].src = data[i].flags.png;
        name[i].textContent = data[i].translations.por.official;
        population[i].textContent = data[i].population;
        region[i].textContent = data[i].continents;
        capital[i].textContent = data[i].capital;
    }
}

    


