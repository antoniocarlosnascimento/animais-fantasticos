export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      //o nome do metodo tem que ser exatamente esse
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave); //removendo o evento quando não estiver mais encima do elemento
      this.element.removeEventListener("mouseleave", onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this); //Este this é referent ao tooltips do item do addEventListener

    onMouseMove.tooltipBox = tooltipBox; //Add atributo tooltipBox com o valor de tooltipBox ao objeto onMouseMove
    this.addEventListener("mouseleave", onMouseLeave); //Passando como callback o objeti onMouseLeave

    onMouseLeave.tooltipBox = tooltipBox; //criando e atribuindo o elemento tooltipBox para o atrinuto tooltipBox do objeto onMouseLeave
    onMouseLeave.element = this;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
