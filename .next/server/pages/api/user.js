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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./src/lib sync recursive":
/*!***********************!*\
  !*** ./src/lib/ sync ***!
  \***********************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@hapi/iron");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql2");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(api)/./src/lib/auth-cookies.js":
/*!*********************************!*\
  !*** ./src/lib/auth-cookies.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_AGE\": () => (/* binding */ MAX_AGE),\n/* harmony export */   \"getTokenCookie\": () => (/* binding */ getTokenCookie),\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"removeTokenCookie\": () => (/* binding */ removeTokenCookie),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8 // 8 hours\n;\nfunction setTokenCookie(res, token) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, token, {\n        maxAge: MAX_AGE,\n        expires: new Date(Date.now() + MAX_AGE * 1000),\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        sameSite: \"lax\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction removeTokenCookie(res) {\n    const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(TOKEN_NAME, \"\", {\n        maxAge: -1,\n        path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n}\nfunction parseCookies(req) {\n    // For API Routes we don't need to parse the cookies.\n    if (req.cookies) return req.cookies;\n    // For pages we do need to parse the cookies.\n    const cookie = req.headers?.cookie;\n    return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || \"\");\n}\nfunction getTokenCookie(req) {\n    const cookies = parseCookies(req);\n    return cookies[TOKEN_NAME];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgtY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1FLGFBQWE7QUFFWixNQUFNQyxVQUFVLEtBQUssS0FBSyxFQUFFLFVBQVU7Q0FBWDtBQUUzQixTQUFTQyxlQUFlQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtJQUN6QyxNQUFNQyxTQUFTUCxpREFBU0EsQ0FBQ0UsWUFBWUksT0FBTztRQUMxQ0UsUUFBUUw7UUFDUk0sU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUtSLFVBQVU7UUFDekNTLFVBQVUsSUFBSTtRQUNkQyxRQUFRQyxrQkFBeUI7UUFDakNDLE1BQU07UUFDTkMsVUFBVTtJQUNaO0lBRUFYLElBQUlZLFNBQVMsQ0FBQyxjQUFjVjtBQUM5QixDQUFDO0FBRU0sU0FBU1csa0JBQWtCYixHQUFHLEVBQUU7SUFDckMsTUFBTUUsU0FBU1AsaURBQVNBLENBQUNFLFlBQVksSUFBSTtRQUN2Q00sUUFBUSxDQUFDO1FBQ1RPLE1BQU07SUFDUjtJQUVBVixJQUFJWSxTQUFTLENBQUMsY0FBY1Y7QUFDOUIsQ0FBQztBQUVNLFNBQVNZLGFBQWFDLEdBQUcsRUFBRTtJQUNoQyxxREFBcUQ7SUFDckQsSUFBSUEsSUFBSUMsT0FBTyxFQUFFLE9BQU9ELElBQUlDLE9BQU87SUFFbkMsNkNBQTZDO0lBQzdDLE1BQU1kLFNBQVNhLElBQUlFLE9BQU8sRUFBRWY7SUFDNUIsT0FBT04sNkNBQUtBLENBQUNNLFVBQVU7QUFDekIsQ0FBQztBQUVNLFNBQVNnQixlQUFlSCxHQUFHLEVBQUU7SUFDbEMsTUFBTUMsVUFBVUYsYUFBYUM7SUFDN0IsT0FBT0MsT0FBTyxDQUFDbkIsV0FBVztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLWNvb2tpZXMuanM/MmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUsIHBhcnNlIH0gZnJvbSAnY29va2llJ1xyXG5cclxuY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfQUdFID0gNjAgKiA2MCAqIDggLy8gOCBob3Vyc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pIHtcclxuICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoVE9LRU5fTkFNRSwgdG9rZW4sIHtcclxuICAgIG1heEFnZTogTUFYX0FHRSxcclxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFICogMTAwMCksXHJcbiAgICBodHRwT25seTogdHJ1ZSxcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICB9KVxyXG5cclxuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5Db29raWUocmVzKSB7XHJcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsICcnLCB7XHJcbiAgICBtYXhBZ2U6IC0xLFxyXG4gICAgcGF0aDogJy8nLFxyXG4gIH0pXHJcblxyXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxKSB7XHJcbiAgLy8gRm9yIEFQSSBSb3V0ZXMgd2UgZG9uJ3QgbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cclxuICBpZiAocmVxLmNvb2tpZXMpIHJldHVybiByZXEuY29va2llc1xyXG5cclxuICAvLyBGb3IgcGFnZXMgd2UgZG8gbmVlZCB0byBwYXJzZSB0aGUgY29va2llcy5cclxuICBjb25zdCBjb29raWUgPSByZXEuaGVhZGVycz8uY29va2llXHJcbiAgcmV0dXJuIHBhcnNlKGNvb2tpZSB8fCAnJylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuQ29va2llKHJlcSkge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMocmVxKVxyXG4gIHJldHVybiBjb29raWVzW1RPS0VOX05BTUVdXHJcbn0iXSwibmFtZXMiOlsic2VyaWFsaXplIiwicGFyc2UiLCJUT0tFTl9OQU1FIiwiTUFYX0FHRSIsInNldFRva2VuQ29va2llIiwicmVzIiwidG9rZW4iLCJjb29raWUiLCJtYXhBZ2UiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsInBhdGgiLCJzYW1lU2l0ZSIsInNldEhlYWRlciIsInJlbW92ZVRva2VuQ29va2llIiwicGFyc2VDb29raWVzIiwicmVxIiwiY29va2llcyIsImhlYWRlcnMiLCJnZXRUb2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth-cookies.js\n");

