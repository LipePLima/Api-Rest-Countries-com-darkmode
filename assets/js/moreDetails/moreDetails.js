fetch(`https://restcountries.com/v3.1/all`).then( data => data.json() ).then( countries => moreDetail(countries))

function moreDetail (data) {
    const myBtn       = JSON.parse(localStorage.getItem('button'));
    const imgDetail   = document.querySelector('#imgDetail');
    const nameDetail  = document.querySelector('#moreDetail-title');
    const information = document.querySelectorAll('.information')

    imgDetail.src              = data[myBtn.id].flags.svg;
    nameDetail.textContent     = myBtn.name;
    information[1].textContent = myBtn.population;
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
        console.log(data[myBtn.id].languages[language])
    }

    console.log(myBtn)
    console.log(data[myBtn.id])
}
