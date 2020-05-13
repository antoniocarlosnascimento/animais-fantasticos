import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault(); //event = todos os atributos e metodos de função
    // console.log(event);
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      //Passando o this e esta função como parametro
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
