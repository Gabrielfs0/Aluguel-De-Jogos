
// Pegar o id de todos os jogos / classes e adicionar em uma variavel
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Trocar o botão, texto e imagem do jogo de acordo com o jogo, alugando ou devolvendo
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar"
      } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");  
        botao.innerHTML = "Devolver" 
      }

    
}