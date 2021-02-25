webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Coutdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Coutdown\", function() { return Coutdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_joao_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Coutdown.module.css */ \"./src/styles/components/Coutdown.module.css\");\n/* harmony import */ var _styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/joao/moveit/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countdownTimeout;\nfunction Coutdown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_joao_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_joao_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(0.05 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setIsActive(false);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton, \" \").concat(_styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive),\n      onClick: resetCountdown,\n      children: \"abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_Coutdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,\n      onClick: startCountdown,\n      children: \"iniciar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Coutdown, \"4bhDwg/C+wPI3CJHwQMFiZyxb18=\");\n\n_c = Coutdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Coutdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3V0ZG93biIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxPQUFPLEVBQVIsQ0FETDtBQUFBLE1BQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFcEJHLFFBRm9CO0FBQUEsTUFFVkMsV0FGVTs7QUFJM0IsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sSUFBSSxHQUFDLEVBQWhCLENBQWhCO0FBQ0EsTUFBTU8sT0FBTyxHQUFHUCxJQUFJLEdBQUcsRUFBdkI7O0FBTDJCLDhCQU9PUSxNQUFNLENBQUNKLE9BQUQsQ0FBTixDQUFnQkssUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBUFA7QUFBQTtBQUFBLE1BT3BCQyxVQVBvQjtBQUFBLE1BT1JDLFdBUFE7O0FBQUEsK0JBUU9KLE1BQU0sQ0FBQ0QsT0FBRCxDQUFOLENBQWdCRSxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FSUDtBQUFBO0FBQUEsTUFRcEJHLFVBUm9CO0FBQUEsTUFRUkMsV0FSUTs7QUFVM0IsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQlosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNhLGNBQVQsR0FBeUI7QUFDckJDLGdCQUFZLENBQUNwQixnQkFBRCxDQUFaO0FBQ0FNLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBQ0g7O0FBRURpQix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJaEIsUUFBUSxJQUFJRixJQUFJLEdBQUcsQ0FBdkIsRUFBeUI7QUFDckJILHNCQUFnQixHQUFHc0IsVUFBVSxDQUFDLFlBQUk7QUFDOUJsQixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUMvQkcsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDSDtBQUNKLEdBUlEsRUFRTixDQUFDRCxRQUFELEVBQVdGLElBQVgsQ0FSTSxDQUFUO0FBVUksc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSW9CLDZFQUFNLENBQUNDLGtCQUF6QjtBQUFBLDhCQUNBO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT1Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1BO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBYUNaLFFBQVEsZ0JBQ0w7QUFDSSxVQUFJLEVBQUMsUUFEVDtBQUVJLGVBQVMsWUFBT2tCLDZFQUFNLENBQUNFLGVBQWQsY0FBaUNGLDZFQUFNLENBQUNHLHFCQUF4QyxDQUZiO0FBR0ksYUFBTyxFQUFJUCxjQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBUUw7QUFDSSxVQUFJLEVBQUMsUUFEVDtBQUVJLGVBQVMsRUFBSUksNkVBQU0sQ0FBQ0UsZUFGeEI7QUFHSSxhQUFPLEVBQUlQLGNBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQkg7O0dBN0RlakIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdXRkb3duLm1vZHVsZS5jc3MnXG5cbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvdXRkb3duKCkge1xuY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTtcbmNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbmNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUvNjApO1xuY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcblxuY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcbmNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCl7XG4gICAgc2V0SXNBY3RpdmUodHJ1ZSlcbn1cblxuZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgc2V0VGltZSgwLjA1ICogNjApXG59XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKXtcbiAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfSBlbHNlIGlmKCBpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICB9XG59LCBbaXNBY3RpdmUsIHRpbWVdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9XG4gICAgICAgICAgICAgICAgb25DbGljayA9IHtyZXNldENvdW50ZG93bn0+XG4gICAgICAgICAgICAgICAgYWJhbmRvbmFyIGNpY2xvICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrID0ge3N0YXJ0Q291bnRkb3dufT5cbiAgICAgICAgICAgICAgICBpbmljaWFyIGNpY2xvICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})