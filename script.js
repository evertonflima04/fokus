const html = document.querySelector('html')
const focoBn = document.querySelector('.app__card-button--foco')
const curtoBn = document.querySelector('.app__card-button--curto')
const descansoBn = document.querySelector('.app__card-button--longo')

focoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

descansoBn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})
