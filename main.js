/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAccordion; });\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll(\r\n    '[data-anime=\"accordion\"] dt'\r\n  );\r\n  const activeClass = \"ativo\";\r\n\r\n  function activeAccordion() {\r\n    this.classList.toggle(activeClass);\r\n    this.nextElementSibling.classList.toggle(activeClass);\r\n  }\r\n\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimaNumeros; });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  let observer;\r\n  function handleMutation(mutation) {\r\n    // mutation = event\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleMutation);\r\n\r\n  const observeTarget = document.querySelector(\".numeros\");\r\n  observer.observe(observeTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initDropdownMenu; });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault(); //event = todos os atributos e metodos de função\r\n    // console.log(event);\r\n    this.classList.add(\"active\");\r\n    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\r\n      //Passando o this e esta função como parametro\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  dropdownMenus.forEach((menu) => {\r\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchAnimais; });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      Object(_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); //Inicia somente após o fetch ser resolvido (após o fetch acontecer)\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchBitcoin; });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://www.blockchain.com/ticker\")\r\n    .then((response) => response.json())\r\n    .then((bitcoin) => {\r\n      const btcPreco = document.querySelector(\".btc-preco\");\r\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFuncionamento; });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n  const horarioAberto =\r\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\n\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMenuMobile; });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add(\"active\");\r\n    menuButton.classList.add(\"active\");\r\n\r\n    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove(\"active\");\r\n      menuButton.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  if (menuButton) {\r\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModal; });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  function cliqueForaModal(event) {\r\n    if (event.target === this) toggleModal(event);\r\n  }\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);\r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", cliqueForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outsideClick; });\nfunction outsideClick(element, events, callback) {\r\n  //element é o this da função handleClick\r\n\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      //Se o click for diferente da area de target do elemento que neste caso é todo o conteudo de data-dropdown\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick); //Removendo o evento após a execução, para que não fique juntando toda vez que der um addEventListener\r\n      });\r\n      callback(); //função passada no parametro outsideClick()\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    //Assim evita adicionar vários eventos ao html\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, \"\"); // 1º nome do data, 2º value\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimacaoScroll; });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowMetade = window.innerHeight * 0.6;\r\n\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - windowMetade < 0;\r\n      if (isSectionVisible) section.classList.add(\"ativo\");\r\n      else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animaScroll();\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollSuave; });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n\r\n    // forma alternativa\r\n    // const topo = section.offsetTop;\r\n    // window.scrollTo({\r\n    //   top: topo,\r\n    //   behavior: 'smooth',\r\n    // });\r\n  }\r\n\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTabNav; });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    const direcao = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add(\"ativo\", direcao);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n\r\n    tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTooltip; });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      //o nome do metodo tem que ser exatamente esse\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave); //removendo o evento quando não estiver mais encima do elemento\r\n      this.element.removeEventListener(\"mouseleave\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltipBox(this); //Este this é referent ao tooltips do item do addEventListener\r\n\r\n    onMouseMove.tooltipBox = tooltipBox; //Add atributo tooltipBox com o valor de tooltipBox ao objeto onMouseMove\r\n    this.addEventListener(\"mouseleave\", onMouseLeave); //Passando como callback o objeti onMouseLeave\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox; //criando e atribuindo o elemento tooltipBox para o atrinuto tooltipBox do objeto onMouseLeave\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nObject(_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nObject(_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nObject(_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\nObject(_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nObject(_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\nObject(_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n// import $ from \"jquery\";\n// import _ from \"lodash\";\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });