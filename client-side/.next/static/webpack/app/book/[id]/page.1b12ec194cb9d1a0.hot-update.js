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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Image_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Image_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Image_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"primary\",\n        className: \"\",\n        onClick: ()=>{\n            var _fileInputRef_current;\n            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n        },\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        if (e.target.files && e.target.files.length > 0) {\n            setFileData(e.target.files[0]);\n        }\n    };\n    const onSubmitHandler = (e)=>{\n        e.preventDefault();\n        if (fileData) {\n            setLoading(true);\n            const updatedObj = {\n                ...book,\n                image: fileData\n            };\n            dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    ref: fileInputRef,\n                    onChange: fileChangeHandler,\n                    style: {\n                        display: \"none\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Image_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    src: book.image_url,\n                    alt: \"avatar\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined) : uploadButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"dowrXKQzKuGlytUe5Lpg1y5dPEk=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNrQjtBQUM3QjtBQUNVO0FBQ21CO0FBUWxFLE1BQU1TLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQixNQUFNSyxlQUFlWCw2Q0FBTUEsQ0FBbUI7SUFFOUMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNZSw2QkFDRiw4REFBQ1osZ0ZBQU1BO1FBQUNhLE1BQUs7UUFBVUMsV0FBVTtRQUFHQyxTQUFTO2dCQUFNUjtvQkFBQUEsd0JBQUFBLGFBQWFTLE9BQU8sY0FBcEJULDRDQUFBQSxzQkFBc0JVLEtBQUs7OztZQUN6RVQsd0JBQVUsOERBQUNWLDRHQUFlQTs7OzswQ0FBTSw4REFBQ0MsNEdBQVlBOzs7OzswQkFDOUMsOERBQUNtQjtnQkFBSUMsT0FBTztvQkFBRUMsV0FBVztnQkFBRTswQkFBRzs7Ozs7Ozs7Ozs7O0lBSXRDLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSUYsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO1lBQzdDZCxZQUFZVyxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ2pDO0lBQ0o7SUFFQSxNQUFNRSxrQkFBa0IsQ0FBQ0o7UUFDckJBLEVBQUVLLGNBQWM7UUFDaEIsSUFBSWpCLFVBQVU7WUFDVkQsV0FBVztZQUNYLE1BQU1tQixhQUFhO2dCQUFFLEdBQUd2QixJQUFJO2dCQUFFd0IsT0FBT25CO1lBQVM7WUFDOUNKLFNBQVNILCtFQUFtQkEsQ0FBQ3lCO1lBQzdCbkIsV0FBVztRQUNmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1M7a0JBQ0csNEVBQUNZO1lBQUtDLFVBQVVMO1lBQWlCTSxNQUFLOzs4QkFDbEMsOERBQUNDO29CQUFNcEIsTUFBSztvQkFBT3FCLEtBQUszQjtvQkFBYzRCLFVBQVVkO29CQUFtQkYsT0FBTzt3QkFBRWlCLFNBQVM7b0JBQU87Ozs7OztnQkFDM0YvQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1nQyxTQUFTLGtCQUNaLDhEQUFDcEMsZ0ZBQUtBO29CQUFDcUMsS0FBS2pDLEtBQUtnQyxTQUFTO29CQUFFRSxLQUFJO29CQUFTcEIsT0FBTzt3QkFBRXFCLE9BQU87b0JBQU87b0JBQUdDLFNBQVM7Ozs7O2dDQUFZN0I7Ozs7Ozs7Ozs7OztBQUs1RztHQXpDTVI7O1FBQ2VGLHdEQUFjQTs7O0tBRDdCRTtBQTJDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD85ZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBCdXR0b24sIEltYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0Avc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXBkYXRlQm9va0ltYWdlQnlJZCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9ib29rQWN0aW9ucyc7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnQC9tb2RlbHMnO1xuXG5cbmludGVyZmFjZSBJbWFnZVVwbG9hZGVyUHJvcHMge1xuICAgIGJvb2s6IFBhcnRpYWw8Qm9vaz47XG59XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSAoeyBib29rIH06IEltYWdlVXBsb2FkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPScnIG9uQ2xpY2s9eygpID0+IGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKTtcblxuICAgIGNvbnN0IGZpbGVDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0RmlsZURhdGEoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChmaWxlRGF0YSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRPYmogPSB7IC4uLmJvb2ssIGltYWdlOiBmaWxlRGF0YSB9O1xuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlQm9va0ltYWdlQnlJZCh1cGRhdGVkT2JqKSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gbmFtZT1cImVkaXQgcHJvZmlsZSBmb3JtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgcmVmPXtmaWxlSW5wdXRSZWZ9IG9uQ2hhbmdlPXtmaWxlQ2hhbmdlSGFuZGxlcn0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgICAgICAgICAge2Jvb2s/LmltYWdlX3VybCA/XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jvb2suaW1hZ2VfdXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHByZXZpZXc9e2ZhbHNlfSAvPiA6IHVwbG9hZEJ1dHRvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMb2FkaW5nT3V0bGluZWQiLCJQbHVzT3V0bGluZWQiLCJCdXR0b24iLCJJbWFnZSIsInVzZUFwcERpc3BhdGNoIiwidXBkYXRlQm9va0ltYWdlQnlJZCIsIkltYWdlVXBsb2FkZXIiLCJib29rIiwiZGlzcGF0Y2giLCJmaWxlSW5wdXRSZWYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpbGVEYXRhIiwic2V0RmlsZURhdGEiLCJ1cGxvYWRCdXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnQiLCJjbGljayIsImRpdiIsInN0eWxlIiwibWFyZ2luVG9wIiwiZmlsZUNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJvblN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRPYmoiLCJpbWFnZSIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwiZGlzcGxheSIsImltYWdlX3VybCIsInNyYyIsImFsdCIsIndpZHRoIiwicHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});