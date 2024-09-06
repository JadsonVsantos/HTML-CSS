// Seleciona a tabela de Dama
const tabelaDama = document.getElementById("tabela-dama");

// Adiciona evento de clique às células da tabela
tabelaDama.addEventListener("click", function(event) {
  // Verifica se o elemento clicado é uma célula da tabela
  if (event.target.tagName === "TD") {
    // Seleciona a célula clicada
    const celulaClicada = event.target;

    // Verifica se a célula clicada já tem a dama
    if (celulaClicada.classList.contains("dama")) {
      // Remove a dama da célula clicada
      celulaClicada.classList.remove("dama");
    } else {
      // Verifica se a célula clicada é uma célula válida para a dama se mover
      const celulaAtual = tabelaDama.querySelector(".dama");
      const linhaAtual = celulaAtual.parentNode.rowIndex;
      const colunaAtual = Array.prototype.indexOf.call(celulaAtual.parentNode.cells, celulaAtual);
      const linhaClicada = celulaClicada.parentNode.rowIndex;
      const colunaClicada = Array.prototype.indexOf.call(celulaClicada.parentNode.cells, celulaClicada);

      if (Math.abs(linhaClicada - linhaAtual) === Math.abs(colunaClicada - colunaAtual)) {
        // A célula clicada está na diagonal em relação à célula atual da dama
        celulaClicada.classList.add("dama");
      } else if (linhaClicada === linhaAtual || colunaClicada === colunaAtual) {
        // A célula clicada está na horizontal em relação à célula atual da dama
        celulaClicada.classList.add("dama");
      } else if (celulaClicada.classList.contains("peca-adversaria")) {
        // Verifica se a dama pode capturar a peça adversária
        if (Math.abs(linhaClicada - linhaAtual) === 2 && Math.abs(colunaClicada - colunaAtual) === 2) {
          // A dama pode capturar a peça adversária
          celulaClicada.classList.add("dama");
          celulaClicada.classList.remove("peca-adversaria");
        }
      } else {
        // A célula clicada não contém uma peça adversária
        celulaClicada.classList.add("dama");

        // Cria as peças de Dama
const pecasBrancas = [];
const pecasPretas = [];

for (let i = 0; i < 12; i++) {
  pecasBrancas.push(`<div class="peca-branca"></div>`);
  pecasPretas.push(`<div class="peca-preta"></div>`);
}

// Coloca as peças brancas na tabela
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    const celula = tabelaDama.rows[i].cells[j];
    celula.innerHTML = pecasBrancas.pop();
  }
}

// Coloca as peças pretas na tabela
for (let i = 5; i < 8; i++) {
  for (let j = 0; j < 4; j++) {
    const celula = tabelaDama.rows[i].cells[j];
    celula.innerHTML = pecasPretas.pop();
  }
}
      }
    }
  }
});
// Seleciona o tabuleiro
const tabuleiro = document.querySelector('.tabuleiro');

// Seleciona as peças
const pecas = document.querySelectorAll('.peca-branca, .peca-preta');

// Adiciona evento de clique às peças
pecas.forEach((peca) => {
  peca.addEventListener('click', (event) => {
    // Verifica se a peça é selecionável
    if (peca.classList.contains('selecionada')) {
      // Remove a seleção da peça
      peca.classList.remove('selecionada');
    } else {
      // Seleciona a peça
      peca.classList.add('selecionada');
    }
  });
});

// Adiciona evento de drag and drop às peças
pecas.forEach((peca) => {
  peca.addEventListener('dragstart', (event) => {
    // Salva a posição inicial da peça
    event.dataTransfer.setData('text', peca.id);
  });

  peca.addEventListener('dragover', (event) => {
    // Permite que a peça seja movida para a posição atual
    event.preventDefault();
  });

  peca.addEventListener('drop', (event) => {
    // Verifica se a peça pode ser movida para a posição atual
    const pecaId = event.dataTransfer.getData('text');
    const pecaOrigem = document.getElementById(pecaId);
    const pecaDestino = event.target;

    if (pecaOrigem && pecaDestino) {
      // Verifica se a movimentação é válida (ex: não pode mover uma peça para uma posição ocupada)
      if (validarMovimento(pecaOrigem, pecaDestino)) {
        // Move a peça para a posição atual
        pecaDestino.appendChild(pecaOrigem);
      }
    }
  });
});

// Função para validar a movimentação da peça
function validarMovimento(pecaOrigem, pecaDestino) {
  // Verifica se a peça pode ser movida para a posição atual
  // (ex: não pode mover uma peça para uma posição ocupada)
  // Implemente a lógica de validação aqui
  return true; // ou false, dependendo da lógica de validação
}
