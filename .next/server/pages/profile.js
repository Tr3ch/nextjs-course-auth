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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/profile/profile-form.js\";\n\n\n\nfunction ProfileForm(props) {\n  const oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function submitHandler(event) {\n    event.preventDefault();\n    const enteredOldPassword = oldPasswordRef.current.value;\n    const enteredNewPassword = newPasswordRef.current.value; // Optional: Add Validation\n\n    props.onChangePassword({\n      oldPassword: enteredOldPassword,\n      newPassword: enteredNewPassword\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    onSubmit: submitHandler,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"new-password\",\n        children: \"New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"new-password\",\n        ref: newPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"old-password\",\n        children: \"Old Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"password\",\n        id: \"old-password\",\n        ref: oldPasswordRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        children: \"Change Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzPzQwYzAiXSwibmFtZXMiOlsiUHJvZmlsZUZvcm0iLCJwcm9wcyIsIm9sZFBhc3N3b3JkUmVmIiwidXNlUmVmIiwibmV3UGFzc3dvcmRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRPbGRQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROZXdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFFBQU1DLGNBQWMsR0FBR0Msb0RBQU0sRUFBN0I7QUFDQSxRQUFNQyxjQUFjLEdBQUdELG9EQUFNLEVBQTdCOztBQUVBLFdBQVNFLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxrQkFBa0IsR0FBR04sY0FBYyxDQUFDTyxPQUFmLENBQXVCQyxLQUFsRDtBQUNBLFVBQU1DLGtCQUFrQixHQUFHUCxjQUFjLENBQUNLLE9BQWYsQ0FBdUJDLEtBQWxELENBSjRCLENBTTVCOztBQUVBVCxTQUFLLENBQUNXLGdCQUFOLENBQXVCO0FBQ3JCQyxpQkFBVyxFQUFFTCxrQkFEUTtBQUVyQk0saUJBQVcsRUFBRUg7QUFGUSxLQUF2QjtBQUlEOztBQUVELHNCQUNFO0FBQU0sYUFBUyxFQUFFSSwrREFBTyxDQUFDQyxJQUF6QjtBQUErQixZQUFRLEVBQUVYLGFBQXpDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVVLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFYjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBRVcsK0RBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUUsRUFBQyxjQUExQjtBQUF5QyxXQUFHLEVBQUVmO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVNFO0FBQUssZUFBUyxFQUFFYSwrREFBTyxDQUFDRyxNQUF4QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRWNsQiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3Byb2ZpbGUtZm9ybS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gUHJvZmlsZUZvcm0ocHJvcHMpIHtcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbmV3UGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcblxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRPbGRQYXNzd29yZCA9IG9sZFBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZE5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIE9wdGlvbmFsOiBBZGQgVmFsaWRhdGlvblxuXG4gICAgcHJvcHMub25DaGFuZ2VQYXNzd29yZCh7XG4gICAgICBvbGRQYXNzd29yZDogZW50ZXJlZE9sZFBhc3N3b3JkLFxuICAgICAgbmV3UGFzc3dvcmQ6IGVudGVyZWROZXdQYXNzd29yZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmV3LXBhc3N3b3JkJz5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSduZXctcGFzc3dvcmQnIHJlZj17bmV3UGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nb2xkLXBhc3N3b3JkJz5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdvbGQtcGFzc3dvcmQnIHJlZj17b2xkUGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG4gICAgICAgIDxidXR0b24+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ }),

/***/ "./components/profile/profile-form.module.css":
/*!****************************************************!*\
  !*** ./components/profile/profile-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"profile-form_form__3U8O4\",\n\t\"control\": \"profile-form_control__3DY65\",\n\t\"action\": \"profile-form_action__23LLQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3M/Y2E2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwicHJvZmlsZS1mb3JtX2Zvcm1fXzNVOE80XCIsXG5cdFwiY29udHJvbFwiOiBcInByb2ZpbGUtZm9ybV9jb250cm9sX18zRFk2NVwiLFxuXHRcImFjdGlvblwiOiBcInByb2ZpbGUtZm9ybV9hY3Rpb25fXzIzTExRXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.module.css\n");

/***/ }),

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/components/profile/user-profile.js\";\n\n\n\n\n\nfunction UserProfile() {\n  //   const [isLoading, setIsLoading] = useState(true);\n  //   useEffect(() => {\n  //     getSession().then((session) => {\n  //       if (!session) {\n  //         window.location.href = '/auth';\n  //       } else {\n  //         setIsLoading(false);\n  //       }\n  //     });\n  //   }, []);\n  //   if (isLoading) {\n  //     return <p className={classes.profile}>Loading...</p>;\n  //   }\n  async function changePasswordHandler(passwordData) {\n    const response = await fetch('/api/user/change-password', {\n      method: 'PATCH',\n      body: JSON.stringify(passwordData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    console.log(data);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profile,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Your User Profile\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_profile_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onChangePassword: changePasswordHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzP2I5NTAiXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJjaGFuZ2VQYXNzd29yZEhhbmRsZXIiLCJwYXNzd29yZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFDckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxpQkFBZUMscUJBQWYsQ0FBcUNDLFlBQXJDLEVBQW1EO0FBQ2pELFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsMkJBQUQsRUFBOEI7QUFDeERDLFlBQU0sRUFBRSxPQURnRDtBQUV4REMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sWUFBZixDQUZrRDtBQUd4RE8sYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFIK0MsS0FBOUIsQ0FBNUI7QUFRQSxVQUFNQyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVBQW5CO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVJLCtEQUFPLENBQUNDLE9BQTVCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHFEQUFEO0FBQWEsc0JBQWdCLEVBQUVkO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVjRCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi9wcm9maWxlLWZvcm0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi91c2VyLXByb2ZpbGUubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKCkge1xuICAvLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBnZXRTZXNzaW9uKCkudGhlbigoc2Vzc2lvbikgPT4ge1xuICAvLyAgICAgICBpZiAoIXNlc3Npb24pIHtcbiAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXV0aCc7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSwgW10pO1xuXG4gIC8vICAgaWYgKGlzTG9hZGluZykge1xuICAvLyAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmRIYW5kbGVyKHBhc3N3b3JkRGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCB7XG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXNzd29yZERhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGV9PlxuICAgICAgPGgxPllvdXIgVXNlciBQcm9maWxlPC9oMT5cbiAgICAgIDxQcm9maWxlRm9ybSBvbkNoYW5nZVBhc3N3b3JkPXtjaGFuZ2VQYXNzd29yZEhhbmRsZXJ9IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ }),

/***/ "./components/profile/user-profile.module.css":
/*!****************************************************!*\
  !*** ./components/profile/user-profile.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"profile\": \"user-profile_profile__2YJCq\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLm1vZHVsZS5jc3M/NWQ4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVcIjogXCJ1c2VyLXByb2ZpbGVfcHJvZmlsZV9fMllKQ3FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.module.css\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile/user-profile */ \"./components/profile/user-profile.js\");\n\nvar _jsxFileName = \"/home/tr3ch/Desktop/WORKSPACE/Next/authentication/pages/profile.js\";\n\n\n\nfunction ProfilePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}\n\nasync function getServerSideProps(context) {\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n    req: context.req\n  });\n\n  if (!session) {\n    return {\n      redirect: {\n        destination: '/auth',\n        permanent: false\n      }\n    };\n  }\n\n  return {\n    props: {\n      session\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiUHJvZmlsZVBhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXEiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUNyQixzQkFBTyxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFTSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFDL0JDLE9BQUcsRUFBRUgsT0FBTyxDQUFDRztBQURrQixHQUFELENBQWhDOztBQUlBLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osV0FBTztBQUNMRyxjQUFRLEVBQUU7QUFDUkMsbUJBQVcsRUFBRSxPQURMO0FBRVJDLGlCQUFTLEVBQUU7QUFGSDtBQURMLEtBQVA7QUFNRDs7QUFFRCxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUFFTjtBQUFGO0FBREYsR0FBUDtBQUdEO0FBRWNILDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlJztcblxuZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKSB7XG4gIHJldHVybiA8VXNlclByb2ZpbGUgLz47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7XG4gICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnL2F1dGgnLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzZXNzaW9uIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

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