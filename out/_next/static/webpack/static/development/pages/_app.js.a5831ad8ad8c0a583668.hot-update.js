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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Social */ "./components/Social.js");
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Copyright */ "./components/Copyright.js");
/* harmony import */ var _NightMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NightMode */ "./components/NightMode.js");
/* harmony import */ var _static_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/utils */ "./static/utils/index.js");
/* harmony import */ var _static_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/constants */ "./static/constants/index.js");
/* harmony import */ var _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/BaseStyles */ "./components/styles/BaseStyles.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/Page.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t\twidth: 100vw;\n\t\t\theight: 9.6rem;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tbackground: ", ";\n\t\t\tz-index: 999;\n\t\t\tbox-shadow: ", ";\n\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\tpadding: 0;\n\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t@import url('https://fonts.googleapis.com/css?family=Questrial');\n\thtml {\n\t\tbox-sizing: border-box;\n\t\tfont-size: 10px;\n\t}\n\t*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}\n\tbody {\n\t\tposition: relative;\n\t\tmargin: 0;\n\t\tpadding: 0 0 5rem 0;\n\t\tfont-size: 1.7rem;\n\t\tline-height: 2;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tfont-family: 'Questrial', sans-serif;\n    font-kerning: normal;\n    font-feature-settings: \"kern\", \"liga\", \"clig\", \"calt\";\n\t\tcolor: ", ";\n\t\toverflow-x: hidden;\n    transition: .25s ease-in-out;\n\t\t", ";\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ", ";\n\t}\n\t.page-transition-enter {\n\t\topacity: 0;\n\t}\n\t.page-transition-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 0.2s ease-out;\n\t}\n\t.page-transition-exit {\n\t\topacity: 1;\n\t}\n\t.page-transition-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s ease-in-out;\n\t}\n\t.bar {\n\t\t", ";\n\t}\n\t.grid {\n\t\tdisplay: flex;\n\t\tmargin-top: 6rem;\n\t\tflex-wrap: wrap;\n\t}\n\t.box {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tbackground: ", ";\n\t\ttransform-origin: 50% 50%;\n\t}\n.about-page {\n\tspan {\n\t\tposition: relative;\n\t\ttransition: ", ";\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: -.1rem;\n\t\t\tright: 0;\n\t\t\theight: 1px;\n\t\t\tz-index: 0;\n\t\t}\n\t\t&.reactSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.vueSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.wordpressSpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.shopifySpan {\n\t\t\t&:before {\n\t\t\t\tbackground: ", ";\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])(_templateObject(), _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].offWhite, _static_utils__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('phablet')(_templateObject2()), _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].offWhite, _static_utils__WEBPACK_IMPORTED_MODULE_8__["media"].lessThan('phablet')(_templateObject3(), _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].black, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].bs), _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].darkPink, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].transition, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].green, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].green, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].orange, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].orange, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].pink, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].pink, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].green, _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"].green);
function Page(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dark'),
      _useState2 = _slicedToArray(_useState, 2),
      modeTheme = _useState2[0],
      setTheme = _useState2[1];

  var toggleTheme = function toggleTheme() {
    if (modeTheme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["StyledPage"], {
    className: modeTheme === 'light' ? 'day' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NightMode__WEBPACK_IMPORTED_MODULE_7__["default"], {
    modeType: modeTheme,
    modeSelect: toggleTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_BaseStyles__WEBPACK_IMPORTED_MODULE_10__["Inner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Social__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Copyright__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })));
}
Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

/***/ }),

/***/ "./static/constants/index.js":
/*!***********************************!*\
  !*** ./static/constants/index.js ***!
  \***********************************/
/*! exports provided: DARK_MODE, LIGHT_MODE, THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_MODE", function() { return DARK_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_MODE", function() { return LIGHT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
var DARK_MODE = 'DARK_MODE';
var LIGHT_MODE = 'LIGHT_MODE';
var THEME = 'THEME';

/***/ })

})
//# sourceMappingURL=_app.js.a5831ad8ad8c0a583668.hot-update.js.map