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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const fileInputRef = useRef(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        onClick: ()=>{\n            var _fileInputRef_current;\n            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n        },\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 23,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        if (e.target.files && e.target.files.length > 0) {\n            setFileData(e.target.files[0]);\n        }\n    };\n    const onSubmitHandler = (e)=>{\n        e.preventDefault();\n        if (fileData) {\n            setLoading(true);\n            const updatedObj = {\n                ...book,\n                image: fileData\n            };\n            dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    ref: fileInputRef,\n                    onChange: fileChangeHandler,\n                    style: {\n                        display: \"none\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    src: book.image_url,\n                    alt: \"avatar\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined) : uploadButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"dowrXKQzKuGlytUe5Lpg1y5dPEk=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ3JDO0FBQ2tCO0FBQ21CO0FBUWxFLE1BQU1PLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQixNQUFNSyxlQUFlQyxPQUF5QjtJQUU5QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1lLDZCQUNGLDhEQUFDQztRQUFPQyxPQUFPO1lBQUVDLFFBQVE7WUFBR0MsWUFBWTtRQUFPO1FBQUdDLE1BQUs7UUFBU0MsU0FBUztnQkFBTVo7b0JBQUFBLHdCQUFBQSxhQUFhYSxPQUFPLGNBQXBCYiw0Q0FBQUEsc0JBQXNCYyxLQUFLOzs7WUFDckdaLHdCQUFVLDhEQUFDViw0R0FBZUE7Ozs7MENBQU0sOERBQUNDLDRHQUFZQTs7Ozs7MEJBQzlDLDhEQUFDc0I7Z0JBQUlQLE9BQU87b0JBQUVRLFdBQVc7Z0JBQUU7MEJBQUc7Ozs7Ozs7Ozs7OztJQUl0QyxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkIsSUFBSUEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLElBQUlGLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRztZQUM3Q2hCLFlBQVlhLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDakM7SUFDSjtJQUVBLE1BQU1FLGtCQUFrQixDQUFDSjtRQUNyQkEsRUFBRUssY0FBYztRQUNoQixJQUFJbkIsVUFBVTtZQUNWRCxXQUFXO1lBQ1gsTUFBTXFCLGFBQWE7Z0JBQUUsR0FBRzFCLElBQUk7Z0JBQUUyQixPQUFPckI7WUFBUztZQUM5Q0wsU0FBU0gsK0VBQW1CQSxDQUFDNEI7WUFDN0JyQixXQUFXO1FBQ2Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDWTtrQkFDRyw0RUFBQ1c7WUFBS0MsVUFBVUw7WUFBaUJNLE1BQUs7OzhCQUNsQyw4REFBQ0M7b0JBQU1sQixNQUFLO29CQUFPbUIsS0FBSzlCO29CQUFjK0IsVUFBVWQ7b0JBQW1CVCxPQUFPO3dCQUFFd0IsU0FBUztvQkFBTzs7Ozs7O2dCQUMzRmxDLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTW1DLFNBQVMsa0JBQ1osOERBQUN2Qyx5RUFBS0E7b0JBQUN3QyxLQUFLcEMsS0FBS21DLFNBQVM7b0JBQUVFLEtBQUk7b0JBQVMzQixPQUFPO3dCQUFFNEIsT0FBTztvQkFBTztvQkFBR0MsU0FBUzs7Ozs7Z0NBQVkvQjs7Ozs7Ozs7Ozs7O0FBSzVHO0dBekNNVDs7UUFDZUYsd0RBQWNBOzs7S0FEN0JFO0FBMkNOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4PzllNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tJbWFnZUJ5SWQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMnO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxuXG5pbnRlcmZhY2UgSW1hZ2VVcGxvYWRlclByb3BzIHtcbiAgICBib29rOiBQYXJ0aWFsPEJvb2s+O1xufVxuXG5jb25zdCBJbWFnZVVwbG9hZGVyID0gKHsgYm9vayB9OiBJbWFnZVVwbG9hZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2ZpbGVEYXRhLCBzZXRGaWxlRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6IDAsIGJhY2tncm91bmQ6ICdub25lJyB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZCBpbWFnZTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgY29uc3QgZmlsZUNoYW5nZUhhbmRsZXIgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldEZpbGVEYXRhKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZmlsZURhdGEpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkT2JqID0geyAuLi5ib29rLCBpbWFnZTogZmlsZURhdGEgfTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUJvb2tJbWFnZUJ5SWQodXBkYXRlZE9iaikpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IG5hbWU9XCJlZGl0IHByb2ZpbGUgZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHJlZj17ZmlsZUlucHV0UmVmfSBvbkNoYW5nZT17ZmlsZUNoYW5nZUhhbmRsZXJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuICAgICAgICAgICAgICAgIHtib29rPy5pbWFnZV91cmwgP1xuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybH0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwcmV2aWV3PXtmYWxzZX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVVwbG9hZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9hZGluZ091dGxpbmVkIiwiUGx1c091dGxpbmVkIiwiSW1hZ2UiLCJ1c2VBcHBEaXNwYXRjaCIsInVwZGF0ZUJvb2tJbWFnZUJ5SWQiLCJJbWFnZVVwbG9hZGVyIiwiYm9vayIsImRpc3BhdGNoIiwiZmlsZUlucHV0UmVmIiwidXNlUmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaWxlRGF0YSIsInNldEZpbGVEYXRhIiwidXBsb2FkQnV0dG9uIiwiYnV0dG9uIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwidHlwZSIsIm9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJkaXYiLCJtYXJnaW5Ub3AiLCJmaWxlQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZE9iaiIsImltYWdlIiwiZm9ybSIsIm9uU3VibWl0IiwibmFtZSIsImlucHV0IiwicmVmIiwib25DaGFuZ2UiLCJkaXNwbGF5IiwiaW1hZ2VfdXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJwcmV2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});