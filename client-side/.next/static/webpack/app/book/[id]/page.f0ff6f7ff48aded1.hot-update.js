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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-zinc-300 rounded-lg p-2 hover:border-sky-400 hover:text-sky-400 ease-in duration-100\",\n        type: \"button\",\n        onClick: ()=>{\n            var _fileInputRef_current;\n            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n        },\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 21,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 21,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        if (e.target.files && e.target.files.length > 0) {\n            const selectedFile = e.target.files[0];\n            setFileData(selectedFile);\n            setLoading(true);\n            const updatedObj = {\n                ...book,\n                image: selectedFile\n            };\n            dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                ref: fileInputRef,\n                onChange: fileChangeHandler,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                src: book.image_url,\n                alt: \"avatar\",\n                className: \"w-[250px] max-w-[350px] rounded shadow-md cursor-pointer hover:shadow-2xl ease-in duration-100\",\n                preview: false,\n                onClick: ()=>{\n                    var _fileInputRef_current;\n                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n                }\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined) : uploadButton\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"UszzFNL2ylTqr2bNnHO+Ty3bErM=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2tCO0FBQ3JDO0FBQ2tCO0FBQ21CO0FBT2xFLE1BQU1RLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUMvQixNQUFNSyxlQUFlVCw2Q0FBTUEsQ0FBbUI7SUFFOUMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBYztJQUV0RCxNQUFNZSw2QkFDRiw4REFBQ0M7UUFBT0MsV0FBVTtRQUFxR0MsTUFBSztRQUFTQyxTQUFTO2dCQUFNVDtvQkFBQUEsd0JBQUFBLGFBQWFVLE9BQU8sY0FBcEJWLDRDQUFBQSxzQkFBc0JXLEtBQUs7OztZQUMxS1Ysd0JBQVUsOERBQUNULDRHQUFlQTs7OzswQ0FBTSw4REFBQ0MsNEdBQVlBOzs7OzswQkFDOUMsOERBQUNtQjtnQkFBSUMsT0FBTztvQkFBRUMsV0FBVztnQkFBRTswQkFBRzs7Ozs7Ozs7Ozs7O0lBSXRDLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSUYsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO1lBQzdDLE1BQU1DLGVBQWVKLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7WUFDdENkLFlBQVlnQjtZQUVabEIsV0FBVztZQUVYLE1BQU1tQixhQUFhO2dCQUFFLEdBQUd2QixJQUFJO2dCQUFFd0IsT0FBT0Y7WUFBYTtZQUNsRHJCLFNBQVNILCtFQUFtQkEsQ0FBQ3lCO1lBRTdCbkIsV0FBVztRQUNmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1U7OzBCQUNHLDhEQUFDVztnQkFBTWYsTUFBSztnQkFBT2dCLEtBQUt4QjtnQkFBY3lCLFVBQVVWO2dCQUFtQkYsT0FBTztvQkFBRWEsU0FBUztnQkFBTzs7Ozs7O1lBQzNGNUIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNNkIsU0FBUyxrQkFDWiw4REFBQ2pDLHlFQUFLQTtnQkFBQ2tDLEtBQUs5QixLQUFLNkIsU0FBUztnQkFBRUUsS0FBSTtnQkFBU3RCLFdBQVU7Z0JBQWlHdUIsU0FBUztnQkFBT3JCLFNBQVM7d0JBQU1UOzRCQUFBQSx3QkFBQUEsYUFBYVUsT0FBTyxjQUFwQlYsNENBQUFBLHNCQUFzQlcsS0FBSzs7Ozs7OzRCQUFTTjs7Ozs7OztBQUl2TztHQXBDTVI7O1FBQ2VGLHdEQUFjQTs7O0tBRDdCRTtBQXNDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD85ZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tJbWFnZUJ5SWQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMnO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxuaW50ZXJmYWNlIEltYWdlVXBsb2FkZXJQcm9wcyB7XG4gICAgYm9vazogUGFydGlhbDxCb29rPjtcbn1cblxuY29uc3QgSW1hZ2VVcGxvYWRlciA9ICh7IGJvb2sgfTogSW1hZ2VVcGxvYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItemluYy0zMDAgcm91bmRlZC1sZyBwLTIgaG92ZXI6Ym9yZGVyLXNreS00MDAgaG92ZXI6dGV4dC1za3ktNDAwIGVhc2UtaW4gZHVyYXRpb24tMTAwJyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZCBpbWFnZTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgY29uc3QgZmlsZUNoYW5nZUhhbmRsZXIgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgc2V0RmlsZURhdGEoc2VsZWN0ZWRGaWxlKTtcblxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9iaiA9IHsgLi4uYm9vaywgaW1hZ2U6IHNlbGVjdGVkRmlsZSB9O1xuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlQm9va0ltYWdlQnlJZCh1cGRhdGVkT2JqKSk7XG5cbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZWY9e2ZpbGVJbnB1dFJlZn0gb25DaGFuZ2U9e2ZpbGVDaGFuZ2VIYW5kbGVyfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgIHtib29rPy5pbWFnZV91cmwgP1xuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jvb2suaW1hZ2VfdXJsfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9J3ctWzI1MHB4XSBtYXgtdy1bMzUwcHhdIHJvdW5kZWQgc2hhZG93LW1kIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy0yeGwgZWFzZS1pbiBkdXJhdGlvbi0xMDAnIHByZXZpZXc9e2ZhbHNlfSBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkxvYWRpbmdPdXRsaW5lZCIsIlBsdXNPdXRsaW5lZCIsIkltYWdlIiwidXNlQXBwRGlzcGF0Y2giLCJ1cGRhdGVCb29rSW1hZ2VCeUlkIiwiSW1hZ2VVcGxvYWRlciIsImJvb2siLCJkaXNwYXRjaCIsImZpbGVJbnB1dFJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlsZURhdGEiLCJzZXRGaWxlRGF0YSIsInVwbG9hZEJ1dHRvbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJmaWxlQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInNlbGVjdGVkRmlsZSIsInVwZGF0ZWRPYmoiLCJpbWFnZSIsImlucHV0IiwicmVmIiwib25DaGFuZ2UiLCJkaXNwbGF5IiwiaW1hZ2VfdXJsIiwic3JjIiwiYWx0IiwicHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});