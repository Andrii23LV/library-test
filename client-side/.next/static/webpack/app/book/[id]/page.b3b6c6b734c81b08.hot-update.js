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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        setFileData(e.target.files[0]);\n    };\n    const onSubmitHandler = ()=>{\n        // if (\n        //     (fileData && fileData.type === \"image/png\") ||\n        //     fileData.type === \"image/jpeg\" ||\n        //     fileData.type === \"image/jpg\"\n        // ) {\n        const updatedObj = {\n            ...book,\n            image: fileData\n        };\n        dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: fileChangeHandler\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    src: book.image_url,\n                    alt: \"avatar\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined) : uploadButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"a5nI+/AzFdioB1tROqM7584oI6k=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ3BCO0FBRUM7QUFDbUI7QUFTbEUsTUFBTU8sZ0JBQWdCO1FBQUMsRUFBRUMsSUFBSSxFQUFzQjs7SUFDL0MsTUFBTUMsV0FBV0osNERBQWNBO0lBRS9CLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFFekMsTUFBTWEsNkJBQ0YsOERBQUNDO1FBQU9DLE9BQU87WUFBRUMsUUFBUTtZQUFHQyxZQUFZO1FBQU87UUFBR0MsTUFBSzs7WUFDbERULHdCQUFVLDhEQUFDUiw0R0FBZUE7Ozs7MENBQU0sOERBQUNDLDRHQUFZQTs7Ozs7MEJBQzlDLDhEQUFDaUI7Z0JBQUlKLE9BQU87b0JBQUVLLFdBQVc7Z0JBQUU7MEJBQUc7Ozs7Ozs7Ozs7OztJQUl0QyxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkJWLFlBQVlVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDakM7SUFFQSxNQUFNQyxrQkFBa0I7UUFDcEIsT0FBTztRQUNQLHFEQUFxRDtRQUNyRCx3Q0FBd0M7UUFDeEMsb0NBQW9DO1FBQ3BDLE1BQU07UUFFTixNQUFNQyxhQUFhO1lBQUUsR0FBR25CLElBQUk7WUFBRW9CLE9BQU9oQjtRQUFTO1FBRTlDSCxTQUFTSCwrRUFBbUJBLENBQUNxQjtJQUNqQztJQUVBLHFCQUNJLDhEQUFDUDtrQkFDRyw0RUFBQ1M7WUFBS0MsVUFBVUo7WUFBaUJLLE1BQUs7OzhCQUNsQyw4REFBQ0M7b0JBQU1iLE1BQUs7b0JBQU9jLFVBQVVYOzs7Ozs7Z0JBQzVCZCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU0wQixTQUFTLGtCQUNaLDhEQUFDOUIseUVBQUtBO29CQUFDK0IsS0FBSzNCLEtBQUswQixTQUFTO29CQUFFRSxLQUFJO29CQUFTcEIsT0FBTzt3QkFBRXFCLE9BQU87b0JBQU87b0JBQUdDLFNBQVM7Ozs7O2dDQUFZeEI7Ozs7Ozs7Ozs7OztBQUs1RztHQXZDTVA7O1FBQ2VGLHdEQUFjQTs7O0tBRDdCRTtBQXlDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD85ZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgSW1hZ2UsIG1lc3NhZ2UsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHR5cGUgeyBHZXRQcm9wLCBVcGxvYWRQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tJbWFnZUJ5SWQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMnO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxudHlwZSBGaWxlVHlwZSA9IFBhcmFtZXRlcnM8R2V0UHJvcDxVcGxvYWRQcm9wcywgJ2JlZm9yZVVwbG9hZCc+PlswXTtcblxuaW50ZXJmYWNlIEltYWdlVXBsb2FkZXJQcm9wcyB7XG4gICAgYm9vazogUGFydGlhbDxCb29rPjtcbn1cblxuY29uc3QgSW1hZ2VVcGxvYWRlciA9ICh7IGJvb2sgfTogSW1hZ2VVcGxvYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmaWxlRGF0YSwgc2V0RmlsZURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgYm9yZGVyOiAwLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZCBpbWFnZTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgY29uc3QgZmlsZUNoYW5nZUhhbmRsZXIgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIHNldEZpbGVEYXRhKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAvLyBpZiAoXG4gICAgICAgIC8vICAgICAoZmlsZURhdGEgJiYgZmlsZURhdGEudHlwZSA9PT0gXCJpbWFnZS9wbmdcIikgfHxcbiAgICAgICAgLy8gICAgIGZpbGVEYXRhLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8XG4gICAgICAgIC8vICAgICBmaWxlRGF0YS50eXBlID09PSBcImltYWdlL2pwZ1wiXG4gICAgICAgIC8vICkge1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRPYmogPSB7IC4uLmJvb2ssIGltYWdlOiBmaWxlRGF0YSB9O1xuXG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUJvb2tJbWFnZUJ5SWQodXBkYXRlZE9iaikpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gbmFtZT1cImVkaXQgcHJvZmlsZSBmb3JtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2ZpbGVDaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgIHtib29rPy5pbWFnZV91cmwgP1xuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybH0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwcmV2aWV3PXtmYWxzZX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVVwbG9hZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9hZGluZ091dGxpbmVkIiwiUGx1c091dGxpbmVkIiwiSW1hZ2UiLCJ1c2VBcHBEaXNwYXRjaCIsInVwZGF0ZUJvb2tJbWFnZUJ5SWQiLCJJbWFnZVVwbG9hZGVyIiwiYm9vayIsImRpc3BhdGNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaWxlRGF0YSIsInNldEZpbGVEYXRhIiwidXBsb2FkQnV0dG9uIiwiYnV0dG9uIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwidHlwZSIsImRpdiIsIm1hcmdpblRvcCIsImZpbGVDaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsImZpbGVzIiwib25TdWJtaXRIYW5kbGVyIiwidXBkYXRlZE9iaiIsImltYWdlIiwiZm9ybSIsIm9uU3VibWl0IiwibmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJpbWFnZV91cmwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInByZXZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});