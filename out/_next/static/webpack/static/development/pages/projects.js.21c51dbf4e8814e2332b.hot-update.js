webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/Project.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\timg {\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tbox-shadow: ", ";\n\t}\n\th3 {\n\t\tmargin-bottom: 0;\n\t\ttransition: ", ";\n\t}\n\t.typeOf {\n\t\tposition: absolute;\n\t\twidth: 40px;\n\t\tleft: 0.6rem;\n\t\tbox-shadow: none;\n\t\tbottom: 2.4rem;\n\t\t&.typeOf2 {\n\t\t\tleft: 5rem;\n\t\t\tbottom: 2.3rem;\n\t\t}\n\t}\n\t&:hover {\n\t\th3 {\n\t\t\tcolor: ", ";\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.pink;
});

var Project = function Project(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image,
    alt: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "typeOf",
    src: props.typeOf,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "typeOf typeOf2",
    src: props.typeOf2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), "hello");
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=projects.js.21c51dbf4e8814e2332b.hot-update.js.map