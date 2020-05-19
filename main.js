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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Accordion; });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // Adiciona os eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  //iniciar função\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // Ativar primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimaNumeros; });\nclass AnimaNumeros {\r\n  constructor(numeros, observeTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observeTarget = document.querySelector(observeTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    // bind o this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  // recebe um elemento do dom, com número em seu innerText\r\n  // increment a partir de 0 até o numero final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // Ativa incrementar número para cada número selecionado do dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) =>\r\n      this.constructor.incrementarNumero(numero)\r\n    );\r\n  }\r\n\r\n  // Função que ocorre quando a miutação ocorrer\r\n  handleMutation(mutation) {\r\n    // mutation = event\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // Adiciona o MutationObserver para verificar quando a classe ativo é adicinada ao elemento target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observeTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observeTarget) this.addMutationObserver();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DropdownMenu; });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(dropdownMenus, eventss) {\r\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\r\n    if (eventss === undefined) this.eventss = [\"touchstart\", \"click\"];\r\n    else this.eventss = eventss;\r\n    this.activeClass = \"active\";\r\n\r\n    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);\r\n  }\r\n\r\n  // Ativa o dropdown menu e adiciona a função que observa o clique fora dele\r\n  activeDropDownMenu(event) {\r\n    event.preventDefault(); //event = todos os atributos e metodos de função\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.activeClass);\r\n    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.eventss, () => {\r\n      element.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  // Adiciona os eventos ao dropdown menu\r\n  addDropdownMenusEvent() {\r\n    this.dropdownMenus.forEach((menu) => {\r\n      this.eventss.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, this.activeDropDownMenu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.dropdownMenus.length) {\r\n      this.addDropdownMenusEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchAnimais; });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  //Cria a div contendo informações com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n\r\n    return div;\r\n  }\r\n\r\n  // Função preenche cada animal  no DOM\r\n  const numerosGrid = document.querySelector(target);\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  // anima os numeros de cada animal\r\n  function animaAniciarNumeros() {\r\n    const animaNumetos = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\"); //Inicia somente após o fetch ser resolvido (após o fetch acontecer)\r\n    animaNumetos.init();\r\n  }\r\n\r\n  // Puxa os animais atravpes de um arquivo Json e cria cada animal utlizando create animal\r\n  async function criarAnimais() {\r\n    try {\r\n      const animaisResponse = await fetch(url); // fetch espera resposta e depois\r\n      const animaisJSON = await animaisResponse.json(); // transforma a resposta em JSon\r\n\r\n      animaisJSON.forEach((animal) => preencherAnimais(animal)); //Após a trnasformação de Json ativa as funções para preecher e animais os numetos\r\n      animaAniciarNumeros();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  return criarAnimais();\r\n\r\n  // fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchBitcoin; });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((bitcoin) => {\r\n      const btcPreco = document.querySelector(target);\r\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-bitcoin.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuMobile; });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, eventss) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.activeClass = \"active\";\r\n\r\n    if (eventss === undefined) this.eventss = [\"touchstart\", \"click\"];\r\n    else this.eventss = eventss;\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuList.classList.add(this.activeClass);\r\n    this.menuButton.classList.add(this.activeClass);\r\n\r\n    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.eventss, () => {\r\n      this.menuList.classList.remove(this.activeClass);\r\n      this.menuButton.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.eventss.forEach((evento) =>\r\n      this.menuButton.addEventListener(evento, this.openMenu)\r\n    );\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) this.addMenuMobileEvents();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModal; });\nclass initModal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // bind this ao callback para fazer referencia ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this); //Assim o this sera referente ao objeto\r\n  }\r\n\r\n  //abre ou fecha o modal\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  // Adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  // fecha o modal ao clicar do lado de fora dele\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) this.toggleModal();\r\n  }\r\n\r\n  // Adiciiona o evento aos eventos do modal\r\n  addModalEvent() {\r\n    // o this passado na função de aallback fara referência ao objeto(nodelist) de onde o evento será colocado neste caso referente ao botaoAbrir, botaoFechar, ai usamos bind - linha 8\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

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

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollAnima; });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.6;\r\n\r\n    this.checkDiastancia = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDiastancia.bind(this), 50);\r\n  }\r\n\r\n  // Pega a distacia de cada item em relação ao topo do site\r\n  getDistancia() {\r\n    this.distancia = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop; // offsetTop pega a distancia do topo de forma estatica\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n    // console.log(this.distancia);\r\n  }\r\n\r\n  // Verifica a distancia em cada objeto em relação ao scroll do site\r\n  checkDiastancia() {\r\n    this.distancia.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) item.element.classList.add(\"ativo\");\r\n      else if (item.element.classList.contains(\"ativo\"))\r\n        item.element.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  // animaScroll() {\r\n  //   console.log(\"ativou\");\r\n  //   this.sections.forEach((section) => {\r\n  //     const sectionTop = section.getBoundingClientRect().top; //getBoundingClientRect pega a distancia do topo de forma dinamica\r\n  //     const isSectionVisible = sectionTop - this.windowMetade < 0;\r\n  //     if (isSectionVisible) section.classList.add(\"ativo\");\r\n  //     else if (section.classList.contains(\"ativo\")) {\r\n  //       section.classList.remove(\"ativo\");\r\n  //     }\r\n  //   });\r\n  // }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistancia();\r\n      this.checkDiastancia();\r\n      window.addEventListener(\"scroll\", this.checkDiastancia);\r\n    }\r\n  }\r\n\r\n  // Desctriu o evento de Scroll\r\n  stopScroll() {\r\n    window.removeEventListener(\"scroll\", this.checkDiastancia);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollSuave; });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTabNav; });\nclass initTabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  // Ativa o tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  // Adiciona os eventos as tabs\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index)); //Já retonando, por isso uma linha apenas\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tooltip; });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    // bind do objeto da classe aos callbacks\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  //Move a tooltip com base em seu estilos de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth)\r\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n    else this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n  }\r\n\r\n  // Remove a tooltip e os eventos de mousemove e mouseleave\r\n  // o parametro passado esta sendo o usado o conceito de desestruturação de objeto\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave); //removendo o evento quando o mouse não estiver mais encima do elemento\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseMove);\r\n  }\r\n\r\n  // Cria tooltip box e coloca no body\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target\r\n  // o parametro passado esta sendo o usado o conceito de desestruturação de objeto\r\n  onMouseOver({ currentTarget }) {\r\n    // Cria a tooltipbox e coloca em uma propriedade\r\n    this.criarTooltipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave); //Passando como callback o objeti onMouseLeave\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  // Adiciona os eventos de mouseover a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) this.addTooltipsEvent();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const options = { behavior: \"smooth\", block: \"start\" };\r\n// const scrollSuave = new ScrollSuave(\r\n//   '[data-menu=\"suave\"] a[href^=\"#\"]',\r\n//   options\r\n// );\r\n// scrollSuave.init();\r\nnew _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]').init();\r\nnew _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt').init();\r\nnew _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section').init();\r\nnew _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n).init();\r\nnew _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\").init();\r\nnew _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-anime=\"scroll\"]').init();\r\nnew _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-dropdown]\").init();\r\nnew _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]').init();\r\nObject(_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\nObject(_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"../../animaisapi.json\", \".numeros-grid\");\r\nObject(_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://www.blockchain.com/ticker\", \".btc-preco\");\r\n// import $ from \"jquery\";\r\n// import _ from \"lodash\";\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });