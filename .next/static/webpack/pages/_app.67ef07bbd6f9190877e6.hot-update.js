webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/main-navigation.js":
/*!**********************************************!*\
  !*** ./components/layout/main-navigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-navigation.module.css */ \"./components/layout/main-navigation.module.css\");\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/layout/main-navigation.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction MainNavigation() {\n  _s();\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"])(),\n      _useSession2 = Object(_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  console.log(loading);\n  console.log(session);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logo,\n          children: \"Next Auth\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [!session && !loadng && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/auth\",\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/profile\",\n            children: \"Profile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MainNavigation, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"]];\n});\n\n_c = MainNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainNavigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi1uYXZpZ2F0aW9uLmpzP2MwZGUiXSwibmFtZXMiOlsiTWFpbk5hdmlnYXRpb24iLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsImhlYWRlciIsImxvZ28iLCJsb2FkbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBLG9CQUNHQyxtRUFBVSxFQURiO0FBQUE7QUFBQSxNQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxPQURROztBQUd4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFFQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUksa0VBQU8sQ0FBQ0MsTUFBM0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELGtFQUFPLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDTixPQUFELElBQVksQ0FBQ08sTUFBYixpQkFDQztBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQU1HUCxPQUFPLGlCQUNOO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBV0U7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztHQWhDUUYsYztVQUNvQkMsMkQ7OztLQURwQkQsYztBQWtDTUEsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tYWluLW5hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL21haW4tbmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTWFpbk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zb2xlLmxvZyhsb2FkaW5nKTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299Pk5leHQgQXV0aDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgeyFzZXNzaW9uICYmICFsb2FkbmcgJiYgKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYXV0aCc+TG9naW48L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvcHJvZmlsZSc+UHJvZmlsZTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/main-navigation.js\n");

/***/ })

})