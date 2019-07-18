webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NightMode.js":
/*!*********************************!*\
  !*** ./components/NightMode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NightMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ModeSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ModeSelect */ "./components/styles/ModeSelect.js");
/* harmony import */ var _static_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/constants */ "./static/constants/index.js");
var _jsxFileName = "/Users/niallbarber/htdocs/niallbarber/components/NightMode.js";




function NightMode(_ref) {
  var modeType = _ref.modeType,
      modeSelect = _ref.modeSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ModeSelect__WEBPACK_IMPORTED_MODULE_2__["ModeSelect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "switcher",
    htmlFor: "mode-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onClick: modeSelect,
    id: "mode-select",
    checked: modeType === _static_constants__WEBPACK_IMPORTED_MODULE_3__["LIGHT_MODE"],
    defaultChecked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
}
NightMode.propTypes = {
  modeType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=_app.js.d04e344f4f8efcff91b6.hot-update.js.map