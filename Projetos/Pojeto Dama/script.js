// Variáveis globais
let tabuleiro = [];
let jogadorAtual = 'branco';
let selecionada = null;

// Função para criar o tabuleiro
function criarTabuleiro() {
 for (let i = 0; i < 8; i++) {
 let linha = [];
 for (let j = 0; j < 8; j++) {
 let casa = {
 x: j,
 y: i,
 peça: null
 };
 linha.push(casa);
 }
 tabuleiro.push(linha);
 }
}

// Função para desenhar o tabuleiro
function desenharTabuleiro() {
 let html = '';
 for (let i = 0; i < 8; i++) {
 html += '<div class="linha" id="linha-' + (i + 1) + '">';
 for (let j = 0; j < 8; j++) {
 let casa = tabuleiro[i][j];
 html += '<div class="casa" id="casa-' + (i + 1) + '-' + (j + 1) + '">';
 if (casa.peça) {
 html += '<div class="peça ' + casa.peça.cor + '"></div>';
 }
 html += '</div>';
 }
 html += '</div>';
 }
 document.querySelector('.tabuleiro').innerHTML = html;
}

// Função para selecionar uma casa
function selecionarCasa(x, y) {
 if (selecionada) {
 // Mover a peça
 moverPeça(selecionada.x, selecionada.y, x, y);
 } else {
 // Selecionar a casa
 selecionada = tabuleiro[y][x];
 document.querySelector('#casa-' + (y + 1) + '-' + (x + 1)).classList.add('selecionada');
 }
}

// Função para mover uma peça
function moverPeça(x1, y1, x2, y2) {
 // Verificar se a movimentação é válida
 if (Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 1) {
 // Mover a peça
 tabuleiro[y2][x2].peça = tabuleiro[y1][x1].peça;
 tabuleiro[y1][x1].peça = null;
 // Desenhar o tabuleiro novamente
 desenharTabuleiro();
 // Trocar o jogador
 jogadorAtual = jogadorAtual === 'branco' ? 'preto' : 'branco';
 }
}

// Desenhar o tabuleiro
desenharTabuleiro();

// Adicionar eventos de clique às casas
document.querySelectorAll('.casa').forEach((casa) => {
  casa.addEventListener('click', (event) => {
    let x = parseInt(event.target.id.split('-')[2]) - 1;
    let y = parseInt(event.target.id.split('-')[1]) - 1;
    selecionarCasa(x, y);
  });
});

// Função para verificar se o jogo acabou
function verificarFimDeJogo() {
  let branco = 0;
  let preto = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (tabuleiro[i][j].peça && tabuleiro[i][j].peça.cor === 'branco') {
        branco++;
      } else if (tabuleiro[i][j].peça && tabuleiro[i][j].peça.cor === 'preto') {
        preto++;
      }
    }
  }
  if (branco === 0) {
    alert('O jogador preto ganhou!');
  } else if (preto === 0) {
    alert('O jogador branco ganhou!');
  }
}

// Função para inicializar as peças
function inicializarPecas() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 1) {
        if (i < 3) {
          tabuleiro[i][j].peça = { cor: 'preto' };
        } else if (i > 4) {
          tabuleiro[i][j].peça = { cor: 'branco' };
        }
      }
    }
  }
}

// Inicializar as peças
inicializarPecas();

// Desenhar o tabuleiro novamente
desenharTabuleiro();