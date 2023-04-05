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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        domain: \"localhost\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7SUFFQVosSUFBSWEsU0FBUyxDQUFDLGNBQWNYO0FBQzlCLENBQUM7QUFFTSxTQUFTWSxrQkFBa0JkLEdBQUcsRUFBRTtJQUNyQyxNQUFNRSxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWSxJQUFJO1FBQ3ZDTSxRQUFRLENBQUM7UUFDVFEsTUFBTTtJQUNSO0lBRUFYLElBQUlhLFNBQVMsQ0FBQyxjQUFjWDtBQUM5QixDQUFDO0FBRU0sU0FBU2EsYUFBYUMsR0FBRyxFQUFFO0lBQ2hDLHFEQUFxRDtJQUNyRCxJQUFJQSxJQUFJQyxPQUFPLEVBQUUsT0FBT0QsSUFBSUMsT0FBTztJQUVuQyw2Q0FBNkM7SUFDN0MsTUFBTWYsU0FBU2MsSUFBSUUsT0FBTyxFQUFFaEI7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNpQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDcEIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xyXG5cclxuY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfQUdFID0gNjAgKiA2MCAqIDggLy8gOCBob3Vyc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcclxuICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgdG9rZW4sIHtcclxuICAgIG1heEFnZTogTUFYX0FHRSxcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXHJcbiAgICBodHRwT25seTogdHJ1ZSxcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIGRvbWFpbjogJ2xvY2FsaG9zdCcsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgfSlcclxuXHJcbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuQ29va2llKHJlcykge1xyXG4gIGNvbnN0IGNvb2tpZSA9IHNlcmlhbGl6ZShUT0tFTl9OQU1FLCAnJywge1xyXG4gICAgbWF4QWdlOiAtMSxcclxuICAgIHBhdGg6ICcvJyxcclxuICB9KVxyXG5cclxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIC8vIEZvciBBUEkgUm91dGVzIHdlIGRvbid0IG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgaWYgKHJlcS5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXNcclxuXHJcbiAgLy8gRm9yIHBhZ2VzIHdlIGRvIG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnM/LmNvb2tpZVxyXG4gIHJldHVybiBwYXJzZShjb29raWUgfHwgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkNvb2tpZShyZXEpIHtcclxuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSlcclxuICByZXR1cm4gY29va2llc1tUT0tFTl9OQU1FXVxyXG59Il0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJkb21haW4iLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMkM7QUFFeEUsTUFBTUksZUFBZUMsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGdCQUFnQkMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFFbEQsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixvRUFBb0U7SUFDcEUsTUFBTUMsTUFBTTtRQUFFLEdBQUdKLE9BQU87UUFBRUM7UUFBV0ksUUFBUWIsa0RBQU9BO0lBQUM7SUFFckQsTUFBTWMsUUFBUSxNQUFNZixzREFBUyxDQUFDYSxLQUFLVCxjQUFjSiw0REFBYTtJQUk5REUsNkRBQWNBLENBQUNNLEtBQUtPO0FBQ3RCLENBQUM7QUFFTSxlQUFlRyxnQkFBZ0JDLEdBQUcsRUFBRTtJQUN6QyxNQUFNSixRQUFRWiw2REFBY0EsQ0FBQ2dCO0lBRTdCLElBQUksQ0FBQ0osT0FBTztJQUVaLE1BQU1OLFVBQVUsTUFBTVQsd0RBQVcsQ0FBQ2UsT0FBT1gsY0FBY0osNERBQWE7SUFDcEUsTUFBTXFCLFlBQVlaLFFBQVFDLFNBQVMsR0FBR0QsUUFBUUssTUFBTSxHQUFHO0lBRXZELDhDQUE4QztJQUM5QyxJQUFJSCxLQUFLQyxHQUFHLEtBQUtTLFdBQVc7UUFDMUIsTUFBTSxJQUFJQyxNQUFNLG1CQUFrQjtJQUNwQyxDQUFDO0lBRUQsT0FBT2I7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLmpzPzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElyb24gZnJvbSAnQGhhcGkvaXJvbidcclxuaW1wb3J0IHsgTUFYX0FHRSwgc2V0VG9rZW5Db29raWUsIGdldFRva2VuQ29va2llIH0gZnJvbSAnLi9hdXRoLWNvb2tpZXMnXHJcblxyXG5jb25zdCBUT0tFTl9TRUNSRVQgPSBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRMb2dpblNlc3Npb24ocmVzLCBzZXNzaW9uKSB7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IERhdGUubm93KClcclxuICAvLyBDcmVhdGUgYSBzZXNzaW9uIG9iamVjdCB3aXRoIGEgbWF4IGFnZSB0aGF0IHdlIGNhbiB2YWxpZGF0ZSBsYXRlclxyXG4gIGNvbnN0IG9iaiA9IHsgLi4uc2Vzc2lvbiwgY3JlYXRlZEF0LCBtYXhBZ2U6IE1BWF9BR0UgfVxyXG5cclxuICBjb25zdCB0b2tlbiA9IGF3YWl0IElyb24uc2VhbChvYmosIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcclxuXHJcblxyXG5cclxuICBzZXRUb2tlbkNvb2tpZShyZXMsIHRva2VuKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9naW5TZXNzaW9uKHJlcSkge1xyXG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW5Db29raWUocmVxKVxyXG5cclxuICBpZiAoIXRva2VuKSByZXR1cm5cclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IElyb24udW5zZWFsKHRva2VuLCBUT0tFTl9TRUNSRVQsIElyb24uZGVmYXVsdHMpXHJcbiAgY29uc3QgZXhwaXJlc0F0ID0gc2Vzc2lvbi5jcmVhdGVkQXQgKyBzZXNzaW9uLm1heEFnZSAqIDEwMDBcclxuXHJcbiAgLy8gVmFsaWRhdGUgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgc2Vzc2lvblxyXG4gIGlmIChEYXRlLm5vdygpID4gZXhwaXJlc0F0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nlc3Npb24gZXhwaXJlZCcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2Vzc2lvblxyXG59Il0sIm5hbWVzIjpbIklyb24iLCJNQVhfQUdFIiwic2V0VG9rZW5Db29raWUiLCJnZXRUb2tlbkNvb2tpZSIsIlRPS0VOX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJzZXRMb2dpblNlc3Npb24iLCJyZXMiLCJzZXNzaW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIm9iaiIsIm1heEFnZSIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/password-local.js":
/*!***********************************!*\
  !*** ./src/lib/password-local.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStrategy\": () => (/* binding */ localStrategy)\n/* harmony export */ });\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"(api)/./src/lib/user.js\");\n\n\nconst localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_0___default().Strategy)(function(username, password, done) {\n    if (username != undefined) {\n        const user = (0,_user__WEBPACK_IMPORTED_MODULE_1__.findUser)({\n            username\n        }).then((user)=>{\n            if (user && (0,_user__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, password)) {\n                done(null, user);\n            } else {\n                done(new Error(\"Invalid username and password combination\"));\n            }\n        }).catch((error)=>{\n            done(error);\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQUlILGdFQUFjLENBQUMsU0FDOUNLLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0o7SUFFRixJQUFJRixZQUFZRyxXQUFVO1FBQ3hCLE1BQU1DLE9BQU9SLCtDQUFRQSxDQUFDO1lBQUVJO1FBQVMsR0FDOUJLLElBQUksQ0FBQyxDQUFDRCxPQUFTO1lBR2QsSUFBSUEsUUFBUVAsdURBQWdCQSxDQUFDTyxNQUFNSCxXQUFXO2dCQUU1Q0MsS0FBSyxJQUFJLEVBQUVFO1lBQ2IsT0FBTztnQkFFTEYsS0FBSyxJQUFJSSxNQUFNO1lBQ2pCLENBQUM7UUFDSCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUVoQk4sS0FBS007UUFDUDtJQUNGLENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9wYXNzd29yZC1sb2NhbC5qcz9lYzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbCBmcm9tICdwYXNzcG9ydC1sb2NhbCdcclxuaW1wb3J0IHsgZmluZFVzZXIsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuL3VzZXInXHJcblxyXG5leHBvcnQgY29uc3QgbG9jYWxTdHJhdGVneSA9IG5ldyBMb2NhbC5TdHJhdGVneShmdW5jdGlvbiAoXHJcbiAgdXNlcm5hbWUsXHJcbiAgcGFzc3dvcmQsXHJcbiAgZG9uZVxyXG4pIHtcclxuIFxyXG5pZiAodXNlcm5hbWUgIT0gdW5kZWZpbmVkKXtcclxuICBjb25zdCB1c2VyID0gZmluZFVzZXIoeyB1c2VybmFtZSB9KVxyXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcclxuXHJcblxyXG4gICAgICBpZiAodXNlciAmJiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKSkge1xyXG5cclxuICAgICAgICBkb25lKG51bGwsIHVzZXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRvbmUobmV3IEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBjb21iaW5hdGlvbicpKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cclxuICAgICAgZG9uZShlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJMb2NhbCIsImZpbmRVc2VyIiwidmFsaWRhdGVQYXNzd29yZCIsImxvY2FsU3RyYXRlZ3kiLCJTdHJhdGVneSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkb25lIiwidW5kZWZpbmVkIiwidXNlciIsInRoZW4iLCJFcnJvciIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/password-local.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\nvar User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.STRING,\n        allowNull: false\n    },\n    viewOnly: {\n        type: Sequelize.BOOLEAN,\n        defaultValue: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password , viewOnly  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt,\n        viewOnly\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    console.log(\"Username: \", username);\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1QsQ0FBQztBQUVELHFGQUFxRjtBQUNyRixpQ0FBaUM7QUFDMUIsU0FBU0csaUJBQWlCSCxLQUFLLEVBQUVJLGFBQWEsRUFBRTtJQUNyRHRDLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNpQyxLQUFLLENBQUMsRUFBRSxDQUFDckIsUUFBUTtJQUM5RGIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQnFDO0lBQy9CLE1BQU1DLFlBQVl6RCx3REFDTCxDQUFDd0QsZUFBZUosS0FBSyxDQUFDLEVBQUUsQ0FBQ2pCLElBQUksRUFBRSxNQUFNLElBQUksVUFDbkRVLFFBQVEsQ0FBQztJQUVaLE1BQU1hLGlCQUFpQk4sS0FBSyxDQUFDLEVBQUUsQ0FBQ25CLElBQUksS0FBS3dCO0lBQ3pDdkMsUUFBUUMsR0FBRyxDQUFDLFlBQVl1QztJQUN4QixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuXHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGRiID0ge307XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnYWJzb2x1dGVtZWRpYScsXHJcbiAgICAncm9vdCcsXHJcbiAgICAncGFzc3dvcmQnLFxyXG4gICAgIHtcclxuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgZGlhbGVjdDogJ215c3FsJ1xyXG4gICAgIH1cclxuICAgKTtcclxuICAgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6ICcsIGVycm9yKTtcclxuIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXInLCB7XHJcblxyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3JlYXRlZEF0OiB7XHJcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFzaDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzYWx0OiB7XHJcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxyXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlld09ubHk6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBVc2VyLnN5bmMoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXHJcbn0pO1xyXG4gfSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCB2aWV3T25seSB9KSB7XHJcbiAgLy8gSGVyZSB5b3Ugc2hvdWxkIGNyZWF0ZSB0aGUgdXNlciBhbmQgc2F2ZSB0aGUgc2FsdCBhbmQgaGFzaGVkIHBhc3N3b3JkIChzb21lIGRicyBtYXkgaGF2ZVxyXG4gIC8vIGF1dGhlbnRpY2F0aW9uIG1ldGhvZHMgdGhhdCB3aWxsIGRvIGl0IGZvciB5b3Ugc28geW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaXQpOlxyXG4gIGNvbnN0IHNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKVxyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKHBhc3N3b3JkLCBzYWx0LCAxMDAwLCA2NCwgJ3NoYTUxMicpXHJcbiAgICAudG9TdHJpbmcoJ2hleCcpXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgaGFzaCxcclxuICAgIHNhbHQsXHJcbiAgICB2aWV3T25seVxyXG4gIH0pO1xyXG5cclxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxyXG4gIFxyXG5cclxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cclxufVxyXG5cclxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFVzZXIoeyB1c2VybmFtZSB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJVc2VybmFtZTogXCIsIHVzZXJuYW1lKTtcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9IH0pO1xyXG4gIHJldHVybiB1c2VycztcclxufVxyXG5cclxuLy8gQ29tcGFyZSB0aGUgcGFzc3dvcmQgb2YgYW4gYWxyZWFkeSBmZXRjaGVkIHVzZXIgKHVzaW5nIGBmaW5kVXNlcmApIGFuZCBjb21wYXJlIHRoZVxyXG4vLyBwYXNzd29yZCBmb3IgYSBwb3RlbnRpYWwgbWF0Y2hcclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodXNlcnMsIGlucHV0UGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZygnVmFsaWRhdGluZyBwYXNzd29yZCBmb3IgdXNlcjonLCB1c2Vyc1swXS51c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coJ0lucHV0IHBhc3N3b3JkOicsIGlucHV0UGFzc3dvcmQpO1xyXG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xyXG4gICAgLnBia2RmMlN5bmMoaW5wdXRQYXNzd29yZCwgdXNlcnNbMF0uc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxyXG4gICAgLnRvU3RyaW5nKCdoZXgnKVxyXG5cclxuICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IHVzZXJzWzBdLmhhc2ggPT09IGlucHV0SGFzaFxyXG4gIGNvbnNvbGUubG9nKFwibWF0Y2g6IFwiICsgcGFzc3dvcmRzTWF0Y2gpXHJcbiAgcmV0dXJuIHBhc3N3b3Jkc01hdGNoXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyeXB0byIsImJvZHlQYXJzZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm15c3FsIiwiY29ycyIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImVudiIsInByb2Nlc3MiLCJkYiIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwiYXV0aGVudGljYXRlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiVXNlciIsImRlZmluZSIsImlkIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1c2VybmFtZSIsIlRFWFQiLCJoYXNoIiwiU1RSSU5HIiwic2FsdCIsImFsbG93TnVsbCIsInZpZXdPbmx5IiwiQk9PTEVBTiIsImRlZmF1bHRWYWx1ZSIsInN5bmMiLCJlcnIiLCJjcmVhdGVVc2VyIiwicGFzc3dvcmQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicGJrZGYyU3luYyIsInVzZXIiLCJjcmVhdGUiLCJEYXRlIiwibm93IiwiZmluZFVzZXIiLCJ1c2VycyIsImZpbmRBbGwiLCJ3aGVyZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _lib_password_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/password-local */ \"(api)/./src/lib/password-local.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst authenticate = (method, req, res)=>new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(method, {\n            session: false\n        }, (error, token)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(token);\n            }\n        })(req, res, ()=>{}, {\n            password: req.body.password\n        });\n    });\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_lib_password_local__WEBPACK_IMPORTED_MODULE_2__.localStrategy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(cors__WEBPACK_IMPORTED_MODULE_4___default()()).use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize()).options(cors__WEBPACK_IMPORTED_MODULE_4___default()()).post(async (req, res)=>{\n    try {\n        const user = await authenticate(\"local\", req, res);\n        // session is the payload to save in the token, it may contain basic info about the user\n        const session = {\n            ...user\n        };\n        console.log(\"session user: \" + session[0].viewOnly);\n        console.log(\"res \" + res.statusCode);\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setLoginSession)(res, session);\n        const sessionView = session[0].viewOnly;\n        res.status(200).send({\n            done: true,\n            sessionView\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(401).send(error.message);\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ087QUFDa0I7QUFDUjtBQUN6QjtBQUV2QixNQUFNSyxlQUFlLENBQUNDLFFBQVFDLEtBQUtDLE1BQ2pDLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvQlgsNERBQXFCLENBQUNNLFFBQVE7WUFBRU0sU0FBUyxLQUFLO1FBQUMsR0FBRyxDQUFDQyxPQUFPQyxRQUFVO1lBQ2xFLElBQUlELE9BQU87Z0JBQ1RGLE9BQU9FO1lBQ1QsT0FBTztnQkFDTEgsUUFBUUk7WUFDVixDQUFDO1FBQ0gsR0FBR1AsS0FBS0MsS0FBSyxJQUFNLENBQUMsR0FBSTtZQUFFTyxVQUFVUixJQUFJUyxJQUFJLENBQUNELFFBQVE7UUFBQztJQUN4RDtBQUVGZixtREFBWSxDQUFDRSw4REFBYUE7QUFFMUIsaUVBQWVELHdEQUFXQSxHQUN2QmdCLEdBQUcsQ0FBQ2IsMkNBQUlBLElBQ1JhLEdBQUcsQ0FBQ2pCLDBEQUFtQixJQUN2Qm1CLE9BQU8sQ0FBQ2YsMkNBQUlBLElBQ1pnQixJQUFJLENBQUMsT0FBT2IsS0FBS0MsTUFBUTtJQUN4QixJQUFJO1FBQ0YsTUFBTWEsT0FBTyxNQUFNaEIsYUFBYSxTQUFTRSxLQUFLQztRQUM5Qyx3RkFBd0Y7UUFDeEYsTUFBTUksVUFBVTtZQUFDLEdBQUdTLElBQUk7UUFBQTtRQUV4QkMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlgsT0FBTyxDQUFDLEVBQUUsQ0FBQ1ksUUFBUTtRQUNsREYsUUFBUUMsR0FBRyxDQUFDLFNBQVNmLElBQUlpQixVQUFVO1FBRW5DLE1BQU10QiwwREFBZUEsQ0FBQ0ssS0FBS0k7UUFDM0IsTUFBTWMsY0FBY2QsT0FBTyxDQUFDLEVBQUUsQ0FBQ1ksUUFBUTtRQUV2Q2hCLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU0sSUFBSTtZQUFFSDtRQUFZO0lBQ2pELEVBQUUsT0FBT2IsT0FBTztRQUNkUyxRQUFRVCxLQUFLLENBQUNBO1FBQ2RMLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDZixNQUFNaUIsT0FBTztJQUNwQztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xyXG4gIGltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnXHJcbiAgaW1wb3J0IHsgbG9jYWxTdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9wYXNzd29yZC1sb2NhbCdcclxuICBpbXBvcnQgeyBzZXRMb2dpblNlc3Npb24gfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcclxuICBpbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xyXG4gIFxyXG4gIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChtZXRob2QsIHJlcSwgcmVzKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUobWV0aG9kLCB7IHNlc3Npb246IGZhbHNlIH0sIChlcnJvciwgdG9rZW4pID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZSh0b2tlbilcclxuICAgICAgICB9XHJcbiAgICAgIH0pKHJlcSwgcmVzLCAoKSA9PiB7fSAsIHsgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkIH0pXHJcbiAgICB9KVxyXG4gIFxyXG4gIHBhc3Nwb3J0LnVzZShsb2NhbFN0cmF0ZWd5KVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IG5leHRDb25uZWN0KClcclxuICAgIC51c2UoY29ycygpKVxyXG4gICAgLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpXHJcbiAgICAub3B0aW9ucyhjb3JzKCkpXHJcbiAgICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aGVudGljYXRlKCdsb2NhbCcsIHJlcSwgcmVzKVxyXG4gICAgICAgIC8vIHNlc3Npb24gaXMgdGhlIHBheWxvYWQgdG8gc2F2ZSBpbiB0aGUgdG9rZW4sIGl0IG1heSBjb250YWluIGJhc2ljIGluZm8gYWJvdXQgdGhlIHVzZXJcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gey4uLnVzZXJ9OyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gdXNlcjogXCIgKyBzZXNzaW9uWzBdLnZpZXdPbmx5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzIFwiICsgcmVzLnN0YXR1c0NvZGUpXHJcbiAgXHJcbiAgICAgICAgYXdhaXQgc2V0TG9naW5TZXNzaW9uKHJlcywgc2Vzc2lvbilcclxuICAgICAgICBjb25zdCBzZXNzaW9uVmlldyA9IHNlc3Npb25bMF0udmlld09ubHlcclxuICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRvbmU6IHRydWUsIHNlc3Npb25WaWV3IH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcikgXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJuZXh0Q29ubmVjdCIsImxvY2FsU3RyYXRlZ3kiLCJzZXRMb2dpblNlc3Npb24iLCJjb3JzIiwiYXV0aGVudGljYXRlIiwibWV0aG9kIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXNzaW9uIiwiZXJyb3IiLCJ0b2tlbiIsInBhc3N3b3JkIiwiYm9keSIsInVzZSIsImluaXRpYWxpemUiLCJvcHRpb25zIiwicG9zdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidmlld09ubHkiLCJzdGF0dXNDb2RlIiwic2Vzc2lvblZpZXciLCJzdGF0dXMiLCJzZW5kIiwiZG9uZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

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