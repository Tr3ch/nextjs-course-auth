webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/auth/auth-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction createUser(_x, _x2) {\n  return _createUser.apply(this, arguments);\n}\n\nfunction _createUser() {\n  _createUser = Object(_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n    var response, data;\n    return _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('/api/auth/signup', {\n              method: 'POST',\n              body: JSON.stringify({\n                email: email,\n                password: password\n              }),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 2:\n            response = _context2.sent;\n            _context2.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context2.sent;\n\n            if (response.ok) {\n              _context2.next = 8;\n              break;\n            }\n\n            throw new Error(data.message || 'Something went wrong!');\n\n          case 8:\n            return _context2.abrupt(\"return\", data);\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _createUser.apply(this, arguments);\n}\n\nfunction AuthForm() {\n  _s();\n\n  var emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  var passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      isLogin = _useState[0],\n      setIsLogin = _useState[1];\n\n  function switchAuthModeHandler() {\n    setIsLogin(function (prevState) {\n      return !prevState;\n    });\n  }\n\n  function submitHandler(_x3) {\n    return _submitHandler.apply(this, arguments);\n  }\n\n  function _submitHandler() {\n    _submitHandler = Object(_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var enteredEmail, enteredPassword, result, _result;\n\n      return _home_tr3ch_Desktop_WORKSPACE_Next_authentication_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              enteredEmail = emailInputRef.current.value;\n              enteredPassword = passwordInputRef.current.value;\n              7; // Optional: Add Validation\n\n              if (!isLogin) {\n                _context.next = 11;\n                break;\n              }\n\n              _context.next = 7;\n              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__[\"signIn\"])('credentials', {\n                redirect: false,\n                email: enteredEmail,\n                password: enteredPassword\n              });\n\n            case 7:\n              result = _context.sent;\n\n              if (!result.error) {}\n\n              _context.next = 21;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.next = 14;\n              return createUser(enteredEmail, enteredPassword);\n\n            case 14:\n              _result = _context.sent;\n              console.log(_result);\n              _context.next = 21;\n              break;\n\n            case 18:\n              _context.prev = 18;\n              _context.t0 = _context[\"catch\"](11);\n              console.log(_context.t0);\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[11, 18]]);\n    }));\n    return _submitHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      children: isLogin ? 'Login' : 'Sign Up'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"Your Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          required: true,\n          ref: emailInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: \"Your Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          id: \"password\",\n          required: true,\n          ref: passwordInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.actions,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          children: isLogin ? 'Login' : 'Create Account'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.toggle,\n          onClick: switchAuthModeHandler,\n          children: isLogin ? 'Create new account' : 'Login with existing account'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AuthForm, \"d5MFzbQ69dYgb5LfYbTwTxIKLCk=\");\n\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcz9lZTk4Il0sIm5hbWVzIjpbImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsImVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJwYXNzd29yZElucHV0UmVmIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZFBhc3N3b3JkIiwic2lnbkluIiwicmVkaXJlY3QiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7U0FFZUEsVTs7Ozs7NlRBQWYsa0JBQTBCQyxLQUExQixFQUFpQ0MsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDeUJDLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0Msb0JBQU0sRUFBRSxNQUR1QztBQUUvQ0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRU4scUJBQUssRUFBTEEsS0FBRjtBQUFTQyx3QkFBUSxFQUFSQTtBQUFULGVBQWYsQ0FGeUM7QUFHL0NNLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQUhzQyxhQUFyQixDQUQ5Qjs7QUFBQTtBQUNRQyxvQkFEUjtBQUFBO0FB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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQWNFO0FBQUssaUJBQVMsRUFBRW1CLDREQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBU3BCLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUFFaUIsNERBQU8sQ0FBQ0ksTUFGckI7QUFHRSxpQkFBTyxFQUFFbkIscUJBSFg7QUFBQSxvQkFLR0YsT0FBTyxHQUFHLG9CQUFILEdBQTBCO0FBTHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBbkVRTCxROztLQUFBQSxRO0FBcUVNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vYXV0aC1mb3JtLm1vZHVsZS5jc3MnO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvc2lnbnVwJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIDc7XG5cbiAgICAvLyBPcHRpb25hbDogQWRkIFZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZEVtYWlsLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gJ0xvZ2luJyA6ICdTaWduIFVwJ308L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZXF1aXJlZCByZWY9e2VtYWlsSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gJ0xvZ2luJyA6ICdDcmVhdGUgQWNjb3VudCd9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/ICdDcmVhdGUgbmV3IGFjY291bnQnIDogJ0xvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n");

/***/ })

})