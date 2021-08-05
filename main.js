const getContainer = document.querySelector('.container');
const getGenerateButton = document.querySelector('.generate');
const getMainImage = document.querySelector('.main-image')

const requestUrl = (url, success) => {
  fetch(url).then(res => res.json()).then(res => success(res))
}

getContainer.addEventListener('click', el => {
  if(el.target.dataset.type === 'generate'){
    requestUrl('https://api.waifu.pics/sfw/waifu', res => {
      getMainImage.innerHTML = ''
      getMainImage.innerHTML += `<a href="${res.url}" target="_blank"><img class="waifu-pic" src="${res.url}"></a>`
    })
  }
})

/*
fetch('https://api.waifu.pics/sfw/waifu')
     .then(response => response.json())
     .then(response => {
       getContainer.addEventListener('click', function(el){
         if(el.target.dataset.type === 'generate'){
           
         }
         getContainer.innerHTML = `<div class ="card">
                       <a href="${response.url}" target="_blank" download="waifu">
                           <img class="waifu-pic" src=${response.url}>
                       </a>
                       <div class="sub-menu">
                           <h3>Waifu Gacha 2.0</h3>
                           <button class="generate">Generate</button>
                       </div>
                       </div>`
       
     })
 })*/


