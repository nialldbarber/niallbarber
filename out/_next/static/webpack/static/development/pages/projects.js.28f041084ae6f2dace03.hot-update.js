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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/Content */ "./components/styles/Content.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Project */ "./components/Project.js");
/* harmony import */ var _components_ProjectWhole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectWhole */ "./components/ProjectWhole.js");
/* harmony import */ var _components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/PageHeader */ "./components/styles/PageHeader.js");

var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/pages/projects.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tposition: relative;\n\tz-index: 5;\n\t.project-grid-item {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\tmargin: 1rem;\n\t\t@media (max-width: 629px) {\n\t\t\tmargin: 1rem 0;\n\t\t}\n\t\t@media (min-width: 630px) {\n\t\t\twidth: calc(50% - 2rem);\n\t\t}\n\t\t@media (min-width: 992px) {\n\t\t\twidth: calc(33.33333% - 2rem);\n\t\t}\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\twidth: 200px;\n\tz-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tcolor: ", ";\n\ttransition: ", ";\n\t&:hover {\n\t\topacity: 0.6;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var apiEndpoint = "".concat("https://nialldbarber.cdn.prismic.io/api/v2");
var apiToken = "".concat("MC5YQzk2cHhBQUFDTUFONUlh.Cu-_ve-_vTnvv70477-9Qlvvv71VQO-_ve-_vUTvv73vv70qCO-_ve-_ve-_vSXvv71sGO-_ve-_vVZuWlA");
var ExternalLink = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject(), function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.transition;
});
var Parallaxed = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject2());
var ProjectGrid = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());

var Projects =
/*#__PURE__*/
function (_Component) {
  _inherits(Projects, _Component);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, _getPrototypeOf(Projects).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      var blog = this.props.projects[1].data,
          projectList = this.props.projects;
      console.log(projectList); // const anchoredProjects = projectList.map(key => {
      // 	return (
      // 		<AnchorLink
      // 			className="project-grid-item"
      // 			href={`#${key.data.project_link[0].text}`}
      // 			key={key.data.project_image.url}
      // 		>
      // 			<Project
      // 				title={key.data.project_title[0].text}
      // 				image={key.data.project_image.url}
      // 				link={key.data.project_link[0].text}
      // 			/>
      // 		</AnchorLink>
      // 	);
      // });
      // const projectWhole = projectList.map(key => {
      // 	return (
      // 		<ProjectWhole
      // 			key={key.data.project_title[0].text}
      // 			title={key.data.project_title[0].text}
      // 			image={key.data.project_image.url}
      // 			desc={key.data.project_content[0].text}
      // 			link={key.data.project_link[0].text}
      // 		/>
      // 	);
      // });

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styles_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Check out some of my projects! Some are professional work, but most are projects in which I delve into new technologies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "I also run a tutorial site which involves me trying to unravel difficult coding concepts for beginners. You can check that out", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExternalLink, {
        href: blog.project_link[0].text,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "here"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                _context.next = 3;
                return prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.getApi(apiEndpoint, {
                  accessToken: apiToken
                }).then(function (api) {
                  return api.query('');
                }).catch(function (err) {
                  return console.log(err);
                });

              case 3:
                data = _context.sent;
                return _context.abrupt("return", {
                  projects: data.results
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
//# sourceMappingURL=projects.js.28f041084ae6f2dace03.hot-update.js.map