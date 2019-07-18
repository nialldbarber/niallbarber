webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/BaseStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/BaseStyles.js ***!
  \*****************************************/
/*! exports provided: theme, StyledPage, Inner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPage", function() { return StyledPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/utils */ "./static/utils/index.js");
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\tmax-width: 1200px;\n\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 2rem 4rem;\n\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 7rem 4rem;\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\tpadding: 4rem 2rem;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 6rem auto 0;\n  padding: 4rem 3rem;\n  min-height: calc(100vh - 16rem);\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* background-image: ", ";\n  background-color: ", "; */\n  color: ", ";\n  //transition: 0.2s ease;\n\n  &:before {\n    content: '';\n    background-image: ", ";\n    background-color: ", ";\n    position: absolute;\n    top: -6rem;\n    left: 0;\n    bottom: -6rem;\n    right: 0;\n    z-index: -1;\n    transition: 0.2s ease;\n  }\n\n  &.day {\n    background: ", ";\n    background-image: transparent;\n    color: ", ";\n    h1,\n    h2,\n    h3,\n    h4,\n    p,\n    a,\n    span {\n      color: ", ";\n    }\n\n    &:before {\n      background: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var theme = {
  fontFamily: "'Questrial', sans-serif",
  black: '#1e272d',
  offWhite: '#fff',
  green: '#6cc',
  orange: '#f89b0e',
  pink: '#f95584',
  darkPink: '#ff1c68',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  gradient: "linear-gradient(\n    to top right,\n    rgba(102, 204, 204, 0.25),\n    rgba(249, 85, 132, 0.25),\n    rgba(248, 155, 14, 0.25)\n  )",
  transition: '.25s cubic-bezier(.895, .03, .685, .22)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.gradient;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.gradient;
}, function (props) {
  return props.theme.black;
}, theme.offWhite, theme.black, theme.black, theme.offWhite);
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (props) {
  return props.theme.maxWidth;
}, _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].lessThan('phablet')(_templateObject3()), _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('tablet')(_templateObject4()), _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('desktop')(_templateObject5()), _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].greaterThan('large')(_templateObject6()));

/***/ })

})
//# sourceMappingURL=_app.js.bc6d15ab62d927935b0c.hot-update.js.map