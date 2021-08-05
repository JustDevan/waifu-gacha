const getContainer = document.querySelector('.container');
const getGenerateButton = document.querySelector('.generate');
const getMainImage = document.querySelector('.main-image')

const requestUrl = (url, success) => {
  fetch(url).then(res => res.json()).then(res => success(res))
}

getContainer.addEventListener('click', el => {
  if(el.target.dataset.type === 'generate'){
    requestUrl('https://api.waifu.pics/sfw/waifu', res => {
      getMainImage.innerHTML = `<a href="${res.url}" target="_blank"><img class="waifu-pic" src="${res.url}"></a>`
    })
  }
})