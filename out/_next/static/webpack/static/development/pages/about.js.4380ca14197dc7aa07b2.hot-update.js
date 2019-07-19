webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_content_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/content/about */ "./static/content/about.js");
/* harmony import */ var _components_styles_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Content */ "./components/styles/Content.js");
/* harmony import */ var _components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/PageHeader */ "./components/styles/PageHeader.js");
/* harmony import */ var _components_styles_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/AboutPage */ "./components/styles/AboutPage.js");
/* harmony import */ var _data_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/post */ "./data/post.json");
var _data_post__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/post */ "./data/post.json", 1);
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/pages/about.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      about = _useState2[0],
      setAbout = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAbout(_static_content_about__WEBPACK_IMPORTED_MODULE_1__["pageContent"]);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_AboutPage__WEBPACK_IMPORTED_MODULE_4__["AboutPage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, about.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Content__WEBPACK_IMPORTED_MODULE_2__["ContentInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: about.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _data_post__WEBPACK_IMPORTED_MODULE_5__.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _data_post__WEBPACK_IMPORTED_MODULE_5__.content.content[0].content[0].value));
}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.4380ca14197dc7aa07b2.hot-update.js.map