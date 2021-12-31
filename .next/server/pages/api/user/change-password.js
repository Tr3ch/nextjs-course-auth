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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/change-password.js");
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

/***/ "./pages/api/user/change-password.js":
/*!*******************************************!*\
  !*** ./pages/api/user/change-password.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\n\nasync function handler(req, res) {\n  if (req.method !== 'PATCH') {\n    return;\n  }\n\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__[\"getSession\"])({\n    req\n  });\n\n  if (!session) {\n    res.status(401).json({\n      message: 'Not authenticated!'\n    });\n    return;\n  }\n\n  const userEmail = session.user.email;\n  const oldPassword = req.body.oldPassword;\n  const newPassword = req.body.newPassword;\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"connectToDatabase\"])();\n  const usersCollection = client.db().collection('users');\n  const user = await usersCollection.findOne({\n    email: userEmail\n  });\n\n  if (!user) {\n    res.status(404).json({\n      message: 'User not found.'\n    });\n    client.close();\n    return;\n  }\n\n  const currentPassword = user.password;\n  const passwordsAreEqual = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"verifyPassword\"])(oldPassword, currentPassword);\n\n  if (!passwordsAreEqual) {\n    res.status(403).json({\n      message: 'Invalid password'\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"hashPassword\"])(newPassword);\n  const result = await usersCollection.updateOne({\n    email: userEmail\n  }, {\n    $set: {\n      password: hashedPassword\n    }\n  });\n  client.close();\n  res.status(200).json({\n    message: 'Password updated!'\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanM/NzQ1YyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm9sZFBhc3N3b3JkIiwiYm9keSIsIm5ld1Bhc3N3b3JkIiwiY2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJjdXJyZW50UGFzc3dvcmQiLCJwYXNzd29yZCIsInBhc3N3b3Jkc0FyZUVxdWFsIiwidmVyaWZ5UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hQYXNzd29yZCIsInJlc3VsdCIsInVwZGF0ZU9uZSIsIiRzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE9BQW5CLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFDL0JKO0FBRCtCLEdBQUQsQ0FBaEM7O0FBSUEsTUFBSSxDQUFDRyxPQUFMLEVBQWM7QUFDWkYsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVELFFBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDTSxJQUFSLENBQWFDLEtBQS9CO0FBQ0EsUUFBTUMsV0FBVyxHQUFHWCxHQUFHLENBQUNZLElBQUosQ0FBU0QsV0FBN0I7QUFDQSxRQUFNRSxXQUFXLEdBQUdiLEdBQUcsQ0FBQ1ksSUFBSixDQUFTQyxXQUE3QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxpRUFBaUIsRUFBdEM7QUFFQSxRQUFNQyxlQUFlLEdBQUdGLE1BQU0sQ0FBQ0csRUFBUCxHQUFZQyxVQUFaLENBQXVCLE9BQXZCLENBQXhCO0FBRUEsUUFBTVQsSUFBSSxHQUFHLE1BQU1PLGVBQWUsQ0FBQ0csT0FBaEIsQ0FBd0I7QUFBRVQsU0FBSyxFQUFFRjtBQUFULEdBQXhCLENBQW5COztBQUVBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1RSLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FPLFVBQU0sQ0FBQ00sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUMsZUFBZSxHQUFHWixJQUFJLENBQUNhLFFBQTdCO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTUMsZ0VBQWMsQ0FBQ2IsV0FBRCxFQUFjVSxlQUFkLENBQTlDOztBQUVBLE1BQUksQ0FBQ0UsaUJBQUwsRUFBd0I7QUFDdEJ0QixPQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNBTyxVQUFNLENBQUNNLEtBQVA7QUFDQTtBQUNEOztBQUVELFFBQU1LLGNBQWMsR0FBRyxNQUFNQyw4REFBWSxDQUFDYixXQUFELENBQXpDO0FBRUEsUUFBTWMsTUFBTSxHQUFHLE1BQU1YLGVBQWUsQ0FBQ1ksU0FBaEIsQ0FDbkI7QUFDRWxCLFNBQUssRUFBRUY7QUFEVCxHQURtQixFQUluQjtBQUNFcUIsUUFBSSxFQUFFO0FBQUVQLGNBQVEsRUFBRUc7QUFBWjtBQURSLEdBSm1CLENBQXJCO0FBU0FYLFFBQU0sQ0FBQ00sS0FBUDtBQUNBbkIsS0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBckI7QUFDRDs7QUFFY1Isc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIHZlcmlmeVBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2F1dGgnO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGInO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUEFUQ0gnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe1xuICAgIHJlcSxcbiAgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnTm90IGF1dGhlbnRpY2F0ZWQhJyB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gIGNvbnN0IG9sZFBhc3N3b3JkID0gcmVxLmJvZHkub2xkUGFzc3dvcmQ7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkID0gcmVxLmJvZHkubmV3UGFzc3dvcmQ7XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKCd1c2VycycpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQuJyB9KTtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSB1c2VyLnBhc3N3b3JkO1xuXG4gIGNvbnN0IHBhc3N3b3Jkc0FyZUVxdWFsID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQob2xkUGFzc3dvcmQsIGN1cnJlbnRQYXNzd29yZCk7XG5cbiAgaWYgKCFwYXNzd29yZHNBcmVFcXVhbCkge1xuICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgcGFzc3dvcmQnIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24udXBkYXRlT25lKFxuICAgIHtcbiAgICAgIGVtYWlsOiB1c2VyRW1haWwsXG4gICAgfSxcbiAgICB7XG4gICAgICAkc2V0OiB7IHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCB9LFxuICAgIH1cbiAgKTtcblxuICBjbGllbnQuY2xvc2UoKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnUGFzc3dvcmQgdXBkYXRlZCEnIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/change-password.js\n");

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

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ })

/******/ });