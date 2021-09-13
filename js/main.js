const mainImage = document.getElementById('main-image')
const generateButton = document.getElementById('gacha')
const cards = document.getElementById('cards')

const url = 'https://api.waifu.pics/sfw/waifu'
const urlNSFW = 'https://api.waifu.pics/nsfw/waifu'

const getImage = (url, success) => {
  fetch(url).then(res => res.json()).then(res => success(res))
}

getImage(url, res => {
  mainImage.setAttribute('src', res.url)
})

cards.addEventListener('click', el => {
  if(el.target.id == 'gacha') {
    getImage(url, res => {
      mainImage.setAttribute('src', res.url)
    })
  }else if(el.target.id == 'nsfw') {
    getImage(urlNSFW, res => {
      mainImage.setAttribute('src', res.url)
    })
  }
})