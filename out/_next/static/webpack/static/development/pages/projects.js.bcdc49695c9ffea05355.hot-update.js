webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Content */ "./components/styles/Content.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Project */ "./components/Project.js");
/* harmony import */ var _components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/PageHeader */ "./components/styles/PageHeader.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/pages/projects.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tcolor: ", ";\n\ttransition: ", ";\n\t&:hover {\n\t\topacity: 0.6;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ExternalLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject(), function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.transition;
});

var Projects =
/*#__PURE__*/
function (_Component) {
  _inherits(Projects, _Component);

  function Projects() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Projects);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Projects)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: {
        projects: [{
          project1: {
            title: 'Andy Hale BMX Flatlander',
            image: '../static/moo-hayul.jpg',
            link: 'https://andyhalebmx.netlify.com/',
            typeOf: '../static/react.svg'
          },
          project2: {
            title: 'Umm One More Time Please',
            image: '../static/niallbarber-blog.png',
            link: 'https://ummonemoretimeplease.netlify.com/',
            typeOf: '../static/react.svg',
            typeOf2: '../static/graphql.svg'
          },
          project3: {
            title: 'Array Methods',
            image: '../static/array-methods.png',
            link: 'https://array-methods.herokuapp.com/',
            typeOf: '../static/react.svg'
          }
        }]
      }
    });

    return _this;
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Check out some of my projects! Some are professional work, but most are projects in which I delve into new technologies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "I also run a tutorial site in which I try to unravel difficult coding concepts for beginners. You can check that out", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExternalLink, {
        href: "https://ummonemoretimeplease.netlify.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "here"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: this.state.data.projects[0].project1.title,
        image: this.state.data.projects[0].project1.image,
        link: this.state.data.projects[0].project1.link,
        typeOf: this.state.data.projects[0].project1.typeOf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: this.state.data.projects[0].project2.title,
        image: this.state.data.projects[0].project2.image,
        link: this.state.data.projects[0].project2.link,
        typeOf: this.state.data.projects[0].project2.typeOf,
        typeOf2: this.state.data.projects[0].project2.typeOf2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: this.state.data.projects[0].project3.title,
        image: this.state.data.projects[0].project3.image,
        link: this.state.data.projects[0].project3.link,
        typeOf: this.state.data.projects[0].project3.typeOf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=projects.js.bcdc49695c9ffea05355.hot-update.js.map