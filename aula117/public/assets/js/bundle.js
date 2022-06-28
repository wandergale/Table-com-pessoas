/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var result = document.querySelector('.resultado');

var CriarPessoa = /*#__PURE__*/function () {
  function CriarPessoa() {
    _classCallCheck(this, CriarPessoa);

    this.pessoas = [];
  }

  _createClass(CriarPessoa, [{
    key: "addPessoa",
    value: function addPessoa(nome, idade) {
      var pessoa = {
        nome: nome,
        idade: idade
      };
      this.pessoas.push(pessoa);
    }
  }]);

  return CriarPessoa;
}();

var lp = new CriarPessoa(); // Lista pessoas

lp.addPessoa('Wanderson', 20);
lp.addPessoa('Ana', 4);
lp.addPessoa('João', 21);
lp.addPessoa('Julia', 60);
lp.addPessoa('Carla', 70);
lp.addPessoa('Clara', 34);
lp.addPessoa('Pedro', 25);
var table = document.querySelector('.table');

var _iterator = _createForOfIteratorHelper(lp.pessoas),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var pessoa = _step.value;
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);
    table.appendChild(tr);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

result.appendChild(table);
/******/ })()
;
//# sourceMappingURL=bundle.js.map