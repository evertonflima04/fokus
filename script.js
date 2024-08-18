/* Buscando as class com o querySelector */
const html = document.querySelector('html')
const focoBn = document.querySelector('.app__card-button--foco')
const curtoBn = document.querySelector('.app__card-button--curto')
const descansoBn = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const displayTime = document.querySelector('#timer')

const duracaoFoco = 1500;
const duracaoCurto = 300;
const descansoLongo = 900;


/* Colocando ações nos botões */
focoBn.addEventListener('click', () => {   // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('foco')
})

curtoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('descanso-curto')
})

descansoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('descanso-longo')
})

function alterandoContexto(contexto) {  // Criando a função 'alterandoContexto' vai receber um parâmetro 'contexto'
    html.setAttribute('data-contexto', contexto)  //Mudando o valor de 'data-contexto' da tag html
    img.setAttribute('src', `/imagens/${contexto}.png`)  //Mudando o caminho de imagem da class app__imagens
}