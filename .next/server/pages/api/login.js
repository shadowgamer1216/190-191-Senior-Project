"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@hapi/iron");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/lib/auth-cookies.js":
/*!*********************************!*\
  !*** ./src/lib/auth-cookies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLE1BQU07UUFDTkMsVUFBVTtJQUNaO0lBRUFYLElBQUlZLFNBQVMsQ0FBQyxjQUFjVjtBQUM5QixDQUFDO0FBRU0sU0FBU1csa0JBQWtCYixHQUFHLEVBQUU7SUFDckMsTUFBTUUsU0FBU1AsaURBQVNBLENBQUNFLFlBQVksSUFBSTtRQUN2Q00sUUFBUSxDQUFDO1FBQ1RPLE1BQU07SUFDUjtJQUVBVixJQUFJWSxTQUFTLENBQUMsY0FBY1Y7QUFDOUIsQ0FBQztBQUVNLFNBQVNZLGFBQWFDLEdBQUcsRUFBRTtJQUNoQyxxREFBcUQ7SUFDckQsSUFBSUEsSUFBSUMsT0FBTyxFQUFFLE9BQU9ELElBQUlDLE9BQU87SUFFbkMsNkNBQTZDO0lBQzdDLE1BQU1kLFNBQVNhLElBQUlFLE9BQU8sRUFBRWY7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNnQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDbkIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xuXG5jb25zdCBUT0tFTl9OQU1FID0gJ3Rva2VuJ1xuXG5leHBvcnQgY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiA4IC8vIDggaG91cnNcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIHRva2VuLCB7XG4gICAgbWF4QWdlOiBNQVhfQUdFLFxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIHBhdGg6ICcvJyxcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gIH0pXG5cbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuQ29va2llKHJlcykge1xuICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgJycsIHtcbiAgICBtYXhBZ2U6IC0xLFxuICAgIHBhdGg6ICcvJyxcbiAgfSlcblxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xuICAvLyBGb3IgQVBJIFJvdXRlcyB3ZSBkb24ndCBuZWVkIHRvIHBhcnNlIHRoZSBjb29raWVzLlxuICBpZiAocmVxLmNvb2tpZXMpIHJldHVybiByZXEuY29va2llc1xuXG4gIC8vIEZvciBwYWdlcyB3ZSBkbyBuZWVkIHRvIHBhcnNlIHRoZSBjb29raWVzLlxuICBjb25zdCBjb29raWUgPSByZXEuaGVhZGVycz8uY29va2llXG4gIHJldHVybiBwYXJzZShjb29raWUgfHwgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkNvb2tpZShyZXEpIHtcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpXG4gIHJldHVybiBjb29raWVzW1RPS0VOX05BTUVdXG59Il0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    console.log(\"TOKEN_SECRET:\", TOKEN_SECRET);\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    console.log(\"session res \" + res.status);\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMkM7QUFFeEUsTUFBTUksZUFBZUMsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGdCQUFnQkMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFFbEQsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixvRUFBb0U7SUFDcEUsTUFBTUMsTUFBTTtRQUFFLEdBQUdKLE9BQU87UUFBRUM7UUFBV0ksUUFBUWIsa0RBQU9BO0lBQUM7SUFDckRjLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJaO0lBRTdCLE1BQU1hLFFBQVEsTUFBTWpCLHNEQUFTLENBQUNhLEtBQUtULGNBQWNKLDREQUFhO0lBQzlEZSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCUixJQUFJWSxNQUFNO0lBRXZDbEIsNkRBQWNBLENBQUNNLEtBQUtTO0FBQ3RCLENBQUM7QUFFTSxlQUFlSSxnQkFBZ0JDLEdBQUcsRUFBRTtJQUN6QyxNQUFNTCxRQUFRZCw2REFBY0EsQ0FBQ21CO0lBRTdCLElBQUksQ0FBQ0wsT0FBTztJQUVaLE1BQU1SLFVBQVUsTUFBTVQsd0RBQVcsQ0FBQ2lCLE9BQU9iLGNBQWNKLDREQUFhO0lBQ3BFLE1BQU13QixZQUFZZixRQUFRQyxTQUFTLEdBQUdELFFBQVFLLE1BQU0sR0FBRztJQUV2RCw4Q0FBOEM7SUFDOUMsSUFBSUgsS0FBS0MsR0FBRyxLQUFLWSxXQUFXO1FBQzFCLE1BQU0sSUFBSUMsTUFBTSxtQkFBa0I7SUFDcEMsQ0FBQztJQUVELE9BQU9oQjtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL2F1dGguanM/ODdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXJvbiBmcm9tICdAaGFwaS9pcm9uJ1xuaW1wb3J0IHsgTUFYX0FHRSwgc2V0VG9rZW5Db29raWUsIGdldFRva2VuQ29va2llIH0gZnJvbSAnLi9hdXRoLWNvb2tpZXMnXG5cbmNvbnN0IFRPS0VOX1NFQ1JFVCA9IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0TG9naW5TZXNzaW9uKHJlcywgc2Vzc2lvbikge1xuXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IERhdGUubm93KClcbiAgLy8gQ3JlYXRlIGEgc2Vzc2lvbiBvYmplY3Qgd2l0aCBhIG1heCBhZ2UgdGhhdCB3ZSBjYW4gdmFsaWRhdGUgbGF0ZXJcbiAgY29uc3Qgb2JqID0geyAuLi5zZXNzaW9uLCBjcmVhdGVkQXQsIG1heEFnZTogTUFYX0FHRSB9XG4gIGNvbnNvbGUubG9nKFwiVE9LRU5fU0VDUkVUOlwiLCBUT0tFTl9TRUNSRVQpO1xuXG4gIGNvbnN0IHRva2VuID0gYXdhaXQgSXJvbi5zZWFsKG9iaiwgVE9LRU5fU0VDUkVULCBJcm9uLmRlZmF1bHRzKVxuICBjb25zb2xlLmxvZyhcInNlc3Npb24gcmVzIFwiICsgcmVzLnN0YXR1cylcblxuICBzZXRUb2tlbkNvb2tpZShyZXMsIHRva2VuKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9naW5TZXNzaW9uKHJlcSkge1xuICBjb25zdCB0b2tlbiA9IGdldFRva2VuQ29va2llKHJlcSlcblxuICBpZiAoIXRva2VuKSByZXR1cm5cblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgSXJvbi51bnNlYWwodG9rZW4sIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcbiAgY29uc3QgZXhwaXJlc0F0ID0gc2Vzc2lvbi5jcmVhdGVkQXQgKyBzZXNzaW9uLm1heEFnZSAqIDEwMDBcblxuICAvLyBWYWxpZGF0ZSB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBzZXNzaW9uXG4gIGlmIChEYXRlLm5vdygpID4gZXhwaXJlc0F0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXNzaW9uIGV4cGlyZWQnKVxuICB9XG5cbiAgcmV0dXJuIHNlc3Npb25cbn0iXSwibmFtZXMiOlsiSXJvbiIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsImdldFRva2VuQ29va2llIiwiVE9LRU5fU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNldExvZ2luU2Vzc2lvbiIsInJlcyIsInNlc3Npb24iLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwib2JqIiwibWF4QWdlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwic3RhdHVzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/password-local.js":
/*!***********************************!*\
  !*** ./src/lib/password-local.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStrategy\": () => (/* binding */ localStrategy)\n/* harmony export */ });\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_1__]);\n_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_0___default().Strategy)(function(username, password, done) {\n    const user = (0,_user__WEBPACK_IMPORTED_MODULE_1__.findUser)({\n        username\n    }).then((user)=>{\n        if (user && (0,_user__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, password)) {\n            done(null, user);\n        } else {\n            done(new Error(\"Invalid username and password combination\"));\n        }\n    }).catch((error)=>{\n        done(error);\n    });\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQUlILGdFQUFjLENBQUMsU0FDOUNLLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0o7SUFHQSxNQUFNQyxPQUFPUCwrQ0FBUUEsQ0FBQztRQUFFSTtJQUFTLEdBQzlCSSxJQUFJLENBQUMsQ0FBQ0QsT0FBUztRQUdkLElBQUlBLFFBQVFOLHVEQUFnQkEsQ0FBQ00sTUFBTUYsV0FBVztZQUU1Q0MsS0FBSyxJQUFJLEVBQUVDO1FBQ2IsT0FBTztZQUVMRCxLQUFLLElBQUlHLE1BQU07UUFDakIsQ0FBQztJQUNILEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1FBRWhCTCxLQUFLSztJQUNQO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9saWIvcGFzc3dvcmQtbG9jYWwuanM/ZWM5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYWwgZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBmaW5kVXNlciwgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJy4vdXNlcidcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RyYXRlZ3kgPSBuZXcgTG9jYWwuU3RyYXRlZ3koZnVuY3Rpb24gKFxuICB1c2VybmFtZSxcbiAgcGFzc3dvcmQsXG4gIGRvbmVcbikge1xuIFxuXG4gIGNvbnN0IHVzZXIgPSBmaW5kVXNlcih7IHVzZXJuYW1lIH0pXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcblxuXG4gICAgICBpZiAodXNlciAmJiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKSkge1xuXG4gICAgICAgIGRvbmUobnVsbCwgdXNlcilcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZG9uZShuZXcgRXJyb3IoJ0ludmFsaWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGNvbWJpbmF0aW9uJykpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG5cbiAgICAgIGRvbmUoZXJyb3IpXG4gICAgfSlcbn0pIl0sIm5hbWVzIjpbIkxvY2FsIiwiZmluZFVzZXIiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwibG9jYWxTdHJhdGVneSIsIlN0cmF0ZWd5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJ1c2VyIiwidGhlbiIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/password-local.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password1!\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\n * User methods. The example doesn't contain a DB, but for real applications you must use a\n * db here, such as MongoDB, Fauna, SQL, etc.\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUUMsR0FBRyxDQUFDLGlDQUFpQytCLEtBQUssQ0FBQyxFQUFFLENBQUNuQixRQUFRO0lBQzlEYixRQUFRQyxHQUFHLENBQUMsbUJBQW1CbUM7SUFDL0IsTUFBTUMsWUFBWXpELHdEQUNMLENBQUN3RCxlQUFlSixLQUFLLENBQUMsRUFBRSxDQUFDZixJQUFJLEVBQUUsTUFBTSxJQUFJLFVBQ25EUSxRQUFRLENBQUM7SUFFWixNQUFNYSxpQkFBaUJOLEtBQUssQ0FBQyxFQUFFLENBQUNqQixJQUFJLEtBQUtzQjtJQUN6Q3JDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZcUM7SUFDeEIsT0FBT0E7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi91c2VyLmpzP2VmZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpXG5jb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBteXNxbCA9IHJlcXVpcmUoXCJteXNxbDJcIik7XG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbnZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbnZhciBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcbnZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcImRldmVsb3BtZW50XCI7XG52YXIgZGIgPSB7fTtcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXG4gICAgJ2Fic29sdXRlbWVkaWEnLFxuICAgICdyb290JyxcbiAgICAncGFzc3dvcmQxIScsXG4gICAgIHtcbiAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgICBkaWFsZWN0OiAnbXlzcWwnXG4gICAgIH1cbiAgICk7XG4gICBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xuIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTogJywgZXJyb3IpO1xuIH0pO1xuXG4vKipcbiAqIFVzZXIgbWV0aG9kcy4gVGhlIGV4YW1wbGUgZG9lc24ndCBjb250YWluIGEgREIsIGJ1dCBmb3IgcmVhbCBhcHBsaWNhdGlvbnMgeW91IG11c3QgdXNlIGFcbiAqIGRiIGhlcmUsIHN1Y2ggYXMgTW9uZ29EQiwgRmF1bmEsIFNRTCwgZXRjLlxuICovXG5cbiAgICB2YXIgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXInLCB7XG5cbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuXG4gICAgICAgIGhhc2g6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgc2FsdDoge1xuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICAgICAgICBcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IFVzZXIuc3luYygpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOaWNlISBEYXRhYmFzZSBsb29rcyBmaW5lJylcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXG59KTtcbiB9KSgpO1xuXG5cblxuXG4vL2NvbnN0IHVzZXJzID0gW3VzZXJdXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgLy8gSGVyZSB5b3Ugc2hvdWxkIGNyZWF0ZSB0aGUgdXNlciBhbmQgc2F2ZSB0aGUgc2FsdCBhbmQgaGFzaGVkIHBhc3N3b3JkIChzb21lIGRicyBtYXkgaGF2ZVxuICAvLyBhdXRoZW50aWNhdGlvbiBtZXRob2RzIHRoYXQgd2lsbCBkbyBpdCBmb3IgeW91IHNvIHlvdSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGl0KTpcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgdXNlcm5hbWUsXG4gICAgaGFzaCxcbiAgICBzYWx0LFxuICB9KTtcblxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICBcblxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cbn1cblxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9IH0pO1xuICByZXR1cm4gdXNlcnM7XG59XG5cbi8vIENvbXBhcmUgdGhlIHBhc3N3b3JkIG9mIGFuIGFscmVhZHkgZmV0Y2hlZCB1c2VyICh1c2luZyBgZmluZFVzZXJgKSBhbmQgY29tcGFyZSB0aGVcbi8vIHBhc3N3b3JkIGZvciBhIHBvdGVudGlhbCBtYXRjaFxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodXNlcnMsIGlucHV0UGFzc3dvcmQpIHtcbiAgY29uc29sZS5sb2coJ1ZhbGlkYXRpbmcgcGFzc3dvcmQgZm9yIHVzZXI6JywgdXNlcnNbMF0udXNlcm5hbWUpO1xuICBjb25zb2xlLmxvZygnSW5wdXQgcGFzc3dvcmQ6JywgaW5wdXRQYXNzd29yZCk7XG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXJzWzBdLnNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcbiAgICAudG9TdHJpbmcoJ2hleCcpXG5cbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2Vyc1swXS5oYXNoID09PSBpbnB1dEhhc2hcbiAgY29uc29sZS5sb2coXCJtYXRjaDogXCIgKyBwYXNzd29yZHNNYXRjaClcbiAgcmV0dXJuIHBhc3N3b3Jkc01hdGNoXG59XG4iXSwibmFtZXMiOlsiY3J5cHRvIiwidjQiLCJ1dWlkdjQiLCJib2R5UGFyc2VyIiwicmVxdWlyZSIsImV4cHJlc3MiLCJhcHAiLCJteXNxbCIsImNvcnMiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJlbnYiLCJwcm9jZXNzIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIlVzZXIiLCJkZWZpbmUiLCJpZCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJjcmVhdGVkQXQiLCJEQVRFIiwidXNlcm5hbWUiLCJURVhUIiwiaGFzaCIsIlNUUklORyIsInNhbHQiLCJVVUlEIiwiYWxsb3dOdWxsIiwic3luYyIsImVyciIsImNyZWF0ZVVzZXIiLCJwYXNzd29yZCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYmtkZjJTeW5jIiwidXNlciIsImNyZWF0ZSIsIkRhdGUiLCJub3ciLCJmaW5kVXNlciIsInVzZXJzIiwiZmluZEFsbCIsIndoZXJlIiwidmFsaWRhdGVQYXNzd29yZCIsImlucHV0UGFzc3dvcmQiLCJpbnB1dEhhc2giLCJwYXNzd29yZHNNYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _lib_password_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/password-local */ \"(api)/./src/lib/password-local.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst authenticate = (method, req, res)=>new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(method, {\n            session: false\n        }, (error, token)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(token);\n            }\n        })(req, res, ()=>{}, {\n            password: req.body.password\n        });\n    });\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_lib_password_local__WEBPACK_IMPORTED_MODULE_2__.localStrategy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize()).post(async (req, res)=>{\n    try {\n        const user = await authenticate(\"local\", req, res);\n        // session is the payload to save in the token, it may contain basic info about the user\n        const session = {\n            ...user\n        };\n        console.log(\"session user: \" + session[0].username);\n        console.log(\"res \" + res.statusCode);\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setLoginSession)(res, session);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(\"I am the error \" + error) //This is giving me \"empty password\"\n        ;\n        res.status(401).send(error.message);\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ2tCO0FBQ1I7QUFFaEQsTUFBTUksZUFBZSxDQUFDQyxRQUFRQyxLQUFLQyxNQUNqQyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDL0JWLDREQUFxQixDQUFDSyxRQUFRO1lBQUVNLFNBQVMsS0FBSztRQUFDLEdBQUcsQ0FBQ0MsT0FBT0MsUUFBVTtZQUNsRSxJQUFJRCxPQUFPO2dCQUNURixPQUFPRTtZQUNULE9BQU87Z0JBQ0xILFFBQVFJO1lBQ1YsQ0FBQztRQUNILEdBQUdQLEtBQUtDLEtBQUssSUFBTSxDQUFDLEdBQUk7WUFBRU8sVUFBVVIsSUFBSVMsSUFBSSxDQUFDRCxRQUFRO1FBQUM7SUFDeEQ7QUFFRmQsbURBQVksQ0FBQ0UsOERBQWFBO0FBRTFCLGlFQUFlRCx3REFBV0EsR0FDdkJlLEdBQUcsQ0FBQ2hCLDBEQUFtQixJQUN2QmtCLElBQUksQ0FBQyxPQUFPWixLQUFLQyxNQUFRO0lBQ3hCLElBQUk7UUFDRixNQUFNWSxPQUFPLE1BQU1mLGFBQWEsU0FBU0UsS0FBS0M7UUFDOUMsd0ZBQXdGO1FBQ3hGLE1BQU1JLFVBQVU7WUFBQyxHQUFHUSxJQUFJO1FBQUE7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWLE9BQU8sQ0FBQyxFQUFFLENBQUNXLFFBQVE7UUFDbERGLFFBQVFDLEdBQUcsQ0FBQyxTQUFTZCxJQUFJZ0IsVUFBVTtRQUtuQyxNQUFNcEIsMERBQWVBLENBQUNJLEtBQUtJO1FBRTNCSixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNLElBQUk7UUFBQztJQUNwQyxFQUFFLE9BQU9kLE9BQU87UUFDZFEsUUFBUVIsS0FBSyxDQUFDLG9CQUFvQkEsT0FBTyxvQ0FBb0M7O1FBQzdFTCxJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2IsTUFBTWUsT0FBTztJQUNwQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcbmltcG9ydCB7IGxvY2FsU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvcGFzc3dvcmQtbG9jYWwnXG5pbXBvcnQgeyBzZXRMb2dpblNlc3Npb24gfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcblxuY29uc3QgYXV0aGVudGljYXRlID0gKG1ldGhvZCwgcmVxLCByZXMpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUobWV0aG9kLCB7IHNlc3Npb246IGZhbHNlIH0sIChlcnJvciwgdG9rZW4pID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHRva2VuKVxuICAgICAgfVxuICAgIH0pKHJlcSwgcmVzLCAoKSA9PiB7fSAsIHsgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkIH0pXG4gIH0pXG5cbnBhc3Nwb3J0LnVzZShsb2NhbFN0cmF0ZWd5KVxuXG5leHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdCgpXG4gIC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKVxuICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0ZSgnbG9jYWwnLCByZXEsIHJlcylcbiAgICAgIC8vIHNlc3Npb24gaXMgdGhlIHBheWxvYWQgdG8gc2F2ZSBpbiB0aGUgdG9rZW4sIGl0IG1heSBjb250YWluIGJhc2ljIGluZm8gYWJvdXQgdGhlIHVzZXJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSB7Li4udXNlcn07IFxuICAgICAgY29uc29sZS5sb2coXCJzZXNzaW9uIHVzZXI6IFwiICsgc2Vzc2lvblswXS51c2VybmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzIFwiICsgcmVzLnN0YXR1c0NvZGUpXG5cblxuXG5cbiAgICAgIGF3YWl0IHNldExvZ2luU2Vzc2lvbihyZXMsIHNlc3Npb24pXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZG9uZTogdHJ1ZSB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSSBhbSB0aGUgZXJyb3IgXCIgKyBlcnJvcikgLy9UaGlzIGlzIGdpdmluZyBtZSBcImVtcHR5IHBhc3N3b3JkXCJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9KSJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsIm5leHRDb25uZWN0IiwibG9jYWxTdHJhdGVneSIsInNldExvZ2luU2Vzc2lvbiIsImF1dGhlbnRpY2F0ZSIsIm1ldGhvZCIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2Vzc2lvbiIsImVycm9yIiwidG9rZW4iLCJwYXNzd29yZCIsImJvZHkiLCJ1c2UiLCJpbml0aWFsaXplIiwicG9zdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwic2VuZCIsImRvbmUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.js"));
module.exports = __webpack_exports__;

})();