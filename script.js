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



focoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    img.setAttribute('src', '/imagens/foco.png')
    i
})

curtoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    img.setAttribute('src', '/imagens/descanso-curto.png')

})

descansoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    img.setAttribute('src', '/imagens/descanso-longo.png')
})
