let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300, 325, 80, 50, './img/carro_inimbg.png')
let carroInimigo2 = new CarroInimigo(1500, 175, 80, 50, './img/carro_inim2bg.png')
let carroInimigo3 = new CarroInimigo(1700, 485, 80, 50, './img/carro_inim3bg.png')
let carro = new Carro(100, 325, 80, 50, './img/carroprin_01_bg.png')
let galao = new Galao(1300, 400, 40, 80, './img/galaoverbg.png')
let galao2 = new Galao(1300, 400, 40, 80, './img/galaoamabg.png')


let t1 = new Text()
let t2 = new Text()
let fase_txt = new Text()

let fase1 = new Fundo(0, 0, 1200, 700,'./img/fase1img.png')
let fase2 = new Fundo(0, 0, 1200, 700,'./img/fase2img.png')
let fase3 = new Fundo(0, 0, 1200, 700,'./img/fase3img.png')
let gameover = new Fundo(0, 0, 1200, 700,'./img/gameoverimg.png')
let vitoria = new Fundo(0, 0, 1200, 700, './img/vitoria.png')

let motor = new Audio('./img/motor.wav')
let batida = new Audio('./img/batida.wav')
motor.volume = 0.03
motor.loop = true
batida.volume = 0.8

window.jogar = false
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

function victory(){
    if(fase === 3 && carro.pontos > 90 && carro.vida > 0){
        jogar = false
        motor.pause()
    }
}

function ver_fase() {
    if (carro.pontos > 30 && fase === 1) {
        fase = 2
        carroInimigo.vel = 14
        carroInimigo2.vel = 14
        carroInimigo3.vel = 14
        galao.vel = 12
        galao2.vel = 12
    } else if (carro.pontos > 60 && fase === 2) {
        fase = 3
        carroInimigo.vel = 16
        carroInimigo2.vel = 16
        carroInimigo3.vel = 16
        galao.vel = 14
        galao2.vel = 14
    }
}

function colisao() {
    if (carro.colid(carroInimigo)) {
        batida.play()
        carroInimigo.recomeca()
        carro.vida -= 125
    }
    if (carro.colid(carroInimigo2)) {
        batida.play()
        carroInimigo2.recomeca()
        carro.vida -= 125
    }
    if (carro.colid(carroInimigo3)) {
        batida.play()
        carroInimigo3.recomeca()
        carro.vida -= 125
    }else{
        carro.vida -= 1
    }

    console.log('vida: ', carro.vida)
}

function pontuacao() {
    if (carro.point(carroInimigo)) {
        carro.pontos += 1
        carroInimigo.recomeca()
    }
    if (carro.point(carroInimigo2)) {
        carro.pontos += 1
        carroInimigo2.recomeca()
    }
    if (carro.point(carroInimigo3)) {
        carro.pontos += 1
        carroInimigo3.recomeca()
    }
}

function desenha() {

    if (jogar) {
         if (fase === 1) {
            fase1.des_fundo()
        } else if (fase === 2) {
            fase2.des_fundo()
        } else if (fase === 3) {
            fase3.des_fundo()
        }
        carroInimigo.des_carro()
        carroInimigo2.des_carro()
        carroInimigo3.des_carro()
        galao.des_gas()
        galao2.des_gas()
        carro.des_carro()
        t1.des_text('Pontos: ' + carro.pontos, 1000, 40, 'yellow', '26px Arial')

        // fundo da barra 
        des.fillStyle = 'gray'
        des.fillRect(40, 20, 300, 20)

        //  vida atual 
        if(carro.vida >= 650){
            des.fillStyle = 'green'
        }else if(carro.vida <= 649 && carro.vida >= 250){
            des.fillStyle = 'yellow'
        }else if(carro.vida <= 249 && carro.vida >= 0){
            des.fillStyle = 'red'
        }

        // cálculo proporcional da vida
        let vidaMax = 1250
        let larguraVida = (carro.vida / vidaMax) * 300
        des.fillRect(40, 20, larguraVida, 20)

        fase_txt.des_text('Fase: ' + fase, 550, 40, 'white', '26px Arial')

    }else if(fase === 3 && carro.pontos > 90 && carro.vida > 0){
        vitoria.des_fundo()
        
    }else if(carro.vida <= 0){
    gameover.des_fundo()
    des.textAlign = 'center'
    des.fillStyle = 'white'
    des.font = 'bold 40px Arial'
    des.fillText('PONTUAÇÃO: ' + carro.pontos, 600, 580)
    }

}

function atualiza() {
    if (jogar) {
        carro.mov_car()
        carro.anim('carroprin_0')
        carroInimigo.mov_car()
        carroInimigo2.mov_car()
        carroInimigo3.mov_car()
        galao.mov_car()
        galao2.mov_car()
        carro.collect(galao)
        carro.collect(galao2)
        colisao()
        pontuacao()
        ver_fase()
        victory()
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