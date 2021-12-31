module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/auth/auth-form.js\";\n\n\n\n\n\nasync function createUser(email, password) {\n  const response = await fetch('/api/auth/signup', {\n    method: 'POST',\n    body: JSON.stringify({\n      email,\n      password\n    }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.message || 'Something went wrong!');\n  }\n\n  return data;\n}\n\nfunction AuthForm() {\n  const emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const {\n    0: isLogin,\n    1: setIsLogin\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  function switchAuthModeHandler() {\n    setIsLogin(prevState => !prevState);\n  }\n\n  async function submitHandler(event) {\n    event.preventDefault();\n    const enteredEmail = emailInputRef.current.value;\n    const enteredPassword = passwordInputRef.current.value;\n    7; // Optional: Add Validation\n\n    if (isLogin) {\n      const result = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__[\"signIn\"])('credentials', {\n        redirect: false,\n        email: enteredEmail,\n        password: enteredPassword\n      });\n\n      if (!result.error) {\n        router.replace('/profile');\n      }\n    } else {\n      try {\n        const result = await createUser(enteredEmail, enteredPassword);\n        console.log(result);\n      } catch (error) {\n        console.log(error);\n      }\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: isLogin ? 'Login' : 'Sign Up'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"Your Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          required: true,\n          ref: emailInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: \"Your Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          id: \"password\",\n          required: true,\n          ref: passwordInputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: isLogin ? 'Login' : 'Create Account'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toggle,\n          onClick: switchAuthModeHandler,\n          children: isLogin ? 'Create new account' : 'Login with existing account'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzP2VlOTgiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwiZW1haWxJbnB1dFJlZiIsInVzZVJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJyZXN1bHQiLCJzaWduSW4iLCJyZWRpcmVjdCIsImVycm9yIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsZUFBZUEsVUFBZixDQUEwQkMsS0FBMUIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQ3pDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0JBQUQsRUFBcUI7QUFDL0NDLFVBQU0sRUFBRSxNQUR1QztBQUUvQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUCxXQUFGO0FBQVNDO0FBQVQsS0FBZixDQUZ5QztBQUcvQ08sV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFIc0MsR0FBckIsQ0FBNUI7QUFRQSxRQUFNQyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVB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QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUVxQiw0REFBTyxDQUFDSSxNQUZyQjtBQUdFLGlCQUFPLEVBQUVwQixxQkFIWDtBQUFBLG9CQUtHTCxPQUFPLEdBQUcsb0JBQUgsR0FBMEI7QUFMcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7QUFFY0osdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2F1dGgtZm9ybS5tb2R1bGUuY3NzJztcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL3NpZ251cCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgNztcblxuICAgIC8vIE9wdGlvbmFsOiBBZGQgVmFsaWRhdGlvblxuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9wcm9maWxlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZEVtYWlsLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gJ0xvZ2luJyA6ICdTaWduIFVwJ308L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZXF1aXJlZCByZWY9e2VtYWlsSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gJ0xvZ2luJyA6ICdDcmVhdGUgQWNjb3VudCd9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/ICdDcmVhdGUgbmV3IGFjY291bnQnIDogJ0xvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n");

/***/ }),

/***/ "./components/auth/auth-form.module.css":
/*!**********************************************!*\
  !*** ./components/auth/auth-form.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"auth\": \"auth-form_auth__3FfGf\",\n\t\"control\": \"auth-form_control__2m7EA\",\n\t\"actions\": \"auth-form_actions__2JT2z\",\n\t\"toggle\": \"auth-form_toggle__2PHeb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3M/NWI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1dGhcIjogXCJhdXRoLWZvcm1fYXV0aF9fM0ZmR2ZcIixcblx0XCJjb250cm9sXCI6IFwiYXV0aC1mb3JtX2NvbnRyb2xfXzJtN0VBXCIsXG5cdFwiYWN0aW9uc1wiOiBcImF1dGgtZm9ybV9hY3Rpb25zX18ySlQyelwiLFxuXHRcInRvZ2dsZVwiOiBcImF1dGgtZm9ybV90b2dnbGVfXzJQSGViXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.module.css\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/auth-form */ \"./components/auth/auth-form.js\");\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/pages/auth.js\";\n\n\n\n\n\n\nfunction AuthPage() {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"getSession\"])().then(session => {\n      if (session) {\n        router.replace('/');\n      } else {\n        setIsLoading(false);\n      }\n    });\n  }, [router]);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aFBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJ0aGVuIiwic2Vzc2lvbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLHVFQUFVLEdBQUdDLElBQWIsQ0FBbUJDLE9BQUQsSUFBYTtBQUM3QixVQUFJQSxPQUFKLEVBQWE7QUFDWEwsY0FBTSxDQUFDTSxPQUFQLENBQWUsR0FBZjtBQUNELE9BRkQsTUFFTztBQUNMUixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUlEsRUFRTixDQUFDRSxNQUFELENBUk0sQ0FBVDs7QUFVQSxNQUFJSCxTQUFKLEVBQWU7QUFDYix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQU8scUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNELHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybSc7XG5cbmZ1bmN0aW9uIEF1dGhQYWdlKCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gPEF1dGhGb3JtIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });