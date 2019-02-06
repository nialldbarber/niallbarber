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
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Copyright */ "./components/Copyright.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/Breakpoints */ "./components/utils/Breakpoints.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t\twidth: 100vw;\n\t\t\theight: 9.6rem;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tbackground: ", ";\n\t\t\tz-index: 999;\n\t\t\tbox-shadow: ", ";\n\t\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\t\t\tpadding: 0;\n\t\t"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t@import url('https://fonts.googleapis.com/css?family=Questrial');\n\thtml {\n\t\tbox-sizing: border-box;\n\t\tfont-size: 10px;\n\t}\n\t*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}\n\tbody {\n\t\tposition: relative;\n\t\tmargin: 0;\n\t\tpadding: 0 0 5rem 0;\n\t\tfont-size: 1.7rem;\n\t\tline-height: 2;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tfont-family: 'Questrial', sans-serif;\n\t\tfont-family: ", ";\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\toverflow-x: hidden;\n\t\t", ";\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbackground: url('../static/background.svg');\n\t\t\tbackground-size: cover;\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\topacity: 0.2;\n\t\t\tz-index: -1;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ", ";\n\t}\n\t.page-transition-enter {\n\t\topacity: 0;\n\t}\n\t.page-transition-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 0.2s ease-out;\n\t}\n\t.page-transition-exit {\n\t\topacity: 1;\n\t}\n\t.page-transition-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s ease-in-out;\n\t}\n\t.bar {\n\t\t", ";\n\t}\n\t.grid {\n\t\tdisplay: flex;\n\t\tmargin-top: 6rem;\n\t\tflex-wrap: wrap;\n\t}\n\t.box {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tbackground: ", ";\n\t\ttransform-origin: 50% 50%;\n\t}\n.about-page {\n\tspan {\n\t\tposition: relative;\n\t\ttransition: ", ";\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: -.1rem;\n\t\t\tright: 0;\n\t\t\theight: 1px;\n\t\t\tz-index: -1;\n\t\t}\n\t\t&.reactSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.vueSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.wordpressSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.shopifySpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\tmax-width: 1200px;\n\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 2rem 4rem;\n\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 7rem 4rem;\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 4rem 2rem;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmax-width: ", ";\n\tmargin: 6rem auto 0;\n\tpadding: 4rem 3rem;\n\tmin-height: calc(100vh - 16rem);\n\t", ";\n\t", ";\n\t", ";\n\t", ";\n"]);

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
  fontFamily: "'Questrial', sans-serif",
  black: "#1e272d",
  offWhite: "#EDEDED",
  green: "#6cc",
  orange: "#f89b0e",
  pink: "#f95584",
  darkPink: "#ff1c68",
  maxWidth: "1100px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  transition: ".25s cubic-bezier(.895, .03, .685, .22)"
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject(), function (props) {
  return props.theme.offWhite;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2(), function (props) {
  return props.theme.maxWidth;
}, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].lessThan("phablet")(_templateObject3()), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan("tablet")(_templateObject4()), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan("desktop")(_templateObject5()), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].greaterThan("large")(_templateObject6()));
Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["injectGlobal"])(_templateObject7(), theme.fontFamily, theme.black, theme.offWhite, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].lessThan("phablet")(_templateObject8()), theme.offWhite, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_6__["media"].lessThan("phablet")(_templateObject9(), theme.black, theme.bs), theme.darkPink, theme.transition, theme.green, theme.green, theme.orange, theme.orange, theme.pink, theme.pink, theme.green, theme.green);

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Copyright__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.4ece8cb14176eb7b661c.hot-update.js.map