import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

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

initDropdownMenu();
initMenuMobile();

initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

// import $ from "jquery";
// import _ from "lodash";
