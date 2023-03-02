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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"findUser\": () => (/* binding */ findUser),\n/* harmony export */   \"validatePassword\": () => (/* binding */ validatePassword)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar env = \"development\" || 0;\nvar db = {};\nconst sequelize = new Sequelize(\"absolutemedia\", \"root\", \"password1!\", {\n    host: \"localhost\",\n    dialect: \"mysql\"\n});\nsequelize.authenticate().then(()=>{\n    console.log(\"Connection has been established successfully.\");\n}).catch((error)=>{\n    console.error(\"Unable to connect to the database: \", error);\n});\n/**\n * User methods. The example doesn't contain a DB, but for real applications you must use a\n * db here, such as MongoDB, Fauna, SQL, etc.\n */ var User = sequelize.define(\"user\", {\n    id: {\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n    },\n    createdAt: {\n        type: Sequelize.DATE\n    },\n    username: {\n        type: Sequelize.TEXT\n    },\n    hash: {\n        type: Sequelize.STRING\n    },\n    salt: {\n        type: Sequelize.UUID,\n        allowNull: false\n    }\n});\n(async ()=>{\n    await User.sync().then(function() {\n        console.log(\"Nice! Database looks fine\");\n    }).catch(function(err) {\n        console.log(err, \"Something went wrong with the Database Update!\");\n    });\n})();\n//const users = [user]\nasync function createUser({ username , password  }) {\n    // Here you should create the user and save the salt and hashed password (some dbs may have\n    // authentication methods that will do it for you so you don't have to worry about it):\n    const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString(\"hex\");\n    console.log(salt);\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const user = await User.create({\n        createdAt: Date.now(),\n        username,\n        hash,\n        salt\n    });\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return {\n        username,\n        createdAt: Date.now()\n    };\n}\n// Here you should lookup for the user in your DB\nasync function findUser({ username  }) {\n    // This is an in memory store for users, there is no data persistence without a proper DB\n    return User.findAll({\n        where: {\n            username: username\n        }\n    });\n}\n// Compare the password of an already fetched user (using `findUser`) and compare the\n// password for a potential match\nfunction validatePassword(user, inputPassword) {\n    console.log(\"usersalt\" + user.salt);\n    const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, \"sha512\").toString(\"hex\");\n    const passwordsMatch = user.hash === inputHash;\n    return passwordsMatch;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7SUFDcERuQyxRQUFRQyxHQUFHLENBQUMsYUFBYTBCLEtBQUtWLElBQUk7SUFDbEMsTUFBTW1CLFlBQVl4RCx3REFDTCxDQUFDdUQsZUFBZVIsS0FBS1YsSUFBSSxFQUFFLE1BQU0sSUFBSSxVQUMvQ1EsUUFBUSxDQUFDO0lBQ1osTUFBTVksaUJBQWlCVixLQUFLWixJQUFJLEtBQUtxQjtJQUNyQyxPQUFPQztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvbGliL3VzZXIuanM/ZWZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIilcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIFNlcXVlbGl6ZSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBTZXF1ZWxpemUgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbnZhciBkYiA9IHt9O1xuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcbiAgICAnYWJzb2x1dGVtZWRpYScsXG4gICAgJ3Jvb3QnLFxuICAgICdwYXNzd29yZDEhJyxcbiAgICAge1xuICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgIGRpYWxlY3Q6ICdteXNxbCdcbiAgICAgfVxuICAgKTtcbiAgIHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkuJyk7XG4gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOiAnLCBlcnJvcik7XG4gfSk7XG5cbi8qKlxuICogVXNlciBtZXRob2RzLiBUaGUgZXhhbXBsZSBkb2Vzbid0IGNvbnRhaW4gYSBEQiwgYnV0IGZvciByZWFsIGFwcGxpY2F0aW9ucyB5b3UgbXVzdCB1c2UgYVxuICogZGIgaGVyZSwgc3VjaCBhcyBNb25nb0RCLCBGYXVuYSwgU1FMLCBldGMuXG4gKi9cblxuICAgIHZhciBVc2VyID0gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcblxuICAgICAgICBpZDoge1xuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWRBdDoge1xuICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzaDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBzYWx0OiB7XG4gICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgICAgICAgIFxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgVXNlci5zeW5jKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05pY2UhIERhdGFiYXNlIGxvb2tzIGZpbmUnKVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIERhdGFiYXNlIFVwZGF0ZSFcIilcbn0pO1xuIH0pKCk7XG5cblxuXG5cbi8vY29uc3QgdXNlcnMgPSBbdXNlcl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkge1xuICAvLyBIZXJlIHlvdSBzaG91bGQgY3JlYXRlIHRoZSB1c2VyIGFuZCBzYXZlIHRoZSBzYWx0IGFuZCBoYXNoZWQgcGFzc3dvcmQgKHNvbWUgZGJzIG1heSBoYXZlXG4gIC8vIGF1dGhlbnRpY2F0aW9uIG1ldGhvZHMgdGhhdCB3aWxsIGRvIGl0IGZvciB5b3Ugc28geW91IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaXQpOlxuICBjb25zdCBzYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4JylcbiAgY29uc29sZS5sb2coc2FsdCk7XG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cbiAgICAucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgdXNlcm5hbWUsXG4gICAgaGFzaCxcbiAgICBzYWx0LFxuICB9KTtcblxuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICBcblxuICByZXR1cm4geyB1c2VybmFtZSwgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH1cbn1cblxuLy8gSGVyZSB5b3Ugc2hvdWxkIGxvb2t1cCBmb3IgdGhlIHVzZXIgaW4geW91ciBEQlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyKHsgdXNlcm5hbWUgfSkge1xuICAvLyBUaGlzIGlzIGFuIGluIG1lbW9yeSBzdG9yZSBmb3IgdXNlcnMsIHRoZXJlIGlzIG5vIGRhdGEgcGVyc2lzdGVuY2Ugd2l0aG91dCBhIHByb3BlciBEQlxuICByZXR1cm4gVXNlci5maW5kQWxsKHt3aGVyZToge3VzZXJuYW1lOiB1c2VybmFtZX19KTtcbn1cblxuLy8gQ29tcGFyZSB0aGUgcGFzc3dvcmQgb2YgYW4gYWxyZWFkeSBmZXRjaGVkIHVzZXIgKHVzaW5nIGBmaW5kVXNlcmApIGFuZCBjb21wYXJlIHRoZVxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZCh1c2VyLCBpbnB1dFBhc3N3b3JkKSB7XG4gIGNvbnNvbGUubG9nKFwidXNlcnNhbHRcIiArIHVzZXIuc2FsdCk7XG4gIGNvbnN0IGlucHV0SGFzaCA9IGNyeXB0b1xuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxuICAgIC50b1N0cmluZygnaGV4JylcbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSB1c2VyLmhhc2ggPT09IGlucHV0SGFzaFxuICByZXR1cm4gcGFzc3dvcmRzTWF0Y2hcbn0iXSwibmFtZXMiOlsiY3J5cHRvIiwidjQiLCJ1dWlkdjQiLCJib2R5UGFyc2VyIiwicmVxdWlyZSIsImV4cHJlc3MiLCJhcHAiLCJteXNxbCIsImNvcnMiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJlbnYiLCJwcm9jZXNzIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIlVzZXIiLCJkZWZpbmUiLCJpZCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJjcmVhdGVkQXQiLCJEQVRFIiwidXNlcm5hbWUiLCJURVhUIiwiaGFzaCIsIlNUUklORyIsInNhbHQiLCJVVUlEIiwiYWxsb3dOdWxsIiwic3luYyIsImVyciIsImNyZWF0ZVVzZXIiLCJwYXNzd29yZCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYmtkZjJTeW5jIiwidXNlciIsImNyZWF0ZSIsIkRhdGUiLCJub3ciLCJmaW5kVXNlciIsImZpbmRBbGwiLCJ3aGVyZSIsInZhbGlkYXRlUGFzc3dvcmQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRIYXNoIiwicGFzc3dvcmRzTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/signup.js":
/*!*********************************!*\
  !*** ./src/pages/api/signup.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signup)\n/* harmony export */ });\n/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/user */ \"(api)/./src/lib/user.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_user__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_user__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function signup(req, res) {\n    try {\n        await (0,_lib_user__WEBPACK_IMPORTED_MODULE_0__.createUser)(req.body);\n        res.status(200).send({\n            done: true\n        });\n    } catch (error) {\n        console.error(error);\n        res.status(500).end(error.message);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUU1QixlQUFlQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTUgscURBQVVBLENBQUNFLElBQUlFLElBQUk7UUFDekJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsTUFBTSxJQUFJO1FBQUM7SUFDcEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZEwsSUFBSUUsTUFBTSxDQUFDLEtBQUtLLEdBQUcsQ0FBQ0YsTUFBTUcsT0FBTztJQUNuQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2MxOTAvLi9zcmMvcGFnZXMvYXBpL3NpZ251cC5qcz8wYTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVVzZXIgfSBmcm9tICcuLi8uLi9saWIvdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2lnbnVwKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY3JlYXRlVXNlcihyZXEuYm9keSlcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IGRvbmU6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoZXJyb3IubWVzc2FnZSlcbiAgfVxufSJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwic2lnbnVwIiwicmVxIiwicmVzIiwiYm9keSIsInN0YXR1cyIsInNlbmQiLCJkb25lIiwiZXJyb3IiLCJjb25zb2xlIiwiZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/signup.js\n");

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