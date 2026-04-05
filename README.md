![imagem do jogo](./img/fundo.png)

1. Identificação do Projeto

Título do Projeto: Fuel Survivor
Desenvolvedor: Pedro


2. Visão Geral do Sistema

🎮 Descrição

Este software consiste em um jogo de corrida 2D desenvolvido em JavaScript utilizando o elemento "canvas" do HTML. O jogador controla um carro que deve desviar de obstáculos e sobreviver o máximo possível.

🎯 Objetivo

O objetivo do jogo é desviar dos carros inimigos, coletar galões de combustível para recuperar vida e alcançar a pontuação necessária para avançar de fase e vencer.

🏁 Tema

O tema do jogo é corrida em estrada, onde o jogador dirige um carro em alta velocidade evitando colisões com outros veículos e coletando recursos ao longo do caminho.

🎮 Instruções de Jogabilidade

1 Jogador:
W → mover para cima
S → mover para baixo

2 Jogadores:
Player 1: W (cima) / S (baixo)
Player 2: ↑ (cima) / ↓ (baixo)

Mecânicas:
🚗 Desvie dos carros inimigos para não perder vida
⛽ Colete galões para recuperar vida
❤️ A vida diminui com o tempo e ao colidir

⚙️ Especificações Técnicas
Sistema de Vida:
Vida inicial: 1250
Colisão com inimigos: -125 de vida
Dano contínuo: -1 por frame
Coleta de galão: +175 de vida (máximo 1250)

Sistema de Pontuação:
Pontos aumentam ao desviar com sucesso dos inimigos

Progressão de Fases:
Fase 1: início do jogo
Fase 2: ao atingir mais de 30 pontos (aumento de velocidade)
Fase 3: ao atingir mais de 60 pontos (maior dificuldade)

Vitória:
Alcançar mais de 90 pontos na fase 3

Game Over:
Vida chegar a 0
No modo 2 jogadores: qualquer jogador morrer encerra o jogo

👥 Créditos
Desenvolvedor: Pedro
Product Owner / Professor: Carlos

📌 Observações
O jogo possui modo de 1 jogador e 2 jogadores

📋 Regras de Negócio
O jogador inicia com 1250 de vida
A vida nunca pode ultrapassar o valor máximo (1250)
Colidir com carros inimigos reduz 125 de vida
O jogador perde vida continuamente (-1) ao longo do tempo
Coletar galões recupera 175 de vida
A pontuação aumenta ao desviar corretamente dos inimigos
A fase muda automaticamente conforme a pontuação
No modo 2 jogadores, ambos devem sobreviver para vencer
O jogo termina se a vida de um jogador chegar a 0

✅ Requisitos Funcionais
RF01: O sistema deve permitir iniciar o jogo em modo 1 jogador
RF02: O sistema deve permitir iniciar o jogo em modo 2 jogadores
RF03: O jogador deve controlar o carro por meio do teclado
RF04: O sistema deve detectar colisões entre carros
RF05: O sistema deve contabilizar pontuação
RF06: O sistema deve possuir sistema de fases progressivas
RF07: O sistema deve exibir barra de vida dos jogadores
RF08: O sistema deve permitir coleta de itens (galões)
RF09: O sistema deve exibir tela de Game Over
RF10: O sistema deve exibir tela de Vitória
RF11: O sistema deve possuir menu inicial com navegação

⚠️ Requisitos Não Funcionais
RNF01: O jogo deve rodar em navegadores web modernos
RNF02: O sistema deve responder em tempo real aos comandos do usuário
RNF03: O jogo deve possuir interface simples e intuitiva
RNF04: O sistema deve manter desempenho fluido (sem travamentos)
RNF05: O jogo deve utilizar recursos visuais (imagens) e sonoros

🚀 Projeto desenvolvido para fins educacionais.


link do jogo: https://fuel-survivor.vercel.app/