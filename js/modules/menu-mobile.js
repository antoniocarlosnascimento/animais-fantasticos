import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventss) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    if (eventss === undefined) this.eventss = ["touchstart", "click"];
    else this.eventss = eventss;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.eventss, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventss.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
