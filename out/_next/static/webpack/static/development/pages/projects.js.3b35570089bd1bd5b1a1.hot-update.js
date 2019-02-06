webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/ProjectWhole.js":
/*!************************************!*\
  !*** ./components/ProjectWhole.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_Breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Breakpoints */ "./components/utils/Breakpoints.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/ProjectWhole.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, _getPrototypeOf(Project).apply(this, arguments));
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectSection, {
        id: this.props.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectGrid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        source: this.props.desc,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.image,
        alt: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SiteLink, {
        href: this.props.link,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/link.svg",
        alt: "Link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.props.title)));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=projects.js.3b35570089bd1bd5b1a1.hot-update.js.map