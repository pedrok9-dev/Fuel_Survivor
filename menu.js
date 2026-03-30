const menu = document.getElementById('menu')
const instrucoes = document.getElementById('instrucoes')
const sobre = document.getElementById('sobre')
const canvas = document.getElementById('des')

function esconderTudo() {
    menu.classList.remove('ativa')
    instrucoes.classList.remove('ativa')
    sobre.classList.remove('ativa')

    canvas.style.display = 'none'
}

// JOGAR (1 PLAYER)
window.iniciarJogo = function () {
    esconderTudo()

    canvas.style.display = 'block'
    window.jogar = true
    window.modo2p = false
}

// JOGAR 2 PLAYERS
window.jogar2 = function () {
    esconderTudo()

    canvas.style.display = 'block'
    window.jogar = true
    window.modo2p = true
}

// INSTRUÇÕES
window.mostrarInstrucoes = function () {
    esconderTudo()
    instrucoes.classList.add('ativa')
}

// SOBRE
window.mostrarSobre = function () {
    esconderTudo()
    sobre.classList.add('ativa')
}

// VOLTAR
window.voltarMenu = function () {
    esconderTudo()
    menu.classList.add('ativa')
}

