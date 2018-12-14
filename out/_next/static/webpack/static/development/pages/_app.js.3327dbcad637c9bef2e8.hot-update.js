webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/styles/ColouredLink.js":
/*!*******************************************!*\
  !*** ./components/styles/ColouredLink.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tpadding: 1rem 2rem;\n\tmargin: 0 1rem;\n\ttext-decoration: none;\n\tz-index: 1;\n\toverflow: hidden;\n\tcursor: pointer;\n\ttransition: ", ";\n\t@media (max-width: 509px) {\n\t\tpadding: 1rem 0;\n\t\tfont-size: 1.5rem;\n\t}\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 0;\n\t\theight: 100%;\n\t\tz-index: -1;\n\t\ttransition: ", ";\n\t\ttransform: translateX(-101%);\n\t}\n\t&:hover {\n\t\t&:before {\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tleft: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t\t&.home__nav,\n\t\t&.about__nav,\n\t\t&.projects__nav,\n\t\t&.contact__nav {\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n\t&.home__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.about__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.projects__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.contact__nav {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ColouredLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject(), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.green;
});
/* harmony default export */ __webpack_exports__["default"] = (ColouredLink);

/***/ })

})
//# sourceMappingURL=_app.js.3327dbcad637c9bef2e8.hot-update.js.map