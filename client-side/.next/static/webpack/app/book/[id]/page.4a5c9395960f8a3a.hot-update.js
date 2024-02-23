"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/book/[id]/page",{

/***/ "(app-pages-browser)/./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst apiUrl = \"http://localhost:2000/api\"; // Replace 'your-server-url' with your actual server URL\nclass BookApiService {\n    async getAllBooks() {\n        const response = await fetch(\"\".concat(apiUrl, \"/books\"));\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch books\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async getBookById(id) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/\").concat(id));\n        if (response.status === 404) {\n            return null;\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async addBook(bookData) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/add\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(bookData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to add book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async updateBookById(id, bookData) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/update/\").concat(id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(bookData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to update book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async deleteBookById(id) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/delete/\").concat(id), {\n            method: \"DELETE\"\n        });\n        if (response.status === 404) {\n            throw new Error(\"Book not found\");\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to delete book\");\n        }\n    }\n    async updateBookImageById(id, image) {\n        const formData = new FormData();\n        formData.append(\"image\", image);\n        const response = await fetch(\"\".concat(apiUrl, \"/books/update/image/\").concat(id), {\n            method: \"PATCH\",\n            body: formData\n        });\n        if (response.status === 404) {\n            throw new Error(\"Book not found\");\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to update image\");\n        }\n        console.log(await response.json());\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookApiService);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsTUFBTUosU0FBU0ssSUFBSTtRQUN4QyxNQUFNQyxPQUFPRixhQUFhRSxJQUFJO1FBQzlCLE9BQU9BO0lBQ1g7QUFDSjtBQUVBLCtEQUFlUixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvaW5kZXgudHM/MDI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIkAvbW9kZWxzXCI7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjIwMDAvYXBpJzsgLy8gUmVwbGFjZSAneW91ci1zZXJ2ZXItdXJsJyB3aXRoIHlvdXIgYWN0dWFsIHNlcnZlciBVUkxcblxuY2xhc3MgQm9va0FwaVNlcnZpY2Uge1xuICAgIGFzeW5jIGdldEFsbEJvb2tzKCk6IFByb21pc2U8Qm9va1tdPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9ib29rc2ApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBib29rcycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlSnNvbi5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb29rQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxCb29rIHwgbnVsbD4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYm9va3MvJHtpZH1gKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBib29rJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZUpzb24uZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkQm9vayhib29rRGF0YTogUGFydGlhbDxCb29rPik6IFByb21pc2U8Qm9vaz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYm9va3MvYWRkYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29rRGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBhZGQgYm9vaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VKc29uLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUJvb2tCeUlkKGlkOiBudW1iZXIsIGJvb2tEYXRhOiBQYXJ0aWFsPEJvb2s+KTogUHJvbWlzZTxCb29rPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9ib29rcy91cGRhdGUvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29rRGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgYm9vaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VKc29uLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZUJvb2tCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jvb2tzL2RlbGV0ZS8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vayBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgYm9vaycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHVwZGF0ZUJvb2tJbWFnZUJ5SWQoaWQ6IG51bWJlciwgaW1hZ2U6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9ib29rcy91cGRhdGUvaW1hZ2UvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGE7J1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vayBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgaW1hZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLmpzb24oKSlcblxuICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZUpzb24uZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rQXBpU2VydmljZTtcbiJdLCJuYW1lcyI6WyJhcGlVcmwiLCJCb29rQXBpU2VydmljZSIsImdldEFsbEJvb2tzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJyZXNwb25zZUpzb24iLCJqc29uIiwiZGF0YSIsImdldEJvb2tCeUlkIiwiaWQiLCJzdGF0dXMiLCJhZGRCb29rIiwiYm9va0RhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVCb29rQnlJZCIsImRlbGV0ZUJvb2tCeUlkIiwidXBkYXRlQm9va0ltYWdlQnlJZCIsImltYWdlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/index.ts\n"));

/***/ })

});