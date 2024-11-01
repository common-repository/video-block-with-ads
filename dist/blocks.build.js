/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__);\n\n\n\n\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('video-plus/video-with-ads', {\n\n\ttitle: 'Video with Ads',\n\ticon: wp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"SVG\"],\n\t\t{ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"Path\"], { fill: 'none', d: 'M0 0h24v24H0V0z' }),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"Path\"], { d: 'M4 6l2 4h14v8H4V6m18-2h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4L2 6v12l2 2h16l2-2V4z' })\n\t),\n\tcategory: 'common',\n\tkeywords: ['IMA', 'Video Ads', 'Vast Vpaid'],\n\tattributes: {\n\t\tadtag: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tautoplay: {\n\t\t\ttype: 'boolean'\n\t\t},\n\t\tcontrols: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: true\n\t\t},\n\t\tloop: {\n\t\t\ttype: 'boolean'\n\t\t},\n\t\tmuted: {\n\t\t\ttype: 'boolean'\n\t\t},\n\t\tposter: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tpreload: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'metadata'\n\t\t},\n\t\tsrc: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    adtag = _props$attributes.adtag,\n\t\t    autoplay = _props$attributes.autoplay,\n\t\t    caption = _props$attributes.caption,\n\t\t    controls = _props$attributes.controls,\n\t\t    loop = _props$attributes.loop,\n\t\t    muted = _props$attributes.muted,\n\t\t    poster = _props$attributes.poster,\n\t\t    preload = _props$attributes.preload,\n\t\t    src = _props$attributes.src;\n\n\n\t\tvar posterImageButton = Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"createRef\"])();\n\n\t\tvar onSelectVideo = function onSelectVideo(media) {\n\t\t\tif (!media || !media.url) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tprops.setAttributes({\n\t\t\t\tsrc: media.url\n\t\t\t});\n\t\t};\n\n\t\tvar onSelectURL = function onSelectURL(url) {\n\t\t\tprops.setAttributes({\n\t\t\t\tsrc: url\n\t\t\t});\n\t\t};\n\n\t\tvar onSelectPoster = function onSelectPoster(media) {\n\t\t\tprops.setAttributes({\n\t\t\t\tposter: media.url\n\t\t\t});\n\t\t};\n\n\t\tvar onRemovePoster = function onRemovePoster() {\n\t\t\tposterImageButton.current.focus();\n\t\t\tprops.setAttributes({\n\t\t\t\tposter: undefined\n\t\t\t});\n\t\t};\n\n\t\tif (!src) {\n\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_editor__[\"MediaPlaceholder\"], {\n\t\t\t\ticon: 'media-video',\n\t\t\t\tclassName: props.className,\n\t\t\t\tonSelect: onSelectVideo,\n\t\t\t\tonSelectURL: onSelectURL,\n\t\t\t\taccept: 'video/*',\n\t\t\t\tallowedTypes: ['video'],\n\t\t\t\tvalue: props.attributes\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"Fragment\"],\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_editor__[\"InspectorControls\"],\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tlabel: 'Autoplay',\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn props.setAttributes({ autoplay: !!value });\n\t\t\t\t\t},\n\t\t\t\t\tchecked: autoplay\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tlabel: 'Loop',\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn props.setAttributes({ loop: !!value });\n\t\t\t\t\t},\n\t\t\t\t\tchecked: loop\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tlabel: 'Muted',\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn props.setAttributes({ muted: !!value });\n\t\t\t\t\t},\n\t\t\t\t\tchecked: muted\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"ToggleControl\"], {\n\t\t\t\t\tlabel: 'Playback Controls',\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn props.setAttributes({ controls: !!value });\n\t\t\t\t\t},\n\t\t\t\t\tchecked: controls\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"SelectControl\"], {\n\t\t\t\t\tlabel: 'Preload',\n\t\t\t\t\tvalue: preload,\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn props.setAttributes({ preload: value });\n\t\t\t\t\t},\n\t\t\t\t\toptions: [{ value: 'auto', label: 'Auto' }, { value: 'metadata', label: 'Metadata' }, { value: 'none', label: 'None' }]\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_editor__[\"MediaUploadCheck\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"BaseControl\"],\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'editor-video-poster-control',\n\t\t\t\t\t\t\tlabel: 'Poster Image'\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_editor__[\"MediaUpload\"], {\n\t\t\t\t\t\t\ttitle: 'Select Poster Image',\n\t\t\t\t\t\t\tonSelect: onSelectPoster,\n\t\t\t\t\t\t\tallowedTypes: ['image'],\n\t\t\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"Button\"],\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tisDefault: true,\n\t\t\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\t\t\tref: posterImageButton\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t!props.attributes.poster ? 'Select Poster Image' : 'Replace image'\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t!!props.attributes.poster && wp.element.createElement(\n\t\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"Button\"],\n\t\t\t\t\t\t\t{ onClick: onRemovePoster, isLink: true, isDestructive: true },\n\t\t\t\t\t\t\t'Remove Poster Image'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"PanelBody\"],\n\t\t\t\t\t{ title: 'Ad Settings', initialOpen: false },\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"TextControl\"], {\n\t\t\t\t\t\tlabel: 'Ad Tag',\n\t\t\t\t\t\tvalue: props.attributes.adtag,\n\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\treturn props.setAttributes({ adtag: value });\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'figure',\n\t\t\t\t{ className: props.className },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_components__[\"Disabled\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement('video', {\n\t\t\t\t\t\tcontrols: controls,\n\t\t\t\t\t\tposter: poster,\n\t\t\t\t\t\tsrc: src\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    id = _props$attributes2.id,\n\t\t    autoplay = _props$attributes2.autoplay,\n\t\t    caption = _props$attributes2.caption,\n\t\t    controls = _props$attributes2.controls,\n\t\t    loop = _props$attributes2.loop,\n\t\t    muted = _props$attributes2.muted,\n\t\t    poster = _props$attributes2.poster,\n\t\t    preload = _props$attributes2.preload,\n\t\t    src = _props$attributes2.src,\n\t\t    adtag = _props$attributes2.adtag;\n\n\t\treturn null;\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'video',\n\t\t\t\t{\n\t\t\t\t\tid: false,\n\t\t\t\t\t'class': 'video-js vjs-fluid',\n\t\t\t\t\tautoPlay: autoplay,\n\t\t\t\t\tcontrols: controls,\n\t\t\t\t\tloop: loop,\n\t\t\t\t\tmuted: muted,\n\t\t\t\t\tposter: poster,\n\t\t\t\t\tpreload: preload !== 'metadata' ? preload : undefined,\n\t\t\t\t\t'data-adtag': adtag\n\t\t\t\t},\n\t\t\t\twp.element.createElement('source', { src: src })\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7IEZyYWdtZW50LCBjcmVhdGVSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgUmljaFRleHQsIEJsb2NrQ29udHJvbHMsIEFsaWdubWVudFRvb2xiYXIsIEluc3BlY3RvckNvbnRyb2xzLCBNZWRpYVBsYWNlaG9sZGVyLCBNZWRpYVVwbG9hZCwgTWVkaWFVcGxvYWRDaGVjayB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIEJ1dHRvbiwgRGlzYWJsZWQsIFRleHRDb250cm9sLCBUb2dnbGVDb250cm9sLCBTZWxlY3RDb250cm9sLCBQYW5lbEJvZHksIFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndmlkZW8tcGx1cy92aWRlby13aXRoLWFkcycsIHtcblxuXHR0aXRsZTogJ1ZpZGVvIHdpdGggQWRzJyxcblx0aWNvbjogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFNWRyxcblx0XHR7IHZpZXdCb3g6ICcwIDAgMjQgMjQnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYXRoLCB7IGZpbGw6ICdub25lJywgZDogJ00wIDBoMjR2MjRIMFYweicgfSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhdGgsIHsgZDogJ000IDZsMiA0aDE0djhINFY2bTE4LTJoLTRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINEwyIDZ2MTJsMiAyaDE2bDItMlY0eicgfSlcblx0KSxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogWydJTUEnLCAnVmlkZW8gQWRzJywgJ1Zhc3QgVnBhaWQnXSxcblx0YXR0cmlidXRlczoge1xuXHRcdGFkdGFnOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0YXV0b3BsYXk6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0Y29udHJvbHM6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdGxvb3A6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0bXV0ZWQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0cG9zdGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0cHJlbG9hZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnbWV0YWRhdGEnXG5cdFx0fSxcblx0XHRzcmM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBhZHRhZyA9IF9wcm9wcyRhdHRyaWJ1dGVzLmFkdGFnLFxuXHRcdCAgICBhdXRvcGxheSA9IF9wcm9wcyRhdHRyaWJ1dGVzLmF1dG9wbGF5LFxuXHRcdCAgICBjYXB0aW9uID0gX3Byb3BzJGF0dHJpYnV0ZXMuY2FwdGlvbixcblx0XHQgICAgY29udHJvbHMgPSBfcHJvcHMkYXR0cmlidXRlcy5jb250cm9scyxcblx0XHQgICAgbG9vcCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmxvb3AsXG5cdFx0ICAgIG11dGVkID0gX3Byb3BzJGF0dHJpYnV0ZXMubXV0ZWQsXG5cdFx0ICAgIHBvc3RlciA9IF9wcm9wcyRhdHRyaWJ1dGVzLnBvc3Rlcixcblx0XHQgICAgcHJlbG9hZCA9IF9wcm9wcyRhdHRyaWJ1dGVzLnByZWxvYWQsXG5cdFx0ICAgIHNyYyA9IF9wcm9wcyRhdHRyaWJ1dGVzLnNyYztcblxuXG5cdFx0dmFyIHBvc3RlckltYWdlQnV0dG9uID0gY3JlYXRlUmVmKCk7XG5cblx0XHR2YXIgb25TZWxlY3RWaWRlbyA9IGZ1bmN0aW9uIG9uU2VsZWN0VmlkZW8obWVkaWEpIHtcblx0XHRcdGlmICghbWVkaWEgfHwgIW1lZGlhLnVybCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzcmM6IG1lZGlhLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBvblNlbGVjdFVSTCA9IGZ1bmN0aW9uIG9uU2VsZWN0VVJMKHVybCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNyYzogdXJsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uU2VsZWN0UG9zdGVyID0gZnVuY3Rpb24gb25TZWxlY3RQb3N0ZXIobWVkaWEpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRwb3N0ZXI6IG1lZGlhLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBvblJlbW92ZVBvc3RlciA9IGZ1bmN0aW9uIG9uUmVtb3ZlUG9zdGVyKCkge1xuXHRcdFx0cG9zdGVySW1hZ2VCdXR0b24uY3VycmVudC5mb2N1cygpO1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHBvc3RlcjogdW5kZWZpbmVkXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0aWYgKCFzcmMpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFQbGFjZWhvbGRlciwge1xuXHRcdFx0XHRpY29uOiAnbWVkaWEtdmlkZW8nLFxuXHRcdFx0XHRjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcblx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0VmlkZW8sXG5cdFx0XHRcdG9uU2VsZWN0VVJMOiBvblNlbGVjdFVSTCxcblx0XHRcdFx0YWNjZXB0OiAndmlkZW8vKicsXG5cdFx0XHRcdGFsbG93ZWRUeXBlczogWyd2aWRlbyddLFxuXHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlc1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEZyYWdtZW50LFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdBdXRvcGxheScsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGF1dG9wbGF5OiAhIXZhbHVlIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2hlY2tlZDogYXV0b3BsYXlcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdMb29wJyxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgbG9vcDogISF2YWx1ZSB9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNoZWNrZWQ6IGxvb3Bcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdNdXRlZCcsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IG11dGVkOiAhIXZhbHVlIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2hlY2tlZDogbXV0ZWRcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdQbGF5YmFjayBDb250cm9scycsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbnRyb2xzOiAhIXZhbHVlIH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2hlY2tlZDogY29udHJvbHNcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6ICdQcmVsb2FkJyxcblx0XHRcdFx0XHR2YWx1ZTogcHJlbG9hZCxcblx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcHJlbG9hZDogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvcHRpb25zOiBbeyB2YWx1ZTogJ2F1dG8nLCBsYWJlbDogJ0F1dG8nIH0sIHsgdmFsdWU6ICdtZXRhZGF0YScsIGxhYmVsOiAnTWV0YWRhdGEnIH0sIHsgdmFsdWU6ICdub25lJywgbGFiZWw6ICdOb25lJyB9XVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdE1lZGlhVXBsb2FkQ2hlY2ssXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRCYXNlQ29udHJvbCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnZWRpdG9yLXZpZGVvLXBvc3Rlci1jb250cm9sJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICdQb3N0ZXIgSW1hZ2UnXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnU2VsZWN0IFBvc3RlciBJbWFnZScsXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdFBvc3Rlcixcblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzOiBbJ2ltYWdlJ10sXG5cdFx0XHRcdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYub3Blbjtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZjogcG9zdGVySW1hZ2VCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQhcHJvcHMuYXR0cmlidXRlcy5wb3N0ZXIgPyAnU2VsZWN0IFBvc3RlciBJbWFnZScgOiAnUmVwbGFjZSBpbWFnZSdcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdCEhcHJvcHMuYXR0cmlidXRlcy5wb3N0ZXIgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHRcdHsgb25DbGljazogb25SZW1vdmVQb3N0ZXIsIGlzTGluazogdHJ1ZSwgaXNEZXN0cnVjdGl2ZTogdHJ1ZSB9LFxuXHRcdFx0XHRcdFx0XHQnUmVtb3ZlIFBvc3RlciBJbWFnZSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdFx0eyB0aXRsZTogJ0FkIFNldHRpbmdzJywgaW5pdGlhbE9wZW46IGZhbHNlIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ0FkIFRhZycsXG5cdFx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5hZHRhZyxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcHMuc2V0QXR0cmlidXRlcyh7IGFkdGFnOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZmlndXJlJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0RGlzYWJsZWQsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJywge1xuXHRcdFx0XHRcdFx0Y29udHJvbHM6IGNvbnRyb2xzLFxuXHRcdFx0XHRcdFx0cG9zdGVyOiBwb3N0ZXIsXG5cdFx0XHRcdFx0XHRzcmM6IHNyY1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgaWQgPSBfcHJvcHMkYXR0cmlidXRlczIuaWQsXG5cdFx0ICAgIGF1dG9wbGF5ID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmF1dG9wbGF5LFxuXHRcdCAgICBjYXB0aW9uID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmNhcHRpb24sXG5cdFx0ICAgIGNvbnRyb2xzID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmNvbnRyb2xzLFxuXHRcdCAgICBsb29wID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmxvb3AsXG5cdFx0ICAgIG11dGVkID0gX3Byb3BzJGF0dHJpYnV0ZXMyLm11dGVkLFxuXHRcdCAgICBwb3N0ZXIgPSBfcHJvcHMkYXR0cmlidXRlczIucG9zdGVyLFxuXHRcdCAgICBwcmVsb2FkID0gX3Byb3BzJGF0dHJpYnV0ZXMyLnByZWxvYWQsXG5cdFx0ICAgIHNyYyA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5zcmMsXG5cdFx0ICAgIGFkdGFnID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmFkdGFnO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3ZpZGVvJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBmYWxzZSxcblx0XHRcdFx0XHQnY2xhc3MnOiAndmlkZW8tanMgdmpzLWZsdWlkJyxcblx0XHRcdFx0XHRhdXRvUGxheTogYXV0b3BsYXksXG5cdFx0XHRcdFx0Y29udHJvbHM6IGNvbnRyb2xzLFxuXHRcdFx0XHRcdGxvb3A6IGxvb3AsXG5cdFx0XHRcdFx0bXV0ZWQ6IG11dGVkLFxuXHRcdFx0XHRcdHBvc3RlcjogcG9zdGVyLFxuXHRcdFx0XHRcdHByZWxvYWQ6IHByZWxvYWQgIT09ICdtZXRhZGF0YScgPyBwcmVsb2FkIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdCdkYXRhLWFkdGFnJzogYWR0YWdcblx0XHRcdFx0fSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnLCB7IHNyYzogc3JjIH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: Fragment, createRef */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 5 */
/*!****************************!*\
  !*** external "wp.editor" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck */
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ }),
/* 6 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: BaseControl, Button, Disabled, PanelBody, Path, SVG, SelectControl, TextControl, ToggleControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ })
/******/ ]);