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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LoadingOutlined,PlusOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/PlusOutlined.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n/* harmony import */ var _store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/actions/bookActions */ \"(app-pages-browser)/./src/store/actions/bookActions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// const getBase64 = (img: FileType, callback: (url: string) => void) => {\n//     const reader = new FileReader();\n//     reader.addEventListener('load', () => callback(reader.result as string));\n//     reader.readAsDataURL(img);\n// };\n// const beforeUpload = (file: FileType) => {\n//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';\n//     if (!isJpgOrPng) {\n//         message.error('You can only upload JPG/PNG file!');\n//     }\n//     const isLt2M = file.size / 1024 / 1024 < 2;\n//     if (!isLt2M) {\n//         message.error('Image must smaller than 2MB!');\n//     }\n//     return isJpgOrPng && isLt2M;\n// };\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const handleChange: UploadProps['onChange'] = (info) => {\n    //     if (info.file.status === 'uploading') {\n    //         setLoading(true);\n    //         return;\n    //     }\n    //     if (info.file.status === 'done') {\n    //         getBase64(info.file.originFileObj as FileType, (image) => {\n    //             setLoading(false);\n    //             const updatedObj = { ...book, image: image };\n    //             dispatch(updateBookImageById(updatedObj));\n    //         });\n    //     }\n    // };\n    const uploadButton = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            border: 0,\n            background: \"none\"\n        },\n        type: \"button\",\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 56,\n                columnNumber: 46\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: 8\n                },\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n    // return (\n    // <Upload\n    //     name=\"avatar\"\n    //     listType=\"picture-card\"\n    //     className=\"avatar-uploader\"\n    //     showUploadList={false}\n    //     // action=\"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188\"\n    //     beforeUpload={beforeUpload}\n    //     onChange={handleChange}\n    // >\n    //     {book?.image_url ?\n    //         <Image src={book.image_url} alt=\"avatar\" style={{ width: '100%' }} preview={false} /> : uploadButton\n    //     }\n    // </Upload>\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fileChangeHandler = (e)=>{\n        setFileData(e.target.files[0]);\n    };\n    const onSubmitHandler = ()=>{\n        // if (\n        //     (fileData && fileData.type === \"image/png\") ||\n        //     fileData.type === \"image/jpeg\" ||\n        //     fileData.type === \"image/jpg\"\n        // ) {\n        const updatedObj = {\n            ...book,\n            image: fileData\n        };\n        dispatch((0,_store_actions_bookActions__WEBPACK_IMPORTED_MODULE_3__.updateBookImageById)(updatedObj));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: fileChangeHandler\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"profile-order-button\",\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LoadingOutlined_PlusOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 54\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 96,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"a5nI+/AzFdioB1tROqM7584oI6k=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDMEI7QUFHbkI7QUFDbUI7QUFTbEUsMEVBQTBFO0FBQzFFLHVDQUF1QztBQUN2QyxnRkFBZ0Y7QUFDaEYsaUNBQWlDO0FBQ2pDLEtBQUs7QUFFTCw2Q0FBNkM7QUFDN0Msa0ZBQWtGO0FBQ2xGLHlCQUF5QjtBQUN6Qiw4REFBOEQ7QUFDOUQsUUFBUTtBQUNSLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIseURBQXlEO0FBQ3pELFFBQVE7QUFDUixtQ0FBbUM7QUFDbkMsS0FBSztBQUVMLE1BQU1NLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQy9DLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsNERBQTREO0lBQzVELDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsc0VBQXNFO0lBQ3RFLGlDQUFpQztJQUVqQyw0REFBNEQ7SUFFNUQseURBQXlEO0lBQ3pELGNBQWM7SUFDZCxRQUFRO0lBQ1IsS0FBSztJQUVMLE1BQU1VLDZCQUNGLDhEQUFDQztRQUFPQyxPQUFPO1lBQUVDLFFBQVE7WUFBR0MsWUFBWTtRQUFPO1FBQUdDLE1BQUs7O1lBQ2xEUCx3QkFBVSw4REFBQ1AsNEdBQWVBOzs7OzBDQUFNLDhEQUFDQyw0R0FBWUE7Ozs7OzBCQUM5Qyw4REFBQ2M7Z0JBQUlKLE9BQU87b0JBQUVLLFdBQVc7Z0JBQUU7MEJBQUc7Ozs7Ozs7Ozs7OztJQUl0QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QiwrRUFBK0U7SUFDL0Usa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixJQUFJO0lBQ0oseUJBQXlCO0lBQ3pCLCtHQUErRztJQUMvRyxRQUFRO0lBQ1IsWUFBWTtJQUVaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFekMsTUFBTW9CLG9CQUFvQixDQUFDQztRQUN2QkYsWUFBWUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtJQUNqQztJQUVBLE1BQU1DLGtCQUFrQjtRQUNwQixPQUFPO1FBQ1AscURBQXFEO1FBQ3JELHdDQUF3QztRQUN4QyxvQ0FBb0M7UUFDcEMsTUFBTTtRQUVOLE1BQU1DLGFBQWE7WUFBRSxHQUFHbkIsSUFBSTtZQUFFb0IsT0FBT1I7UUFBUztRQUU5Q1gsU0FBU0gsK0VBQW1CQSxDQUFDcUI7SUFDakM7SUFFQSxxQkFDSSw4REFBQ1Q7a0JBQ0csNEVBQUNXO1lBQUtDLFVBQVVKO1lBQWlCSyxNQUFLOzs4QkFDbEMsOERBQUNDO29CQUFNZixNQUFLO29CQUFPZ0IsVUFBVVg7Ozs7Ozs4QkFDN0IsOERBQUNUO29CQUFPSSxNQUFLO29CQUFTaUIsV0FBVTs4QkFDM0J4Qix3QkFBVSw4REFBQ1AsNEdBQWVBOzs7O2tEQUFNLDhEQUFDQyw0R0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRTtHQXZFTUc7O1FBQ2VGLHdEQUFjQTs7O0tBRDdCRTtBQXlFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD85ZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgSW1hZ2UsIG1lc3NhZ2UsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHR5cGUgeyBHZXRQcm9wLCBVcGxvYWRQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tJbWFnZUJ5SWQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMnO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxudHlwZSBGaWxlVHlwZSA9IFBhcmFtZXRlcnM8R2V0UHJvcDxVcGxvYWRQcm9wcywgJ2JlZm9yZVVwbG9hZCc+PlswXTtcblxuaW50ZXJmYWNlIEltYWdlVXBsb2FkZXJQcm9wcyB7XG4gICAgYm9vazogUGFydGlhbDxCb29rPjtcbn1cblxuLy8gY29uc3QgZ2V0QmFzZTY0ID0gKGltZzogRmlsZVR5cGUsIGNhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbi8vICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuLy8gICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpKTtcbi8vICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xuLy8gfTtcblxuLy8gY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGU6IEZpbGVUeXBlKSA9PiB7XG4vLyAgICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7XG4vLyAgICAgaWYgKCFpc0pwZ09yUG5nKSB7XG4vLyAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1lvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIScpO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XG4vLyAgICAgaWYgKCFpc0x0Mk0pIHtcbi8vICAgICAgICAgbWVzc2FnZS5lcnJvcignSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIScpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XG4vLyB9O1xuXG5jb25zdCBJbWFnZVVwbG9hZGVyID0gKHsgYm9vayB9OiBJbWFnZVVwbG9hZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVDaGFuZ2U6IFVwbG9hZFByb3BzWydvbkNoYW5nZSddID0gKGluZm8pID0+IHtcbiAgICAvLyAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgLy8gICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAvLyAgICAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiBhcyBGaWxlVHlwZSwgKGltYWdlKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVkT2JqID0geyAuLi5ib29rLCBpbWFnZTogaW1hZ2UgfTtcblxuICAgIC8vICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUJvb2tJbWFnZUJ5SWQodXBkYXRlZE9iaikpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogMCwgYmFja2dyb3VuZDogJ25vbmUnIH19IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gPFVwbG9hZFxuICAgIC8vICAgICBuYW1lPVwiYXZhdGFyXCJcbiAgICAvLyAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxuICAgIC8vICAgICBjbGFzc05hbWU9XCJhdmF0YXItdXBsb2FkZXJcIlxuICAgIC8vICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XG4gICAgLy8gICAgIC8vIGFjdGlvbj1cImh0dHBzOi8vcnVuLm1vY2t5LmlvL3YzLzQzNWUyMjRjLTQ0ZmItNDc3My05ZmFmLTM4MGM1ZTZhMjE4OFwiXG4gICAgLy8gICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgIC8vID5cbiAgICAvLyAgICAge2Jvb2s/LmltYWdlX3VybCA/XG4gICAgLy8gICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybH0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwcmV2aWV3PXtmYWxzZX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAvLyAgICAgfVxuICAgIC8vIDwvVXBsb2FkPlxuXG4gICAgY29uc3QgW2ZpbGVEYXRhLCBzZXRGaWxlRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGZpbGVDaGFuZ2VIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBzZXRGaWxlRGF0YShlLnRhcmdldC5maWxlc1swXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgLy8gaWYgKFxuICAgICAgICAvLyAgICAgKGZpbGVEYXRhICYmIGZpbGVEYXRhLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCIpIHx8XG4gICAgICAgIC8vICAgICBmaWxlRGF0YS50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fFxuICAgICAgICAvLyAgICAgZmlsZURhdGEudHlwZSA9PT0gXCJpbWFnZS9qcGdcIlxuICAgICAgICAvLyApIHtcblxuICAgICAgICBjb25zdCB1cGRhdGVkT2JqID0geyAuLi5ib29rLCBpbWFnZTogZmlsZURhdGEgfTtcblxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVCb29rSW1hZ2VCeUlkKHVwZGF0ZWRPYmopKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IG5hbWU9XCJlZGl0IHByb2ZpbGUgZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwcm9maWxlLW9yZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nT3V0bGluZWQgLz4gOiA8UGx1c091dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdPdXRsaW5lZCIsIlBsdXNPdXRsaW5lZCIsInVzZUFwcERpc3BhdGNoIiwidXBkYXRlQm9va0ltYWdlQnlJZCIsIkltYWdlVXBsb2FkZXIiLCJib29rIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEJ1dHRvbiIsImJ1dHRvbiIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInR5cGUiLCJkaXYiLCJtYXJnaW5Ub3AiLCJmaWxlRGF0YSIsInNldEZpbGVEYXRhIiwiZmlsZUNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdEhhbmRsZXIiLCJ1cGRhdGVkT2JqIiwiaW1hZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJuYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});