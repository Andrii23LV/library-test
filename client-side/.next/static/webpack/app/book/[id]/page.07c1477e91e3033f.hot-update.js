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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/store */ \"(app-pages-browser)/./src/store/store.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst getBase64 = (img, callback)=>{\n    const reader = new FileReader();\n    reader.addEventListener(\"load\", ()=>callback(reader.result));\n    reader.readAsDataURL(img);\n};\nconst beforeUpload = (file)=>{\n    const isJpgOrPng = file.type === \"image/jpeg\" || file.type === \"image/png\";\n    if (!isJpgOrPng) {\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"You can only upload JPG/PNG file!\");\n    }\n    const isLt2M = file.size / 1024 / 1024 < 2;\n    if (!isLt2M) {\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Image must smaller than 2MB!\");\n    }\n    return isJpgOrPng && isLt2M;\n};\nconst ImageUploader = (param)=>{\n    let { book } = param;\n    _s();\n    const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const handleChange: UploadProps['onChange'] = (info) => {\n    //     if (info.file.status === 'uploading') {\n    //         setLoading(true);\n    //         return;\n    //     }\n    //     if (info.file.status === 'done') {\n    //         getBase64(info.file.originFileObj as FileType, (image) => {\n    //             setLoading(false);\n    //             const updatedObj = { ...book, image: image };\n    //             dispatch(updateBookImageById(updatedObj));\n    //         });\n    //     }\n    // };\n    // const uploadButton = (\n    //     <button style={{ border: 0, background: 'none' }} type=\"button\">\n    //         {loading ? <LoadingOutlined /> : <PlusOutlined />}\n    //         <div style={{ marginTop: 8 }}>Upload image</div>\n    //     </button>\n    // );\n    // return (\n    // <Upload\n    //     name=\"avatar\"\n    //     listType=\"picture-card\"\n    //     className=\"avatar-uploader\"\n    //     showUploadList={false}\n    //     // action=\"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188\"\n    //     beforeUpload={beforeUpload}\n    //     onChange={handleChange}\n    // >\n    //     {book?.image_url ?\n    //         <Image src={book.image_url} alt=\"avatar\" style={{ width: '100%' }} preview={false} /> : uploadButton\n    //     }\n    // </Upload>\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fileChangeHandler = (e)=>{\n        setFileData(e.target.files[0]);\n    };\n    const onSubmitHandler = ()=>{\n        if (fileData && fileData.type === \"image/png\" || fileData.type === \"image/jpeg\" || fileData.type === \"image/jpg\") {\n            const data = new FormData();\n            data.append(\"ProfilePicture\", fileData);\n            fetch(\"http://localhost:5000/my_api/user/\".concat(localStorage.getItem(\"userID\")), {\n                method: \"PATCH\",\n                body: data\n            }).then((result)=>{\n                console.log(\"File Sent Successful\");\n            }).catch((err)=>{\n                console.log(err.message);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: onSubmitHandler,\n            name: \"edit profile form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: fileChangeHandler\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"profile-order-button\",\n                    children: \"Save Changes\"\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n            lineNumber: 112,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/ImageUploader.tsx\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageUploader, \"a5nI+/AzFdioB1tROqM7584oI6k=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBRU07QUFFQztBQVUvQyxNQUFNSSxZQUFZLENBQUNDLEtBQWVDO0lBQzlCLE1BQU1DLFNBQVMsSUFBSUM7SUFDbkJELE9BQU9FLGdCQUFnQixDQUFDLFFBQVEsSUFBTUgsU0FBU0MsT0FBT0csTUFBTTtJQUM1REgsT0FBT0ksYUFBYSxDQUFDTjtBQUN6QjtBQUVBLE1BQU1PLGVBQWUsQ0FBQ0M7SUFDbEIsTUFBTUMsYUFBYUQsS0FBS0UsSUFBSSxLQUFLLGdCQUFnQkYsS0FBS0UsSUFBSSxLQUFLO0lBQy9ELElBQUksQ0FBQ0QsWUFBWTtRQUNiWiwyRUFBT0EsQ0FBQ2MsS0FBSyxDQUFDO0lBQ2xCO0lBQ0EsTUFBTUMsU0FBU0osS0FBS0ssSUFBSSxHQUFHLE9BQU8sT0FBTztJQUN6QyxJQUFJLENBQUNELFFBQVE7UUFDVGYsMkVBQU9BLENBQUNjLEtBQUssQ0FBQztJQUNsQjtJQUNBLE9BQU9GLGNBQWNHO0FBQ3pCO0FBRUEsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsSUFBSSxFQUFzQjs7SUFDL0MsTUFBTUMsV0FBV2xCLDREQUFjQTtJQUUvQixNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUV2Qyw0REFBNEQ7SUFDNUQsOENBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxzRUFBc0U7SUFDdEUsaUNBQWlDO0lBRWpDLDREQUE0RDtJQUU1RCx5REFBeUQ7SUFDekQsY0FBYztJQUNkLFFBQVE7SUFDUixLQUFLO0lBRUwseUJBQXlCO0lBQ3pCLHVFQUF1RTtJQUN2RSw2REFBNkQ7SUFDN0QsMkRBQTJEO0lBQzNELGdCQUFnQjtJQUNoQixLQUFLO0lBRUwsV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsK0VBQStFO0lBQy9FLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsSUFBSTtJQUNKLHlCQUF5QjtJQUN6QiwrR0FBK0c7SUFDL0csUUFBUTtJQUNSLFlBQVk7SUFFWixNQUFNLENBQUN1QixVQUFVQyxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNeUIsb0JBQW9CLENBQUNDO1FBQ3ZCRixZQUFZRSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQ2pDO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3BCLElBQ0ksWUFBYU4sU0FBU1QsSUFBSSxLQUFLLGVBQy9CUyxTQUFTVCxJQUFJLEtBQUssZ0JBQ2xCUyxTQUFTVCxJQUFJLEtBQUssYUFDcEI7WUFFRSxNQUFNZ0IsT0FBTyxJQUFJQztZQUNqQkQsS0FBS0UsTUFBTSxDQUFDLGtCQUFrQlQ7WUFFOUJVLE1BQ0kscUNBRUUsT0FGbUNDLGFBQWFDLE9BQU8sQ0FDckQsWUFFSjtnQkFDSUMsUUFBUTtnQkFDUkMsTUFBTVA7WUFDVixHQUVDUSxJQUFJLENBQUMsQ0FBQzdCO2dCQUNIOEIsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkgsUUFBUUMsR0FBRyxDQUFDRSxJQUFJekMsT0FBTztZQUMzQjtRQUNSO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzBDO2tCQUNHLDRFQUFDQztZQUFLQyxVQUFVaEI7WUFBaUJpQixNQUFLOzs4QkFDbEMsOERBQUNDO29CQUFNakMsTUFBSztvQkFBT2tDLFVBQVV2Qjs7Ozs7OzhCQUM3Qiw4REFBQ3dCO29CQUFPbkMsTUFBSztvQkFBU29DLFdBQVU7OEJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU12RTtHQXZGTWhDOztRQUNlaEIsd0RBQWNBOzs7S0FEN0JnQjtBQXlGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD85ZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgSW1hZ2UsIG1lc3NhZ2UsIFVwbG9hZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHR5cGUgeyBHZXRQcm9wLCBVcGxvYWRQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tJbWFnZUJ5SWQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMvYm9va0FjdGlvbnMnO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvbW9kZWxzJztcblxudHlwZSBGaWxlVHlwZSA9IFBhcmFtZXRlcnM8R2V0UHJvcDxVcGxvYWRQcm9wcywgJ2JlZm9yZVVwbG9hZCc+PlswXTtcblxuaW50ZXJmYWNlIEltYWdlVXBsb2FkZXJQcm9wcyB7XG4gICAgYm9vazogUGFydGlhbDxCb29rPjtcbn1cblxuY29uc3QgZ2V0QmFzZTY0ID0gKGltZzogRmlsZVR5cGUsIGNhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xufTtcblxuY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGU6IEZpbGVUeXBlKSA9PiB7XG4gICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7XG4gICAgaWYgKCFpc0pwZ09yUG5nKSB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1lvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIScpO1xuICAgIH1cbiAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XG4gICAgaWYgKCFpc0x0Mk0pIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcignSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIScpO1xuICAgIH1cbiAgICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XG59O1xuXG5jb25zdCBJbWFnZVVwbG9hZGVyID0gKHsgYm9vayB9OiBJbWFnZVVwbG9hZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVDaGFuZ2U6IFVwbG9hZFByb3BzWydvbkNoYW5nZSddID0gKGluZm8pID0+IHtcbiAgICAvLyAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgLy8gICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAvLyAgICAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiBhcyBGaWxlVHlwZSwgKGltYWdlKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVkT2JqID0geyAuLi5ib29rLCBpbWFnZTogaW1hZ2UgfTtcblxuICAgIC8vICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUJvb2tJbWFnZUJ5SWQodXBkYXRlZE9iaikpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgIC8vICAgICA8YnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogMCwgYmFja2dyb3VuZDogJ25vbmUnIH19IHR5cGU9XCJidXR0b25cIj5cbiAgICAvLyAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxQbHVzT3V0bGluZWQgLz59XG4gICAgLy8gICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5VcGxvYWQgaW1hZ2U8L2Rpdj5cbiAgICAvLyAgICAgPC9idXR0b24+XG4gICAgLy8gKTtcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gPFVwbG9hZFxuICAgIC8vICAgICBuYW1lPVwiYXZhdGFyXCJcbiAgICAvLyAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxuICAgIC8vICAgICBjbGFzc05hbWU9XCJhdmF0YXItdXBsb2FkZXJcIlxuICAgIC8vICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XG4gICAgLy8gICAgIC8vIGFjdGlvbj1cImh0dHBzOi8vcnVuLm1vY2t5LmlvL3YzLzQzNWUyMjRjLTQ0ZmItNDc3My05ZmFmLTM4MGM1ZTZhMjE4OFwiXG4gICAgLy8gICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgIC8vID5cbiAgICAvLyAgICAge2Jvb2s/LmltYWdlX3VybCA/XG4gICAgLy8gICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybH0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBwcmV2aWV3PXtmYWxzZX0gLz4gOiB1cGxvYWRCdXR0b25cbiAgICAvLyAgICAgfVxuICAgIC8vIDwvVXBsb2FkPlxuXG4gICAgY29uc3QgW2ZpbGVEYXRhLCBzZXRGaWxlRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGZpbGVDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0RmlsZURhdGEoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChmaWxlRGF0YSAmJiBmaWxlRGF0YS50eXBlID09PSBcImltYWdlL3BuZ1wiKSB8fFxuICAgICAgICAgICAgZmlsZURhdGEudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHxcbiAgICAgICAgICAgIGZpbGVEYXRhLnR5cGUgPT09IFwiaW1hZ2UvanBnXCJcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiUHJvZmlsZVBpY3R1cmVcIiwgZmlsZURhdGEpO1xuXG4gICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL215X2FwaS91c2VyLyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcklEXCJcbiAgICAgICAgICAgICAgICApfWAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgU2VudCBTdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfSBuYW1lPVwiZWRpdCBwcm9maWxlIGZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17ZmlsZUNoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHJvZmlsZS1vcmRlci1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVVwbG9hZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInVzZUFwcERpc3BhdGNoIiwiZ2V0QmFzZTY0IiwiaW1nIiwiY2FsbGJhY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJiZWZvcmVVcGxvYWQiLCJmaWxlIiwiaXNKcGdPclBuZyIsInR5cGUiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJJbWFnZVVwbG9hZGVyIiwiYm9vayIsImRpc3BhdGNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmaWxlRGF0YSIsInNldEZpbGVEYXRhIiwiZmlsZUNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJvblN1Ym1pdEhhbmRsZXIiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtZXRob2QiLCJib2R5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageUploader.tsx\n"));

/***/ })

});