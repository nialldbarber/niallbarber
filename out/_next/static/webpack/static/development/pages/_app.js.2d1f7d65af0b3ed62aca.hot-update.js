webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NightMode.js":
/*!*********************************!*\
  !*** ./components/NightMode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ModeSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ModeSelect */ "./styles/ModeSelect.js");
/* harmony import */ var _static_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/constants */ "./static/constants/index.js");
/* harmony import */ var _static_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/sun.svg */ "./static/sun.svg");
/* harmony import */ var _static_sun_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_sun_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_moon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/moon.svg */ "./static/moon.svg");
/* harmony import */ var _static_moon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_moon_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/niallbarber/htdocs/react-apps/niallbarber/components/NightMode.js";







var NightMode = function NightMode(_ref) {
  var modeType = _ref.modeType,
      modeSelect = _ref.modeSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ModeSelect__WEBPACK_IMPORTED_MODULE_2__["ModeSelect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_sun_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    id: "sun",
    alt: "sun",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_moon_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    id: "moon",
    alt: "moon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "switcher",
    htmlFor: "mode-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onClick: modeSelect,
    id: "mode-select",
    checked: modeType === _static_constants__WEBPACK_IMPORTED_MODULE_3__["LIGHT_MODE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NightMode);
NightMode.propTypes = {
  modeType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=_app.js.2d1f7d65af0b3ed62aca.hot-update.js.map