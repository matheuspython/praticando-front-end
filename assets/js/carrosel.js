var carrosel = document.querySelector('#carrosel')
var textoCarrosel = document.querySelector('.text-carrosel')
var imgCarrosel = document.querySelector('#carrosel')

var listTexts = [
    'nova temporada desse anime',
    'novo recorde de vendas no japao',
    'veja estes novos animes'
]
var listImages = [
    'https://rollingstone.uol.com.br/media/_versions/dororo-anime-foto-divulgacao_widelg.jpg',
    'https://img.ibxk.com.br/2020/07/31/31143015151236.jpeg',
    'https://taverna42.files.wordpress.com/2018/11/whatsapp-image-2018-02-04-at-16-47-54-2.jpeg?w=1280&h=720&crop=1'
]

function criaTextoCarrosel(texto) {
    text = document.createTextNode(texto)
    textoCarrosel.appendChild(text)
}

function adicionaImagemCarrosel(img) {
    imgCarrosel.style.backgroundImage = "url(" + img + ")"
}

imgCarroselatual = adicionaImagemCarrosel(listImages[2])
text1Carroselatual = criaTextoCarrosel(listTexts[2])


var indice = 0
setInterval(() => {

    imgCarroselatual = adicionaImagemCarrosel(listImages[indice])
    text1Carroselatual = criaTextoCarrosel(listTexts[indice])
    indice++
    if (indice == 2) { indice = 0 }
}, 8000)