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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// const getBase64 = (img: FileType, callback: (url: string) => void) => {\n//     const reader = new FileReader();\n//     reader.addEventListener('load', () => callback(reader.result as string));\n//     reader.readAsDataURL(img);\n// };\n// const beforeUpload = (file: FileType) => {\n//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';\n//     if (!isJpgOrPng) {\n//         message.error('You can only upload JPG/PNG file!');\n//     }\n//     const isLt2M = file.size / 1024 / 1024 < 2;\n//     if (!isLt2M) {\n//         message.error('Image must smaller than 2MB!');\n//     }\n//     return isJpgOrPng && isLt2M;\n// };\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const handleChange: UploadProps['onChange'] = (info) => {\n    //     if (info.file.status === 'uploading') {\n    //         setLoading(true);\n    //         return;\n    //     }\n    //     if (info.file.status === 'done') {\n    //         getBase64(info.file.originFileObj as FileType, (image) => {\n    //             setLoading(false);\n    //             const updatedObj = { ...book, image: image };\n    //             dispatch(updateBookImageById(updatedObj));\n    //         });\n    //     }\n    // };\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n    const fileChangeHandler = (e)=>{\n        setFileData(e.target.files[0]);\n    };\n    const onSubmitHandler = ()=>{\n        // if (\n        //     (fileData && fileData.type === \"image/png\") ||\n        //     fileData.type === \"image/jpeg\" ||\n        //     fileData.type === \"image/jpg\"\n        // ) {\n        const updatedObj = {\n            ...book,\n            image: fileData\n        };\n        dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: fileChangeHandler\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined),\n                (book === null || book === void 0 ? void 0 : book.image_url) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    src: book.image_url,\n                    alt: \"avatar\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 21\n                }, undefined) : uploadButton\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"Bk4Yt7Xs1W1KtoGDRMfMFbpPJmE=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ3BCO0FBRUM7QUFDbUI7QUFTbEUsMEVBQTBFO0FBQzFFLHVDQUF1QztBQUN2QyxnRkFBZ0Y7QUFDaEYsaUNBQWlDO0FBQ2pDLEtBQUs7QUFFTCw2Q0FBNkM7QUFDN0Msa0ZBQWtGO0FBQ2xGLHlCQUF5QjtBQUN6Qiw4REFBOEQ7QUFDOUQsUUFBUTtBQUNSLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIseURBQXlEO0FBQ3pELFFBQVE7QUFDUixtQ0FBbUM7QUFDbkMsS0FBSztBQUVMLE1BQU1PLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsNERBQTREO0lBQzVELDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLGlDQUFpQztJQUVqQyw0REFBNEQ7SUFFNUQseURBQXlEO0lBQ3pELGNBQWM7SUFDZCxRQUFRO0lBQ1IsS0FBSztJQUVMLE1BQU1XLDZCQUNGLDhEQUFDQztRQUFPQyxPQUFPO1lBQUVDLFFBQVE7WUFBR0MsWUFBWTtRQUFPO1FBQUdDLE1BQUs7O1lBQ2xEUCx3QkFBVSw4REFBQ1IsNEdBQWVBOzs7OzBDQUFNLDhEQUFDQyw0R0FBWUE7Ozs7OzBCQUM5Qyw4REFBQ2U7Z0JBQUlKLE9BQU87b0JBQUVLLFdBQVc7Z0JBQUU7MEJBQUc7Ozs7Ozs7Ozs7OztJQUl0QyxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkJDLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDakM7SUFFQSxNQUFNQyxrQkFBa0I7UUFDcEIsT0FBTztRQUNQLHFEQUFxRDtRQUNyRCx3Q0FBd0M7UUFDeEMsb0NBQW9DO1FBQ3BDLE1BQU07UUFFTixNQUFNQyxhQUFhO1lBQUUsR0FBR2xCLElBQUk7WUFBRW1CLE9BQU9DO1FBQVM7UUFFOUNuQixTQUFTSCwrRUFBbUJBLENBQUNvQjtJQUNqQztJQUVBLHFCQUNJLDhEQUFDUjtrQkFDRyw0RUFBQ1c7WUFBS0MsVUFBVUw7WUFBaUJNLE1BQUs7OzhCQUNsQyw4REFBQ0M7b0JBQU1mLE1BQUs7b0JBQU9nQixVQUFVYjs7Ozs7O2dCQUM1QlosQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNMEIsU0FBUyxrQkFDWiw4REFBQzlCLHlFQUFLQTtvQkFBQytCLEtBQUszQixLQUFLMEIsU0FBUztvQkFBRUUsS0FBSTtvQkFBU3RCLE9BQU87d0JBQUV1QixPQUFPO29CQUFPO29CQUFHQyxTQUFTOzs7OztnQ0FBWTFCOzs7Ozs7Ozs7Ozs7QUFLNUc7R0F0RE1MOztRQUNlRix3REFBY0E7OztLQUQ3QkU7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci50c3g/OWU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IEltYWdlLCBtZXNzYWdlLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgR2V0UHJvcCwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyB1cGRhdGVCb29rSW1hZ2VCeUlkIH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zL2Jvb2tBY3Rpb25zJztcbmltcG9ydCB7IEJvb2sgfSBmcm9tICdAL21vZGVscyc7XG5cbnR5cGUgRmlsZVR5cGUgPSBQYXJhbWV0ZXJzPEdldFByb3A8VXBsb2FkUHJvcHMsICdiZWZvcmVVcGxvYWQnPj5bMF07XG5cbmludGVyZmFjZSBJbWFnZVVwbG9hZGVyUHJvcHMge1xuICAgIGJvb2s6IFBhcnRpYWw8Qm9vaz47XG59XG5cbi8vIGNvbnN0IGdldEJhc2U2NCA9IChpbWc6IEZpbGVUeXBlLCBjYWxsYmFjazogKHVybDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4vLyAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbi8vICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKSk7XG4vLyAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTtcbi8vIH07XG5cbi8vIGNvbnN0IGJlZm9yZVVwbG9hZCA9IChmaWxlOiBGaWxlVHlwZSkgPT4ge1xuLy8gICAgIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnO1xuLy8gICAgIGlmICghaXNKcGdPclBuZykge1xuLy8gICAgICAgICBtZXNzYWdlLmVycm9yKCdZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSEnKTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xuLy8gICAgIGlmICghaXNMdDJNKSB7XG4vLyAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNO1xuLy8gfTtcblxuY29uc3QgSW1hZ2VVcGxvYWRlciA9ICh7IGJvb2sgfTogSW1hZ2VVcGxvYWRlclByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlOiBVcGxvYWRQcm9wc1snb25DaGFuZ2UnXSA9IChpbmZvKSA9PiB7XG4gICAgLy8gICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgIC8vICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgLy8gICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmogYXMgRmlsZVR5cGUsIChpbWFnZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9iaiA9IHsgLi4uYm9vaywgaW1hZ2U6IGltYWdlIH07XG5cbiAgICAvLyAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVCb29rSW1hZ2VCeUlkKHVwZGF0ZWRPYmopKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6IDAsIGJhY2tncm91bmQ6ICdub25lJyB9fSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+VXBsb2FkIGltYWdlPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG5cbiAgICBjb25zdCBmaWxlQ2hhbmdlSGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgc2V0RmlsZURhdGEoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIGlmIChcbiAgICAgICAgLy8gICAgIChmaWxlRGF0YSAmJiBmaWxlRGF0YS50eXBlID09PSBcImltYWdlL3BuZ1wiKSB8fFxuICAgICAgICAvLyAgICAgZmlsZURhdGEudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHxcbiAgICAgICAgLy8gICAgIGZpbGVEYXRhLnR5cGUgPT09IFwiaW1hZ2UvanBnXCJcbiAgICAgICAgLy8gKSB7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZE9iaiA9IHsgLi4uYm9vaywgaW1hZ2U6IGZpbGVEYXRhIH07XG5cbiAgICAgICAgZGlzcGF0Y2godXBkYXRlQm9va0ltYWdlQnlJZCh1cGRhdGVkT2JqKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfSBuYW1lPVwiZWRpdCBwcm9maWxlIGZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17ZmlsZUNoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAge2Jvb2s/LmltYWdlX3VybCA/XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jvb2suaW1hZ2VfdXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHByZXZpZXc9e2ZhbHNlfSAvPiA6IHVwbG9hZEJ1dHRvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2FkaW5nT3V0bGluZWQiLCJQbHVzT3V0bGluZWQiLCJJbWFnZSIsInVzZUFwcERpc3BhdGNoIiwidXBkYXRlQm9va0ltYWdlQnlJZCIsIkltYWdlVXBsb2FkZXIiLCJib29rIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEJ1dHRvbiIsImJ1dHRvbiIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInR5cGUiLCJkaXYiLCJtYXJnaW5Ub3AiLCJmaWxlQ2hhbmdlSGFuZGxlciIsImUiLCJzZXRGaWxlRGF0YSIsInRhcmdldCIsImZpbGVzIiwib25TdWJtaXRIYW5kbGVyIiwidXBkYXRlZE9iaiIsImltYWdlIiwiZmlsZURhdGEiLCJmb3JtIiwib25TdWJtaXQiLCJuYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsImltYWdlX3VybCIsInNyYyIsImFsdCIsIndpZHRoIiwicHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});