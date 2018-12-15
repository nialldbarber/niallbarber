webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Social */ "./components/Social.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t@import url('https://fonts.googleapis.com/css?family=Questrial');\n\thtml {\n\t\tbox-sizing: border-box;\n\t\tfont-size: 10px;\n\t}\n\t*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}\n\tbody {\n\t\tposition: relative;\n\t\tmargin: 0;\n\t\tpadding: 0 0 5rem 0;\n\t\tfont-size: 1.7rem;\n\t\tline-height: 2;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tfont-family: 'Questrial', sans-serif;\n\t\tbackground-color: #1e272d;\n\t\tcolor: ", ";\n\t\t@media (max-width: 509px) {\n\t\t\tpadding: 0;\n\t\t}\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbackground: url('../static/background.svg');\n\t\t\tbackground-size: cover;\n\t\t\theight: 100vh;\n\t\t\twidth: 100vw;\n\t\t\topacity: 0.3;\n\t\t\tz-index: -1;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t}\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ", ";\n\t}\n\t.grid {\n\t\tdisplay: flex;\n\t\tmargin-top: 6rem;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmax-width: ", ";\n\tmargin: 6rem auto 0;\n\tpadding: 4rem 3rem;\n\tmin-height: calc(100vh - 13rem);\n\t@media (min-width: 768px) {\n\t\tpadding: 7rem 4rem;\n\t}\n\t@media (min-width: 992px) {\n\t\tpadding: 2rem 4rem;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var theme = {
  black: '#1e272d',
  offWhite: '#EDEDED',
  green: '#6cc',
  orange: '#f89b0e',
  pink: '#f95584',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  transition: '.25s cubic-bezier(.895, .03, .685, .22)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.theme.offWhite;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["injectGlobal"])(_templateObject3(), theme.offWhite, theme.offWhite);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.72dd4d416945ce0013bf.hot-update.js.map