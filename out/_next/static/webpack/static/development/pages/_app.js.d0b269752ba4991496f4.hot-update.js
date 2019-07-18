webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/ModeSelect.js":
/*!*****************************************!*\
  !*** ./components/styles/ModeSelect.js ***!
  \*****************************************/
/*! exports provided: ModeSelect, ModeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeSelect", function() { return ModeSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeType", function() { return ModeType; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/utils */ "./static/utils/index.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\tleft: 4.3rem;\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 2.3rem;\n  bottom: 5rem;\n  ", ";\n  width: 35px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\tleft: 4rem;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 2rem;\n  bottom: 2rem;\n  ", ";\n\n  .switcher {\n    position: relative;\n    display: block;\n    width: 60px;\n    height: 32px;\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background: #f95584;\n      border-radius: 18px;\n      box-shadow: ", ";\n      transition: 0.08s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;\n      &:before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 3px;\n        background-color: ", ";\n        box-shadow: ", ";\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        transform: translateY(-50%);\n        transition: 0.125s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;\n      }\n      &:after {\n        content: 'L';\n        position: absolute;\n      }\n    }\n  }\n\n  input {\n    -webkit-appearance: none;\n    &:checked {\n      & + .slider {\n        &:before {\n          background-color: ", ";\n          transform: translateX(26px) translateY(-50%);\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ModeSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('tablet')(_templateObject2()), function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.offWhite;
});
var ModeType = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject3(), _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('tablet')(_templateObject4()));

/***/ })

})
//# sourceMappingURL=_app.js.d0b269752ba4991496f4.hot-update.js.map