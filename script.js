/* Buscando as class com o querySelector */
const html = document.querySelector('html')
const focoBn = document.querySelector('.app__card-button--foco')
const curtoBn = document.querySelector('.app__card-button--curto')
const descansoBn = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const displayTime = document.querySelector('#timer')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBn = document.getElementById('start-pause')
const iniciarOuPausarBn = document.querySelector('#start-pause span')
const IconBn = document.querySelector('.app__card-primary-butto-icon')


const musicaPlay = new Audio('/sons/play.wav')
const musicaPause = new Audio('/sons/pause.mp3')
const musicaBeep = new Audio('/sons/beep.mp3')

const musicaFocoInput = document.getElementById('alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')

let tempoDecorridoEmSegundos = 1500
let intervaloId = null

musica.loop = true  // A música ficará em loop até o tempo acabar
musicaFocoInput.addEventListener('change', () => {  // Evento change utiliza quando usamos o checkbox ou outro caso bolleano
    if(musica.paused) {  // se a música for despausada ativa o play(), senão ativa o pause()
        musica.play()
    }else{
        musica.pause()
    }
})

/* Colocando ações nos botões */
focoBn.addEventListener('click', () => {   // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    tempoDecorridoEmSegundos = 1500
    alterandoContexto('foco')
    focoBn.classList.add('active')
    
})

curtoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    tempoDecorridoEmSegundos = 300
    alterandoContexto('descanso-curto')
    curtoBn.classList.add('active')
})

descansoBn.addEventListener('click', () => {  // Com o addEventLister chamamos o evento 'click' que recebe uma arrow function (que ao clicar acontece uma função)
    tempoDecorridoEmSegundos = 900
    alterandoContexto('descanso-longo')
    descansoBn.classList.add('active')
})

function alterandoContexto(contexto) {  // Criando a função 'alterandoContexto' vai receber um parâmetro 'contexto'
    mostrarTempo()
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

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <=0 ) {
        musicaBeep.play()
        alert('Tempo finalizado')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

/*OBS: Para eu chamar uma função que está em um const, eu tenho que escrever após que ela foi escrita   */

startPauseBn.addEventListener('click', () => {
    iniciarOuPausar()
})

function iniciarOuPausar () {
    if(intervaloId){
        musicaPause.play()
        zerar()
        return
    }
    
    musicaPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBn.innerHTML = 'Pausar'
    IconBn.setAttribute('src', '/imagens/pause.png')

}
function zerar() {
    clearInterval(intervaloId) //interrompe a execusão de algum código 
    iniciarOuPausarBn.innerHTML = 'começar'
    IconBn.setAttribute('src', '/imagens/play_arrow.png')
    intervaloId = null  // reniciando o valor do intervalorID para null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    displayTime.innerHTML = `${tempoFormatado}`
}
mostrarTempo()