webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
false,

/***/ "./src/context/ChallengeContext.tsx":
/*!******************************************!*\
  !*** ./src/context/ChallengeContext.tsx ***!
  \******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_joao_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/joao/moveit/src/context/ChallengeContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      level = _useState[0],\n      setlevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentExperience = _useState2[0],\n      setCurrenteExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _ref2,\n      _ref3 = Object(_home_joao_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 1),\n      challenge = _ref3[0];\n\n  function levelUp() {\n    setlevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"Yf5RVq2GqHTSAHOFnGYe5Att5SU=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlQ29udGV4dC50c3g/ZTU4OCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRsZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudGVFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJjaGFsbGVuZ2UiLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY08sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFHQSxTQUFTQyxrQkFBVCxPQUFrRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsa0JBQzNDQyxzREFBUSxDQUFDLENBQUQsQ0FEbUM7QUFBQSxNQUM5REMsS0FEOEQ7QUFBQSxNQUN2REMsUUFEdUQ7O0FBQUEsbUJBRWxCRixzREFBUSxDQUFDLENBQUQsQ0FGVTtBQUFBLE1BRTlERyxpQkFGOEQ7QUFBQSxNQUUzQ0MscUJBRjJDOztBQUFBLG1CQUdmSixzREFBUSxDQUFDLENBQUQsQ0FITztBQUFBLE1BRzlESyxtQkFIOEQ7QUFBQSxNQUd6Q0Msc0JBSHlDOztBQUFBO0FBQUE7QUFBQSxNQUk5REMsU0FKOEQ7O0FBT3JFLFdBQVNDLE9BQVQsR0FBa0I7QUFDZE4sWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0g7O0FBRUQsV0FBU1EsaUJBQVQsR0FBNEI7QUFDeEIsUUFBTUMsb0JBQW9CLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTVIsU0FBUyxHQUFHTyw2Q0FBVSxDQUFDSixvQkFBRCxDQUE1QjtBQUNIOztBQUVELHNCQUNJLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0EsU0FBSyxFQUNEO0FBQ0lULFdBQUssRUFBTEEsS0FESjtBQUVJRSx1QkFBaUIsRUFBakJBLGlCQUZKO0FBR0lFLHlCQUFtQixFQUFuQkEsbUJBSEo7QUFJSUcsYUFBTyxFQUFQQSxPQUpKO0FBS0lDLHVCQUFpQixFQUFqQkE7QUFMSixLQUZKO0FBQUEsY0FTS1Y7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0E3QmVELGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L0NoYWxsZW5nZUNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlcjsgXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjsgXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKXtcbiAgICBjb25zdCBbbGV2ZWwsIHNldGxldmVsXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudGVFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbY2hhbGxlbmdlXVxuXG4gICAgXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xuICAgICAgICBzZXRsZXZlbChsZXZlbCArIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV2ZWwsIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLCBcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICAgICAgICAgIGxldmVsVXAsXG4gICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsfVxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChallengeContext.tsx\n");

/***/ })

})