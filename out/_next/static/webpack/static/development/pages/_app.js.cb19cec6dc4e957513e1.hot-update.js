webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Analytics/index.js":
/*!*******************************************!*\
  !*** ./src/components/Analytics/index.js ***!
  \*******************************************/
/*! exports provided: initGoogleAnalytics, registerPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGoogleAnalytics", function() { return initGoogleAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPageView", function() { return registerPageView; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");

var initGoogleAnalytics = function initGoogleAnalytics() {
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize("UA-162522027-1");
};
var registerPageView = function registerPageView() {
  console.log("registerPageView -> window.location.pathname", window.location.pathname);
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].pageview(window.location.pathname);
};

/***/ })

})
//# sourceMappingURL=_app.js.cb19cec6dc4e957513e1.hot-update.js.map