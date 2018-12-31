webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/styles/PageHeader.js":
/*!*****************************************!*\
  !*** ./components/styles/PageHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline;\n\tfont-size: 8rem;\n\t@media (max-width: 509px) {\n\t\t/* font-size: 4.9rem; */\n\t\tfont-size: 16vw;\n\t}\n\t@media (min-width: 768px) {\n\t\tfont-size: 11rem;\n\t}\n\t@media (min-width: 992px) {\n\t\tfont-size: 17rem;\n\t}\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 1rem;\n\t\tright: 0;\n\t\theight: 5px;\n\t\tz-index: -1;\n\t\t@media (max-width: 767px) {\n\t\t\tbottom: 0;\n\t\t\theight: 3px;\n\t\t}\n\t}\n\t&.index {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.about {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.contact {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n\t&.projects {\n\t\t&:before {\n\t\t\tbackground: ", ";\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject(), function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.pink;
});
/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ })

})
//# sourceMappingURL=projects.js.8d69dc4deb7fa14bd3ec.hot-update.js.map