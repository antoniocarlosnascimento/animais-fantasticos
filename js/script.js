import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";

import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js";

// const options = { behavior: "smooth", block: "start" };
// const scrollSuave = new ScrollSuave(
//   '[data-menu="suave"] a[href^="#"]',
//   options
// );
// scrollSuave.init();
new ScrollSuave('[data-menu="suave"] a[href^="#"]').init();
new Accordion('[data-anime="accordion"] dt').init();
new TabNav('[data-tab="menu"] li', '[data-tab="content"] section').init();
new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
).init();
new Tooltip("[data-tooltip]").init();
new ScrollAnima('[data-anime="scroll"]').init();
new DropdownMenu("[data-dropdown]").init();
new MenuMobile('[data-menu="button"]', '[data-menu="list"]').init();
new Funcionamento("[data-semana]", "aberto").init();

// fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");
// import $ from "jquery";
// import _ from "lodash";
