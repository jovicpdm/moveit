webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".ChallengeBox_challengeBoxContainer__53AkF{\\n    height: 100%;\\n\\n    background: var(--white);\\n    border-radius: 5px;\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    padding: 1.5rem 2rem;\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n\\n    text-align: center;\\n}\\n\\n.ChallengeBox_challengeNotActive__35ixK {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.ChallengeBox_challengeNotActive__35ixK strong {\\n    font-size: 1.5rem;\\n    font-weight: 500;\\n    line-height: 1.4;\\n}\\n\\n.ChallengeBox_challengeNotActive__35ixK p {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    line-height: 1.4;\\n    max-width: 70%;\\n    margin-top: 3rem;\\n}\\n\\n.ChallengeBox_challengeNotActive__35ixK p img{\\n    margin-bottom: 1rem;\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D {\\n    height: 100%;\\n\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D header {\\n    color: var(--blue);\\n    font-weight: 600;\\n    font-size: 1.25rem;\\n    padding: 0 2rem 1.5rem;\\n    border-bottom: 1px solid var(--gray-line);\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D main{\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D main strong{\\n    font-weight: 2rem;\\n    font-weight: 600;\\n    color: var(--title);\\n    margin: 1.5rem 0 1rem;\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D main p {\\n    line-height: 1.5;\\n}\\n\\n.ChallengeBox_challengeActive__3mO_D footer{\\n    grid-template-columns: ;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/ChallengeBox.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,YAAY;;IAEZ,wBAAwB;IACxB,kBAAkB;IAClB,wCAAwC;IACxC,oBAAoB;;IAEpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,SAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B\",\"sourcesContent\":[\".challengeBoxContainer{\\n    height: 100%;\\n\\n    background: var(--white);\\n    border-radius: 5px;\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    padding: 1.5rem 2rem;\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n\\n    text-align: center;\\n}\\n\\n.challengeNotActive {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.challengeNotActive strong {\\n    font-size: 1.5rem;\\n    font-weight: 500;\\n    line-height: 1.4;\\n}\\n\\n.challengeNotActive p {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    line-height: 1.4;\\n    max-width: 70%;\\n    margin-top: 3rem;\\n}\\n\\n.challengeNotActive p img{\\n    margin-bottom: 1rem;\\n}\\n\\n.challengeActive {\\n    height: 100%;\\n\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.challengeActive header {\\n    color: var(--blue);\\n    font-weight: 600;\\n    font-size: 1.25rem;\\n    padding: 0 2rem 1.5rem;\\n    border-bottom: 1px solid var(--gray-line);\\n}\\n\\n.challengeActive main{\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.challengeActive main strong{\\n    font-weight: 2rem;\\n    font-weight: 600;\\n    color: var(--title);\\n    margin: 1.5rem 0 1rem;\\n}\\n\\n.challengeActive main p {\\n    line-height: 1.5;\\n}\\n\\n.challengeActive footer{\\n    grid-template-columns: ;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"challengeBoxContainer\": \"ChallengeBox_challengeBoxContainer__53AkF\",\n\t\"challengeNotActive\": \"ChallengeBox_challengeNotActive__35ixK\",\n\t\"challengeActive\": \"ChallengeBox_challengeActive__3mO_D\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzPzY5YmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDhDQUE4QyxtQkFBbUIsaUNBQWlDLHlCQUF5QiwrQ0FBK0MsMkJBQTJCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QiwyQkFBMkIsR0FBRyw2Q0FBNkMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxvREFBb0Qsd0JBQXdCLHVCQUF1Qix1QkFBdUIsR0FBRywrQ0FBK0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxrREFBa0QsMEJBQTBCLEdBQUcsMENBQTBDLG1CQUFtQixzQkFBc0IsNkJBQTZCLEdBQUcsaURBQWlELHlCQUF5Qix1QkFBdUIseUJBQXlCLDZCQUE2QixnREFBZ0QsR0FBRyw4Q0FBOEMsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLHFEQUFxRCx3QkFBd0IsdUJBQXVCLDBCQUEwQiw0QkFBNEIsR0FBRyxpREFBaUQsdUJBQXVCLEdBQUcsZ0RBQWdELDhCQUE4QixHQUFHLE9BQU8sOEdBQThHLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxpREFBaUQsbUJBQW1CLGlDQUFpQyx5QkFBeUIsK0NBQStDLDJCQUEyQixzQkFBc0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsMkJBQTJCLEdBQUcseUJBQXlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsZ0NBQWdDLHdCQUF3Qix1QkFBdUIsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsOEJBQThCLDBCQUEwQixHQUFHLHNCQUFzQixtQkFBbUIsc0JBQXNCLDZCQUE2QixHQUFHLDZCQUE2Qix5QkFBeUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsZ0RBQWdELEdBQUcsMEJBQTBCLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsaUNBQWlDLHdCQUF3Qix1QkFBdUIsMEJBQTBCLDRCQUE0QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcsbUJBQW1CO0FBQzEwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VCb3hDb250YWluZXJfXzUzQWtGe1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLIHN0cm9uZyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5cXG4uQ2hhbGxlbmdlQm94X2NoYWxsZW5nZU5vdEFjdGl2ZV9fMzVpeEsgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uQ2hhbGxlbmdlQm94X2NoYWxsZW5nZU5vdEFjdGl2ZV9fMzVpeEsgcCBpbWd7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5DaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQWN0aXZlX18zbU9fRCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VBY3RpdmVfXzNtT19EIGhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMS41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS1saW5lKTtcXG59XFxuXFxuLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VBY3RpdmVfXzNtT19EIG1haW57XFxuICAgIGZsZXg6IDEgMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5DaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQWN0aXZlX18zbU9fRCBtYWluIHN0cm9uZ3tcXG4gICAgZm9udC13ZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxuICAgIG1hcmdpbjogMS41cmVtIDAgMXJlbTtcXG59XFxuXFxuLkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VBY3RpdmVfXzNtT19EIG1haW4gcCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5DaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQWN0aXZlX18zbU9fRCBmb290ZXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTs7SUFFWix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxvQkFBb0I7O0lBRXBCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFNBQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoYWxsZW5nZUJveENvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgcGFkZGluZzogMS41cmVtIDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGFsbGVuZ2VOb3RBY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbGxlbmdlTm90QWN0aXZlIHN0cm9uZyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5cXG4uY2hhbGxlbmdlTm90QWN0aXZlIHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLmNoYWxsZW5nZU5vdEFjdGl2ZSBwIGltZ3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNoYWxsZW5nZUFjdGl2ZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoYWxsZW5nZUFjdGl2ZSBoZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMCAycmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktbGluZSk7XFxufVxcblxcbi5jaGFsbGVuZ2VBY3RpdmUgbWFpbntcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGFsbGVuZ2VBY3RpdmUgbWFpbiBzdHJvbmd7XFxuICAgIGZvbnQtd2VpZ2h0OiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDFyZW07XFxufVxcblxcbi5jaGFsbGVuZ2VBY3RpdmUgbWFpbiBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmNoYWxsZW5nZUFjdGl2ZSBmb290ZXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjaGFsbGVuZ2VCb3hDb250YWluZXJcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQm94Q29udGFpbmVyX181M0FrRlwiLFxuXHRcImNoYWxsZW5nZU5vdEFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUFjdGl2ZV9fM21PX0RcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/ChallengeBox.module.css\n");

/***/ })

})