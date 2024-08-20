/* Buscando as class com o querySelector */
const html = document.querySelector('html')
const focoBn = document.querySelector('.app__card-button--foco')
const curtoBn = document.querySelector('.app__card-button--curto')
const descansoBn = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const displayTime = document.querySelector('#timer')
const botoes = document.querySelectorAll('.app__card-button')

const duracaoFoco = 1500;
const duracaoCurto = 300;
const descansoLongo = 900;


/* Colocando ações nos botões */
focoBn.addEventListener('click', () => {   // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('foco')
    focoBn.classList.add('active')
})

curtoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('descanso-curto')
    curtoBn.classList.add('active')
})

descansoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    alterandoContexto('descanso-longo')
    descansoBn.classList.add('active')
})

function alterandoContexto(contexto) {  // Criando a função 'alterandoContexto' vai receber um parâmetro 'contexto'
    botoes.forEach(function (contexto){  
        contexto.classList.remove('active')  // Removendo a class active qaundo não for usada
    })
    html.setAttribute('data-contexto', contexto)  //Mudando o valor de 'data-contexto' da tag html
    img.setAttribute('src', `/imagens/${contexto}.png`)  //Mudando o caminho de imagem da class app__imagens
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!.</strong>
            `
            break;
        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}