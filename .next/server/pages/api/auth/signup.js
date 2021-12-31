module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, verifyPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashPassword\", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyPassword\", function() { return verifyPassword; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n  const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"hash\"])(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"compare\"])(password, hashedPassword);\n  return isValid;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsUUFBNUIsRUFBc0M7QUFDM0MsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLHFEQUFJLENBQUNGLFFBQUQsRUFBVyxFQUFYLENBQWpDO0FBQ0EsU0FBT0MsY0FBUDtBQUNEO0FBRU0sZUFBZUUsY0FBZixDQUE4QkgsUUFBOUIsRUFBd0NDLGNBQXhDLEVBQXdEO0FBQzdELFFBQU1HLE9BQU8sR0FBRyxNQUFNQyx3REFBTyxDQUFDTCxRQUFELEVBQVdDLGNBQVgsQ0FBN0I7QUFDQSxTQUFPRyxPQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://tr3ch:aTWduO9d2ulcIv0u@cluster0.etr95.mongodb.net/auth-demo?retryWrites=true&w=majority');\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGlCQUFmLEdBQW1DO0FBQ3hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLHVHQURtQixDQUFyQjtBQUlBLFNBQU9GLE1BQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly90cjNjaDphVFdkdU85ZDJ1bGNJdjB1QGNsdXN0ZXIwLmV0cjk1Lm1vbmdvZGIubmV0L2F1dGgtZGVtbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\nasync function handler(req, res) {\n  if (req.method !== 'POST') {\n    return;\n  }\n\n  const data = req.body;\n  const {\n    email,\n    password\n  } = data;\n\n  if (!email || !email.includes('@') || !password || password.trim().length < 7) {\n    res.status(422).json({\n      message: 'Invalid input - password should also be at least 7 characters long.'\n    });\n    return;\n  }\n\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"connectToDatabase\"])();\n  const db = client.db();\n  const existingUser = await db.collection('users').findOne({\n    email: email\n  });\n\n  if (existingUser) {\n    res.status(422).json({\n      message: 'User exists already!'\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_0__[\"hashPassword\"])(password);\n  const result = await db.collection('users').insertOne({\n    email: email,\n    password: hashedPassword\n  });\n  res.status(201).json({\n    message: 'Created user!'\n  });\n  client.close();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanM/YzUyZiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJ0cmltIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImRiIiwiZXhpc3RpbmdVc2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjbG9zZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFBhc3N3b3JkIiwicmVzdWx0IiwiaW5zZXJ0T25lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUNELFFBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUVBLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCSCxJQUE1Qjs7QUFFQSxNQUNFLENBQUNFLEtBQUQsSUFDQSxDQUFDQSxLQUFLLENBQUNFLFFBQU4sQ0FBZSxHQUFmLENBREQsSUFFQSxDQUFDRCxRQUZELElBR0FBLFFBQVEsQ0FBQ0UsSUFBVCxHQUFnQkMsTUFBaEIsR0FBeUIsQ0FKM0IsRUFLRTtBQUNBUixPQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsYUFBTyxFQUNMO0FBRmlCLEtBQXJCO0FBSUE7QUFDRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsaUVBQWlCLEVBQXRDO0FBRUEsUUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQVAsRUFBWDtBQUVBLFFBQU1DLFlBQVksR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxPQUF2QixDQUErQjtBQUFFYixTQUFLLEVBQUVBO0FBQVQsR0FBL0IsQ0FBM0I7O0FBRUEsTUFBSVcsWUFBSixFQUFrQjtBQUNoQmYsT0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQUMsVUFBTSxDQUFDTSxLQUFQO0FBQ0E7QUFDRDs7QUFFRCxRQUFNQyxjQUFjLEdBQUcsTUFBTUMsOERBQVksQ0FBQ2YsUUFBRCxDQUF6QztBQUVBLFFBQU1nQixNQUFNLEdBQUcsTUFBTVAsRUFBRSxDQUFDRSxVQUFILENBQWMsT0FBZCxFQUF1Qk0sU0FBdkIsQ0FBaUM7QUFDcERsQixTQUFLLEVBQUVBLEtBRDZDO0FBRXBEQyxZQUFRLEVBQUVjO0FBRjBDLEdBQWpDLENBQXJCO0FBS0FuQixLQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNBQyxRQUFNLENBQUNNLEtBQVA7QUFDRDs7QUFFY3BCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2F1dGgnO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGInO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gIGlmIChcbiAgICAhZW1haWwgfHxcbiAgICAhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxuICAgICFwYXNzd29yZCB8fFxuICAgIHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPCA3XG4gICkge1xuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdJbnZhbGlkIGlucHV0IC0gcGFzc3dvcmQgc2hvdWxkIGFsc28gYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pO1xuXG4gIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGV4aXN0cyBhbHJlYWR5IScgfSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuaW5zZXJ0T25lKHtcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdDcmVhdGVkIHVzZXIhJyB9KTtcbiAgY2xpZW50LmNsb3NlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/signup.js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });