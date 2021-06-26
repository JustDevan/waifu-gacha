const getImageCard = document.querySelector('.card');
const getGenerateButton = document.querySelector('.generate');

function ambilGambar(url, success) {
    let getres = new XMLHttpRequest();

    getres.onreadystatechange = () => {
        if (getres.readyState === 4) {
            if (getres.status === 200) {
                success(getres.response);
            }
        }
    };
    getres.open('get', url);
    getres.send();
}

getGenerateButton.addEventListener('click', function() {
    console.log('ditekan!')
    getImageCard.innerHTML = '';
    ambilGambar('https://api.waifu.pics/sfw/waifu', results => {
        const gambar = JSON.parse(results);
        getImageCard.innerHTML = `<img class="waifu-pic" src=${gambar.url}>`;
    });
});