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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _static_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/utils */ "./static/utils/index.js");
/* harmony import */ var _styles_ColouredLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ColouredLink */ "./styles/ColouredLink.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HeaderStyles */ "./styles/HeaderStyles.js");
var _jsxFileName = "/Users/niallbarber/htdocs/react-apps/niallbarber/components/Nav.js";






var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _static_utils__WEBPACK_IMPORTED_MODULE_2__["pages"].map(function (_ref) {
    var title = _ref.title,
        url = _ref.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: title,
      activeClassName: "active",
      href: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ColouredLink__WEBPACK_IMPORTED_MODULE_3__["ColouredLink"], {
      className: "".concat(title.toLowerCase(), "__nav"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, title));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.d29fa58cd737e884cc64.hot-update.js.map