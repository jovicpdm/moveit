webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Coutdown.module.css":
/*!***************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Coutdown.module.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Coutdown_countdownContainer__1yMu1{\\n    display: flex;\\n    align-items: center;\\n    font-family: 'Rajdhani';\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.Coutdown_countdownContainer__1yMu1 > div{\\n    flex: 1 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0,0,0,0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.Coutdown_countdownContainer__1yMu1 > div span {\\n    flex: 1 1;\\n}\\n\\n.Coutdown_countdownContainer__1yMu1 > div span:first-child {\\n    border-right: 1px solid #f0f1f5;\\n}\\n\\n.Coutdown_countdownContainer__1yMu1 > div span:last-child {\\n    border-right: 1px solid #f0f1f5;\\n    border: left;\\n}\\n\\n.Coutdown_countdownContainer__1yMu1 > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.Coutdown_countdownButton__3Gc3j{\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition: background-color 0.2s;\\n}\\n\\n.Coutdown_countdownButton__3Gc3j:not(:disabled):hover{\\n    background: var(--blue-dark);\\n}\\n\\n.Coutdown_countdownButtonActive__1KA9L {\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.Coutdown_countdownButtonActive__1KA9L:not(:disabled):hover {\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.Coutdown_countdownButton__3Gc3j:disabled{\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: no;    \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Coutdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,SAAS;IACT,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,UAAU;AACd\",\"sourcesContent\":[\".countdownContainer{\\n    display: flex;\\n    align-items: center;\\n    font-family: 'Rajdhani';\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.countdownContainer > div{\\n    flex: 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background: var(--white);\\n    box-shadow: 0 0 60px rgba(0,0,0,0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.countdownContainer > div span {\\n    flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n    border-right: 1px solid #f0f1f5;\\n}\\n\\n.countdownContainer > div span:last-child {\\n    border-right: 1px solid #f0f1f5;\\n    border: left;\\n}\\n\\n.countdownContainer > span {\\n    font-size: 6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton{\\n    width: 100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition: background-color 0.2s;\\n}\\n\\n.countdownButton:not(:disabled):hover{\\n    background: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover {\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled{\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: no;    \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Coutdown_countdownContainer__1yMu1\",\n\t\"countdownButton\": \"Coutdown_countdownButton__3Gc3j\",\n\t\"countdownButtonActive\": \"Coutdown_countdownButtonActive__1KA9L\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdXRkb3duLm1vZHVsZS5jc3M/ZDUzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsdUNBQXVDLG9CQUFvQiwwQkFBMEIsOEJBQThCLHVCQUF1QiwwQkFBMEIsR0FBRyw4Q0FBOEMsZ0JBQWdCLHNCQUFzQiwwQkFBMEIsb0NBQW9DLGlDQUFpQyw0Q0FBNEMseUJBQXlCLHdCQUF3Qix5QkFBeUIsR0FBRyxvREFBb0QsZ0JBQWdCLEdBQUcsZ0VBQWdFLHNDQUFzQyxHQUFHLCtEQUErRCxzQ0FBc0MsbUJBQW1CLEdBQUcsZ0RBQWdELHlCQUF5Qix1QkFBdUIsR0FBRyxxQ0FBcUMsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDJCQUEyQix1QkFBdUIsMENBQTBDLEdBQUcsMERBQTBELG1DQUFtQyxHQUFHLDRDQUE0QywrQkFBK0IsMEJBQTBCLEdBQUcsaUVBQWlFLDZCQUE2QiwwQkFBMEIsR0FBRyw4Q0FBOEMsK0JBQStCLHlCQUF5QixpQkFBaUIsT0FBTyxPQUFPLDBHQUEwRyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLDZDQUE2QyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLEdBQUcsOEJBQThCLGNBQWMsc0JBQXNCLDBCQUEwQixvQ0FBb0MsaUNBQWlDLDRDQUE0Qyx5QkFBeUIsd0JBQXdCLHlCQUF5QixHQUFHLG9DQUFvQyxjQUFjLEdBQUcsZ0RBQWdELHNDQUFzQyxHQUFHLCtDQUErQyxzQ0FBc0MsbUJBQW1CLEdBQUcsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDJCQUEyQix1QkFBdUIsMENBQTBDLEdBQUcsMENBQTBDLG1DQUFtQyxHQUFHLDRCQUE0QiwrQkFBK0IsMEJBQTBCLEdBQUcsaURBQWlELDZCQUE2QiwwQkFBMEIsR0FBRyw4QkFBOEIsK0JBQStCLHlCQUF5QixpQkFBaUIsT0FBTyxtQkFBbUI7QUFDejZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291dGRvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3V0ZG93bl9jb3VudGRvd25Db250YWluZXJfXzF5TXUxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdXRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fMXlNdTEgPiBkaXZ7XFxuICAgIGZsZXg6IDEgMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLDAsMCwwLjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291dGRvd25fY291bnRkb3duQ29udGFpbmVyX18xeU11MSA+IGRpdiBzcGFuIHtcXG4gICAgZmxleDogMSAxO1xcbn1cXG5cXG4uQ291dGRvd25fY291bnRkb3duQ29udGFpbmVyX18xeU11MSA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmNTtcXG59XFxuXFxuLkNvdXRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fMXlNdTEgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmNTtcXG4gICAgYm9yZGVyOiBsZWZ0O1xcbn1cXG5cXG4uQ291dGRvd25fY291bnRkb3duQ29udGFpbmVyX18xeU11MSA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5Db3V0ZG93bl9jb3VudGRvd25CdXR0b25fXzNHYzNqe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLkNvdXRkb3duX2NvdW50ZG93bkJ1dHRvbl9fM0djM2o6bm90KDpkaXNhYmxlZCk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5Db3V0ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzFLQTlMIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291dGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18xS0E5TDpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5Db3V0ZG93bl9jb3VudGRvd25CdXR0b25fXzNHYzNqOmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgY3Vyc29yOiBubzsgICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291dGRvd24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFPOztJQUVQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCOztJQUU3Qix3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBTztBQUNYOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdntcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLDAsMCwwLjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW4ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWY1O1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjU7XFxuICAgIGJvcmRlcjogbGVmdDtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5jb3VudGRvd25CdXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpkaXNhYmxlZHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGN1cnNvcjogbm87ICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3V0ZG93bl9jb3VudGRvd25Db250YWluZXJfXzF5TXUxXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291dGRvd25fY291bnRkb3duQnV0dG9uX18zR2MzalwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdXRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMUtBOUxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Coutdown.module.css\n");

/***/ })

})