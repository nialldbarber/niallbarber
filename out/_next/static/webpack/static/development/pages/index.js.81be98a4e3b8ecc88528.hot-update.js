webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/PageHeader */ "./components/styles/PageHeader.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/pages/index.js";


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\ttext-align: center;\n\tspan {\n\t\tfont-size: 3rem;\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t\tpadding: 1rem .5rem;\n\t\tbox-shadow: ", ";\n\t\t@media (max-width: 767px) {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tfont-size: 2.5rem;\n\tline-height: 0;\n\tmargin: 0;\n\tpadding-bottom: 10rem;\n\t@media (min-width: 768px) {\n\t\tfont-size: 4rem;\n\t\tmargin-top: -1rem;\n\t}\n\t@media (min-width: 992px) {\n\t\tfont-size: 4rem;\n\t\tmargin-top: -5rem;\n\t}\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 1rem;\n\t\tright: 0;\n\t\theight: 5px;\n\t\tz-index: -1;\n\t\t@media (max-width: 767px) {\n\t\t\tbottom: 0;\n\t\t\theight: 3px;\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 250px;\n\tdisplay: flex;\n\talign-self: center;\n\tmargin: 0 auto -3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["text-align: center;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var HomepageSplash = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var SubHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3());
var TypedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.bs;
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomepageSplash, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: "../static/nb-logo.svg",
    alt: "Niall Barber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Niall Barber"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Front End Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypedWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ['HTML / CSS', 'JavaScript', 'React', 'Vue', 'PHP', 'WordPress', 'Shopify / Liquid', 'Photoshop', 'Illustrator'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.81be98a4e3b8ecc88528.hot-update.js.map