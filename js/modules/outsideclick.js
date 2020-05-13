export default function outsideClick(element, events, callback) {
  //element é o this da função handleClick

  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //Se o click for diferente da area de target do elemento que neste caso é todo o conteudo de data-dropdown
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); //Removendo o evento após a execução, para que não fique juntando toda vez que der um addEventListener
      });
      callback(); //função passada no parametro outsideClick()
    }
  }

  if (!element.hasAttribute(outside)) {
    //Assim evita adicionar vários eventos ao html
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, ""); // 1º nome do data, 2º value
  }
}
