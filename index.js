let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300, 325, 80, 50, './img/carro_inimbg.png')
let carro = new Carro(100, 325, 80, 50, './img/carroprin_01_bg.png')
let galao = new Galao(1300, 400, 40, 80, './img/galaobg.png')
// let medidaCarro = new Carro(100, 325, 85, 50, 'green')

let t1 = new Text()
let t2 = new Text()
let fase_txt = new Text()

let motor = new Audio('./img/motor.wav')
let batida = new Audio('./img/batida.mp3')
motor.volume = 0.5
motor.loop = true
batida.volume = 0.5

let jogar = true
let fase = 1

document.addEventListener('keydown', (e) => {
    motor.play()
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir -= 10
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir = 0
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir = 0
    }
})

function game_over() {
    if (carro.vida <= 0) {
        jogar = false
        motor.pause()
        // música com o jogo parado
    }
}

function ver_fase() {
    if (carro.pontos > 20 && fase === 1) {
        fase = 2
        carroInimigo.vel = 15
        galao.vel = 12
    } else if (carro.pontos > 40 && fase === 2) {
        fase = 3
        carroInimigo.vel = 20
        galao.vel = 17
    }
}

function colisao() {
    if (carro.colid(carroInimigo)) {
        batida.play()
        carroInimigo.recomeca()
        carro.vida -= 200

    } else {
        carro.vida -= 1
    }
    console.log('vida: ', carro.vida)
}

function pontuacao() {
    if (carro.point(carroInimigo)) {
        carro.pontos += 5
        carroInimigo.recomeca()
    }
}

function desenha() {

    if (jogar) {
        carroInimigo.des_carro()
        galao.des_gas()
        carro.des_carro()
        t1.des_text('Pontos: ' + carro.pontos, 1000, 40, 'yellow', '26px Arial')

        // fundo da barra 
        des.fillStyle = 'gray'
        des.fillRect(40, 20, 300, 20)

        //  vida atual 
        if(carro.vida >= 650){
            des.fillStyle = 'green'
        }else if(carro.vida <= 649 && carro.vida >= 350){
            des.fillStyle = 'yellow'
        }else if(carro.vida <= 349 && carro.vida >= 0){
            des.fillStyle = 'red'
        }

        // cálculo proporcional da vida
        let vidaMax = 1000
        let larguraVida = (carro.vida / vidaMax) * 300
        des.fillRect(40, 20, larguraVida, 20)

        fase_txt.des_text('Fase: ' + fase, 550, 40, 'white', '26px Arial')
    } else {
        t1.des_text('GAME OVER', 450, 350, 'yellow', '60px Arial')
        t2.des_text('Pontuação Final: ' + carro.pontos, 480, 400, 'white', '25px Arial')
    }

}

function atualiza() {
    if (jogar) {
        carro.mov_car()
        carro.anim('carroprin_0')
        carroInimigo.mov_car()
        galao.mov_car()
        carro.collect(galao)
        colisao()
        pontuacao()
        ver_fase()
        game_over()
    }
}

function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()