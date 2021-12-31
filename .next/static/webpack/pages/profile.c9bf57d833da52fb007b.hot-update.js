webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/profile/profile-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ProfileForm(props) {\n  _s();\n\n  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function submitHandler(event) {\n    event.preventDefault();\n    var enteredOldPassword = oldPasswordRef.current.value;\n    var enteredNewPassword = newPasswordRef.current.value; // Optional: Add Validation\n\n    props.onChangePassword({\n      oldPassword: enteredOldPassword,\n      newPassword: enteredNewPassword\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    onSubmit: submitHandler,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"new-password\",\n        children: \"New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"new-password\",\n        ref: newPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"old-password\",\n        children: \"Old Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"old-password\",\n        ref: oldPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Change Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProfileForm, \"+JTl7VdP5jjPqTUsqa02Ht0LnfA=\");\n\n_c = ProfileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProfileForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcz80MGMwIl0sIm5hbWVzIjpbIlByb2ZpbGVGb3JtIiwicHJvcHMiLCJvbGRQYXNzd29yZFJlZiIsInVzZVJlZiIsIm5ld1Bhc3N3b3JkUmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkT2xkUGFzc3dvcmQiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkTmV3UGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNsYXNzZXMiLCJmb3JtIiwiY29udHJvbCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLEVBQTdCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHRCxvREFBTSxFQUE3Qjs7QUFFQSxXQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QkEsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsa0JBQWtCLEdBQUdOLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkMsS0FBbEQ7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR1AsY0FBYyxDQUFDSyxPQUFmLENBQXVCQyxLQUFsRCxDQUo0QixDQU01Qjs7QUFFQVQsU0FBSyxDQUFDVyxnQkFBTixDQUF1QjtBQUNyQkMsaUJBQVcsRUFBRUwsa0JBRFE7QUFFckJNLGlCQUFXLEVBQUVIO0FBRlEsS0FBdkI7QUFJRDs7QUFFRCxzQkFDRTtBQUFNLGFBQVMsRUFBRUksK0RBQU8sQ0FBQ0MsSUFBekI7QUFBK0IsWUFBUSxFQUFFWCxhQUF6QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFVSwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRWI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVXLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFZjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFTRTtBQUFLLGVBQVMsRUFBRWEsK0RBQU8sQ0FBQ0csTUFBeEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQWpDUWxCLFc7O0tBQUFBLFc7QUFtQ01BLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBQcm9maWxlRm9ybShwcm9wcykge1xuICBjb25zdCBvbGRQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBuZXdQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZE9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gT3B0aW9uYWw6IEFkZCBWYWxpZGF0aW9uXG5cbiAgICBwcm9wcy5vbkNoYW5nZVBhc3N3b3JkKHtcbiAgICAgIG9sZFBhc3N3b3JkOiBlbnRlcmVkT2xkUGFzc3dvcmQsXG4gICAgICBuZXdQYXNzd29yZDogZW50ZXJlZE5ld1Bhc3N3b3JkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduZXctcGFzc3dvcmQnPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J25ldy1wYXNzd29yZCcgcmVmPXtuZXdQYXNzd29yZFJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdvbGQtcGFzc3dvcmQnPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J29sZC1wYXNzd29yZCcgcmVmPXtvbGRQYXNzd29yZFJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ })

})