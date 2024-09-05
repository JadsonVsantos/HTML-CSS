let jogo = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'X';

// Função para renderizar o jogo
function renderizarJogo() {
 for (let i = 0; i < 9; i++) {
 let celula = document.getElementById(`celula-${i}`);
 celula.innerHTML = jogo[i];
 }
}

// Função para lidar com o clique em uma célula
function cliqueCelula(id) {
 let celula = document.getElementById(id);
 let indice = parseInt(id.replace('celula-', ''));
 if (jogo[indice] === '') {
 jogo[indice] = jogadorAtual;
 renderizarJogo();
 verificarVencedor();
 jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
 }
}

// Função para verificar se há um vencedor
function verificarVencedor() {
 let combinacoes = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
 ];
 for (let i = 0; i < combinacoes.length; i++) {
 let a = jogo[combinacoes[i][0]];
 let b = jogo[combinacoes[i][1]];
 let c = jogo[combinacoes[i][2]];
 if (a !== '' && a === b && a === c) {
 alert(`Jogador ${a} venceu!`);
 reiniciarJogo();
 return;
 }
 }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
 jogo = ['', '', '', '', '', '', '', '', ''];
 jogadorAtual = 'X';
 renderizarJogo();
}

// Adicionar eventos de clique às células
for (let i = 0; i < 9; i++) {
 let celula = document.getElementById(`celula-${i}`);
 celula.addEventListener('click', () => cliqueCelula(`celula-${i}`));
}

// Adicionar evento de clique ao botão de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

// Renderizar o jogo inicial
renderizarJogo();