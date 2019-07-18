webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/ColouredLink.js":
/*!*******************************************!*\
  !*** ./components/styles/ColouredLink.js ***!
  \*******************************************/
/*! exports provided: ColouredLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColouredLink", function() { return ColouredLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/utils */ "./static/utils/index.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 1rem 0;\n    font-size: 1.5rem;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 1rem 2rem;\n  margin: 0 1rem;\n  text-decoration: none;\n  z-index: 1;\n  overflow: hidden;\n  cursor: pointer;\n  transition: ", ";\n  ", ";\n  @media (min-width: 321px) and (max-width: 509px) {\n    padding: 1rem 0;\n    font-size: 1.8rem;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    z-index: -1;\n    transition: ", ";\n    transform: translateX(-101%);\n  }\n  &:hover {\n    &:before {\n      @media (min-width: 768px) {\n        left: 100%;\n        width: 100%;\n      }\n    }\n    &.home__nav,\n    &.about__nav,\n    &.projects__nav,\n    &.contact__nav {\n      @media (min-width: 768px) {\n        color: ", ";\n      }\n    }\n  }\n  &.home__nav {\n    @media (max-width: 767px) {\n      display: none;\n    }\n    &:before {\n      background: ", ";\n    }\n    &.active {\n      @media (min-width: 768px) {\n        background: ", ";\n        color: ", ";\n      }\n    }\n  }\n  &.about__nav {\n    &:before {\n      background: ", ";\n    }\n    &.active {\n      @media (min-width: 768px) {\n        background: ", ";\n        color: ", ";\n      }\n    }\n  }\n  &.contact__nav {\n    &:before {\n      background: ", ";\n    }\n    &.active {\n      @media (min-width: 768px) {\n        background: ", ";\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ColouredLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject(), function (props) {
  return props.theme.transition;
}, _static_utils__WEBPACK_IMPORTED_MODULE_1__["media"].lessThan('mobile')(_templateObject2()), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.black;
});

/***/ })

})
//# sourceMappingURL=_app.js.3c7cd0f1cadbf74003bc.hot-update.js.map