webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/ProjectWhole.js":
/*!************************************!*\
  !*** ./components/ProjectWhole.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Breakpoints */ "./components/utils/Breakpoints.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/ProjectWhole.js";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t\tfont-size: 2rem;\n\t\t\tpadding-right: 1.5rem;\n\t\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t\twidth: 25px;\n\t\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\t&:hover {\n\t\timg {\n\t\t\topacity: .6;\n\t\t}\n\t\tp {\n\t\t\topacity: .6;\n\t\t}\n\t}\n\timg {\n\t\talign-self: center;\n\t\tmax-width: 30px;\n\t\twidth: 100%;\n\t\theight: auto;\n\t\topacity: 1;\n\t\ttransition: ", ";\n\t\t", ";\n\t}\n\tp {\n\t\tfont-size: 2.8rem;\n\t\tpadding-left: 2rem;\n\t\tcolor: ", ";\n\t\tline-height: 1.3;\n\t\topacity: 1;\n\t\ttransition: ", ";\n\t\t", ";\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t\tdisplay: none;\n\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tfont-size: 4rem;\n\t\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\twidth: 100%;\n\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t\tpadding: 0;\n\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\t.project-meta {\n\t\twidth: 65%;\n\t\tpadding: 0 3rem 1rem 1rem;\n\t\t", ";\n\t\t", ";\n\t\th3 {\n\t\t\tfont-size: 5rem;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline;\n\t\t\tline-height: 1.3;\n\t\t\tborder-bottom: 2px solid ", ";\n\t\t\t", ";\n\t\t}\n\t\t.desc {\n\t\t\tp {\n\t\t\t\tfont-size: 2rem;\n\t\t\t}\n\t\t}\n\t}\n\t.project-img {\n\t\twidth: 35%;\n\t\tdisplay: flex;\n\t\t", ";\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\talign-self: center;\n\t\t\tbox-shadow: ", ";\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\tmin-height: 100vh;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 4.5rem 0 2rem;\n\tmargin-top: 7rem;\n\t", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ProjectSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject(), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].greaterThan("desktop")(_templateObject2()));
var ProjectGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("phablet")(_templateObject4()), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("tablet")(_templateObject5()), function (props) {
  return props.theme.pink;
}, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("phablet")(_templateObject6()), _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("tablet")(_templateObject7()), function (props) {
  return props.theme.bs;
});
var SiteLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject8(), function (props) {
  return props.theme.transition;
}, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("phablet")(_templateObject9()), function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.transition;
}, _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__["media"].lessThan("phablet")(_templateObject10()));

var ProjectWhole = function ProjectWhole(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectSection, {
    id: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: props.desc,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image,
    alt: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SiteLink, {
    href: props.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/link.svg",
    alt: "Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, props.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectWhole);

/***/ })

})
//# sourceMappingURL=projects.js.16f77b4f2e723c7765ff.hot-update.js.map