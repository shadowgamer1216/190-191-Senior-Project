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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

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

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

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

/***/ "(api)/./src/lib/user.js":
/*!*************************!*\
  !*** ./src/lib/user.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\r\n * User methods. The example doesn't contain a DB, but for real applications you must use a\r\n * db here, such as MongoDB, Fauna, SQL, etc.\r\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    console.log(\"Username: \", username);\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFSSxhQUFhLEVBQUU7SUFDckRwQyxRQUFRQyxHQUFHLENBQUMsaUNBQWlDK0IsS0FBSyxDQUFDLEVBQUUsQ0FBQ25CLFFBQVE7SUFDOURiLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQztJQUMvQixNQUFNQyxZQUFZekQsd0RBQ0wsQ0FBQ3dELGVBQWVKLEtBQUssQ0FBQyxFQUFFLENBQUNmLElBQUksRUFBRSxNQUFNLElBQUksVUFDbkRRLFFBQVEsQ0FBQztJQUVaLE1BQU1hLGlCQUFpQk4sS0FBSyxDQUFDLEVBQUUsQ0FBQ2pCLElBQUksS0FBS3NCO0lBQ3pDckMsUUFBUUMsR0FBRyxDQUFDLFlBQVlxQztJQUN4QixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcclxuXHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGRiID0ge307XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnYWJzb2x1dGVtZWRpYScsXHJcbiAgICAncm9vdCcsXHJcbiAgICAncGFzc3dvcmQnLFxyXG4gICAgIHtcclxuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgZGlhbGVjdDogJ215c3FsJ1xyXG4gICAgIH1cclxuICAgKTtcclxuICAgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6ICcsIGVycm9yKTtcclxuIH0pO1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgbWV0aG9kcy4gVGhlIGV4YW1wbGUgZG9lc24ndCBjb250YWluIGEgREIsIGJ1dCBmb3IgcmVhbCBhcHBsaWNhdGlvbnMgeW91IG11c3QgdXNlIGFcclxuICogZGIgaGVyZSwgc3VjaCBhcyBNb25nb0RCLCBGYXVuYSwgU1FMLCBldGMuXHJcbiAqL1xyXG5cclxuICAgIHZhciBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcclxuXHJcbiAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXNlcm5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYXNoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhbHQ6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxyXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBVc2VyLnN5bmMoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXHJcbn0pO1xyXG4gfSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcclxuICAvLyBIZXJlIHlvdSBzaG91bGQgY3JlYXRlIHRoZSB1c2VyIGFuZCBzYXZlIHRoZSBzYWx0IGFuZCBoYXNoZWQgcGFzc3dvcmQgKHNvbWUgZGJzIG1heSBoYXZlXHJcbiAgLy8gYXV0aGVudGljYXRpb24gbWV0aG9kcyB0aGF0IHdpbGwgZG8gaXQgZm9yIHlvdSBzbyB5b3UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpdCk6XHJcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpXHJcbiAgY29uc3QgaGFzaCA9IGNyeXB0b1xyXG4gICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcclxuICAgIC50b1N0cmluZygnaGV4JylcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBoYXNoLFxyXG4gICAgc2FsdCxcclxuICB9KTtcclxuXHJcbiAgLy8gVGhpcyBpcyBhbiBpbiBtZW1vcnkgc3RvcmUgZm9yIHVzZXJzLCB0aGVyZSBpcyBubyBkYXRhIHBlcnNpc3RlbmNlIHdpdGhvdXQgYSBwcm9wZXIgREJcclxuICBcclxuXHJcbiAgcmV0dXJuIHsgdXNlcm5hbWUsIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9XHJcbn1cclxuXHJcbi8vIEhlcmUgeW91IHNob3VsZCBsb29rdXAgZm9yIHRoZSB1c2VyIGluIHlvdXIgREJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiVXNlcm5hbWU6IFwiLCB1c2VybmFtZSk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmRBbGwoeyB3aGVyZTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSB9KTtcclxuICByZXR1cm4gdXNlcnM7XHJcbn1cclxuXHJcbi8vIENvbXBhcmUgdGhlIHBhc3N3b3JkIG9mIGFuIGFscmVhZHkgZmV0Y2hlZCB1c2VyICh1c2luZyBgZmluZFVzZXJgKSBhbmQgY29tcGFyZSB0aGVcclxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXJzLCBpbnB1dFBhc3N3b3JkKSB7XHJcbiAgY29uc29sZS5sb2coJ1ZhbGlkYXRpbmcgcGFzc3dvcmQgZm9yIHVzZXI6JywgdXNlcnNbMF0udXNlcm5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKCdJbnB1dCBwYXNzd29yZDonLCBpbnB1dFBhc3N3b3JkKTtcclxuICBjb25zdCBpbnB1dEhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXJzWzBdLnNhbHQsIDEwMDAsIDY0LCAnc2hhNTEyJylcclxuICAgIC50b1N0cmluZygnaGV4JylcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2Vyc1swXS5oYXNoID09PSBpbnB1dEhhc2hcclxuICBjb25zb2xlLmxvZyhcIm1hdGNoOiBcIiArIHBhc3N3b3Jkc01hdGNoKVxyXG4gIHJldHVybiBwYXNzd29yZHNNYXRjaFxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJ2NCIsInV1aWR2NCIsImJvZHlQYXJzZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm15c3FsIiwiY29ycyIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImVudiIsInByb2Nlc3MiLCJkYiIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwiYXV0aGVudGljYXRlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiVXNlciIsImRlZmluZSIsImlkIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1c2VybmFtZSIsIlRFWFQiLCJoYXNoIiwiU1RSSU5HIiwic2FsdCIsIlVVSUQiLCJhbGxvd051bGwiLCJzeW5jIiwiZXJyIiwiY3JlYXRlVXNlciIsInBhc3N3b3JkIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInBia2RmMlN5bmMiLCJ1c2VyIiwiY3JlYXRlIiwiRGF0ZSIsIm5vdyIsImZpbmRVc2VyIiwidXNlcnMiLCJmaW5kQWxsIiwid2hlcmUiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaW5wdXRQYXNzd29yZCIsImlucHV0SGFzaCIsInBhc3N3b3Jkc01hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/signup.js":
/*!*********************************!*\
  !*** ./src/pages/api/signup.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signup)\n/* harmony export */ });\n/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_user__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_user__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function signup(req, res) {\n    // Allow requests from any origin\n    res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n    if (req.method === \"OPTIONS\") {\n        // Set CORS headers for preflight requests\n        res.setHeader(\"Access-Control-Allow-Methods\", \"GET, POST\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\");\n        res.setHeader(\"Access-Control-Max-Age\", \"3600\");\n        res.status(204).end();\n        return;\n    }\n    try {\n        await (0,_lib_user__WEBPACK_IMPORTED_MODULE_0__.createUser)(req.body);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).end(error.message);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUU1QixlQUFlQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxpQ0FBaUM7SUFDakNBLElBQUlDLFNBQVMsQ0FBQywrQkFBK0I7SUFFN0MsSUFBSUYsSUFBSUcsTUFBTSxLQUFLLFdBQVc7UUFDNUIsMENBQTBDO1FBQzFDRixJQUFJQyxTQUFTLENBQUMsZ0NBQWdDO1FBQzlDRCxJQUFJQyxTQUFTLENBQUMsZ0NBQWdDO1FBQzlDRCxJQUFJQyxTQUFTLENBQUMsMEJBQTBCO1FBQ3hDRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsR0FBRztRQUNuQjtJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTVAscURBQVVBLENBQUNFLElBQUlNLElBQUk7UUFDekJMLElBQUlHLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7WUFBRUMsTUFBTSxJQUFJO1FBQUM7SUFDcEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZFIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0ksTUFBTUUsT0FBTztJQUNuQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcz8wYTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVVzZXIgfSBmcm9tICcuLi8uLi9saWIvdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cChyZXEsIHJlcykge1xyXG4gIC8vIEFsbG93IHJlcXVlc3RzIGZyb20gYW55IG9yaWdpblxyXG4gIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xyXG4gICAgLy8gU2V0IENPUlMgaGVhZGVycyBmb3IgcHJlZmxpZ2h0IHJlcXVlc3RzXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCcpXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1NYXgtQWdlJywgJzM2MDAnKVxyXG4gICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjcmVhdGVVc2VyKHJlcS5ib2R5KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBkb25lOiB0cnVlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKGVycm9yLm1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwic2lnbnVwIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiYm9keSIsInNlbmQiLCJkb25lIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/signup.js"));
module.exports = __webpack_exports__;

})();