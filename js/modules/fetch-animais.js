import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // Função preenche cada animal  no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaAniciarNumeros() {
    const animaNumetos = new AnimaNumeros("[data-numero]", ".numeros", "ativo"); //Inicia somente após o fetch ser resolvido (após o fetch acontecer)
    animaNumetos.init();
  }

  // Puxa os animais atravpes de um arquivo Json e cria cada animal utlizando create animal
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url); // fetch espera resposta e depois
      const animaisJSON = await animaisResponse.json(); // transforma a resposta em JSon

      animaisJSON.forEach((animal) => preencherAnimais(animal)); //Após a trnasformação de Json ativa as funções para preecher e animais os numetos
      animaAniciarNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();

  // fetchAnimais("./animaisapi.json");
}
