webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/ChallengeContext.tsx":
/*!******************************************!*\
  !*** ./src/context/ChallengeContext.tsx ***!
  \******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_joao_moveit_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\n\n\nvar _jsxFileName = \"/home/joao/moveit/src/context/ChallengeContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentExperien, _rest$challengesCompl;\n\n  var children = _ref.children,\n      rest = Object(_home_joao_moveit_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setlevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),\n      currentExperience = _useState2[0],\n      setCurrenteExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));\n  }, [level, currentExperience, challengesCompleted]);\n\n  function levelUp() {\n    setlevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('novo desafio', {\n        body: \"valendo \".concat(challenge.amount, \"xp!\")\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrenteExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      experienceToNextLevel: experienceToNextLevel,\n      completeChallenge: completeChallenge\n    },\n    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__[\"LevelUpModal\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"pp1ptRreodqOZJ7NOPhlSM2Y96Q=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlQ29udGV4dC50c3g/ZTU4OCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0bGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRlRXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEyQk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFHQSxTQUFTQyxrQkFBVCxPQUdvQjtBQUFBOztBQUFBOztBQUFBLE1BRnZCQyxRQUV1QixRQUZ2QkEsUUFFdUI7QUFBQSxNQURwQkMsSUFDb0I7O0FBQUEsa0JBRUdDLHNEQUFRLGdCQUFDRCxJQUFJLENBQUNFLEtBQU4scURBQWUsQ0FBZixDQUZYO0FBQUEsTUFFaEJBLEtBRmdCO0FB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Y0FQSjtBQVFJdEIsMkJBQXFCLEVBQXJCQSxxQkFSSjtBQVNJdUIsdUJBQWlCLEVBQWpCQTtBQVRKLEtBRko7QUFBQSxlQWNLbEMsUUFkTCxlQWdCSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXRGZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlcjsgXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjsgXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gICAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICAgIGxldmVsOiBudW1iZXI7XG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgXG4gICAgY2hpbGRyZW4sIFxuICAgIC4uLnJlc3Rcbn06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKXtcblxuICAgIGNvbnN0IFtsZXZlbCwgc2V0bGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRlRXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDApXG4gICAgXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgXG4gICAgXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpICAgIFxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQ29va2llcy5zZXQoJ2xldmVsJywgU3RyaW5nKGxldmVsKSlcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSlcbiAgICAgICAgQ29va2llcy5zZXQoJ2NoYWxsZW5nZXNDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XG4gICAgICAgIHNldGxldmVsKGxldmVsICsgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpe1xuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcblxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xuXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignbm92byBkZXNhZmlvJywge1xuICAgICAgICAgICAgICAgIGJvZHk6IGB2YWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcblxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbFxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q3VycmVudGVFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldmVsLCBcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSwgXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBsZXZlbFVwLFxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICA8TGV2ZWxVcE1vZGFsLz5cbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChallengeContext.tsx\n");

/***/ })

})