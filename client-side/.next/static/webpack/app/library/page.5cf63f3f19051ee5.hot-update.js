"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/library/page",{

/***/ "(app-pages-browser)/./public/moc-book.webp":
/*!******************************!*\
  !*** ./public/moc-book.webp ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/moc-book.9051bd10.webp\",\"height\":1500,\"width\":2000,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmoc-book.9051bd10.webp&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":6});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9tb2MtYm9vay53ZWJwIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxDQUFDLHdNQUF3TSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wdWJsaWMvbW9jLWJvb2sud2VicD82ZTJlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9tb2MtYm9vay45MDUxYmQxMC53ZWJwXCIsXCJoZWlnaHRcIjoxNTAwLFwid2lkdGhcIjoyMDAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRm1vYy1ib29rLjkwNTFiZDEwLndlYnAmdz04JnE9NzBcIixcImJsdXJXaWR0aFwiOjgsXCJibHVySGVpZ2h0XCI6Nn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/moc-book.webp\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/CardBook.tsx":
/*!*************************************!*\
  !*** ./src/components/CardBook.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Image,Modal,Space,Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Image,Modal,Space,Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Image,Modal,Space,Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/card/index.js\");\n/* harmony import */ var _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Image,Modal,Space,Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/space/index.js\");\n/* harmony import */ var _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Card,Image,Modal,Space,Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/image/index.js\");\n/* harmony import */ var _barrel_optimize_names_Collapse_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Collapse!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/collapse/index.js\");\n/* harmony import */ var _barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DeleteOutlined,EditOutlined,ExclamationCircleOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DeleteOutlined,EditOutlined,ExclamationCircleOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/EditOutlined.js\");\n/* harmony import */ var _barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=DeleteOutlined,EditOutlined,ExclamationCircleOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js\");\n/* harmony import */ var _public_moc_book_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/moc-book.webp */ \"(app-pages-browser)/./public/moc-book.webp\");\n// CardBook.tsx\n\n\n\nconst { Text, Link } = _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\n\nconst { confirm } = _barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst CardBook = (param)=>{\n    let { book, onDelete, onEdit } = param;\n    const showDeleteConfirm = ()=>{\n        confirm({\n            title: \"Are you sure you want to delete this book?\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                lineNumber: 34,\n                columnNumber: 19\n            }, undefined),\n            content: \"This action cannot be undone.\",\n            okText: \"Yes\",\n            okType: \"danger\",\n            cancelText: \"No\",\n            onOk () {\n                onDelete(book.id);\n            },\n            onCancel () {\n                console.log(\"Cancel\");\n            }\n        });\n    };\n    const items = [\n        {\n            key: \"1\",\n            label: \"Read description\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: book.description\n            }, void 0, false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                lineNumber: 52,\n                columnNumber: 23\n            }, undefined)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n            href: \"/book/\".concat(book.id),\n            children: book.name\n        }, void 0, false, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n            lineNumber: 58,\n            columnNumber: 20\n        }, void 0),\n        actions: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: ()=>onEdit(book)\n            }, \"edit\", false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, void 0),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DeleteOutlined_EditOutlined_ExclamationCircleOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                onClick: showDeleteConfirm\n            }, \"delete\", false, {\n                fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, void 0)\n        ],\n        className: \"min-w-[235px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            direction: \"vertical\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_Image_Modal_Space_Typography_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    src: book.image_url ? book.image_url : _public_moc_book_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"avatar\",\n                    className: \"w-full max-h-[200px] rounded shadow-md\",\n                    preview: false\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Collapse_antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    ghost: true,\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    italic: true,\n                    children: [\n                        \"Authored by: \",\n                        book.author\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    type: \"secondary\",\n                    children: book.production_year\n                }, void 0, false, {\n                    fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andriitretiak/Desktop/AT/React/Library-Test/client-side/src/components/CardBook.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CardBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardBook);\nvar _c;\n$RefreshReg$(_c, \"CardBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRCb29rLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7O0FBRVc7QUFDbUM7QUFDN0QsTUFBTSxFQUFFTSxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHRixxR0FBVUE7QUFHRDtBQUU0RDtBQUUxQztBQUVsRCxNQUFNLEVBQUVRLE9BQU8sRUFBRSxHQUFHVixxR0FBS0E7QUFnQnpCLE1BQU1XLFdBQW9DO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUNqRSxNQUFNQyxvQkFBb0I7UUFDdEJMLFFBQVE7WUFDSk0sT0FBTztZQUNQQyxvQkFBTSw4REFBQ1gscUlBQXlCQTs7Ozs7WUFDaENZLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkM7Z0JBQ0lULFNBQVNELEtBQUtXLEVBQUU7WUFDcEI7WUFDQUM7Z0JBQ0lDLFFBQVFDLEdBQUcsQ0FBQztZQUNoQjtRQUNKO0lBQ0o7SUFFQSxNQUFNQyxRQUFnQztRQUNsQztZQUNJQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsd0JBQVUsOERBQUNDOzBCQUFHbkIsS0FBS29CLFdBQVc7Ozs7OztRQUNsQztLQUNIO0lBRUQscUJBQ0ksOERBQUNsQyxxR0FBSUE7UUFDRGtCLHFCQUFPLDhEQUFDWjtZQUFLNkIsTUFBTSxTQUFpQixPQUFSckIsS0FBS1csRUFBRTtzQkFBS1gsS0FBS3NCLElBQUk7Ozs7OztRQUNqREMsU0FBUzswQkFDTCw4REFBQzVCLHFJQUFZQTtnQkFBWTZCLFNBQVMsSUFBTXRCLE9BQU9GO2VBQTdCOzs7OzswQkFDbEIsOERBQUNKLHFJQUFjQTtnQkFBYzRCLFNBQVNyQjtlQUFsQjs7Ozs7U0FDdkI7UUFBRXNCLFdBQVU7a0JBQ2IsNEVBQUNwQyxxR0FBS0E7WUFBQ3FDLFdBQVU7OzhCQUNiLDhEQUFDdkMsc0dBQUtBO29CQUFDd0MsS0FBSzNCLEtBQUs0QixTQUFTLEdBQUc1QixLQUFLNEIsU0FBUyxHQUFHL0IsNkRBQVFBO29CQUFFZ0MsS0FBSTtvQkFBU0osV0FBVTtvQkFBeUNLLFNBQVM7Ozs7Ozs4QkFFakksOERBQUNyQyw2RUFBUUE7b0JBQUNzQyxLQUFLO29CQUFDaEIsT0FBT0E7Ozs7Ozs4QkFFdkIsOERBQUN4QjtvQkFBS3lDLE1BQU07O3dCQUFDO3dCQUFjaEMsS0FBS2lDLE1BQU07Ozs7Ozs7OEJBQ3RDLDhEQUFDMUM7b0JBQUsyQyxNQUFLOzhCQUFhbEMsS0FBS21DLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVEO0tBM0NNcEM7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZEJvb2sudHN4P2FmZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2FyZEJvb2sudHN4XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBJbWFnZSwgTW9kYWwsIFNwYWNlLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IFRleHQsIExpbmsgfSA9IFR5cG9ncmFwaHk7XG5cbmltcG9ydCB0eXBlIHsgQ29sbGFwc2VQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCwgRWRpdE91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuaW1wb3J0IE1vY2tJY29uIGZyb20gJy4uLy4uL3B1YmxpYy9tb2MtYm9vay53ZWJwJztcblxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcblxuaW50ZXJmYWNlIENhcmRCb29rUHJvcHMge1xuICAgIGJvb2s6IHtcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBhdXRob3I6IHN0cmluZztcbiAgICAgICAgY2F0ZWdvcnk6IHN0cmluZztcbiAgICAgICAgcHJvZHVjdGlvbl95ZWFyOiBudW1iZXI7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgIGltYWdlX3VybDogc3RyaW5nO1xuICAgIH07XG4gICAgb25EZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9uRWRpdDogKGJvb2s6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2FyZEJvb2s6IFJlYWN0LkZDPENhcmRCb29rUHJvcHM+ID0gKHsgYm9vaywgb25EZWxldGUsIG9uRWRpdCB9KSA9PiB7XG4gICAgY29uc3Qgc2hvd0RlbGV0ZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYm9vaz8nLFxuICAgICAgICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXG4gICAgICAgICAgICBjb250ZW50OiAnVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nLFxuICAgICAgICAgICAgb2tUZXh0OiAnWWVzJyxcbiAgICAgICAgICAgIG9rVHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAnTm8nLFxuICAgICAgICAgICAgb25PaygpIHtcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZShib29rLmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXRlbXM6IENvbGxhcHNlUHJvcHNbJ2l0ZW1zJ10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJzEnLFxuICAgICAgICAgICAgbGFiZWw6ICdSZWFkIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiA8cD57Ym9vay5kZXNjcmlwdGlvbn08L3A+LFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgdGl0bGU9ezxMaW5rIGhyZWY9e2AvYm9vay8ke2Jvb2suaWR9YH0+e2Jvb2submFtZX08L0xpbms+fVxuICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIG9uQ2xpY2s9eygpID0+IG9uRWRpdChib29rKX0gLz4sXG4gICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIGtleT1cImRlbGV0ZVwiIG9uQ2xpY2s9e3Nob3dEZWxldGVDb25maXJtfSAvPixcbiAgICAgICAgICAgIF19IGNsYXNzTmFtZT0nbWluLXctWzIzNXB4XSc+XG4gICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtib29rLmltYWdlX3VybCA/IGJvb2suaW1hZ2VfdXJsIDogTW9ja0ljb259IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT0ndy1mdWxsIG1heC1oLVsyMDBweF0gcm91bmRlZCBzaGFkb3ctbWQnIHByZXZpZXc9e2ZhbHNlfSAvPlxuXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlIGdob3N0IGl0ZW1zPXtpdGVtc30gLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0IGl0YWxpYz5BdXRob3JlZCBieToge2Jvb2suYXV0aG9yfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dCB0eXBlPVwic2Vjb25kYXJ5XCI+e2Jvb2sucHJvZHVjdGlvbl95ZWFyfTwvVGV4dD5cbiAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkQm9vaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJJbWFnZSIsIk1vZGFsIiwiU3BhY2UiLCJUeXBvZ3JhcGh5IiwiVGV4dCIsIkxpbmsiLCJDb2xsYXBzZSIsIkV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJEZWxldGVPdXRsaW5lZCIsIk1vY2tJY29uIiwiY29uZmlybSIsIkNhcmRCb29rIiwiYm9vayIsIm9uRGVsZXRlIiwib25FZGl0Iiwic2hvd0RlbGV0ZUNvbmZpcm0iLCJ0aXRsZSIsImljb24iLCJjb250ZW50Iiwib2tUZXh0Iiwib2tUeXBlIiwiY2FuY2VsVGV4dCIsIm9uT2siLCJpZCIsIm9uQ2FuY2VsIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwia2V5IiwibGFiZWwiLCJjaGlsZHJlbiIsInAiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJuYW1lIiwiYWN0aW9ucyIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJwcmV2aWV3IiwiZ2hvc3QiLCJpdGFsaWMiLCJhdXRob3IiLCJ0eXBlIiwicHJvZHVjdGlvbl95ZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CardBook.tsx\n"));

/***/ })

});