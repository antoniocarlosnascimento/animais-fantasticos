export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com vase em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth)
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    else this.tooltipBox.style.left = `${event.pageX + 20}px`;
  }

  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    //o nome do metodo tem que ser exatamente esse
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave); //removendo o evento quando não estiver mais encima do elemento
    currentTarget.removeEventListener("mouseleave", this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;

    return tooltipBox;
  }

  // Cria a tooltip e adiciona os evenetos de mousemove e mouseleave ao target
  //Argumento - conceito de desestruturação
  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave); //Passando como callback a funcao this.onMouseLeave
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) this.addTooltipsEvents();

    return this;
  }
}
