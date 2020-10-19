(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/cli-mathquill/build/mathquill.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/carnegielearn/projects/cccp/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/home/carnegielearn/projects/cccp/node_modules/postcss-loader/src??embedded!/home/carnegielearn/projects/cccp/node_modules/cli-mathquill/build/mathquill.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * MathQuill v0.10.1, by Han, Jeanine, and Mary\n * http://mathquill.com | maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n  font-family: Symbola;\n  src: url('Symbola.eot');\n  src: local(\"Symbola Regular\"), local(\"Symbola\"), url('Symbola.woff2') format(\"woff2\"), url('Symbola.woff') format(\"woff\"), url('Symbola.ttf') format(\"truetype\"), url('Symbola.svg#Symbola') format(\"svg\");\n}\n.mq-editable-field {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor {\n  border-left: 1px solid black;\n  margin-left: -1px;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor.mq-blink {\n  visibility: hidden;\n}\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n  border: 1px solid gray;\n}\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  border-color: #709AC0;\n  border-radius: 1px;\n}\n.mq-math-mode .mq-editable-field {\n  margin: 1px;\n}\n.mq-editable-field .mq-latex-command-input {\n  color: inherit;\n  font-family: \"Courier New\", monospace;\n  border: 1px solid gray;\n  padding-right: 1px;\n  margin-right: 1px;\n  margin-left: 2px;\n}\n.mq-editable-field .mq-latex-command-input.mq-empty {\n  background: transparent;\n}\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n  border-color: ActiveBorder;\n}\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n  content: '';\n}\n.mq-editable-field.mq-text-mode {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n  display: -moz-inline-box;\n  display: inline-block;\n  width: 100%;\n  padding: 2px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.mq-math-mode {\n  font-variant: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 115%;\n  line-height: 1;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n  font-family: \"Times New Roman\", Symbola, serif;\n  line-height: 0.9;\n}\n.mq-math-mode * {\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border-color: black;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  box-sizing: border-box;\n}\n.mq-math-mode .mq-empty {\n  background: #ccc;\n}\n.mq-math-mode .mq-empty.mq-root-block {\n  background: transparent;\n}\n.mq-math-mode.mq-empty {\n  background: transparent;\n}\n.mq-math-mode .mq-text-mode {\n  display: inline-block;\n  white-space: pre;\n}\n.mq-math-mode .mq-text-mode.mq-hasCursor {\n  box-shadow: inset darkgray 0 0.1em 0.2em;\n  padding: 0 0.1em;\n  margin: 0 -0.1em;\n  min-width: 1ex;\n}\n.mq-math-mode .mq-font {\n  font: 1em \"Times New Roman\", Symbola, serif;\n}\n.mq-math-mode .mq-font * {\n  font-family: inherit;\n  font-style: inherit;\n}\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n  font-weight: bolder;\n}\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n  font-style: italic;\n}\n.mq-math-mode var.mq-f {\n  margin-right: 0.2em;\n  margin-left: 0.1em;\n}\n.mq-math-mode .mq-roman var.mq-f {\n  margin: 0;\n}\n.mq-math-mode big {\n  font-size: 200%;\n}\n.mq-math-mode .mq-int > big {\n  display: inline-block;\n  -webkit-transform: scaleX(0.7);\n  transform: scaleX(0.7);\n  vertical-align: -0.16em;\n}\n.mq-math-mode .mq-int > .mq-supsub {\n  font-size: 80%;\n  vertical-align: -1.1em;\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\n  vertical-align: 1.3em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\n  margin-left: -0.35em;\n}\n.mq-math-mode .mq-roman {\n  font-style: normal;\n}\n.mq-math-mode .mq-sans-serif {\n  font-family: sans-serif, Symbola, serif;\n}\n.mq-math-mode .mq-monospace {\n  font-family: monospace, Symbola, serif;\n}\n.mq-math-mode .mq-overline {\n  border-top: 1px solid black;\n  margin-top: 1px;\n}\n.mq-math-mode .mq-underline {\n  border-bottom: 1px solid black;\n  margin-bottom: 1px;\n}\n.mq-math-mode .mq-binary-operator {\n  padding: 0 0.2em;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-supsub {\n  text-align: left;\n  font-size: 90%;\n  vertical-align: -0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only {\n  vertical-align: 0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n  display: inline-block;\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-supsub .mq-sup {\n  display: block;\n}\n.mq-math-mode .mq-supsub .mq-sub {\n  display: block;\n  float: left;\n}\n.mq-math-mode .mq-supsub .mq-binary-operator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-supsub .mq-fraction {\n  font-size: 70%;\n}\n.mq-math-mode sup.mq-nthroot {\n  font-size: 80%;\n  vertical-align: 0.8em;\n  margin-right: -0.6em;\n  margin-left: 0.2em;\n  min-width: 0.5em;\n}\n.mq-math-mode .mq-paren {\n  padding: 0 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: center 0.06em;\n  transform-origin: center 0.06em;\n}\n.mq-math-mode .mq-paren.mq-ghost {\n  color: silver;\n}\n.mq-math-mode .mq-paren + span {\n  margin-top: 0.1em;\n  margin-bottom: 0.1em;\n}\n.mq-math-mode .mq-array {\n  vertical-align: middle;\n  text-align: center;\n}\n.mq-math-mode .mq-array > span {\n  display: block;\n}\n.mq-math-mode .mq-operator-name {\n  font-family: Symbola, \"Times New Roman\", serif;\n  line-height: 0.9;\n  font-style: normal;\n}\n.mq-math-mode var.mq-operator-name.mq-first {\n  padding-left: 0.2em;\n}\n.mq-math-mode var.mq-operator-name.mq-last,\n.mq-math-mode .mq-supsub.mq-after-operator-name {\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-fraction {\n  font-size: 90%;\n  text-align: center;\n  vertical-align: -0.4em;\n  padding: 0 0.2em;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n  display: -moz-groupbox;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n  display: inline-block;\n}\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator,\n.mq-math-mode .mq-dot-recurring {\n  display: block;\n}\n.mq-math-mode .mq-numerator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-denominator {\n  border-top: 1px solid;\n  float: right;\n  width: 100%;\n  padding: 0.1em;\n}\n.mq-math-mode .mq-dot-recurring {\n  text-align: center;\n  height: 0.3em;\n}\n.mq-math-mode .mq-sqrt-prefix {\n  padding-top: 0;\n  position: relative;\n  top: 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: top;\n  transform-origin: top;\n}\n.mq-math-mode .mq-sqrt-stem {\n  border-top: 1px solid;\n  margin-top: 1px;\n  padding-left: 0.15em;\n  padding-right: 0.2em;\n  margin-right: 0.1em;\n  padding-top: 1px;\n}\n.mq-math-mode .mq-diacritic-above {\n  display: block;\n  text-align: center;\n  line-height: 0.4em;\n}\n.mq-math-mode .mq-diacritic-stem {\n  display: block;\n  text-align: center;\n}\n.mq-math-mode .mq-hat-prefix {\n  display: block;\n  text-align: center;\n  line-height: 0.95em;\n  margin-bottom: -0.7em;\n  transform: scaleX(1.5);\n  -moz-transform: scaleX(1.5);\n  -o-transform: scaleX(1.5);\n  -webkit-transform: scaleX(1.5);\n}\n.mq-math-mode .mq-hat-stem {\n  display: block;\n}\n.mq-math-mode .mq-large-operator {\n  vertical-align: -0.2em;\n  padding: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n  display: block;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n  font-size: 80%;\n}\n.mq-math-mode .mq-large-operator .mq-from {\n  float: right;\n  /* take out of normal flow to manipulate baseline */\n  width: 100%;\n}\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n  cursor: text;\n  font-family: Symbola, \"Times New Roman\", serif;\n}\n.mq-math-mode .mq-overarc {\n  border-top: 1px solid black;\n  border-top-right-radius: 50% 0.3em;\n  border-top-left-radius: 50% 0.3em;\n  margin-top: 1px;\n  padding-top: 0.15em;\n}\n.mq-math-mode .mq-overarrow {\n  min-width: 0.5em;\n  border-top: 1px solid black;\n  margin-top: 1px;\n  padding-top: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-overarrow:before {\n  display: block;\n  position: relative;\n  top: -0.34em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  text-align: right;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both {\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {\n  min-height: 1.23em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {\n  top: -0.34em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:before {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:after {\n  display: block;\n  position: relative;\n  top: -2.3em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  visibility: visible;\n  text-align: right;\n}\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n  background: #B4D5FE !important;\n  background: Highlight !important;\n  color: HighlightText;\n  border-color: HighlightText;\n}\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n  background: #39F !important;\n}\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\n}\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n  background: #D4D4D4 !important;\n  color: black;\n  border-color: black;\n}\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\n}\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n      user-select: text;\n}\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n      user-select: text;\n  position: absolute;\n  clip: rect(1em 1em 1em 1em);\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  resize: none;\n  width: 1px;\n  height: 1px;\n  box-sizing: content-box;\n}\n.mq-math-mode .mq-matrixed {\n  background: white;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n  margin-top: -0.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jbGktbWF0aHF1aWxsL2J1aWxkL21hdGhxdWlsbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUU7QUFDRjtFQUNFLG9CQUFvQjtFQUNwQix1QkFBMkI7RUFDM0IsME1BQTBOO0FBQzVOO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUNBOztFQUlFLGtEQUFrRDtFQUNsRCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBOzs7RUFHRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUdaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFx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QUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTs7Ozs7O0VBTUUsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsNEVBQTRFO0FBQzlFO0FBQ0E7Ozs7Ozs7O0VBUUUsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSw0RUFBNEU7QUFDOUU7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBaUI7TUFBakIsaUJBQWlCO0FBQ25CO0FBQ0E7Ozs7RUFJRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFJM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLCtEQUErRDtFQUMvRCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL2NsaS1tYXRocXVpbGwvYnVpbGQvbWF0aHF1aWxsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBNYXRoUXVpbGwgdjAuMTAuMSwgYnkgSGFuLCBKZWFuaW5lLCBhbmQgTWFyeVxuICogaHR0cDovL21hdGhxdWlsbC5jb20gfCBtYWludGFpbmVyc0BtYXRocXVpbGwuY29tXG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZVxuICogTW96aWxsYSBQdWJsaWMgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTFxuICogd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSwgWW91IGNhbiBvYnRhaW5cbiAqIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU3ltYm9sYTtcbiAgc3JjOiB1cmwoZm9udHMvU3ltYm9sYS5lb3QpO1xuICBzcmM6IGxvY2FsKFwiU3ltYm9sYSBSZWd1bGFyXCIpLCBsb2NhbChcIlN5bWJvbGFcIiksIHVybChmb250cy9TeW1ib2xhLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKGZvbnRzL1N5bWJvbGEud29mZikgZm9ybWF0KFwid29mZlwiKSwgdXJsKGZvbnRzL1N5bWJvbGEudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKGZvbnRzL1N5bWJvbGEuc3ZnI1N5bWJvbGEpIGZvcm1hdChcInN2Z1wiKTtcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCB7XG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1jdXJzb3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtY3Vyc29yLm1xLWJsaW5rIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm1xLWVkaXRhYmxlLWZpZWxkLFxuLm1xLW1hdGgtbW9kZSAubXEtZWRpdGFibGUtZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLm1xLWVkaXRhYmxlLWZpZWxkLm1xLWZvY3VzZWQsXG4ubXEtbWF0aC1tb2RlIC5tcS1lZGl0YWJsZS1maWVsZC5tcS1mb2N1c2VkIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjOGJkIDAgMCAxcHggMnB4LCBpbnNldCAjNmFlIDAgMCAycHggMDtcbiAgLW1vei1ib3gtc2hhZG93OiAjOGJkIDAgMCAxcHggMnB4LCBpbnNldCAjNmFlIDAgMCAycHggMDtcbiAgYm94LXNoYWRvdzogIzhiZCAwIDAgMXB4IDJweCwgaW5zZXQgIzZhZSAwIDAgMnB4IDA7XG4gIGJvcmRlci1jb2xvcjogIzcwOUFDMDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtZWRpdGFibGUtZmllbGQge1xuICBtYXJnaW46IDFweDtcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtbGF0ZXgtY29tbWFuZC1pbnB1dCB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4ubXEtZWRpdGFibGUtZmllbGQgLm1xLWxhdGV4LWNvbW1hbmQtaW5wdXQubXEtZW1wdHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtbGF0ZXgtY29tbWFuZC1pbnB1dC5tcS1oYXNDdXJzb3Ige1xuICBib3JkZXItY29sb3I6IEFjdGl2ZUJvcmRlcjtcbn1cbi5tcS1lZGl0YWJsZS1maWVsZC5tcS1lbXB0eTphZnRlcixcbi5tcS1lZGl0YWJsZS1maWVsZC5tcS10ZXh0LW1vZGU6YWZ0ZXIsXG4ubXEtbWF0aC1tb2RlIC5tcS1lbXB0eTphZnRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgY29udGVudDogJ2MnO1xufVxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1jdXJzb3I6b25seS1jaGlsZDphZnRlcixcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtdGV4dGFyZWEgKyAubXEtY3Vyc29yOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGNvbnRlbnQ6ICdjJztcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtdGV4dC1tb2RlIC5tcS1jdXJzb3I6b25seS1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xufVxuLm1xLWVkaXRhYmxlLWZpZWxkLm1xLXRleHQtbW9kZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5tcS1yb290LWJsb2NrLFxuLm1xLW1hdGgtbW9kZSAubXEtcm9vdC1ibG9jayB7XG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tcS1tYXRoLW1vZGUge1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDExNSU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW5vbi1sZWFmLFxuLm1xLW1hdGgtbW9kZSAubXEtc2NhbGVkIHtcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubXEtbWF0aC1tb2RlIHZhcixcbi5tcS1tYXRoLW1vZGUgLm1xLXRleHQtbW9kZSxcbi5tcS1tYXRoLW1vZGUgLm1xLW5vblN5bWJvbGEge1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgU3ltYm9sYSwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAwLjk7XG59XG4ubXEtbWF0aC1tb2RlICoge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtZW1wdHkge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtZW1wdHkubXEtcm9vdC1ibG9jayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1xLW1hdGgtbW9kZS5tcS1lbXB0eSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtdGV4dC1tb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtdGV4dC1tb2RlLm1xLWhhc0N1cnNvciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IGRhcmtncmF5IDAgMC4xZW0gMC4yZW07XG4gIHBhZGRpbmc6IDAgMC4xZW07XG4gIG1hcmdpbjogMCAtMC4xZW07XG4gIG1pbi13aWR0aDogMWV4O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtZm9udCB7XG4gIGZvbnQ6IDFlbSBcIlRpbWVzIE5ldyBSb21hblwiLCBTeW1ib2xhLCBzZXJpZjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWZvbnQgKiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xufVxuLm1xLW1hdGgtbW9kZSBiLFxuLm1xLW1hdGgtbW9kZSBiLm1xLWZvbnQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLm1xLW1hdGgtbW9kZSB2YXIsXG4ubXEtbWF0aC1tb2RlIGksXG4ubXEtbWF0aC1tb2RlIGkubXEtZm9udCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5tcS1tYXRoLW1vZGUgdmFyLm1xLWYge1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICBtYXJnaW4tbGVmdDogMC4xZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1yb21hbiB2YXIubXEtZiB7XG4gIG1hcmdpbjogMDtcbn1cbi5tcS1tYXRoLW1vZGUgYmlnIHtcbiAgZm9udC1zaXplOiAyMDAlO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtaW50ID4gYmlnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuNyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMC43KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDAuNyk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGVYKDAuNyk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNyk7XG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xNmVtO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtaW50ID4gLm1xLXN1cHN1YiB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTEuMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjJlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWludCA+IC5tcS1zdXBzdWIgPiAubXEtc3VwID4gLm1xLXN1cC1pbm5lciB7XG4gIHZlcnRpY2FsLWFsaWduOiAxLjNlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWludCA+IC5tcS1zdXBzdWIgPiAubXEtc3ViIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjM1ZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1yb21hbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXNhbnMtc2VyaWYge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgU3ltYm9sYSwgc2VyaWY7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBTeW1ib2xhLCBzZXJpZjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJsaW5lIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS11bmRlcmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWJpbmFyeS1vcGVyYXRvciB7XG4gIHBhZGRpbmc6IDAgMC4yZW07XG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3Vwc3ViIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHZlcnRpY2FsLWFsaWduOiAtMC41ZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1zdXBzdWIubXEtc3VwLW9ubHkge1xuICB2ZXJ0aWNhbC1hbGlnbjogMC41ZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1zdXBzdWIubXEtc3VwLW9ubHkgLm1xLXN1cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3Vwc3ViIC5tcS1zdXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXN1cHN1YiAubXEtc3ViIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3Vwc3ViIC5tcS1iaW5hcnktb3BlcmF0b3Ige1xuICBwYWRkaW5nOiAwIDAuMWVtO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3Vwc3ViIC5tcS1mcmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogNzAlO1xufVxuLm1xLW1hdGgtbW9kZSBzdXAubXEtbnRocm9vdCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC44ZW07XG4gIG1hcmdpbi1yaWdodDogLTAuNmVtO1xuICBtYXJnaW4tbGVmdDogMC4yZW07XG4gIG1pbi13aWR0aDogMC41ZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1wYXJlbiB7XG4gIHBhZGRpbmc6IDAgMC4xZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIDAuMDZlbTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgMC4wNmVtO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIDAuMDZlbTtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIDAuMDZlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIDAuMDZlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXBhcmVuLm1xLWdob3N0IHtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXBhcmVuICsgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDAuMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWFycmF5IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtYXJyYXkgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1vcGVyYXRvci1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFN5bWJvbGEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBsaW5lLWhlaWdodDogMC45O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4ubXEtbWF0aC1tb2RlIHZhci5tcS1vcGVyYXRvci1uYW1lLm1xLWZpcnN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn1cbi5tcS1tYXRoLW1vZGUgdmFyLm1xLW9wZXJhdG9yLW5hbWUubXEtbGFzdCxcbi5tcS1tYXRoLW1vZGUgLm1xLXN1cHN1Yi5tcS1hZnRlci1vcGVyYXRvci1uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMC4yZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1mcmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiAtMC40ZW07XG4gIHBhZGRpbmc6IDAgMC4yZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1mcmFjdGlvbixcbi5tcS1tYXRoLW1vZGUgLm1xLWxhcmdlLW9wZXJhdG9yLFxuLm1xLW1hdGgtbW9kZSB4Oi1tb3otYW55LWxpbmsge1xuICBkaXNwbGF5OiAtbW96LWdyb3VwYm94O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtZnJhY3Rpb24sXG4ubXEtbWF0aC1tb2RlIC5tcS1sYXJnZS1vcGVyYXRvcixcbi5tcS1tYXRoLW1vZGUgeDotbW96LWFueS1saW5rLFxuLm1xLW1hdGgtbW9kZSB4OmRlZmF1bHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1udW1lcmF0b3IsXG4ubXEtbWF0aC1tb2RlIC5tcS1kZW5vbWluYXRvcixcbi5tcS1tYXRoLW1vZGUgLm1xLWRvdC1yZWN1cnJpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW51bWVyYXRvciB7XG4gIHBhZGRpbmc6IDAgMC4xZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1kZW5vbWluYXRvciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4xZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1kb3QtcmVjdXJyaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDAuM2VtO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3FydC1wcmVmaXgge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc3FydC1zdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMC4xNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjFlbTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWRpYWNyaXRpYy1hYm92ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwLjRlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWRpYWNyaXRpYy1zdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWhhdC1wcmVmaXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMC45NWVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC43ZW07XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEuNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMS41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMS41KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjUpO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtaGF0LXN0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWxhcmdlLW9wZXJhdG9yIHtcbiAgdmVydGljYWwtYWxpZ246IC0wLjJlbTtcbiAgcGFkZGluZzogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLWxhcmdlLW9wZXJhdG9yIC5tcS1mcm9tLFxuLm1xLW1hdGgtbW9kZSAubXEtbGFyZ2Utb3BlcmF0b3IgYmlnLFxuLm1xLW1hdGgtbW9kZSAubXEtbGFyZ2Utb3BlcmF0b3IgLm1xLXRvIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1sYXJnZS1vcGVyYXRvciAubXEtZnJvbSxcbi5tcS1tYXRoLW1vZGUgLm1xLWxhcmdlLW9wZXJhdG9yIC5tcS10byB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtbGFyZ2Utb3BlcmF0b3IgLm1xLWZyb20ge1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qIHRha2Ugb3V0IG9mIG5vcm1hbCBmbG93IHRvIG1hbmlwdWxhdGUgYmFzZWxpbmUgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG4ubXEtbWF0aC1tb2RlLFxuLm1xLW1hdGgtbW9kZSAubXEtZWRpdGFibGUtZmllbGQge1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQtZmFtaWx5OiBTeW1ib2xhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcmMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJSAwLjNlbTtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA1MCUgMC4zZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCUgMC4zZW07XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlIDAuM2VtO1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogNTAlIDAuM2VtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCUgMC4zZW07XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgcGFkZGluZy10b3A6IDAuMTVlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdyB7XG4gIG1pbi13aWR0aDogMC41ZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBwYWRkaW5nLXRvcDogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdzpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjM0ZW07XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAwZW07XG4gIGNvbnRlbnQ6ICdcXDI3QTQnO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdy5tcS1hcnJvdy1sZWZ0OmJlZm9yZSB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIGZpbHRlcjogRmxpcEg7XG4gIC1tcy1maWx0ZXI6IFwiRmxpcEhcIjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdy5tcS1hcnJvdy1ib3RoIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtb3ZlcmFycm93Lm1xLWFycm93LWJvdGgubXEtZW1wdHkge1xuICBtaW4taGVpZ2h0OiAxLjIzZW07XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1vdmVyYXJyb3cubXEtYXJyb3ctYm90aC5tcS1lbXB0eTphZnRlciB7XG4gIHRvcDogLTAuMzRlbTtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdy5tcS1hcnJvdy1ib3RoOmJlZm9yZSB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIGZpbHRlcjogRmxpcEg7XG4gIC1tcy1maWx0ZXI6IFwiRmxpcEhcIjtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW92ZXJhcnJvdy5tcS1hcnJvdy1ib3RoOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMi4zZW07XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAwZW07XG4gIGNvbnRlbnQ6ICdcXDI3QTQnO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXNlbGVjdGlvbixcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtc2VsZWN0aW9uLFxuLm1xLW1hdGgtbW9kZSAubXEtc2VsZWN0aW9uIC5tcS1ub24tbGVhZixcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtc2VsZWN0aW9uIC5tcS1ub24tbGVhZixcbi5tcS1tYXRoLW1vZGUgLm1xLXNlbGVjdGlvbiAubXEtc2NhbGVkLFxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1zZWxlY3Rpb24gLm1xLXNjYWxlZCB7XG4gIGJhY2tncm91bmQ6ICNCNEQ1RkUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogSGlnaGxpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBIaWdobGlnaHRUZXh0O1xuICBib3JkZXItY29sb3I6IEhpZ2hsaWdodFRleHQ7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1zZWxlY3Rpb24gLm1xLW1hdHJpeGVkLFxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1zZWxlY3Rpb24gLm1xLW1hdHJpeGVkIHtcbiAgYmFja2dyb3VuZDogIzM5RiAhaW1wb3J0YW50O1xufVxuLm1xLW1hdGgtbW9kZSAubXEtc2VsZWN0aW9uIC5tcS1tYXRyaXhlZC1jb250YWluZXIsXG4ubXEtZWRpdGFibGUtZmllbGQgLm1xLXNlbGVjdGlvbiAubXEtbWF0cml4ZWQtY29udGFpbmVyIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQ2hyb21hKGNvbG9yPScjMzM5OUZGJykgIWltcG9ydGFudDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLXNlbGVjdGlvbi5tcS1ibHVyLFxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1zZWxlY3Rpb24ubXEtYmx1cixcbi5tcS1tYXRoLW1vZGUgLm1xLXNlbGVjdGlvbi5tcS1ibHVyIC5tcS1ub24tbGVhZixcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtc2VsZWN0aW9uLm1xLWJsdXIgLm1xLW5vbi1sZWFmLFxuLm1xLW1hdGgtbW9kZSAubXEtc2VsZWN0aW9uLm1xLWJsdXIgLm1xLXNjYWxlZCxcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtc2VsZWN0aW9uLm1xLWJsdXIgLm1xLXNjYWxlZCxcbi5tcS1tYXRoLW1vZGUgLm1xLXNlbGVjdGlvbi5tcS1ibHVyIC5tcS1tYXRyaXhlZCxcbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtc2VsZWN0aW9uLm1xLWJsdXIgLm1xLW1hdHJpeGVkIHtcbiAgYmFja2dyb3VuZDogI0Q0RDRENCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4ubXEtbWF0aC1tb2RlIC5tcS1zZWxlY3Rpb24ubXEtYmx1ciAubXEtbWF0cml4ZWQtY29udGFpbmVyLFxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1zZWxlY3Rpb24ubXEtYmx1ciAubXEtbWF0cml4ZWQtY29udGFpbmVyIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQ2hyb21hKGNvbG9yPScjRDRENEQ0JykgIWltcG9ydGFudDtcbn1cbi5tcS1lZGl0YWJsZS1maWVsZCAubXEtdGV4dGFyZWEsXG4ubXEtbWF0aC1tb2RlIC5tcS10ZXh0YXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4ubXEtZWRpdGFibGUtZmllbGQgLm1xLXRleHRhcmVhICosXG4ubXEtbWF0aC1tb2RlIC5tcS10ZXh0YXJlYSAqLFxuLm1xLWVkaXRhYmxlLWZpZWxkIC5tcS1zZWxlY3RhYmxlLFxuLm1xLW1hdGgtbW9kZSAubXEtc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMWVtIDFlbSAxZW0gMWVtKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5tcS1tYXRoLW1vZGUgLm1xLW1hdHJpeGVkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1xLW1hdGgtbW9kZSAubXEtbWF0cml4ZWQtY29udGFpbmVyIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQ2hyb21hKGNvbG9yPSd3aGl0ZScpO1xuICBtYXJnaW4tdG9wOiAtMC4xZW07XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/carnegielearn/projects/cccp/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/home/carnegielearn/projects/cccp/node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZUxhdGV4RWxlbWVudC9zcmMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEUiLCJmaWxlIjoicHJvamVjdHMvc2ltcGxlTGF0ZXhFbGVtZW50L3NyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuIl19 */", '', '']]

/***/ }),

/***/ "../../node_modules/cli-mathquill/build/mathquill.css":
/*!****************************************************************************************!*\
  !*** /home/carnegielearn/projects/cccp/node_modules/cli-mathquill/build/mathquill.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./mathquill.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/cli-mathquill/build/mathquill.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** /home/carnegielearn/projects/cccp/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./styles.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!***************************************************************************************************************!*\
  !*** multi ./src/styles.css /home/carnegielearn/projects/cccp/node_modules/cli-mathquill/build/mathquill.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/carnegielearn/projects/cccp/projects/simpleLatexElement/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /home/carnegielearn/projects/cccp/node_modules/cli-mathquill/build/mathquill.css */"../../node_modules/cli-mathquill/build/mathquill.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map