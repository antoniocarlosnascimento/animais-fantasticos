import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, eventss) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (eventss === undefined) this.eventss = ["touchstart", "click"];
    else this.eventss = eventss;
    this.activeClass = "active";

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault(); //event = todos os atributos e metodos de função
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.eventss, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.eventss.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
