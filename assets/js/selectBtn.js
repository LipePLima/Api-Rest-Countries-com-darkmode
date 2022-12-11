function selectBtn (btn) {
    btn.forEach( element => element.addEventListener('click', () => {
        const objDetail = {
            id: element.id,
            img: element.childNodes[0].src,
            name: element.childNodes[1].childNodes[0].textContent,
            population: element.childNodes[1].childNodes[1].childNodes[1].textContent,
            continent: element.childNodes[1].childNodes[2].childNodes[1].textContent,
            capital: element.childNodes[1].childNodes[3].childNodes[1].textContent
        }

        localStorage.setItem("button", JSON.stringify(objDetail))
        window.location.href = 'assets/pages/moreDetail.html'
    }));
}
