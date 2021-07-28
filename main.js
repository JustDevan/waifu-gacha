const getImageCard = document.querySelector('.card');
const getGenerateButton = document.querySelector('.generate');

getGenerateButton.addEventListener('click', function() {
    getImageCard.innerHTML = ''
    fetch('https://api.waifu.pics/sfw/waifu')
        .then(response => response.json())
        .then(response => {
            getImageCard.innerHTML = `<a href="${response.url}" download="waifu">
                <img class="waifu-pic" src=${response.url}>
            </a>`
        })
})