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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Image,Upload,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Image,Upload,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/upload/index.js\");\n/* harmony import */ var _barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Image,Upload,message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst getBase64 = (img, callback)=>{\n    const reader = new FileReader();\n    reader.addEventListener(\"load\", ()=>callback(reader.result));\n    reader.readAsDataURL(img);\n};\nconst beforeUpload = (file)=>{\n    const isJpgOrPng = file.type === \"image/jpeg\" || file.type === \"image/png\";\n    if (!isJpgOrPng) {\n        _barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"You can only upload JPG/PNG file!\");\n    }\n    const isLt2M = file.size / 1024 / 1024 < 2;\n    if (!isLt2M) {\n        _barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Image must smaller than 2MB!\");\n    }\n    return isJpgOrPng && isLt2M;\n};\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (info)=>{\n        if (info.file.status === \"uploading\") {\n            setLoading(true);\n            return;\n        }\n        if (info.file.status === \"done\") {\n            getBase64(info.file, (image)=>{\n                setLoading(false);\n                const updatedObj = {\n                    ...book,\n                    image: image\n                };\n                dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n            });\n        }\n    };\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        name: \"avatar\",\n        listType: \"picture-card\",\n        className: \"avatar-uploader\",\n        showUploadList: false,\n        // action=\"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188\"\n        beforeUpload: beforeUpload,\n        onChange: handleChange,\n        children: (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_Upload_message_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: book.image_url,\n            alt: \"avatar\",\n            style: {\n                width: \"100%\"\n            },\n            preview: false\n        }, void 0, false, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 71,\n            columnNumber: 32\n        }, undefined) : uploadButton\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"Bk4Yt7Xs1W1KtoGDRMfMFbpPJmE=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDMEI7QUFDcEI7QUFFQztBQUNtQjtBQVNsRSxNQUFNUyxZQUFZLENBQUNDLEtBQWVDO0lBQzlCLE1BQU1DLFNBQVMsSUFBSUM7SUFDbkJELE9BQU9FLGdCQUFnQixDQUFDLFFBQVEsSUFBTUgsU0FBU0MsT0FBT0csTUFBTTtJQUM1REgsT0FBT0ksYUFBYSxDQUFDTjtBQUN6QjtBQUVBLE1BQU1PLGVBQWUsQ0FBQ0M7SUFDbEIsTUFBTUMsYUFBYUQsS0FBS0UsSUFBSSxLQUFLLGdCQUFnQkYsS0FBS0UsSUFBSSxLQUFLO0lBQy9ELElBQUksQ0FBQ0QsWUFBWTtRQUNiZCx3RkFBT0EsQ0FBQ2dCLEtBQUssQ0FBQztJQUNsQjtJQUNBLE1BQU1DLFNBQVNKLEtBQUtLLElBQUksR0FBRyxPQUFPLE9BQU87SUFDekMsSUFBSSxDQUFDRCxRQUFRO1FBQ1RqQix3RkFBT0EsQ0FBQ2dCLEtBQUssQ0FBQztJQUNsQjtJQUNBLE9BQU9GLGNBQWNHO0FBQ3pCO0FBRUEsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsSUFBSSxFQUFzQjs7SUFDL0MsTUFBTUMsV0FBV25CLDREQUFjQTtJQUUvQixNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNNEIsZUFBd0MsQ0FBQ0M7UUFDM0MsSUFBSUEsS0FBS1osSUFBSSxDQUFDYSxNQUFNLEtBQUssYUFBYTtZQUNsQ0gsV0FBVztZQUNYO1FBQ0o7UUFDQSxJQUFJRSxLQUFLWixJQUFJLENBQUNhLE1BQU0sS0FBSyxRQUFRO1lBQzdCdEIsVUFBVXFCLEtBQUtaLElBQUksRUFBRSxDQUFDYztnQkFDbEJKLFdBQVc7Z0JBRVgsTUFBTUssYUFBYTtvQkFBRSxHQUFHUixJQUFJO29CQUFFTyxPQUFPQTtnQkFBTTtnQkFFM0NOLFNBQVNsQiwrRUFBbUJBLENBQUN5QjtZQUNqQztRQUNKO0lBQ0o7SUFFQSxNQUFNQyw2QkFDRiw4REFBQ0M7UUFBT0MsT0FBTztZQUFFQyxRQUFRO1lBQUdDLFlBQVk7UUFBTztRQUFHbEIsTUFBSzs7WUFDbERPLHdCQUFVLDhEQUFDekIsNEdBQWVBOzs7OzBDQUFNLDhEQUFDQyw0R0FBWUE7Ozs7OzBCQUM5Qyw4REFBQ29DO2dCQUFJSCxPQUFPO29CQUFFSSxXQUFXO2dCQUFFOzBCQUFHOzs7Ozs7Ozs7Ozs7SUFJdEMscUJBQ0ksOERBQUNsQyx3RkFBTUE7UUFDSG1DLE1BQUs7UUFDTEMsVUFBUztRQUNUQyxXQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQix3RUFBd0U7UUFDeEUzQixjQUFjQTtRQUNkNEIsVUFBVWhCO2tCQUVUSixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1xQixTQUFTLGtCQUFHLDhEQUFDMUMsd0ZBQUtBO1lBQUMyQyxLQUFLdEIsS0FBS3FCLFNBQVM7WUFBRUUsS0FBSTtZQUFTWixPQUFPO2dCQUFFYSxPQUFPO1lBQU87WUFBR0MsU0FBUzs7Ozs7d0JBQVloQjs7Ozs7O0FBR3ZIO0dBekNNVjs7UUFDZWpCLHdEQUFjQTs7O0tBRDdCaUI7QUEyQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci50c3g/OWU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IEltYWdlLCBtZXNzYWdlLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgR2V0UHJvcCwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyB1cGRhdGVCb29rSW1hZ2VCeUlkIH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL2Jvb2tBY3Rpb25zJztcbmltcG9ydCB7IEJvb2sgfSBmcm9tICdAL21vZGVscyc7XG5cbnR5cGUgRmlsZVR5cGUgPSBQYXJhbWV0ZXJzPEdldFByb3A8VXBsb2FkUHJvcHMsICdiZWZvcmVVcGxvYWQnPj5bMF07XG5cbmludGVyZmFjZSBJbWFnZVVwbG9hZGVyUHJvcHMge1xuICAgIGJvb2s6IFBhcnRpYWw8Qm9vaz47XG59XG5cbmNvbnN0IGdldEJhc2U2NCA9IChpbWc6IEZpbGVUeXBlLCBjYWxsYmFjazogKHVybDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKSk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcbn07XG5cbmNvbnN0IGJlZm9yZVVwbG9hZCA9IChmaWxlOiBGaWxlVHlwZSkgPT4ge1xuICAgIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnO1xuICAgIGlmICghaXNKcGdPclBuZykge1xuICAgICAgICBtZXNzYWdlLmVycm9yKCdZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSEnKTtcbiAgICB9XG4gICAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xuICAgIGlmICghaXNMdDJNKSB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xufTtcblxuY29uc3QgSW1hZ2VVcGxvYWRlciA9ICh7IGJvb2sgfTogSW1hZ2VVcGxvYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlOiBVcGxvYWRQcm9wc1snb25DaGFuZ2UnXSA9IChpbmZvKSA9PiB7XG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLCAoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRPYmogPSB7IC4uLmJvb2ssIGltYWdlOiBpbWFnZSB9O1xuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlQm9va0ltYWdlQnlJZCh1cGRhdGVkT2JqKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3sgYm9yZGVyOiAwLCBiYWNrZ3JvdW5kOiAnbm9uZScgfX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlVwbG9hZCBpbWFnZTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVwbG9hZFxuICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXItdXBsb2FkZXJcIlxuICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgLy8gYWN0aW9uPVwiaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvNDM1ZTIyNGMtNDRmYi00NzczLTlmYWYtMzgwYzVlNmEyMTg4XCJcbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Jvb2s/LmltYWdlX3VybCA/IDxJbWFnZSBzcmM9e2Jvb2suaW1hZ2VfdXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHByZXZpZXc9e2ZhbHNlfSAvPiA6IHVwbG9hZEJ1dHRvbn1cbiAgICAgICAgPC9VcGxvYWQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2FkaW5nT3V0bGluZWQiLCJQbHVzT3V0bGluZWQiLCJJbWFnZSIsIm1lc3NhZ2UiLCJVcGxvYWQiLCJ1c2VBcHBEaXNwYXRjaCIsInVwZGF0ZUJvb2tJbWFnZUJ5SWQiLCJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pwZ09yUG5nIiwidHlwZSIsImVycm9yIiwiaXNMdDJNIiwic2l6ZSIsIkltYWdlVXBsb2FkZXIiLCJib29rIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJpbWFnZSIsInVwZGF0ZWRPYmoiLCJ1cGxvYWRCdXR0b24iLCJidXR0b24iLCJzdHlsZSIsImJvcmRlciIsImJhY2tncm91bmQiLCJkaXYiLCJtYXJnaW5Ub3AiLCJuYW1lIiwibGlzdFR5cGUiLCJjbGFzc05hbWUiLCJzaG93VXBsb2FkTGlzdCIsIm9uQ2hhbmdlIiwiaW1hZ2VfdXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJwcmV2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});