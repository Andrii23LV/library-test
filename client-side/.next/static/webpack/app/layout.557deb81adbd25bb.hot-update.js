"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst apiUrl = \"http://localhost:2000/api\"; // Replace 'your-server-url' with your actual server URL\nclass BookApiService {\n    async getAllBooks() {\n        const response = await fetch(\"\".concat(apiUrl, \"/books\"));\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch books\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async getBookById(id) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/\").concat(id));\n        if (response.status === 404) {\n            return null;\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async addBook(bookData) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/add\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(bookData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to add book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async updateBookById(id, bookData) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/update/\").concat(id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(bookData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to update book\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n    async deleteBookById(id) {\n        const response = await fetch(\"\".concat(apiUrl, \"/books/delete/\").concat(id), {\n            method: \"DELETE\"\n        });\n        if (response.status === 404) {\n            throw new Error(\"Book not found\");\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to delete book\");\n        }\n    }\n    async updateBookImageById(id, image) {\n        const formData = new FormData();\n        formData.append(\"image\", image);\n        console.log(image);\n        const response = await fetch(\"\".concat(apiUrl, \"/books/update/image/\").concat(id), {\n            method: \"POST\",\n            body: formData,\n            headers: {\n                \"Content-Type\": \"multipart/form-data;\"\n            }\n        });\n        if (response.status === 404) {\n            throw new Error(\"Book not found\");\n        }\n        if (!response.ok) {\n            throw new Error(\"Failed to update image\");\n        }\n        const responseJson = await response.json();\n        const data = responseJson.data;\n        return data;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookApiService);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNQyxlQUFlLE1BQU1KLFNBQVNLLElBQUk7UUFDeEMsTUFBTUMsT0FBT0YsYUFBYUUsSUFBSTtRQUM5QixPQUFPQTtJQUNYO0FBQ0o7QUFFQSwrREFBZVIsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL2luZGV4LnRzPzAyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vayB9IGZyb20gXCJAL21vZGVsc1wiO1xuXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaSc7IC8vIFJlcGxhY2UgJ3lvdXItc2VydmVyLXVybCcgd2l0aCB5b3VyIGFjdHVhbCBzZXJ2ZXIgVVJMXG5cbmNsYXNzIEJvb2tBcGlTZXJ2aWNlIHtcbiAgICBhc3luYyBnZXRBbGxCb29rcygpOiBQcm9taXNlPEJvb2tbXT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYm9va3NgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYm9va3MnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZUpzb24uZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9va0J5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8Qm9vayB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jvb2tzLyR7aWR9YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYm9vaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VKc29uLmRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZEJvb2soYm9va0RhdGE6IFBhcnRpYWw8Qm9vaz4pOiBQcm9taXNlPEJvb2s+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2Jvb2tzL2FkZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va0RhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gYWRkIGJvb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlSnNvbi5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVCb29rQnlJZChpZDogbnVtYmVyLCBib29rRGF0YTogUGFydGlhbDxCb29rPik6IFByb21pc2U8Qm9vaz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYm9va3MvdXBkYXRlLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va0RhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIGJvb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlSnNvbi5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGVCb29rQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9ib29rcy9kZWxldGUvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb2sgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGJvb2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyB1cGRhdGVCb29rSW1hZ2VCeUlkKGlkOiBudW1iZXIsIGltYWdlOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSlcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYm9va3MvdXBkYXRlL2ltYWdlLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGE7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vayBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgaW1hZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlSnNvbi5kYXRhO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tBcGlTZXJ2aWNlO1xuIl0sIm5hbWVzIjpbImFwaVVybCIsIkJvb2tBcGlTZXJ2aWNlIiwiZ2V0QWxsQm9va3MiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInJlc3BvbnNlSnNvbiIsImpzb24iLCJkYXRhIiwiZ2V0Qm9va0J5SWQiLCJpZCIsInN0YXR1cyIsImFkZEJvb2siLCJib29rRGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZUJvb2tCeUlkIiwiZGVsZXRlQm9va0J5SWQiLCJ1cGRhdGVCb29rSW1hZ2VCeUlkIiwiaW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/index.ts\n"));

/***/ })

});