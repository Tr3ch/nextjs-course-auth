webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/profile/profile-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ProfileForm(props) {\n  _s();\n\n  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function submitHandler(event) {\n    event.preventDefault();\n    var enteredOldPassword = oldPasswordRef.current.value;\n    var enteredNewPassword = newPasswordRef.current.value; // Optional: Add Validation\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    onSubmit: submitHandler,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"new-password\",\n        children: \"New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"new-password\",\n        ref: newPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"old-password\",\n        children: \"Old Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"old-password\",\n        ref: oldPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Change Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProfileForm, \"+JTl7VdP5jjPqTUsqa02Ht0LnfA=\");\n\n_c = ProfileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProfileForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcz80MGMwIl0sIm5hbWVzIjpbIlByb2ZpbGVGb3JtIiwicHJvcHMiLCJvbGRQYXNzd29yZFJlZiIsInVzZVJlZiIsIm5ld1Bhc3N3b3JkUmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkT2xkUGFzc3dvcmQiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkTmV3UGFzc3dvcmQiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Qsb0RBQU0sRUFBN0I7O0FBRUEsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLGtCQUFrQixHQUFHTixjQUFjLENBQUNPLE9BQWYsQ0FBdUJDLEtBQWxEO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdQLGNBQWMsQ0FBQ0ssT0FBZixDQUF1QkMsS0FBbEQsQ0FKNEIsQ0FNNUI7QUFJRDs7QUFFRCxzQkFDRTtBQUFNLGFBQVMsRUFBRUUsK0RBQU8sQ0FBQ0MsSUFBekI7QUFBK0IsWUFBUSxFQUFFUixhQUF6QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFTywrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRVY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVRLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFWjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFTRTtBQUFLLGVBQVMsRUFBRVUsK0RBQU8sQ0FBQ0csTUFBeEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQS9CUWYsVzs7S0FBQUEsVztBQWlDTUEsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKHByb3BzKSB7XG4gIGNvbnN0IG9sZFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG5cbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkT2xkUGFzc3dvcmQgPSBvbGRQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWROZXdQYXNzd29yZCA9IG5ld1Bhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBPcHRpb25hbDogQWRkIFZhbGlkYXRpb25cblxuXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmV3LXBhc3N3b3JkJz5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSduZXctcGFzc3dvcmQnIHJlZj17bmV3UGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nb2xkLXBhc3N3b3JkJz5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdvbGQtcGFzc3dvcmQnIHJlZj17b2xkUGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG4gICAgICAgIDxidXR0b24+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ })

})