/***/ }),

/***/ "(api)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLoginSession\": () => (/* binding */ getLoginSession),\n/* harmony export */   \"setLoginSession\": () => (/* binding */ setLoginSession)\n/* harmony export */ });\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ \"@hapi/iron\");\n/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ \"(api)/./src/lib/auth-cookies.js\");\n\n\nconst TOKEN_SECRET = process.env.TOKEN_SECRET;\nasync function setLoginSession(res, session) {\n    const createdAt = Date.now();\n    // Create a session object with a max age that we can validate later\n    const obj = {\n        ...session,\n        createdAt,\n        maxAge: _auth_cookies__WEBPACK_IMPORTED_MODULE_1__.MAX_AGE\n    };\n    const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.setTokenCookie)(res, token);\n}\nasync function getLoginSession(req) {\n    const token = (0,_auth_cookies__WEBPACK_IMPORTED_MODULE_1__.getTokenCookie)(req);\n    if (!token) return;\n    const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, TOKEN_SECRET, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));\n    const expiresAt = session.createdAt + session.maxAge * 1000;\n    // Validate the expiration date of the session\n    if (Date.now() > expiresAt) {\n        throw new Error(\"Session expired\");\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDMkM7QUFFeEUsTUFBTUksZUFBZUMsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0FBRXRDLGVBQWVHLGdCQUFnQkMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDbEQsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixvRUFBb0U7SUFDcEUsTUFBTUMsTUFBTTtRQUFFLEdBQUdKLE9BQU87UUFBRUM7UUFBV0ksUUFBUWIsa0RBQU9BO0lBQUM7SUFDckQsTUFBTWMsUUFBUSxNQUFNZixzREFBUyxDQUFDYSxLQUFLVCxjQUFjSiw0REFBYTtJQUU5REUsNkRBQWNBLENBQUNNLEtBQUtPO0FBQ3RCLENBQUM7QUFFTSxlQUFlRyxnQkFBZ0JDLEdBQUcsRUFBRTtJQUN6QyxNQUFNSixRQUFRWiw2REFBY0EsQ0FBQ2dCO0lBRTdCLElBQUksQ0FBQ0osT0FBTztJQUVaLE1BQU1OLFVBQVUsTUFBTVQsd0RBQVcsQ0FBQ2UsT0FBT1gsY0FBY0osNERBQWE7SUFDcEUsTUFBTXFCLFlBQVlaLFFBQVFDLFNBQVMsR0FBR0QsUUFBUUssTUFBTSxHQUFHO0lBRXZELDhDQUE4QztJQUM5QyxJQUFJSCxLQUFLQyxHQUFHLEtBQUtTLFdBQVc7UUFDMUIsTUFBTSxJQUFJQyxNQUFNLG1CQUFrQjtJQUNwQyxDQUFDO0lBRUQsT0FBT2I7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NjMTkwLy4vc3JjL2xpYi9hdXRoLmpzPzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElyb24gZnJvbSAnQGhhcGkvaXJvbidcclxuaW1wb3J0IHsgTUFYX0FHRSwgc2V0VG9rZW5Db29raWUsIGdldFRva2VuQ29va2llIH0gZnJvbSAnLi9hdXRoLWNvb2tpZXMnXHJcblxyXG5jb25zdCBUT0tFTl9TRUNSRVQgPSBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRMb2dpblNlc3Npb24ocmVzLCBzZXNzaW9uKSB7XHJcbiAgY29uc3QgY3JlYXRlZEF0ID0gRGF0ZS5ub3coKVxyXG4gIC8vIENyZWF0ZSBhIHNlc3Npb24gb2JqZWN0IHdpdGggYSBtYXggYWdlIHRoYXQgd2UgY2FuIHZhbGlkYXRlIGxhdGVyXHJcbiAgY29uc3Qgb2JqID0geyAuLi5zZXNzaW9uLCBjcmVhdGVkQXQsIG1heEFnZTogTUFYX0FHRSB9XHJcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBJcm9uLnNlYWwob2JqLCBUT0tFTl9TRUNSRVQsIElyb24uZGVmYXVsdHMpXHJcblxyXG4gIHNldFRva2VuQ29va2llKHJlcywgdG9rZW4pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dpblNlc3Npb24ocmVxKSB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkNvb2tpZShyZXEpXHJcblxyXG4gIGlmICghdG9rZW4pIHJldHVyblxyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgSXJvbi51bnNlYWwodG9rZW4sIFRPS0VOX1NFQ1JFVCwgSXJvbi5kZWZhdWx0cylcclxuICBjb25zdCBleHBpcmVzQXQgPSBzZXNzaW9uLmNyZWF0ZWRBdCArIHNlc3Npb24ubWF4QWdlICogMTAwMFxyXG5cclxuICAvLyBWYWxpZGF0ZSB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBzZXNzaW9uXHJcbiAgaWYgKERhdGUubm93KCkgPiBleHBpcmVzQXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkJylcclxuICB9XHJcblxyXG4gIHJldHVybiBzZXNzaW9uXHJcbn0iXSwibmFtZXMiOlsiSXJvbiIsIk1BWF9BR0UiLCJzZXRUb2tlbkNvb2tpZSIsImdldFRva2VuQ29va2llIiwiVE9LRU5fU0VDUkVUIiwicHJvY2VzcyIsImVudiIsInNldExvZ2luU2Vzc2lvbiIsInJlcyIsInNlc3Npb24iLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwib2JqIiwibWF4QWdlIiwidG9rZW4iLCJzZWFsIiwiZGVmYXVsdHMiLCJnZXRMb2dpblNlc3Npb24iLCJyZXEiLCJ1bnNlYWwiLCJleHBpcmVzQXQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.js\n");

