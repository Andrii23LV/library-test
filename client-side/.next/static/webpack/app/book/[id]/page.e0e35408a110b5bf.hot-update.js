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

/***/ "(app-pages-browser)/./src/components/ImageUploader.tsx":
/*!******************************************!*\
  !*** ./src/components/ImageUploader.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 21,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 21,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        setFileData(e.target.files[0]);\n    };\n    const onSubmitHandler = ()=>{\n        // if (\n        //     (fileData && fileData.type === \"image/png\") ||\n        //     fileData.type === \"image/jpeg\" ||\n        //     fileData.type === \"image/jpg\"\n        // ) {\n        const updatedObj = {\n            ...book,\n            image: fileData\n        };\n        dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: fileChangeHandler\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    src: book.image_url,\n                    alt: \"avatar\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, undefined) : uploadButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"a5nI+/AzFdioB1tROqM7584oI6k=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ3JDO0FBQ2tCO0FBQ21CO0FBUWxFLE1BQU1PLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1hLDZCQUNGLDhEQUFDQztRQUFPQyxPQUFPO1lBQUVDLFFBQVE7WUFBR0MsWUFBWTtRQUFPO1FBQUdDLE1BQUs7O1lBQ2xEVCx3QkFBVSw4REFBQ1IsNEdBQWVBOzs7OzBDQUFNLDhEQUFDQyw0R0FBWUE7Ozs7OzBCQUM5Qyw4REFBQ2lCO2dCQUFJSixPQUFPO29CQUFFSyxXQUFXO2dCQUFFOzBCQUFHOzs7Ozs7Ozs7Ozs7SUFJdEMsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3ZCVixZQUFZVSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQ2pDO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3BCLE9BQU87UUFDUCxxREFBcUQ7UUFDckQsd0NBQXdDO1FBQ3hDLG9DQUFvQztRQUNwQyxNQUFNO1FBRU4sTUFBTUMsYUFBYTtZQUFFLEdBQUduQixJQUFJO1lBQUVvQixPQUFPaEI7UUFBUztRQUU5Q0gsU0FBU0gsK0VBQW1CQSxDQUFDcUI7SUFDakM7SUFFQSxxQkFDSSw4REFBQ1A7a0JBQ0csNEVBQUNTO1lBQUtDLFVBQVVKO1lBQWlCSyxNQUFLOzs4QkFDbEMsOERBQUNDO29CQUFNYixNQUFLO29CQUFPYyxVQUFVWDs7Ozs7O2dCQUM1QmQsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNMEIsU0FBUyxrQkFDWiw4REFBQzlCLHlFQUFLQTtvQkFBQytCLEtBQUszQixLQUFLMEIsU0FBUztvQkFBRUUsS0FBSTtvQkFBU3BCLE9BQU87d0JBQUVxQixPQUFPO29CQUFPO29CQUFHQyxTQUFTOzs7OztnQ0FBWXhCOzs7Ozs7Ozs7Ozs7QUFLNUc7R0F2Q01QOztRQUNlRix3REFBY0E7OztLQUQ3QkU7QUF5Q04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci50c3g/OWU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0Avc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXBkYXRlQm9va0ltYWdlQnlJZCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9ib29rQWN0aW9ucyc7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnQC9tb2RlbHMnO1xuXG5cbmludGVyZmFjZSBJbWFnZVVwbG9hZGVyUHJvcHMge1xuICAgIGJvb2s6IFBhcnRpYWw8Qm9vaz47XG59XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSAoeyBib29rIH06IEltYWdlVXBsb2FkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogMCwgYmFja2dyb3VuZDogJ25vbmUnIH19IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcblxuICAgIGNvbnN0IGZpbGVDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBzZXRGaWxlRGF0YShlLnRhcmdldC5maWxlc1swXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgLy8gaWYgKFxuICAgICAgICAvLyAgICAgKGZpbGVEYXRhICYmIGZpbGVEYXRhLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCIpIHx8XG4gICAgICAgIC8vICAgICBmaWxlRGF0YS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fFxuICAgICAgICAvLyAgICAgZmlsZURhdGEudHlwZSA9PT0gXCJpbWFnZS9qcGdcIlxuICAgICAgICAvLyApIHtcblxuICAgICAgICBjb25zdCB1cGRhdGVkT2JqID0geyAuLi5ib29rLCBpbWFnZTogZmlsZURhdGEgfTtcblxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVCb29rSW1hZ2VCeUlkKHVwZGF0ZWRPYmopKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IG5hbWU9XCJlZGl0IHByb2ZpbGUgZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICB7Ym9vaz8uaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Ym9vay5pbWFnZV91cmx9IGFsdD1cImF2YXRhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcHJldmlldz17ZmFsc2V9IC8+IDogdXBsb2FkQnV0dG9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdPdXRsaW5lZCIsIlBsdXNPdXRsaW5lZCIsIkltYWdlIiwidXNlQXBwRGlzcGF0Y2giLCJ1cGRhdGVCb29rSW1hZ2VCeUlkIiwiSW1hZ2VVcGxvYWRlciIsImJvb2siLCJkaXNwYXRjaCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlsZURhdGEiLCJzZXRGaWxlRGF0YSIsInVwbG9hZEJ1dHRvbiIsImJ1dHRvbiIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInR5cGUiLCJkaXYiLCJtYXJnaW5Ub3AiLCJmaWxlQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsIm9uU3VibWl0SGFuZGxlciIsInVwZGF0ZWRPYmoiLCJpbWFnZSIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiaW1hZ2VfdXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJwcmV2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});