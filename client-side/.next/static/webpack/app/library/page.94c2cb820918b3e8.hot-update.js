"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/library/page",{

/***/ "(app-pages-browser)/./src/store/actions/bookActions.ts":
/*!******************************************!*\
  !*** ./src/store/actions/bookActions.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: function() { return /* binding */ addBook; },\n/* harmony export */   deleteBookById: function() { return /* binding */ deleteBookById; },\n/* harmony export */   getAllBooks: function() { return /* binding */ getAllBooks; },\n/* harmony export */   getBookById: function() { return /* binding */ getBookById; },\n/* harmony export */   updateBookById: function() { return /* binding */ updateBookById; },\n/* harmony export */   updateBookImageById: function() { return /* binding */ updateBookImageById; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n\n\nconst bookApiService = new _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst getAllBooks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/getAllBooks\", async ()=>{\n    try {\n        const allBooks = await bookApiService.getAllBooks();\n        return allBooks;\n    } catch (error) {\n        console.log(\"Error fetching all books:\", error);\n        return [];\n    }\n});\nconst getBookById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/getBookById\", async (id)=>{\n    try {\n        const bookById = await bookApiService.getBookById(id);\n        return bookById;\n    } catch (error) {\n        console.log(\"Error fetching book by ID:\", error);\n        return null;\n    }\n});\nconst addBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/addBook\", async (bookData)=>{\n    try {\n        const newBook = await bookApiService.addBook(bookData);\n        return newBook;\n    } catch (error) {\n        console.error(\"Error adding book:\", error);\n        throw error;\n    }\n});\nconst deleteBookById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/deleteBookById\", async (id)=>{\n    try {\n        await bookApiService.deleteBookById(id);\n        return id;\n    } catch (error) {\n        console.log(\"Error deleting book:\", error);\n        throw error;\n    }\n});\nconst updateBookById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/updateBookById\", async (bookData)=>{\n    try {\n        const { id } = bookData;\n        const updatedBook = await bookApiService.updateBookById(id, bookData);\n        return updatedBook;\n    } catch (error) {\n        console.error(\"Error updating book:\", error);\n        throw error;\n    }\n});\nconst updateBookImageById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/updateBookImageById\", async (bookData)=>{\n    try {\n        const { id } = bookData;\n        const updatedBook = await bookApiService.updateBookImageById(id, bookData.image);\n        return updatedBook;\n    } catch (error) {\n        console.error(\"Error updating book:\", error);\n        throw error;\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb25zL2Jvb2tBY3Rpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2pCO0FBR25DLE1BQU1FLGlCQUFpQixJQUFJRCw0Q0FBY0E7QUFFbEMsTUFBTUUsY0FBY0gsa0VBQWdCQSxDQUFTLHFCQUFxQjtJQUNyRSxJQUFJO1FBQ0EsTUFBTUksV0FBbUIsTUFBTUYsZUFBZUMsV0FBVztRQUN6RCxPQUFPQztJQUNYLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUMsNkJBQTZCRjtRQUN6QyxPQUFPLEVBQUU7SUFDYjtBQUNKLEdBQUc7QUFFSSxNQUFNRyxjQUFjUixrRUFBZ0JBLENBQXNCLHFCQUFxQixPQUFPUztJQUN6RixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNUixlQUFlTSxXQUFXLENBQUNDO1FBQ2xELE9BQU9DO0lBQ1gsRUFBRSxPQUFPTCxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyw4QkFBOEJGO1FBQzFDLE9BQU87SUFDWDtBQUNKLEdBQ0U7QUFDSyxNQUFNTSxVQUFVWCxrRUFBZ0JBLENBQXNCLGlCQUFpQixPQUFPWTtJQUNqRixJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNWCxlQUFlUyxPQUFPLENBQUNDO1FBQzdDLE9BQU9DO0lBQ1gsRUFBRSxPQUFPUixPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE1BQU1BO0lBQ1Y7QUFDSixHQUFHO0FBRUksTUFBTVMsaUJBQWlCZCxrRUFBZ0JBLENBQWlCLHdCQUF3QixPQUFPUztJQUMxRixJQUFJO1FBQ0EsTUFBTVAsZUFBZVksY0FBYyxDQUFDTDtRQUNwQyxPQUFPQTtJQUNYLEVBQUUsT0FBT0osT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtRQUNwQyxNQUFNQTtJQUNWO0FBQ0osR0FBRztBQUVJLE1BQU1VLGlCQUFpQmYsa0VBQWdCQSxDQUFhLHdCQUF3QixPQUFPWTtJQUN0RixJQUFJO1FBQ0EsTUFBTSxFQUFFSCxFQUFFLEVBQUUsR0FBR0c7UUFDZixNQUFNSSxjQUFjLE1BQU1kLGVBQWVhLGNBQWMsQ0FBQ04sSUFBSUc7UUFDNUQsT0FBT0k7SUFDWCxFQUFFLE9BQU9YLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTUE7SUFDVjtBQUNKLEdBQUc7QUFHSSxNQUFNWSxzQkFBc0JqQixrRUFBZ0JBLENBQVcsNkJBQTZCLE9BQU9ZO0lBQzlGLElBQUk7UUFDQSxNQUFNLEVBQUVILEVBQUUsRUFBRSxHQUFHRztRQUNmLE1BQU1JLGNBQWMsTUFBTWQsZUFBZWUsbUJBQW1CLENBQUNSLElBQUlHLFNBQVNNLEtBQUs7UUFFL0UsT0FBT0Y7SUFDWCxFQUFFLE9BQU9YLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTUE7SUFDVjtBQUNKLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMudHM/YjUwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgQm9va0FwaVNlcnZpY2UgZnJvbSAnQC9hcGknO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxuY29uc3QgYm9va0FwaVNlcnZpY2UgPSBuZXcgQm9va0FwaVNlcnZpY2UoKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJvb2tzID0gY3JlYXRlQXN5bmNUaHVuazxCb29rW10+KCdib29rcy9nZXRBbGxCb29rcycsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxCb29rczogQm9va1tdID0gYXdhaXQgYm9va0FwaVNlcnZpY2UuZ2V0QWxsQm9va3MoKTtcbiAgICAgICAgcmV0dXJuIGFsbEJvb2tzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBhbGwgYm9va3M6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRCb29rQnlJZCA9IGNyZWF0ZUFzeW5jVGh1bms8Qm9vayB8IG51bGwsIG51bWJlcj4oJ2Jvb2tzL2dldEJvb2tCeUlkJywgYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9va0J5SWQgPSBhd2FpdCBib29rQXBpU2VydmljZS5nZXRCb29rQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBib29rQnlJZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgYm9vayBieSBJRDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbik7XG5leHBvcnQgY29uc3QgYWRkQm9vayA9IGNyZWF0ZUFzeW5jVGh1bms8Qm9vaywgUGFydGlhbDxCb29rPj4oJ2Jvb2tzL2FkZEJvb2snLCBhc3luYyAoYm9va0RhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdCb29rID0gYXdhaXQgYm9va0FwaVNlcnZpY2UuYWRkQm9vayhib29rRGF0YSk7XG4gICAgICAgIHJldHVybiBuZXdCb29rO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBib29rOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVCb29rQnlJZCA9IGNyZWF0ZUFzeW5jVGh1bms8bnVtYmVyLCBudW1iZXI+KCdib29rcy9kZWxldGVCb29rQnlJZCcsIGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGJvb2tBcGlTZXJ2aWNlLmRlbGV0ZUJvb2tCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZWxldGluZyBib29rOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29rQnlJZCA9IGNyZWF0ZUFzeW5jVGh1bms8Qm9vaywgQm9vaz4oJ2Jvb2tzL3VwZGF0ZUJvb2tCeUlkJywgYXN5bmMgKGJvb2tEYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gYm9va0RhdGE7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRCb29rID0gYXdhaXQgYm9va0FwaVNlcnZpY2UudXBkYXRlQm9va0J5SWQoaWQsIGJvb2tEYXRhKTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRCb29rO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2s6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59KTtcblxuXG5leHBvcnQgY29uc3QgdXBkYXRlQm9va0ltYWdlQnlJZCA9IGNyZWF0ZUFzeW5jVGh1bms8YW55LCBhbnk+KCdib29rcy91cGRhdGVCb29rSW1hZ2VCeUlkJywgYXN5bmMgKGJvb2tEYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gYm9va0RhdGE7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRCb29rID0gYXdhaXQgYm9va0FwaVNlcnZpY2UudXBkYXRlQm9va0ltYWdlQnlJZChpZCwgYm9va0RhdGEuaW1hZ2UpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRCb29rO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2s6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiQm9va0FwaVNlcnZpY2UiLCJib29rQXBpU2VydmljZSIsImdldEFsbEJvb2tzIiwiYWxsQm9va3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRCb29rQnlJZCIsImlkIiwiYm9va0J5SWQiLCJhZGRCb29rIiwiYm9va0RhdGEiLCJuZXdCb29rIiwiZGVsZXRlQm9va0J5SWQiLCJ1cGRhdGVCb29rQnlJZCIsInVwZGF0ZWRCb29rIiwidXBkYXRlQm9va0ltYWdlQnlJZCIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/actions/bookActions.ts\n"));

/***/ })

});