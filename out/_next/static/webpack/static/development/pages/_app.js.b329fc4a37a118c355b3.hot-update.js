webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/Nav.js";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tpadding: 1rem 2rem;\n\tmargin: 0 1rem;\n\ttext-decoration: none;\n\tz-index: 1;\n\toverflow: hidden;\n\tcursor: pointer;\n\ttransition: ", ";\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 0;\n\t\theight: 100%;\n\t\tz-index: -1;\n\t\ttransition: ", ";\n\t\ttransform: translateX(-101%);\n\t}\n\t&:hover {\n\t\t&:before {\n\t\t\tleft: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t\t&.home__nav,\n\t\t&.about__nav,\n\t\t&.projects__nav,\n\t\t&.contact__nav {\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n\t&.home__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.about__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.projects__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.contact__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\ttop: 2.5rem;\n\tright: 3rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ColouredLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject2(), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.green;
});

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColouredLink, {
    className: "home__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColouredLink, {
    className: "about__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColouredLink, {
    className: "projects__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColouredLink, {
    className: "contact__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.b329fc4a37a118c355b3.hot-update.js.map