import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDiastancia = debounce(this.checkDiastancia.bind(this), 50);
  }

  // Pega a distacia de cada item em relação ao topo do site
  getDistancia() {
    this.distancia = [...this.sections].map((section) => {
      const offset = section.offsetTop; // offsetTop pega a distancia do topo de forma estatica
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
    // console.log(this.distancia);
  }

  // Verifica a distancia em cada objeto em relação ao scroll do site
  checkDiastancia() {
    this.distancia.forEach((item) => {
      if (window.pageYOffset > item.offset) item.element.classList.add("ativo");
      else if (item.element.classList.contains("ativo"))
        item.element.classList.remove("ativo");
    });
  }

  // animaScroll() {
  //   console.log("ativou");
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top; //getBoundingClientRect pega a distancia do topo de forma dinamica
  //     const isSectionVisible = sectionTop - this.windowMetade < 0;
  //     if (isSectionVisible) section.classList.add("ativo");
  //     else if (section.classList.contains("ativo")) {
  //       section.classList.remove("ativo");
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistancia();
      this.checkDiastancia();
      window.addEventListener("scroll", this.checkDiastancia);
    }
  }

  // Desctriu o evento de Scroll
  stopScroll() {
    window.removeEventListener("scroll", this.checkDiastancia);
  }
}
