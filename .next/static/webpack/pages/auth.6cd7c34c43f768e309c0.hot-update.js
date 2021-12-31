webpackHotUpdate_N_E("pages/auth",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth/auth-form */ \"./components/auth/auth-form.js\");\n\n\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/pages/auth.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AuthPage() {\n  _s();\n\n  var _useSession = Object(_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"], 2),\n      isLoading = _useSession[0],\n      setIsLoading = _useSession[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"getSession\"].then(function (session) {\n      if (session) {\n        router.replace('/');\n      }\n    });\n  }, [router]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 10\n  }, this);\n}\n\n_s(AuthPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AuthPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC5qcz9jYTRlIl0sIm5hbWVzIjpbIkF1dGhQYWdlIiwidXNlU2Vzc2lvbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJ0aGVuIiwic2Vzc2lvbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLDJLQUVnQkMsMkRBRmhCO0FBQUEsTUFFWEMsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBSWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLCtEQUFVLENBQUNDLElBQVgsQ0FBZ0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzNCLFVBQUlBLE9BQUosRUFBYTtBQUNYTCxjQUFNLENBQUNNLE9BQVAsQ0FBZSxHQUFmO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FOUSxFQU1OLENBQUNOLE1BQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQU8scUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBZFFKLFE7VUFJUUsscUQ7OztLQUpSTCxRO0FBZ0JNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRTZXNzaW9uLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtJztcblxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVNlc3Npb25cblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRTZXNzaW9uLnRoZW4oKHNlc3Npb24pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gPEF1dGhGb3JtIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ })

})