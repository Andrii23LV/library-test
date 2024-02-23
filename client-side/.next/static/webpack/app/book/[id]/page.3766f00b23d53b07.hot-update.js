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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Image,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _barrel_optimize_names_Image_message_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Image,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst getBase64 = (img, callback)=>{\n    const reader = new FileReader();\n    reader.addEventListener(\"load\", ()=>callback(reader.result));\n    reader.readAsDataURL(img);\n};\nconst beforeUpload = (file)=>{\n    const isJpgOrPng = file.type === \"image/jpeg\" || file.type === \"image/png\";\n    if (!isJpgOrPng) {\n        _barrel_optimize_names_Image_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"You can only upload JPG/PNG file!\");\n    }\n    const isLt2M = file.size / 1024 / 1024 < 2;\n    if (!isLt2M) {\n        _barrel_optimize_names_Image_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Image must smaller than 2MB!\");\n    }\n    return isJpgOrPng && isLt2M;\n};\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (info)=>{\n        if (info.file.status === \"uploading\") {\n            setLoading(true);\n            return;\n        }\n        if (info.file.status === \"done\") {\n            getBase64(info.file.originFileObj, (image)=>{\n                setLoading(false);\n                const updatedObj = {\n                    ...book,\n                    image: image\n                };\n                dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n            });\n        }\n    };\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n    return(// <Upload\n    //     name=\"avatar\"\n    //     listType=\"picture-card\"\n    //     className=\"avatar-uploader\"\n    //     showUploadList={false}\n    //     // action=\"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188\"\n    //     beforeUpload={beforeUpload}\n    //     onChange={handleChange}\n    // >\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        id: \"imageInput\",\n        name: \"image\",\n        accept: \"image/*\",\n        children: (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_message_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            src: book.image_url,\n            alt: \"avatar\",\n            style: {\n                width: \"100%\"\n            },\n            preview: false\n        }, void 0, false, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 73,\n            columnNumber: 17\n        }, undefined) : uploadButton\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined));\n};\n_s(ImageUploader, \"Bk4Yt7Xs1W1KtoGDRMfMFbpPJmE=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUMwQjtBQUNwQjtBQUVDO0FBQ21CO0FBU2xFLE1BQU1RLFlBQVksQ0FBQ0MsS0FBZUM7SUFDOUIsTUFBTUMsU0FBUyxJQUFJQztJQUNuQkQsT0FBT0UsZ0JBQWdCLENBQUMsUUFBUSxJQUFNSCxTQUFTQyxPQUFPRyxNQUFNO0lBQzVESCxPQUFPSSxhQUFhLENBQUNOO0FBQ3pCO0FBRUEsTUFBTU8sZUFBZSxDQUFDQztJQUNsQixNQUFNQyxhQUFhRCxLQUFLRSxJQUFJLEtBQUssZ0JBQWdCRixLQUFLRSxJQUFJLEtBQUs7SUFDL0QsSUFBSSxDQUFDRCxZQUFZO1FBQ2JiLGlGQUFPQSxDQUFDZSxLQUFLLENBQUM7SUFDbEI7SUFDQSxNQUFNQyxTQUFTSixLQUFLSyxJQUFJLEdBQUcsT0FBTyxPQUFPO0lBQ3pDLElBQUksQ0FBQ0QsUUFBUTtRQUNUaEIsaUZBQU9BLENBQUNlLEtBQUssQ0FBQztJQUNsQjtJQUNBLE9BQU9GLGNBQWNHO0FBQ3pCO0FBRUEsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsSUFBSSxFQUFzQjs7SUFDL0MsTUFBTUMsV0FBV25CLDREQUFjQTtJQUUvQixNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNMkIsZUFBd0MsQ0FBQ0M7UUFDM0MsSUFBSUEsS0FBS1osSUFBSSxDQUFDYSxNQUFNLEtBQUssYUFBYTtZQUNsQ0gsV0FBVztZQUNYO1FBQ0o7UUFDQSxJQUFJRSxLQUFLWixJQUFJLENBQUNhLE1BQU0sS0FBSyxRQUFRO1lBQzdCdEIsVUFBVXFCLEtBQUtaLElBQUksQ0FBQ2MsYUFBYSxFQUFjLENBQUNDO2dCQUM1Q0wsV0FBVztnQkFFWCxNQUFNTSxhQUFhO29CQUFFLEdBQUdULElBQUk7b0JBQUVRLE9BQU9BO2dCQUFNO2dCQUUzQ1AsU0FBU2xCLCtFQUFtQkEsQ0FBQzBCO1lBQ2pDO1FBQ0o7SUFDSjtJQUVBLE1BQU1DLDZCQUNGLDhEQUFDQztRQUFPQyxPQUFPO1lBQUVDLFFBQVE7WUFBR0MsWUFBWTtRQUFPO1FBQUduQixNQUFLOztZQUNsRE8sd0JBQVUsOERBQUN4Qiw0R0FBZUE7Ozs7MENBQU0sOERBQUNDLDRHQUFZQTs7Ozs7MEJBQzlDLDhEQUFDb0M7Z0JBQUlILE9BQU87b0JBQUVJLFdBQVc7Z0JBQUU7MEJBQUc7Ozs7Ozs7Ozs7OztJQUl0QyxPQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsK0VBQStFO0lBQy9FLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsSUFBSTtrQkFDSiw4REFBQ0M7UUFBTXRCLE1BQUs7UUFBT3VCLElBQUc7UUFBYUMsTUFBSztRQUFRQyxRQUFPO2tCQUNsRHBCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXFCLFNBQVMsa0JBQ1osOERBQUN6QyxpRkFBS0E7WUFBQzBDLEtBQUt0QixLQUFLcUIsU0FBUztZQUFFRSxLQUFJO1lBQVNYLE9BQU87Z0JBQUVZLE9BQU87WUFBTztZQUFHQyxTQUFTOzs7Ozt3QkFBWWY7Ozs7OztBQUt4RztHQTdDTVg7O1FBQ2VqQix3REFBY0E7OztLQUQ3QmlCO0FBK0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4PzllNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBJbWFnZSwgbWVzc2FnZSwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdHlwZSB7IEdldFByb3AsIFVwbG9hZFByb3BzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0Avc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgdXBkYXRlQm9va0ltYWdlQnlJZCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9ib29rQWN0aW9ucyc7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnQC9tb2RlbHMnO1xuXG50eXBlIEZpbGVUeXBlID0gUGFyYW1ldGVyczxHZXRQcm9wPFVwbG9hZFByb3BzLCAnYmVmb3JlVXBsb2FkJz4+WzBdO1xuXG5pbnRlcmZhY2UgSW1hZ2VVcGxvYWRlclByb3BzIHtcbiAgICBib29rOiBQYXJ0aWFsPEJvb2s+O1xufVxuXG5jb25zdCBnZXRCYXNlNjQgPSAoaW1nOiBGaWxlVHlwZSwgY2FsbGJhY2s6ICh1cmw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0IGFzIHN0cmluZykpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XG59O1xuXG5jb25zdCBiZWZvcmVVcGxvYWQgPSAoZmlsZTogRmlsZVR5cGUpID0+IHtcbiAgICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJztcbiAgICBpZiAoIWlzSnBnT3JQbmcpIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcignWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhJyk7XG4gICAgfVxuICAgIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMjtcbiAgICBpZiAoIWlzTHQyTSkge1xuICAgICAgICBtZXNzYWdlLmVycm9yKCdJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhJyk7XG4gICAgfVxuICAgIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcbn07XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSAoeyBib29rIH06IEltYWdlVXBsb2FkZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTogVXBsb2FkUHJvcHNbJ29uQ2hhbmdlJ10gPSAoaW5mbykgPT4ge1xuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqIGFzIEZpbGVUeXBlLCAoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRPYmogPSB7IC4uLmJvb2ssIGltYWdlOiBpbWFnZSB9O1xuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlQm9va0ltYWdlQnlJZCh1cGRhdGVkT2JqKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgYm9yZGVyOiAwLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZCBpbWFnZTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPFVwbG9hZFxuICAgICAgICAvLyAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgIC8vICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXG4gICAgICAgIC8vICAgICBjbGFzc05hbWU9XCJhdmF0YXItdXBsb2FkZXJcIlxuICAgICAgICAvLyAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxuICAgICAgICAvLyAgICAgLy8gYWN0aW9uPVwiaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvNDM1ZTIyNGMtNDRmYi00NzczLTlmYWYtMzgwYzVlNmEyMTg4XCJcbiAgICAgICAgLy8gICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgICAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLy8gPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImltYWdlSW5wdXRcIiBuYW1lPVwiaW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS8qXCI+XG4gICAgICAgICAgICB7Ym9vaz8uaW1hZ2VfdXJsID9cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybH0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwcmV2aWV3PXtmYWxzZX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgLy8gPC9VcGxvYWQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2FkaW5nT3V0bGluZWQiLCJQbHVzT3V0bGluZWQiLCJJbWFnZSIsIm1lc3NhZ2UiLCJ1c2VBcHBEaXNwYXRjaCIsInVwZGF0ZUJvb2tJbWFnZUJ5SWQiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsImVycm9yIiwiaXNMdDJNIiwic2l6ZSIsIkltYWdlVXBsb2FkZXIiLCJib29rIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJvcmlnaW5GaWxlT2JqIiwiaW1hZ2UiLCJ1cGRhdGVkT2JqIiwidXBsb2FkQnV0dG9uIiwiYnV0dG9uIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiZGl2IiwibWFyZ2luVG9wIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJhY2NlcHQiLCJpbWFnZV91cmwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInByZXZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});