/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index.js": {
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_jsval_eq": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_jsval_eq"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getElementById_87fd6611f51eaa51": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_getElementById_87fd6611f51eaa51"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_04bba8b54ef81db0": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_Window_04bba8b54ef81db0"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_f023a2b0d5b3d060": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_document_f023a2b0d5b3d060"](p0i32);
/******/ 					},
/******/ 					"__wbg_setInterval_8a1fa44b33360cac": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setInterval_8a1fa44b33360cac"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setProperty_e8b545c0ee776504": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_setProperty_e8b545c0ee776504"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_innerHTML_c659da7951fd218f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_innerHTML_c659da7951fd218f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_657002a9abe51636": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_instanceof_HtmlElement_657002a9abe51636"](p0i32);
/******/ 					},
/******/ 					"__wbg_style_64324d69bc0556a8": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_style_64324d69bc0556a8"](p0i32);
/******/ 					},
/******/ 					"__wbg_onclick_db5077e5769ed7c6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_onclick_db5077e5769ed7c6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_6ebe5d19b58a40e1": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_new_6ebe5d19b58a40e1"]();
/******/ 					},
/******/ 					"__wbg_forEach_ee047569fb156531": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_forEach_ee047569fb156531"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_push_9f1ae2f6575ac2d1": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_push_9f1ae2f6575ac2d1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_4f6527054d7f1f1d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_newnoargs_4f6527054d7f1f1d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_183c0b733b35a027": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_call_183c0b733b35a027"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new0_4cb22101d922d6c1": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_new0_4cb22101d922d6c1"]();
/******/ 					},
/******/ 					"__wbg_toLocaleString_bf39058929702ad1": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_toLocaleString_bf39058929702ad1"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_globalThis_eb9027a878db64ad": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_globalThis_eb9027a878db64ad"]();
/******/ 					},
/******/ 					"__wbg_self_69a78003cf074413": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_self_69a78003cf074413"]();
/******/ 					},
/******/ 					"__wbg_window_db757fdea9443777": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_window_db757fdea9443777"]();
/******/ 					},
/******/ 					"__wbg_global_8efdae4f126ac8b4": function() {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbg_global_8efdae4f126ac8b4"]();
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper143": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_closure_wrapper143"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper141": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index.js"].exports["__wbindgen_closure_wrapper141"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"9d08c8c6a18850b3d875"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"))\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });