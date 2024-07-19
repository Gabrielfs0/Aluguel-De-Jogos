let contadorAlugados = 0

// Exibe no console o total de jogos alugados
function contarEExibirJogosAlugados() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


// Pegar o id de todos os jogos / classes e adicionar em uma variavel
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    // Trocar o botão, texto e imagem do jogo de acordo com o jogo, alugando ou devolvendo
    if (imagem.classList.contains("dashboard__item__img--rented")) {

      // Adiciona uma CONFIRMÇÂO PARA O USUARIO antes de devolver o jogo
      if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
         imagem.classList.remove("dashboard__item__img--rented");
         botao.classList.remove("dashboard__item__button--return");
         botao.innerHTML = "Alugar"
         // Diminuir -1 ao contador de acordo com os jogos alugados do usuario
         jogosAlugados--;
      }
  } else {
      imagem.classList.add("dashboard__item__img--rented");
      botao.classList.add("dashboard__item__button--return");  
      botao.innerHTML = "Devolver" 
     // Acrecentar +1 ao contador de acordo com os jogos alugados do usuario
      jogosAlugados++;
    }
    // Exibe a Função
    contarEExibirJogosAlugados();
}

// 'DOMContentLoaded'É acionado quando a página é carregada / Conta a quantidade inicial de jogos já alugados e inicia a contagem diante disso
document.addEventListener('DOMContentLoaded', function() {
  jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
  contarEExibirJogosAlugados();
});
