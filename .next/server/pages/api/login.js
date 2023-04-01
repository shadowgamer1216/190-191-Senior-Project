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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        domain: \"localhost\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxVQUFVO0lBQ1o7SUFFQVosSUFBSWEsU0FBUyxDQUFDLGNBQWNYO0FBQzlCLENBQUM7QUFFTSxTQUFTWSxrQkFBa0JkLEdBQUcsRUFBRTtJQUNyQyxNQUFNRSxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWSxJQUFJO1FBQ3ZDTSxRQUFRLENBQUM7UUFDVFEsTUFBTTtJQUNSO0lBRUFYLElBQUlhLFNBQVMsQ0FBQyxjQUFjWDtBQUM5QixDQUFDO0FBRU0sU0FBU2EsYUFBYUMsR0FBRyxFQUFFO0lBQ2hDLHFEQUFxRDtJQUNyRCxJQUFJQSxJQUFJQyxPQUFPLEVBQUUsT0FBT0QsSUFBSUMsT0FBTztJQUVuQyw2Q0FBNkM7SUFDN0MsTUFBTWYsU0FBU2MsSUFBSUUsT0FBTyxFQUFFaEI7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNpQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDcEIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xyXG5cclxuY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfQUdFID0gNjAgKiA2MCAqIDggLy8gOCBob3Vyc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcclxuICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgdG9rZW4sIHtcclxuICAgIG1heEFnZTogTUFYX0FHRSxcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXHJcbiAgICBodHRwT25seTogdHJ1ZSxcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIGRvbWFpbjogJ2xvY2FsaG9zdCcsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgfSlcclxuXHJcbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGNvb2tpZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuQ29va2llKHJlcykge1xyXG4gIGNvbnN0IGNvb2tpZSA9IHNlcmlhbGl6ZShUT0tFTl9OQU1FLCAnJywge1xyXG4gICAgbWF4QWdlOiAtMSxcclxuICAgIHBhdGg6ICcvJyxcclxuICB9KVxyXG5cclxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIC8vIEZvciBBUEkgUm91dGVzIHdlIGRvbid0IG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgaWYgKHJlcS5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXNcclxuXHJcbiAgLy8gRm9yIHBhZ2VzIHdlIGRvIG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnM/LmNvb2tpZVxyXG4gIHJldHVybiBwYXJzZShjb29raWUgfHwgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkNvb2tpZShyZXEpIHtcclxuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSlcclxuICByZXR1cm4gY29va2llc1tUT0tFTl9OQU1FXVxyXG59Il0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInBhcnNlIiwiVE9LRU5fTkFNRSIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsInJlcyIsInRva2VuIiwiY29va2llIiwibWF4QWdlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJkb21haW4iLCJwYXRoIiwic2FtZVNpdGUiLCJzZXRIZWFkZXIiLCJyZW1vdmVUb2tlbkNvb2tpZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiZ2V0VG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    console.log(\"TOKEN_SECRET:\", TOKEN_SECRET);\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    console.log(\"session res \" + res.status);\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMkM7QUFFeEUsTUFBTUksZUFBZUMsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGdCQUFnQkMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFFbEQsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixvRUFBb0U7SUFDcEUsTUFBTUMsTUFBTTtRQUFFLEdBQUdKLE9BQU87UUFBRUM7UUFBV0ksUUFBUWIsa0RBQU9BO0lBQUM7SUFDckRjLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJaO0lBRTdCLE1BQU1hLFFBQVEsTUFBTWpCLHNEQUFTLENBQUNhLEtBQUtULGNBQWNKLDREQUFhO0lBQzlEZSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCUixJQUFJWSxNQUFNO0lBSXZDbEIsNkRBQWNBLENBQUNNLEtBQUtTO0FBQ3RCLENBQUM7QUFFTSxlQUFlSSxnQkFBZ0JDLEdBQUcsRUFBRTtJQUN6QyxNQUFNTCxRQUFRZCw2REFBY0EsQ0FBQ21CO0lBRTdCLElBQUksQ0FBQ0wsT0FBTztJQUVaLE1BQU1SLFVBQVUsTUFBTVQsd0RBQVcsQ0FBQ2lCLE9BQU9iLGNBQWNKLDREQUFhO0lBQ3BFLE1BQU13QixZQUFZZixRQUFRQyxTQUFTLEdBQUdELFFBQVFLLE1BQU0sR0FBRztJQUV2RCw4Q0FBOEM7SUFDOUMsSUFBSUgsS0FBS0MsR0FBRyxLQUFLWSxXQUFXO1FBQzFCLE1BQU0sSUFBSUMsTUFBTSxtQkFBa0I7SUFDcEMsQ0FBQztJQUVELE9BQU9oQjtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL2F1dGguanM/ODdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXJvbiBmcm9tICdAaGFwaS9pcm9uJ1xyXG5pbXBvcnQgeyBNQVhfQUdFLCBzZXRUb2tlbkNvb2tpZSwgZ2V0VG9rZW5Db29raWUgfSBmcm9tICcuL2F1dGgtY29va2llcydcclxuXHJcbmNvbnN0IFRPS0VOX1NFQ1JFVCA9IHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldExvZ2luU2Vzc2lvbihyZXMsIHNlc3Npb24pIHtcclxuXHJcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKVxyXG4gIC8vIENyZWF0ZSBhIHNlc3Npb24gb2JqZWN0IHdpdGggYSBtYXggYWdlIHRoYXQgd2UgY2FuIHZhbGlkYXRlIGxhdGVyXHJcbiAgY29uc3Qgb2JqID0geyAuLi5zZXNzaW9uLCBjcmVhdGVkQXQsIG1heEFnZTogTUFYX0FHRSB9XHJcbiAgY29uc29sZS5sb2coXCJUT0tFTl9TRUNSRVQ6XCIsIFRPS0VOX1NFQ1JFVCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gYXdhaXQgSXJvbi5zZWFsKG9iaiwgVE9LRU5fU0VDUkVULCBJcm9uLmRlZmF1bHRzKVxyXG4gIGNvbnNvbGUubG9nKFwic2Vzc2lvbiByZXMgXCIgKyByZXMuc3RhdHVzKVxyXG5cclxuXHJcblxyXG4gIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dpblNlc3Npb24ocmVxKSB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkNvb2tpZShyZXEpXHJcblxyXG4gIGlmICghdG9rZW4pIHJldHVyblxyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgSXJvbi51bnNlYWwodG9rZW4sIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcclxuICBjb25zdCBleHBpcmVzQXQgPSBzZXNzaW9uLmNyZWF0ZWRBdCArIHNlc3Npb24ubWF4QWdlICogMTAwMFxyXG5cclxuICAvLyBWYWxpZGF0ZSB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBzZXNzaW9uXHJcbiAgaWYgKERhdGUubm93KCkgPiBleHBpcmVzQXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkJylcclxuICB9XHJcblxyXG4gIHJldHVybiBzZXNzaW9uXHJcbn0iXSwibmFtZXMiOlsiSXJvbiIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsImdldFRva2VuQ29va2llIiwiVE9LRU5fU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNldExvZ2luU2Vzc2lvbiIsInJlcyIsInNlc3Npb24iLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwib2JqIiwibWF4QWdlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2VhbCIsImRlZmF1bHRzIiwic3RhdHVzIiwiZ2V0TG9naW5TZXNzaW9uIiwicmVxIiwidW5zZWFsIiwiZXhwaXJlc0F0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/password-local.js":
/*!***********************************!*\
  !*** ./src/lib/password-local.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStrategy\": () => (/* binding */ localStrategy)\n/* harmony export */ });\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_1__]);\n_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst localStrategy = new (passport_local__WEBPACK_IMPORTED_MODULE_0___default().Strategy)(function(username, password, done) {\n    if (username != undefined) {\n        const user = (0,_user__WEBPACK_IMPORTED_MODULE_1__.findUser)({\n            username\n        }).then((user)=>{\n            if (user && (0,_user__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(user, password)) {\n                done(null, user);\n            } else {\n                done(new Error(\"Invalid username and password combination\"));\n            }\n        }).catch((error)=>{\n            done(error);\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3Bhc3N3b3JkLWxvY2FsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDaUI7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQUlILGdFQUFjLENBQUMsU0FDOUNLLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxJQUFJLEVBQ0o7SUFFRixJQUFJRixZQUFZRyxXQUFVO1FBQ3hCLE1BQU1DLE9BQU9SLCtDQUFRQSxDQUFDO1lBQUVJO1FBQVMsR0FDOUJLLElBQUksQ0FBQyxDQUFDRCxPQUFTO1lBR2QsSUFBSUEsUUFBUVAsdURBQWdCQSxDQUFDTyxNQUFNSCxXQUFXO2dCQUU1Q0MsS0FBSyxJQUFJLEVBQUVFO1lBQ2IsT0FBTztnQkFFTEYsS0FBSyxJQUFJSSxNQUFNO1lBQ2pCLENBQUM7UUFDSCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUVoQk4sS0FBS007UUFDUDtJQUNGLENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9wYXNzd29yZC1sb2NhbC5qcz9lYzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbCBmcm9tICdwYXNzcG9ydC1sb2NhbCdcclxuaW1wb3J0IHsgZmluZFVzZXIsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICcuL3VzZXInXHJcblxyXG5leHBvcnQgY29uc3QgbG9jYWxTdHJhdGVneSA9IG5ldyBMb2NhbC5TdHJhdGVneShmdW5jdGlvbiAoXHJcbiAgdXNlcm5hbWUsXHJcbiAgcGFzc3dvcmQsXHJcbiAgZG9uZVxyXG4pIHtcclxuIFxyXG5pZiAodXNlcm5hbWUgIT0gdW5kZWZpbmVkKXtcclxuICBjb25zdCB1c2VyID0gZmluZFVzZXIoeyB1c2VybmFtZSB9KVxyXG4gICAgLnRoZW4oKHVzZXIpID0+IHtcclxuXHJcblxyXG4gICAgICBpZiAodXNlciAmJiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKSkge1xyXG5cclxuICAgICAgICBkb25lKG51bGwsIHVzZXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRvbmUobmV3IEVycm9yKCdJbnZhbGlkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBjb21iaW5hdGlvbicpKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cclxuICAgICAgZG9uZShlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJMb2NhbCIsImZpbmRVc2VyIiwidmFsaWRhdGVQYXNzd29yZCIsImxvY2FsU3RyYXRlZ3kiLCJTdHJhdGVneSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkb25lIiwidW5kZWZpbmVkIiwidXNlciIsInRoZW4iLCJFcnJvciIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/password-local.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\r\n * User methods. The example doesn't contain a DB, but for real applications you must use a\r\n * db here, such as MongoDB, Fauna, SQL, etc.\r\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    console.log(\"Username: \", username);\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFSSxhQUFhLEVBQUU7SUFDckRwQyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDK0IsS0FBSyxDQUFDLEVBQUUsQ0FBQ25CLFFBQVE7SUFDOURiLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQztJQUMvQixNQUFNQyxZQUFZekQsd0RBQ0wsQ0FBQ3dELGVBQWVKLEtBQUssQ0FBQyxFQUFFLENBQUNmLElBQUksRUFBRSxNQUFNLElBQUksVUFDbkRRLFFBQVEsQ0FBQztJQUVaLE1BQU1hLGlCQUFpQk4sS0FBSyxDQUFDLEVBQUUsQ0FBQ2pCLElBQUksS0FBS3NCO0lBQ3pDckMsUUFBUUMsR0FBRyxDQUFDLFlBQVlxQztJQUN4QixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcclxuXHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGRiID0ge307XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnYWJzb2x1dGVtZWRpYScsXHJcbiAgICAncm9vdCcsXHJcbiAgICAncGFzc3dvcmQnLFxyXG4gICAgIHtcclxuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgZGlhbGVjdDogJ215c3FsJ1xyXG4gICAgIH1cclxuICAgKTtcclxuICAgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6ICcsIGVycm9yKTtcclxuIH0pO1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgbWV0aG9kcy4gVGhlIGV4YW1wbGUgZG9lc24ndCBjb250YWluIGEgREIsIGJ1dCBmb3IgcmVhbCBhcHBsaWNhdGlvbnMgeW91IG11c3QgdXNlIGFcclxuICogZGIgaGVyZSwgc3VjaCBhcyBNb25nb0RCLCBGYXVuYSwgU1FMLCBldGMuXHJcbiAqL1xyXG5cclxuICAgIHZhciBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcclxuXHJcbiAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXNlcm5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYXNoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhbHQ6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxyXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBVc2VyLnN5bmMoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXHJcbn0pO1xyXG4gfSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcclxuICAvLyBIZXJlIHlvdSBzaG91bGQgY3JlYXRlIHRoZSB1c2VyIGFuZCBzYXZlIHRoZSBzYWx0IGFuZCBoYXNoZWQgcGFzc3dvcmQgKHNvbWUgZGJzIG1heSBoYXZlXHJcbiAgLy8gYXV0aGVudGljYXRpb24gbWV0aG9kcyB0aGF0IHdpbGwgZG8gaXQgZm9yIHlvdSBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpdCk6XHJcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXHJcbiAgY29uc3QgaGFzaCA9IGNyeXB0b1xyXG4gICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcclxuICAgIC50b1N0cmluZygnaGV4JylcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBoYXNoLFxyXG4gICAgc2FsdCxcclxuICB9KTtcclxuXHJcbiAgLy8gVGhpcyBpcyBhbiBpbiBtZW1vcnkgc3RvcmUgZm9yIHVzZXJzLCB0aGVyZSBpcyBubyBkYXRhIHBlcnNpc3RlbmNlIHdpdGhvdXQgYSBwcm9wZXIgREJcclxuICBcclxuXHJcbiAgcmV0dXJuIHsgdXNlcm5hbWUsIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9XHJcbn1cclxuXHJcbi8vIEhlcmUgeW91IHNob3VsZCBsb29rdXAgZm9yIHRoZSB1c2VyIGluIHlvdXIgREJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiVXNlcm5hbWU6IFwiLCB1c2VybmFtZSk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmRBbGwoeyB3aGVyZTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSB9KTtcclxuICByZXR1cm4gdXNlcnM7XHJcbn1cclxuXHJcbi8vIENvbXBhcmUgdGhlIHBhc3N3b3JkIG9mIGFuIGFscmVhZHkgZmV0Y2hlZCB1c2VyICh1c2luZyBgZmluZFVzZXJgKSBhbmQgY29tcGFyZSB0aGVcclxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXJzLCBpbnB1dFBhc3N3b3JkKSB7XHJcbiAgY29uc29sZS5sb2coJ1ZhbGlkYXRpbmcgcGFzc3dvcmQgZm9yIHVzZXI6JywgdXNlcnNbMF0udXNlcm5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKCdJbnB1dCBwYXNzd29yZDonLCBpbnB1dFBhc3N3b3JkKTtcclxuICBjb25zdCBpbnB1dEhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXJzWzBdLnNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcclxuICAgIC50b1N0cmluZygnaGV4JylcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2Vyc1swXS5oYXNoID09PSBpbnB1dEhhc2hcclxuICBjb25zb2xlLmxvZyhcIm1hdGNoOiBcIiArIHBhc3N3b3Jkc01hdGNoKVxyXG4gIHJldHVybiBwYXNzd29yZHNNYXRjaFxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJ2NCIsInV1aWR2NCIsImJvZHlQYXJzZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm15c3FsIiwiY29ycyIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImVudiIsInByb2Nlc3MiLCJkYiIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwiYXV0aGVudGljYXRlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiVXNlciIsImRlZmluZSIsImlkIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1c2VybmFtZSIsIlRFWFQiLCJoYXNoIiwiU1RSSU5HIiwic2FsdCIsIlVVSUQiLCJhbGxvd051bGwiLCJzeW5jIiwiZXJyIiwiY3JlYXRlVXNlciIsInBhc3N3b3JkIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInBia2RmMlN5bmMiLCJ1c2VyIiwiY3JlYXRlIiwiRGF0ZSIsIm5vdyIsImZpbmRVc2VyIiwidXNlcnMiLCJmaW5kQWxsIiwid2hlcmUiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaW5wdXRQYXNzd29yZCIsImlucHV0SGFzaCIsInBhc3N3b3Jkc01hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _lib_password_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/password-local */ \"(api)/./src/lib/password-local.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_1__, _lib_password_local__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst authenticate = (method, req, res)=>new Promise((resolve, reject)=>{\n        passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate(method, {\n            session: false\n        }, (error, token)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(token);\n            }\n        })(req, res, ()=>{}, {\n            password: req.body.password\n        });\n    });\npassport__WEBPACK_IMPORTED_MODULE_0___default().use(_lib_password_local__WEBPACK_IMPORTED_MODULE_2__.localStrategy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(cors__WEBPACK_IMPORTED_MODULE_4___default()()).use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize()).options(cors__WEBPACK_IMPORTED_MODULE_4___default()()).post(async (req, res)=>{\n    try {\n        const user = await authenticate(\"local\", req, res);\n        // session is the payload to save in the token, it may contain basic info about the user\n        const session = {\n            ...user\n        };\n        console.log(\"session user: \" + session[0].username);\n        console.log(\"res \" + res.statusCode);\n        await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setLoginSession)(res, session);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(\"I am the error \" + error);\n        res.status(401).send(error.message);\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ087QUFDa0I7QUFDUjtBQUN6QjtBQUV2QixNQUFNSyxlQUFlLENBQUNDLFFBQVFDLEtBQUtDLE1BQ2pDLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvQlgsNERBQXFCLENBQUNNLFFBQVE7WUFBRU0sU0FBUyxLQUFLO1FBQUMsR0FBRyxDQUFDQyxPQUFPQyxRQUFVO1lBQ2xFLElBQUlELE9BQU87Z0JBQ1RGLE9BQU9FO1lBQ1QsT0FBTztnQkFDTEgsUUFBUUk7WUFDVixDQUFDO1FBQ0gsR0FBR1AsS0FBS0MsS0FBSyxJQUFNLENBQUMsR0FBSTtZQUFFTyxVQUFVUixJQUFJUyxJQUFJLENBQUNELFFBQVE7UUFBQztJQUN4RDtBQUVGZixtREFBWSxDQUFDRSw4REFBYUE7QUFFMUIsaUVBQWVELHdEQUFXQSxHQUN2QmdCLEdBQUcsQ0FBQ2IsMkNBQUlBLElBQ1JhLEdBQUcsQ0FBQ2pCLDBEQUFtQixJQUN2Qm1CLE9BQU8sQ0FBQ2YsMkNBQUlBLElBQ1pnQixJQUFJLENBQUMsT0FBT2IsS0FBS0MsTUFBUTtJQUN4QixJQUFJO1FBQ0YsTUFBTWEsT0FBTyxNQUFNaEIsYUFBYSxTQUFTRSxLQUFLQztRQUM5Qyx3RkFBd0Y7UUFDeEYsTUFBTUksVUFBVTtZQUFDLEdBQUdTLElBQUk7UUFBQTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlgsT0FBTyxDQUFDLEVBQUUsQ0FBQ1ksUUFBUTtRQUNsREYsUUFBUUMsR0FBRyxDQUFDLFNBQVNmLElBQUlpQixVQUFVO1FBRW5DLE1BQU10QiwwREFBZUEsQ0FBQ0ssS0FBS0k7UUFFM0JKLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU0sSUFBSTtRQUFDO0lBQ3BDLEVBQUUsT0FBT2YsT0FBTztRQUNkUyxRQUFRVCxLQUFLLENBQUMsb0JBQW9CQTtRQUNsQ0wsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkLE1BQU1nQixPQUFPO0lBQ3BDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9wYWdlcy9hcGkvbG9naW4uanM/ZWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXHJcbiAgaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcclxuICBpbXBvcnQgeyBsb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vbGliL3Bhc3N3b3JkLWxvY2FsJ1xyXG4gIGltcG9ydCB7IHNldExvZ2luU2Vzc2lvbiB9IGZyb20gJy4uLy4uL2xpYi9hdXRoJ1xyXG4gIGltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcbiAgXHJcbiAgY29uc3QgYXV0aGVudGljYXRlID0gKG1ldGhvZCwgcmVxLCByZXMpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShtZXRob2QsIHsgc2Vzc2lvbjogZmFsc2UgfSwgKGVycm9yLCB0b2tlbikgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKHRva2VuKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkocmVxLCByZXMsICgpID0+IHt9ICwgeyBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQgfSlcclxuICAgIH0pXHJcbiAgXHJcbiAgcGFzc3BvcnQudXNlKGxvY2FsU3RyYXRlZ3kpXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbmV4dENvbm5lY3QoKVxyXG4gICAgLnVzZShjb3JzKCkpXHJcbiAgICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcclxuICAgIC5vcHRpb25zKGNvcnMoKSlcclxuICAgIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGUoJ2xvY2FsJywgcmVxLCByZXMpXHJcbiAgICAgICAgLy8gc2Vzc2lvbiBpcyB0aGUgcGF5bG9hZCB0byBzYXZlIGluIHRoZSB0b2tlbiwgaXQgbWF5IGNvbnRhaW4gYmFzaWMgaW5mbyBhYm91dCB0aGUgdXNlclxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSB7Li4udXNlcn07IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvbiB1c2VyOiBcIiArIHNlc3Npb25bMF0udXNlcm5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXMgXCIgKyByZXMuc3RhdHVzQ29kZSlcclxuICBcclxuICAgICAgICBhd2FpdCBzZXRMb2dpblNlc3Npb24ocmVzLCBzZXNzaW9uKVxyXG4gIFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgZG9uZTogdHJ1ZSB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJIGFtIHRoZSBlcnJvciBcIiArIGVycm9yKSBcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsIm5leHRDb25uZWN0IiwibG9jYWxTdHJhdGVneSIsInNldExvZ2luU2Vzc2lvbiIsImNvcnMiLCJhdXRoZW50aWNhdGUiLCJtZXRob2QiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlc3Npb24iLCJlcnJvciIsInRva2VuIiwicGFzc3dvcmQiLCJib2R5IiwidXNlIiwiaW5pdGlhbGl6ZSIsIm9wdGlvbnMiLCJwb3N0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VybmFtZSIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJzZW5kIiwiZG9uZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

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