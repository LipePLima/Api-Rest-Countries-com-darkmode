function selectBtn (btn, data) {
    btn.forEach( element => element.addEventListener('click', () => {
        window.location.href = 'assets/pages/moreDetail.html'
        moreDetail(btn, data)
    }));
}
