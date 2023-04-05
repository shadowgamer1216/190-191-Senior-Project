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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\nvar User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.STRING,\n        allowNull: false\n    },\n    viewOnly: {\n        type: Sequelize.BOOLEAN,\n        defaultValue: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password , viewOnly  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt,\n        viewOnly\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    console.log(\"Username: \", username);\n    const users = await User.findAll({\n        where: {\n            username: username\n        }\n    });\n    return users;\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(users, inputPassword) {\n    console.log(\"Validating password for user:\", users[0].username);\n    console.log(\"Input password:\", inputPassword);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, users[0].salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = users[0].hash === inputHash;\n    console.log(\"match: \" + passwordsMatch);\n    return passwordsMatch;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1QsQ0FBQztBQUVELHFGQUFxRjtBQUNyRixpQ0FBaUM7QUFDMUIsU0FBU0csaUJBQWlCSCxLQUFLLEVBQUVJLGFBQWEsRUFBRTtJQUNyRHRDLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNpQyxLQUFLLENBQUMsRUFBRSxDQUFDckIsUUFBUTtJQUM5RGIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQnFDO0lBQy9CLE1BQU1DLFlBQVl6RCx3REFDTCxDQUFDd0QsZUFBZUosS0FBSyxDQUFDLEVBQUUsQ0FBQ2pCLElBQUksRUFBRSxNQUFNLElBQUksVUFDbkRVLFFBQVEsQ0FBQztJQUVaLE1BQU1hLGlCQUFpQk4sS0FBSyxDQUFDLEVBQUUsQ0FBQ25CLElBQUksS0FBS3dCO0lBQ3pDdkMsUUFBUUMsR0FBRyxDQUFDLFlBQVl1QztJQUN4QixPQUFPQTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcclxuXHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcclxudmFyIGRiID0ge307XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICAnYWJzb2x1dGVtZWRpYScsXHJcbiAgICAncm9vdCcsXHJcbiAgICAncGFzc3dvcmQnLFxyXG4gICAgIHtcclxuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgZGlhbGVjdDogJ215c3FsJ1xyXG4gICAgIH1cclxuICAgKTtcclxuICAgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6ICcsIGVycm9yKTtcclxuIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXInLCB7XHJcblxyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3JlYXRlZEF0OiB7XHJcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFzaDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzYWx0OiB7XHJcbiAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxyXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlld09ubHk6IHtcclxuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBVc2VyLnN5bmMoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBEYXRhYmFzZSBVcGRhdGUhXCIpXHJcbn0pO1xyXG4gfSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCB2aWV3T25seSB9KSB7XHJcbiAgLy8gSGVyZSB5b3Ugc2hvdWxkIGNyZWF0ZSB0aGUgdXNlciBhbmQgc2F2ZSB0aGUgc2FsdCBhbmQgaGFzaGVkIHBhc3N3b3JkIChzb21lIGRicyBtYXkgaGF2ZVxyXG4gIC8vIGF1dGhlbnRpY2F0aW9uIG1ldGhvZHMgdGhhdCB3aWxsIGRvIGl0IGZvciB5b3Ugc28geW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaXQpOlxyXG4gIGNvbnN0IHNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKVxyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKHBhc3N3b3JkLCBzYWx0LCAxMDAwLCA2NCwgJ3NoYTUxMicpXHJcbiAgICAudG9TdHJpbmcoJ2hleCcpXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgaGFzaCxcclxuICAgIHNhbHQsXHJcbiAgICB2aWV3T25seVxyXG4gIH0pO1xyXG5cclxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxyXG4gIFxyXG5cclxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cclxufVxyXG5cclxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZFVzZXIoeyB1c2VybmFtZSB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJVc2VybmFtZTogXCIsIHVzZXJuYW1lKTtcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9IH0pO1xyXG4gIHJldHVybiB1c2VycztcclxufVxyXG5cclxuLy8gQ29tcGFyZSB0aGUgcGFzc3dvcmQgb2YgYW4gYWxyZWFkeSBmZXRjaGVkIHVzZXIgKHVzaW5nIGBmaW5kVXNlcmApIGFuZCBjb21wYXJlIHRoZVxyXG4vLyBwYXNzd29yZCBmb3IgYSBwb3RlbnRpYWwgbWF0Y2hcclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodXNlcnMsIGlucHV0UGFzc3dvcmQpIHtcclxuICBjb25zb2xlLmxvZygnVmFsaWRhdGluZyBwYXNzd29yZCBmb3IgdXNlcjonLCB1c2Vyc1swXS51c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coJ0lucHV0IHBhc3N3b3JkOicsIGlucHV0UGFzc3dvcmQpO1xyXG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xyXG4gICAgLnBia2RmMlN5bmMoaW5wdXRQYXNzd29yZCwgdXNlcnNbMF0uc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxyXG4gICAgLnRvU3RyaW5nKCdoZXgnKVxyXG5cclxuICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IHVzZXJzWzBdLmhhc2ggPT09IGlucHV0SGFzaFxyXG4gIGNvbnNvbGUubG9nKFwibWF0Y2g6IFwiICsgcGFzc3dvcmRzTWF0Y2gpXHJcbiAgcmV0dXJuIHBhc3N3b3Jkc01hdGNoXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyeXB0byIsImJvZHlQYXJzZXIiLCJyZXF1aXJlIiwiZXhwcmVzcyIsImFwcCIsIm15c3FsIiwiY29ycyIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImVudiIsInByb2Nlc3MiLCJkYiIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwiYXV0aGVudGljYXRlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiVXNlciIsImRlZmluZSIsImlkIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1c2VybmFtZSIsIlRFWFQiLCJoYXNoIiwiU1RSSU5HIiwic2FsdCIsImFsbG93TnVsbCIsInZpZXdPbmx5IiwiQk9PTEVBTiIsImRlZmF1bHRWYWx1ZSIsInN5bmMiLCJlcnIiLCJjcmVhdGVVc2VyIiwicGFzc3dvcmQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwicGJrZGYyU3luYyIsInVzZXIiLCJjcmVhdGUiLCJEYXRlIiwibm93IiwiZmluZFVzZXIiLCJ1c2VycyIsImZpbmRBbGwiLCJ3aGVyZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/signup.js":
/*!*********************************!*\
  !*** ./src/pages/api/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signup)\n/* harmony export */ });\n/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/user */ \"(api)/./src/lib/user.js\");\n\nasync function signup(req, res) {\n    // Allow requests from any origin\n    res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n    if (req.method === \"OPTIONS\") {\n        // Set CORS headers for preflight requests\n        res.setHeader(\"Access-Control-Allow-Methods\", \"GET, POST\");\n        res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\");\n        res.setHeader(\"Access-Control-Max-Age\", \"3600\");\n        res.status(204).end();\n        return;\n    }\n    const { username , password , viewOnly  } = req.body;\n    try {\n        const existingUser = await (0,_lib_user__WEBPACK_IMPORTED_MODULE_0__.findUser)({\n            username\n        });\n        if (existingUser.length > 0) {\n            return res.status(409).json({\n                message: \"Username already exists\"\n            });\n        }\n        if (username.length === 0) {\n            return res.status(409).json({\n                message: \"Username cannot be blank\"\n            });\n        }\n        console.log(\"viewOnly\", req.body);\n        await (0,_lib_user__WEBPACK_IMPORTED_MODULE_0__.createUser)({\n            username,\n            password,\n            viewOnly\n        });\n        res.status(200).json({\n            done: true,\n            viewOnly: viewOnly\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).end(error.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUV0QyxlQUFlRSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxpQ0FBaUM7SUFDakNBLElBQUlDLFNBQVMsQ0FBQywrQkFBK0I7SUFFN0MsSUFBSUYsSUFBSUcsTUFBTSxLQUFLLFdBQVc7UUFDNUIsMENBQTBDO1FBQzFDRixJQUFJQyxTQUFTLENBQUMsZ0NBQWdDO1FBQzlDRCxJQUFJQyxTQUFTLENBQUMsZ0NBQWdDO1FBQzlDRCxJQUFJQyxTQUFTLENBQUMsMEJBQTBCO1FBQ3hDRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsR0FBRztRQUNuQjtJQUNGLENBQUM7SUFFRCxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR1IsSUFBSVMsSUFBSTtJQUVqRCxJQUFJO1FBQ0YsTUFBTUMsZUFBZSxNQUFNWixtREFBUUEsQ0FBQztZQUFFUTtRQUFTO1FBQy9DLElBQUlJLGFBQWFDLE1BQU0sR0FBRyxHQUFHO1lBQzNCLE9BQU9WLElBQUlHLE1BQU0sQ0FBQyxLQUFLUSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBMEI7UUFDbkUsQ0FBQztRQUNELElBQUlQLFNBQVNLLE1BQU0sS0FBSyxHQUFHO1lBQ3pCLE9BQU9WLElBQUlHLE1BQU0sQ0FBQyxLQUFLUSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBMkI7UUFDcEUsQ0FBQztRQUVIQyxRQUFRQyxHQUFHLENBQUMsWUFBWWYsSUFBSVMsSUFBSTtRQUM5QixNQUFNWixxREFBVUEsQ0FBQztZQUFDUztZQUFVQztZQUFVQztRQUFRO1FBQzlDUCxJQUFJRyxNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1lBQUVJLE1BQU0sSUFBSTtZQUFFUixVQUFVQTtRQUFTO0lBQ3hELEVBQUUsT0FBT1MsT0FBTztRQUNkSCxRQUFRRyxLQUFLLENBQUNBO1FBQ2RoQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDWSxNQUFNSixPQUFPO0lBQ25DO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NzYzE5MC8uL3NyYy9wYWdlcy9hcGkvc2lnbnVwLmpzPzBhMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlciwgZmluZFVzZXIgfSBmcm9tICcuLi8uLi9saWIvdXNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cChyZXEsIHJlcykge1xyXG4gIC8vIEFsbG93IHJlcXVlc3RzIGZyb20gYW55IG9yaWdpblxyXG4gIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xyXG4gICAgLy8gU2V0IENPUlMgaGVhZGVycyBmb3IgcHJlZmxpZ2h0IHJlcXVlc3RzXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCcpXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpXHJcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1NYXgtQWdlJywgJzM2MDAnKVxyXG4gICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCB2aWV3T25seSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBmaW5kVXNlcih7IHVzZXJuYW1lIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nVXNlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2U6ICdVc2VybmFtZSBhbHJlYWR5IGV4aXN0cycgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IG1lc3NhZ2U6ICdVc2VybmFtZSBjYW5ub3QgYmUgYmxhbmsnIH0pO1xyXG4gICAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcInZpZXdPbmx5XCIsIHJlcS5ib2R5KVxyXG4gICAgYXdhaXQgY3JlYXRlVXNlcih7dXNlcm5hbWUsIHBhc3N3b3JkLCB2aWV3T25seX0pXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRvbmU6IHRydWUsIHZpZXdPbmx5OiB2aWV3T25seSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoZXJyb3IubWVzc2FnZSlcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImZpbmRVc2VyIiwic2lnbnVwIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZpZXdPbmx5IiwiYm9keSIsImV4aXN0aW5nVXNlciIsImxlbmd0aCIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRvbmUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/signup.js\n");

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