/***/ }),

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar config = __webpack_require__(\"./src/lib sync recursive\")(path.join(__dirname, \"..\", \"config\", \"config.json\"))[env];\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password1!\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\r\n * User methods. The example doesn't contain a DB, but for real applications you must use a\r\n * db here, such as MongoDB, Fauna, SQL, etc.\r\n */ function dbpush(sequelize, Sequelize) {\n    var User = sequelize.define(\"user\", {\n        id: {\n            autoIncrement: true,\n            primaryKey: true,\n            type: Sequelize.INTEGER\n        },\n        username: {\n            type: Sequelize.TEXT\n        },\n        password: {\n            type: Sequelize.STRING,\n            allowNull: false\n        }\n    });\n    return User;\n}\n\"use strict\";\nfs.readdirSync(__dirname).filter(function(file) {\n    return file.indexOf(\".\") !== 0 && file !== \"index.js\";\n}).forEach(function(file) {\n    var model = __webpack_require__(\"./src/lib sync recursive\")(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);\n    db[model.name] = model;\n});\nObject.keys(db).forEach(function(modelName) {\n    if (\"associate\" in db[modelName]) {\n        db[modelName].associate(db);\n    }\n});\ndb.sequelize = sequelize;\ndb.Sequelize = Sequelize;\nconst users = [];\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    };\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    users.push(user);\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return users.find((user)=>user.username === username);\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(user, inputPassword) {\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = user.hash === inputHash;\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUMzQyxDQUFDO0FBRUQsaURBQWlEO0FBQzFDLGVBQWVFLFNBQVMsRUFBRTlCLFNBQVEsRUFBRSxFQUFFO0lBQzNDLHlGQUF5RjtJQUN6RixPQUFPa0IsTUFBTWEsSUFBSSxDQUFDLENBQUNOLE9BQVNBLEtBQUt6QixRQUFRLEtBQUtBO0FBQ2hELENBQUM7QUFFRCxxRkFBcUY7QUFDckYsaUNBQWlDO0FBQzFCLFNBQVNnQyxpQkFBaUJQLElBQUksRUFBRVEsYUFBYSxFQUFFO0lBQ3BELE1BQU1DLFlBQVlwRSx3REFDTCxDQUFDbUUsZUFBZVIsS0FBS0wsSUFBSSxFQUFFLE1BQU0sSUFBSSxVQUMvQ0UsUUFBUSxDQUFDO0lBQ1osTUFBTWEsaUJBQWlCVixLQUFLRixJQUFJLEtBQUtXO0lBQ3JDLE9BQU9DO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9saWIvdXNlci5qcz9lZmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xyXG5cclxuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKVxyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgbXlzcWwgPSByZXF1aXJlKFwibXlzcWwyXCIpO1xyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xyXG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbnZhciBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xyXG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xyXG52YXIgY29uZmlnID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnY29uZmlnJywgJ2NvbmZpZy5qc29uJykpW2Vudl07XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnYWJzb2x1dGVtZWRpYScsXHJcbiAgICAncm9vdCcsXHJcbiAgICAncGFzc3dvcmQxIScsXHJcbiAgICAge1xyXG4gICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgICBkaWFsZWN0OiAnbXlzcWwnXHJcbiAgICAgfVxyXG4gICApO1xyXG4gICBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCkudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTogJywgZXJyb3IpO1xyXG4gfSk7XHJcblxyXG4vKipcclxuICogVXNlciBtZXRob2RzLiBUaGUgZXhhbXBsZSBkb2Vzbid0IGNvbnRhaW4gYSBEQiwgYnV0IGZvciByZWFsIGFwcGxpY2F0aW9ucyB5b3UgbXVzdCB1c2UgYVxyXG4gKiBkYiBoZXJlLCBzdWNoIGFzIE1vbmdvREIsIEZhdW5hLCBTUUwsIGV0Yy5cclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gZGJwdXNoIChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkge1xyXG5cclxuICAgIHZhciBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcclxuXHJcbiAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1c2VybmFtZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2VcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBVc2VyO1xyXG5cclxufVxyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5mc1xyXG4gICAgLnJlYWRkaXJTeW5jKF9fZGlybmFtZSlcclxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZihcIi5cIikgIT09IDApICYmIChmaWxlICE9PSBcImluZGV4LmpzXCIpO1xyXG4gICAgfSlcclxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSkoc2VxdWVsaXplLCBTZXF1ZWxpemUuRGF0YVR5cGVzKVxyXG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbE5hbWUpIHtcclxuICAgIGlmIChcImFzc29jaWF0ZVwiIGluIGRiW21vZGVsTmFtZV0pIHtcclxuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxuXHJcbmNvbnN0IHVzZXJzID0gW11cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcclxuICAvLyBIZXJlIHlvdSBzaG91bGQgY3JlYXRlIHRoZSB1c2VyIGFuZCBzYXZlIHRoZSBzYWx0IGFuZCBoYXNoZWQgcGFzc3dvcmQgKHNvbWUgZGJzIG1heSBoYXZlXHJcbiAgLy8gYXV0aGVudGljYXRpb24gbWV0aG9kcyB0aGF0IHdpbGwgZG8gaXQgZm9yIHlvdSBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpdCk6XHJcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXHJcbiAgY29uc3QgaGFzaCA9IGNyeXB0b1xyXG4gICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcclxuICAgIC50b1N0cmluZygnaGV4JylcclxuICBjb25zdCB1c2VyID0ge1xyXG4gICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBoYXNoLFxyXG4gICAgc2FsdCxcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgYW4gaW4gbWVtb3J5IHN0b3JlIGZvciB1c2VycywgdGhlcmUgaXMgbm8gZGF0YSBwZXJzaXN0ZW5jZSB3aXRob3V0IGEgcHJvcGVyIERCXHJcbiAgdXNlcnMucHVzaCh1c2VyKVxyXG5cclxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cclxufVxyXG5cclxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFVzZXIoeyB1c2VybmFtZSB9KSB7XHJcbiAgLy8gVGhpcyBpcyBhbiBpbiBtZW1vcnkgc3RvcmUgZm9yIHVzZXJzLCB0aGVyZSBpcyBubyBkYXRhIHBlcnNpc3RlbmNlIHdpdGhvdXQgYSBwcm9wZXIgREJcclxuICByZXR1cm4gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpXHJcbn1cclxuXHJcbi8vIENvbXBhcmUgdGhlIHBhc3N3b3JkIG9mIGFuIGFscmVhZHkgZmV0Y2hlZCB1c2VyICh1c2luZyBgZmluZFVzZXJgKSBhbmQgY29tcGFyZSB0aGVcclxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIGlucHV0UGFzc3dvcmQpIHtcclxuICBjb25zdCBpbnB1dEhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxyXG4gICAgLnRvU3RyaW5nKCdoZXgnKVxyXG4gIGNvbnN0IHBhc3N3b3Jkc01hdGNoID0gdXNlci5oYXNoID09PSBpbnB1dEhhc2hcclxuICByZXR1cm4gcGFzc3dvcmRzTWF0Y2hcclxufSJdLCJuYW1lcyI6WyJjcnlwdG8iLCJ2NCIsInV1aWR2NCIsImJvZHlQYXJzZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm15c3FsIiwiY29ycyIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImVudiIsInByb2Nlc3MiLCJjb25maWciLCJqb2luIiwiX19kaXJuYW1lIiwic2VxdWVsaXplIiwiaG9zdCIsImRpYWxlY3QiLCJhdXRoZW50aWNhdGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkYnB1c2giLCJVc2VyIiwiZGVmaW5lIiwiaWQiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsInR5cGUiLCJJTlRFR0VSIiwidXNlcm5hbWUiLCJURVhUIiwicGFzc3dvcmQiLCJTVFJJTkciLCJhbGxvd051bGwiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwiZm9yRWFjaCIsIm1vZGVsIiwiRGF0YVR5cGVzIiwiZGIiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsInVzZXJzIiwiY3JlYXRlVXNlciIsInNhbHQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwiaGFzaCIsInBia2RmMlN5bmMiLCJ1c2VyIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInB1c2giLCJmaW5kVXNlciIsImZpbmQiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaW5wdXRQYXNzd29yZCIsImlucHV0SGFzaCIsInBhc3N3b3Jkc01hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/user.js":
/*!*******************************!*\
  !*** ./src/pages/api/user.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth */ \"(api)/./src/lib/auth.js\");\n/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_user__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_user__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function user(req, res) {\n    try {\n        const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getLoginSession)(req);\n        const user = (session && await (0,_lib_user__WEBPACK_IMPORTED_MODULE_1__.findUser)(session)) ?? null;\n        res.status(200).json({\n            user\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).end(\"Authentication token is invalid, please log in\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBQ1A7QUFFMUIsZUFBZUUsS0FBS0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsMERBQWVBLENBQUNHO1FBQ3RDLE1BQU1ELE9BQU8sQ0FBQ0csV0FBWSxNQUFNSixtREFBUUEsQ0FBQ0ksUUFBUSxLQUFNLElBQUk7UUFFM0RELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUw7UUFBSztJQUM5QixFQUFFLE9BQU9NLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkSixJQUFJRSxNQUFNLENBQUMsS0FBS0ksR0FBRyxDQUFDO0lBQ3RCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9wYWdlcy9hcGkvdXNlci5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldExvZ2luU2Vzc2lvbiB9IGZyb20gJy4uLy4uL2xpYi9hdXRoJ1xyXG5pbXBvcnQgeyBmaW5kVXNlciB9IGZyb20gJy4uLy4uL2xpYi91c2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXNlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0TG9naW5TZXNzaW9uKHJlcSlcclxuICAgIGNvbnN0IHVzZXIgPSAoc2Vzc2lvbiAmJiAoYXdhaXQgZmluZFVzZXIoc2Vzc2lvbikpKSA/PyBudWxsXHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKCdBdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBpbnZhbGlkLCBwbGVhc2UgbG9nIGluJylcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZ2V0TG9naW5TZXNzaW9uIiwiZmluZFVzZXIiLCJ1c2VyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user.js"));
module.exports = __webpack_exports__;

})();