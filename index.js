let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300, 325, 80, 50, './img/carro_inimbg.png')
let carroInimigo2 = new CarroInimigo(1500, 175, 80, 50, './img/carro_inim2bg.png')
let carroInimigo3 = new CarroInimigo(1700, 485, 80, 50, './img/carro_inim3bg.png')

// PLAYER 1
let carro = new Carro(100, 325, 80, 50, './img/carroprin_01_bg.png')

// PLAYER 2
let carro2 = new Carro(100, 175, 80, 50, './img/carroprin2_01_bg.png')

let galao = new Galao(1100, 400, 40, 80, './img/galaoverbg.png')
let galao2 = new Galao(1300, 400, 40, 80, './img/galaoamabg.png')

let t1 = new Text()
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
window.modo2p = false

let fase = 1

// CONTROLES
document.addEventListener('keydown', (e) => {
    motor.play()

    // PLAYER 1
    if (e.key === 'w') carro.dir -= 10
    if (e.key === 's') carro.dir += 10

    // PLAYER 2
    if (modo2p) {
        if (e.key === 'ArrowUp') carro2.dir -= 10
        if (e.key === 'ArrowDown') carro2.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 's') carro.dir = 0

    if (modo2p) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') carro2.dir = 0
    }
})

// GAME OVER
function game_over() {
    if (carro.vida <= 0) {
        jogar = false
        motor.pause()
    }
    if(modo2p){
        if(carro2.vida <= 0 || carro.vida <= 0){
            jogar = false
            motor.pause()
        }
    }
}

// VITÓRIA
function victory(){
    if(fase === 3 && carro.pontos > 90 && carro.vida > 0){
        jogar = false
        motor.pause()
    }
    if(modo2p){
        if(fase === 3 && carro2.pontos > 90 && carro2.vida > 0 && carro.pontos > 90 && carro.vida > 0){
            jogar = false
            motor.pause()
        }
    }
}

// FASE
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
    if(modo2p){
        if (carro2.pontos > 30 && fase === 1) {
            fase = 2
            carroInimigo.vel = 14
            carroInimigo2.vel = 14
            carroInimigo3.vel = 14
            galao.vel = 12
            galao2.vel = 12
        } else if (carro2.pontos > 60 && fase === 2) {
            fase = 3
            carroInimigo.vel = 16
            carroInimigo2.vel = 16
            carroInimigo3.vel = 16
            galao.vel = 14
            galao2.vel = 14
        }
    }
}

// COLISÃO (SEU ORIGINAL MANTIDO)
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

    // PLAYER 2
    if (modo2p) {
        if (carro2.colid(carroInimigo)) {
            batida.play()
            carroInimigo.recomeca()
            carro2.vida -= 125
        }
        if (carro2.colid(carroInimigo2)) {
            batida.play()
            carroInimigo2.recomeca()
            carro2.vida -= 125
        }
        if (carro2.colid(carroInimigo3)) {
            batida.play()
            carroInimigo3.recomeca()
            carro2.vida -= 125
        } else {
            carro2.vida -= 1
        }
    }

    console.log('vida: ', carro.vida)
}

// PONTUAÇÃO
function pontuacao() {
    if (carro.point(carroInimigo)) {
        carro.pontos++
        carroInimigo.recomeca()
    }
    if (carro.point(carroInimigo2)) {
        carro.pontos++
        carroInimigo2.recomeca()
    }
    if (carro.point(carroInimigo3)) {
        carro.pontos++
        carroInimigo3.recomeca()
    }
    if(modo2p){
        if (carro2.point(carroInimigo)) {
            carro2.pontos++
            carroInimigo.recomeca()
        }
        if (carro2.point(carroInimigo2)) {
            carro2.pontos++
            carroInimigo2.recomeca()
        }
        if (carro2.point(carroInimigo3)) {
            carro2.pontos++
            carroInimigo3.recomeca()
        }
    }
}

// DESENHO
function desenha() {

    if(jogar) {

        if(fase === 1){
            fase1.des_fundo()
        } 
        else if(fase === 2){
            fase2.des_fundo()
        }else if(fase === 3){
            fase3.des_fundo()
        }
        carroInimigo.des_carro()
        carroInimigo2.des_carro()
        carroInimigo3.des_carro()

        galao.des_gas()
        galao2.des_gas()

        carro.des_carro()

        if (modo2p) {
            carro2.des_carro()
        }

        // ANIMAÇÃO
        carro.anim('carroprin_0')
        if (modo2p) {
            carro2.anim('carroprin2_0')
        }

        // PONTOS
        t1.des_text('Pontos: ' + carro.pontos, 1000, 40, 'yellow', '26px Arial')

        // VIDA PLAYER 1
        des.fillStyle = 'gray'
        des.fillRect(40, 20, 300, 20)

        if(carro.vida >= 650){
            des.fillStyle = 'green'
        }else if(carro.vida >= 250){
            des.fillStyle = 'yellow'
        }else{
            des.fillStyle = 'red'
        }

        let vidaMax = 1250
        let larguraVida = (carro.vida / vidaMax) * 300
        des.fillRect(40, 20, larguraVida, 20)

        // VIDA PLAYER 2
        if (modo2p) {
            des.fillStyle = 'gray'
            des.fillRect(40, 50, 300, 20)

            if(carro2.vida >= 650){
                des.fillStyle = 'green'
            }else if(carro2.vida >= 250){
                des.fillStyle = 'yellow'
            }else{
                des.fillStyle = 'red'
            }

            let larguraVida2 = (carro2.vida / vidaMax) * 300
            des.fillRect(40, 50, larguraVida2, 20)
        }

        fase_txt.des_text('Fase: ' + fase, 550, 40, 'white', '26px Arial')

    } 
    else if(fase === 3 && carro.pontos > 90 && carro.vida > 0){
        vitoria.des_fundo()
    } 
    else if((carro.vida <= 0) || (modo2p && carro.vida <= 0 || carro2.vida <= 0)
    ){
        gameover.des_fundo()
        des.textAlign = 'center'
        des.fillStyle = 'white'
        des.font = 'bold 40px Arial'
        des.fillText('PONTUAÇÃO: ' + carro.pontos, 600, 580)
    }
}

// UPDATE
function atualiza() {
    if (jogar) {
        carro.mov_car()

        if (modo2p) {
            carro2.mov_car2()
            carro2.collect(galao)
            carro2.collect(galao2)
        }

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

// LOOP
function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}
main()