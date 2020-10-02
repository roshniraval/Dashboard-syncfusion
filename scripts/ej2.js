/*!
 * filename: ej2.js
 * version : 18.2.56-patch
 * Copyright Syncfusion Inc. 2001 - 2020. All rights reserved.
 * Use of this code is subject to the terms of our license.
 * A copy of the current license can be obtained at any time by e-mailing
 * licensing@syncfusion.com. Any infringement will be prosecuted under
 * applicable laws.
 */
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./crg-resources/18.2.56-patch/src/ej2-1600715884559/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/calendar.js":
/*!***********************************************************************!*\
  !*** ./crg-resources/18.2.56-patch/src/ej2-1600715884559/calendar.js ***!
  \***********************************************************************/
/*! exports provided: calendars2, base2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendars2", function() { return calendars2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base2", function() { return base2; });
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/copy.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ej2_resources_18_2_56_patch_scripts_ej2_calendars_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar */ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/index.js");
/* harmony import */ var _ej2_resources_18_2_56_patch_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ej2-resources/18.2.56-patch/scripts/ej2-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js");




var calendars2 = {};
var base2 = {};

Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(calendars2, _ej2_resources_18_2_56_patch_scripts_ej2_calendars_calendar__WEBPACK_IMPORTED_MODULE_1__);
Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(base2, _ej2_resources_18_2_56_patch_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__);



/***/ }),

/***/ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/copy.js":
/*!*******************************************************************!*\
  !*** ./crg-resources/18.2.56-patch/src/ej2-1600715884559/copy.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function copy(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    result[key] = copy({}, clone, copy, deep);
                }
                else {
                    clone = src ? src : [];
                    result[key] = copy([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
exports.copy = copy;

/***/ }),

/***/ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/dashboard-layout.js":
/*!*******************************************************************************!*\
  !*** ./crg-resources/18.2.56-patch/src/ej2-1600715884559/dashboard-layout.js ***!
  \*******************************************************************************/
/*! exports provided: layouts1, base1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts1", function() { return layouts1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base1", function() { return base1; });
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/copy.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ej2_resources_18_2_56_patch_scripts_ej2_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout */ "./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/index.js");
/* harmony import */ var _ej2_resources_18_2_56_patch_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ej2-resources/18.2.56-patch/scripts/ej2-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js");




var layouts1 = {};
var base1 = {};

Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(layouts1, _ej2_resources_18_2_56_patch_scripts_ej2_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__);
Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(base1, _ej2_resources_18_2_56_patch_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__);



/***/ }),

/***/ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/script.js":
/*!*********************************************************************!*\
  !*** ./crg-resources/18.2.56-patch/src/ej2-1600715884559/script.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/copy.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-layout */ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/dashboard-layout.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ "./crg-resources/18.2.56-patch/src/ej2-1600715884559/calendar.js");




var layouts = {};
var base = {};
var calendars = {};

Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(layouts, _dashboard_layout__WEBPACK_IMPORTED_MODULE_1__["layouts1"]);
Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(base, _dashboard_layout__WEBPACK_IMPORTED_MODULE_1__["base1"]);
Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(calendars, _calendar__WEBPACK_IMPORTED_MODULE_2__["calendars2"]);
Object(_copy__WEBPACK_IMPORTED_MODULE_0__["copy"])(base, _calendar__WEBPACK_IMPORTED_MODULE_2__["base2"]);

var ejs = { layouts:layouts,base:base,calendars:calendars }

window.ejs = ejs;
window.ej = ejs;

/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/ajax.js":
/*!**************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/ajax.js ***!
  \**************************************************************/
/*! exports provided: Ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return Ajax; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
var Ajax = /** @__PURE__ @class */ (function () {
    /**
     * Constructor for Ajax class
     * @param  {string|Object} options?
     * @param  {string} type?
     * @param  {boolean} async?
     * @returns defaultType
     */
    function Ajax(options, type, async, contentType) {
        /**
         * A boolean value indicating whether the request should be sent asynchronous or not.
         * @default true
         */
        this.mode = true;
        /**
         * A boolean value indicating whether to ignore the promise reject.
         * @private
         * @default true
         */
        this.emitError = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
        this.contentType = (this.contentType !== undefined) ? this.contentType : contentType;
    }
    /**
     * Send the request to server.
     * @param {any} data - To send the user data
     * @return {Promise}
     */
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data) ? this.data : data;
        var eventArgs = {
            cancel: false,
            httpRequest: null
        };
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onLoad)) {
                _this.httpRequest.onload = _this.onLoad;
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onProgress)) {
                _this.httpRequest.onprogress = _this.onProgress;
            }
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onAbort)) {
                _this.httpRequest.onabort = _this.onAbort;
            }
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onError)) {
                _this.httpRequest.onerror = _this.onError;
            }
            //** Upload Events **/
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onUploadProgress)) {
                _this.httpRequest.upload.onprogress = _this.onUploadProgress;
            }
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            // Set default headers
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.data) && _this.contentType !== null) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                eventArgs.httpRequest = _this.httpRequest;
                _this.beforeSend(eventArgs);
            }
            if (!eventArgs.cancel) {
                _this.httpRequest.send(!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.data) ? _this.data : null);
            }
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    // no exception handle
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            //success range should be 200 to 299
            if ((this.httpRequest.status >= 200 && this.httpRequest.status <= 299) || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                if (this.emitError) {
                    reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                }
                else {
                    resolve();
                }
            }
        }
    };
    /**
     * To get the response header from XMLHttpRequest
     * @param  {string} key Key to search in the response header
     * @returns {string}
     */
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/animation.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/animation.js ***!
  \*******************************************************************/
/*! exports provided: Animation, rippleEffect, isRippleEnabled, enableRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return rippleEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return isRippleEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return enableRipple; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @__PURE__ @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @return {void}
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(Object(_dom__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    /**
     * Triggers animation
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element                
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame 
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     * @param {AnimationModel} options
     * @returns {AnimationModel}
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     */
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     * @private
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     * @private
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "end", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_4__["NotifyPropertyChanges"]
    ], Animation);
    return Animation;
}(_base__WEBPACK_IMPORTED_MODULE_1__["Base"]));

/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 * @private
 * @param HTMLElement element - Target element
 * @param RippleOptions rippleOptions - Ripple options .
 */
function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].isPointer) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mousedown', rippleHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseup', rippleUpHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseleave', rippleLeaveHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
/**
 * Handler for ripple event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, selector) : target;
    if (!element || (this.rippleOptions && Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - ((!document.body.scrollTop && document.documentElement) ?
        document.documentElement.scrollTop : document.body.scrollTop);
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
/**
 * Handler for ripple element mouse up event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleUpHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for ripple element mouse move event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for removing ripple element
 * @param {MouseEvent} e
 * @param {rippleArgs} eventArgs
 * @returns {void}
 * @private
 */
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseleave', rippleLeaveHandler);
    }
    /* tslint:disable:align */
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean}
 */
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js":
/*!**************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js ***!
  \**************************************************************/
/*! exports provided: Base, getComponent, removeChildInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildInstance", function() { return removeChildInstance; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js");



var isColEName = new RegExp('\]');
/* tslint:enable:no-any */
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 * @private
 */
var Base = /** @__PURE__ @class */ (function () {
    /**
     * Base constructor accept options and element
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](this);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
        if (muteOnChange !== true) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.changedProperties, prop);
            this.dataBind();
        }
        else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isRendered) {
            this.serverDataBind(prop);
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    /**
     * Calls for child element data bind
     * @param {Object} obj
     * @param {Object} parent
     * @returns {void}
     */
    // tslint:disable-next-line:no-any
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    /* tslint:disable:no-any */
    Base.prototype.serverDataBind = function (newChanges) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            return;
        }
        newChanges = newChanges ? newChanges : {};
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.bulkChanges, {}, newChanges, true);
        if (this.allowServerDataBinding) {
            var sfBlazor = 'sfBlazor';
            window[sfBlazor].updateModel(this);
            this.bulkChanges = {};
        }
    };
    /* tslint:enable:no-any */
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            // tslint:disable-next-line:no-any
            var newChanges = {};
            newChanges[key] = newValue;
            this.serverDataBind(newChanges);
        }
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(this.dataBind.bind(this));
    };
    ;
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} listener - Specifies the call to run when the event occurs.
     * @return {void}
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @return {void}
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window[blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        Object(_dom__WEBPACK_IMPORTED_MODULE_1__["addClass"])([this.element], ['e-lib', moduleClass]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     */
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        Object(_dom__WEBPACK_IMPORTED_MODULE_1__["removeClass"])([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            Object(_dom__WEBPACK_IMPORTED_MODULE_1__["removeClass"])([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());

/**
 * Global function to get the component instance from the rendered element.
 * @param elem Specifies the HTMLElement or element id string.
 * @param comp Specifies the component module name or Component.
 */
// tslint:disable-next-line:no-any
function getComponent(elem, comp) {
    var instance;
    var i;
    var ele = typeof elem === 'string' ? document.getElementById(elem) : elem;
    for (i = 0; i < ele.ej2_instances.length; i++) {
        instance = ele.ej2_instances[i];
        if (typeof comp === 'string') {
            var compName = instance.getModuleName();
            if (comp === compName) {
                return instance;
            }
        }
        else {
            // tslint:disable-next-line:no-any
            if (instance instanceof comp) {
                return instance;
            }
        }
    }
    return undefined;
}
/**
 * Function to remove the child instances.
 * @return {void}
 * @private
 */
// tslint:disable-next-line:no-any
function removeChildInstance(element) {
    // tslint:disable-next-line:no-any
    var childEle = [].slice.call(element.getElementsByClassName('e-control'));
    for (var i = 0; i < childEle.length; i++) {
        var compName = childEle[i].classList[1].split('e-')[1];
        // tslint:disable-next-line:no-any
        var compInstance = getComponent(childEle[i], compName);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(compInstance)) {
            compInstance.destroy();
        }
    }
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js":
/*!*****************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js ***!
  \*****************************************************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 * @private
 */
var Browser = /** @__PURE__ @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     * @param {string} event - type of event triggered.
     * @returns {Boolean}
     */
    Browser.getEvent = function (event) {
        // tslint:disable-next-line:no-any
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * To get the value based on provided key and regX
     * @param {string} key
     * @param {RegExp} regX
     * @returns {Object}
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties 
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         * @returns BrowserInfo
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isTouch)) {
                return (window.browserDetails.isTouch =
                    ('ontouchstart' in window.navigator) ||
                        (window &&
                            window.navigator &&
                            (window.navigator.maxTouchPoints > 0)) || ('ontouchstart' in window));
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.cordova) && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.PhoneGap)
                    && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js":
/*!************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js ***!
  \************************************************************************/
/*! exports provided: ChildProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return ChildProperty; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");


/**
 * To detect the changes for inner properties.
 * @private
 */
var ChildProperty = /** @__PURE__ @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.callChildDataBind = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('callChildDataBind', _base__WEBPACK_IMPORTED_MODULE_1__["Base"]);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     * @param {boolean} val
     * @param {string} propName
     * @returns {void}
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     * @param {Object} prop
     * @param {boolean} muteOnChange
     * {void}
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
        }
    };
    /**
     * Binds data
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     * @param {string} key
     * @param {Object} newValue
     * @param {Object} oldValue
     * @returns {void}
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && !this.parentObj.isComplexArraySetter) {
            // tslint:disable-next-line:no-any
            var parent_1;
            var newChanges = {};
            var parentKey = isSaveChanges ? this.getParentKey(true) + '.' + key : key;
            /* istanbul ignore else  */
            if (parentKey.indexOf('.') !== -1) {
                var complexKeys = parentKey.split('.');
                parent_1 = newChanges;
                for (var i = 0; i < complexKeys.length; i++) {
                    var isFinal = i === complexKeys.length - 1;
                    parent_1[complexKeys[i]] = isFinal ? value : {};
                    parent_1 = isFinal ? parent_1 : parent_1[complexKeys[i]];
                }
            }
            else {
                newChanges[parentKey] = {};
                parent_1 = newChanges[parentKey];
                newChanges[parentKey][key] = value;
            }
            /* istanbul ignore next */
            if (this.isParentArray) {
                var actionProperty = 'ejsAction';
                parent_1[actionProperty] = action ? action : 'none';
            }
            this.controlParent.serverDataBind(newChanges);
        }
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        // tslint:disable-next-line:no-any
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/component.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/component.js ***!
  \*******************************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-loader */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/module-loader.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _virtual_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./virtual-dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/virtual-dom.js");
/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-engine */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template-engine.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @__PURE__ @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * Initialize the constructor for component base
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uniqueID"])();
        /**
         * string template option for Blazor template rendering
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        _this.isReactHybrid = false;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': _internationalization__WEBPACK_IMPORTED_MODULE_6__["rightToLeft"] }, true);
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.locale)) {
            _this.setProperties({ 'locale': _internationalization__WEBPACK_IMPORTED_MODULE_6__["defaultCulture"] }, true);
        }
        _this.moduleLoader = new _module_loader__WEBPACK_IMPORTED_MODULE_1__["ModuleLoader"](_this);
        _this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](_this);
        // tslint:disable-next-line:no-function-constructor-with-string-args
        _internationalization__WEBPACK_IMPORTED_MODULE_6__["onIntlChange"].on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    /**
     * Destroys the sub modules while destroying the widget
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        Object(_dom__WEBPACK_IMPORTED_MODULE_7__["removeClass"])([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        _internationalization__WEBPACK_IMPORTED_MODULE_6__["onIntlChange"].off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.accessMount = function () {
        if (this.mount && !this.isReactHybrid) {
            this.mount();
        }
    };
    /**
     * Returns the route element of the component
     */
    Component.prototype.getRootElement = function () {
        if (this.isReactHybrid) {
            return this.actualElement;
        }
        else {
            return this.element;
        }
    };
    /**
     * Appends the control within the given HTML element
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     */
    Component.prototype.appendTo = function (selector) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selector) && typeof (selector) === 'string') {
            this.element = document.querySelector(selector);
        }
        else if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selector)) {
            this.element = selector;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            Object(_dom__WEBPACK_IMPORTED_MODULE_7__["addClass"])([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                window.addEventListener('unload', this.setPersistData.bind(this));
            }
            var inst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            this.render();
            if (!this.mount) {
                this.trigger('created');
            }
            else {
                this.accessMount();
            }
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            var sfBlazor = 'sfBlazor';
            // tslint:disable-next-line:no-any
            window[sfBlazor].renderComplete(this.element, wrapperElement);
        }
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @return {void}
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @return {void}
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @return {void}
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    /**
     * Dynamically injects the required modules to the component.
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    /**
     * This is a instance method to create an element.
     * @private
     */
    //tslint:disable:no-any
    Component.prototype.createElement = function (tagName, prop, isVDOM) {
        if (isVDOM && this.isReactHybrid) {
            if (prop) {
                prop = {};
            }
            prop['data-id'] = Object(_template_engine__WEBPACK_IMPORTED_MODULE_9__["getRandomId"])();
            return _virtual_dom__WEBPACK_IMPORTED_MODULE_8__["VirtualDOM"].createElement(tagName, prop);
        }
        else {
            return Object(_dom__WEBPACK_IMPORTED_MODULE_7__["createElement"])(tagName, prop);
        }
    };
    /**
     *
     * @param handler - handler to be triggered after state Updated.
     * @param argument - Arguments to be passed to caller.
     * @private
     */
    //tslint:disable:no-any
    Component.prototype.triggerStateChange = function (handler, argument) {
        if (this.isReactHybrid) {
            //tslint:disable:no-any
            this.setState();
            this.currentContext = { calls: handler, args: argument };
        }
    };
    // tslint: enable: no-any
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
        }
    };
    //tslint:disable-next-line
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(key, this);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(objValue)) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof _child_property__WEBPACK_IMPORTED_MODULE_4__["ChildProperty"]) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                // tslint:disable-next-line:no-any
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])()
    ], Component.prototype, "enableRtl", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])()
    ], Component.prototype, "locale", void 0);
    Component = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_5__["NotifyPropertyChanges"]
    ], Component);
    return Component;
}(_base__WEBPACK_IMPORTED_MODULE_2__["Base"]));

//Function handling for page navigation detection 
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js":
/*!*************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js ***!
  \*************************************************************/
/*! exports provided: createElement, addClass, removeClass, isVisible, prepend, append, detach, remove, attributes, select, selectAll, closest, siblings, getAttributeOrDefault, setStyleAttribute, classList, matches, includeInnerHTML, containsClass, cloneNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return getAttributeOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return setStyleAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return classList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeInnerHTML", function() { return includeInnerHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsClass", function() { return containsClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneNode", function() { return cloneNode; });
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _virtual_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/virtual-dom.js");
/**
 * Functions related to dom operations.
 */



var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 * @param tagName - Name of the tag, id and class names.
 * @param properties - Object to set properties in the element.
 * @param properties.id - To set the id to the created element.
 * @param properties.className - To add classes to the element.
 * @param properties.innerHTML - To set the innerHTML to element.
 * @param properties.styles - To set the some custom styles to element.
 * @param properties.attrs - To set the attributes to element.
 * @private
 */
function createElement(tagName, properties) {
    //tslint:disable-next-line
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(ele)) {
                var curClass = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('attributes.className', ele);
                if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(curClass)) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_1__["setValue"])('attributes.className', className, ele);
                }
                else if (!new RegExp('\\b' + className + '\\b', 'i').test(curClass)) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_1__["setValue"])('attributes.className', curClass + ' ' + className, ele);
                }
            }
            else {
                if (!ele.classList.contains(className)) {
                    ele.classList.add(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        var flag = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(ele);
        var canRemove = flag ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('attributes.className', ele) : ele.className !== '';
        if (canRemove) {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                if (flag) {
                    var classes_1 = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('attributes.className', ele);
                    var classArr = classes_1.split(' ');
                    var index = classArr.indexOf(className);
                    if (index !== -1) {
                        classArr.splice(index, 1);
                    }
                    Object(_util__WEBPACK_IMPORTED_MODULE_1__["setValue"])('attributes.className', classArr.join(' '), ele);
                }
                else {
                    ele.classList.remove(className);
                }
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 * @param  {Element|Node} element - An element the need to check visibility
 * @private
 */
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function used to insert an array of elements into a first of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
function prepend(fromElements, toElement, isEval) {
    //tslint:disable:no-any
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(toElement)) {
        _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].prepend(fromElements, toElement);
    }
    else {
        var docFrag = document.createDocumentFragment();
        for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        toElement.insertBefore(docFrag, toElement.firstElementChild);
        if (isEval) {
            executeScript(toElement);
        }
    }
    return fromElements;
}
/**
 * The function used to insert an array of elements into last of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
function append(fromElements, toElement, isEval) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(toElement)) {
        _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].append(fromElements, toElement);
    }
    else {
        var docFrag = document.createDocumentFragment();
        for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
        toElement.appendChild(docFrag);
        if (isEval) {
            executeScript(toElement);
        }
    }
    return fromElements;
}
//tslint: enable:no-any
/**
 * The function is used to evaluate script from Ajax request
 * @param ele - An element is going to evaluate the script
 */
function executeScript(ele) {
    var eleArray = ele.querySelectorAll('script');
    eleArray.forEach(function (element) {
        var script = document.createElement('script');
        script.text = element.innerHTML;
        document.head.appendChild(script);
        detach(script);
    });
}
/**
 * The function used to remove the element from the
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @private
 */
function detach(element) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
        return _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].detach(element);
    }
    else {
        var parentNode = element.parentNode;
        return parentNode.removeChild(element);
    }
}
/**
 * The function used to remove the element from Dom also clear the bounded events
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @private
 */
function remove(element) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
        _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].detach(element);
    }
    else {
        var parentNode = element.parentNode;
        _event_handler__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].clearEvents(element);
        parentNode.removeChild(element);
    }
}
/**
 * The function helps to set multiple attributes to an element
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
 * @private
 */
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(ele)) {
            var iKey = key;
            if (key === 'tabindex') {
                iKey = 'tabIndex';
            }
            ele.attributes[iKey] = attributes[key];
        }
        else {
            ele.setAttribute(key, attributes[key]);
        }
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
//tslint:disable-next-line
function select(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(context) && needsVDOM) {
        //tslint:disable-next-line
        return _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].vDomSelector({ ele: context, selector: selector, selectAll: false });
    }
    else {
        return context.querySelector(selector);
    }
}
/**
 * The function selects an array of element from the given context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
function selectAll(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(context) && !needsVDOM) {
        //tslint:disable-next-line
        return _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].vDomSelector({ ele: context, selector: selector, selectAll: true });
    }
    else {
        var nodeList = context.querySelectorAll(selector);
        return nodeList;
    }
}
/**
 * Returns single closest parent element based on class selector.
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @private
 */
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Returns all sibling elements of the given element.
 * @param  {Element|Node} element - An element that need to get siblings.
 * @private
 */
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
/**
 * set the value if not exist. Otherwise set the existing value
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @private
 */
function getAttributeOrDefault(element, property, value) {
    var attrVal;
    var isObj = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element);
    if (isObj) {
        attrVal = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('attributes.' + property, element);
    }
    else {
        attrVal = element.getAttribute(property);
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(attrVal) && value) {
        if (!isObj) {
            element.setAttribute(property, value.toString());
        }
        else {
            element.attributes[property] = value;
        }
        attrVal = value;
    }
    return attrVal;
}
/**
 * Set the style attributes to Html element.
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @return {void}
 * @private
 */
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
            // tslint:disable-next-line:no-any
            _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].setStyleAttribute(element, attrs);
        }
        else {
            Object.keys(attrs).forEach(function (key) {
                // tslint:disable-next-line:no-any
                element.style[key] = attrs[key];
            });
        }
    }
}
/**
 * Method for add and remove classes to a dom element.
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @return {void}
 * @private
 */
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
/**
 * Method to check whether the element matches the given selector.
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {void}
 * @private
 */
function matches(element, selector) {
    //tslint:disable-next-line
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}
function includeInnerHTML(ele, innerHTML) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(ele)) {
        if (innerHTML === '') {
            ele.children = [];
        }
        else {
            var res = _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].ConvertHTMLToJSon(innerHTML);
            if (res.length) {
                _virtual_dom__WEBPACK_IMPORTED_MODULE_2__["VirtualDOM"].assignParent(res, ele);
                ele.children = res;
            }
        }
    }
    else {
        ele.innerHTML = innerHTML;
    }
}
//tslint:disable-next-line
function containsClass(ele, className) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(ele)) {
        // tslint:disable-next-line:no-any
        return new RegExp('\\b' + className + '\\b', 'i').test(ele.attributes.className);
    }
    else {
        return ele.classList.contains(className);
    }
}
/**
 * Method to check whether the element matches the given selector.
 * @param {} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {Element | VirtualObject}
 * @private
 */
//tslint:disable:no-any
function cloneNode(element, deep) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
        if (deep) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, {}, element, true);
        }
        else {
            return { tagName: element.tagName, attributes: element.attributes };
        }
    }
    else {
        return element.cloneNode(deep);
    }
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/draggable.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/draggable.js ***!
  \*******************************************************************/
/*! exports provided: Position, Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var isDraggedObject = { isDragged: false };
/**
 * Specifies the position coordinates
 */
var Position = /** @__PURE__ @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(0)
    ], Position.prototype, "left", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(0)
    ], Position.prototype, "top", void 0);
    return Position;
}(_child_property__WEBPACK_IMPORTED_MODULE_5__["ChildProperty"]));

/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
var Draggable = /** @__PURE__ @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.prevLeft = 0;
        _this.prevTop = 0;
        _this.dragProcessStarted = false;
        /* tslint:disable no-any */
        _this.tapHoldTimer = 0;
        _this.externalInitialize = false;
        _this.diffY = 0;
        _this.parentScrollX = 0;
        _this.parentScrollY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable_1 = Draggable;
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isIE) {
            Object(_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return Object(_util__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(this.handle)) {
            ele = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["select"])(this.handle, this.element);
        }
        var handler = (this.enableTapHold && _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isDevice && _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isTouch) ? this.mobileInitialize : this.initialize;
        if (isUnWire) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, handler);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, handler, this);
        }
    };
    /* istanbul ignore next */
    Draggable.prototype.mobileInitialize = function (evt) {
        var _this = this;
        var target = evt.currentTarget;
        this.tapHoldTimer = setTimeout(function () {
            _this.externalInitialize = true;
            _this.removeTapholdTimer();
            _this.initialize(evt, target);
        }, this.tapHoldThreshold);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.removeTapholdTimer, this);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.removeTapholdTimer, this);
    };
    /* istanbul ignore next */
    Draggable.prototype.removeTapholdTimer = function () {
        clearTimeout(this.tapHoldTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.removeTapholdTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.removeTapholdTimer);
    };
    /* istanbul ignore next */
    Draggable.prototype.getScrollableParent = function (element, axis) {
        var scroll = { 'vertical': 'scrollHeight', 'horizontal': 'scrollWidth' };
        var client = { 'vertical': 'clientHeight', 'horizontal': 'clientWidth' };
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(element)) {
            return null;
        }
        if (element[scroll[axis]] > element[client[axis]]) {
            if (axis === 'vertical' ? element.scrollTop > 0 : element.scrollLeft > 0) {
                if (axis === 'vertical') {
                    this.parentScrollY = this.parentScrollY +
                        (this.parentScrollY === 0 ? element.scrollTop : element.scrollTop - this.parentScrollY);
                }
                else {
                    this.parentScrollX = this.parentScrollX +
                        (this.parentScrollX === 0 ? element.scrollLeft : element.scrollLeft - this.parentScrollX);
                }
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(element)) {
                    return this.getScrollableParent(element.parentNode, axis);
                }
                else {
                    return element;
                }
            }
            else {
                return this.getScrollableParent(element.parentNode, axis);
            }
        }
        else {
            return this.getScrollableParent(element.parentNode, axis);
        }
    };
    Draggable.prototype.getScrollableValues = function () {
        this.parentScrollX = 0;
        this.parentScrollY = 0;
        var isModalDialog = this.element.classList.contains('e-dialog') && this.element.classList.contains('e-dlg-modal');
        var verticalScrollParent = this.getScrollableParent(this.element.parentNode, 'vertical');
        var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, 'horizontal');
    };
    Draggable.prototype.initialize = function (evt, curTarget) {
        this.currentStateTarget = evt.target;
        if (this.isDragStarted()) {
            return;
        }
        else {
            this.isDragStarted(true);
            this.externalInitialize = false;
        }
        this.target = (evt.currentTarget || curTarget);
        this.dragProcessStarted = false;
        if (this.abort) {
            /* tslint:disable no-any */
            var abortSelectors = this.abort;
            if (typeof abortSelectors === 'string') {
                abortSelectors = [abortSelectors];
            }
            for (var i = 0; i < abortSelectors.length; i++) {
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(evt.target, abortSelectors[i]))) {
                    /* istanbul ignore next */
                    if (this.isDragStarted()) {
                        this.isDragStarted(true);
                    }
                    return;
                }
            }
        }
        if (this.preventDefault && !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches)) {
            evt.preventDefault();
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.getScrollableValues();
            if (evt.clientX === evt.pageX) {
                this.parentScrollX = 0;
            }
            if (evt.clientY === evt.pageY) {
                this.parentScrollY = 0;
            }
            this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
            this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
        }
        if (this.externalInitialize) {
            this.intDragStart(evt);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy, this);
        }
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        this.externalInitialize = false;
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].trigger(document.documentElement, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        this.removeTapholdTimer();
        var isChangeTouch = !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (isChangeTouch) {
            evt.preventDefault();
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(evt.target, this.dragTarget);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if ((distance >= this.distance || this.externalInitialize)) {
            var ele = this.getHelperElement(evt);
            if (!ele || Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                var args = {
                    event: evt,
                    element: element,
                    target: curTarget,
                    bindEvents: Object(_util__WEBPACK_IMPORTED_MODULE_6__["isBlazor"])() ? this.bindDragEvents.bind(this) : null,
                    dragElement: dragTargetElement
                };
                this.trigger('dragStart', args);
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            this.getScrollableValues();
            var posValue = this.getProcessedPositionValue({
                top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px'
            });
            this.dragElePosition = { top: pos.top, left: pos.left };
            Object(_dom__WEBPACK_IMPORTED_MODULE_2__["setStyleAttribute"])(dragTargetElement, this.getDragPosition({ position: 'absolute', left: posValue.left, top: posValue.top }));
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isBlazor"])()) {
                this.bindDragEvents(dragTargetElement);
            }
        }
    };
    Draggable.prototype.bindDragEvents = function (dragTargetElement) {
        if (Object(_dom__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(dragTargetElement)) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDrag, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDragStop, this);
            this.setGlobalDroppables(false, this.element, dragTargetElement);
        }
        else {
            this.toggleEvents();
            document.body.classList.remove('e-prevent-select');
        }
    };
    Draggable.prototype.elementInViewport = function (el) {
        this.top = el.offsetTop;
        this.left = el.offsetLeft;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            this.top += el.offsetTop;
            this.left += el.offsetLeft;
        }
        return (this.top >= window.pageYOffset &&
            this.left >= window.pageXOffset &&
            (this.top + this.height) <= (window.pageYOffset + window.innerHeight) &&
            (this.left + this.width) <= (window.pageXOffset + window.innerWidth));
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    // tslint:disable-next-line:max-func-body-length
    Draggable.prototype.intDrag = function (evt) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            /* tslint:disable no-any */
            var flag = true;
            if (this.hoverObject) {
                if (this.hoverObject.instance !== eleObj.instance) {
                    this.triggerOutFunction(evt, eleObj);
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                eleObj.instance.intOver(evt, eleObj.target);
                this.hoverObject = eleObj;
            }
        }
        else if (this.hoverObject) {
            this.triggerOutFunction(evt, eleObj);
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft && dLeft > 0) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
                    left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
                }
                else {
                    left = dLeft < 0 ? this.dragLimit.left : dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop && dTop > 0) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
                    top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
                }
                else {
                    top = dTop < 0 ? this.dragLimit.top : dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        if (this.dragProcessStarted) {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(top)) {
                top = this.prevTop;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(left)) {
                left = this.prevLeft;
            }
        }
        var draEleTop;
        var draEleLeft;
        if (this.dragArea) {
            draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - iTop);
            draEleLeft = (left - iLeft) < 0 ? this.dragElePosition.left : (left - iLeft);
        }
        else {
            draEleTop = top - iTop;
            draEleLeft = left - iLeft;
        }
        var dragValue = this.getProcessedPositionValue({ top: draEleTop + 'px', left: draEleLeft + 'px' });
        Object(_dom__WEBPACK_IMPORTED_MODULE_2__["setStyleAttribute"])(helperElement, this.getDragPosition(dragValue));
        if (!this.elementInViewport(helperElement) && this.enableAutoScroll) {
            this.helperElement.scrollIntoView();
        }
        this.dragProcessStarted = true;
        this.prevLeft = left;
        this.prevTop = top;
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.triggerOutFunction = function (evt, eleObj) {
        this.hoverObject.instance.intOut(evt, eleObj.target);
        this.hoverObject.instance.dragData[this.scope] = null;
        this.hoverObject = null;
    };
    Draggable.prototype.getDragPosition = function (dragValue) {
        var temp = Object(_util__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, dragValue);
        if (this.axis) {
            if (this.axis === 'x') {
                delete temp.top;
            }
            else if (this.axis === 'y') {
                delete temp.left;
            }
        }
        return temp;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        this.dragProcessStarted = false;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    /**
     * @private
     */
    Draggable.prototype.intDestroy = function (evt) {
        this.dragProcessStarted = false;
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDragStop);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDrag);
        if (this.isDragStarted()) {
            this.isDragStarted(true);
        }
    };
    // triggers when property changed
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.isDragStarted = function (change) {
        if (change) {
            isDraggedObject.isDragged = !isDraggedObject.isDragged;
        }
        return isDraggedObject.isDragged;
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["select"])(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
            eleHeightBound = ele.scrollHeight ? ele.scrollHeight : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.pointerEvents || '';
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["compareElementParent"])(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.pointerEvents = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.pointerEvents = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt, isdragscroll) {
        /* tslint:disable no-any */
        var dragEle = evt.srcElement !== undefined ? evt.srcElement : evt.target;
        var intCoord = this.getCoordinates(evt);
        var pageX;
        var pageY;
        var isOffsetParent = Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(dragEle.offsetParent);
        /* istanbul ignore next */
        if (isdragscroll) {
            pageX = this.clone ? intCoord.pageX :
                (intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft)) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY :
                (intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop)) - this.relativeYPosition;
        }
        else {
            pageX = this.clone ? intCoord.pageX : (intCoord.pageX + window.pageXOffset) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY : (intCoord.pageY + window.pageYOffset) - this.relativeYPosition;
        }
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(target.parentNode)) {
            var parent_1 = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Complex"])({}, Position)
    ], Draggable.prototype, "cursorAt", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(true)
    ], Draggable.prototype, "clone", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "dragArea", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "isDragScroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "drag", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "dragStart", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "dragStop", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(1)
    ], Draggable.prototype, "distance", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "handle", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "abort", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "helper", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('default')
    ], Draggable.prototype, "scope", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('')
    ], Draggable.prototype, "dragTarget", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "axis", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "queryPositionInfo", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableTailMode", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "skipDistanceCheck", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(true)
    ], Draggable.prototype, "preventDefault", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableAutoScroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableTapHold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(750)
    ], Draggable.prototype, "tapHoldThreshold", void 0);
    Draggable = Draggable_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__["NotifyPropertyChanges"]
    ], Draggable);
    return Draggable;
}(_base__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/droppable.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/droppable.js ***!
  \*******************************************************************/
/*! exports provided: Droppable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return Droppable; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @__PURE__ @class */ (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && Object(_dom__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["matches"])(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = Object(_util__WEBPACK_IMPORTED_MODULE_5__["compareElementParent"])(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Droppable.prototype, "accept", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "drop", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "over", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__["NotifyPropertyChanges"]
    ], Droppable);
    return Droppable;
}(_base__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js":
/*!***********************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js ***!
  \***********************************************************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");


/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * @private
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
var EventHandler = /** @__PURE__ @class */ (function () {
    function EventHandler() {
    }
    // to get the event data based on element
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    /**
     * Add an event to the specified DOM element.
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} debounce - Specifies at what interval given event listener should be triggered.
     * @return {Function}
     */
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = Object(_util__WEBPACK_IMPORTED_MODULE_0__["debounce"])(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            if (_browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isIE) {
                element.addEventListener(event[i], debounceListener);
            }
            else {
                element.addEventListener(event[i], debounceListener, { passive: false });
            }
        }
        return debounceListener;
    };
    /**
     * Remove an event listener that has been attached before.
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            if (debounceListener) {
                element.removeEventListener(event[j], debounceListener);
            }
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    /**
     * Clear all the event listeners that has been previously attached to the element.
     * @param {any} element - Specifies the target html element to clear the events
     * @return {void}
     */
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    /**
     * Trigger particular event of the element.
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @return {void}
     */
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        var fn = null;
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/hijri-parser.js":
/*!**********************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/hijri-parser.js ***!
  \**********************************************************************/
/*! exports provided: HijriParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HijriParser", function() { return HijriParser; });
/***
 * Hijri parser
 */
var HijriParser;
(function (HijriParser) {
    /* tslint:disable */
    var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167,
        29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759,
        29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348,
        30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939,
        30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530,
        31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120,
        32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
        32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302,
        33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893,
        33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483,
        34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074,
        35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665,
        35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254,
        36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845,
        36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436,
        37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
        38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617,
        38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208,
        39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798,
        39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389,
        40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980,
        41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570,
        41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161,
        42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751,
        42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
        43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932,
        43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523,
        44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114,
        45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704,
        45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295,
        46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885,
        46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476,
        47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066,
        48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
        48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248,
        49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838,
        49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429,
        50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019,
        51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611,
        51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200,
        52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792,
        52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383,
        53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
        54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564,
        54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154,
        55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745,
        55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335,
        56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926,
        56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517,
        57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107,
        58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698,
        58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
        59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879,
        59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469,
        60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061,
        61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651,
        61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242,
        62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832,
        62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423,
        63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014,
        64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
        64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195,
        65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785,
        65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376,
        66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967,
        66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557,
        67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148,
        68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738,
        68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330,
        69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
        69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510,
        70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101,
        71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691,
        71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282,
        72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872,
        72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464,
        73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053,
        74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645,
        74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
        75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826,
        75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416,
        76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007,
        77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598,
        77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188,
        78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779,
        78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369,
        79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960,
        79990];
    /* tslint:enable */
    function getHijriDate(gDate) {
        var day = gDate.getDate();
        var month = gDate.getMonth();
        var year = gDate.getFullYear();
        var tMonth = month + 1;
        var tYear = year;
        if (tMonth < 3) {
            tYear -= 1;
            tMonth += 12;
        }
        var yPrefix = Math.floor(tYear / 100.);
        var julilanOffset = yPrefix - Math.floor(yPrefix / 4.) - 2;
        var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
        yPrefix = Math.floor((julianNumber - 1867216.25) / 36524.25);
        julilanOffset = yPrefix - Math.floor(yPrefix / 4.) + 1;
        var b = julianNumber + julilanOffset + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var tempMonth = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * tempMonth);
        month = Math.floor((b - d) / 20.6001);
        if (month > 13) {
            c += 1;
            month -= 12;
        }
        month -= 1;
        year = c - 4716;
        var modifiedJulianDate = julianNumber - 2400000;
        // date calculation for year after 2077
        var iyear = 10631. / 30.;
        var z = julianNumber - 1948084;
        var cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        var j = Math.floor((z - 0.1335) / iyear);
        var iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + 0.1335);
        var im = Math.floor((z + 28.5001) / 29.5);
        /* istanbul ignore next */
        if (im === 13) {
            im = 12;
        }
        var tempDay = z - Math.floor(29.5001 * im - 29);
        var i = 0;
        for (; i < dateCorrection.length; i++) {
            if (dateCorrection[i] > modifiedJulianDate) {
                break;
            }
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var hYear = ii + 1;
        var hmonth = iln - 12 * ii;
        var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
        if ((hDate + '').length > 2) {
            hDate = tempDay;
            hmonth = im;
            hYear = iy;
        }
        return { year: hYear, month: hmonth, date: hDate };
    }
    HijriParser.getHijriDate = getHijriDate;
    function toGregorian(year, month, day) {
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + dateCorrection[i - 1] - 1;
        var julianDate = mcjdn + 2400000;
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var gDay = b - d - Math.floor(e * 30.6001);
        var gMonth = e - (e > 13.5 ? 13 : 1);
        var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
        /* istanbul ignore next */
        if (gYear <= 0) {
            gMonth--;
        } // No year zero
        return new Date(gYear + '/' + (gMonth) + '/' + gDay);
    }
    HijriParser.toGregorian = toGregorian;
})(HijriParser || (HijriParser = {}));


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js":
/*!***************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js ***!
  \***************************************************************/
/*! exports provided: blazorCultureFormats, IntlBase, Ajax, Animation, rippleEffect, isRippleEnabled, enableRipple, Base, getComponent, removeChildInstance, Browser, Component, ChildProperty, Position, Draggable, Droppable, EventHandler, onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, Internationalization, setCulture, setCurrencyCode, loadCldr, enableRtl, getNumericObject, getNumberDependable, getDefaultDateObject, KeyboardEvents, L10n, ModuleLoader, Property, Complex, ComplexFactory, Collection, CollectionFactory, Event, NotifyPropertyChanges, CreateBuilder, SwipeSettings, Touch, HijriParser, blazorTemplates, getRandomId, compile, updateBlazorTemplate, resetBlazorTemplate, setTemplateEngine, getTemplateEngine, disableBlazorMode, createInstance, setImmediate, getValue, setValue, deleteObject, isObject, getEnumValue, merge, extend, isNullOrUndefined, isUndefined, getUniqueID, debounce, queryParams, isObjectArray, compareElementParent, throwError, print, formatUnit, enableBlazorMode, isBlazor, getElement, getInstance, addInstance, uniqueID, createElement, addClass, removeClass, isVisible, prepend, append, detach, remove, attributes, select, selectAll, closest, siblings, getAttributeOrDefault, setStyleAttribute, classList, matches, includeInnerHTML, containsClass, cloneNode, Observer, SanitizeHtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorCultureFormats", function() { return _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__["blazorCultureFormats"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlBase", function() { return _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"]; });

/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/ajax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["Ajax"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["rippleEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["isRippleEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["enableRipple"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["Base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["getComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChildInstance", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["removeChildInstance"]; });

/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_5__["Component"]; });

/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return _child_property__WEBPACK_IMPORTED_MODULE_6__["ChildProperty"]; });

/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _draggable__WEBPACK_IMPORTED_MODULE_7__["Position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _draggable__WEBPACK_IMPORTED_MODULE_7__["Draggable"]; });

/* harmony import */ var _droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./droppable */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/droppable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return _droppable__WEBPACK_IMPORTED_MODULE_8__["Droppable"]; });

/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _event_handler__WEBPACK_IMPORTED_MODULE_9__["EventHandler"]; });

/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["onIntlChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["rightToLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["cldrData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["defaultCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["defaultCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["Internationalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["setCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["setCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["loadCldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["enableRtl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getNumericObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberDependable", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getNumberDependable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getDefaultDateObject"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keyboard */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_11__["KeyboardEvents"]; });

/* harmony import */ var _l10n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./l10n */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/l10n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return _l10n__WEBPACK_IMPORTED_MODULE_12__["L10n"]; });

/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module-loader */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/module-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return _module_loader__WEBPACK_IMPORTED_MODULE_13__["ModuleLoader"]; });

/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Complex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["ComplexFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["CollectionFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["NotifyPropertyChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["CreateBuilder"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touch */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return _touch__WEBPACK_IMPORTED_MODULE_15__["SwipeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_15__["Touch"]; });

/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hijri-parser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/hijri-parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HijriParser", function() { return _hijri_parser__WEBPACK_IMPORTED_MODULE_16__["HijriParser"]; });

/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./template-engine */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template-engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorTemplates", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["blazorTemplates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["getRandomId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateBlazorTemplate", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["updateBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetBlazorTemplate", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["resetBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["setTemplateEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["getTemplateEngine"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBlazorMode", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["disableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["createInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["setValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["deleteObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getEnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["queryParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isObjectArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["compareElementParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["throwError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["formatUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBlazorMode", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["enableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlazor", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isBlazor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["addInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["uniqueID"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["attributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["siblings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["getAttributeOrDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["setStyleAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["classList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeInnerHTML", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["includeInnerHTML"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["containsClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["cloneNode"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./observer */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_20__["Observer"]; });

/* harmony import */ var _sanitize_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sanitize-helper */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/sanitize-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlHelper", function() { return _sanitize_helper__WEBPACK_IMPORTED_MODULE_21__["SanitizeHtmlHelper"]; });

/**
 * Base modules
 */
























/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js":
/*!******************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js ***!
  \******************************************************************************/
/*! exports provided: onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, Internationalization, setCulture, setCurrencyCode, loadCldr, enableRtl, getNumericObject, getNumberDependable, getDefaultDateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return onIntlChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return rightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return cldrData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return defaultCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return defaultCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return Internationalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return setCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return setCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return loadCldr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return enableRtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return getNumericObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberDependable", function() { return getNumberDependable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return getDefaultDateObject; });
/* harmony import */ var _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/date-formatter */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl/number-formatter */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-formatter.js");
/* harmony import */ var _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl/date-parser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-parser.js");
/* harmony import */ var _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intl/number-parser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-parser.js");
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intl/intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js");







/**
 * Specifies the observer used for external change detection.
 */
var onIntlChange = new _observer__WEBPACK_IMPORTED_MODULE_6__["Observer"]();
/**
 * Specifies the default rtl status for EJ2 components.
 */
var rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 * @private
 */
var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 * @private
 */
var defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 * @private
 */
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
/**
 * Internationalization class provides support to parse and format the number and date object to the desired format.
 * ```typescript
 * // To set the culture globally
 * setCulture('en-GB');
 *
 * // To set currency code globally
 * setCurrencyCode('EUR');
 *
 * //Load cldr data
 * loadCldr(gregorainData);
 * loadCldr(timeZoneData);
 * loadCldr(numbersData);
 * loadCldr(numberSystemData);
 *
 * // To use formatter in component side
 * let Intl:Internationalization = new Internationalization();
 *
 * // Date formatting
 * let dateFormatter: Function = Intl.getDateFormat({skeleton:'long',type:'dateTime'});
 * dateFormatter(new Date('11/2/2016'));
 * dateFormatter(new Date('25/2/2030'));
 * Intl.formatDate(new Date(),{skeleton:'E'});
 *
 * //Number formatting
 * let numberFormatter: Function = Intl.getNumberFormat({skeleton:'C5'})
 * numberFormatter(24563334);
 * Intl.formatNumber(123123,{skeleton:'p2'});
 *
 * // Date parser
 * let dateParser: Function = Intl.getDateParser({skeleton:'short',type:'time'});
 * dateParser('10:30 PM');
 * Intl.parseDate('10',{skeleton:'H'});
 * ```
 */
var Internationalization = /** @__PURE__ @class */ (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    /**
     * Returns the format function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateFormat = function (options) {
        return _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    /**
     * Returns the format function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_5__["isBlazor"])() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateParser = function (options) {
        return _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__["DateParser"].dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberParser = function (options) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_5__["isBlazor"])() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__["NumberParser"].numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    /**
     * Returns the formatted string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {NumberFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    /**
     * Returns the formatted date string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {DateFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    /**
     * Returns the date object for given date string and options.
     * @param {string} value - Specifies the string to parse.
     * @param {DateFormatOptions} option - Specifies the parse options in which the date string will be parsed.
     * @returns {Date}
     */
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    /**
     * Returns the number object from the given string value and options.
     * @param {string} value - Specifies the string to parse.
     * @param {NumberFormatOptions} option - Specifies the parse options in which the  string number  will be parsed.
     * @returns {number}
     */
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    /**
     * Returns Native Date Time Pattern
     * @param {DateFormatOptions} option - Specifies the parse options for resultant date time pattern.
     * @param {boolean} isExcelFormat - Specifies format value to be converted to excel pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    /**
     * Returns Native Number Pattern
     * @param {NumberFormatOptions} option - Specifies the parse options for resultant number pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getNumberPattern = function (option, isExcel) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getActualNumberFormat(this.getCulture(), option, cldrData, isExcel);
    };
    /**
     * Returns the First Day of the Week
     * @returns {number}
     */
    Internationalization.prototype.getFirstDayOfWeek = function () {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getWeekData(this.getCulture(), cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

/**
 * Set the default culture to all EJ2 components
 * @param {string} cultureName - Specifies the culture name to be set as default culture.
 */
function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
/**
 * Set the default currency code to all EJ2 components
 * @param {string} currencyCode Specifies the culture name to be set as default culture.
 * @returns {void}
 */
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
    onIntlChange.notify('notifyExternalChange', { 'currencyCode': defaultCurrencyCode });
}
/**
 * Load the CLDR data into context
 * @param {Object[]} obj Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void}
 */
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        Object(_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(cldrData, obj, {}, true);
    }
}
/**
 * To enable or disable RTL functionality for all components globally.
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
 * @returns {void}
 */
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
/**
 * To get the numeric CLDR object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @ignore
 * @private
 */
function getNumericObject(locale, type) {
    /* tslint:disable no-any */
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '', true)[mapper[0]];
    var dateObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '')[mapper[1]];
    var numSystem = Object(_util__WEBPACK_IMPORTED_MODULE_5__["getValue"])('defaultNumberingSystem', numObject);
    var symbPattern = Object(_util__WEBPACK_IMPORTED_MODULE_5__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_5__["getValue"])('numberSymbols', numObject) : Object(_util__WEBPACK_IMPORTED_MODULE_5__["getValue"])('symbols-numberSystem-' + numSystem, numObject);
    var pattern = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return Object(_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(symbPattern, _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getFormatData(pattern, true, '', true), { 'dateSeparator': _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDateSeparator(dateObject) });
}
/**
 * To get the numeric CLDR  number base object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} currency - Specifies the currency for which numericObject to be returned.
 * @ignore
 * @private
 */
function getNumberDependable(locale, currency) {
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '', true);
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getCurrencySymbol(numObject.numericObject, currency);
}
/**
 * To get the default date CLDR object.
 * @ignore
 * @private
 */
function getDefaultDateObject(mode) {
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, '', mode, false)[mapper[1]];
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-formatter.js":
/*!*****************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-formatter.js ***!
  \*****************************************************************************/
/*! exports provided: basicPatterns, datePartMatcher, DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicPatterns", function() { return basicPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datePartMatcher", function() { return datePartMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hijri-parser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/hijri-parser.js");





var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|K|cccc|ccc|WW|W|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
    f: 'getMilliseconds'
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era',
    'f': 'milliseconds'
};
var timeSeparator = 'timeSeparator';
/* tslint:disable no-any */
/**
 * Date Format is a framework provides support for date formatting.
 * @private
 */
var DateFormat = /** @__PURE__ @class */ (function () {
    function DateFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which date  will format.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getDependables(cldr, culture, option.calendar);
        var numObject = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('parserObject.numbers', dependable);
        var dateObject = dependable.dateObject;
        var formatOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].islamicRegex.test(option.calendar) };
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ? culture : '');
        formatOptions.dateSeperator = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dateSeperator', dateObject) : _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getDateSeparator(dependable.dateObject);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(resPattern)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Format options or type given must be invalid');
        }
        else {
            resPattern = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].ConvertDateToWeekFormat(resPattern);
            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                resPattern = resPattern.replace(/tt/, 'a');
            }
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ?
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, numObject) : _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                /* tslint:disable no-any */
                var charKey = datePartMatcher[char];
                switch (char) {
                    case 'E':
                    case 'c':
                        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                            formatOptions.weekday = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('days.' + _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len], dateObject);
                        }
                        else {
                            formatOptions.weekday = dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].days][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len]];
                        }
                        break;
                    case 'M':
                    case 'L':
                        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                            formatOptions.month = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('months.' + _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len], dateObject);
                        }
                        else {
                            formatOptions.month = dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].month][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len]];
                        }
                        break;
                    case 'a':
                        formatOptions.designator = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ?
                            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods', dateObject) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods.format.wide', dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras', dateObject) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    /**
     * Returns formatted date string based on options passed.
     * @param {Date} value
     * @param {FormatOptions} options
     */
    // tslint:disable-next-line:max-func-body-length
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].dateParseRegex);
        var dObject = this.getCurrentDateValue(value, options.isIslamic);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var curvalstr = '';
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = dObject.month;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                case 'f':
                    isNumber = true;
                    if (char === 'd') {
                        curval = dObject.date;
                    }
                    else if (char === 'f') {
                        isNumber = false;
                        processNumber = true;
                        curvalstr = value[timeSetter[char]]().toString();
                        curvalstr = curvalstr.substring(0, length_1);
                        var curlength = curvalstr.length;
                        if (length_1 !== curlength) {
                            if (length_1 > 3) {
                                continue;
                            }
                            for (var i = 0; i < length_1 - curlength; i++) {
                                curvalstr = '0' + curvalstr.toString();
                            }
                        }
                        curstr += curvalstr;
                    }
                    else {
                        curval = value[timeSetter[char]]();
                    }
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += dObject.year;
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    var retu = options.era[dec];
                    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(retu)) {
                        retu = options.era[dec ? 0 : 1];
                    }
                    ret += retu || '';
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    /* tslint:enable no-any */
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                case 'W':
                    isNumber = true;
                    curval = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getWeekOfYear(value);
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].convertValueParts(curstr, _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.getCurrentDateValue = function (value, isIslamic) {
        if (isIslamic) {
            return _hijri_parser__WEBPACK_IMPORTED_MODULE_3__["HijriParser"].getHijriDate(value);
        }
        return { year: value.getFullYear(), month: value.getMonth() + 1, date: value.getDate() };
    };
    /**
     * Returns two digit numbers for given value and length
     */
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    /**
     * Returns the value of the Time Zone.
     * @param {number} tVal
     * @param {string} pattern
     * @private
     */
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-parser.js":
/*!**************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-parser.js ***!
  \**************************************************************************/
/*! exports provided: DateParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParser", function() { return DateParser; });
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hijri-parser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/hijri-parser.js");





var number = 'numbers';
var defNoSystem = 'defaultNumberingSystem';
var noSystem = 'numberingSystem';
var standalone = 'stand-alone';
var curWeekDay = 'curWeekDay';
var latnRegex = /^[0-9]*$/;
var abbreviateRegex = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|ccc/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth',
    milliseconds: 'setMilliseconds'
};
var month = 'months';
/* tslint:disable no-any */
/**
 * Date Parser.
 * @private
 */
var DateParser = /** @__PURE__ @class */ (function () {
    function DateParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which string date  will be parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     *  @return Function.
     */
    // tslint:disable-next-line:max-func-body-length
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].getDependables(cldr, culture, option.calendar);
        // tslint:disable-next-line
        var numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr), false, Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])());
        var parseOptions = {};
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ? culture : '');
        var regexString = '';
        var hourOnly;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(resPattern)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Format options or type given must be invalid');
        }
        else {
            resPattern = _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].ConvertDateToWeekFormat(resPattern);
            parseOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].islamicRegex.test(option.calendar), pattern: resPattern, evalposition: {} };
            var patternMatch = resPattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var gmtCorrection = 0;
            var zCorrectTemp = 0;
            var isgmtTraversed = false;
            var nRegx = numOptions.numericRegex;
            // tslint:disable-next-line
            var numMapper = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ? dependable.parserObject.numbers :
                _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr));
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                // tslint:disable-next-line
                var charKey = _date_formatter__WEBPACK_IMPORTED_MODULE_3__["datePartMatcher"][char];
                var optional = (len === 2) ? '' : '?';
                if (isgmtTraversed) {
                    gmtCorrection = zCorrectTemp;
                    isgmtTraversed = false;
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        // tslint:disable
                        var weekData = void 0;
                        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                            weekData = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('days.' + _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len], dependable.dateObject);
                        }
                        else {
                            weekData = dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].days][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len]];
                        }
                        var weekObject = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(weekData);
                        // tslint:enable
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                    case 'f':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            var monthData = void 0;
                            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
                                /* tslint:disable no-any */
                                monthData = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('months.' + _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len], dependable.dateObject);
                            }
                            else {
                                /* tslint:disable no-any */
                                monthData = dependable.dateObject[month][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len]];
                            }
                            // tslint:disable-next-line
                            parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(monthData);
                            /* tslint:disable no-any */
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else if (char === 'f') {
                            if (len > 3) {
                                continue;
                            }
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + '?' + nRegx + '?' + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'W':
                        var opt = len === 1 ? '?' : '';
                        regexString += '(' + nRegx + opt + nRegx + ')';
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '{' + len + ',})';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        var periodValur = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ?
                            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods', dependable.dateObject) :
                            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods.format.wide', dependable.dateObject);
                        parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(periodValur);
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() ?
                            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras', dependable.dateObject) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions[charKey] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        hpattern = hpattern.replace(/:/g, numMapper.timeSeparator);
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        isgmtTraversed = true;
                        zCorrectTemp = hourOnly ? 6 : 12;
                        break;
                    case '\'':
                        var iString = str.replace(/\'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '([\\D])';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1 + gmtCorrection, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$', 'i');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            if (parseOptions.isIslamic) {
                var dobj = {};
                var tYear = parsedDateParts.year;
                var tDate = parsedDateParts.day;
                var tMonth = parsedDateParts.month;
                var ystrig = tYear ? (tYear + '') : '';
                var is2DigitYear = (ystrig.length === 2);
                if (!tYear || !tMonth || !tDate || is2DigitYear) {
                    dobj = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__["HijriParser"].getHijriDate(new Date());
                }
                if (is2DigitYear) {
                    tYear = parseInt((dobj.year + '').slice(0, 2) + ystrig, 10);
                }
                // tslint:disable-next-line
                var dateObject = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__["HijriParser"].toGregorian(tYear || dobj.year, tMonth || dobj.month, tDate || dobj.date);
                parsedDateParts.year = dateObject.getFullYear();
                parsedDateParts.month = dateObject.getMonth() + 1;
                parsedDateParts.day = dateObject.getDate();
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    /* tslint:disable */
    /**
     * Returns date object for provided date options
     * @param {DateParts} options
     * @param {Date} value
     * @returns {Date}
     */
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        res.setMilliseconds(0);
        var tKeys = ['hour', 'minute', 'second', 'milliseconds', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options[key];
            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tValue) && key === "day") {
                res.setDate(1);
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res[timeSetter[key]](tValue);
                }
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    /**
     * Returns date parsing options for provided value along with parse and numeric options
     * @param {string} value
     * @param {ParseOptions} parseOptions
     * @param {NumericOptions} num
     * @returns {DateParts}
     */
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        var nRegx = num.numericRegex;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        matchString = prop === 'month' ? matchString[0].toUpperCase() + matchString.substring(1).toLowerCase() : matchString;
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    /**
     * Returns parsed number for provided Numeric string and Numeric Options
     * @param {string} value
     * @param {NumericOptions} option
     * @returns {number}
     */
    DateParser.internalNumberParser = function (value, option) {
        value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    /**
     * Returns parsed time zone RegExp for provided hour format and time zone
     * @param {string} hourFormat
     * @param {base.TimeZoneOptions} tZone
     * @param {string} nRegex
     * @returns {string}
     */
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var result;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    /**
     * Returns zone based value.
     * @param {boolean} flag
     * @param {string} val1
     * @param {string} val2
     * @param {NumericOptions} num
     * @returns {number}
     */
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var ival = flag ? val1 : val2;
        if (!ival) {
            return 0;
        }
        var value = this.internalNumberParser(ival, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());

/* tslint:enable */


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js":
/*!************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js ***!
  \************************************************************************/
/*! exports provided: blazorCultureFormats, IntlBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blazorCultureFormats", function() { return blazorCultureFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlBase", function() { return IntlBase; });
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internationalization */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _number_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-formatter */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-formatter.js");






var blazorCultureFormats = {
    'en-US': {
        'd': 'M/d/y',
        'D': 'EEEE, MMMM d, y',
        'f': 'EEEE, MMMM d, y h:mm a',
        'F': 'EEEE, MMMM d, y h:mm:s a',
        'g': 'M/d/y h:mm a',
        'G': 'M/d/yyyy h:mm:ss tt',
        'm': 'MMMM d',
        'M': 'MMMM d',
        'r': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        'R': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        's': 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
        't': 'h:mm tt',
        'T': 'h:m:s tt',
        'u': 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
        'U': 'dddd, MMMM d, yyyy h:mm:ss tt',
        'y': 'MMMM yyyy',
        'Y': 'MMMM yyyy'
    }
};
/**
 * Date base common constants and function for date parser and formatter.
 */
var IntlBase;
(function (IntlBase) {
    // tslint:disable-next-line:max-line-length
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.dateConverterMapper = /dddd|ddd/ig;
    var defaultFirstDay = 'sun';
    IntlBase.islamicRegex = /^islamic/;
    var firstDayMapper = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6
    };
    IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    /* tslint:disable:quotemark */
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                },
                "islamic": {
                    "months": {
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Muh.",
                                "2": "Saf.",
                                "3": "Rab. I",
                                "4": "Rab. II",
                                "5": "Jum. I",
                                "6": "Jum. II",
                                "7": "Raj.",
                                "8": "Sha.",
                                "9": "Ram.",
                                "10": "Shaw.",
                                "11": "Dhuʻl-Q.",
                                "12": "Dhuʻl-H."
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4",
                                "5": "5",
                                "6": "6",
                                "7": "7",
                                "8": "8",
                                "9": "9",
                                "10": "10",
                                "11": "11",
                                "12": "12"
                            },
                            "wide": {
                                "1": "Muharram",
                                "2": "Safar",
                                "3": "Rabiʻ I",
                                "4": "Rabiʻ II",
                                "5": "Jumada I",
                                "6": "Jumada II",
                                "7": "Rajab",
                                "8": "Shaʻban",
                                "9": "Ramadan",
                                "10": "Shawwal",
                                "11": "Dhuʻl-Qiʻdah",
                                "12": "Dhuʻl-Hijjah"
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "AH"
                        },
                        "eraAbbr": {
                            "0": "AH"
                        },
                        "eraNarrow": {
                            "0": "AH"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE, MMMM d, y G",
                        "long": "MMMM d, y G",
                        "medium": "MMM d, y G",
                        "short": "M/d/y GGGGG"
                    },
                    "timeFormats": {
                        "full": "h:mm:ss a zzzz",
                        "long": "h:mm:ss a z",
                        "medium": "h:mm:ss a",
                        "short": "h:mm a"
                    },
                    "dateTimeFormats": {
                        "full": "{1} 'at' {0}",
                        "long": "{1} 'at' {0}",
                        "medium": "{1}, {0}",
                        "short": "{1}, {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "d E",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "MMM d, y G",
                            "GyMMMEd": "E, MMM d, y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "M": "L",
                            "Md": "M/d",
                            "MEd": "E, M/d",
                            "MMM": "LLL",
                            "MMMd": "MMM d",
                            "MMMEd": "E, MMM d",
                            "MMMMd": "MMMM d",
                            "ms": "mm:ss",
                            "y": "y G",
                            "yyyy": "y G",
                            "yyyyM": "M/y GGGGG",
                            "yyyyMd": "M/d/y GGGGG",
                            "yyyyMEd": "E, M/d/y GGGGG",
                            "yyyyMMM": "MMM y G",
                            "yyyyMMMd": "MMM d, y G",
                            "yyyyMMMEd": "E, MMM d, y G",
                            "yyyyMMMM": "MMMM y G",
                            "yyyyQQQ": "QQQ y G",
                            "yyyyQQQQ": "QQQQ y G"
                        }
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            },
            'scientificFormats-numberSystem-latn': {
                'standard': '#E0'
            }
        }
    };
    IntlBase.blazorDefaultObject = {
        "numbers": {
            "mapper": {
                "0": "0",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9"
            },
            "mapperDigits": "0123456789",
            "numberSymbols": {
                "decimal": ".",
                "group": ",",
                "plusSign": "+",
                "minusSign": "-",
                "percentSign": "%",
                "nan": "NaN",
                "timeSeparator": ":",
                "infinity": "∞"
            },
            "timeSeparator": ":",
            "currencySymbol": "$",
            "currencypData": {
                "nlead": "$",
                "nend": "",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "percentpData": {
                "nlead": "",
                "nend": "%",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "percentnData": {
                "nlead": "-",
                "nend": "%",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "currencynData": {
                "nlead": "($",
                "nend": ")",
                "groupSeparator": ",",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "decimalnData": {
                "nlead": "-",
                "nend": "",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            },
            "decimalpData": {
                "nlead": "",
                "nend": "",
                "groupData": {
                    "primary": 3
                },
                "maximumFraction": 2,
                "minimumFraction": 2
            }
        },
        "dates": {
            "dayPeriods": {
                "am": "AM",
                "pm": "PM"
            },
            "dateSeperator": "/",
            "days": {
                "abbreviated": {
                    "sun": "Sun",
                    "mon": "Mon",
                    "tue": "Tue",
                    "wed": "Wed",
                    "thu": "Thu",
                    "fri": "Fri",
                    "sat": "Sat"
                },
                "short": {
                    "sun": "Su",
                    "mon": "Mo",
                    "tue": "Tu",
                    "wed": "We",
                    "thu": "Th",
                    "fri": "Fr",
                    "sat": "Sa"
                },
                "wide": {
                    "sun": "Sunday",
                    "mon": "Monday",
                    "tue": "Tuesday",
                    "wed": "Wednesday",
                    "thu": "Thursday",
                    "fri": "Friday",
                    "sat": "Saturday"
                }
            },
            "months": {
                "abbreviated": {
                    "1": "Jan",
                    "2": "Feb",
                    "3": "Mar",
                    "4": "Apr",
                    "5": "May",
                    "6": "Jun",
                    "7": "Jul",
                    "8": "Aug",
                    "9": "Sep",
                    "10": "Oct",
                    "11": "Nov",
                    "12": "Dec"
                },
                "wide": {
                    "1": "January",
                    "2": "February",
                    "3": "March",
                    "4": "April",
                    "5": "May",
                    "6": "June",
                    "7": "July",
                    "8": "August",
                    "9": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                }
            },
            "eras": {
                "1": "AD"
            }
        }
    };
    /* tslint:enable:quotemark */
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    /**
     *
     */
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    /**
     * Default numerber Object
     */
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency',
        E: 'scientific'
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     * @private
     * @param {string} skeleton
     * @param {Object} dateObject
     * @param {string} type
     * @returns {string}
     */
    function getResultantPattern(skeleton, dateObject, type, isIslamic, blazorCulture) {
        var resPattern;
        var iType = type || 'date';
        if (blazorCulture) {
            resPattern = compareBlazorDateFormats({ skeleton: skeleton }, blazorCulture).format ||
                compareBlazorDateFormats({ skeleton: 'd' }, 'en-US').format;
        }
        else {
            if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
                resPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(iType + 'Formats.' + skeleton, dateObject);
                if (iType === 'dateTime') {
                    var dPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateFormats.' + skeleton, dateObject);
                    var tPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('timeFormats.' + skeleton, dateObject);
                    resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
                }
            }
            else {
                resPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateTimeFormats.availableFormats.' + skeleton, dateObject);
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(resPattern) && skeleton === 'yMd') {
                resPattern = 'M/d/y';
            }
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    /**
     * Returns the dependable object for provided cldr data and culture
     * @private
     * @param {Object} cldr
     * @param {string} culture
     * @param {boolean} isNumber
     * @returns {Dependables}
     */
    function getDependables(cldr, culture, mode, isNumber) {
        var ret = {};
        var calendartype = mode || 'gregorian';
        ret.parserObject = _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getMainObject(cldr, culture) || (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? IntlBase.blazorDefaultObject : IntlBase.defaultObject);
        if (isNumber) {
            ret.numericObject = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('numbers', ret.parserObject);
        }
        else {
            var dateString = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? 'dates' : ('dates.calendars.' + calendartype);
            ret.dateObject = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(dateString, ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    /**
     * Returns the symbol pattern for provided parameters
     * @private
     * @param {string} type
     * @param {string} numSystem
     * @param {Object} obj
     * @param {boolean} isAccount
     * @returns {string}
     */
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function ConvertDateToWeekFormat(format) {
        var convertMapper = format.match(IntlBase.dateConverterMapper);
        if (convertMapper && Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])()) {
            var tempString = convertMapper[0].length === 3 ? 'EEE' : 'EEEE';
            return format.replace(IntlBase.dateConverterMapper, tempString);
        }
        return format;
    }
    IntlBase.ConvertDateToWeekFormat = ConvertDateToWeekFormat;
    function compareBlazorDateFormats(formatOptions, culture) {
        var format = formatOptions.format || formatOptions.skeleton;
        var curFormatMapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])((culture || 'en-US') + '.' + format, blazorCultureFormats);
        if (!curFormatMapper) {
            curFormatMapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('en-US.' + format, blazorCultureFormats);
        }
        if (curFormatMapper) {
            curFormatMapper = ConvertDateToWeekFormat(curFormatMapper);
            formatOptions.format = curFormatMapper.replace(/tt/, 'a');
        }
        return formatOptions;
    }
    IntlBase.compareBlazorDateFormats = compareBlazorDateFormats;
    /**
     * Returns proper numeric skeleton
     * @private
     * @param {string} skeleton
     * @returns {NumericSkeleton}
     */
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        /* tslint:disable no-any */
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     * @private
     * @param {string} pattern
     * @param {boolean} needFraction
     * @param {string} cSymbol
     * @param {boolean} fractionOnly
     * @returns {NegativeData}
     */
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    /**
     * Changes currency symbol
     * @private
     * @param {string} val
     * @param {string} sym
     * @returns {string}
     */
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    /**
     * Returns currency symbol based on currency code
     * @private
     * @param {Object} numericObject
     * @param {string} currencyCode
     * @returns {string}
     */
    function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
        var symbol = altSymbol ? ('.' + altSymbol) : '.symbol';
        var getCurrency = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('currencies.' + currencyCode + symbol, numericObject) ||
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('currencies.' + currencyCode + '.symbol-alt-narrow', numericObject) || '$';
        return getCurrency;
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    /**
     * Returns formatting options for custom number format
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Dependables} obj
     * @returns {GenericFormatOptions}
     */
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(options.nData)) {
            options.nData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, options.pData);
            options.nData.nlead = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    /**
     * Returns custom formatting options
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Object} numObject
     * @returns {NegativeData}
     */
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(pattern) || (pattern[5] === '' && format !== 'N/A')) {
            cOptions.type = undefined;
            return cOptions;
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(dOptions)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = _number_formatter__WEBPACK_IMPORTED_MODULE_4__["NumberFormat"].getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    /**
     * Returns formatting options for currency or percent type
     * @private
     * @param {string[]} parts
     * @param {string} actual
     * @param {string} symbol
     * @returns {NegativeData}
     */
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    /**
     * Returns culture based date separator
     * @private
     * @param {Object} dateObj
     * @returns {string}
     */
    function getDateSeparator(dateObj) {
        var value = (Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    /**
     * Returns Native Date Time pattern
     * @private
     * @param {string} culture
     * @param {DateFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture, options.calendar);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])()) {
            options = compareBlazorDateFormats(options, culture);
        }
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberingSystem(cldr));
                options_1.timeZone = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = _date_formatter__WEBPACK_IMPORTED_MODULE_3__["DateFormat"].getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    // tslint:disable-next-line:no-any
    function processSymbol(actual, option) {
        if (actual.indexOf(',') !== -1) {
            // tslint:disable-next-line:no-any
            var split = actual.split(',');
            actual = (split[0] + Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('numberMapper.numberSymbols.group', option) +
                split[1].replace('.', Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('numberMapper.numberSymbols.decimal', option)));
        }
        else {
            actual = actual.replace('.', Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('numberMapper.numberSymbols.decimal', option));
        }
        return actual;
    }
    /**
     * Returns Native Number pattern
     * @private
     * @param {string} culture
     * @param {NumberFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualNumberFormat(culture, options, cldr, isExcel) {
        var dependable = getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numrericObject = dependable.numericObject;
        var minFrac;
        var curObj = {};
        var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
        var type = IntlBase.formatRegex.test(options.format) ? getProperNumericSkeleton(options.format || 'N') : {};
        var dOptions = {};
        if (curMatch) {
            dOptions.numberMapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ?
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, dependable.numericObject) :
                _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberingSystem(cldr), true);
            var curCode = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('currencySymbol', dependable.numericObject) :
                getCurrencySymbol(dependable.numericObject, options.currency || _internationalization__WEBPACK_IMPORTED_MODULE_0__["defaultCurrencyCode"], options.altSymbol);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
            var split = symbolPattern.split(';');
            curObj.hasNegativePattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? true : (split.length > 1);
            curObj.nData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type.type + 'nData', numrericObject) :
                getFormatData(split[1] || '-' + split[0], true, curCode);
            curObj.pData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type.type + 'pData', numrericObject) :
                getFormatData(split[0], false, curCode);
            if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
            }
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' || (parseOptions.type && Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])())) {
                if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])() && parseOptions.type !== 'currency') {
                    curObj.pData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(parseOptions.type + 'pData', numrericObject);
                    curObj.nData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(parseOptions.type + 'nData', numrericObject);
                }
                var cPattern = actualPattern;
                actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                if (curObj.hasNegativePattern || Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])()) {
                    actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                }
            }
            if (parseOptions.type === 'percent' && !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])()) {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        if (Object.keys(dOptions).length > 0) {
            actualPattern = !isExcel ? processSymbol(actualPattern, dOptions) : actualPattern;
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
    function getWeekData(culture, cldr) {
        var firstDay = defaultFirstDay;
        var mapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('supplemental.weekData.firstDay', cldr);
        var iCulture = culture;
        if ((/en-/).test(iCulture)) {
            iCulture = iCulture.slice(3);
        }
        iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
        if (mapper) {
            firstDay = mapper[iCulture] || defaultFirstDay;
        }
        return firstDayMapper[firstDay];
    }
    IntlBase.getWeekData = getWeekData;
    /**
     * @private
     * @param pData
     * @param aCurrency
     * @param rCurrency
     */
    function replaceBlazorCurrency(pData, aCurrency, rCurrency) {
        var iCurrency = Object(_parser_base__WEBPACK_IMPORTED_MODULE_2__["getBlazorCurrencySymbol"])(rCurrency);
        if (aCurrency !== iCurrency) {
            for (var _i = 0, pData_1 = pData; _i < pData_1.length; _i++) {
                var data = pData_1[_i];
                data.nend = data.nend.replace(aCurrency, iCurrency);
                data.nlead = data.nlead.replace(aCurrency, iCurrency);
            }
        }
    }
    IntlBase.replaceBlazorCurrency = replaceBlazorCurrency;
    /**
     * @private
     */
    function getWeekOfYear(date) {
        var newYear = new Date(date.getFullYear(), 0, 1);
        var day = newYear.getDay();
        var weeknum;
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((date.getTime() - newYear.getTime() -
            (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
        if (day < 4) {
            weeknum = Math.floor((daynum + day - 1) / 7) + 1;
            if (weeknum > 52) {
                var nYear = new Date(this.getFullYear() + 1, 0, 1);
                var nday = nYear.getDay();
                nday = nday >= 0 ? nday : nday + 7;
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum + day - 1) / 7);
        }
        return weeknum;
    }
    IntlBase.getWeekOfYear = getWeekOfYear;
})(IntlBase || (IntlBase = {}));


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-formatter.js":
/*!*******************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-formatter.js ***!
  \*******************************************************************************/
/*! exports provided: NumberFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormat", function() { return NumberFormat; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internationalization */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js");




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
var infinity = 'infinity';
var nan = 'nan';
/**
 * Module for number formatting.
 * @private
 */
var NumberFormat = /** @__PURE__ @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} object- Specifies the global cldr data collection.
     * @return Function.
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getDependables(cldr, culture, '', true);
        var numObject = dependable.numericObject;
        dOptions.numberMapper = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, numObject) :
            _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].getNumberingSystem(cldr), true);
        dOptions.currencySymbol = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('currencySymbol', numObject) : _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getCurrencySymbol(dependable.numericObject, fOptions.currency || _internationalization__WEBPACK_IMPORTED_MODULE_1__["defaultCurrencyCode"], option.altSymbol);
        /* tslint:disable no-any */
        dOptions.percentSymbol = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('numberSymbols.percentSign', numObject) :
            dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('numberSymbols.minusSign', numObject) :
            dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].formatRegex.test(option.format))) {
            cOptions = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(fOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
                symbolPattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            }
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].defaultCurrency);
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
                var split = symbolPattern.split(';');
                cOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                cOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[0], false, dOptions.currencySymbol);
                if (fOptions.useGrouping) {
                    fOptions.groupSeparator = symbols[mapper[2]];
                    fOptions.groupData = this.getGroupingDetails(split[0]);
                }
            }
            else {
                cOptions.nData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fOptions.type + 'nData', numObject));
                cOptions.pData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fOptions.type + 'pData', numObject));
                if (fOptions.type === 'currency' && option.currency) {
                    _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].replaceBlazorCurrency([cOptions.pData, cOptions.nData], dOptions.currencySymbol, option.currency);
                }
            }
            var minFrac = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(mfrac) && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(cOptions.nData, fOptions);
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     * @param {string} pattern
     * @returns {GroupDetails}
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     * @param {number} val1
     * @param {number} val2
     * @param {boolean} checkbothExist
     * @param {boolean} isFraction
     * @returns {boolean}
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     * @param {number} val
     * @param {string} text
     * @param {boolean} isFraction
     * @returns {void}
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     * @param {number} value
     * @param {base.GenericFormatOptions} fOptions
     * @param {CommonOptions} dOptions
     * @returns {string}
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
            if (curData.useGrouping) {
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
            }
            fValue = _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].convertValueParts(fValue, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     * @param {string} val
     * @param {number} level1
     * @param {string} sep
     * @param {string} decimalSymbol
     * @param {number} level2
     * @returns {string}
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    /**
     * Returns integer processed numeric string
     * @param {string} value
     * @param {number} min
     * @returns {string}
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-parser.js":
/*!****************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/number-parser.js ***!
  \****************************************************************************/
/*! exports provided: NumberParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParser", function() { return NumberParser; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/intl-base.js");



var formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var latnDecimalRegex = /^[0-9]*(\.[0-9]+)?$/;
var keys = ['minusSign', 'infinity'];
/**
 * Module for Number Parser.
 * @private
 */
var NumberParser = /** @__PURE__ @class */ (function () {
    function NumberParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} - Specific the format in which number  will parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].formatRegex.test(option.format)) || !(option.format)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].customFormat(option.format, null, null));
        }
        var numbers = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('numbers', dependable.parserObject);
        numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr), true, Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])());
        parseOptions.symbolRegex = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getSymbolRegex(Object.keys(numOptions.symbolMatch));
        // tslint:disable-next-line:no-any
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            symbolpattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
            if (symbolpattern) {
                symbolpattern = symbolpattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].defaultCurrency);
                var split = symbolpattern.split(';');
                parseOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[1] || '-' + split[0], true, '');
                parseOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[0], true, '');
            }
        }
        else {
            parseOptions.nData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(parseOptions.type + 'nData', numbers));
            parseOptions.pData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(parseOptions.type + 'pData', numbers));
            if (parseOptions.type === 'currency' && option.currency) {
                _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].replaceBlazorCurrency([parseOptions.pData, parseOptions.nData], Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('currencySymbol', numbers), option.currency);
            }
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    /**
     * Returns parsed number for the provided formatting options
     * @param {string} value
     * @param {NumericParts} options
     * @param {NumericOptions} numOptions
     * @returns {number}
     */
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    return NumberParser;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js":
/*!**************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/intl/parser-base.js ***!
  \**************************************************************************/
/*! exports provided: ParserBase, getBlazorCurrencySymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserBase", function() { return ParserBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlazorCurrencySymbol", function() { return getBlazorCurrencySymbol; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 * @private
 */
var ParserBase = /** @__PURE__ @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object}
     */
    ParserBase.getMainObject = function (obj, cName) {
        var value = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? cName : 'main.' + cName;
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(value, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object}
     */
    ParserBase.getNumberingSystem = function (obj) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object}
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            /* tslint:disable no-any */
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp}
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     * @param {string} val
     * @returns {string}
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string}
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     * @param {Object} obj
     * @returns {NumericObject}
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('numbers', obj);
        ret.nSystem = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols, blazorMode) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cur.nSystem) || blazorMode) {
            var digits = blazorMode ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('obj.mapperDigits', cur) : Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(cur.nSystem + '._digits', numberSystem);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(blazorMode ? 'numberSymbols' : 'symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     * @param {Object} curObj
     * @param {Object} numberSystem
     * @param {boolean} isNumber
     * @returns {NumberMapper}
     */
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('timeSeparator', ret.numberSymbols);
            var digits = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(cur.nSystem + '._digits', numberSystem);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());

/**
 * @private
 */
var blazorCurrencyData = {
    'DJF': 'Fdj',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'NAD': '$',
    'ZAR': 'R',
    'XAF': 'FCFA',
    'GHS': 'GH₵',
    'XDR': 'XDR',
    'AED': 'د.إ.‏',
    'BHD': 'د.ب.‏',
    'DZD': 'د.ج.‏',
    'EGP': 'ج.م.‏',
    'ILS': '₪',
    'IQD': 'د.ع.‏',
    'JOD': 'د.ا.‏',
    'KMF': 'CF',
    'KWD': 'د.ك.‏',
    'LBP': 'ل.ل.‏',
    'LYD': 'د.ل.‏',
    'MAD': 'د.م.‏',
    'MRU': 'أ.م.',
    'OMR': 'ر.ع.‏',
    'QAR': 'ر.ق.‏',
    'SAR': 'ر.س.‏',
    'SDG': 'ج.س.',
    'SOS': 'S',
    'SSP': '£',
    'SYP': 'ل.س.‏',
    'TND': 'د.ت.‏',
    'YER': 'ر.ي.‏',
    'CLP': '$',
    'INR': '₹',
    'TZS': 'TSh',
    'EUR': '€',
    'AZN': '₼',
    'RUB': '₽',
    'BYN': 'Br',
    'ZMW': 'K',
    'BGN': 'лв.',
    'NGN': '₦',
    'XOF': 'CFA',
    'BDT': '৳',
    'CNY': '¥',
    'BAM': 'КМ',
    'UGX': 'USh',
    'USD': '$',
    'CZK': 'Kč',
    'GBP': '£',
    'DKK': 'kr.',
    'KES': 'Ksh',
    'CHF': 'CHF',
    'MVR': 'ރ.',
    'BTN': 'Nu.',
    'XCD': 'EC$',
    'AUD': '$',
    'BBD': '$',
    'BIF': 'FBu',
    'BMD': '$',
    'BSD': '$',
    'BWP': 'P',
    'BZD': '$',
    'CAD': '$',
    'NZD': '$',
    'FJD': '$',
    'FKP': '£',
    'GIP': '£',
    'GMD': 'D',
    'GYD': '$',
    'HKD': '$',
    'IDR': 'Rp',
    'JMD': '$',
    'KYD': '$',
    'LRD': '$',
    'MGA': 'Ar',
    'MOP': 'MOP$',
    'MUR': 'Rs',
    'MWK': 'MK',
    'MYR': 'RM',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': 'Rs',
    'RWF': 'RF',
    'SBD': '$',
    'SCR': 'SR',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'ANG': 'NAf.',
    'SZL': 'E',
    'TOP': 'T$',
    'TTD': '$',
    'VUV': 'VT',
    'WST': 'WS$',
    'ARS': '$',
    'BOB': 'Bs',
    'BRL': 'R$',
    'COP': '$',
    'CRC': '₡',
    'CUP': '$',
    'DOP': '$',
    'GTQ': 'Q',
    'HNL': 'L',
    'MXN': '$',
    'NIO': 'C$',
    'PAB': 'B/.',
    'PEN': 'S/',
    'PYG': '₲',
    'UYU': '$',
    'VES': 'Bs.S',
    'IRR': 'ريال',
    'GNF': 'FG',
    'CDF': 'FC',
    'HTG': 'G',
    'XPF': 'FCFP',
    'HRK': 'kn',
    'HUF': 'Ft',
    'AMD': '֏',
    'ISK': 'kr',
    'JPY': '¥',
    'GEL': '₾',
    'CVE': '​',
    'KZT': '₸',
    'KHR': '៛',
    'KPW': '₩',
    'KRW': '₩',
    'KGS': 'сом',
    'AOA': 'Kz',
    'LAK': '₭',
    'MZN': 'MTn',
    'MKD': 'ден',
    'MNT': '₮',
    'BND': '$',
    'MMK': 'K',
    'NOK': 'kr',
    'NPR': 'रु',
    'AWG': 'Afl.',
    'SRD': '$',
    'PLN': 'zł',
    'AFN': '؋',
    'STN': 'Db',
    'MDL': 'L',
    'RON': 'lei',
    'UAH': '₴',
    'LKR': 'රු.',
    'ALL': 'Lekë',
    'RSD': 'дин.',
    'TJS': 'смн',
    'THB': '฿',
    'TMT': 'm.',
    'TRY': '₺',
    'UZS': 'сўм',
    'VND': '₫',
    'TWD': 'NT$'
};
function getBlazorCurrencySymbol(currencyCode) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(currencyCode || '', blazorCurrencyData);
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/keyboard.js":
/*!******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/keyboard.js ***!
  \******************************************************************/
/*! exports provided: KeyboardEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return KeyboardEvents; });
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
var KeyboardEvents = /** @__PURE__ @class */ (function (_super) {
    __extends(KeyboardEvents, _super);
    /**
     * Initializes the KeyboardEvents
     * @param {HTMLElement} element
     * @param {KeyboardEventsModel} options
     */
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        /**
         * To handle a key press event returns null
         */
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents_1 = KeyboardEvents;
    /**
     * Unwire bound events and destroy the instance.
     * @return {void}
     */
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    /**
     * Function can be used to specify certain action if a property is changed
     * @param newProp
     * @param oldProp
     * @returns {void}
     * @private
     */
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
        // No code are needed
    };
    ;
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    /**
     * To get the module name, returns 'keyboard'.
     * @private
     */
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    /**
     * Wiring event handlers to events
     */
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * Unwiring event handlers to events
     */
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * To get the key configuration data
     * @param {string} config - configuration data
     * returns {KeyData}
     */
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    // Return the keycode value as string 
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents.configCache = {};
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], KeyboardEvents.prototype, "keyConfigs", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Property"])('keyup')
    ], KeyboardEvents.prototype, "eventName", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], KeyboardEvents.prototype, "keyAction", void 0);
    KeyboardEvents = KeyboardEvents_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], KeyboardEvents);
    return KeyboardEvents;
}(_base__WEBPACK_IMPORTED_MODULE_1__["Base"]));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/l10n.js":
/*!**************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/l10n.js ***!
  \**************************************************************/
/*! exports provided: L10n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return L10n; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/internationalization.js");


/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '../ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @__PURE__ @class */ (function () {
    /**
     * Constructor
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || _internationalization__WEBPACK_IMPORTED_MODULE_1__["defaultCulture"]);
    }
    /**
     * Sets the locale text
     * @param {string} locale
     * @returns {void}
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     */
    L10n.load = function (localeObject) {
        this.locale = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     * @param {string} propertyName - specifies the property for which localize text to be returned.
     * @return string
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.currentLocale[prop])) {
            return this.currentLocale[prop];
        }
        else {
            return this.localeStrings[prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     * @param {Object} curObject
     * @param {string} locale
     * @returns {Object}
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)[locale]) {
            return (curObject)[locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/module-loader.js":
/*!***********************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/module-loader.js ***!
  \***********************************************************************/
/*! exports provided: ModuleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return ModuleLoader; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/**
 * Module loading operations
 */

var MODULE_SUFFIX = 'Module';
var ModuleLoader = /** @__PURE__ @class */ (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    ;
    /**
     * Inject required modules in component library
     * @return {void}
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(memberName, module, this.parent);
                    }
                    else {
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    /**
     * To remove the created object while destroying the control
     * @return {void}
     */
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    /**
     * Removes all unused modules
     * @param {ModuleDeclaration[]} moduleList
     * @returns {void}
     */
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["deleteObject"])(this.parent, mod.member);
        }
    };
    /**
     * To get the name of the member.
     * @param {string} name
     * @returns {string}
     */
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    /**
     * Returns boolean based on whether the module specified is loaded or not
     * @param {string} modName
     * @returns {boolean}
     */
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js":
/*!********************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js ***!
  \********************************************************************************/
/*! exports provided: Property, Complex, ComplexFactory, Collection, CollectionFactory, Event, NotifyPropertyChanges, CreateBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return Complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return ComplexFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return CollectionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return NotifyPropertyChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return CreateBuilder; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");

/**
 * Returns the Class Object
 * @param {ClassObject} instance - instance of ClassObject
 * @param {string} curKey - key of the current instance
 * @param {Object} defaultValue - default Value
 * @param {Object[]} type
 */
function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey) || !(instance.properties[curKey] instanceof type)) {
        instance.properties[curKey] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
/**
 * Returns object array
 * @param {ClassObject} instance
 * @param {string} curKey
 * @param {Object[]} defaultValue
 * @param type
 * @param {boolean} isSetter
 * @returns {Object[]}
 */
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue ? defaultValue.length : 0;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i], instance);
        }
        if (isSetter) {
            var inst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(curType, [instance, curKey, defaultValue[i], false]));
        }
    }
    return result;
}
/**
 * Returns the properties of the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
/**
 * Set the properties for the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
/**
 * Returns complex objects
 */
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
/**
 * Sets complex objects
 */
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (this.properties.hasOwnProperty(curKey)) {
            return this.properties[curKey];
        }
        else {
            return getObject(this, curKey, defaultValue, curType);
        }
    };
}
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue, this);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        var _this = this;
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        var ignore = ((this.controlParent !== undefined && this.controlParent.ignoreCollectionWatch)
            || this.ignoreCollectionWatch);
        if (!this.properties[curKey].hasOwnProperty('push') && !ignore) {
            ['push', 'pop'].forEach(function (extendFunc) {
                var descriptor = {
                    value: complexArrayDefinedCallback(extendFunc, curKey, type, _this.properties[curKey]).bind(_this),
                    configurable: true
                };
                Object.defineProperty(_this.properties[curKey], extendFunc, descriptor);
            });
        }
        if (!this.properties[curKey].hasOwnProperty('isComplexArray')) {
            Object.defineProperty(this.properties[curKey], 'isComplexArray', { value: true });
        }
        return this.properties[curKey];
    };
}
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        this.isComplexArraySetter = true;
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.isComplexArraySetter = false;
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function complexArrayDefinedCallback(dFunc, curKey, type, prop) {
    /* tslint:disable no-function-expression */
    return function () {
        var newValue = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newValue[_i] = arguments[_i];
        }
        var keyString = this.propName ? this.getParentKey() + '.' + curKey + '-' : curKey + '-';
        switch (dFunc) {
            case 'push':
                for (var i = 0; i < newValue.length; i++) {
                    Array.prototype[dFunc].apply(prop, [newValue[i]]);
                    var model_1 = getArrayModel(keyString + (prop.length - 1), newValue[i], !this.controlParent, dFunc);
                    this.serverDataBind(model_1, newValue[i], false, dFunc);
                }
                break;
            case 'pop':
                Array.prototype[dFunc].apply(prop);
                var model = getArrayModel(keyString + prop.length, null, !this.controlParent, dFunc);
                this.serverDataBind(model, { ejsAction: 'pop' }, false, dFunc);
                break;
        }
        return prop;
    };
    /* tslint:enable no-function-expression */
}
function getArrayModel(keyString, value, isControlParent, arrayFunction) {
    var modelObject = keyString;
    if (isControlParent) {
        modelObject = {};
        modelObject[keyString] = value;
        if (value && typeof value === 'object') {
            var action = 'ejsAction';
            modelObject[keyString][action] = arrayFunction;
        }
    }
    return modelObject;
}
/**
 * Method used to create property. General syntax below.
 * @param  {T} defaultValue? - Specifies the default value of property.
 * ```
 * @Property('TypeScript')
 * propertyName: Type;
 * ```
 * @private
 */
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
/**
 * Method used to create complex property. General syntax below.
 * @param  {T} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Complex<Type>({},Type)
 * propertyName: Type;
 * ```
 * @private
 */
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
/**
 * Method used to create complex Factory property. General syntax below.
 * @param  {Function} defaultType - Specifies the default value of property.
 * @param  {Function} type - Specifies the class factory type of complex object.
 * ```
 * @ComplexFactory(defaultType, factoryFunction)
 * propertyName: Type1 | Type2;
 * ```
 * @private
 */
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
/**
 * Method used to create complex array property. General syntax below.
 * @param  {T[]} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
/**
 * Method used to create complex factory array property. General syntax below.
 * @param  {T[]} defaultType - Specifies the default type of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
/**
 * Method used to create event property. General syntax below.
 * @param  {Function} defaultValue? - Specifies the default value of property.
 * @param  {boolean} isComplex? - Specifies the whether it is complex object.
 * ```
 * @Event(()=>{return true;})
 * ```
 * @private
 */
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
/**
 * NotifyPropertyChanges is triggers the call back when the property has been changed.
 *
 * ```
 *  @NotifyPropertyChanges
 * class DemoClass implements INotifyPropertyChanged {
 *
 *     @Property()
 *     property1: string;
 *
 *     dataBind: () => void;
 *
 *     constructor() { }
 *
 *     onPropertyChanged(newProp: any, oldProp: any) {
 *         // Called when property changed
 *     }
 * }
 * ```
 * @private
 */
function NotifyPropertyChanges(classConstructor) {
    /** Need to code */
}
/**
 * Method  used to create the builderObject for the target component.
 * @private
 */
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    /* tslint:disable no-any */
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
    /* tslint:enable no-any */
}
/**
 * Returns an object containing the builder properties
 * @param {Function} component
 * @private
 */
function getBuilderProperties(component) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
/**
 * Method used to create builder for the components
 * @param {any} component -specifies the target component for which builder to be created.
 * @private
 */
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
/**
 * Returns parent options for the object
 * @param {Object} context
 * @param {string} prefix
 * @private
 */
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('parentObj', context), prefix);
    }
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js":
/*!******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/observer.js ***!
  \******************************************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");

var Observer = /** @__PURE__ @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(context)) {
            return;
        }
        this.context = context;
    }
    ;
    /**
     * To attach handler for given property in current context.
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     * @param {string} eventName - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[i].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} args - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @return {void}
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(property, this.boundedEvents).slice(0);
        if (window[blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[index];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' &&
                            _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    // tslint:disable-next-line:no-any
    Observer.prototype.dateReviver = function (key, value) {
        var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        if (_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"] && typeof value === 'string' && value.match(dPattern) !== null) {
            return (new Date(value));
        }
        return (value);
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * Returns if the property exists.
     */
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false || this.boundedEvents[prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/sanitize-helper.js":
/*!*************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/sanitize-helper.js ***!
  \*************************************************************************/
/*! exports provided: SanitizeHtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlHelper", function() { return SanitizeHtmlHelper; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/**
 * SanitizeHtmlHelper for sanitize the value.
 */

var removeTags = [
    'script',
    'style',
    'iframe[src]',
    'link[href*="javascript:"]',
    'object[type="text/x-scriptlet"]',
    'object[data^="data:text/html;base64"]',
    'img[src^="data:text/html;base64"]',
    '[src^="javascript:"]',
    '[dynsrc^="javascript:"]',
    '[lowsrc^="javascript:"]',
    '[type^="application/x-shockwave-flash"]'
];
var removeAttrs = [
    { attribute: 'href', selector: '[href*="javascript:"]' },
    { attribute: 'background', selector: '[background^="javascript:"]' },
    { attribute: 'style', selector: '[style*="javascript:"]' },
    { attribute: 'style', selector: '[style*="expression("]' },
    { attribute: 'href', selector: 'a[href^="data:text/html;base64"]' }
];
var jsEvents = ['onchange',
    'onclick',
    'onmouseover',
    'onmouseout',
    'onkeydown',
    'onload',
    'onerror',
    'onblur',
    'onfocus',
    'onbeforeload',
    'onbeforeunload',
    'onkeyup',
    'onsubmit',
    'onafterprint',
    'onbeforeonload',
    'onbeforeprint',
    'onblur',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'oncontextmenu',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onerror',
    'onfocus',
    'onformchange',
    'onforminput',
    'onhaschange',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmessage',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onoffline',
    'onoine',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpause',
    'onplay',
    'onplaying',
    'onpopstate',
    'onprogress',
    'onratechange',
    'onreadystatechange',
    'onredo',
    'onresize',
    'onscroll',
    'onseeked',
    'onseeking',
    'onselect',
    'onstalled',
    'onstorage',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'onundo',
    'onunload',
    'onvolumechange',
    'onwaiting',
    'onmouseenter',
    'onmouseleave',
    'onmousewheel',
    'onstart',
    'onpropertychange'
];
var SanitizeHtmlHelper = /** @__PURE__ @class */ (function () {
    function SanitizeHtmlHelper() {
    }
    SanitizeHtmlHelper.beforeSanitize = function () {
        return {
            selectors: {
                tags: removeTags,
                attributes: removeAttrs
            }
        };
    };
    ;
    SanitizeHtmlHelper.sanitize = function (value) {
        var item = this.beforeSanitize();
        var output = this.serializeValue(item, value);
        return output;
    };
    SanitizeHtmlHelper.serializeValue = function (item, value) {
        this.removeAttrs = item.selectors.attributes;
        this.removeTags = item.selectors.tags;
        this.wrapElement = document.createElement('div');
        this.wrapElement.innerHTML = value;
        this.removeXssTags();
        this.removeJsEvents();
        this.removeXssAttrs();
        var tempEleValue = this.wrapElement.innerHTML;
        this.removeElement();
        return tempEleValue;
    };
    SanitizeHtmlHelper.removeElement = function () {
        // Removes an element's attibute to avoid html tag validation
        var nodes = this.wrapElement.children;
        for (var j = 0; j < nodes.length; j++) {
            var attribute = nodes[j].attributes;
            for (var i = 0; i < attribute.length; i++) {
                this.wrapElement.children[j].removeAttribute(attribute[i].localName);
            }
        }
    };
    SanitizeHtmlHelper.removeXssTags = function () {
        var elements = this.wrapElement.querySelectorAll(this.removeTags.join(','));
        if (elements.length > 0) {
            elements.forEach(function (element) {
                Object(_dom__WEBPACK_IMPORTED_MODULE_0__["detach"])(element);
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeJsEvents = function () {
        var elements = this.wrapElement.querySelectorAll('[' + jsEvents.join('],[') + ']');
        if (elements.length > 0) {
            elements.forEach(function (element) {
                jsEvents.forEach(function (attr) {
                    if (element.hasAttribute(attr)) {
                        element.removeAttribute(attr);
                    }
                });
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeXssAttrs = function () {
        var _this = this;
        this.removeAttrs.forEach(function (item, index) {
            var elements = _this.wrapElement.querySelectorAll(item.selector);
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.removeAttribute(item.attribute);
                });
            }
        });
    };
    return SanitizeHtmlHelper;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template-engine.js":
/*!*************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/template-engine.js ***!
  \*************************************************************************/
/*! exports provided: blazorTemplates, getRandomId, compile, updateBlazorTemplate, resetBlazorTemplate, setTemplateEngine, getTemplateEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blazorTemplates", function() { return blazorTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return getRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlazorTemplate", function() { return updateBlazorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBlazorTemplate", function() { return resetBlazorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return setTemplateEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return getTemplateEngine; });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/**
 * Template Engine Bridge
 */



var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
var HAS_SVG = /^[\n\r.]+\<svg|^\<path|^\<g/;
var blazorTemplates = {};
function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}
/**
 * Compile the template string into template function.
 * @param  {string} templateString - The template string which is going to convert.
 * @param  {Object} helper? - Helper functions as an object.
 * @private
 */
//tslint:disable-next-line
function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    //tslint:disable-next-line
    return function (data, component, propName, templateId, isStringTemplate, index) {
        var result = compiler(data, component, propName);
        var blazor = 'Blazor';
        var blazorTemplateId = 'BlazorTemplateId';
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && !isStringTemplate) {
            var randomId = getRandomId();
            var blazorId = templateId + randomId;
            if (!blazorTemplates[templateId]) {
                blazorTemplates[templateId] = [];
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                var keys = Object.keys(blazorTemplates[templateId][index]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (key !== blazorTemplateId && data[key]) {
                        blazorTemplates[templateId][index][key] = data[key];
                    }
                    if (key === blazorTemplateId) {
                        blazorId = blazorTemplates[templateId][index][key];
                    }
                }
            }
            else {
                data[blazorTemplateId] = blazorId;
                blazorTemplates[templateId].push(data);
            }
            // tslint:disable-next-line:no-any
            return propName === 'rowTemplate' ? [Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('tr', { id: blazorId, className: 'e-blazor-template' })] :
                // tslint:disable-next-line:no-any
                [Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { id: blazorId, className: 'e-blazor-template' })];
        }
        if (typeof result === 'string') {
            if (HAS_SVG.test(result)) {
                var ele = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('svg', { innerHTML: result });
                return ele.childNodes;
            }
            else {
                var ele = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
        }
        else {
            return result;
        }
    };
}
function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
    var blazor = 'Blazor';
    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
        var ejsIntrop = 'sfBlazor';
        window[ejsIntrop].updateTemplate(templateName, blazorTemplates[templateId], templateId, comp, callBack);
        if (isEmpty !== false) {
            blazorTemplates[templateId] = [];
        }
    }
}
function resetBlazorTemplate(templateId, templateName, index) {
    var templateDiv = document.getElementById(templateId);
    if (templateDiv) {
        // tslint:disable-next-line:no-any
        var innerTemplates = templateDiv.getElementsByClassName('blazor-inner-template');
        for (var i = 0; i < innerTemplates.length; i++) {
            var tempId = ' ';
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                tempId = innerTemplates[index].getAttribute('data-templateId');
            }
            else {
                tempId = innerTemplates[i].getAttribute('data-templateId');
            }
            var tempElement = document.getElementById(tempId);
            if (tempElement) {
                var length_1 = tempElement.childNodes.length;
                for (var j = 0; j < length_1; j++) {
                    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                        innerTemplates[index].appendChild(tempElement.childNodes[0]);
                        i = innerTemplates.length;
                    }
                    else {
                        innerTemplates[i].appendChild(tempElement.childNodes[0]);
                    }
                }
            }
        }
    }
}
/**
 * Set your custom template engine for template rendering.
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @private
 */
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
/**
 * Get current template engine for template rendering
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @private
 */
function getTemplateEngine() {
    return engineObj.compile;
}
//Default Engine Class
var Engine = /** @__PURE__ @class */ (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return Object(_template__WEBPACK_IMPORTED_MODULE_0__["compile"])(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template.js":
/*!******************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/template.js ***!
  \******************************************************************/
/*! exports provided: expression, compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expression", function() { return expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/**
 * Template Engine
 */
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSEIF_STMT = new RegExp('else if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(\/if|\/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var WORDIF = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
// let cachedTemplate: Object = {};
var ARR_OBJ = /^\..*/gm;
var SINGLE_SLASH = /\\/gi;
var DOUBLE_SLASH = /\\\\/gi;
var WORDFUNC = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var WINDOWFUNC = /\window\./gm;
/**
 * The function to set regular expression for template expression string.
 * @param  {RegExp} value - Value expression.
 * @private
 */
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
// /**
//  * To render the template string from the given data.
//  * @param  {string} template - String Template.
//  * @param  {Object[]|JSON} data - DataSource for the template.
//  * @param  {Object} helper? - custom helper object.
//  */
// export function template(template: string, data: JSON, helper?: Object): string {
//     let hash: string = hashCode(template);
//     let tmpl: Function;
//     if (!cachedTemplate[hash]) {
//         tmpl = cachedTemplate[hash] = compile(template, helper);
//     } else {
//         tmpl = cachedTemplate[hash];
//     }
//     return tmpl(data);
// }
/**
 * Compile the template string into template function.
 * @param  {string} template - The template string which is going to convert.
 * @param  {Object} helper? - Helper functions as an object.
 * @private
 */
function compile(template, helper) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper);
    var fnCode = "var str=\"" + evalExpResult + "\"; return str;";
    // tslint:disable-next-line:no-function-constructor-with-string-args
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
// function used to evaluate the function expression
function evalExp(str, nameSpace, helper) {
    var varCOunt = 0;
    /**
     * Variable containing Local Keys
     */
    var localKeys = [];
    var isClass = str.match(/class="([^\"]+|)\s{2}/g);
    var singleSpace = '';
    if (isClass) {
        isClass.forEach(function (value) {
            singleSpace = value.replace(/\s\s+/g, ' ');
            str = str.replace(value, singleSpace);
        });
    }
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var SPECIAL_CHAR = /\@|\#|\$/gm;
        var matches = cnt.match(CALL_FUNCTION);
        // matches to detect any function calls
        if (matches) {
            var rlStr = matches[1];
            if (ELSEIF_STMT.test(cnt)) {
                //handling else-if condition
                cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (IF_STMT.test(cnt)) {
                //handling if condition
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORDIF, function (strs) {
                    return HandleSpecialCharArrObj(strs, nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                //handling for condition
                var rlStr_1 = matches[1].split(' of ');
                // replace for each into actual JavaScript
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    varCOunt = varCOunt + 1;
                    // tslint:disable-next-line
                    return 'var i' + varCOunt + '=0; i' + varCOunt + ' < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys) + '.length; i' + varCOunt + '++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys)
                    + '[i' + varCOunt + ']; \n var ' + rlStr_1[0] + 'Index=i' + varCOunt + '; \n str = str + "';
            }
            else {
                //helper function handling
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                var ftArray = matches[1].split(',');
                if (matches[1].length !== 0 && !(/data/).test(ftArray[0]) && !(/window./).test(ftArray[0])) {
                    matches[1] = (fNameSpace === 'global' ? nameSpace + '.' + matches[1] : matches[1]);
                }
                var splRegexp = /\@|\$|\#/gm;
                var arrObj = /\]\./gm;
                if (WINDOWFUNC.test(cnt) && arrObj.test(cnt) || splRegexp.test(cnt)) {
                    var splArrRegexp = /\@|\$|\#|\]\./gm;
                    if (splArrRegexp.test(cnt)) {
                        // tslint:disable-next-line
                        cnt = '"+ ' + (fNameSpace === 'global' ? '' : fNameSpace) + cnt.replace(matches[1], rlStr.replace(WORDFUNC, function (strs) {
                            return HandleSpecialCharArrObj(strs, nameSpace, localKeys);
                        })) + '+ "';
                    }
                }
                else {
                    cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                        cnt.replace(rlStr, addNameSpace(matches[1].replace(/,( |)data.|,/gi, ',' + nameSpace + '.').replace(/,( |)data.window/gi, ',window'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys)) +
                        '+"';
                }
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            // handling else condition
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            // close condition 
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else if (SPECIAL_CHAR.test(cnt)) {
            // template string with double slash with special character
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
            }
            cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
        }
        else {
            // template string with double slash
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
                cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
            }
            else {
                // evaluate normal expression
                cnt = '"+' + addNameSpace(cnt.replace(/\,/gi, '+' + nameSpace + '.'), (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '+"';
            }
        }
        return cnt;
    });
}
function addNameSpace(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '.' + str : str);
}
function NameSpaceArrObj(str, addNS, nameSpace, ignoreList) {
    var arrObjReg = /^\..*/gm;
    return ((addNS && !(NOT_NUMBER.test(str)) &&
        ignoreList.indexOf(str.split('.')[0]) === -1 && !(arrObjReg.test(str))) ? nameSpace + '.' + str : str);
}
// // Create hashCode for template string to storeCached function
// function hashCode(str: string): string {
//     return str.split('').reduce((a: number, b: string) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
// }
function NameSpaceForspecialChar(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '["' + str : str);
}
// tslint:disable-next-line
function SlashReplace(tempStr) {
    // tslint:disable-next-line
    var double = "\\\\";
    if (tempStr.match(DOUBLE_SLASH)) {
        tempStr = tempStr;
    }
    else {
        tempStr = tempStr.replace(SINGLE_SLASH, double);
    }
    return tempStr;
}
function HandleSpecialCharArrObj(str, nameSpaceNew, keys) {
    str = str.trim();
    var windowFunc = /\window\./gm;
    if (!windowFunc.test(str)) {
        var quotes = /'|"/gm;
        var splRegexp = /\@|\$|\#/gm;
        if (splRegexp.test(str)) {
            str = NameSpaceForspecialChar(str, (keys.indexOf(str) === -1), nameSpaceNew, keys) + '"]';
        }
        if (ARR_OBJ.test(str)) {
            return NameSpaceArrObj(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
        else {
            return addNameSpace(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
    }
    else {
        return str;
    }
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/touch.js":
/*!***************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/touch.js ***!
  \***************************************************************/
/*! exports provided: SwipeSettings, Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return SwipeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/browser.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/base.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/child-property.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/event-handler.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
var SwipeSettings = /** @__PURE__ @class */ (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(50)
    ], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings;
}(_child_property__WEBPACK_IMPORTED_MODULE_4__["ChildProperty"]));

var swipeRegex = /(Up|Down)/;
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
var Touch = /** @__PURE__ @class */ (function (_super) {
    __extends(Touch, _super);
    /* End-Properties */
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.touchAction = true;
        _this.tapCount = 0;
        _this.startEvent = function (evt) {
            if (_this.touchAction === true) {
                var point = _this.updateChangeTouches(evt);
                if (evt.changedTouches !== undefined) {
                    _this.touchAction = false;
                }
                _this.isTouchMoved = false;
                _this.movedDirection = '';
                _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                _this.startEventData = point;
                _this.hScrollLocked = _this.vScrollLocked = false;
                _this.tStampStart = Date.now();
                _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, _this.moveEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, _this.endEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent, _this);
            }
        };
        _this.moveEvent = function (evt) {
            var point = _this.updateChangeTouches(evt);
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.cancelEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            _this.tapCount = 0;
            _this.swipeFn(evt);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent);
        };
        _this.endEvent = function (evt) {
            _this.swipeFn(evt);
            if (!_this.isTouchMoved) {
                if (typeof _this.tap === 'function') {
                    _this.trigger('tap', { originalEvent: evt, tapCount: ++_this.tapCount });
                    _this.timeOutTap = setTimeout(function () {
                        _this.tapCount = 0;
                    }, _this.tapThreshold);
                }
            }
            _this.modeclear();
        };
        _this.swipeFn = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            var point = _this.updateChangeTouches(evt);
            var diffX = point.clientX - _this.startPoint.clientX;
            var diffY = point.clientY - _this.startPoint.clientY;
            diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
            diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
            _this.isTouchMoved = diffX > 1 || diffY > 1;
            _this.endPoint = point;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (_this.isTouchMoved) {
                var eSwipeArgs = void 0;
                var tDistance = _this.swipeSettings.swipeThresholdDistance;
                eSwipeArgs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.modeclear();
        };
        _this.modeclear = function () {
            _this.modeClear = setTimeout(function () {
                _this.touchAction = true;
            }, (typeof _this.tap !== 'function' ? 0 : 20));
            _this.lastTapTime = new Date().getTime();
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, _this.moveEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, _this.endEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent);
        };
        _this.bind();
        return _this;
    }
    // triggers when property changed 
    /**
     * @private
     * @param newProp
     * @param oldProp
     */
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    /**
     * To destroy the touch instance.
     * @return {void}
     */
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    // Need to changes the event binding once we updated the event handler.
    Touch.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchStartEvent, this.startEvent);
    };
    /**
     * Returns module name as touch
     * @returns {string}
     * @private
     */
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    /**
     * Returns if the HTML element is Scrollable.
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean}
     */
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        this.tapCount = 0;
        this.touchAction = true;
        var eTapArgs;
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, this.moveEvent);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, this.cancelEvent);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    // tslint:disable-next-line:no-any
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    Touch.prototype.updateChangeTouches = function (evt) {
        // tslint:disable-next-line:max-line-length
        var point = evt.changedTouches && evt.changedTouches.length !== 0 ? evt.changedTouches[0] : evt;
        return point;
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "tap", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "tapHold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "swipe", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "scroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(350)
    ], Touch.prototype, "tapThreshold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(750)
    ], Touch.prototype, "tapHoldThreshold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Complex"])({}, SwipeSettings)
    ], Touch.prototype, "swipeSettings", void 0);
    Touch = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_1__["NotifyPropertyChanges"]
    ], Touch);
    return Touch;
}(_base__WEBPACK_IMPORTED_MODULE_3__["Base"]));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js":
/*!**************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js ***!
  \**************************************************************/
/*! exports provided: disableBlazorMode, createInstance, setImmediate, getValue, setValue, deleteObject, isObject, getEnumValue, merge, extend, isNullOrUndefined, isUndefined, getUniqueID, debounce, queryParams, isObjectArray, compareElementParent, throwError, print, formatUnit, enableBlazorMode, isBlazor, getElement, getInstance, addInstance, uniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBlazorMode", function() { return disableBlazorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return deleteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return getEnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return getUniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return queryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return isObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return compareElementParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return formatUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBlazorMode", function() { return enableBlazorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlazor", function() { return isBlazor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return addInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return uniqueID; });
var instances = 'ej2_instances';
var uid = 0;
var isBlazorPlatform = false;
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function disableBlazorMode() {
    isBlazorPlatform = false;
}
/**
 * Create Instance from constructor function with desired parameters.
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @return {any}
 * @private
 */
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 * @param {Function} handler - callback function to be triggered.
 * @return {Function}
 * @private
 */
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @return {any}
 * @private
 */
function getValue(nameSpace, obj) {
    /* tslint:disable no-any */
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
/**
 * Delete an item from Object
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} params - String value to the get the inner object
 * @return {void}
 * @private
 */
function deleteObject(obj, key) {
    delete obj[key];
}
/**
 * Check weather the given argument is only object.
 * @param {any} obj - Object which is need to check.
 * @return {boolean}
 * @private
 */
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * To get enum value by giving the string.
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @return {any}
 * @private
 */
function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
/**
 * Merge the source object into destination object.
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @return {void}
 * @private
 */
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj[deepmerge]) && (temrObj[deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp[key]) || Array.isArray(tempProp[key]))) {
                extend(temrObj[key], temrObj[key], tempProp[key], true);
            }
            else {
                temrObj[key] = tempProp[key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @return {Object}
 * @private
 */
function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            var isArrayChanged = Array.isArray(copy) && Array.isArray(src) && (copy.length !== src.length);
            var blazorEventExtend = isBlazor() ? (!(src instanceof Event) && !isArrayChanged) : true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    if (Array.isArray(clone) && clone.hasOwnProperty('isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result[key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    /* istanbul ignore next */
                    clone = isBlazor() ? src && Object.keys(copy).length : src ? src : [];
                    result[key] = extend([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 * @param {Object} value - To check the object is null or undefined
 * @return {boolean}
 * @private
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 * @param {Object} value - To check the object is undefined
 * @return {boolean}
 * @private
 */
function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * To return the generated unique name
 * @param {string} definedName - To concatenate the unique id to provided name
 * @return {string}
 * @private
 */
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @return {Function}
 * @private
 */
function debounce(eventFunction, delay) {
    var out;
    // tslint:disable-next-line
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
// Added since lint ignored after added '//tslint:disable-next-line' 
/* tslint:disable:no-any */
/**
 * To convert the object to string for query url
 * @param  {Object} data
 * @returns string
 * @private
 */
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
/**
 * To check whether the given array contains object.
 * @param {T[]} value- Specifies the T type array to be checked.
 * @private
 */
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 * @param{Element} - Specifies the child element to compare with parent.
 * @param{Element} - Specifies the parent element.
 * @return boolean
 * @private
 */
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 * @param{string} - Specifies the error message to be thrown.
 * @private
 */
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
/**
 * This function is used to print given element
 * @param{Element} element - Specifies the print content element.
 * @param{Window} printWindow - Specifies the print window.
 * @private
 */
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    // tslint:disable-next-line
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
/**
 * Function to normalize the units applied to the element.
 * @param  {number|string} value
 * @return {string} result
 * @private
 */
function formatUnit(value) {
    var result = value + '';
    if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
        return result;
    }
    return result + 'px';
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function enableBlazorMode() {
    isBlazorPlatform = true;
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to convert xPath to DOM element in blazor platform
 * @return {HTMLElement} result
 * @param {HTMLElement | object} element
 * @private
 */
function getElement(element) {
    var xPath = 'xPath';
    if (!(element instanceof Node) && isBlazor() && !isNullOrUndefined(element[xPath])) {
        return document.evaluate(element[xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    return element;
}
/**
 * Function to fetch the Instances of a HTML element for the given component.
 * @param {string | HTMLElement} element
 * @param {any} component
 * @return {Object} inst
 * @private
 */
// tslint:disable-next-line
function getInstance(element, component) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
/**
 * Function to add instances for the given element.
 * @param {string | HTMLElement} element
 * @param {Object} instance
 * @return {void}
 * @private
 */
function addInstance(element, instance) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
/**
 * Function to generate the unique id.
 * @return {any}
 * @private
 */
// tslint:disable-next-line:no-any
function uniqueID() {
    // tslint:disable-next-line:no-any
    if ((typeof window) === 'undefined') {
        return;
    }
    // tslint:disable-next-line:no-any
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-base/virtual-dom.js":
/*!*********************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-base/virtual-dom.js ***!
  \*********************************************************************/
/*! exports provided: VirtualDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualDOM", function() { return VirtualDOM; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/util.js");
/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-engine */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/template-engine.js");


var simpleRegex = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
var multipleSplitRegex = /(?:#([\w-]+)|(\w+)|\.([\w-]+))/g;
var idClassSelector = /^(\.|#)/;
var selectMapper = {
    '.': 'className',
    '#': 'id'
};
var classRegexString = '(?=.*?\\b{value}\\b)';
var assigner = { className: 'attributes.className', id: 'attributes.id', tagName: 'tagName' };
var emptyElements = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'embed', 'command', 'keygen', 'source', 'track', 'wbr'];
var blockElements = ['a', 'address', 'article', 'applet', 'aside', 'audio', 'blockquote',
    'button', 'canvas', 'center', 'dd', 'del', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure',
    'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'iframe', 'ins',
    'isindex', 'li', 'map', 'menu', 'noframes', 'noscript', 'object', 'ol', 'output', 'p', 'pre', 'section',
    'script', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul', 'video'];
var inlineElement = ['abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo', 'big', 'br', 'button',
    'cite', 'code', 'del', 'dfn', 'em', 'font', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map',
    'object', 'q', 's', 'samp', 'script', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'textarea',
    'tt', 'u', 'var'];
var selfClosingElements = ['colgroup', 'dd', 'dt', 'li', 'options', 'p', 'td', 'tfoot', 'th',
    'thead', 'tr'];
var fillAttrs = ['checked', 'compact', 'declare', 'defer', 'disabled', 'ismap', 'multiple',
    'nohref', 'noresize', 'noshade', 'nowrap', 'readonly', 'selected'];
var cspElement = ['Script', 'style'];
var nameMapper = { 'tabindex': 'tabIndex' };
var startRegex = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endRegex = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attributeRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
/**
 * Namespace for VirtualDOM
 * @private
 */
var VirtualDOM;
(function (VirtualDOM) {
    //tslint:disable:no-any
    function createElement(tagName, properties) {
        var children = [];
        var extended = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, properties, true);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(properties)) {
            var keys = Object.keys(properties);
            if (keys.length) {
                if (extended.innerHTML) {
                    children = ConvertHTMLToJSon(extended.innerHTML);
                    delete extended.innerHTML;
                }
                if (extended.attrs) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(extended, extended.attrs);
                    delete extended.attrs;
                }
                if (extended.styles) {
                    var valArr = extended.styles.split(';');
                    var vObj = {};
                    for (var i = 0, length_1 = valArr.length; i < length_1; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    delete extended.styles;
                    extended.style = vObj;
                }
            }
        }
        return {
            tagName: tagName,
            attributes: extended || {},
            children: children
        };
    }
    VirtualDOM.createElement = createElement;
    function assignParent(childrens, parent) {
        if (parent && childrens) {
            childrens.forEach(function (child) {
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(child)) {
                    if (child.parent) {
                        detach(child);
                    }
                    child.parent = parent;
                }
                return child;
            });
        }
    }
    VirtualDOM.assignParent = assignParent;
    function append(fromElements, toElement) {
        assignParent(fromElements, toElement);
        if (toElement.children) {
            toElement.children = toElement.children.concat(fromElements);
        }
        else {
            toElement.children = [].concat(fromElements);
        }
    }
    VirtualDOM.append = append;
    function prepend(child, toElement) {
        assignParent(child, toElement);
        if (!toElement.children || !toElement.children.length) {
            toElement.children = [];
            toElement.children.concat(child);
        }
        else {
            for (var i = child.length - 1; i >= 0; i--) {
                toElement.children.unshift(child[i]);
            }
        }
    }
    VirtualDOM.prepend = prepend;
    function detach(element) {
        var parent = element.parent;
        if (parent) {
            var index = parent.children.indexOf(element);
            if (index !== -1) {
                parent.children.splice(index);
            }
        }
        return parent;
    }
    VirtualDOM.detach = detach;
    //tslint:disable-next-line
    function vDomSelector(_a) {
        var ele = _a.ele, selector = _a.selector, selectAll = _a.selectAll, immediateParent = _a.immediateParent;
        var iSelector = selector.split(' ');
        var curColl = ele;
        for (var i = 0, length_2 = iSelector.length; i < length_2; i++) {
            var isDescendant = false;
            var parent_2 = curColl;
            var curSelector = iSelector[i];
            var simpleSelector = false;
            var mapper = [];
            if (simpleRegex.test(curSelector)) {
                simpleSelector = true;
                processSelector(curSelector, mapper);
            }
            else if (curSelector.indexOf('>') === -1) {
                var splitSelector = curSelector.match(multipleSplitRegex);
                for (var _i = 0, splitSelector_1 = splitSelector; _i < splitSelector_1.length; _i++) {
                    var curMap = splitSelector_1[_i];
                    processSelector(curMap, mapper);
                }
            }
            else if (curSelector.indexOf('>') !== -1) {
                isDescendant = true;
                var dSelector = curSelector.split('>');
                //tslint:disable-next-line
                var dParent = ele;
                var descendent = void 0;
                var flag = 0;
                for (var _b = 0, dSelector_1 = dSelector; _b < dSelector_1.length; _b++) {
                    var sel = dSelector_1[_b];
                    if (!dParent) {
                        break;
                    }
                    if (dParent.length) {
                        var descendentChild = [];
                        for (var _c = 0, dParent_1 = dParent; _c < dParent_1.length; _c++) {
                            var child = dParent_1[_c];
                            descendentChild = descendentChild.concat(vDomSelector({
                                ele: child, selector: sel,
                                selectAll: selectAll, immediateParent: !!flag
                            }));
                        }
                        descendent = descendentChild;
                    }
                    else {
                        descendent = vDomSelector({ ele: dParent, selector: sel, selectAll: selectAll, immediateParent: !!flag });
                    }
                    flag++;
                    dParent = descendent;
                }
                if (descendent) {
                    curColl = descendent;
                }
            }
            if (!isDescendant) {
                if (parent_2.length) {
                    var iCurSelector = [];
                    for (var _d = 0, parent_1 = parent_2; _d < parent_1.length; _d++) {
                        var curParent = parent_1[_d];
                        iCurSelector = iCurSelector.concat(accessElement(curParent, mapper, selectAll, immediateParent));
                    }
                    curColl = iCurSelector;
                }
                else {
                    curColl = accessElement(parent_2, mapper, selectAll, immediateParent);
                }
            }
        }
        if (selectAll) {
            return curColl;
        }
        else {
            return curColl[0] || null;
        }
    }
    VirtualDOM.vDomSelector = vDomSelector;
    function processSelector(selector, mapper) {
        var match = selector.match(idClassSelector);
        var obj = {};
        if (match) {
            var curMapper = selectMapper[match[0]];
            if (curMapper === 'className') {
                var curObj = mapper.filter(function (obj) { return obj.hasOwnProperty('className'); })[0];
                var canPush = false;
                if (!curObj) {
                    canPush = true;
                    curObj = {};
                }
                var existValue = curObj[curMapper] || '';
                curObj[curMapper] = existValue + classRegexString.replace('{value}', selector.replace('.', ''));
                if (canPush) {
                    mapper.push(curObj);
                }
            }
            else {
                obj[curMapper] = selector.replace(match[0], '');
                mapper.push(obj);
            }
        }
        else {
            mapper.push({ tagName: selector });
        }
    }
    //tslint:disable-next-line
    function accessElement(ele, mapper, selectAll, immediateParent) {
        if (ele.children) {
            //tslint:disable-next-line
            var temp_1 = ele.children.filter(function (child) {
                if (typeof (child) !== 'string') {
                    var matched = true;
                    for (var _i = 0, mapper_1 = mapper; _i < mapper_1.length; _i++) {
                        var map = mapper_1[_i];
                        var key = Object.keys(map)[0];
                        var expected = map[key];
                        var actualValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(assigner[key], child);
                        if (key === 'className') {
                            if (!(new RegExp('^' + expected + '.*$').test(actualValue))) {
                                matched = false;
                                break;
                            }
                        }
                        else if (actualValue !== expected) {
                            matched = false;
                            break;
                        }
                    }
                    return matched;
                }
                else {
                    return false;
                }
            });
            if (!immediateParent && (!temp_1.length || selectAll)) {
                ele.children.forEach(function (child) {
                    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(child)) {
                        temp_1 = temp_1.concat(accessElement(child, mapper, selectAll));
                    }
                });
            }
            return temp_1;
        }
        else {
            return [];
        }
    }
    VirtualDOM.accessElement = accessElement;
    function ConvertHTMLToJSon(htmlString) {
        var results = [];
        var isText;
        var tagArray = [];
        var backup = htmlString;
        var nodeArray = [];
        while (htmlString) {
            isText = true;
            var lastVal = getLastValue(tagArray);
            if (!lastVal || !contains(cspElement, lastVal)) {
                if (htmlString.indexOf('</') === 0) {
                    var match = htmlString.match(endRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(endRegex, iterateEndTag);
                    }
                    isText = false;
                }
                else if (htmlString.indexOf('<') === 0) {
                    var match = htmlString.match(startRegex);
                    if (match) {
                        htmlString = htmlString.substring(match[0].length);
                        //tslint:disable-next-line
                        match[0].replace(startRegex, iterateStartTag);
                    }
                    isText = false;
                }
                if (isText) {
                    var tagIndex = htmlString.indexOf('<');
                    var text = tagIndex < 0 ? htmlString : htmlString.substring(0, tagIndex);
                    htmlString = tagIndex < 0 ? '' : htmlString.substring(tagIndex);
                    iterateText(text);
                }
            }
            else {
                //tslint:disable-next-line
                htmlString = htmlString.replace(new RegExp('([\\s\\S]*?)<\/' + getLastValue(nodeArray) + '[^>]*>'), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');
                    iterateText(text);
                    return '';
                });
                iterateEndTag('', getLastValue(tagArray));
            }
            backup = htmlString;
        }
        function iterateStartTag(start, tagName, rest) {
            tagName = tagName.toLowerCase();
            if (contains(blockElements, tagName)) {
                while (getLastValue(tagArray) && contains(inlineElement, getLastValue(tagArray))) {
                    iterateEndTag('', getLastValue(tagArray));
                }
            }
            if (contains(selfClosingElements, tagName) && getLastValue(tagArray)) {
                iterateEndTag('', tagName);
            }
            var isSelfTag = contains(emptyElements, tagName);
            if (!isSelfTag) {
                tagArray.push(tagName);
            }
            var attrs = {};
            //tslint:disable-next-line
            rest.replace(attributeRegex, function (match, name) {
                var names = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    names[_i - 2] = arguments[_i];
                }
                //tslint:disable-next-line
                var val = names[2] ? names[2] :
                    names[3] ? names[3] :
                        names[4] ? names[4] :
                            contains(fillAttrs, name) ? name : '';
                if (name === 'style') {
                    var valArr = val.split(';');
                    var vObj = {};
                    for (var i = 0, length_3 = valArr.length; i < length_3; i++) {
                        var cVal = valArr[i];
                        var styleSplit = cVal.split(':');
                        vObj[styleSplit[0]] = styleSplit[1];
                    }
                    val = vObj;
                }
                name = nameMapper[name] || name;
                attrs[name] = val;
                //tslint:disable-next-line
            });
            attrs['data-id'] = Object(_template_engine__WEBPACK_IMPORTED_MODULE_1__["getRandomId"])();
            var tagObject = {
                tagName: tagName,
                attributes: attrs
            };
            if (isSelfTag) {
                var parent_3 = (nodeArray[0] || results);
                if (parent_3.children === undefined) {
                    parent_3.children = [];
                }
                tagObject.parent = parent_3;
                parent_3.children.push(tagObject);
            }
            else {
                nodeArray.unshift(tagObject);
            }
        }
        function iterateEndTag(start, tagName) {
            var pos;
            if (!tagName) {
                pos = 0;
            }
            else {
                for (pos = tagArray.length - 1; pos >= 0; pos--) {
                    if (tagArray[pos] === tagName) {
                        break;
                    }
                }
            }
            if (pos >= 0) {
                for (var j = nodeArray.length - 1; j >= pos; j--) {
                    //tslint:disable-next-line
                    var node = nodeArray.shift();
                    if (nodeArray.length === 0) {
                        results.push(node);
                    }
                    else {
                        var parent_4 = nodeArray[0];
                        if (parent_4.children === undefined) {
                            parent_4.children = [];
                        }
                        node.parent = parent_4;
                        parent_4.children.push(node);
                    }
                }
                tagArray.length = pos;
            }
        }
        function iterateText(text) {
            if (nodeArray.length === 0) {
                results.push(text);
            }
            else {
                var parent_5 = nodeArray[0];
                if (parent_5.children === undefined) {
                    parent_5.children = [];
                }
                parent_5.children.push(text);
            }
        }
        return results;
    }
    VirtualDOM.ConvertHTMLToJSon = ConvertHTMLToJSon;
    //tslint:disable-next-line 
    function getLastValue(arr) {
        return arr[arr.length - 1];
    }
    function contains(arr, key) {
        return arr.indexOf(key) !== -1;
    }
    //tslint:disable-next-line
    function cloneNode(ele, deep) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(ele)) {
            if (deep) {
                return Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, ele, true);
            }
            else {
                return { tagName: ele.tagName, attributes: ele.attributes };
            }
        }
        else {
            return ele.cloneNode(deep);
        }
    }
    VirtualDOM.cloneNode = cloneNode;
    function setStyleAttribute(element, attrs) {
        if (element.attributes.style) {
            (element.attributes).style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, attrs);
        }
        else {
            element.attributes.style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(element.attributes.style, attrs);
        }
    }
    VirtualDOM.setStyleAttribute = setStyleAttribute;
    //tslint:enable:no-any
})(VirtualDOM || (VirtualDOM = {}));


/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/calendar.js":
/*!********************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/calendar.js ***!
  \********************************************************************************/
/*! exports provided: CalendarBase, Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarBase", function() { return CalendarBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ej2-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//class constant defination.
var OTHERMONTH = 'e-other-month';
var OTHERDECADE = 'e-other-year';
var ROOT = 'e-calendar';
var DEVICE = 'e-device';
var HEADER = 'e-header';
var RTL = 'e-rtl';
var CONTENT = 'e-content';
var YEAR = 'e-year';
var MONTH = 'e-month';
var DECADE = 'e-decade';
var ICON = 'e-icons';
var PREVICON = 'e-prev';
var NEXTICON = 'e-next';
var PREVSPAN = 'e-date-icon-prev';
var NEXTSPAN = 'e-date-icon-next ';
var ICONCONTAINER = 'e-icon-container';
var DISABLED = 'e-disabled';
var OVERLAY = 'e-overlay';
var WEEKEND = 'e-weekend';
var WEEKNUMBER = 'e-week-number';
var SELECTED = 'e-selected';
var FOCUSEDDATE = 'e-focused-date';
var OTHERMONTHROW = 'e-month-hide';
var TODAY = 'e-today';
var TITLE = 'e-title';
var LINK = 'e-day';
var CELL = 'e-cell';
var WEEKHEADER = 'e-week-header';
var ZOOMIN = 'e-zoomin';
var FOOTER = 'e-footer-container';
var BTN = 'e-btn';
var FLAT = 'e-flat';
var CSS = 'e-css';
var PRIMARY = 'e-primary';
var DAYHEADERLONG = 'e-calendar-day-header-lg';
var dayMilliSeconds = 86400000;
var minutesMilliSeconds = 60000;
/**
 *
 * @private
 */
var CalendarBase = /** @__PURE__ @class */ (function (_super) {
    __extends(CalendarBase, _super);
    /**
     * Initialized new instance of Calendar Class.
     * Constructor for creating the widget
     * @param  {CalendarModel} options?
     * @param  {string|HTMLElement} element?
     */
    function CalendarBase(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.effect = '';
        _this.isPopupClicked = false;
        _this.isDateSelected = true;
        return _this;
    }
    /**
     * To Initialize the control rendering.
     * @returns void
     * @private
     */
    CalendarBase.prototype.render = function () {
        this.rangeValidation(this.min, this.max);
        this.calendarEleCopy = this.element.cloneNode(true);
        if (this.calendarMode === 'Islamic') {
            if (+(this.min.setSeconds(0)) === +new Date(1900, 0, 1, 0, 0, 0)) {
                this.min = new Date(1944, 2, 18);
            }
            if (+this.max === +new Date(2099, 11, 31)) {
                this.max = new Date(2069, 10, 16);
            }
        }
        this.globalize = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Internationalization"](this.locale);
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.firstDayOfWeek) || this.firstDayOfWeek > 6 || this.firstDayOfWeek < 0) {
            this.setProperties({ firstDayOfWeek: this.globalize.getFirstDayOfWeek() }, true);
        }
        this.todayDisabled = false;
        this.todayDate = new Date(new Date().setHours(0, 0, 0, 0));
        if (this.getModuleName() === 'calendar') {
            this.element.classList.add(ROOT);
            if (this.enableRtl) {
                this.element.classList.add(RTL);
            }
            if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                this.element.classList.add(DEVICE);
            }
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.element, {
                'data-role': 'calendar'
            });
            this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
            this.element.setAttribute('tabindex', this.tabIndex);
        }
        else {
            this.calendarElement = this.createElement('div');
            this.calendarElement.classList.add(ROOT);
            if (this.enableRtl) {
                this.calendarElement.classList.add(RTL);
            }
            if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice) {
                this.calendarElement.classList.add(DEVICE);
            }
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.calendarElement, {
                'role': 'calendar'
            });
        }
        this.createHeader();
        this.createContent();
        this.wireEvents();
    };
    CalendarBase.prototype.rangeValidation = function (min, max) {
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(min)) {
            this.setProperties({ min: new Date(1900, 0, 1) }, true);
        }
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(max)) {
            this.setProperties({ max: new Date(2099, 11, 31) }, true);
        }
    };
    CalendarBase.prototype.getDefaultKeyConfig = function () {
        this.defaultKeyConfigs = {
            controlUp: 'ctrl+38',
            controlDown: 'ctrl+40',
            moveDown: 'downarrow',
            moveUp: 'uparrow',
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            select: 'enter',
            home: 'home',
            end: 'end',
            pageUp: 'pageup',
            pageDown: 'pagedown',
            shiftPageUp: 'shift+pageup',
            shiftPageDown: 'shift+pagedown',
            controlHome: 'ctrl+home',
            controlEnd: 'ctrl+end',
            altUpArrow: 'alt+uparrow',
            spacebar: 'space',
            altRightArrow: 'alt+rightarrow',
            altLeftArrow: 'alt+leftarrow'
        };
        return this.defaultKeyConfigs;
    };
    CalendarBase.prototype.validateDate = function (value) {
        this.setProperties({ min: this.checkDateValue(new Date(this.checkValue(this.min))) }, true);
        this.setProperties({ max: this.checkDateValue(new Date(this.checkValue(this.max))) }, true);
        this.currentDate = this.currentDate ? this.currentDate : new Date(new Date().setHours(0, 0, 0, 0));
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && this.min <= this.max && value >= this.min && value <= this.max) {
            this.currentDate = new Date(this.checkValue(value));
        }
    };
    CalendarBase.prototype.setOverlayIndex = function (popupWrapper, popupElement, modal, isDevice) {
        if (isDevice && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(popupElement) && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(modal) && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(popupWrapper)) {
            var index = parseInt(popupElement.style.zIndex, 10) ? parseInt(popupElement.style.zIndex, 10) : 1000;
            modal.style.zIndex = (index - 1).toString();
            popupWrapper.style.zIndex = index.toString();
        }
    };
    CalendarBase.prototype.minMaxUpdate = function (value) {
        if (!(+this.min <= +this.max)) {
            this.setProperties({ min: this.min }, true);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], OVERLAY);
        }
        else {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], OVERLAY);
        }
        this.min = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.min) || !(+this.min) ? this.min = new Date(1900, 0, 1) : this.min;
        this.max = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.max) || !(+this.max) ? this.max = new Date(2099, 11, 31) : this.max;
        if (+this.min <= +this.max && value && +value <= +this.max && +value >= +this.min) {
            this.currentDate = new Date(this.checkValue(value));
        }
        else {
            if (+this.min <= +this.max && !value && +this.currentDate > +this.max) {
                this.currentDate = new Date(this.checkValue(this.max));
            }
            else {
                if (+this.currentDate < +this.min) {
                    this.currentDate = new Date(this.checkValue(this.min));
                }
            }
        }
    };
    CalendarBase.prototype.createHeader = function () {
        var ariaPrevAttrs = {
            'aria-disabled': 'false',
            'aria-label': 'previous month'
        };
        var ariaNextAttrs = {
            'aria-disabled': 'false',
            'aria-label': 'next month'
        };
        var ariaTitleAttrs = {
            'aria-atomic': 'true', 'aria-live': 'assertive', 'aria-label': 'title'
        };
        this.headerElement = this.createElement('div', { className: HEADER });
        var iconContainer = this.createElement('div', { className: ICONCONTAINER });
        this.previousIcon = this.createElement('button', { className: '' + PREVICON, attrs: { type: 'button' } });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.previousIcon, {
            duration: 400,
            selector: '.e-prev',
            isCenterRipple: true
        });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.previousIcon, ariaPrevAttrs);
        this.nextIcon = this.createElement('button', { className: '' + NEXTICON, attrs: { type: 'button' } });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.nextIcon, {
            selector: '.e-next',
            duration: 400,
            isCenterRipple: true
        });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.nextIcon, ariaNextAttrs);
        this.headerTitleElement = this.createElement('div', { className: '' + LINK + ' ' + TITLE });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.headerTitleElement, ariaTitleAttrs);
        this.headerElement.appendChild(this.headerTitleElement);
        this.previousIcon.appendChild(this.createElement('span', { className: '' + PREVSPAN + ' ' + ICON }));
        this.nextIcon.appendChild(this.createElement('span', { className: '' + NEXTSPAN + ' ' + ICON }));
        iconContainer.appendChild(this.previousIcon);
        iconContainer.appendChild(this.nextIcon);
        this.headerElement.appendChild(iconContainer);
        if (this.getModuleName() === 'calendar') {
            this.element.appendChild(this.headerElement);
        }
        else {
            this.calendarElement.appendChild(this.headerElement);
        }
        this.adjustLongHeaderSize();
    };
    CalendarBase.prototype.createContent = function () {
        this.contentElement = this.createElement('div', { className: CONTENT });
        this.table = this.createElement('table', { attrs: { tabIndex: '0', 'role': 'grid', 'aria-activedescendant': '' } });
        if (this.getModuleName() === 'calendar') {
            this.element.appendChild(this.contentElement);
        }
        else {
            this.calendarElement.appendChild(this.contentElement);
        }
        this.contentElement.appendChild(this.table);
        this.createContentHeader();
        this.createContentBody();
        if (this.showTodayButton) {
            this.createContentFooter();
        }
    };
    CalendarBase.prototype.getCultureValues = function () {
        var culShortNames = [];
        var cldrObj;
        var dayFormat = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'days.' : 'days.stand-alone.') + this.dayHeaderFormat.toLowerCase();
        if (this.locale === 'en' || this.locale === 'en-US') {
            cldrObj = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(dayFormat, Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getDefaultDateObject"])()));
        }
        else {
            cldrObj = (this.getCultureObjects(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["cldrData"], '' + this.locale));
        }
        for (var _i = 0, _a = Object.keys(cldrObj); _i < _a.length; _i++) {
            var obj = _a[_i];
            culShortNames.push(Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(obj, cldrObj));
        }
        return culShortNames;
    };
    CalendarBase.prototype.toCapitalize = function (text) {
        return !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(text) && text.length ? text[0].toUpperCase() + text.slice(1) : text;
    };
    CalendarBase.prototype.createContentHeader = function () {
        if (this.getModuleName() === 'calendar') {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element.querySelectorAll('.e-content .e-week-header')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.element.querySelectorAll('.e-content .e-week-header')[0]);
            }
        }
        else {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarElement.querySelectorAll('.e-content .e-week-header')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.calendarElement.querySelectorAll('.e-content .e-week-header')[0]);
            }
        }
        var daysCount = 6;
        var html = '';
        var shortNames;
        if (this.firstDayOfWeek > 6 || this.firstDayOfWeek < 0) {
            this.setProperties({ firstDayOfWeek: 0 }, true);
        }
        this.tableHeadElement = this.createElement('thead', { className: WEEKHEADER });
        if (this.weekNumber) {
            html += '<th class="e-week-number"></th>';
            if (this.getModuleName() === 'calendar') {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], '' + WEEKNUMBER);
            }
            else {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.calendarElement], '' + WEEKNUMBER);
            }
        }
        shortNames = this.shiftArray(((this.getCultureValues().length > 0 && this.getCultureValues())), this.firstDayOfWeek);
        for (var days = 0; days <= daysCount; days++) {
            html += '<th  class="">' + this.toCapitalize(shortNames[days]) + '</th>';
        }
        html = '<tr>' + html + '</tr>';
        this.tableHeadElement.innerHTML = html;
        this.table.appendChild(this.tableHeadElement);
    };
    CalendarBase.prototype.createContentBody = function () {
        if (this.getModuleName() === 'calendar') {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element.querySelectorAll('.e-content tbody')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.element.querySelectorAll('.e-content tbody')[0]);
            }
        }
        else {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarElement.querySelectorAll('.e-content tbody')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.calendarElement.querySelectorAll('.e-content tbody')[0]);
            }
        }
        switch (this.start) {
            case 'Year':
                this.renderYears();
                break;
            case 'Decade':
                this.renderDecades();
                break;
            default:
                this.renderMonths();
        }
    };
    CalendarBase.prototype.updateFooter = function () {
        this.todayElement.textContent = this.l10.getConstant('today');
        this.todayElement.setAttribute('aria-label', this.l10.getConstant('today'));
    };
    CalendarBase.prototype.createContentFooter = function () {
        if (this.showTodayButton) {
            var minimum = new Date(+this.min);
            var maximum = new Date(+this.max);
            var l10nLocale = { today: 'Today' };
            this.globalize = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Internationalization"](this.locale);
            this.l10 = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["L10n"](this.getModuleName(), l10nLocale, this.locale);
            this.todayElement = this.createElement('button', { attrs: { role: 'button' } });
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.todayElement);
            this.updateFooter();
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.todayElement], [BTN, TODAY, FLAT, PRIMARY, CSS]);
            if ((!(+new Date(minimum.setHours(0, 0, 0, 0)) <= +this.todayDate &&
                +this.todayDate <= +new Date(maximum.setHours(0, 0, 0, 0)))) || (this.todayDisabled)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.todayElement], DISABLED);
            }
            this.footer = this.createElement('div', { className: FOOTER });
            this.footer.appendChild(this.todayElement);
            if (this.getModuleName() === 'calendar') {
                this.element.appendChild(this.footer);
            }
            if (this.getModuleName() === 'datepicker') {
                this.calendarElement.appendChild(this.footer);
            }
            if (this.getModuleName() === 'datetimepicker') {
                this.calendarElement.appendChild(this.footer);
            }
            if (!this.todayElement.classList.contains(DISABLED)) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.todayElement, 'click', this.todayButtonClick, this);
            }
        }
    };
    CalendarBase.prototype.wireEvents = function (id, ref, keyConfig, moduleName) {
        if (!(Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && ref)) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.headerTitleElement, 'click', this.navigateTitle, this);
            this.defaultKeyConfigs = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.defaultKeyConfigs, this.keyConfigs);
        }
        else {
            this.element = document.getElementById(id);
            this.defaultKeyConfigs = this.getDefaultKeyConfig();
            this.defaultKeyConfigs = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.defaultKeyConfigs, keyConfig);
            this.blazorRef = ref;
            this.serverModuleName = moduleName;
        }
        if (this.getModuleName() === 'calendar') {
            this.keyboardModule = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["KeyboardEvents"](this.element, {
                eventName: 'keydown',
                keyAction: this.keyActionHandle.bind(this),
                keyConfigs: this.defaultKeyConfigs
            });
        }
        else {
            this.keyboardModule = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["KeyboardEvents"](this.calendarElement, {
                eventName: 'keydown',
                keyAction: this.keyActionHandle.bind(this),
                keyConfigs: this.defaultKeyConfigs
            });
        }
    };
    CalendarBase.prototype.dateWireEvents = function (id, ref, keyConfig, moduleName) {
        this.defaultKeyConfigs = this.getDefaultKeyConfig();
        this.defaultKeyConfigs = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.defaultKeyConfigs, keyConfig);
        this.blazorRef = ref;
        this.serverModuleName = moduleName;
    };
    CalendarBase.prototype.todayButtonClick = function (value) {
        if (this.showTodayButton) {
            if (this.currentView() === this.depth) {
                this.effect = '';
            }
            else {
                this.effect = 'e-zoomin';
            }
            if (this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                this.navigateTo(this.depth, new Date(this.checkValue(value)));
            }
            else {
                this.navigateTo('Month', new Date(this.checkValue(value)));
            }
        }
    };
    CalendarBase.prototype.checkDeviceMode = function (ref) {
        if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].isDevice && Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && ref) {
            // tslint:disable-next-line
            ref.invokeMethodAsync('OnDevice', true);
        }
    };
    // tslint:disable-next-line:max-func-body-length
    CalendarBase.prototype.keyActionHandle = function (e, value, multiSelection) {
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.blazorRef) {
            e.preventDefault();
            if (!this.tableBodyElement) {
                this.element = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(e.target, '.' + 'e-calendar');
                this.tableBodyElement = this.element.querySelector('tbody');
            }
            multiSelection = false;
        }
        var focusedDate = this.tableBodyElement.querySelector('tr td.e-focused-date');
        var selectedDate;
        if (multiSelection) {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(focusedDate) && +value === parseInt(focusedDate.getAttribute('id').split('_')[0], 10)) {
                selectedDate = focusedDate;
            }
            else {
                selectedDate = this.tableBodyElement.querySelector('tr td.e-selected');
            }
        }
        else {
            selectedDate = this.tableBodyElement.querySelector('tr td.e-selected');
        }
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.blazorRef) {
            this.tableBodyElement.focus();
            var targetEle = e.target;
            var args = {
                Action: e.action, Key: e.key, Events: e,
                SelectDate: selectedDate ? selectedDate.id : null,
                FocusedDate: focusedDate ? focusedDate.id : null,
                classList: selectedDate ? selectedDate.classList.toString() : focusedDate ? focusedDate.classList.toString() : 'e-cell',
                Id: focusedDate ? focusedDate.id : selectedDate ? selectedDate.id : null,
                TargetClassList: targetEle.classList.toString()
            };
            // tslint:disable-next-line
            this.blazorRef.invokeMethodAsync('OnCalendarKeyboardEvent', args);
            if (targetEle.classList.contains('e-today')) {
                targetEle.blur();
                this.tableBodyElement.focus();
            }
            if (this.serverModuleName === 'sf.calendars.Calendar') {
                this.tableBodyElement = null;
            }
        }
        else {
            var view = this.getViewNumber(this.currentView());
            var depthValue = this.getViewNumber(this.depth);
            var levelRestrict = (view === depthValue && this.getViewNumber(this.start) >= depthValue);
            this.effect = '';
            switch (e.action) {
                case 'moveLeft':
                    this.KeyboardNavigate(-1, view, e, this.max, this.min);
                    e.preventDefault();
                    break;
                case 'moveRight':
                    this.KeyboardNavigate(1, view, e, this.max, this.min);
                    e.preventDefault();
                    break;
                case 'moveUp':
                    if (view === 0) {
                        this.KeyboardNavigate(-7, view, e, this.max, this.min); // move the current date to the previous seven days.
                    }
                    else {
                        this.KeyboardNavigate(-4, view, e, this.max, this.min); // move the current year to the previous four days.
                    }
                    e.preventDefault();
                    break;
                case 'moveDown':
                    if (view === 0) {
                        this.KeyboardNavigate(7, view, e, this.max, this.min);
                    }
                    else {
                        this.KeyboardNavigate(4, view, e, this.max, this.min);
                    }
                    e.preventDefault();
                    break;
                case 'select':
                    if (e.target === this.todayElement) {
                        this.todayButtonClick(value);
                    }
                    else {
                        var element = !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(focusedDate) ? focusedDate : selectedDate;
                        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(element) && !element.classList.contains(DISABLED)) {
                            if (levelRestrict) {
                                var d = new Date(parseInt('' + (element).id, 0));
                                this.selectDate(e, d, (element));
                            }
                            else {
                                this.contentClick(null, --view, (element), value);
                            }
                        }
                    }
                    break;
                case 'controlUp':
                    this.title();
                    e.preventDefault();
                    break;
                case 'controlDown':
                    if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(focusedDate) || !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selectedDate) && !levelRestrict) {
                        this.contentClick(null, --view, (focusedDate || selectedDate), value);
                    }
                    e.preventDefault();
                    break;
                case 'home':
                    this.currentDate = this.firstDay(this.currentDate);
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    (view === 0) ? this.renderMonths(e) : ((view === 1) ? this.renderYears(e) : this.renderDecades(e));
                    e.preventDefault();
                    break;
                case 'end':
                    this.currentDate = this.lastDay(this.currentDate, view);
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    (view === 0) ? this.renderMonths(e) : ((view === 1) ? this.renderYears(e) : this.renderDecades(e));
                    e.preventDefault();
                    break;
                case 'pageUp':
                    this.addMonths(this.currentDate, -1);
                    this.navigateTo('Month', this.currentDate);
                    e.preventDefault();
                    break;
                case 'pageDown':
                    this.addMonths(this.currentDate, 1);
                    this.navigateTo('Month', this.currentDate);
                    e.preventDefault();
                    break;
                case 'shiftPageUp':
                    this.addYears(this.currentDate, -1);
                    this.navigateTo('Month', this.currentDate);
                    e.preventDefault();
                    break;
                case 'shiftPageDown':
                    this.addYears(this.currentDate, 1);
                    this.navigateTo('Month', this.currentDate);
                    e.preventDefault();
                    break;
                case 'controlHome':
                    this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 0, 1));
                    e.preventDefault();
                    break;
                case 'controlEnd':
                    this.navigateTo('Month', new Date(this.currentDate.getFullYear(), 11, 31));
                    e.preventDefault();
                    break;
            }
            if (this.getModuleName() === 'calendar') {
                this.table.focus();
            }
        }
    };
    CalendarBase.prototype.KeyboardNavigate = function (number, currentView, e, max, min) {
        var date = new Date(this.checkValue(this.currentDate));
        switch (currentView) {
            case 2:
                this.addYears(this.currentDate, number);
                if (this.isMonthYearRange(this.currentDate)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.renderDecades(e);
                }
                else {
                    this.currentDate = date;
                }
                break;
            case 1:
                this.addMonths(this.currentDate, number);
                if (this.calendarMode === 'Gregorian') {
                    if (this.isMonthYearRange(this.currentDate)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                        this.renderYears(e);
                    }
                    else {
                        this.currentDate = date;
                    }
                }
                else {
                    if (this.isMonthYearRange(this.currentDate)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                        this.renderYears(e);
                    }
                    else {
                        this.currentDate = date;
                    }
                }
                break;
            case 0:
                this.addDay(this.currentDate, number, e, max, min);
                if (this.isMinMaxRange(this.currentDate)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.renderMonths(e);
                }
                else {
                    this.currentDate = date;
                }
                break;
        }
    };
    /**
     * Initialize the event handler
     * @private
     */
    CalendarBase.prototype.preRender = function (value) {
        var _this = this;
        this.navigatePreviousHandler = this.navigatePrevious.bind(this);
        this.navigateNextHandler = this.navigateNext.bind(this);
        this.defaultKeyConfigs = this.getDefaultKeyConfig();
        this.navigateHandler = function (e) {
            _this.triggerNavigate(e);
        };
    };
    ;
    CalendarBase.prototype.minMaxDate = function (localDate) {
        var currentDate = new Date(new Date(+localDate).setHours(0, 0, 0, 0));
        var minDate = new Date(new Date(+this.min).setHours(0, 0, 0, 0));
        var maxDate = new Date(new Date(+this.max).setHours(0, 0, 0, 0));
        if (+currentDate === +minDate || +currentDate === +maxDate) {
            if (+localDate < +this.min) {
                localDate = new Date(+this.min);
            }
            if (+localDate > +this.max) {
                localDate = new Date(+this.max);
            }
        }
        return localDate;
    };
    CalendarBase.prototype.renderMonths = function (e, value) {
        var numCells = this.weekNumber ? 8 : 7;
        var tdEles;
        if (this.calendarMode === 'Gregorian') {
            tdEles = this.renderDays(this.currentDate, e, value);
        }
        else {
            tdEles = this.islamicModule.islamicRenderDays(this.currentDate, value);
        }
        this.createContentHeader();
        if (this.calendarMode === 'Gregorian') {
            this.renderTemplate(tdEles, numCells, MONTH, e, value);
        }
        else {
            this.islamicModule.islamicRenderTemplate(tdEles, numCells, MONTH, e, value);
        }
    };
    // tslint:disable-next-line:max-func-body-length
    CalendarBase.prototype.renderDays = function (currentDate, e, value, multiSelection, values) {
        var tdEles = [];
        var cellsCount = 42;
        var localDate = new Date(this.checkValue(currentDate));
        var minMaxDate;
        var numCells = this.weekNumber ? 8 : 7;
        // 8 and 7 denotes the number of columns to be specified.
        var currentMonth = localDate.getMonth();
        this.titleUpdate(currentDate, 'days');
        var d = localDate;
        localDate = new Date(d.getFullYear(), d.getMonth(), 0, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
        while (localDate.getDay() !== this.firstDayOfWeek) {
            this.setStartDate(localDate, -1 * dayMilliSeconds);
        }
        for (var day = 0; day < cellsCount; ++day) {
            var weekEle = this.createElement('td', { className: CELL });
            var weekAnchor = this.createElement('span');
            if (day % 7 === 0 && this.weekNumber) {
                weekAnchor.textContent = '' + this.getWeek(localDate);
                weekEle.appendChild(weekAnchor);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([weekEle], '' + WEEKNUMBER);
                tdEles.push(weekEle);
            }
            minMaxDate = new Date(+localDate);
            localDate = this.minMaxDate(localDate);
            var dateFormatOptions = { type: 'dateTime', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'D' : 'full' };
            var date = this.globalize.parseDate(this.globalize.formatDate(localDate, dateFormatOptions), dateFormatOptions);
            var tdEle = this.dayCell(localDate);
            var title = this.globalize.formatDate(localDate, { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'D' : 'full' });
            var dayLink = this.createElement('span');
            dayLink.textContent = this.globalize.formatDate(localDate, { format: 'd', type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd' });
            var disabled = (this.min > localDate) || (this.max < localDate);
            if (disabled) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OVERLAY);
            }
            else {
                dayLink.setAttribute('title', '' + title);
            }
            if (currentMonth !== localDate.getMonth()) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OTHERMONTH);
            }
            if (localDate.getDay() === 0 || localDate.getDay() === 6) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], WEEKEND);
            }
            tdEle.appendChild(dayLink);
            this.renderDayCellArgs = {
                date: localDate,
                isDisabled: false,
                element: tdEle,
                isOutOfRange: disabled
            };
            var argument = this.renderDayCellArgs;
            this.renderDayCellEvent(argument);
            if (argument.isDisabled) {
                var selectDate = new Date(this.checkValue(value));
                var argsDate = new Date(this.checkValue(argument.date));
                if (multiSelection) {
                    if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values) && values.length > 0) {
                        for (var index = 0; index < values.length; index++) {
                            var localDateString = +new Date(this.globalize.formatDate(argument.date, { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd' }));
                            var tempDateString = +new Date(this.globalize.formatDate(values[index], { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd' }));
                            if (localDateString === tempDateString) {
                                values.splice(index, 1);
                                index = -1;
                            }
                        }
                    }
                }
                else if (selectDate && +selectDate === +argsDate) {
                    this.setProperties({ value: null }, true);
                }
            }
            if (this.renderDayCellArgs.isDisabled && !tdEle.classList.contains(SELECTED)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OVERLAY);
                if (+this.renderDayCellArgs.date === +this.todayDate) {
                    this.todayDisabled = true;
                }
            }
            var otherMnthBool = tdEle.classList.contains(OTHERMONTH);
            var disabledCls = tdEle.classList.contains(DISABLED);
            if (!disabledCls) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.clickHandler, this);
            }
            // to set the value as null while setting the disabled date onProperty change.
            // if (args.isDisabled && +this.value === +args.date) {
            //     this.setProperties({ value: null }, true);
            // }
            if (multiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values) && !disabledCls) {
                for (var tempValue = 0; tempValue < values.length; tempValue++) {
                    var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
                    var formatOptions = { format: this.getFromatStringValue(), type: 'date', skeleton: 'short', calendar: type };
                    var localDateString = this.globalize.formatDate(localDate, formatOptions);
                    var tempDateString = this.globalize.formatDate(values[tempValue], formatOptions);
                    if ((localDateString === tempDateString && this.getDateVal(localDate, values[tempValue]))
                        || (this.getDateVal(localDate, value))) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
                    }
                    else {
                        this.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
                    }
                }
                if (values.length <= 0) {
                    this.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
                }
            }
            else if (!disabledCls && this.getDateVal(localDate, value)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                this.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
            }
            if (date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
                if (date.getFullYear() === new Date().getFullYear()) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], TODAY);
                }
            }
            tdEles.push(this.renderDayCellArgs.element);
            localDate = new Date(+minMaxDate);
            this.addDay(localDate, 1, null, this.max, this.min);
        }
        return tdEles;
    };
    CalendarBase.prototype.updateFocus = function (otherMonth, disabled, localDate, tableElement, currentDate) {
        if (currentDate.getDate() === localDate.getDate() && !otherMonth && !disabled) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tableElement], FOCUSEDDATE);
        }
        else {
            if (currentDate >= this.max && parseInt(tableElement.id, 0) === +this.max && !otherMonth && !disabled) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tableElement], FOCUSEDDATE);
            }
            if (currentDate <= this.min && parseInt(tableElement.id, 0) === +this.min && !otherMonth && !disabled) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tableElement], FOCUSEDDATE);
            }
        }
    };
    CalendarBase.prototype.renderYears = function (e, value) {
        this.removeTableHeadElement();
        var numCells = 4;
        var days;
        var tdEles = [];
        var valueUtil = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value);
        var curDate = new Date(this.checkValue(this.currentDate));
        var mon = curDate.getMonth();
        var yr = curDate.getFullYear();
        var localDate = curDate;
        var curYrs = localDate.getFullYear();
        var minYr = new Date(this.checkValue(this.min)).getFullYear();
        var minMonth = new Date(this.checkValue(this.min)).getMonth();
        var maxYr = new Date(this.checkValue(this.max)).getFullYear();
        var maxMonth = new Date(this.checkValue(this.max)).getMonth();
        localDate.setMonth(0);
        this.titleUpdate(this.currentDate, 'months');
        var disabled = (this.min > localDate) || (this.max < localDate);
        localDate.setDate(1);
        for (var month = 0; month < 12; ++month) {
            var tdEle = this.dayCell(localDate);
            var dayLink = this.createElement('span');
            var localMonth = (value && (value).getMonth() === localDate.getMonth());
            var select = (value && (value).getFullYear() === yr && localMonth);
            dayLink.textContent = this.toCapitalize(this.globalize.formatDate(localDate, {
                format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'MMM' : null, type: 'dateTime', skeleton: 'MMM'
            }));
            if ((this.min && (curYrs < minYr || (month < minMonth && curYrs === minYr))) || (this.max && (curYrs > maxYr || (month > maxMonth && curYrs >= maxYr)))) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
            }
            else if (!valueUtil && select) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                if (localDate.getMonth() === mon && this.currentDate.getMonth() === mon) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], FOCUSEDDATE);
                }
            }
            localDate.setDate(1);
            localDate.setMonth(localDate.getMonth() + 1);
            if (!tdEle.classList.contains(DISABLED)) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.clickHandler, this);
            }
            tdEle.appendChild(dayLink);
            tdEles.push(tdEle);
        }
        this.renderTemplate(tdEles, numCells, YEAR, e, value);
    };
    CalendarBase.prototype.renderDecades = function (e, value) {
        this.removeTableHeadElement();
        var numCells = 4;
        var yearCell = 12;
        var tdEles = [];
        var localDate = new Date(this.checkValue(this.currentDate));
        localDate.setMonth(0);
        localDate.setDate(1);
        var localYr = localDate.getFullYear();
        var startYr = new Date(localDate.setFullYear((localYr - localYr % 10)));
        var endYr = new Date(localDate.setFullYear((localYr - localYr % 10 + (10 - 1))));
        var startFullYr = startYr.getFullYear();
        var endFullYr = endYr.getFullYear();
        var startHdrYr = this.globalize.formatDate(startYr, {
            format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'yyyy' : null, type: 'dateTime', skeleton: 'y'
        });
        var endHdrYr = this.globalize.formatDate(endYr, { format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'yyyy' : null, type: 'dateTime', skeleton: 'y' });
        this.headerTitleElement.textContent = startHdrYr + ' - ' + (endHdrYr);
        var start = new Date(localYr - (localYr % 10) - 1, 0, 1);
        var startYear = start.getFullYear();
        for (var rowIterator = 0; rowIterator < yearCell; ++rowIterator) {
            var year = startYear + rowIterator;
            localDate.setFullYear(year);
            var tdEle = this.dayCell(localDate);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(tdEle, { 'role': 'gridcell' });
            var dayLink = this.createElement('span');
            dayLink.textContent = this.globalize.formatDate(localDate, {
                format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'yyyy' : null, type: 'dateTime', skeleton: 'y'
            });
            if ((year < startFullYr) || (year > endFullYr)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OTHERDECADE);
                if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && localDate.getFullYear() === (value).getFullYear()) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
                }
                if (year < new Date(this.checkValue(this.min)).getFullYear() ||
                    year > new Date(this.checkValue(this.max)).getFullYear()) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
                }
            }
            else if (year < new Date(this.checkValue(this.min)).getFullYear() ||
                year > new Date(this.checkValue(this.max)).getFullYear()) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
            }
            else if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && localDate.getFullYear() === (value).getFullYear()) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                if (localDate.getFullYear() === this.currentDate.getFullYear() && !tdEle.classList.contains(DISABLED)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], FOCUSEDDATE);
                }
            }
            if (!tdEle.classList.contains(DISABLED)) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.clickHandler, this);
            }
            tdEle.appendChild(dayLink);
            tdEles.push(tdEle);
        }
        this.renderTemplate(tdEles, numCells, 'e-decade', e, value);
    };
    CalendarBase.prototype.dayCell = function (localDate) {
        var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
        var dateFormatOptions = { skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'F' : 'full', type: 'dateTime', calendar: type };
        var date = this.globalize.parseDate(this.globalize.formatDate(localDate, dateFormatOptions), dateFormatOptions);
        var value = date.valueOf();
        var attrs = {
            className: CELL, attrs: { 'id': '' + Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('' + value), 'aria-selected': 'false', 'role': 'gridcell' }
        };
        return this.createElement('td', attrs);
    };
    CalendarBase.prototype.firstDay = function (date) {
        var collection = this.currentView() !== 'Decade' ? this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERMONTH + '') :
            this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERDECADE + '');
        if (collection.length) {
            for (var i = 0; i < collection.length; i++) {
                if (!collection[i].classList.contains(DISABLED)) {
                    date = new Date(parseInt(collection[i].id, 0));
                    break;
                }
            }
        }
        return date;
    };
    CalendarBase.prototype.lastDay = function (date, view) {
        var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        if (view !== 2) {
            var timeOffset = Math.abs(lastDate.getTimezoneOffset() - this.firstDay(date).getTimezoneOffset());
            if (timeOffset) {
                lastDate.setHours(this.firstDay(date).getHours() + (timeOffset / 60));
            }
            return this.findLastDay(lastDate);
        }
        else {
            return this.findLastDay(this.firstDay(lastDate));
        }
    };
    ;
    CalendarBase.prototype.checkDateValue = function (value) {
        return (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && value instanceof Date && !isNaN(+value)) ? value : null;
    };
    CalendarBase.prototype.findLastDay = function (date) {
        var collection = this.currentView() === 'Decade' ? this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERDECADE + '') :
            this.tableBodyElement.querySelectorAll('td' + ':not(.' + OTHERMONTH + '');
        if (collection.length) {
            for (var i = collection.length - 1; i >= 0; i--) {
                if (!collection[i].classList.contains(DISABLED)) {
                    date = new Date(parseInt(collection[i].id, 0));
                    break;
                }
            }
        }
        return date;
    };
    CalendarBase.prototype.removeTableHeadElement = function () {
        if (this.getModuleName() === 'calendar') {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element.querySelectorAll('.e-content table thead')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableHeadElement);
            }
        }
        else {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarElement.querySelectorAll('.e-content table thead')[0])) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableHeadElement);
            }
        }
    };
    CalendarBase.prototype.renderTemplate = function (elements, count, classNm, e, value) {
        var view = this.getViewNumber(this.currentView());
        var trEle;
        this.tableBodyElement = this.createElement('tbody');
        this.table.appendChild(this.tableBodyElement);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.contentElement, this.headerElement], [MONTH, DECADE, YEAR]);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.contentElement, this.headerElement], [classNm]);
        var weekNumCell = 41;
        var numberCell = 35;
        var otherMonthCell = 6;
        var row = count;
        var rowIterator = 0;
        for (var dayCell = 0; dayCell < elements.length / count; ++dayCell) {
            trEle = this.createElement('tr', { attrs: { 'role': 'row' } });
            for (rowIterator = 0 + rowIterator; rowIterator < row; rowIterator++) {
                if (!elements[rowIterator].classList.contains('e-week-number') && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(elements[rowIterator].children[0])) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([elements[rowIterator].children[0]], [LINK]);
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(elements[rowIterator].children[0], {
                        duration: 600,
                        isCenterRipple: true
                    });
                }
                trEle.appendChild(elements[rowIterator]);
                if (this.weekNumber && rowIterator === otherMonthCell + 1 && elements[otherMonthCell + 1].classList.contains(OTHERMONTH)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                }
                if (!this.weekNumber && rowIterator === otherMonthCell && elements[otherMonthCell].classList.contains(OTHERMONTH)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                }
                if (this.weekNumber) {
                    if (rowIterator === weekNumCell && elements[weekNumCell].classList.contains(OTHERMONTH)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                    }
                }
                else {
                    if (rowIterator === numberCell && elements[numberCell].classList.contains(OTHERMONTH)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                    }
                }
            }
            row = row + count;
            rowIterator = rowIterator + 0;
            this.tableBodyElement.appendChild(trEle);
        }
        this.table.querySelector('tbody').className = this.effect;
        if (this.calendarMode === 'Gregorian') {
            this.iconHandler();
        }
        else {
            this.islamicModule.islamicIconHandler();
        }
        if (view !== this.getViewNumber(this.currentView()) || (view === 0 && view !== this.getViewNumber(this.currentView()))) {
            this.navigateHandler(e);
        }
        this.setAriaActiveDescendant();
    };
    CalendarBase.prototype.clickHandler = function (e, value) {
        this.clickEventEmitter(e);
        var eve = e.currentTarget;
        var view = this.getViewNumber(this.currentView());
        if (eve.classList.contains(OTHERMONTH)) {
            this.contentClick(e, 0, null, value);
        }
        else if (view === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
            this.contentClick(e, 1, null, value);
        }
        else if (2 === view) {
            this.contentClick(e, 1, null, value);
        }
        else if (!eve.classList.contains(OTHERMONTH) && view === 0) {
            this.selectDate(e, this.getIdValue(e, null), null);
        }
        else {
            this.contentClick(e, 0, eve, value);
        }
        if (this.getModuleName() === 'calendar') {
            this.table.focus();
        }
    };
    // Content click event handler required for extended components
    CalendarBase.prototype.clickEventEmitter = function (e) {
        e.preventDefault();
    };
    CalendarBase.prototype.contentClick = function (e, view, element, value) {
        var currentView = this.getViewNumber(this.currentView());
        var d = this.getIdValue(e, element);
        switch (view) {
            case 0:
                if (currentView === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.currentDate = d;
                    this.effect = ZOOMIN;
                    this.renderMonths(e);
                }
                else {
                    if (this.calendarMode === 'Gregorian') {
                        this.currentDate.setMonth(d.getMonth());
                        if (d.getMonth() > 0 && this.currentDate.getMonth() !== d.getMonth()) {
                            this.currentDate.setDate(0);
                        }
                        this.currentDate.setFullYear(d.getFullYear());
                    }
                    else {
                        this.currentDate = d;
                    }
                    this.effect = ZOOMIN;
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.renderMonths(e);
                }
                break;
            case 1:
                if (currentView === this.getViewNumber(this.depth) && this.getViewNumber(this.start) >= this.getViewNumber(this.depth)) {
                    this.selectDate(e, d, null);
                }
                else {
                    if (this.calendarMode === 'Gregorian') {
                        this.currentDate.setFullYear(d.getFullYear());
                    }
                    else {
                        var islamicDate = this.islamicModule.getIslamicDate(d);
                        this.currentDate = this.islamicModule.toGregorian(islamicDate.year, islamicDate.month, 1);
                    }
                    this.effect = ZOOMIN;
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.renderYears(e);
                }
        }
    };
    CalendarBase.prototype.switchView = function (view, e, multiSelection) {
        switch (view) {
            case 0:
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                this.renderMonths(e);
                if (multiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.tableBodyElement.querySelectorAll('.' + FOCUSEDDATE)[0])) {
                    this.tableBodyElement.querySelectorAll('.' + FOCUSEDDATE)[0].classList.remove(FOCUSEDDATE);
                }
                break;
            case 1:
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                this.renderYears(e);
                break;
            case 2:
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                this.renderDecades(e);
        }
    };
    /**
     * To get component name
     * @private
     */
    CalendarBase.prototype.getModuleName = function () {
        return 'calendar';
    };
    /**

     */
    CalendarBase.prototype.requiredModules = function () {
        var modules = [];
        if (this) {
            modules.push({ args: [this], member: 'islamic' });
        }
        return modules;
    };
    /**
     * Gets the properties to be maintained upon browser refresh.
     * @returns string
     */
    CalendarBase.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Called internally if any of the property value changed.
     * returns void
     * @private
     */
    CalendarBase.prototype.onPropertyChanged = function (newProp, oldProp, multiSelection, values) {
        this.effect = '';
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        if (this.getModuleName() === 'calendar') {
                            this.element.classList.add('e-rtl');
                        }
                        else {
                            this.calendarElement.classList.add('e-rtl');
                        }
                    }
                    else {
                        if (this.getModuleName() === 'calendar') {
                            this.element.classList.remove('e-rtl');
                        }
                        else {
                            this.calendarElement.classList.remove('e-rtl');
                        }
                    }
                    break;
                case 'dayHeaderFormat':
                    this.getCultureValues();
                    this.createContentHeader();
                    this.adjustLongHeaderSize();
                    break;
                case 'min':
                case 'max':
                    this.rangeValidation(this.min, this.max);
                    prop === 'min' ? this.setProperties({ min: this.checkDateValue(new Date(this.checkValue(newProp.min))) }, true) :
                        this.setProperties({ max: this.checkDateValue(new Date(this.checkValue(newProp.max))) }, true);
                    this.setProperties({ start: this.currentView() }, true);
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
                    this.minMaxUpdate();
                    if (multiSelection) {
                        this.validateValues(multiSelection, values);
                    }
                    this.createContentBody();
                    if ((this.todayDate < this.min || this.max < this.todayDate) && (this.footer) && (this.todayElement)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.todayElement);
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.footer);
                        this.todayElement = this.footer = null;
                        this.createContentFooter();
                    }
                    else {
                        if ((this.footer) && (this.todayElement) && this.todayElement.classList.contains('e-disabled')) {
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.todayElement], DISABLED);
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.todayElement);
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.footer);
                            this.todayElement = this.footer = null;
                            this.createContentFooter();
                        }
                    }
                    break;
                case 'start':
                case 'depth':
                case 'weekNumber':
                case 'firstDayOfWeek':
                    this.checkView();
                    this.createContentHeader();
                    this.createContentBody();
                    break;
                case 'locale':
                    this.globalize = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Internationalization"](this.locale);
                    this.createContentHeader();
                    this.createContentBody();
                    this.l10.setLocale(this.locale);
                    this.updateFooter();
                    break;
                case 'showTodayButton':
                    if (newProp.showTodayButton) {
                        this.createContentFooter();
                    }
                    else {
                        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.todayElement) && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.footer)) {
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.todayElement);
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.footer);
                            this.todayElement = this.footer = undefined;
                        }
                    }
                    this.setProperties({ showTodayButton: newProp.showTodayButton }, true);
                    break;
            }
        }
    };
    /**
     * values property updated with considered disabled dates of the calendar.
     */
    CalendarBase.prototype.validateValues = function (multiSelection, values) {
        if (multiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values) && values.length > 0) {
            var copyValues = this.copyValues(values);
            for (var skipIndex = 0; skipIndex < copyValues.length; skipIndex++) {
                var tempValue = copyValues[skipIndex];
                var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
                var tempValueString = void 0;
                if (this.calendarMode === 'Gregorian') {
                    /* tslint:disable-next-line:max-line-length */
                    tempValueString = this.globalize.formatDate(tempValue, { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd' });
                }
                else {
                    /* tslint:disable-next-line:max-line-length */
                    tempValueString = this.globalize.formatDate(tempValue, { type: 'dateTime', skeleton: 'full', calendar: 'islamic' });
                }
                var minFormatOption = { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd', calendar: type };
                var minStringValue = this.globalize.formatDate(this.min, minFormatOption);
                var minString = minStringValue;
                var maxFormatOption = { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'd' : 'yMd', calendar: type };
                var maxStringValue = this.globalize.formatDate(this.max, maxFormatOption);
                var maxString = maxStringValue;
                if (+new Date(tempValueString) < +new Date(minString) ||
                    +new Date(tempValueString) > +new Date(maxString)) {
                    copyValues.splice(skipIndex, 1);
                    skipIndex = -1;
                }
            }
            this.setProperties({ values: copyValues }, true);
        }
    };
    CalendarBase.prototype.setValueUpdate = function () {
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.tableBodyElement)) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.tableBodyElement);
            this.setProperties({ start: this.currentView() }, true);
            this.createContentBody();
        }
    };
    CalendarBase.prototype.copyValues = function (values) {
        var copyValues = [];
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values) && values.length > 0) {
            for (var index = 0; index < values.length; index++) {
                copyValues.push(new Date(+values[index]));
            }
        }
        return copyValues;
    };
    CalendarBase.prototype.titleUpdate = function (date, view) {
        var globalize = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Internationalization"](this.locale);
        var dayFormatOptions;
        var monthFormatOptions;
        var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
        if (this.calendarMode === 'Gregorian') {
            dayFormatOptions = globalize.formatDate(date, { type: 'dateTime', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'y' : 'yMMMM', calendar: type });
            monthFormatOptions = globalize.formatDate(date, {
                format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'yyyy' : null, type: 'dateTime', skeleton: 'y', calendar: type
            });
        }
        else {
            dayFormatOptions = globalize.formatDate(date, { type: 'dateTime', format: 'MMMM y', calendar: type });
            monthFormatOptions = globalize.formatDate(date, { type: 'dateTime', format: 'y', calendar: type });
        }
        switch (view) {
            case 'days':
                this.headerTitleElement.textContent = this.toCapitalize(dayFormatOptions);
                break;
            case 'months':
                this.headerTitleElement.textContent = monthFormatOptions;
        }
    };
    CalendarBase.prototype.setActiveDescendant = function () {
        var id;
        var focusedEle = this.tableBodyElement.querySelector('tr td.e-focused-date');
        var selectedEle = this.tableBodyElement.querySelector('tr td.e-selected');
        var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
        var title;
        var view = this.currentView();
        if (view === 'Month') {
            title = this.globalize.formatDate(this.currentDate, { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'D' : 'full', calendar: type });
        }
        else if (view === 'Year') {
            if (type !== 'islamic') {
                title = this.globalize.formatDate(this.currentDate, { type: 'date', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'y' : 'yMMMM', calendar: type });
            }
            else {
                title = this.globalize.formatDate(this.currentDate, { type: 'date', skeleton: 'GyMMM', calendar: type });
            }
        }
        else {
            title = this.globalize.formatDate(this.currentDate, {
                format: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'yyyy' : null, type: 'date', skeleton: 'y', calendar: type
            });
        }
        if (selectedEle || focusedEle) {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selectedEle)) {
                selectedEle.setAttribute('aria-selected', 'true');
            }
            (focusedEle || selectedEle).setAttribute('aria-label', title);
            id = (focusedEle || selectedEle).getAttribute('id');
        }
        return id;
    };
    CalendarBase.prototype.iconHandler = function () {
        new Date(this.checkValue(this.currentDate)).setDate(1);
        switch (this.currentView()) {
            case 'Month':
                this.previousIconHandler(this.compareMonth(new Date(this.checkValue(this.currentDate)), this.min) < 1);
                this.nextIconHandler(this.compareMonth(new Date(this.checkValue(this.currentDate)), this.max) > -1);
                break;
            case 'Year':
                this.previousIconHandler(this.compareYear(new Date(this.checkValue(this.currentDate)), this.min) < 1);
                this.nextIconHandler(this.compareYear(new Date(this.checkValue(this.currentDate)), this.max) > -1);
                break;
            case 'Decade':
                this.previousIconHandler(this.compareDecade(new Date(this.checkValue(this.currentDate)), this.min) < 1);
                this.nextIconHandler(this.compareDecade(new Date(this.checkValue(this.currentDate)), this.max) > -1);
        }
    };
    /**
     * Destroys the widget.
     * @returns void
     */
    CalendarBase.prototype.destroy = function () {
        if (this.getModuleName() === 'calendar') {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], [ROOT]);
        }
        else {
            if (this.calendarElement) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], [ROOT]);
            }
        }
        if (this.getModuleName() === 'calendar') {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.headerTitleElement, 'click', this.navigateTitle);
            if (this.todayElement) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.todayElement, 'click', this.todayButtonClick);
            }
            this.previousIconHandler(true);
            this.nextIconHandler(true);
            this.keyboardModule.destroy();
            this.element.removeAttribute('data-role');
            (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarEleCopy.getAttribute('tabindex'))) ?
                this.element.setAttribute('tabindex', this.tabIndex) : this.element.removeAttribute('tabindex');
        }
        this.element.innerHTML = '';
        _super.prototype.destroy.call(this);
    };
    CalendarBase.prototype.title = function (e) {
        var currentView = this.getViewNumber(this.currentView());
        this.effect = ZOOMIN;
        this.switchView(++currentView, e);
    };
    CalendarBase.prototype.getViewNumber = function (stringVal) {
        if (stringVal === 'Month') {
            return 0;
        }
        else if (stringVal === 'Year') {
            return 1;
        }
        else {
            return 2;
        }
    };
    CalendarBase.prototype.navigateTitle = function (e) {
        e.preventDefault();
        this.title(e);
        if (this.getModuleName() === 'calendar') {
            this.table.focus();
        }
    };
    CalendarBase.prototype.previous = function () {
        this.effect = '';
        var currentView = this.getViewNumber(this.currentView());
        switch (this.currentView()) {
            case 'Month':
                this.addMonths(this.currentDate, -1);
                this.switchView(currentView);
                break;
            case 'Year':
                this.addYears(this.currentDate, -1);
                this.switchView(currentView);
                break;
            case 'Decade':
                this.addYears(this.currentDate, -10);
                this.switchView(currentView);
                break;
        }
    };
    CalendarBase.prototype.navigatePrevious = function (e) {
        e.preventDefault();
        if (this.calendarMode === 'Gregorian') {
            this.previous();
        }
        else {
            this.islamicModule.islamicPrevious();
        }
        this.triggerNavigate(e);
        if (this.getModuleName() === 'calendar') {
            this.table.focus();
        }
    };
    CalendarBase.prototype.next = function () {
        this.effect = '';
        var currentView = this.getViewNumber(this.currentView());
        switch (this.currentView()) {
            case 'Month':
                this.addMonths(this.currentDate, 1);
                this.switchView(currentView);
                break;
            case 'Year':
                this.addYears(this.currentDate, 1);
                this.switchView(currentView);
                break;
            case 'Decade':
                this.addYears(this.currentDate, 10);
                this.switchView(currentView);
                break;
        }
    };
    CalendarBase.prototype.navigateNext = function (eve) {
        eve.preventDefault();
        if (this.calendarMode === 'Gregorian') {
            this.next();
        }
        else {
            this.islamicModule.islamicNext();
        }
        this.triggerNavigate(eve);
        if (this.getModuleName() === 'calendar') {
            this.table.focus();
        }
    };
    /**
     * This method is used to navigate to the month/year/decade view of the Calendar.
     * @param  {string} view - Specifies the view of the Calendar.
     * @param  {Date} date - Specifies the focused date in a view.
     * @returns void
     */
    CalendarBase.prototype.navigateTo = function (view, date) {
        if (+date >= +this.min && +date <= +this.max) {
            this.currentDate = date;
        }
        if (+date <= +this.min) {
            this.currentDate = new Date(this.checkValue(this.min));
        }
        if (+date >= +this.max) {
            this.currentDate = new Date(this.checkValue(this.max));
        }
        if ((this.getViewNumber(this.depth) >= this.getViewNumber(view))) {
            if ((this.getViewNumber(this.depth) <= this.getViewNumber(this.start))
                || this.getViewNumber(this.depth) === this.getViewNumber(view)) {
                view = this.depth;
            }
        }
        this.switchView(this.getViewNumber(view));
    };
    /**
     * Gets the current view of the Calendar.
     * @returns string
     */
    CalendarBase.prototype.currentView = function () {
        if (this.contentElement.classList.contains(YEAR)) {
            return 'Year';
        }
        else if (this.contentElement.classList.contains(DECADE)) {
            return 'Decade';
        }
        else {
            return 'Month';
        }
    };
    CalendarBase.prototype.getDateVal = function (date, value) {
        return (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && date.getDate() === (value).getDate()
            && date.getMonth() === (value).getMonth() && date.getFullYear() === (value).getFullYear());
    };
    CalendarBase.prototype.getCultureObjects = function (ld, c) {
        var gregorianFormat = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? '.dates.days.' :
            '.dates.calendars.gregorian.days.format.') + this.dayHeaderFormat.toLowerCase();
        var islamicFormat = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? '.dates.days.' :
            '.dates.calendars.islamic.days.format.') + this.dayHeaderFormat.toLowerCase();
        var mainVal = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? '' : 'main.';
        if (this.calendarMode === 'Gregorian') {
            return Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(mainVal + '' + this.locale + gregorianFormat, ld);
        }
        else {
            return Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])('main.' + '' + this.locale + islamicFormat, ld);
        }
    };
    ;
    CalendarBase.prototype.getWeek = function (d) {
        var currentDate = new Date(this.checkValue(d)).valueOf();
        var date = new Date(d.getFullYear(), 0, 1).valueOf();
        var a = (currentDate - date);
        return Math.ceil((((a) / dayMilliSeconds) + new Date(date).getDay() + 1) / 7);
    };
    CalendarBase.prototype.setStartDate = function (date, time) {
        var tzOffset = date.getTimezoneOffset();
        var d = new Date(date.getTime() + time);
        var tzOffsetDiff = d.getTimezoneOffset() - tzOffset;
        date.setTime(d.getTime() + tzOffsetDiff * minutesMilliSeconds);
    };
    CalendarBase.prototype.addMonths = function (date, i) {
        if (this.calendarMode === 'Gregorian') {
            var day = date.getDate();
            date.setDate(1);
            date.setMonth(date.getMonth() + i);
            date.setDate(Math.min(day, this.getMaxDays(date)));
        }
        else {
            var islamicDate = this.islamicModule.getIslamicDate(date);
            this.currentDate = this.islamicModule.toGregorian(islamicDate.year, (islamicDate.month) + i, 1);
        }
    };
    CalendarBase.prototype.addYears = function (date, i) {
        if (this.calendarMode === 'Gregorian') {
            var day = date.getDate();
            date.setDate(1);
            date.setFullYear(date.getFullYear() + i);
            date.setDate(Math.min(day, this.getMaxDays(date)));
        }
        else {
            var islamicDate = this.islamicModule.getIslamicDate(date);
            this.currentDate = this.islamicModule.toGregorian(islamicDate.year + i, (islamicDate.month), 1);
        }
    };
    CalendarBase.prototype.getIdValue = function (e, element) {
        var eve;
        if (e) {
            eve = e.currentTarget;
        }
        else {
            eve = element;
        }
        var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
        var dateFormatOptions = { type: 'dateTime', skeleton: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? 'F' : 'full', calendar: type };
        var dateString = this.globalize.formatDate(new Date(parseInt('' + eve.getAttribute('id'), 0)), dateFormatOptions);
        var date = this.globalize.parseDate(dateString, dateFormatOptions);
        var value = date.valueOf() - date.valueOf() % 1000;
        return new Date(value);
        //return this.globalize.parseDate(dateString, dateFormatOptions);
    };
    CalendarBase.prototype.adjustLongHeaderSize = function () {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], DAYHEADERLONG);
        if (this.dayHeaderFormat === 'Wide') {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.getModuleName() === 'calendar' ? this.element : this.calendarElement], DAYHEADERLONG);
        }
    };
    CalendarBase.prototype.selectDate = function (e, date, node, multiSelection, values) {
        var element = node || e.currentTarget;
        this.isDateSelected = false;
        if (this.currentView() === 'Decade') {
            this.setDateDecade(this.currentDate, date.getFullYear());
        }
        else if (this.currentView() === 'Year') {
            this.setDateYear(this.currentDate, date);
        }
        else {
            if (multiSelection && !this.checkPresentDate(date, values)) {
                var copyValues = this.copyValues(values);
                if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values) && copyValues.length > 0) {
                    copyValues.push(new Date(this.checkValue(date)));
                    this.setProperties({ values: copyValues }, true);
                    this.setProperties({ value: values[values.length - 1] }, true);
                }
                else {
                    this.setProperties({ values: [new Date(this.checkValue(date))] }, true);
                }
            }
            else {
                this.setProperties({ value: new Date(this.checkValue(date)) }, true);
            }
            this.currentDate = new Date(this.checkValue(date));
        }
        var tableBodyElement = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(element, '.' + ROOT);
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(tableBodyElement)) {
            tableBodyElement = this.tableBodyElement;
        }
        if (!multiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(tableBodyElement.querySelector('.' + SELECTED))) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([tableBodyElement.querySelector('.' + SELECTED)], SELECTED);
        }
        if (!multiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(tableBodyElement.querySelector('.' + FOCUSEDDATE))) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([tableBodyElement.querySelector('.' + FOCUSEDDATE)], FOCUSEDDATE);
        }
        if (multiSelection) {
            var copyValues = this.copyValues(values);
            var collection = Array.prototype.slice.call(this.tableBodyElement.querySelectorAll('td'));
            for (var index = 0; index < collection.length; index++) {
                var tempElement = tableBodyElement.querySelectorAll('td' + '.' + FOCUSEDDATE)[0];
                var selectedElement = tableBodyElement.querySelectorAll('td' + '.' + SELECTED)[0];
                if (collection[index] === tempElement) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([collection[index]], FOCUSEDDATE);
                }
                if (collection[index] === selectedElement &&
                    !this.checkPresentDate(new Date(parseInt(selectedElement.getAttribute('id').split('_')[0], 10)), values)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([collection[index]], SELECTED);
                }
            }
            if (element.classList.contains(SELECTED)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([element], SELECTED);
                for (var i = 0; i < copyValues.length; i++) {
                    var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
                    var formatOptions = { format: this.getFromatStringValue(), type: 'date', skeleton: 'short', calendar: type };
                    var localDateString = this.globalize.formatDate(date, formatOptions);
                    var tempDateString = this.globalize.formatDate(copyValues[i], formatOptions);
                    if (localDateString === tempDateString) {
                        var index = copyValues.indexOf(copyValues[i]);
                        copyValues.splice(index, 1);
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], FOCUSEDDATE);
                    }
                }
                this.setProperties({ values: copyValues }, true);
            }
            else {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], SELECTED);
            }
        }
        else {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], SELECTED);
        }
        this.isDateSelected = true;
    };
    CalendarBase.prototype.getFromatStringValue = function () {
        return Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ?
            // tslint:disable-next-line
            'M' + Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getDefaultDateObject"])().dateSeperator + 'd' + Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getDefaultDateObject"])().dateSeperator + 'yy'
            : null;
    };
    CalendarBase.prototype.checkPresentDate = function (dates, values) {
        var previousValue = false;
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(values)) {
            for (var checkPrevious = 0; checkPrevious < values.length; checkPrevious++) {
                var type = (this.calendarMode === 'Gregorian') ? 'gregorian' : 'islamic';
                /* tslint:disable-next-line:max-line-length */
                var localDateString = this.globalize.formatDate(dates, {
                    format: this.getFromatStringValue(), type: 'date', skeleton: 'short', calendar: type
                });
                /* tslint:disable-next-line:max-line-length */
                var tempDateString = this.globalize.formatDate(values[checkPrevious], {
                    format: this.getFromatStringValue(), type: 'date', skeleton: 'short', calendar: type
                });
                if (localDateString === tempDateString) {
                    previousValue = true;
                }
            }
        }
        return previousValue;
    };
    CalendarBase.prototype.setAriaActiveDescendant = function () {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.table, {
            'aria-activedescendant': '' + this.setActiveDescendant()
        });
    };
    CalendarBase.prototype.previousIconHandler = function (disabled) {
        if (disabled) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.previousIcon, 'click', this.navigatePreviousHandler);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.previousIcon], '' + DISABLED);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.previousIcon], '' + OVERLAY);
            this.previousIcon.setAttribute('aria-disabled', 'true');
        }
        else {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.previousIcon, 'click', this.navigatePreviousHandler);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.previousIcon], '' + DISABLED);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.previousIcon], '' + OVERLAY);
            this.previousIcon.setAttribute('aria-disabled', 'false');
        }
    };
    CalendarBase.prototype.renderDayCellEvent = function (args) {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.renderDayCellArgs, { name: 'renderDayCell' });
        this.trigger('renderDayCell', args);
    };
    CalendarBase.prototype.navigatedEvent = function (eve) {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.navigatedArgs, { name: 'navigated', event: eve });
        this.trigger('navigated', this.navigatedArgs);
    };
    CalendarBase.prototype.triggerNavigate = function (event) {
        this.navigatedArgs = { view: this.currentView(), date: this.currentDate };
        this.navigatedEvent(event);
    };
    CalendarBase.prototype.nextIconHandler = function (disabled) {
        if (disabled) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.nextIcon, 'click', this.navigateNextHandler);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.nextIcon], DISABLED);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.nextIcon], OVERLAY);
            this.nextIcon.setAttribute('aria-disabled', 'true');
        }
        else {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.nextIcon, 'click', this.navigateNextHandler);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.nextIcon], DISABLED);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.nextIcon], OVERLAY);
            this.nextIcon.setAttribute('aria-disabled', 'false');
        }
    };
    CalendarBase.prototype.compare = function (startDate, endDate, modifier) {
        var start = endDate.getFullYear();
        var end;
        var result;
        end = start;
        result = 0;
        if (modifier) {
            start = start - start % modifier;
            end = start - start % modifier + modifier - 1;
        }
        if (startDate.getFullYear() > end) {
            result = 1;
        }
        else if (startDate.getFullYear() < start) {
            result = -1;
        }
        return result;
    };
    CalendarBase.prototype.isMinMaxRange = function (date) {
        return +date >= +this.min && +date <= +this.max;
    };
    CalendarBase.prototype.isMonthYearRange = function (date) {
        if (this.calendarMode === 'Gregorian') {
            return date.getMonth() >= this.min.getMonth()
                && date.getFullYear() >= this.min.getFullYear()
                && date.getMonth() <= this.max.getMonth()
                && date.getFullYear() <= this.max.getFullYear();
        }
        else {
            var islamicDate = this.islamicModule.getIslamicDate(date);
            return islamicDate.month >= (this.islamicModule.getIslamicDate(new Date(1944, 1, 18))).month
                && islamicDate.year >= (this.islamicModule.getIslamicDate(new Date(1944, 1, 18))).year
                && islamicDate.month <= (this.islamicModule.getIslamicDate(new Date(2069, 1, 16))).month
                && islamicDate.year <= (this.islamicModule.getIslamicDate(new Date(2069, 1, 16))).year;
        }
    };
    CalendarBase.prototype.compareYear = function (start, end) {
        return this.compare(start, end, 0);
    };
    CalendarBase.prototype.compareDecade = function (start, end) {
        return this.compare(start, end, 10);
    };
    CalendarBase.prototype.shiftArray = function (array, i) {
        return array.slice(i).concat(array.slice(0, i));
    };
    CalendarBase.prototype.addDay = function (date, i, e, max, min) {
        var column = i;
        var value = new Date(+date);
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.tableBodyElement) && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e)) {
            while (this.findNextTD(new Date(+date), column, max, min)) {
                column += i;
            }
            var rangeValue = new Date(value.setDate(value.getDate() + column));
            column = (+rangeValue > +max || +rangeValue < +min) ? column === i ? i - i : i : column;
        }
        date.setDate(date.getDate() + column);
    };
    CalendarBase.prototype.findNextTD = function (date, column, max, min) {
        var value = new Date(date.setDate(date.getDate() + column));
        var collection = [];
        var isDisabled = false;
        if ((!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) && value.getMonth()) === (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.currentDate) && this.currentDate.getMonth())) {
            var tdEles = void 0;
            if (this.calendarMode === 'Gregorian') {
                tdEles = this.renderDays(value, null);
            }
            else {
                tdEles = this.islamicModule.islamicRenderDays(this.currentDate, value);
            }
            collection = tdEles.filter(function (element) {
                return element.classList.contains(DISABLED);
            });
        }
        else {
            collection = this.tableBodyElement.querySelectorAll('td.' + DISABLED);
        }
        if (+value <= (+(max)) && +value >= (+(min))) {
            if (collection.length) {
                for (var i = 0; i < collection.length; i++) {
                    isDisabled = (+value === +new Date(parseInt(collection[i].id, 0))) ? true : false;
                    if (isDisabled) {
                        break;
                    }
                }
            }
        }
        return isDisabled;
    };
    CalendarBase.prototype.getMaxDays = function (d) {
        var date;
        var month;
        var tmpDate = new Date(this.checkValue(d));
        date = 28;
        month = tmpDate.getMonth();
        while (tmpDate.getMonth() === month) {
            ++date;
            tmpDate.setDate(date);
        }
        return date - 1;
    };
    CalendarBase.prototype.setDateDecade = function (date, year) {
        date.setFullYear(year);
        this.setProperties({ value: new Date(this.checkValue(date)) }, true);
    };
    ;
    CalendarBase.prototype.setDateYear = function (date, value) {
        date.setFullYear(value.getFullYear(), value.getMonth(), date.getDate());
        if (value.getMonth() !== date.getMonth()) {
            date.setDate(0);
            this.currentDate = new Date(this.checkValue(value));
        }
        this.setProperties({ value: new Date(this.checkValue(date)) }, true);
    };
    CalendarBase.prototype.compareMonth = function (start, end) {
        var result;
        if (start.getFullYear() > end.getFullYear()) {
            result = 1;
        }
        else if (start.getFullYear() < end.getFullYear()) {
            result = -1;
        }
        else {
            result = start.getMonth() === end.getMonth() ? 0 : start.getMonth() > end.getMonth() ? 1 : -1;
        }
        return result;
    };
    CalendarBase.prototype.checkValue = function (inValue) {
        if (inValue instanceof Date) {
            return (inValue.toUTCString());
        }
        else {
            return ('' + inValue);
        }
    };
    CalendarBase.prototype.checkView = function () {
        if (this.start !== 'Decade' && this.start !== 'Year') {
            this.setProperties({ start: 'Month' }, true);
        }
        if (this.depth !== 'Decade' && this.depth !== 'Year') {
            this.setProperties({ depth: 'Month' }, true);
        }
        if (this.getViewNumber(this.depth) > this.getViewNumber(this.start)) {
            this.setProperties({ depth: 'Month' }, true);
        }
    };
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(new Date(1900, 0, 1))
    ], CalendarBase.prototype, "min", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(new Date(2099, 11, 31))
    ], CalendarBase.prototype, "max", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], CalendarBase.prototype, "firstDayOfWeek", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Gregorian')
    ], CalendarBase.prototype, "calendarMode", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Month')
    ], CalendarBase.prototype, "start", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Month')
    ], CalendarBase.prototype, "depth", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CalendarBase.prototype, "weekNumber", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], CalendarBase.prototype, "showTodayButton", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Short')
    ], CalendarBase.prototype, "dayHeaderFormat", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CalendarBase.prototype, "enablePersistence", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], CalendarBase.prototype, "keyConfigs", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], CalendarBase.prototype, "serverTimezoneOffset", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CalendarBase.prototype, "created", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CalendarBase.prototype, "destroyed", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CalendarBase.prototype, "navigated", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CalendarBase.prototype, "renderDayCell", void 0);
    CalendarBase = __decorate([
        _ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], CalendarBase);
    return CalendarBase;
}(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * Represents the Calendar component that allows the user to select a date.
 * ```html
 * <div id="calendar"/>
 * ```
 * ```typescript
 * <script>
 *   var calendarObj = new Calendar({ value: new Date() });
 *   calendarObj.appendTo("#calendar");
 * </script>
 * ```
 */
var Calendar = /** @__PURE__ @class */ (function (_super) {
    __extends(Calendar, _super);
    /**
     * Initialized new instance of Calendar Class.
     * Constructor for creating the widget
     * @param  {CalendarModel} options?
     * @param  {string|HTMLElement} element?
     */
    function Calendar(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * To Initialize the control rendering.
     * @returns void
     * @private
     */
    Calendar.prototype.render = function () {
        if (this.calendarMode === 'Islamic' && this.islamicModule === undefined) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Requires the injectable Islamic modules to render Calendar in Islamic mode');
        }
        if (this.isMultiSelection && typeof this.values === 'object' && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.values) && this.values.length > 0) {
            var tempValues = [];
            var copyValues = [];
            for (var limit = 0; limit < this.values.length; limit++) {
                if (tempValues.indexOf(+this.values[limit]) === -1) {
                    tempValues.push(+this.values[limit]);
                    copyValues.push(this.values[limit]);
                }
            }
            this.setProperties({ values: copyValues }, true);
            for (var index = 0; index < this.values.length; index++) {
                if (!this.checkDateValue(this.values[index])) {
                    if (typeof (this.values[index]) === 'string' && this.checkDateValue(new Date(this.checkValue(this.values[index])))) {
                        var copyDate = new Date(this.checkValue(this.values[index]));
                        this.values.splice(index, 1);
                        this.values.splice(index, 0, copyDate);
                    }
                    else {
                        this.values.splice(index, 1);
                    }
                }
            }
            this.setProperties({ value: this.values[this.values.length - 1] }, true);
            this.previousValues = this.values.length;
        }
        this.validateDate();
        this.minMaxUpdate();
        _super.prototype.render.call(this);
        if (this.getModuleName() === 'calendar') {
            var form = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.element, 'form');
            if (form) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(form, 'reset', this.formResetHandler.bind(this));
            }
            this.setTimeZone(this.serverTimezoneOffset);
        }
        this.renderComplete();
    };
    Calendar.prototype.isDayLightSaving = function () {
        var secondOffset = new Date(this.value.getFullYear(), 6, 1).getTimezoneOffset();
        var firstOffset = new Date(this.value.getFullYear(), 0, 1).getTimezoneOffset();
        return (this.value.getTimezoneOffset() < Math.max(firstOffset, secondOffset));
    };
    Calendar.prototype.setTimeZone = function (offsetValue) {
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.serverTimezoneOffset) && this.value) {
            var serverTimezoneDiff = offsetValue;
            var clientTimeZoneDiff = new Date().getTimezoneOffset() / 60;
            var timeZoneDiff = serverTimezoneDiff + clientTimeZoneDiff;
            timeZoneDiff = this.isDayLightSaving() ? timeZoneDiff-- : timeZoneDiff;
            this.value = new Date(this.value.getTime() + (timeZoneDiff * 60 * 60 * 1000));
        }
    };
    Calendar.prototype.formResetHandler = function () {
        this.setProperties({ value: null }, true);
    };
    Calendar.prototype.validateDate = function () {
        if (typeof this.value === 'string') {
            this.setProperties({ value: this.checkDateValue(new Date(this.checkValue(this.value))) }, true); // persist the value property.
        }
        _super.prototype.validateDate.call(this, this.value);
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) && this.min <= this.max && this.value >= this.min && this.value <= this.max) {
            this.currentDate = new Date(this.checkValue(this.value));
        }
        if (isNaN(+this.value)) {
            this.setProperties({ value: null }, true);
        }
    };
    Calendar.prototype.minMaxUpdate = function () {
        if (this.getModuleName() === 'calendar') {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) && this.value <= this.min && this.min <= this.max) {
                this.setProperties({ value: this.min }, true);
                this.changedArgs = { value: this.value };
            }
            else {
                if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) && this.value >= this.max && this.min <= this.max) {
                    this.setProperties({ value: this.max }, true);
                    this.changedArgs = { value: this.value };
                }
            }
        }
        if (this.getModuleName() !== 'calendar' && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) && this.value < this.min && this.min <= this.max) {
                _super.prototype.minMaxUpdate.call(this, this.min);
            }
            else {
                if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value) && this.value > this.max && this.min <= this.max) {
                    _super.prototype.minMaxUpdate.call(this, this.max);
                }
            }
        }
        else {
            _super.prototype.minMaxUpdate.call(this, this.value);
        }
    };
    Calendar.prototype.generateTodayVal = function (value) {
        var tempValue = new Date();
        if (value) {
            tempValue.setHours(value.getHours());
            tempValue.setMinutes(value.getMinutes());
            tempValue.setSeconds(value.getSeconds());
            tempValue.setMilliseconds(value.getMilliseconds());
        }
        else {
            tempValue = new Date(tempValue.getFullYear(), tempValue.getMonth(), tempValue.getDate(), 0, 0, 0, 0);
        }
        return tempValue;
    };
    Calendar.prototype.todayButtonClick = function () {
        if (this.showTodayButton) {
            var tempValue = this.generateTodayVal(this.value);
            this.setProperties({ value: tempValue }, true);
            if (this.isMultiSelection) {
                var copyValues = this.copyValues(this.values);
                if (!_super.prototype.checkPresentDate.call(this, tempValue, this.values)) {
                    copyValues.push(tempValue);
                    this.setProperties({ values: copyValues });
                }
            }
            _super.prototype.todayButtonClick.call(this, new Date(+this.value));
        }
    };
    Calendar.prototype.keyActionHandle = function (e) {
        _super.prototype.keyActionHandle.call(this, e, this.value, this.isMultiSelection);
    };
    /**
     * Initialize the event handler
     * @private
     */
    Calendar.prototype.preRender = function () {
        var _this = this;
        this.changeHandler = function (e) {
            _this.triggerChange(e);
        };
        this.checkView();
        _super.prototype.preRender.call(this, this.value);
    };
    ;
    /**

     */
    Calendar.prototype.createContent = function () {
        this.previousDate = this.value;
        this.previousDateTime = this.value;
        _super.prototype.createContent.call(this);
    };
    Calendar.prototype.minMaxDate = function (localDate) {
        return _super.prototype.minMaxDate.call(this, localDate);
    };
    Calendar.prototype.renderMonths = function (e) {
        _super.prototype.renderMonths.call(this, e, this.value);
    };
    Calendar.prototype.renderDays = function (currentDate, e) {
        var tempDays = _super.prototype.renderDays.call(this, currentDate, e, this.value, this.isMultiSelection, this.values);
        if (this.isMultiSelection) {
            _super.prototype.validateValues.call(this, this.isMultiSelection, this.values);
        }
        return tempDays;
    };
    Calendar.prototype.renderYears = function (e) {
        if (this.calendarMode === 'Gregorian') {
            _super.prototype.renderYears.call(this, e, this.value);
        }
        else {
            this.islamicModule.islamicRenderYears(e, this.value);
        }
    };
    Calendar.prototype.renderDecades = function (e) {
        if (this.calendarMode === 'Gregorian') {
            _super.prototype.renderDecades.call(this, e, this.value);
        }
        else {
            this.islamicModule.islamicRenderDecade(e, this.value);
        }
    };
    Calendar.prototype.renderTemplate = function (elements, count, classNm, e) {
        if (this.calendarMode === 'Gregorian') {
            _super.prototype.renderTemplate.call(this, elements, count, classNm, e, this.value);
        }
        else {
            this.islamicModule.islamicRenderTemplate(elements, count, classNm, e, this.value);
        }
        this.changedArgs = { value: this.value, values: this.values };
        this.changeHandler();
    };
    Calendar.prototype.clickHandler = function (e) {
        var eve = e.currentTarget;
        this.isPopupClicked = true;
        if (eve.classList.contains(OTHERMONTH)) {
            if (this.isMultiSelection) {
                var copyValues = this.copyValues(this.values);
                copyValues.push(this.getIdValue(e, null));
                this.setProperties({ values: copyValues }, true);
                this.setProperties({ value: this.values[this.values.length - 1] }, true);
            }
            else {
                this.setProperties({ value: this.getIdValue(e, null) }, true);
            }
        }
        var storeView = this.currentView();
        _super.prototype.clickHandler.call(this, e, this.value);
        if (this.isMultiSelection && this.currentDate !== this.value &&
            !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.tableBodyElement.querySelectorAll('.' + FOCUSEDDATE)[0]) && storeView === 'Year') {
            this.tableBodyElement.querySelectorAll('.' + FOCUSEDDATE)[0].classList.remove(FOCUSEDDATE);
        }
    };
    Calendar.prototype.switchView = function (view, e) {
        _super.prototype.switchView.call(this, view, e, this.isMultiSelection);
    };
    /**
     * To get component name
     * @private
     */
    Calendar.prototype.getModuleName = function () {
        _super.prototype.getModuleName.call(this);
        return 'calendar';
    };
    /**
     * Gets the properties to be maintained upon browser refresh.
     * @returns string
     */
    Calendar.prototype.getPersistData = function () {
        _super.prototype.getPersistData.call(this);
        var keyEntity = ['value', 'values'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Called internally if any of the property value changed.
     * returns void
     * @private
     */
    Calendar.prototype.onPropertyChanged = function (newProp, oldProp) {
        this.effect = '';
        this.rangeValidation(this.min, this.max);
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'value':
                    if (this.isDateSelected) {
                        if (typeof newProp.value === 'string') {
                            this.setProperties({ value: new Date(this.checkValue(newProp.value)) }, true);
                        }
                        else {
                            newProp.value = new Date(this.checkValue(newProp.value));
                        }
                        if (isNaN(+this.value)) {
                            this.setProperties({ value: oldProp.value }, true);
                        }
                        this.update();
                    }
                    break;
                case 'values':
                    if (this.isDateSelected) {
                        if (typeof newProp.values === 'string' || typeof newProp.values === 'number') {
                            this.setProperties({ values: null }, true);
                        }
                        else {
                            var copyValues = this.copyValues(this.values);
                            for (var index = 0; index < copyValues.length; index++) {
                                var tempDate = copyValues[index];
                                if (this.checkDateValue(tempDate) && !_super.prototype.checkPresentDate.call(this, tempDate, copyValues)) {
                                    copyValues.push(tempDate);
                                }
                            }
                            this.setProperties({ values: copyValues }, true);
                            if (this.values.length > 0) {
                                this.setProperties({ value: newProp.values[newProp.values.length - 1] }, true);
                            }
                        }
                        this.validateValues(this.isMultiSelection, this.values);
                        this.update();
                    }
                    break;
                case 'isMultiSelection':
                    if (this.isDateSelected) {
                        this.setProperties({ isMultiSelection: newProp.isMultiSelection }, true);
                        this.update();
                    }
                    break;
                default:
                    _super.prototype.onPropertyChanged.call(this, newProp, oldProp, this.isMultiSelection, this.values);
            }
        }
    };
    /**
     * Destroys the widget.
     * @returns void
     */
    Calendar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.getModuleName() === 'calendar') {
            var form = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.element, 'form');
            if (form) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(form, 'reset', this.formResetHandler.bind(this));
            }
        }
    };
    /**
     * This method is used to navigate to the month/year/decade view of the Calendar.
     * @param  {string} view - Specifies the view of the Calendar.
     * @param  {Date} date - Specifies the focused date in a view.
     * @returns void

     */
    Calendar.prototype.navigateTo = function (view, date) {
        this.minMaxUpdate();
        _super.prototype.navigateTo.call(this, view, date);
    };
    /**
     * Gets the current view of the Calendar.
     * @returns string

     */
    Calendar.prototype.currentView = function () {
        return _super.prototype.currentView.call(this);
    };
    /**
     * This method is used to add the single or multiple dates to the values property of the Calendar.
     * @param  {Date || Date[]} dates - Specifies the date or dates to be added to the values property of the Calendar.
     * @returns void

     */
    Calendar.prototype.addDate = function (dates) {
        if (typeof dates !== 'string' && typeof dates !== 'number') {
            var copyValues = this.copyValues(this.values);
            if (typeof dates === 'object' && (dates).length > 0) {
                var tempDates = dates;
                for (var i = 0; i < tempDates.length; i++) {
                    if (this.checkDateValue(tempDates[i]) && !_super.prototype.checkPresentDate.call(this, tempDates[i], copyValues)) {
                        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(copyValues) && copyValues.length > 0) {
                            copyValues.push(tempDates[i]);
                        }
                        else {
                            copyValues = [new Date(+tempDates[i])];
                        }
                    }
                }
            }
            else {
                if (this.checkDateValue(dates) && !_super.prototype.checkPresentDate.call(this, dates, copyValues)) {
                    if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(copyValues) && copyValues.length > 0) {
                        copyValues.push((dates));
                    }
                    else {
                        copyValues = [new Date(+dates)];
                    }
                }
            }
            this.setProperties({ values: copyValues }, true);
            if (this.isMultiSelection) {
                this.setProperties({ value: this.values[this.values.length - 1] }, true);
            }
            this.validateValues(this.isMultiSelection, copyValues);
            this.update();
            this.changedArgs = { value: this.value, values: this.values };
            this.changeHandler();
        }
    };
    /**
     * This method is used to remove the single or multiple dates from the values property of the Calendar.
     * @param  {Date || Date[]} dates - Specifies the date or dates which need to be removed from the values property of the Calendar.
     * @returns void

     */
    Calendar.prototype.removeDate = function (dates) {
        if (typeof dates !== 'string' && typeof dates !== 'number' && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.values) && this.values.length > 0) {
            var copyValues = this.copyValues(this.values);
            if (typeof dates === 'object' && ((dates).length > 0)) {
                var tempDates = dates;
                for (var index = 0; index < tempDates.length; index++) {
                    for (var i = 0; i < copyValues.length; i++) {
                        if (+copyValues[i] === +tempDates[index]) {
                            copyValues.splice(i, 1);
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < copyValues.length; i++) {
                    if (+copyValues[i] === +dates) {
                        copyValues.splice(i, 1);
                    }
                }
            }
            this.setProperties({ values: copyValues }, false);
            this.update();
            if (this.isMultiSelection) {
                this.setProperties({ value: this.values[this.values.length - 1] }, true);
            }
            this.changedArgs = { value: this.value, values: this.values };
            this.changeHandler();
        }
    };
    Calendar.prototype.update = function () {
        this.validateDate();
        this.minMaxUpdate();
        _super.prototype.setValueUpdate.call(this);
    };
    Calendar.prototype.selectDate = function (e, date, element) {
        _super.prototype.selectDate.call(this, e, date, element, this.isMultiSelection, this.values);
        if (this.isMultiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.values) && this.values.length > 0) {
            this.setProperties({ value: this.values[this.values.length - 1] }, true);
        }
        this.changedArgs = { value: this.value, values: this.values };
        this.changeHandler(e);
    };
    Calendar.prototype.changeEvent = function (e) {
        if ((this.value && this.value.valueOf()) !== (this.previousDate && +this.previousDate.valueOf())
            || this.isMultiSelection) {
            this.trigger('change', this.changedArgs);
            this.previousDate = new Date(+this.value);
        }
    };
    Calendar.prototype.triggerChange = function (e) {
        this.changedArgs.event = e || null;
        this.changedArgs.isInteracted = !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(e);
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.value)) {
            this.setProperties({ value: this.value }, true);
        }
        if (!this.isMultiSelection && +this.value !== Number.NaN && (+this.value !== +this.previousDate || this.previousDate == null
            && !isNaN(+this.value))) {
            this.changeEvent(e);
        }
        else if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.values) && this.previousValues !== this.values.length) {
            this.changeEvent(e);
            this.previousValues = this.values.length;
        }
    };
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], Calendar.prototype, "value", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], Calendar.prototype, "values", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Calendar.prototype, "isMultiSelection", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], Calendar.prototype, "change", void 0);
    Calendar = __decorate([
        _ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], Calendar);
    return Calendar;
}(CalendarBase));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/index.js":
/*!*****************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/index.js ***!
  \*****************************************************************************/
/*! exports provided: CalendarBase, Calendar, Islamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarBase", function() { return _calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _calendar__WEBPACK_IMPORTED_MODULE_0__["Calendar"]; });

/* harmony import */ var _islamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./islamic */ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/islamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Islamic", function() { return _islamic__WEBPACK_IMPORTED_MODULE_1__["Islamic"]; });

/**
 * Calendar modules
 */




/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/islamic.js":
/*!*******************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-calendars/calendar/islamic.js ***!
  \*******************************************************************************/
/*! exports provided: Islamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Islamic", function() { return Islamic; });
/* harmony import */ var _ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ej2-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js");
/**
 *
 */





//class constant defination.
var OTHERMONTH = 'e-other-month';
var YEAR = 'e-year';
var MONTH = 'e-month';
var DECADE = 'e-decade';
var DISABLED = 'e-disabled';
var OVERLAY = 'e-overlay';
var WEEKEND = 'e-weekend';
var WEEKNUMBER = 'e-week-number';
var SELECTED = 'e-selected';
var FOCUSEDDATE = 'e-focused-date';
var OTHERMONTHROW = 'e-month-hide';
var TODAY = 'e-today';
var LINK = 'e-day';
var CELL = 'e-cell';
var dayMilliSeconds = 86400000;
var minDecade = 2060;
var maxDecade = 2069;
var Islamic = /** @__PURE__ @class */ (function () {
    function Islamic(instance) {
        this.calendarInstance = instance;
    }
    Islamic.prototype.getModuleName = function () {
        return 'islamic';
    };
    Islamic.prototype.islamicTitleUpdate = function (date, view) {
        var globalize = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Internationalization"](this.calendarInstance.locale);
        switch (view) {
            case 'days':
                /* tslint:disable-next-line:max-line-length */
                this.calendarInstance.headerTitleElement.textContent = globalize.formatDate(date, { type: 'dateTime', format: 'MMMMyyyy', calendar: 'islamic' });
                break;
            case 'months':
                /* tslint:disable-next-line:max-line-length */
                this.calendarInstance.headerTitleElement.textContent = globalize.formatDate(date, { type: 'dateTime', format: 'yyyy', calendar: 'islamic' });
        }
    };
    /* tslint:disable-next-line:max-line-length */
    // tslint:disable-next-line:max-func-body-length
    Islamic.prototype.islamicRenderDays = function (currentDate, value, multiSelection, values) {
        var tdEles = [];
        var cellsCount = 42;
        var localDate = new Date(this.islamicInValue(currentDate));
        var minMaxDate;
        var numCells = this.calendarInstance.weekNumber ? 8 : 7;
        // 8 and 7 denotes the number of columns to be specified.
        this.islamicTitleUpdate(currentDate, 'days');
        /* tslint:disable-next-line:no-any */
        var islamicDate = this.getIslamicDate(localDate);
        var gregorianObject = this.toGregorian(islamicDate.year, islamicDate.month, 1);
        var currentMonth = islamicDate.month;
        localDate = gregorianObject;
        while (localDate.getDay() !== this.calendarInstance.firstDayOfWeek) {
            this.calendarInstance.setStartDate(localDate, -1 * dayMilliSeconds);
        }
        for (var day = 0; day < cellsCount; ++day) {
            var weekEle = this.calendarInstance.createElement('td', { className: CELL });
            var weekAnchor = this.calendarInstance.createElement('span');
            if (day % 7 === 0 && this.calendarInstance.weekNumber) {
                weekAnchor.textContent = '' + this.calendarInstance.getWeek(localDate);
                weekEle.appendChild(weekAnchor);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([weekEle], '' + WEEKNUMBER);
                tdEles.push(weekEle);
            }
            minMaxDate = new Date(+localDate);
            localDate = this.calendarInstance.minMaxDate(localDate);
            /* tslint:disable-next-line:max-line-length */
            var dateFormatOptions = { type: 'dateTime', skeleton: 'full', calendar: 'islamic' };
            var date = this.calendarInstance.globalize.parseDate(this.calendarInstance.globalize.formatDate(localDate, dateFormatOptions), dateFormatOptions);
            var tdEle = this.islamicDayCell(localDate);
            /* tslint:disable-next-line:max-line-length */
            var title = this.calendarInstance.globalize.formatDate(localDate, { type: 'date', skeleton: 'full', calendar: 'islamic' });
            var dayLink = this.calendarInstance.createElement('span');
            /* tslint:disable-next-line:max-line-length */
            dayLink.textContent = this.calendarInstance.globalize.formatDate(localDate, { type: 'date', skeleton: 'd', calendar: 'islamic' });
            var disabled = (this.calendarInstance.min > localDate) || (this.calendarInstance.max < localDate);
            if (disabled) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OVERLAY);
            }
            else {
                dayLink.setAttribute('title', '' + title);
            }
            /* tslint:disable-next-line:no-any */
            var hijriMonthObject = this.getIslamicDate(localDate);
            if (currentMonth !== hijriMonthObject.month) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OTHERMONTH);
            }
            if (localDate.getDay() === 0 || localDate.getDay() === 6) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], WEEKEND);
            }
            tdEle.appendChild(dayLink);
            this.calendarInstance.renderDayCellArgs = {
                date: localDate,
                isDisabled: false,
                element: tdEle,
                isOutOfRange: disabled
            };
            var argument = this.calendarInstance.renderDayCellArgs;
            this.calendarInstance.renderDayCellEvent(argument);
            if (argument.isDisabled) {
                if (this.calendarInstance.isMultiSelection) {
                    if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarInstance.values) && this.calendarInstance.values.length > 0) {
                        for (var index = 0; index < values.length; index++) {
                            /* tslint:disable-next-line:max-line-length */
                            var localDateString = +new Date(this.calendarInstance.globalize.formatDate(argument.date, { type: 'date', skeleton: 'yMd', calendar: 'islamic' }));
                            /* tslint:disable-next-line:max-line-length */
                            var tempDateString = +new Date(this.calendarInstance.globalize.formatDate(this.calendarInstance.values[index], { type: 'date', skeleton: 'yMd', calendar: 'islamic' }));
                            if (localDateString === tempDateString) {
                                this.calendarInstance.values.splice(index, 1);
                                index = -1;
                            }
                        }
                    }
                }
                else if (value && +value === +argument.date) {
                    this.calendarInstance.setProperties({ value: null }, true);
                }
            }
            if (this.calendarInstance.renderDayCellArgs.isDisabled && !tdEle.classList.contains(SELECTED)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OVERLAY);
                if (+this.calendarInstance.renderDayCellArgs.date === +this.calendarInstance.todayDate) {
                    this.calendarInstance.todayDisabled = true;
                }
            }
            var otherMnthBool = tdEle.classList.contains(OTHERMONTH);
            var disabledCls = tdEle.classList.contains(DISABLED);
            if (!disabledCls) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.calendarInstance.clickHandler, this.calendarInstance);
            }
            if (this.calendarInstance.isMultiSelection && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.calendarInstance.values) &&
                !otherMnthBool && !disabledCls) {
                for (var tempValue = 0; tempValue < this.calendarInstance.values.length; tempValue++) {
                    /* tslint:disable-next-line:max-line-length */
                    var localDateString = this.calendarInstance.globalize.formatDate(localDate, { type: 'date', skeleton: 'short', calendar: 'islamic' });
                    var tempDateString = this.calendarInstance.globalize.formatDate(this.calendarInstance.values[tempValue], { type: 'date', skeleton: 'short', calendar: 'islamic' });
                    if (localDateString === tempDateString &&
                        this.calendarInstance.getDateVal(localDate, this.calendarInstance.values[tempValue])) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
                    }
                    else {
                        this.calendarInstance.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
                    }
                }
                if (this.calendarInstance.values.length <= 0) {
                    this.calendarInstance.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
                }
            }
            else if (!otherMnthBool && !disabledCls && this.calendarInstance.getDateVal(localDate, value)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                this.calendarInstance.updateFocus(otherMnthBool, disabledCls, localDate, tdEle, currentDate);
            }
            if (date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                if (date.getFullYear() === new Date().getFullYear()) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], TODAY);
                }
            }
            localDate = new Date(+minMaxDate);
            tdEles.push(this.calendarInstance.renderDayCellArgs.element);
            this.calendarInstance.addDay(localDate, 1, null, this.calendarInstance.max, this.calendarInstance.min);
        }
        return tdEles;
    };
    Islamic.prototype.islamicIconHandler = function () {
        new Date(this.islamicInValue(this.calendarInstance.currentDate)).setDate(1);
        var date = new Date(this.islamicInValue(this.calendarInstance.currentDate));
        switch (this.calendarInstance.currentView()) {
            case 'Month':
                var prevMonthCompare = this.islamicCompareMonth(date, this.calendarInstance.min) < 1;
                var nextMonthCompare = this.islamicCompareMonth(date, this.calendarInstance.max) > -1;
                this.calendarInstance.previousIconHandler(prevMonthCompare);
                this.calendarInstance.nextIconHandler(nextMonthCompare);
                break;
            case 'Year':
                var prevYearCompare = this.hijriCompareYear(date, this.calendarInstance.min) < 1;
                var nextYearCompare = this.hijriCompareYear(date, this.calendarInstance.max) > -1;
                this.calendarInstance.previousIconHandler(prevYearCompare);
                this.calendarInstance.nextIconHandler(nextYearCompare);
                break;
            case 'Decade':
                var prevDecadeCompare = this.hijriCompareDecade(date, this.calendarInstance.min) < 1;
                var nextDecadeCompare = this.hijriCompareDecade(date, this.calendarInstance.max) > -1;
                this.calendarInstance.previousIconHandler(prevDecadeCompare);
                this.calendarInstance.nextIconHandler(nextDecadeCompare);
        }
    };
    Islamic.prototype.islamicNext = function () {
        this.calendarInstance.effect = '';
        var view = this.calendarInstance.getViewNumber(this.calendarInstance.currentView());
        /* tslint:disable-next-line:no-any */
        var islamicDate = this.getIslamicDate(this.calendarInstance.currentDate);
        switch (this.calendarInstance.currentView()) {
            case 'Year':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year + 1, islamicDate.month, 1);
                this.calendarInstance.switchView(view);
                break;
            case 'Month':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year, islamicDate.month + 1, 1);
                this.calendarInstance.switchView(view);
                break;
            case 'Decade':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year + 10, islamicDate.month, 1);
                this.calendarInstance.switchView(view);
                break;
        }
    };
    Islamic.prototype.islamicPrevious = function () {
        var currentView = this.calendarInstance.getViewNumber(this.calendarInstance.currentView());
        this.calendarInstance.effect = '';
        /* tslint:disable-next-line:no-any */
        var islamicDate = this.getIslamicDate(this.calendarInstance.currentDate);
        switch (this.calendarInstance.currentView()) {
            case 'Month':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year, islamicDate.month - 1, 1);
                this.calendarInstance.switchView(currentView);
                break;
            case 'Year':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year - 1, islamicDate.month, 1);
                this.calendarInstance.switchView(currentView);
                break;
            case 'Decade':
                this.calendarInstance.currentDate = this.toGregorian(islamicDate.year - 10, islamicDate.month - 1, 1);
                this.calendarInstance.switchView(currentView);
                break;
        }
    };
    Islamic.prototype.islamicRenderYears = function (e, value) {
        this.calendarInstance.removeTableHeadElement();
        var numCells = 4;
        var days;
        var tdEles = [];
        var valueUtil = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value);
        var curDate = new Date(this.islamicInValue(this.calendarInstance.currentDate));
        var localDate = curDate;
        /* tslint:disable-next-line:no-any */
        var islamicDate = this.getIslamicDate(localDate);
        var gregorianObject = _ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].toGregorian(islamicDate.year, 1, 1);
        localDate = gregorianObject;
        var mon = islamicDate.month;
        var yr = islamicDate.year;
        var curYrs = islamicDate.year;
        /* tslint:disable-next-line:no-any */
        var minYr = (this.getIslamicDate(this.calendarInstance.min)).year;
        /* tslint:disable-next-line:no-any */
        var minMonth = (this.getIslamicDate(this.calendarInstance.min)).month;
        /* tslint:disable-next-line:no-any */
        var maxYr = (this.getIslamicDate(this.calendarInstance.max)).year;
        /* tslint:disable-next-line:no-any */
        var maxMonth = (this.getIslamicDate(this.calendarInstance.max)).month;
        this.islamicTitleUpdate(this.calendarInstance.currentDate, 'months');
        var disabled = (this.calendarInstance.min > localDate) || (this.calendarInstance.max < localDate);
        for (var month = 1; month <= 12; ++month) {
            /* tslint:disable-next-line:no-any */
            var islamicDate_1 = this.getIslamicDate(localDate);
            var gregorianObject_1 = _ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].toGregorian(islamicDate_1.year, month, 1);
            localDate = gregorianObject_1;
            var tdEle = this.islamicDayCell(localDate);
            var dayLink = this.calendarInstance.createElement('span');
            /* tslint:disable-next-line:max-line-length */
            /* tslint:disable-next-line:no-any */
            var localMonth = (value && (this.getIslamicDate(value)).month === (this.getIslamicDate(localDate)).month);
            /* tslint:disable-next-line:no-any  tslint:disable-next-line:max-line-length */
            var select = (value && (this.getIslamicDate(value)).year === yr && localMonth);
            /* tslint:disable-next-line:max-line-length */
            dayLink.textContent = this.calendarInstance.globalize.formatDate(localDate, { type: 'dateTime', format: 'MMM', calendar: 'islamic' });
            if ((this.calendarInstance.min && (curYrs < minYr || (month < minMonth && curYrs === minYr))) || (this.calendarInstance.max && (curYrs > maxYr || (month > maxMonth && curYrs >= maxYr)))) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
            }
            else if (!valueUtil && select) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                /* tslint:disable-next-line:no-any */
                if ((this.getIslamicDate(localDate)).month === mon &&
                    /* tslint:disable-next-line:no-any */
                    (this.getIslamicDate(this.calendarInstance.currentDate)).month === mon) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], FOCUSEDDATE);
                }
            }
            if (!tdEle.classList.contains(DISABLED)) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.calendarInstance.clickHandler, this.calendarInstance);
            }
            tdEle.appendChild(dayLink);
            tdEles.push(tdEle);
        }
        this.islamicRenderTemplate(tdEles, numCells, YEAR, e, value);
    };
    Islamic.prototype.islamicRenderDecade = function (e, value) {
        this.calendarInstance.removeTableHeadElement();
        var numCells = 4;
        var yearCell = 12;
        var tdEles = [];
        var localDate = new Date(this.islamicInValue(this.calendarInstance.currentDate));
        /* tslint:disable-next-line:no-any */
        var islamicDate = this.getIslamicDate(localDate);
        var gregorianObject = _ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].toGregorian(islamicDate.year, 1, 1);
        localDate = gregorianObject;
        var localYr = localDate.getFullYear();
        var startYr = new Date(this.islamicInValue((localYr - localYr % 10)));
        var endYr = new Date(this.islamicInValue((localYr - localYr % 10 + (10 - 1))));
        var startFullYr = startYr.getFullYear();
        var endFullYr = endYr.getFullYear();
        /* tslint:disable-next-line:max-line-length */
        var startHdrYr = this.calendarInstance.globalize.formatDate(startYr, { type: 'dateTime', format: 'y', calendar: 'islamic' });
        var endHdrYr = this.calendarInstance.globalize.formatDate(endYr, { type: 'dateTime', format: 'y', calendar: 'islamic' });
        this.calendarInstance.headerTitleElement.textContent = startHdrYr + ' - ' + (endHdrYr);
        var start = new Date(localYr - (localYr % 10) - 2, 0, 1);
        var startYear = start.getFullYear();
        for (var rowCount = 1; rowCount <= yearCell; ++rowCount) {
            var year = startYear + rowCount;
            localDate.setFullYear(year);
            localDate.setDate(1);
            localDate.setMonth(0);
            /* tslint:disable-next-line:no-any */
            var islamicDate_2 = this.getIslamicDate(localDate);
            var gregorianObject_2 = _ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].toGregorian(islamicDate_2.year, 1, 1);
            localDate = gregorianObject_2;
            var tdEle = this.islamicDayCell(localDate);
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(tdEle, { 'role': 'gridcell' });
            var dayLink = this.calendarInstance.createElement('span');
            /* tslint:disable-next-line:max-line-length */
            dayLink.textContent = this.calendarInstance.globalize.formatDate(localDate, { type: 'dateTime', format: 'y', calendar: 'islamic' });
            /* tslint:disable-next-line:no-any */
            if ((year < startFullYr) || (year > endFullYr)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], OTHERMONTH);
            }
            else if (year < new Date(this.islamicInValue(this.calendarInstance.min)).getFullYear()
                || year > new Date(this.islamicInValue(this.calendarInstance.max)).getFullYear()) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], DISABLED);
            }
            else if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(value) &&
                /* tslint:disable-next-line:no-any */
                (this.getIslamicDate(localDate)).year ===
                    /* tslint:disable-next-line:no-any */
                    (this.getIslamicDate(value)).year) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], SELECTED);
            }
            else {
                if (localDate.getFullYear() === this.calendarInstance.currentDate.getFullYear() && !tdEle.classList.contains(DISABLED)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([tdEle], FOCUSEDDATE);
                }
            }
            if (!tdEle.classList.contains(DISABLED)) {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(tdEle, 'click', this.calendarInstance.clickHandler, this.calendarInstance);
            }
            tdEle.appendChild(dayLink);
            tdEles.push(tdEle);
        }
        this.islamicRenderTemplate(tdEles, numCells, 'e-decade', e, value);
    };
    Islamic.prototype.islamicDayCell = function (localDate) {
        var dateFormatOptions = { skeleton: 'full', type: 'dateTime', calendar: 'islamic' };
        var formatDate = this.calendarInstance.globalize.formatDate(localDate, dateFormatOptions);
        var date = this.calendarInstance.globalize.parseDate(formatDate, dateFormatOptions);
        var value = date.valueOf();
        var attrs = {
            className: CELL, attrs: { 'id': '' + Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('' + value), 'aria-selected': 'false', 'role': 'gridcell' }
        };
        return this.calendarInstance.createElement('td', attrs);
    };
    Islamic.prototype.islamicRenderTemplate = function (elements, count, classNm, e, value) {
        var view = this.calendarInstance.getViewNumber(this.calendarInstance.currentView());
        var trEle;
        this.calendarInstance.tableBodyElement = this.calendarInstance.createElement('tbody');
        this.calendarInstance.table.appendChild(this.calendarInstance.tableBodyElement);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.calendarInstance.contentElement, this.calendarInstance.headerElement], [MONTH, DECADE, YEAR]);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.calendarInstance.contentElement, this.calendarInstance.headerElement], [classNm]);
        var weekNumCell = 41;
        var numberCell = 35;
        var otherMonthCell = 6;
        var row = count;
        var rowCount = 0;
        for (var dayCell = 0; dayCell < elements.length / count; ++dayCell) {
            trEle = this.calendarInstance.createElement('tr', { attrs: { 'role': 'row' } });
            for (rowCount = 0 + rowCount; rowCount < row; rowCount++) {
                if (!elements[rowCount].classList.contains('e-week-number') && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(elements[rowCount].children[0])) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([elements[rowCount].children[0]], [LINK]);
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(elements[rowCount].children[0], {
                        duration: 600,
                        isCenterRipple: true
                    });
                }
                trEle.appendChild(elements[rowCount]);
                if (this.calendarInstance.weekNumber &&
                    rowCount === otherMonthCell + 1 && elements[otherMonthCell + 1].classList.contains(OTHERMONTH)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                }
                if (!this.calendarInstance.weekNumber
                    && rowCount === otherMonthCell && elements[otherMonthCell].classList.contains(OTHERMONTH)) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                }
                if (this.calendarInstance.weekNumber) {
                    if (rowCount === weekNumCell && elements[weekNumCell].classList.contains(OTHERMONTH)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                    }
                }
                else {
                    if (rowCount === numberCell && elements[numberCell].classList.contains(OTHERMONTH)) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([trEle], OTHERMONTHROW);
                    }
                }
            }
            row = row + count;
            rowCount = rowCount + 0;
            this.calendarInstance.tableBodyElement.appendChild(trEle);
        }
        this.calendarInstance.table.querySelector('tbody').className = this.calendarInstance.effect;
        this.islamicIconHandler();
        if (view !== this.calendarInstance.getViewNumber(this.calendarInstance.currentView())
            || (view === 0 && view !== this.calendarInstance.getViewNumber(this.calendarInstance.currentView()))) {
            this.calendarInstance.navigateHandler(e);
        }
        this.calendarInstance.setAriaActiveDescendant();
        this.calendarInstance.changedArgs = { value: this.calendarInstance.value, values: this.calendarInstance.values };
        this.calendarInstance.changeHandler();
    };
    Islamic.prototype.islamicCompareMonth = function (start, end) {
        /* tslint:disable-next-line:no-any */
        var hijriStart = (this.getIslamicDate(start));
        /* tslint:disable-next-line:no-any */
        var hijriEnd = (this.getIslamicDate(end));
        var result;
        if (hijriStart.year > hijriEnd.year) {
            result = 1;
        }
        else if (hijriStart.year < hijriEnd.year) {
            result = -1;
        }
        else {
            result = hijriStart.month === hijriEnd.month ? 0 : hijriStart.month > hijriEnd.month ? 1 : -1;
        }
        return result;
    };
    ;
    Islamic.prototype.islamicCompare = function (startDate, endDate, modifier) {
        /* tslint:disable-next-line:no-any */
        var hijriStart = this.getIslamicDate(startDate);
        /* tslint:disable-next-line:no-any */
        var hijriEnd = this.getIslamicDate(endDate);
        var start = hijriEnd.year;
        var end;
        var result;
        end = start;
        result = 0;
        if (modifier) {
            start = start - start % modifier;
            end = start - start % modifier + modifier - 1;
        }
        if (hijriStart.year > end) {
            result = 1;
        }
        else if ((this.calendarInstance.currentView() === 'Decade') && hijriStart.year < start &&
            !((startDate.getFullYear() >= minDecade && startDate.getFullYear() <= maxDecade))) {
            result = -1;
        }
        else if (hijriStart.year < start && (this.calendarInstance.currentView() === 'Year')) {
            result = -1;
        }
        return result;
    };
    ;
    /* tslint:disable-next-line:no-any */
    Islamic.prototype.getIslamicDate = function (date) {
        /* tslint:disable-next-line:no-any */
        return (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].getHijriDate(date));
    };
    Islamic.prototype.toGregorian = function (year, month, date) {
        return _ej2_base__WEBPACK_IMPORTED_MODULE_0__["HijriParser"].toGregorian(year, month, date);
    };
    Islamic.prototype.hijriCompareYear = function (start, end) {
        return this.islamicCompare(start, end, 0);
    };
    Islamic.prototype.hijriCompareDecade = function (start, end) {
        return this.islamicCompare(start, end, 10);
    };
    ;
    Islamic.prototype.destroy = function () {
        this.calendarInstance = null;
    };
    Islamic.prototype.islamicInValue = function (inValue) {
        if (inValue instanceof Date) {
            return (inValue.toUTCString());
        }
        else {
            return ('' + inValue);
        }
    };
    return Islamic;
}());



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/dashboard-layout.js":
/*!**********************************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/dashboard-layout.js ***!
  \**********************************************************************************************/
/*! exports provided: Panel, DashboardLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLayout", function() { return DashboardLayout; });
/* harmony import */ var _ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ej2-base */ "./ej2-resources/18.2.56-patch/scripts/ej2-base/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// constant class definitions
var preventSelect = 'e-prevent';
var dragging = 'e-dragging';
var draggable = 'e-draggable';
var dragRestrict = 'e-drag-restrict';
var drag = 'e-drag';
var resize = 'e-resize';
var resizeicon = 'e-dl-icon';
var responsive = 'e-responsive';
var east = 'e-east';
var west = 'e-west';
var north = 'e-north';
var south = 'e-south';
var single = 'e-single';
var double = 'e-double';
var northEast = 'e-north-east';
var southEast = 'e-south-east';
var northWest = 'e-north-west';
var southWest = 'e-south-west';
var panel = 'e-panel';
var panelContent = 'e-panel-content';
var panelContainer = 'e-panel-container';
var disable = 'e-disabled';
var header = 'e-panel-header';
var panelTransition = 'e-panel-transition';
/**
 * Defines the panel of the DashboardLayout component.
 */
var Panel = /** @__PURE__ @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Panel.prototype, "id", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Panel.prototype, "cssClass", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Panel.prototype, "header", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Panel.prototype, "content", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], Panel.prototype, "enabled", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(0)
    ], Panel.prototype, "row", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(0)
    ], Panel.prototype, "col", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], Panel.prototype, "sizeX", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], Panel.prototype, "sizeY", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], Panel.prototype, "minSizeY", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], Panel.prototype, "minSizeX", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], Panel.prototype, "maxSizeY", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], Panel.prototype, "maxSizeX", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1000)
    ], Panel.prototype, "zIndex", void 0);
    return Panel;
}(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["ChildProperty"]));

/**
 * The DashboardLayout is a grid structured layout control, that helps to create a dashboard with panels.
 * Panels hold the UI components or data to be visualized with flexible options like resize, reorder, drag-n-drop, remove and add,
 * that allows users to easily place the panels at a desired position within the grid layout.
 * ```html
 * <div id="default-layout">
 * ```
 * ```typescript
 * <script>
 *   let dashBoardObject : DashboardLayout = new DashboardLayout();
 *   dashBoardObject.appendTo('#default-layout');
 * </script>
 * ```
 */
var DashboardLayout = /** @__PURE__ @class */ (function (_super) {
    __extends(DashboardLayout, _super);
    function DashboardLayout(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.rows = 1;
        _this.panelID = 0;
        _this.movePanelCalled = false;
        _this.resizeCalled = false;
        _this.mOffX = 0;
        _this.mOffY = 0;
        _this.maxTop = 9999;
        _this.maxRows = 100;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.minTop = 0;
        _this.minLeft = 0;
        _this.isBlazor = false;
        _this.isInlineRendering = false;
        _this.removeAllCalled = false;
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setValue"])('mergePersistData', _this.mergePersistPanelData, _this);
        return _this;
    }
    /**
     * Initialize the event handler
     * @private
     */
    DashboardLayout.prototype.preRender = function () {
        this.isBlazor = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered);
        this.panelCollection = [];
        this.sortedArray = [];
        this.gridPanelCollection = [];
        this.overlapElement = [];
        this.overlapElementClone = [];
        this.overlapSubElementClone = [];
        this.collisionChecker = {};
        this.dragCollection = [];
        this.elementRef = { top: '', left: '', height: '', width: '' };
        this.dimensions = [];
        this.allItems = [];
        this.oldRowCol = {};
        this.availableClasses = [];
        this.setOldRowCol();
        this.calculateCellSize();
        this.contentTemplateChild = [].slice.call(this.element.children);
    };
    DashboardLayout.prototype.setOldRowCol = function () {
        for (var i = 0; i < this.panels.length; i++) {
            if (!this.panels[i].id) {
                this.panelPropertyChange(this.panels[i], { id: 'layout_' + this.panelID.toString() });
                this.panelID = this.panelID + 1;
            }
            this.oldRowCol[this.panels[i].id] = { row: this.panels[i].row, col: this.panels[i].col };
        }
    };
    DashboardLayout.prototype.createPanelElement = function (cssClass, idValue) {
        var ele = this.createElement('div');
        if (cssClass && cssClass.length > 0) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([ele], cssClass);
        }
        if (idValue) {
            ele.setAttribute('id', idValue);
        }
        return ele;
    };
    /**
     * To Initialize the control rendering.
     * @returns void
     * @private
     */
    DashboardLayout.prototype.render = function () {
        this.initialize();
        this.isRenderComplete = true;
        if (this.showGridLines && !this.checkMediaQuery()) {
            this.initGridLines();
        }
        this.updateDragArea();
        this.renderComplete();
        this.updateServerPanelData();
    };
    DashboardLayout.prototype.updateServerPanelData = function () {
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            this.setProperties({ panels: this.panels }, true);
            this.allowServerDataBinding = true;
            this.serverDataBind();
        }
    };
    DashboardLayout.prototype.initGridLines = function () {
        this.table = document.createElement('table');
        var tbody = document.createElement('tbody');
        this.table.classList.add('e-dashboard-gridline-table');
        for (var i = 0; i < this.maxRow(); i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < this.columns; j++) {
                var td = document.createElement('td');
                td.classList.add('e-dashboard-gridline');
                this.setAttributes({ value: { row: i.toString(), col: j.toString(), sizeX: '1', sizeY: '1' } }, td);
                td.setAttribute('id', '' + j);
                this.setPanelPosition(td, i, j);
                this.setHeightAndWidth(td, { row: i, col: j, sizeX: 1, sizeY: 1 });
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        this.table.appendChild(tbody);
        this.element.appendChild(this.table);
    };
    DashboardLayout.prototype.initialize = function () {
        this.updateRowHeight();
        if (this.element.childElementCount > 0 && this.element.querySelectorAll('.e-panel').length > 0
            && !(this.isBlazor && this.panels.length > 0)) {
            var panelElements = [];
            this.setProperties({ panels: [] }, true);
            this.isInlineRendering = true;
            for (var i = 0; i < this.element.querySelectorAll('.e-panel').length; i++) {
                panelElements.push((this.element.querySelectorAll('.e-panel')[i]));
            }
            for (var i = 0; i < panelElements.length; i++) {
                var panelElement = panelElements[i];
                if (this.enableRtl) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([panelElement], 'e-rtl');
                }
                this.getInlinePanels(panelElement);
                this.maxCol();
                this.maxRow();
            }
            for (var i = 0; i < this.panels.length; i++) {
                var panelElement = this.element.querySelector('#' + this.panels[i].id);
                this.setMinMaxValues(this.panels[i]);
                if (this.maxColumnValue < this.panels[i].col || this.maxColumnValue < (this.panels[i].col + this.panels[i].sizeX)) {
                    var colValue = this.maxColumnValue - this.panels[i].sizeX;
                    this.panelPropertyChange(this.panels[i], { col: colValue < 0 ? 0 : colValue });
                }
                this.setXYAttributes(panelElement, this.panels[i]);
                this.isBlazor = false;
                var panel_1 = this.renderPanels(panelElement, this.panels[i], this.panels[i].id, false);
                this.isBlazor = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered);
                this.panelCollection.push(panel_1);
                this.setHeightAndWidth(panelElement, this.panels[i]);
                this.tempObject = this;
                if (this.mediaQuery && !window.matchMedia('(' + this.mediaQuery + ')').matches) {
                    this.setPanelPosition(panelElement, this.panels[i].row, this.panels[i].col);
                    this.mainElement = panelElement;
                    this.updatePanelLayout(panelElement, this.panels[i]);
                    this.mainElement = null;
                }
                this.setClasses([panelElement]);
            }
            this.updateOldRowColumn();
            if (this.checkMediaQuery()) {
                this.checkMediaQuerySizing();
            }
        }
        else {
            this.renderDashBoardCells(this.panels);
        }
        if (this.allowDragging && (this.mediaQuery ? !window.matchMedia('(' + this.mediaQuery + ')').matches : true)) {
            this.enableDraggingContent(this.panelCollection);
        }
        this.sortedPanel();
        this.bindEvents();
        this.updatePanels();
        this.updateCloneArrayObject();
        this.checkColumnValue = this.maxColumnValue;
        if (!(this.checkMediaQuery())) {
            this.panelResponsiveUpdate();
        }
        if (!this.isBlazor) {
            this.setEnableRtl();
        }
    };
    DashboardLayout.prototype.checkMediaQuery = function () {
        return (this.mediaQuery && window.matchMedia('(' + this.mediaQuery + ')').matches);
    };
    DashboardLayout.prototype.calculateCellSize = function () {
        this.cellSize = [];
        if ((this.checkMediaQuery())) {
            this.cellSize[1] = this.element.parentElement
                && ((this.element.parentElement.offsetWidth)) / this.cellAspectRatio;
        }
        else {
            this.cellSize[0] = this.element.parentElement &&
                ((this.element.parentElement.offsetWidth));
            this.cellSize[0] = this.element.parentElement
                && ((this.element.parentElement.offsetWidth - ((this.maxCol() - 1) * this.cellSpacing[0]))
                    / (this.maxCol()));
            this.cellSize[1] = this.cellSize[0] / this.cellAspectRatio;
        }
    };
    DashboardLayout.prototype.maxRow = function (recheck) {
        var maxRow = 1;
        if (this.rows > 1 && Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(recheck)) {
            maxRow = this.rows;
            return maxRow;
        }
        for (var i = 0; i < this.panels.length; i++) {
            if (this.panels[i].sizeY + this.panels[i].row > maxRow) {
                maxRow = this.panels[i].sizeY + this.panels[i].row;
            }
        }
        if (this.panels.length === 0) {
            maxRow = this.columns;
        }
        return maxRow;
    };
    DashboardLayout.prototype.maxCol = function () {
        var maxCol = 1;
        maxCol = this.columns;
        this.maxColumnValue = maxCol;
        return maxCol;
    };
    DashboardLayout.prototype.updateOldRowColumn = function () {
        for (var i = 0; i < this.panels.length; i++) {
            var id = this.panels[i].id;
            if (document.getElementById(id)) {
                var row = parseInt(document.getElementById(id).getAttribute('data-row'), 10);
                var col = parseInt(document.getElementById(id).getAttribute('data-col'), 10);
                this.oldRowCol[this.panels[i].id] = { row: row, col: col };
            }
            else {
                continue;
            }
        }
    };
    DashboardLayout.prototype.createSubElement = function (cssClass, idValue, className) {
        var element = this.createElement('div');
        if (className) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], [className]);
        }
        if (cssClass && cssClass.length > 0) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], cssClass);
        }
        if (idValue) {
            element.setAttribute('id', idValue);
        }
        return element;
    };
    DashboardLayout.prototype.templateParser = function (template) {
        if (template) {
            try {
                if (document.querySelectorAll(template).length) {
                    return Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])(document.querySelector(template).innerHTML.trim());
                }
            }
            catch (error) {
                var sanitizedValue = _ej2_base__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"].sanitize(template);
                return Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["compile"])((this.enableHtmlSanitizer && typeof (template) === 'string') ? sanitizedValue : template);
            }
        }
        return undefined;
    };
    DashboardLayout.prototype.renderTemplate = function (content, appendElement, type, isStringTemplate) {
        var templateFn = this.templateParser(content);
        var templateElements = [];
        for (var _i = 0, _a = templateFn({}, null, null, type, isStringTemplate); _i < _a.length; _i++) {
            var item = _a[_i];
            templateElements.push(item);
        }
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])([].slice.call(templateElements), appendElement);
    };
    DashboardLayout.prototype.renderPanels = function (cellElement, panelModel, panelId, isStringTemplate) {
        if (!this.isBlazor) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([cellElement], [panel, panelTransition]);
        }
        var cssClass = panelModel.cssClass ? panelModel.cssClass.split(' ') : null;
        this.panelContent = cellElement.querySelector('.e-panel-container') ?
            cellElement.querySelector('.e-panel-container') :
            this.createSubElement(cssClass, cellElement.id + '_content', panelContainer);
        if (!this.isBlazor) {
            cellElement.appendChild(this.panelContent);
            if (!panelModel.enabled) {
                this.disablePanel(cellElement);
            }
        }
        if (panelModel.header) {
            var headerTemplateElement = cellElement.querySelector('.e-panel-header') ?
                cellElement.querySelector('.e-panel-header') : this.createSubElement([], cellElement.id + 'template', '');
            if (!this.isBlazor) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([headerTemplateElement], [header]);
            }
            if (!cellElement.querySelector('.e-panel-header') && !this.isBlazor) {
                var id = this.element.id + 'HeaderTemplate' + panelId;
                this.renderTemplate(panelModel.header, headerTemplateElement, id, isStringTemplate);
                this.panelContent.appendChild(headerTemplateElement);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(id, 'HeaderTemplate', panelModel);
            }
        }
        if (panelModel.content) {
            var cssClass_1 = panelModel.cssClass ? panelModel.cssClass.split(' ') : null;
            this.panelBody = cellElement.querySelector('.e-panel-content') ? cellElement.querySelector('.e-panel-content') :
                this.createSubElement(cssClass_1, cellElement.id + '_body', panelContent);
            var headerHeight = this.panelContent.querySelector('.e-panel-header') ?
                window.getComputedStyle(this.panelContent.querySelector('.e-panel-header')).height : '0px';
            var contentHeightValue = 'calc( 100% - ' + headerHeight + ')';
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.panelBody, { height: contentHeightValue });
            if (!cellElement.querySelector('.e-panel-content') && !this.isBlazor) {
                var id = this.element.id + 'ContentTemplate' + panelId;
                this.renderTemplate(panelModel.content, this.panelBody, id, isStringTemplate);
                this.panelContent.appendChild(this.panelBody);
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"])(id, 'ContentTemplate', panelModel);
            }
        }
        return cellElement;
    };
    DashboardLayout.prototype.disablePanel = function (panelElement) {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([panelElement], [disable]);
    };
    DashboardLayout.prototype.getInlinePanels = function (panelElement) {
        var model = {
            sizeX: panelElement.hasAttribute('data-sizex') ? parseInt(panelElement.getAttribute('data-sizex'), 10) : 1,
            sizeY: panelElement.hasAttribute('data-sizey') ? parseInt(panelElement.getAttribute('data-sizey'), 10) : 1,
            minSizeX: panelElement.hasAttribute('data-minsizex') ? parseInt(panelElement.getAttribute('data-minsizex'), 10) : 1,
            minSizeY: panelElement.hasAttribute('data-minsizey') ? parseInt(panelElement.getAttribute('data-minsizey'), 10) : 1,
            maxSizeX: panelElement.hasAttribute('data-maxsizex') ? parseInt(panelElement.getAttribute('data-maxsizex'), 10) : null,
            maxSizeY: panelElement.hasAttribute('data-maxsizey') ? parseInt(panelElement.getAttribute('data-maxsizey'), 10) : null,
            row: panelElement.hasAttribute('data-row') ? parseInt(panelElement.getAttribute('data-row'), 10) : 0,
            col: panelElement.hasAttribute('data-col') ? parseInt(panelElement.getAttribute('data-col'), 10) : 0,
            id: panelElement.getAttribute('id'),
            zIndex: panelElement.hasAttribute('data-zindex') ? parseInt(panelElement.getAttribute('data-zIndex'), 10) : 1000,
            header: panelElement.querySelector('.e-panel-header') && '.e-panel-header',
            content: panelElement.querySelector('.e-panel-content') && '.e-panel-content',
        };
        if (!model.id) {
            model.id = 'layout_' + this.panelID.toString();
            panelElement.setAttribute('id', model.id);
            this.panelID = this.panelID + 1;
        }
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(model.enabled)) {
            model.enabled = true;
        }
        panelElement.style.zIndex = '' + model.zIndex;
        // tslint:disable-next-line
        var panelProp = new Panel(this, 'panels', model, true);
        this.panels.push(panelProp);
    };
    DashboardLayout.prototype.resizeEvents = function () {
        if (this.allowResizing) {
            var panelElements = this.element.querySelectorAll('.e-panel .e-panel-container .e-resize');
            for (var i = 0; i < panelElements.length; i++) {
                var eventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mousedown pointerdown' : 'mousedown';
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(panelElements[i], eventName, this.downResizeHandler, this);
                if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name !== 'msie') {
                    _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(panelElements[i], 'touchstart', this.touchDownResizeHandler, this);
                }
            }
        }
    };
    DashboardLayout.prototype.bindEvents = function () {
        window.addEventListener('resize', this.refresh.bind(this));
        this.resizeEvents();
    };
    DashboardLayout.prototype.downResizeHandler = function (e) {
        this.downHandler(e);
        this.lastMouseX = e.pageX;
        this.lastMouseY = e.pageY;
        var moveEventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mousemove pointermove' : 'mousemove';
        var upEventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mouseup pointerup' : 'mouseup';
        if (!this.isMouseMoveBound) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(document, moveEventName, this.moveResizeHandler, this);
            this.isMouseMoveBound = true;
        }
        if (!this.isMouseUpBound) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(document, upEventName, this.upResizeHandler, this);
            this.isMouseUpBound = true;
        }
    };
    ;
    DashboardLayout.prototype.downHandler = function (e) {
        this.resizeCalled = false;
        this.panelsInitialModel = this.cloneModels(this.panels);
        var el = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((e.currentTarget), '.e-panel');
        var args = { event: e, element: el, isInteracted: true };
        this.trigger('resizeStart', args);
        this.downTarget = e.currentTarget;
        this.shadowEle = document.createElement('div');
        this.shadowEle.classList.add('e-holder');
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], [preventSelect]);
        this.element.appendChild(this.shadowEle);
        this.elementX = parseFloat(el.style.left);
        this.elementY = parseFloat(el.style.top);
        this.elementWidth = el.offsetWidth;
        this.elementHeight = el.offsetHeight;
        this.originalWidth = this.getCellInstance(el.id).sizeX;
        this.originalHeight = this.getCellInstance(el.id).sizeY;
        this.previousRow = this.getCellInstance(el.id).row;
    };
    DashboardLayout.prototype.touchDownResizeHandler = function (e) {
        this.downHandler(e);
        this.lastMouseX = e.changedTouches[0].pageX;
        this.lastMouseY = e.changedTouches[0].pageY;
        if (!this.isMouseMoveBound) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(document, 'touchmove', this.touchMoveResizeHandler, this);
            this.isMouseMoveBound = true;
        }
        if (!this.isMouseUpBound) {
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(document, 'touchend', this.upResizeHandler, this);
            this.isMouseUpBound = true;
        }
    };
    DashboardLayout.prototype.getCellSize = function () {
        return [this.cellSize[0], this.cellSize[1]];
    };
    DashboardLayout.prototype.updateMaxTopLeft = function (e) {
        this.moveTarget = this.downTarget;
        var el = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((this.moveTarget), '.e-panel');
        var args = { event: e, element: el, isInteracted: true };
        this.trigger('resize', args);
    };
    DashboardLayout.prototype.updateResizeElement = function (el) {
        this.maxLeft = this.element.offsetWidth - 1;
        this.maxTop = this.cellSize[1] * this.maxRows - 1;
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([el], 'e-panel-transition');
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([el], [dragging]);
        var handleArray = [east, west, north, south, southEast, northEast, northWest, southWest];
        for (var i = 0; i < this.moveTarget.classList.length; i++) {
            if (handleArray.indexOf(this.moveTarget.classList[i]) !== -1) {
                this.handleClass = (this.moveTarget.classList[i]);
            }
        }
    };
    DashboardLayout.prototype.moveResizeHandler = function (e) {
        this.updateMaxTopLeft(e);
        var el = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((this.moveTarget), '.e-panel');
        if (this.lastMouseX === e.pageX || this.lastMouseY === e.pageY) {
            return;
        }
        this.updateResizeElement(el);
        var panelModel = this.getCellInstance(el.getAttribute('id'));
        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
        var diffY = this.mouseY - this.lastMouseY + this.mOffY;
        var diffX = this.mouseX - this.lastMouseX + this.mOffX;
        this.mOffX = this.mOffY = 0;
        this.lastMouseY = this.mouseY;
        this.lastMouseX = this.mouseX;
        this.resizingPanel(el, panelModel, diffX, diffY);
    };
    DashboardLayout.prototype.touchMoveResizeHandler = function (e) {
        this.updateMaxTopLeft(e);
        var el = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((this.moveTarget), '.e-panel');
        if (this.lastMouseX === e.changedTouches[0].pageX || this.lastMouseY === e.changedTouches[0].pageY) {
            return;
        }
        this.updateResizeElement(el);
        var panelModel = this.getCellInstance(el.getAttribute('id'));
        this.mouseX = e.changedTouches[0].pageX;
        this.mouseY = e.changedTouches[0].pageY;
        var diffX = this.mouseX - this.lastMouseX + this.mOffX;
        var diffY = this.mouseY - this.lastMouseY + this.mOffY;
        this.mOffX = this.mOffY = 0;
        this.lastMouseX = this.mouseX;
        this.lastMouseY = this.mouseY;
        this.resizingPanel(el, panelModel, diffX, diffY);
    };
    /* istanbul ignore next */
    DashboardLayout.prototype.resizingPanel = function (el, panelModel, currentX, currentY) {
        var oldSizeX = this.getCellInstance(el.id).sizeX;
        var oldSizeY = this.getCellInstance(el.id).sizeY;
        var dY = currentY;
        var dX = currentX;
        if (this.handleClass.indexOf('north') >= 0) {
            if (this.elementHeight - dY < this.getMinHeight(panelModel)) {
                currentY = this.elementHeight - this.getMinHeight(panelModel);
                this.mOffY = dY - currentY;
            }
            else if (panelModel.maxSizeY && this.elementHeight - dY > this.getMaxHeight(panelModel)) {
                currentY = this.elementHeight - this.getMaxHeight(panelModel);
                this.mOffY = dY - currentY;
            }
            else if (this.elementY + dY < this.minTop) {
                currentY = this.minTop - this.elementY;
                this.mOffY = dY - currentY;
            }
            this.elementY += currentY;
            this.elementHeight -= currentY;
        }
        if (this.handleClass.indexOf('south') >= 0) {
            if (this.elementHeight + dY < this.getMinHeight(panelModel)) {
                currentY = this.getMinHeight(panelModel) - this.elementHeight;
                this.mOffY = dY - currentY;
            }
            else if (panelModel.maxSizeY && this.elementHeight + dY > this.getMaxHeight(panelModel)) {
                currentY = this.getMaxHeight(panelModel) - this.elementHeight;
                this.mOffY = dY - currentY;
            }
            else if (this.elementY + this.elementHeight + dY > this.maxTop) {
                currentY = this.maxTop - this.elementY - this.elementHeight;
                this.mOffY = dY - currentY;
            }
            this.elementHeight += currentY;
        }
        if (this.handleClass.indexOf('west') >= 0) {
            if (this.elementWidth - dX < this.getMinWidth(panelModel)) {
                currentX = this.elementWidth - this.getMinWidth(panelModel);
                this.mOffX = dX - currentX;
            }
            else if (panelModel.maxSizeX && this.elementWidth - dX > this.getMaxWidth(panelModel)) {
                currentX = this.elementWidth - this.getMaxWidth(panelModel);
                this.mOffX = dX - currentX;
            }
            else if (this.elementX + dX < this.minLeft) {
                currentX = this.minLeft - this.elementX;
                this.mOffX = dX - currentX;
            }
            this.elementX += currentX;
            this.elementWidth -= currentX;
        }
        if (this.handleClass.indexOf('east') >= 0) {
            if (this.elementWidth + dX < this.getMinWidth(panelModel)) {
                currentX = this.getMinWidth(panelModel) - this.elementWidth;
                this.mOffX = dX - currentX;
            }
            else if (panelModel.maxSizeX && this.elementWidth + dX > this.getMaxWidth(panelModel)) {
                currentX = this.getMaxWidth(panelModel) - this.elementWidth;
                this.mOffX = dX - currentX;
            }
            else if (this.elementX + this.elementWidth + dX > this.maxLeft) {
                currentX = this.maxLeft - this.elementX - this.elementWidth;
                this.mOffX = dX - currentX;
            }
            this.elementWidth += currentX;
        }
        el.style.top = this.elementY + 'px';
        el.style.left = this.elementX + 'px';
        el.style.width = this.elementWidth + 'px';
        el.style.height = this.elementHeight + 'px';
        var item = this.getResizeRowColumn(panelModel, this.moveTarget);
        if (item.col + item.sizeX > this.columns) {
            this.panelPropertyChange(item, { sizeX: item.sizeX - 1 });
        }
        this.shadowEle.style.top = ((item.row * this.getCellSize()[1] + (item.row * this.cellSpacing[1]))) + 'px';
        this.shadowEle.style.left = ((item.col * this.getCellSize()[0]) + ((item.col) * this.cellSpacing[0])) + 'px';
        this.shadowEle.style.height = ((item.sizeY * (this.getCellSize()[1] + (this.cellSpacing[1])))) + 'px';
        this.shadowEle.style.width = ((item.sizeX * (this.getCellSize()[0] + (this.cellSpacing[0])))) + 'px';
        if (oldSizeX !== item.sizeX || oldSizeY !== item.sizeY) {
            oldSizeX = item.sizeX;
            oldSizeY = item.sizeY;
            var model = this.getCellInstance(el.id);
            var value = {
                attributes: {
                    row: model.row.toString(),
                    col: model.col.toString(),
                    sizeX: model.sizeX.toString(),
                    sizeY: model.sizeY.toString()
                }
            };
            this.setAttributes(value, el);
            this.mainElement = el;
            this.updatePanelLayout(el, this.getCellInstance(el.id));
            this.updateOldRowColumn();
            this.sortedPanel();
        }
    };
    DashboardLayout.prototype.upResizeHandler = function (e) {
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.downTarget)) {
            return;
        }
        this.updateServerPanelData();
        this.upTarget = this.downTarget;
        var el = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((this.upTarget), '.e-panel');
        var args = { event: e, element: el, isInteracted: true };
        if (el) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([el], 'e-panel-transition');
            var moveEventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mousemove pointermove' : 'mousemove';
            var upEventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mouseup pointerup' : 'mouseup';
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(document, moveEventName, this.moveResizeHandler);
            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(document, upEventName, this.upResizeHandler);
            if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name !== 'msie') {
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(document, 'touchmove', this.touchMoveResizeHandler);
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(document, 'touchend', this.upResizeHandler);
            }
            this.isMouseUpBound = false;
            this.isMouseMoveBound = false;
            if (this.shadowEle) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.shadowEle);
            }
            this.shadowEle = null;
            var panelModel = this.getCellInstance(el.getAttribute('id'));
            this.setPanelPosition(el, panelModel.row, panelModel.col);
            this.setHeightAndWidth(el, panelModel);
        }
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([el], [dragging]);
        this.trigger('resizeStop', args);
        this.resizeCalled = false;
        this.lastMouseX = this.lastMouseY = undefined;
        this.mOffX = this.mOffY = 0;
        this.mainElement = null;
        if (this.allowFloating) {
            this.moveItemsUpwards();
        }
        this.updatePanels();
        this.updateCloneArrayObject();
        this.checkForChanges(true);
    };
    DashboardLayout.prototype.getResizeRowColumn = function (item, e) {
        var isChanged = false;
        var col = item.col;
        if (['e-west', 'e-south-west'].indexOf(this.handleClass) !== -1) {
            col = this.pixelsToColumns(this.elementX, false);
        }
        var row = item.row;
        if (['e-north'].indexOf(this.handleClass) !== -1) {
            row = this.pixelsToRows(this.elementY, false);
            if (this.previousRow !== row) {
                this.previousRow = row;
                isChanged = true;
            }
        }
        var sizeX = item.sizeX;
        if (['e-north', 'e-south'].indexOf(this.handleClass) === -1) {
            sizeX = this.pixelsToColumns(this.elementWidth - (sizeX) * this.cellSpacing[1], true);
        }
        var sizeY = item.sizeY;
        if (['e-east', 'e-west'].indexOf(this.handleClass) === -1) {
            if (this.handleClass === 'e-north' ? isChanged : true) {
                sizeY = this.pixelsToRows(this.elementHeight - (sizeY) * this.cellSpacing[0], true);
            }
        }
        if (item.col + item.sizeX > this.columns) {
            item.sizeX = item.sizeX - 1;
        }
        var canOccupy = row > -1 && col > -1 && sizeX + col <= this.maxCol() && sizeY + row <= this.maxRow();
        if (canOccupy && (this.collisions(row, col, sizeX, sizeY, this.getPanelBase(item.id)).length === 0)
            || this.allowPushing !== false) {
            this.panelPropertyChange(item, { row: row, col: col, sizeX: sizeX, sizeY: sizeY });
        }
        return item;
    };
    DashboardLayout.prototype.pixelsToColumns = function (pixels, isCeil) {
        var curColWidth = this.cellSize[0];
        if (isCeil) {
            return Math.ceil(pixels / curColWidth);
        }
        else {
            return Math.floor(pixels / curColWidth);
        }
    };
    DashboardLayout.prototype.pixelsToRows = function (pixels, isCeil) {
        if (isCeil) {
            return Math.round(pixels / this.cellSize[1]);
        }
        else {
            return Math.round(pixels / (this.cellSize[1] + this.cellSpacing[0]));
        }
    };
    DashboardLayout.prototype.getMinWidth = function (item) {
        return (item.minSizeX) * this.getCellSize()[0];
    };
    ;
    DashboardLayout.prototype.getMaxWidth = function (item) {
        return (item.maxSizeX) * this.getCellSize()[0];
    };
    ;
    DashboardLayout.prototype.getMinHeight = function (item) {
        return (item.minSizeY) * this.getCellSize()[1];
    };
    ;
    DashboardLayout.prototype.getMaxHeight = function (item) {
        return (item.maxSizeY) * this.getCellSize()[1];
    };
    ;
    DashboardLayout.prototype.sortedPanel = function () {
        this.sortedArray = [];
        for (var i = 0, l = this.panelCollection.length; i < l; ++i) {
            this.sortItem(this.panelCollection[i]);
        }
    };
    DashboardLayout.prototype.moveItemsUpwards = function () {
        if (this.allowFloating === false) {
            return;
        }
        for (var rowIndex = 0, l = this.sortedArray.length; rowIndex < l; ++rowIndex) {
            var columns = this.sortedArray[rowIndex];
            if (!columns) {
                continue;
            }
            for (var colIndex = 0, len = columns.length; colIndex < len; ++colIndex) {
                var item = columns[colIndex];
                if (item) {
                    this.moveItemUpwards(item);
                }
            }
        }
        this.updateGridLines();
    };
    ;
    DashboardLayout.prototype.moveItemUpwards = function (item) {
        if (this.allowFloating === false || item === this.mainElement) {
            return;
        }
        var colIndex = this.getCellInstance(item.id).col;
        var sizeY = parseInt(item.getAttribute('data-sizeY'), 10);
        var sizeX = parseInt(item.getAttribute('data-sizeX'), 10);
        var availableRow = null;
        var availableColumn = null;
        var rowIndex = parseInt(item.getAttribute('data-row'), 10) - 1;
        while (rowIndex > -1) {
            var items = this.collisions(rowIndex, colIndex, sizeX, sizeY, item);
            if (items.length !== 0) {
                break;
            }
            availableRow = rowIndex;
            availableColumn = colIndex;
            --rowIndex;
        }
        if (availableRow !== null) {
            this.sortItem(item, availableRow, availableColumn);
        }
    };
    DashboardLayout.prototype.sortItem = function (item, rowValue, columnValue, ignoreItems) {
        this.overlapElement = [];
        var column = parseInt(item.getAttribute('data-col'), 10);
        var row = parseInt(item.getAttribute('data-row'), 10);
        if (!this.sortedArray[row]) {
            this.sortedArray[row] = [];
        }
        this.sortedArray[row][column] = item;
        if (item !== undefined && rowValue !== undefined && columnValue !== undefined) {
            if (this.oldRowCol[item.id] !== undefined && this.oldRowCol[item.id].row !== null &&
                typeof this.oldRowCol[item.id].col !== 'undefined') {
                {
                    var oldRow = this.sortedArray[this.oldRowCol[item.id].row];
                    if (this.oldRowCol[item.id] && oldRow[this.oldRowCol[item.id].col] === item) {
                        delete oldRow[this.oldRowCol[item.id].col];
                        this.updateOldRowColumn();
                        this.sortedPanel();
                    }
                }
            }
            this.oldRowCol[item.id].row = rowValue;
            this.oldRowCol[item.id].row = columnValue;
            if (!this.sortedArray[row]) {
                this.sortedArray[row] = [];
            }
            this.sortedArray[row][column] = item;
            if (this.allItems.indexOf(item) === -1) {
                this.allItems.push(item);
            }
            this.panelPropertyChange(this.getCellInstance(item.id), { row: rowValue, col: columnValue });
            var panelModel = this.getCellInstance(item.id);
            this.setAttributes({ value: { col: panelModel.col.toString(), row: panelModel.row.toString() } }, item);
            this.updateLayout(item, this.getCellInstance(item.id));
        }
    };
    DashboardLayout.prototype.updateLayout = function (element, panelModel) {
        this.setPanelPosition(element, panelModel.row, panelModel.col);
        this.setHeightAndWidth(element, panelModel);
        this.updateRowHeight();
        this.sortedPanel();
    };
    ;
    DashboardLayout.prototype.refresh = function () {
        this.updateDragArea();
        if (this.checkMediaQuery()) {
            this.checkMediaQuerySizing();
        }
        else {
            if (this.element.classList.contains(responsive)) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], [responsive]);
                for (var i = 0; i < this.element.querySelectorAll('.e-panel').length; i++) {
                    var ele = this.element.querySelectorAll('.e-panel')[i];
                    var cellInstance = this.getCellInstance(ele.id);
                    var row = parseInt(ele.getAttribute('data-row'), 10);
                    var col = parseInt(ele.getAttribute('data-col'), 10);
                    this.panelPropertyChange(cellInstance, { row: row, col: col });
                    this.setHeightAndWidth(ele, this.getCellInstance(ele.id));
                    this.setPanelPosition(ele, row, col);
                    this.updateRowHeight();
                }
            }
            this.panelResponsiveUpdate();
            this.updateGridLines();
        }
        this.removeResizeClasses(this.panelCollection);
        this.setClasses(this.panelCollection);
        this.resizeEvents();
        this.checkDragging(this.dragCollection);
    };
    DashboardLayout.prototype.updateGridLines = function () {
        if (this.element.querySelector('.e-dashboard-gridline-table')) {
            if (this.table) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.table);
            }
            this.initGridLines();
        }
    };
    DashboardLayout.prototype.checkDragging = function (dragCollection) {
        if (this.checkMediaQuery() || !this.allowDragging) {
            for (var i = 0; i < dragCollection.length; i++) {
                dragCollection[i].destroy();
            }
        }
        else {
            for (var i = 0; i < dragCollection.length; i++) {
                dragCollection[i].destroy();
            }
            this.enableDraggingContent(this.panelCollection);
        }
    };
    DashboardLayout.prototype.sortPanels = function () {
        var model = [];
        var _loop_1 = function (row) {
            var _loop_2 = function (col) {
                this_1.panels.filter(function (panel) {
                    if (panel.row === row && panel.col === col) {
                        model.push(panel);
                    }
                });
            };
            for (var col = 0; col < this_1.columns; col++) {
                _loop_2(col);
            }
        };
        var this_1 = this;
        for (var row = 0; row <= this.rows; row++) {
            _loop_1(row);
        }
        return model;
    };
    DashboardLayout.prototype.checkMediaQuerySizing = function () {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], [responsive]);
        var updatedPanel = this.sortPanels();
        this.updatedRows = updatedPanel.length;
        for (var i = 0; i < updatedPanel.length; i++) {
            var panelElement = document.getElementById(updatedPanel[i].id);
            if (panelElement) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(panelElement, { 'width': '100%' });
                panelElement.style.height = ' ' + (this.element.parentElement
                    && this.element.parentElement.offsetWidth / this.cellAspectRatio) + 'px';
                this.cellSize[1] = this.element.parentElement
                    && (this.element.parentElement.offsetWidth / this.cellAspectRatio);
                if (this.addPanelCalled && this.isBlazor) {
                    var panelProp = this.getActualProperties(updatedPanel[i]);
                    panelProp.row = i;
                    panelProp.col = 0;
                    this.panelPropertyChange(updatedPanel[i], panelProp);
                    this.setPanelPosition(panelElement, i, 0);
                }
                else {
                    this.panelPropertyChange(updatedPanel[i], { row: i, col: 0 });
                    this.setPanelPosition(panelElement, updatedPanel[i].row, updatedPanel[i].col);
                }
                this.setClasses(this.panelCollection);
                this.checkDragging(this.dragCollection);
                this.removeResizeClasses(this.panelCollection);
            }
        }
        this.updateRowHeight();
    };
    DashboardLayout.prototype.panelResponsiveUpdate = function () {
        this.element.classList.add('e-responsive');
        this.calculateCellSize();
        for (var i = 0; i < this.element.querySelectorAll('.e-panel').length; i++) {
            var ele = this.element.querySelectorAll('.e-panel')[i];
            var panelModel = this.getCellInstance(ele.id);
            this.setHeightAndWidth(ele, panelModel);
        }
        for (var i = 0; i < this.panels.length; i++) {
            this.setPanelPosition(document.getElementById(this.panels[i].id), this.panels[i].row, this.panels[i].col);
        }
        this.updateRowHeight();
    };
    DashboardLayout.prototype.updateRowHeight = function () {
        this.getRowColumn();
        this.setHeightWidth();
    };
    DashboardLayout.prototype.setHeightWidth = function () {
        var heightValue;
        var widthValue;
        if (this.checkMediaQuery()) {
            heightValue = ((this.maxRow()) *
                (this.element.parentElement && ((this.element.parentElement.offsetWidth)) / this.cellAspectRatio) +
                (this.maxRow() - 1) * this.cellSpacing[1]) + 'px';
        }
        else {
            heightValue = ((this.maxRow()) *
                (this.cellSize[0] / this.cellAspectRatio) + (this.maxRow() - 1) * this.cellSpacing[1]) + 'px';
        }
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.element, { 'height': heightValue });
        widthValue = window.getComputedStyle(this.element).width;
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.element, { 'width': widthValue });
    };
    DashboardLayout.prototype.setHeightAndWidth = function (panelElement, panelModel) {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(panelElement, { 'height': Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(this.setXYDimensions(panelModel)[0]) });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(panelElement, { 'width': Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(this.setXYDimensions(panelModel)[1]) });
    };
    DashboardLayout.prototype.renderCell = function (panel, isStringTemplate, index) {
        var cellElement;
        this.dimensions = this.setXYDimensions(panel);
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(panel.enabled)) {
            panel.enabled = true;
        }
        if (this.isBlazor) {
            cellElement = document.getElementById(panel.id);
        }
        else {
            if (this.contentTemplateChild.length > 0 && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(index)) {
                cellElement = this.contentTemplateChild[index];
                if (panel.cssClass) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([cellElement], [panel.cssClass]);
                }
                if (panel.id) {
                    cellElement.setAttribute('id', panel.id);
                }
            }
            else {
                cellElement = this.createPanelElement(panel.cssClass ? panel.cssClass.split(' ') : null, panel.id);
            }
            cellElement.style.zIndex = '' + panel.zIndex;
            this.element.appendChild(cellElement);
        }
        var dashBoardCell = this.renderPanels(cellElement, panel, panel.id, isStringTemplate);
        this.panelCollection.push(dashBoardCell);
        if (!this.isBlazor) {
            this.setXYAttributes(cellElement, panel);
        }
        else {
            var bodyElement = cellElement.querySelector('.e-panel-content');
            if (bodyElement) {
                var headerHeight = cellElement.querySelector('.e-panel-header') ?
                    window.getComputedStyle(cellElement.querySelector('.e-panel-header')).height : '0px';
                var contentHeightValue = 'calc( 100% - ' + headerHeight + ')';
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(bodyElement, { height: contentHeightValue });
            }
        }
        this.setHeightAndWidth(cellElement, panel);
        return cellElement;
    };
    DashboardLayout.prototype.setPanelPosition = function (cellElement, row, col) {
        if (!cellElement) {
            return;
        }
        var heightValue = this.getCellSize()[1];
        var widthValue = this.getCellSize()[0];
        var left = col === 0 ? 0 : (((col) * ((widthValue) + this.cellSpacing[0])));
        var top = row === 0 ? 0 : (((row) * ((heightValue) + this.cellSpacing[1])));
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(cellElement, { 'left': left + 'px', 'top': top + 'px' });
    };
    DashboardLayout.prototype.getRowColumn = function () {
        this.rows = null;
        if (this.element.querySelectorAll('.e-panel').length > 0 && !this.updatedRows) {
            var panelElements = this.element.querySelectorAll('.e-panel');
            for (var i = 0; i < panelElements.length; i++) {
                var panelElement = panelElements[i];
                var rowValue = parseInt(panelElement.getAttribute('data-row'), 10);
                var xValue = parseInt(panelElement.getAttribute('data-sizeY'), 10);
                this.rows = Math.max(this.rows, (rowValue + xValue));
            }
        }
        else {
            if (this.updatedRows) {
                this.rows = this.updatedRows;
                this.updatedRows = null;
            }
            for (var i = 0; i < this.panels.length; i++) {
                this.rows = Math.max(this.rows, this.panels[i].row);
            }
        }
    };
    DashboardLayout.prototype.setMinMaxValues = function (panel) {
        if (!panel.sizeX || panel.sizeX < panel.minSizeX) {
            this.panelPropertyChange(panel, { sizeX: panel.minSizeX });
        }
        else if ((panel.maxSizeX && panel.sizeX > panel.maxSizeX)) {
            this.panelPropertyChange(panel, { sizeX: panel.maxSizeX });
        }
        else if (panel.sizeX > this.columns) {
            this.panelPropertyChange(panel, { sizeX: this.columns });
        }
        else {
            this.panelPropertyChange(panel, { sizeX: panel.sizeX });
        }
        if (!panel.sizeY || panel.sizeY < panel.minSizeY) {
            this.panelPropertyChange(panel, { sizeY: panel.minSizeY });
        }
        else if (panel.maxSizeY && panel.sizeY > panel.maxSizeY) {
            this.panelPropertyChange(panel, { sizeY: panel.maxSizeY });
        }
        else {
            this.panelPropertyChange(panel, { sizeY: panel.sizeY });
        }
    };
    DashboardLayout.prototype.checkMinMaxValues = function (panel) {
        if (panel.col + panel.sizeX > this.columns) {
            this.panelPropertyChange(panel, { sizeX: panel.sizeX + (this.columns - (panel.col + panel.sizeX)) });
        }
    };
    DashboardLayout.prototype.panelPropertyChange = function (panel, value) {
        this.allowServerDataBinding = false;
        // tslint:disable-next-line
        panel.setProperties(value, true);
    };
    DashboardLayout.prototype.renderDashBoardCells = function (cells) {
        if (this.element.querySelectorAll('.e-panel').length > 0 || this.panels.length > 0) {
            for (var j = 0; j < cells.length; j++) {
                this.gridPanelCollection.push(cells[j]);
                if (!(this.isBlazor && this.panels.length > 0)) {
                    this.setMinMaxValues(cells[j]);
                }
                if (this.maxColumnValue < cells[j].col || this.maxColumnValue < (cells[j].col + cells[j].sizeX)) {
                    this.panelPropertyChange(cells[j], { col: this.maxColumnValue - cells[j].sizeX });
                }
                var cell = this.renderCell(cells[j], false, j);
                if (!this.isBlazor) {
                    if (this.enableRtl) {
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([cell], 'e-rtl');
                    }
                    this.element.appendChild(cell);
                }
                if (this.checkMediaQuery() && j === cells.length - 1) {
                    this.checkMediaQuerySizing();
                }
                else {
                    this.setPanelPosition(cell, cells[j].row, cells[j].col);
                    this.mainElement = cell;
                    this.updatePanelLayout(cell, cells[j]);
                    this.mainElement = null;
                }
            }
        }
        this.setClasses(this.panelCollection);
    };
    DashboardLayout.prototype.collisions = function (row, col, sizeX, sizeY, ignore) {
        var items = [];
        if (!sizeX || !sizeY) {
            sizeX = sizeY = 1;
        }
        if (ignore && !(ignore instanceof Array)) {
            ignore = [ignore];
        }
        var item;
        for (var h = 0; h < sizeY; ++h) {
            for (var w = 0; w < sizeX; ++w) {
                item = this.getPanel(row + h, col + w, ignore);
                if (item && (!ignore || ignore.indexOf(document.getElementById(item.id)) === -1) &&
                    items.indexOf(document.getElementById(item.id)) === -1) {
                    items.push(document.getElementById(item.id));
                }
            }
        }
        return items;
    };
    ;
    DashboardLayout.prototype.rightWardsSpaceChecking = function (rowElements, col, ele) {
        var _this = this;
        var columns = [];
        var spacedColumns = [];
        rowElements.forEach(function (element) {
            var columnValue = parseInt(element.getAttribute('data-col'), 10);
            var sizeXValue = parseInt(element.getAttribute('data-sizeX'), 10);
            if (col < _this.columns && columnValue >= col) {
                if (sizeXValue > 1) {
                    for (var i = columnValue; i < columnValue + sizeXValue; i++) {
                        columns.push(i);
                    }
                }
                else {
                    columns.push(columnValue);
                }
            }
        });
        if (columns.length > 0) {
            for (var i = col + 1; i <= this.columns - 1; i++) {
                if (columns.indexOf(i) === -1 && i !== col) {
                    if (spacedColumns.indexOf(i) === -1) {
                        spacedColumns.push(i);
                    }
                }
            }
        }
        var occupiedValues = this.getOccupiedColumns(ele, 'right');
        occupiedValues.forEach(function (colValue) {
            if (colValue > col && spacedColumns.indexOf(colValue) !== -1) {
                spacedColumns.splice(spacedColumns.indexOf(colValue), 1);
            }
        });
        var eleOccupiedValues = this.getOccupiedColumns(this.checkingElement, 'left');
        eleOccupiedValues.forEach(function (col) {
            if (col > parseInt(ele.getAttribute('data-col'), 10) && occupiedValues.indexOf(col) === -1 &&
                spacedColumns.indexOf(col) === -1) {
                spacedColumns.push(col);
            }
        });
        spacedColumns = spacedColumns.sort(function (next, previous) { return next - previous; });
        return spacedColumns;
    };
    DashboardLayout.prototype.getOccupiedColumns = function (element, type) {
        var occupiedItems = [];
        var sizeX = parseInt(element.getAttribute('data-sizeX'), 10);
        var col = parseInt(element.getAttribute('data-col'), 10);
        for (var i = col; (i < col + sizeX && i <= this.columns); i++) {
            occupiedItems.push(i);
        }
        return occupiedItems;
    };
    DashboardLayout.prototype.leftWardsSpaceChecking = function (rowElements, col, ele) {
        var _this = this;
        var spacedColumns = [];
        var columns = [];
        rowElements.forEach(function (element) {
            var colValue = parseInt(element.getAttribute('data-col'), 10);
            var xValue = parseInt(element.getAttribute('data-sizeX'), 10);
            if (col <= _this.columns && colValue <= col) {
                if (xValue > 1) {
                    for (var i = colValue; i < colValue + xValue; i++) {
                        columns.push(i);
                    }
                }
                else {
                    columns.push(colValue);
                }
            }
        });
        if (columns.length > 0) {
            for (var i = 0; i <= col; i++) {
                if (columns.indexOf(i) === -1 && i !== col) {
                    if (spacedColumns.indexOf(i) === -1) {
                        spacedColumns.push(i);
                    }
                }
            }
        }
        var occupiedValues = this.getOccupiedColumns(ele, 'left');
        occupiedValues.forEach(function (colValue) {
            if (colValue < col && spacedColumns.indexOf(colValue) !== -1) {
                spacedColumns.splice(spacedColumns.indexOf(colValue), 1);
            }
        });
        var eleOccupiedValues = this.getOccupiedColumns(this.checkingElement, 'left');
        eleOccupiedValues.forEach(function (col) {
            if (col < parseInt(ele.getAttribute('data-col'), 10) && occupiedValues.indexOf(col) === -1 &&
                spacedColumns.indexOf(col) === -1) {
                spacedColumns.push(col);
            }
        });
        spacedColumns = spacedColumns.sort(function (next, prev) { return next - prev; });
        spacedColumns = spacedColumns.reverse();
        return spacedColumns;
    };
    DashboardLayout.prototype.adjustmentAvailable = function (row, col, sizeY, sizeX, ele) {
        this.leftAdjustable = undefined;
        this.rightAdjustable = undefined;
        var isAdjustable = false;
        var leftSpacing;
        var rightSpacing;
        var rowElement = [];
        this.topAdjustable = undefined;
        var eleSizeX = parseInt(ele.getAttribute('data-sizeX'), 10);
        var eleCol = parseInt(ele.getAttribute('data-col'), 10);
        rowElement = this.getRowElements(this.collisions(row, 0, this.columns, sizeY, []));
        if (rowElement.indexOf(ele) === -1) {
            rowElement.push(ele);
        }
        leftSpacing = this.leftWardsSpaceChecking(rowElement, col, ele);
        if (leftSpacing.length > 0) {
            this.leftAdjustable = this.isLeftAdjustable(leftSpacing, ele, row, col, sizeX, sizeY);
            if (this.spacedColumnValue !== eleCol - this.getCellInstance(this.checkingElement.id).sizeX) {
                this.leftAdjustable = false;
            }
            if (this.leftAdjustable) {
                this.rightAdjustable = false;
            }
            else {
                this.leftAdjustable = false;
                rightSpacing = this.rightWardsSpaceChecking(rowElement, col, ele);
                this.rightAdjustable = rightSpacing.length > 0 ? this.isRightAdjustable(rightSpacing, ele, row, col, sizeX, sizeY) : false;
                if (this.spacedColumnValue !== eleSizeX + eleCol) {
                    this.rightAdjustable = false;
                }
                if (!this.rightAdjustable) {
                    this.rightAdjustable = false;
                }
            }
        }
        else {
            rightSpacing = this.rightWardsSpaceChecking(rowElement, col, ele);
            this.rightAdjustable = rightSpacing.length > 0 ? this.isRightAdjustable(rightSpacing, ele, row, col, sizeX, sizeY) : false;
            if (this.spacedColumnValue !== eleSizeX + eleCol) {
                this.rightAdjustable = false;
            }
            if (this.rightAdjustable) {
                this.leftAdjustable = false;
            }
        }
        if (!this.rightAdjustable && !this.leftAdjustable && row > 0) {
            var endRow = this.getCellInstance(ele.id).row;
            var topCheck = false;
            if (this.startRow !== endRow) {
                topCheck = true;
            }
            for (var rowValue = row; rowValue >= 0; rowValue--) {
                var element = (this.getCellInstance(ele.id).sizeY > 1 && topCheck) ? this.checkingElement : ele;
                if ((rowValue !== endRow) && (rowValue === endRow - sizeY) &&
                    this.collisions(rowValue, col, sizeX, sizeY, element).length === 0) {
                    topCheck = false;
                    this.topAdjustable = true;
                    this.spacedRowValue = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spacedRowValue) ? rowValue : this.spacedRowValue;
                    this.spacedColumnValue = col;
                }
            }
        }
        if (this.rightAdjustable || this.leftAdjustable || this.topAdjustable) {
            isAdjustable = true;
            if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spacedRowValue)) {
                this.spacedRowValue = row;
            }
        }
        return isAdjustable;
    };
    DashboardLayout.prototype.isXSpacingAvailable = function (spacing, sizeX) {
        var isSpaceAvailable = false;
        var subSpacingColumns = [];
        for (var i = 0; i < spacing.length; i++) {
            if (spacing[i + 1] - spacing[i] === 1 || spacing[i + 1] - spacing[i] === -1) {
                subSpacingColumns.push(spacing[i]);
                if (sizeX === 2) {
                    subSpacingColumns.push(spacing[i + 1]);
                }
                if (i === spacing.length - 2) {
                    subSpacingColumns.push(spacing[i + 1]);
                    if (subSpacingColumns.length > sizeX) {
                        subSpacingColumns.splice(-1);
                    }
                }
                if (subSpacingColumns.length === sizeX) {
                    isSpaceAvailable = true;
                    this.spacedColumnValue = subSpacingColumns.sort(function (next, previous) { return next - previous; })[0];
                    if (this.spacedColumnValue < 0) {
                        this.spacedColumnValue = 1;
                    }
                    return isSpaceAvailable;
                }
            }
            else {
                subSpacingColumns = [];
                continue;
            }
        }
        return isSpaceAvailable;
    };
    DashboardLayout.prototype.getRowElements = function (base) {
        var rowElements = [];
        for (var i = 0; i < base.length; i++) {
            rowElements.push(base[i]);
        }
        return rowElements;
    };
    DashboardLayout.prototype.isLeftAdjustable = function (spaces, ele, row, col, sizeX, sizeY) {
        var isLeftAdjudtable;
        if (sizeX === 1 && sizeY === 1 && spaces.length > 0) {
            this.spacedColumnValue = spaces[0];
            isLeftAdjudtable = true;
        }
        else if (sizeX > 1 && sizeY === 1) {
            isLeftAdjudtable = this.isXSpacingAvailable(spaces, sizeX);
        }
        else if (sizeY > 1) {
            if (sizeX === 1) {
                var xAdjust = void 0;
                if (spaces.length >= 1) {
                    xAdjust = true;
                }
                if (xAdjust) {
                    for (var i = 0; i < spaces.length; i++) {
                        var collisionValue = this.collisions(row, spaces[i], sizeX, sizeY, this.checkingElement);
                        if (collisionValue.length === 0) {
                            this.spacedColumnValue = spaces[i];
                            isLeftAdjudtable = true;
                            return isLeftAdjudtable;
                        }
                        else {
                            isLeftAdjudtable = false;
                        }
                    }
                }
            }
            else {
                isLeftAdjudtable = this.replacable(spaces, sizeX, row, sizeY, ele);
            }
        }
        return isLeftAdjudtable;
    };
    DashboardLayout.prototype.isRightAdjustable = function (spacing, ele, row, col, sizeX, sizeY) {
        var isRightAdjudtable;
        if (sizeX === 1 && sizeY === 1 && spacing.length > 0) {
            this.spacedColumnValue = spacing[0];
            isRightAdjudtable = true;
        }
        else if (sizeX > 1 && sizeY === 1) {
            isRightAdjudtable = this.isXSpacingAvailable(spacing, sizeX);
        }
        else if (sizeY > 1) {
            if (sizeX === 1) {
                var xAdjust = void 0;
                if (spacing.length >= 1) {
                    xAdjust = true;
                }
                if (xAdjust) {
                    for (var i = 0; i < spacing.length; i++) {
                        var collisionValue = this.collisions(row, spacing[i], sizeX, sizeY, this.checkingElement);
                        for (var collision = 0; collision < collisionValue.length; collision++) {
                            if (parseInt(ele.getAttribute('data-col'), 10) !== spacing[i]) {
                                collisionValue.splice(collisionValue.indexOf(collisionValue[collision]), 1);
                            }
                        }
                        if (collisionValue.length === 0) {
                            isRightAdjudtable = true;
                            this.spacedColumnValue = spacing[i];
                            return isRightAdjudtable;
                        }
                        else {
                            isRightAdjudtable = false;
                        }
                    }
                }
            }
            else {
                isRightAdjudtable = this.replacable(spacing, sizeX, row, sizeY, ele);
            }
        }
        return isRightAdjudtable;
    };
    DashboardLayout.prototype.replacable = function (spacing, sizeX, row, sizeY, ele) {
        var isRightAdjudtable;
        var updatedCollision = [];
        for (var j = 0; j < spacing.length; j++) {
            var xAdjust = this.isXSpacingAvailable(spacing, sizeX);
            if (xAdjust) {
                var exclusions = [];
                exclusions.push(this.checkingElement);
                exclusions.push(ele);
                if (updatedCollision.length === 0) {
                    isRightAdjudtable = true;
                    this.spacedColumnValue = this.spacedColumnValue;
                    return isRightAdjudtable;
                }
                else {
                    isRightAdjudtable = false;
                }
            }
        }
        return isRightAdjudtable;
    };
    DashboardLayout.prototype.sortCollisionItems = function (collisionItems) {
        var updatedCollision = [];
        var rowElements;
        var _loop_3 = function (row) {
            rowElements = [];
            collisionItems.forEach(function (element) {
                if (element && element.getAttribute('data-row') === row.toString()) {
                    rowElements.push(element);
                }
            });
            var _loop_4 = function (column) {
                rowElements.forEach(function (item) {
                    if (item && item.getAttribute('data-col') === column.toString()) {
                        updatedCollision.push(item);
                    }
                });
            };
            for (var column = this_2.columns - 1; column >= 0; column--) {
                _loop_4(column);
            }
        };
        var this_2 = this;
        for (var row = this.rows - 1; row >= 0; row--) {
            _loop_3(row);
        }
        return updatedCollision;
    };
    DashboardLayout.prototype.updatedModels = function (collisionItems, panelModel, ele) {
        var _this = this;
        var removeableElement = [];
        if (!this.mainElement) {
            this.sortedPanel();
        }
        collisionItems.forEach(function (element) {
            _this.checkingElement = element;
            var model = _this.getCellInstance(element.id);
            var adjust = !_this.adjustmentAvailable(model.row, model.col, model.sizeY, model.sizeX, ele);
            if (model.sizeX > 1 && adjust) {
                for (var rowValue = model.row; rowValue < panelModel.row + panelModel.sizeY; rowValue++) {
                    var collisions = _this.collisions(rowValue, model.col, model.sizeX, model.sizeY, element);
                    collisions.forEach(function (item) {
                        if (collisionItems.indexOf(item) >= 0 && removeableElement.indexOf(item) === -1) {
                            removeableElement.push(item);
                        }
                    });
                }
            }
        });
        removeableElement.forEach(function (item) {
            if (removeableElement.indexOf(item) >= 0) {
                collisionItems.splice(collisionItems.indexOf(item), 1);
            }
        });
        return collisionItems;
    };
    DashboardLayout.prototype.resetLayout = function (model, element) {
        var collisions = this.collisions(model.row, model.col, model.sizeX, model.sizeY, this.mainElement);
        if (!this.mainElement || this.addPanelCalled || this.resizeCalled || this.movePanelCalled) {
            return collisions;
        }
        if (this.mainElement && this.oldRowCol !== this.cloneObject) {
            for (var i = 0; i < this.panels.length; i++) {
                var element_1 = document.getElementById(this.panels[i].id);
                if (element_1 === this.mainElement) {
                    continue;
                }
                var rowValue = this.cloneObject[element_1.id].row;
                var colValue = this.cloneObject[element_1.id].col;
                this.setPanelPosition(element_1, rowValue, colValue);
                this.panelPropertyChange(this.getCellInstance(element_1.id), { row: rowValue, col: colValue });
                this.setAttributes({ value: { col: colValue.toString(), row: rowValue.toString() } }, element_1);
                this.updateOldRowColumn();
            }
        }
        this.sortedArray = this.cloneArray;
        collisions = this.collisions(model.row, model.col, model.sizeX, model.sizeY, this.mainElement);
        this.sortedPanel();
        this.updateOldRowColumn();
        if (this.checkCollision && this.checkCollision.length > 0 && collisions.indexOf(this.checkCollision[0]) === -1 &&
            this.cloneObject[this.checkCollision[0].id].row === model.row) {
            collisions.push(this.checkCollision[0]);
        }
        return collisions;
    };
    DashboardLayout.prototype.swapAvailability = function (collisions, element) {
        var available = true;
        var eleModel = this.getCellInstance(element.id);
        for (var count = 0; count < collisions.length; count++) {
            var collideModel = this.getCellInstance(collisions[count].id);
            for (var i = 1; i < eleModel.sizeY; i++) {
                var excludeEle = [];
                excludeEle.push(element);
                excludeEle.push(collisions[count]);
                var collision = void 0;
                collision = this.collisions(eleModel.row + i, collideModel.col, collideModel.sizeX, collideModel.sizeY, excludeEle);
                if (collision.length > 0) {
                    available = false;
                    return false;
                }
                else {
                    continue;
                }
            }
        }
        return available;
    };
    DashboardLayout.prototype.checkForSwapping = function (collisions, element, panelModel) {
        if (!this.mainElement || collisions.length === 0) {
            return false;
        }
        var direction;
        var eleSwapRow = parseInt(collisions[0].getAttribute('data-row'), 10);
        if (this.startRow < eleSwapRow) {
            direction = 1;
        }
        else if (this.startRow > eleSwapRow) {
            direction = 0;
        }
        if (!this.swapAvailability(collisions, element)) {
            return false;
        }
        var isSwappable = false;
        for (var count1 = 0; count1 < collisions.length; count1++) {
            if (collisions.length >= 1 && this.cloneObject[this.mainElement.id].row === this.oldRowCol[this.mainElement.id].row) {
                return false;
            }
        }
        var updatedRow = direction === 0 ?
            this.getCellInstance(this.mainElement.id).row + this.getCellInstance(this.mainElement.id).sizeY
            : this.startRow;
        for (var count = 0; count < collisions.length; count++) {
            var collideInstance = this.getCellInstance(collisions[count].id);
            var elementinstance = this.getCellInstance(element.id);
            var ignore = [];
            if (collideInstance.sizeY === 1 && ignore.indexOf(collisions[count]) === -1) {
                ignore.push(collisions[count]);
            }
            else if (collideInstance.sizeY > 1 && ignore.indexOf(collisions[count]) === -1) {
                if (direction === 1 && elementinstance.row === (this.cloneObject[collideInstance.id].row + collideInstance.sizeY - 1)) {
                    ignore.push(collisions[count]);
                }
                else if (direction === 0 && elementinstance.row === (this.cloneObject[collideInstance.id].row)) {
                    ignore.push(collisions[count]);
                }
                else {
                    return false;
                }
            }
            if (collideInstance.sizeY <= elementinstance.sizeY && ignore.indexOf(collisions[count]) === -1) {
                ignore.push(collisions[count]);
            }
            var swapCollision = void 0;
            ignore.push(this.mainElement);
            swapCollision = this.collisions(updatedRow, collideInstance.col, collideInstance.sizeX, collideInstance.sizeY, ignore);
            if (swapCollision.length > 0) {
                isSwappable = false;
                return isSwappable;
            }
            else {
                if (count === collisions.length - 1) {
                    isSwappable = true;
                }
                continue;
            }
        }
        return isSwappable;
    };
    DashboardLayout.prototype.swapItems = function (collisions, element, panelModel) {
        var _this = this;
        var direction;
        var swappedElements = [];
        swappedElements.push(element);
        var eleSwapRow = parseInt(collisions[0].getAttribute('data-row'), 10);
        if (this.startRow < eleSwapRow) {
            direction = 1;
        }
        else if (this.startRow > eleSwapRow) {
            direction = 0;
        }
        var collisionItemsRow = direction === 0 ? eleSwapRow + panelModel.sizeY : this.startRow;
        if (!this.movePanelCalled) {
            var collisionInstance = this.getCellInstance(collisions[0].id);
            this.panelPropertyChange(panelModel, { row: direction === 0 ? eleSwapRow : collisionItemsRow + collisionInstance.sizeY });
        }
        for (var count = 0; count < collisions.length; count++) {
            swappedElements.push(collisions[count]);
            this.setPanelPosition(collisions[count], collisionItemsRow, (this.getCellInstance(collisions[count].id)).col);
            this.panelPropertyChange(this.getCellInstance(collisions[count].id), { row: collisionItemsRow });
            collisions[count].setAttribute('data-row', collisionItemsRow.toString());
        }
        element.setAttribute('data-row', panelModel.row.toString());
        this.setPanelPosition(this.shadowEle, panelModel.row, panelModel.col);
        for (var i = 0; i < this.panels.length; i++) {
            this.oldRowCol[this.panels[i].id] = { row: this.panels[i].row, col: this.panels[i].col };
        }
        this.startRow = panelModel.row;
        this.updateOldRowColumn();
        swappedElements.forEach(function (item) {
            _this.cloneObject[item.id] = _this.oldRowCol[item.id];
            var itemModel = _this.getCellInstance(item.id);
            for (var i = 0; i < _this.sortedArray.length; i++) {
                if (!_this.sortedArray[i]) {
                    continue;
                }
                for (var j = 0; j < _this.sortedArray[i].length; j++) {
                    if (_this.sortedArray[i][j] === item) {
                        _this.sortedArray[i][j] = undefined;
                    }
                }
            }
            if (!_this.sortedArray[itemModel.row]) {
                _this.sortedArray[itemModel.row] = [];
            }
            _this.sortedArray[itemModel.row][itemModel.col] = item;
            _this.cloneArray = _this.sortedArray;
        });
    };
    DashboardLayout.prototype.updatePanelLayout = function (element, panelModel) {
        this.collisionChecker = {};
        var initialModel = [];
        var checkForAdjustment;
        var collisionModels = [];
        var swappingAvailable;
        if (this.mainElement && this.isRenderComplete) {
            initialModel = this.resetLayout(panelModel, element);
        }
        else {
            initialModel = this.collisions(panelModel.row, panelModel.col, panelModel.sizeX, panelModel.sizeY, element);
        }
        if (initialModel.length > 0) {
            initialModel = this.sortCollisionItems(initialModel);
            initialModel = this.updatedModels(initialModel, panelModel, element);
            swappingAvailable = !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.startRow) ? this.checkForSwapping(initialModel, element, panelModel) : false;
            if (swappingAvailable) {
                this.swapItems(initialModel, element, panelModel);
            }
            else {
                for (var i = 0; i < initialModel.length; i++) {
                    var model = this.getCellInstance(initialModel[i].id);
                    this.checkingElement = initialModel[i];
                    this.spacedRowValue = null;
                    this.spacedColumnValue = null;
                    checkForAdjustment = this.adjustmentAvailable(model.row, model.col, model.sizeY, model.sizeX, element);
                    if (checkForAdjustment && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.spacedColumnValue)) {
                        this.setPanelPosition(initialModel[i], this.spacedRowValue, this.spacedColumnValue);
                        this.oldRowCol[(initialModel[i].id)] = { row: this.spacedRowValue, col: this.spacedColumnValue };
                        var value = {
                            attributes: {
                                row: this.spacedRowValue.toString(),
                                col: this.spacedColumnValue.toString(),
                            }
                        };
                        this.setAttributes(value, initialModel[i]);
                        this.panelPropertyChange(model, { col: this.spacedColumnValue, row: this.spacedRowValue });
                        // updated the panel model array as inTopAdjustable case with floating enabled instead of dragging and extra row
                        if (this.topAdjustable && this.allowFloating) {
                            this.updatePanels();
                            this.updateCloneArrayObject();
                        }
                        this.spacedRowValue = null;
                        if (i < initialModel.length) {
                            continue;
                        }
                    }
                    else {
                        collisionModels.push(initialModel[i]);
                    }
                }
            }
        }
        if (collisionModels.length > 0) {
            var proxy_1 = this;
            collisionModels.forEach(function (item1) {
                if (proxy_1.overlapElement.indexOf(item1) === -1) {
                    proxy_1.overlapElement.push(item1);
                }
            });
            if (this.overlapElement && this.overlapElement.indexOf(element) !== -1) {
                this.overlapElement.splice(this.overlapElement.indexOf(element), 1);
            }
            if (collisionModels.length > 0) {
                this.updateRowColumn(panelModel.row, this.overlapElement, element);
                this.checkForCompletePushing();
            }
        }
        if (!this.isSubValue) {
            this.sortedPanel();
        }
        this.updateRowHeight();
        this.updateGridLines();
    };
    DashboardLayout.prototype.checkForCompletePushing = function () {
        for (var i = 0; i < this.panels.length; i++) {
            if (this.collisionChecker[this.panels[i].id] && this.collisionChecker[this.panels[i].id] !== null) {
                this.overlapElement = [this.collisionChecker[this.panels[i].id].ele];
                var key = this.panels[i].id;
                this.updateRowColumn(this.collisionChecker[key].row, this.overlapElement, this.collisionChecker[key].srcEle);
            }
        }
    };
    DashboardLayout.prototype.updateCollisionChecked = function (item) {
        for (var count = 0; count < Object.keys(this.collisionChecker).length; count++) {
            this.collisionChecker[item.id] = null;
        }
    };
    DashboardLayout.prototype.updateRowColumn = function (row, ele, srcEle) {
        if (!srcEle) {
            return;
        }
        var eleSizeY = parseInt(srcEle.getAttribute('data-sizeY'), 10);
        var eleRow = parseInt(srcEle.getAttribute('data-row'), 10);
        this.overlapElementClone = this.overlapElement && !this.shouldRestrict ? this.overlapElement : this.overlapElement;
        for (var i = 0; i < this.overlapElementClone.length; i++) {
            if (this.overlapElementClone.length === 0) {
                return;
            }
            for (var i_1 = 0; i_1 < this.overlapElementClone.length; i_1++) {
                this.collisionChecker[this.overlapElementClone[i_1].id] = {
                    ele: this.overlapElementClone[i_1],
                    row: row,
                    srcEle: srcEle
                };
            }
            var updatedRow = eleRow + eleSizeY;
            var collisionY = parseInt(this.overlapElementClone[i].getAttribute('data-sizeY'), 10);
            var collisionCol = parseInt(this.overlapElementClone[i].getAttribute('data-col'), 10);
            var collisionX = parseInt(this.overlapElementClone[i].getAttribute('data-sizeX'), 10);
            var colValue = void 0;
            var collisionModels = void 0;
            if (this.overlapSubElementClone.indexOf(srcEle) === -1) {
                this.overlapSubElementClone.push(srcEle);
            }
            if (this.overlapSubElementClone.indexOf(this.overlapElementClone[i]) === -1) {
                this.overlapSubElementClone.push(this.overlapElementClone[i]);
            }
            if (collisionY > 1 || collisionX > 1) {
                var overlapElementModel = this.getCellInstance(this.overlapElementClone[i].id);
                colValue = overlapElementModel.col;
                var ele_1 = document.getElementById(overlapElementModel.id);
                for (var k = overlapElementModel.row; k < eleRow + eleSizeY; k++) {
                    this.isSubValue = true;
                    this.panelPropertyChange(overlapElementModel, { row: overlapElementModel.row + 1 });
                    ele_1.setAttribute('data-row', overlapElementModel.row.toString());
                    this.setPanelPosition(ele_1, overlapElementModel.row, colValue);
                    this.updateCollisionChecked(ele_1);
                    this.oldRowCol[(ele_1.id)] = { row: overlapElementModel.row, col: colValue };
                    var panelModel = this.getCellInstance(ele_1.id);
                    this.panelPropertyChange(panelModel, { col: colValue, row: overlapElementModel.row });
                    var eleRow_1 = parseInt(ele_1.getAttribute('data-row'), 10);
                    var eleCol = parseInt(ele_1.getAttribute('data-col'), 10);
                    var sizeX = parseInt(ele_1.getAttribute('data-sizeX'), 10);
                    var sizeY = parseInt(ele_1.getAttribute('data-sizeY'), 10);
                    var excludeElements = [];
                    excludeElements.push(ele_1);
                    excludeElements.push(srcEle);
                    collisionModels = this.collisions(eleRow_1, eleCol, sizeX, sizeY, excludeElements);
                    if (this.mainElement && collisionModels.indexOf(this.mainElement) !== -1) {
                        collisionModels.splice(collisionModels.indexOf(this.mainElement), 1);
                    }
                    this.collisionPanel(collisionModels, eleCol, eleRow_1, ele_1);
                }
                this.isSubValue = false;
            }
            else {
                if (this.addPanelCalled) {
                    this.addPanelCalled = false;
                }
                this.overlapElementClone[i].setAttribute('data-row', updatedRow.toString());
                var excludeEle = [];
                excludeEle.push(this.overlapElementClone[i]);
                excludeEle.push(srcEle);
                collisionModels = this.collisions(updatedRow, collisionCol, collisionX, collisionY, excludeEle);
                if (this.mainElement && collisionModels.indexOf(this.mainElement) !== -1) {
                    collisionModels.splice(collisionModels.indexOf(this.mainElement), 1);
                }
                colValue = parseInt(this.overlapElementClone[i].getAttribute('data-col'), 10);
                this.setPanelPosition(this.overlapElementClone[i], updatedRow, colValue);
                this.updateCollisionChecked(this.overlapElementClone[i]);
                this.oldRowCol[(this.overlapElementClone[i].id)] = { row: updatedRow, col: colValue };
                var panelModel = this.getCellInstance(this.overlapElementClone[i].id);
                this.panelPropertyChange(panelModel, { col: colValue, row: updatedRow });
                this.collisionPanel(collisionModels, colValue, updatedRow, this.overlapElementClone[i]);
            }
        }
    };
    DashboardLayout.prototype.collisionPanel = function (collisionModels, colValue, updatedRow, clone) {
        var panelModel = this.getCellInstance(clone.id);
        this.panelPropertyChange(panelModel, { row: updatedRow, col: colValue });
        if (collisionModels.length > 0) {
            var proxy_2 = this;
            this.overlapElement = [];
            this.shouldRestrict = true;
            collisionModels.forEach(function (item1) {
                proxy_2.overlapElement.push(item1);
            });
            var overlapElementRow1 = parseInt(clone.getAttribute('data-row'), 10);
            for (var m = 0; m < this.overlapElement.length; m++) {
                this.updateRowColumn(overlapElementRow1, this.overlapElement, clone);
            }
            this.shouldRestrict = false;
        }
        else {
            if (!this.addPanelCalled) {
                this.sortedPanel();
            }
            if (this.overlapSubElementClone.length > 0) {
                var _loop_5 = function (p) {
                    var rowVal = parseInt(this_3.overlapSubElementClone[p].getAttribute('data-row'), 10);
                    var colValue_1 = parseInt(this_3.overlapSubElementClone[p].getAttribute('data-col'), 10);
                    var sizeX = parseInt(this_3.overlapSubElementClone[p].getAttribute('data-sizeX'), 10);
                    var sizeY = parseInt(this_3.overlapSubElementClone[p].getAttribute('data-sizeY'), 10);
                    var collisionModels1 = void 0;
                    collisionModels1 = this_3.collisions(rowVal, colValue_1, sizeX, sizeY, this_3.overlapSubElementClone);
                    if (this_3.mainElement && collisionModels1.indexOf(this_3.mainElement) !== -1) {
                        collisionModels1.splice(collisionModels1.indexOf(this_3.mainElement), 1);
                    }
                    var proxy = this_3;
                    collisionModels1.forEach(function (item1) {
                        proxy.overlapElement.push(item1);
                    });
                    if (collisionModels1.length > 0) {
                        this_3.updateRowColumn(rowVal, this_3.overlapElement, this_3.overlapSubElementClone[p]);
                    }
                };
                var this_3 = this;
                for (var p = 0; p < this.overlapSubElementClone.length; p++) {
                    _loop_5(p);
                }
            }
            this.overlapSubElementClone = [];
        }
    };
    DashboardLayout.prototype.removeResizeClasses = function (panelElements) {
        for (var i = 0; i < panelElements.length; i++) {
            var element = panelElements[i];
            var resizerElements = element.querySelectorAll('.e-resize');
            for (var i_2 = 0; i_2 < resizerElements.length; i_2++) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(resizerElements[i_2]);
            }
        }
    };
    DashboardLayout.prototype.ensureDrag = function () {
        this.checkDragging(this.dragCollection);
        var dragPanels = this.element.querySelectorAll('.' + drag);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(dragPanels, [drag]);
        this.setClasses(this.panelCollection);
    };
    DashboardLayout.prototype.setClasses = function (panelCollection) {
        for (var i = 0; i < panelCollection.length; i++) {
            var element = panelCollection[i];
            var containerEle = panelCollection[i].querySelector('.e-panel-container');
            if (this.allowDragging) {
                if (this.draggableHandle && element.querySelectorAll(this.draggableHandle)[0]) {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element.querySelectorAll(this.draggableHandle)[0]], [drag]);
                }
                else {
                    Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([element], [drag]);
                }
            }
            if (this.allowResizing &&
                this.mediaQuery ? !(this.checkMediaQuery()) : false) {
                this.setResizingClass(element, containerEle);
            }
        }
    };
    DashboardLayout.prototype.setResizingClass = function (ele, container) {
        this.availableClasses = this.resizableHandles;
        for (var j = 0; j < this.availableClasses.length; j++) {
            var spanEle = this.createElement('span');
            var addClassValue = void 0;
            container.appendChild(spanEle);
            if (this.availableClasses[j] === 'e-east' || this.availableClasses[j] === 'e-west' ||
                this.availableClasses[j] === 'e-north' || this.availableClasses[j] === 'e-south') {
                addClassValue = single;
            }
            else {
                addClassValue = double;
            }
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([spanEle], [addClassValue, this.availableClasses[j], resize, resizeicon]);
        }
    };
    DashboardLayout.prototype.setXYAttributes = function (element, panelModel) {
        var value = {
            value: {
                sizeX: panelModel.sizeX.toString(),
                sizeY: panelModel.sizeY.toString(),
                minSizeX: panelModel.minSizeX.toString(),
                minSizeY: panelModel.minSizeY.toString(),
                maxSizeX: !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(panelModel.maxSizeX) ? panelModel.maxSizeX.toString() : undefined,
                maxSizeY: !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(panelModel.maxSizeY) ? panelModel.maxSizeY.toString() : undefined,
                row: panelModel.row.toString(),
                col: panelModel.col.toString(),
            }
        };
        this.setAttributes(value, element);
    };
    DashboardLayout.prototype.setXYDimensions = function (panelModel) {
        var cellHeight = this.getCellSize()[1];
        var cellWidth = this.getCellSize()[0];
        var widthValue;
        var heigthValue;
        if (panelModel && typeof (cellWidth) === 'number' && typeof (panelModel.sizeX) === 'number' && panelModel.sizeX > 1) {
            widthValue = (panelModel.sizeX * cellWidth) + (panelModel.sizeX - 1) * this.cellSpacing[0];
        }
        else {
            widthValue = cellWidth;
        }
        if (panelModel && typeof (cellHeight) === 'number' && panelModel.sizeY > 1 && typeof (panelModel.sizeY) === 'number') {
            heigthValue = (panelModel.sizeY * cellHeight) + (panelModel.sizeY - 1) * this.cellSpacing[1];
        }
        else {
            heigthValue = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["formatUnit"])(cellHeight);
        }
        return [heigthValue, widthValue];
    };
    DashboardLayout.prototype.getRowColumnDragValues = function (args) {
        var value = [];
        var elementTop = parseFloat(args.element.style.top);
        var elementLeft = parseFloat(args.element.style.left);
        var row = Math.round(elementTop / (this.getCellSize()[1] + this.cellSpacing[1]));
        var col = Math.round(elementLeft / (this.getCellSize()[0] + +this.cellSpacing[0]));
        value = [row, col];
        return value;
    };
    DashboardLayout.prototype.checkForChanges = function (isInteracted, added, removed) {
        var changedPanels = [];
        if (this.removeAllCalled) {
            changedPanels = [];
        }
        else {
            for (var i = 0; i < this.panels.length; i++) {
                if (((!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(added) ? (this.panels[i].id !== added[0].id) : true) &&
                    (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(removed) ? (this.panels[i].id !== removed[0].id) : true)) &&
                    (this.panels[i].row !== this.panelsInitialModel[i].row || this.panels[i].col !== this.panelsInitialModel[i].col)) {
                    changedPanels.push(this.panels[i]);
                }
            }
        }
        if (changedPanels.length > 0 || this.removeAllCalled) {
            var changedArgs = {
                changedPanels: changedPanels, isInteracted: isInteracted,
                addedPanels: !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(added) ? added : [], removedPanels: !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(removed) ? removed : []
            };
            this.trigger('change', changedArgs);
        }
    };
    DashboardLayout.prototype.enableDraggingContent = function (collections) {
        var _this = this;
        for (var i = 0; i < collections.length; i++) {
            var abortArray = ['.e-resize', '.' + dragRestrict];
            var cellElement = collections[i];
            {
                this.dragobj = new _ej2_base__WEBPACK_IMPORTED_MODULE_0__["Draggable"](cellElement, {
                    preventDefault: false,
                    clone: false,
                    dragArea: this.element,
                    isDragScroll: true,
                    handle: this.draggableHandle ? this.draggableHandle : '.e-panel',
                    abort: abortArray,
                    dragStart: this.onDraggingStart.bind(this),
                    dragStop: function (args) {
                        var model = _this.getCellInstance(_this.mainElement.id);
                        if (_this.allowPushing &&
                            _this.collisions(model.row, model.col, model.sizeX, model.sizeY, _this.mainElement).length > 0) {
                            _this.setHolderPosition(args);
                            _this.setPanelPosition(_this.mainElement, model.row, model.col);
                            _this.updatePanelLayout(_this.mainElement, model);
                        }
                        else {
                            _this.setPanelPosition(_this.mainElement, model.row, model.col);
                        }
                        _this.mainElement = null;
                        var item = _this.getPanelBase(args);
                        if (_this.shadowEle) {
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(_this.shadowEle);
                        }
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([_this.element], [preventSelect]);
                        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([args.element], [dragging]);
                        _this.shadowEle = null;
                        args.element.classList.remove('e-dragging');
                        var row = _this.getRowColumnDragValues(args)[0];
                        var col = _this.getRowColumnDragValues(args)[1];
                        var panelModel = _this.getCellInstance(args.element.id);
                        if (_this.allowPushing &&
                            _this.collisions(row, col, panelModel.sizeX, panelModel.sizeY, document.getElementById(item.id)).length === 0) {
                            _this.panelPropertyChange(_this.getCellInstance(args.element.id), { row: row, col: col });
                            _this.oldRowCol[args.element.id].row = row;
                            _this.oldRowCol[args.element.id].col = col;
                            _this.setAttributes({ value: { col: col.toString(), row: row.toString() } }, args.element);
                            _this.sortedPanel();
                        }
                        else {
                            _this.panelPropertyChange(_this.getCellInstance(args.element.id), {
                                row: _this.oldRowCol[args.element.id].row,
                                col: _this.oldRowCol[args.element.id].col
                            });
                            args.element.setAttribute('data-col', _this.getCellInstance(args.element.id).col.toString());
                            args.element.setAttribute('data-row', _this.getCellInstance(args.element.id).row.toString());
                            _this.sortedPanel();
                        }
                        var panelInstance = _this.getCellInstance(args.element.id);
                        _this.setPanelPosition(args.element, panelInstance.row, panelInstance.col);
                        _this.updatePanels();
                        _this.updateServerPanelData();
                        _this.updateCloneArrayObject();
                        _this.checkForChanges(true);
                        _this.dragStopEventArgs = { event: args.event, element: args.element };
                        _this.trigger('dragStop', args);
                        _this.resizeEvents();
                        _this.rows = _this.maxRow(true);
                        _this.setHeightWidth();
                        _this.updateDragArea();
                    },
                    drag: function (args) {
                        _this.draggedEventArgs = {
                            event: args.event,
                            element: args.element,
                            target: Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])((args.target), '.e-panel')
                        };
                        _this.trigger('drag', _this.draggedEventArgs);
                        _this.onDragStart(args);
                    }
                });
                if (this.dragCollection.indexOf(this.dragobj) === -1) {
                    this.dragCollection.push(this.dragobj);
                }
            }
        }
    };
    ;
    DashboardLayout.prototype.updatePanels = function () {
        this.moveItemsUpwards();
        this.updateOldRowColumn();
        this.sortedPanel();
    };
    DashboardLayout.prototype.updateDragArea = function () {
        this.dragCollection.forEach(function (dragobj) {
            // tslint:disable-next-line
            dragobj.setDragArea();
        });
    };
    DashboardLayout.prototype.updateRowsHeight = function (row, sizeY, addRows) {
        if (row + sizeY >= this.rows) {
            this.rows = this.rows + addRows;
            this.setHeightWidth();
        }
    };
    DashboardLayout.prototype.onDraggingStart = function (args) {
        var dragArgs = args;
        this.trigger('dragStart', dragArgs, function (dragArgs) {
            if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
                dragArgs.bindEvents(args.element);
            }
        });
        this.panelsInitialModel = this.cloneModels(this.panels);
        this.mainElement = args.element;
        this.cloneObject = JSON.parse(JSON.stringify(this.cloneObject));
        var eleRowValue = this.startRow = parseInt(args.element.getAttribute('data-row'), 10);
        this.startCol = parseInt(args.element.getAttribute('data-col'), 10);
        var eleSizeY = parseInt(args.element.getAttribute('data-sizeY'), 10);
        this.updateRowsHeight(eleRowValue, eleSizeY, eleSizeY);
        this.updateDragArea();
        this.shadowEle = document.createElement('div');
        this.shadowEle.classList.add('e-holder');
        this.shadowEle.classList.add('e-holder-transition');
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.shadowEle, { 'position': 'absolute' });
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], [preventSelect]);
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([args.element], [dragging]);
        this.element.appendChild(this.shadowEle);
        this.shadowEle = document.querySelector('.e-holder');
        this.shadowEle.style.height = (this.getCellInstance(args.element.id).sizeY * this.cellSize[1]) + 'px';
        this.shadowEle.style.width = (this.getCellInstance(args.element.id).sizeX * this.cellSize[0]) + 'px';
        var panelInstance = this.getCellInstance(args.element.id);
        this.setPanelPosition(this.shadowEle, panelInstance.row, panelInstance.col);
    };
    ;
    // tslint:disable-next-line
    DashboardLayout.prototype.cloneModels = function (source, target) {
        if (target === undefined) {
            target = [];
        }
        for (var i = 0; i < source.length; i++) {
            // tslint:disable-next-line
            if (!target[i]) {
                target[i] = {};
            }
            // tslint:disable-next-line
            for (var k in source[i]) {
                target[i][k] = source[i][k];
            }
        }
        return target;
    };
    ;
    DashboardLayout.prototype.onDragStart = function (args) {
        var endCol;
        var endRow;
        var dragCol;
        var col = dragCol = this.getRowColumnDragValues(args)[1];
        var row = this.getRowColumnDragValues(args)[0];
        if (col < 0 || row < 0) {
            return;
        }
        this.panelPropertyChange(this.getCellInstance(args.element.id), { row: row, col: col });
        var panelModel = this.getCellInstance(args.element.id);
        this.updateRowsHeight(panelModel.row, panelModel.sizeY, 1);
        this.updateDragArea();
        if (this.allowPushing) {
            this.setAttributes({ value: { col: col.toString(), row: row.toString() } }, args.element);
            this.panelPropertyChange(this.getCellInstance(args.element.id), { row: row, col: col });
            endCol = this.oldRowCol[(args.element.id)].col;
            endRow = this.oldRowCol[(args.element.id)].row;
            this.oldRowCol[(args.element.id)] = { row: row, col: col };
            this.updateOldRowColumn();
            if (this.startCol !== endCol || this.startRow !== endRow) {
                this.setHolderPosition(args);
                if (this.startCol !== endCol) {
                    this.startRow = endRow;
                }
                if (this.startRow !== endRow) {
                    this.startCol = endCol;
                }
                if (this.allowPushing) {
                    this.mainElement = args.element;
                    var model = panelModel;
                    this.checkCollision = this.collisions(model.row, model.col, model.sizeX, model.sizeY, args.element);
                    if (panelModel.col >= this.checkColumnValue) {
                        this.checkCollision = [];
                    }
                    this.updatePanelLayout(args.element, panelModel);
                    this.moveItemsUpwards();
                }
            }
        }
        if (this.allowPushing !== false) {
            this.panelPropertyChange(this.getCellInstance(args.element.id), { row: row, col: col });
        }
        if (this.oldRowCol[args.element.id].row !== row || this.oldRowCol[args.element.id].col !== col) {
            this.panelPropertyChange(this.getCellInstance(args.element.id), { row: row, col: col });
            this.setAttributes({ value: { col: col.toString(), row: row.toString() } }, args.element);
        }
        if (this.startCol !== dragCol) {
            this.startCol = endCol;
            this.moveItemsUpwards();
        }
        if (!this.allowPushing) {
            this.setHolderPosition(args);
        }
        this.removeResizeClasses(this.panelCollection);
        this.setClasses(this.panelCollection);
        if (this.allowPushing === false) {
            return;
        }
    };
    DashboardLayout.prototype.getPanelBase = function (args) {
        var item;
        for (var i = 0; i < this.panelCollection.length; i++) {
            if (this.panelCollection[i].id === ((args.element
                && args.element.id) || args)) {
                item = this.panelCollection[i];
            }
        }
        return item;
    };
    DashboardLayout.prototype.getPanel = function (row, column, excludeItems) {
        if (excludeItems && !(excludeItems instanceof Array)) {
            excludeItems = [excludeItems];
        }
        var sizeY = 1;
        while (row > -1) {
            var sizeX = 1;
            var col = column;
            while (col > -1) {
                var items = this.sortedArray[row];
                if (items) {
                    var item = items[col];
                    if (item && (!excludeItems ||
                        excludeItems.indexOf(item) === -1) && parseInt(item.getAttribute('data-sizeX'), 10) >= sizeX
                        && parseInt(item.getAttribute('data-sizeY'), 10) >= sizeY) {
                        return item;
                    }
                }
                ++sizeX;
                --col;
            }
            --row;
            ++sizeY;
        }
        return null;
    };
    ;
    DashboardLayout.prototype.setHolderPosition = function (args) {
        var cellSizeOne;
        var cellSizeZero;
        var sizeY = parseInt(args.element.getAttribute('data-sizeY'), 10);
        var col = parseInt(args.element.getAttribute('data-col'), 10);
        var row = parseInt(args.element.getAttribute('data-row'), 10);
        var sizeX = parseInt(args.element.getAttribute('data-sizeX'), 10);
        var widthValue = this.getCellSize()[0];
        var heightValue = this.getCellSize()[1];
        var top = row === 0 ? 0 : (((row) * (heightValue + this.cellSpacing[1])));
        var left = col === 0 ? 0 : (((col) * (widthValue + this.cellSpacing[0])));
        cellSizeOne = this.getCellSize()[1];
        cellSizeZero = this.getCellSize()[0];
        this.elementRef.top = this.shadowEle.style.top = top + 'px';
        this.elementRef.left = this.shadowEle.style.left = left + 'px';
        this.elementRef.height = this.shadowEle.style.height = ((sizeY * cellSizeOne) + ((sizeY - 1) * this.cellSpacing[1])) + 'px';
        this.elementRef.width = this.shadowEle.style.width = ((sizeX * cellSizeZero) + ((sizeX - 1) * this.cellSpacing[0])) + 'px';
    };
    ;
    DashboardLayout.prototype.getCellInstance = function (idValue) {
        var currentCellInstance;
        for (var i = 0; i < this.panels.length; i++) {
            if (this.panels[i].id === idValue) {
                currentCellInstance = this.panels[i];
            }
        }
        return currentCellInstance;
    };
    /**
     * Allows to add a panel to the Dashboardlayout.
     * @param {panel: [`PanelModel`](./panelModel)} panel -  Defines the panel element.
     * @returns void

     */
    DashboardLayout.prototype.addPanel = function (panel) {
        this.allowServerDataBinding = false;
        this.maxCol();
        if (!panel.minSizeX) {
            panel.minSizeX = 1;
        }
        if (!panel.minSizeY) {
            panel.minSizeY = 1;
        }
        if (!panel.id) {
            panel.id = 'layout_' + this.panelID.toString();
            this.panelID = this.panelID + 1;
        }
        // tslint:disable-next-line
        var panelProp = new Panel(this, 'panels', panel, true);
        this.panels.push(panelProp);
        this.panelsInitialModel = this.cloneModels(this.panels);
        this.setMinMaxValues(panelProp);
        if (this.maxColumnValue < panelProp.col || this.maxColumnValue < (panelProp.col + panelProp.sizeX)) {
            this.panelPropertyChange(panelProp, { col: this.maxColumnValue - panelProp.sizeX });
        }
        var cell = this.renderCell(panelProp, true, null);
        this.oldRowCol[panelProp.id] = { row: panelProp.row, col: panelProp.col };
        this.cloneObject[panelProp.id] = { row: panelProp.row, col: panelProp.col };
        this.updateOldRowColumn();
        this.element.insertAdjacentElement('afterbegin', cell);
        this.addPanelCalled = true;
        if (this.checkMediaQuery()) {
            this.checkMediaQuerySizing();
            if (this.isBlazor) {
                cell.style.removeProperty('visibility');
            }
            this.removeResizeClasses(this.panelCollection);
        }
        else {
            this.mainElement = cell;
            if (!this.checkCollision) {
                this.checkCollision = [];
            }
            this.setPanelPosition(cell, panelProp.row, panelProp.col);
            if (this.isBlazor) {
                cell.style.removeProperty('visibility');
            }
            this.updatePanelLayout(cell, panelProp);
        }
        this.addPanelCalled = false;
        if (this.allowDragging &&
            this.mediaQuery ? !(this.checkMediaQuery()) : false) {
            this.enableDraggingContent([document.getElementById(panelProp.id)]);
        }
        this.setClasses([cell]);
        if (this.allowFloating) {
            this.moveItemsUpwards();
        }
        this.updateOldRowColumn();
        this.sortedPanel();
        this.updateCloneArrayObject();
        if (this.allowResizing) {
            for (var i = 0; i < cell.querySelectorAll('.e-resize').length; i++) {
                var eventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mousedown pointerdown' : 'mousedown';
                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(cell.querySelectorAll('.e-resize')[i], eventName, this.downResizeHandler, this);
                if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name !== 'msie') {
                    _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(cell.querySelectorAll('.e-resize')[i], 'touchstart', this.touchDownResizeHandler, this);
                }
            }
        }
        this.checkForChanges(false, [panelProp]);
        this.allowServerDataBinding = true;
        this.serverDataBind();
    };
    /**
     * Allows to update a panel in the DashboardLayout.
     * @param {panel: [`panelModel`](./panelModel)} panel - Defines the panel element.
     * @returns void

     */
    DashboardLayout.prototype.updatePanel = function (panel) {
        if (!panel.id) {
            return;
        }
        var panelInstance = this.getCellInstance(panel.id);
        if (!panelInstance) {
            return;
        }
        this.maxCol();
        panel.col = (panel.col < 1) ? 0 : ((panel.col > this.columns)) ? this.columns - 1 : panel.col;
        if (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(panel.col)) {
            panel.col = panelInstance.col;
        }
        this.panelPropertyChange(panelInstance, panel);
        this.setMinMaxValues(panelInstance);
        var cell = document.getElementById(panel.id);
        this.mainElement = cell;
        var cssClass = panelInstance.cssClass ? panelInstance.cssClass.split(' ') : null;
        this.panelContent = cell.querySelector('.e-panel-container') ?
            cell.querySelector('.e-panel-container') :
            this.createSubElement(cssClass, cell.id + '_content', panelContainer);
        cell.appendChild(this.panelContent);
        if (panelInstance.header) {
            var headerTemplateElement = cell.querySelector('.e-panel-header') ?
                cell.querySelector('.e-panel-header') : this.createSubElement([], cell.id + 'template', '');
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([headerTemplateElement], [header]);
            headerTemplateElement.innerHTML = '';
            var id = this.element.id + 'HeaderTemplate' + panelInstance.id;
            this.renderTemplate(panelInstance.header, headerTemplateElement, id, true);
            this.panelContent.appendChild(headerTemplateElement);
        }
        else {
            if (cell.querySelector('.e-panel-header')) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(cell.querySelector('.e-panel-header'));
            }
        }
        if (panelInstance.content) {
            var cssClass_2 = panelInstance.cssClass ? panelInstance.cssClass.split(' ') : null;
            this.panelBody = cell.querySelector('.e-panel-content') ? cell.querySelector('.e-panel-content') :
                this.createSubElement(cssClass_2, cell.id + '_body', panelContent);
            this.panelBody.innerHTML = '';
            var headerHeight = this.panelContent.querySelector('.e-panel-header') ?
                window.getComputedStyle(this.panelContent.querySelector('.e-panel-header')).height : '0px';
            var contentHeightValue = 'calc( 100% - ' + headerHeight + ')';
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"])(this.panelBody, { height: contentHeightValue });
            var id = this.element.id + 'ContentTemplate' + panelInstance.id;
            this.renderTemplate(panelInstance.content, this.panelBody, id, true);
            this.panelContent.appendChild(this.panelBody);
        }
        else {
            if (cell.querySelector('.e-panel-content')) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(cell.querySelector('.e-panel-content'));
            }
        }
        this.setXYAttributes(cell, panelInstance);
        this.setHeightAndWidth(cell, panelInstance);
        this.setPanelPosition(cell, panelInstance.row, panelInstance.col);
        this.updatePanelLayout(cell, panelInstance);
        this.mainElement = null;
        this.updatePanels();
        this.updateCloneArrayObject();
    };
    DashboardLayout.prototype.updateCloneArrayObject = function () {
        this.cloneArray = this.sortedArray;
        this.cloneObject = JSON.parse(JSON.stringify(this.oldRowCol));
    };
    /**
     * Returns the panels object of the DashboardLayout.
     * @returns [`PanelModel[]`](./panelModel)
     */
    DashboardLayout.prototype.serialize = function () {
        var cloneModel = this.cloneModels(this.panels);
        var customObject = [];
        for (var i = 0; i < cloneModel.length; i++) {
            customObject.push({
                id: cloneModel[i].id, row: cloneModel[i].row, col: cloneModel[i].col, sizeX: cloneModel[i].sizeX,
                sizeY: cloneModel[i].sizeY, minSizeX: cloneModel[i].minSizeX, minSizeY: cloneModel[i].minSizeY,
                maxSizeX: cloneModel[i].maxSizeX, maxSizeY: cloneModel[i].maxSizeY
            });
        }
        return (customObject);
    };
    /**
     * Removes all the panels from the DashboardLayout.
     */
    DashboardLayout.prototype.removeAll = function () {
        this.removeAllCalled = true;
        for (var i = 0; i < this.panelCollection.length; i++) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.panelCollection[i]);
        }
        this.removeAllPanel();
        this.updateServerPanelData();
        this.rows = 0;
        this.gridPanelCollection = [];
        this.setHeightWidth();
        this.sortedPanel();
        this.sortedArray = [];
        this.overlapElementClone = [];
        this.overlapElement = [];
        this.overlapSubElementClone = [];
        this.panelCollection = [];
        this.oldRowCol = {};
        this.cloneObject = {};
        var clonedPanels = this.cloneModels(this.panels);
        this.setProperties({ panels: [] }, true);
        this.updatePanels();
        this.updateCloneArrayObject();
        this.checkForChanges(false, null, clonedPanels);
        this.removeAllCalled = false;
    };
    /**
     * Removes the panel from the DashboardLayout.
     * @param {id: string} id -  Defines the panel ID.
     * @returns void
     */
    DashboardLayout.prototype.removePanel = function (id) {
        var _this = this;
        this.panelsInitialModel = this.cloneModels(this.panels);
        var removedPanel;
        for (var i = 0; i < this.panelCollection.length; i++) {
            if (this.panelCollection[i].id === id) {
                Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.panelCollection[i]);
                this.panelCollection.splice(i, 1);
            }
            if (this.panels[i].id === id) {
                removedPanel = this.panels[i];
                this.panels.splice(i, 1);
                this.panelsInitialModel.splice(i, 1);
                this.updateOldRowColumn();
                this.sortedPanel();
            }
        }
        this.updatePanels();
        this.updateServerPanelData();
        this.gridPanelCollection.forEach(function (item) {
            if (item.id === id) {
                _this.gridPanelCollection.splice(_this.gridPanelCollection.indexOf(item), 1);
            }
        });
        this.updateCloneArrayObject();
        this.checkForChanges(false, null, [removedPanel]);
    };
    /**
     * Moves the panel in the DashboardLayout.
     * @param {id: string} id - Defines the panel ID.
     * @param {row: number} row - Defines the row of dashboard layout.
     * @param {col: number} col - Defines the column of dashboard layout.
     * @returns void
     */
    DashboardLayout.prototype.movePanel = function (id, row, col) {
        this.movePanelCalled = true;
        this.panelsInitialModel = this.cloneModels(this.panels);
        var panelInstance = this.getCellInstance(id);
        if ((isNaN(row) || row === null) || (isNaN(col) || col === null) || !panelInstance) {
            return;
        }
        if (col < 0) {
            col = 0;
        }
        else if (col > this.columns) {
            col = this.columns - panelInstance.sizeX;
        }
        this.panelPropertyChange(panelInstance, { row: row, col: col });
        var ele = document.getElementById(id);
        this.mainElement = ele;
        this.startRow = parseInt(ele.getAttribute('data-row'), 10);
        this.startCol = parseInt(ele.getAttribute('data-col'), 10);
        this.setAttributes({ value: { col: col.toString(), row: row.toString() } }, ele);
        this.updateOldRowColumn();
        this.setPanelPosition(ele, row, col);
        this.updatePanelLayout(ele, panelInstance);
        this.updateRowHeight();
        this.updatePanels();
        this.updateServerPanelData();
        this.updateCloneArrayObject();
        this.mainElement = null;
        if (this.allowFloating) {
            this.moveItemsUpwards();
        }
        this.movePanelCalled = false;
        this.checkForChanges(false);
    };
    DashboardLayout.prototype.setAttributes = function (value, ele) {
        for (var i = 0; i < Object.keys(value).length; i++) {
            if (Object.keys(value)) {
                if (value[Object.keys(value)[i]].col) {
                    ele.setAttribute('data-col', value[Object.keys(value)[i]].col.toString());
                }
                if (value[Object.keys(value)[i]].row) {
                    ele.setAttribute('data-row', value[Object.keys(value)[i]].row.toString());
                }
                if (value[Object.keys(value)[i]].sizeX) {
                    ele.setAttribute('data-sizeX', value[Object.keys(value)[i]].sizeX.toString());
                }
                if (value[Object.keys(value)[i]].sizeY) {
                    ele.setAttribute('data-sizeY', value[Object.keys(value)[i]].sizeY.toString());
                }
                if (value[Object.keys(value)[i]].minSizeX) {
                    ele.setAttribute('data-minSizeX', value[Object.keys(value)[i]].minSizeX.toString());
                }
                if (value[Object.keys(value)[i]].minSizeY) {
                    ele.setAttribute('data-minSizeY', value[Object.keys(value)[i]].minSizeY.toString());
                }
                if (value[Object.keys(value)[i]].maxSizeX) {
                    ele.setAttribute('data-maxSizeY', value[Object.keys(value)[i]].maxSizeX.toString());
                }
                if (value[Object.keys(value)[i]].maxSizeY) {
                    ele.setAttribute('data-maxSizeY', value[Object.keys(value)[i]].maxSizeY.toString());
                }
            }
        }
    };
    /**
     * Resize the panel in the DashboardLayout.
     * @param {id: string} id - Defines the panel ID.
     * @param {sizeX: number} sizeX - Defines the sizeX of dashboard layout.
     * @param {sizeY: number} sizeY - Defines the sizeY of dashboard layout.
     */
    DashboardLayout.prototype.resizePanel = function (id, sizeX, sizeY) {
        this.panelsInitialModel = this.cloneModels(this.panels);
        var panelInstance = this.getCellInstance(id);
        this.resizeCalled = true;
        var ele = document.getElementById(id);
        var args = { event: null, element: ele, isInteracted: false };
        this.trigger('resizeStart', args);
        this.panelPropertyChange(panelInstance, { sizeX: sizeX, sizeY: sizeY });
        this.setMinMaxValues(panelInstance);
        this.checkMinMaxValues(panelInstance);
        this.mainElement = ele;
        this.setAttributes({ value: { sizeX: panelInstance.sizeX.toString(), sizeY: panelInstance.sizeY.toString() } }, ele);
        this.setHeightAndWidth(ele, panelInstance);
        this.updatePanelLayout(ele, panelInstance);
        this.updatePanels();
        this.updateServerPanelData();
        this.updateRowHeight();
        this.resizeCalled = false;
        this.trigger('resizeStop', args);
        this.checkForChanges(false);
    };
    /**
     * Destroys the DashboardLayout component
     * @returns void
     */
    DashboardLayout.prototype.destroy = function () {
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], ['e-dashboardlayout', 'e-lib', 'e-responsive', 'e-control']);
        this.element.removeAttribute('style');
        for (var i = 0; i < this.dragCollection.length; i++) {
            this.dragCollection[i].destroy();
        }
        this.removeAllPanel();
        _super.prototype.destroy.call(this);
    };
    DashboardLayout.prototype.removeAllPanel = function () {
        while (this.element.firstElementChild) {
            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.element.firstElementChild);
        }
    };
    DashboardLayout.prototype.setEnableRtl = function () {
        this.enableRtl ? Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], 'e-rtl') : Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], 'e-rtl');
    };
    /**
     * Called internally if any of the property value changed.
     * returns void
     * @private
     */
    DashboardLayout.prototype.updateCellSizeAndSpacing = function () {
        this.panelResponsiveUpdate();
        this.setHeightWidth();
        this.getRowColumn();
        for (var i = 0; i < this.element.querySelectorAll('.e-panel').length; i++) {
            var ele = this.element.querySelectorAll('.e-panel')[i];
            var panelModel = this.getCellInstance(ele.id);
            this.setHeightAndWidth(ele, panelModel);
            this.setPanelPosition(ele, panelModel.row, panelModel.col);
        }
    };
    DashboardLayout.prototype.updatePanelsDynamically = function (panels) {
        this.removeAll();
        this.setProperties({ panels: panels }, true);
        this.setOldRowCol();
        if (this.table) {
            this.table.remove();
        }
        this.isBlazor = false;
        this.initialize();
        this.isBlazor = (Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered);
        if (this.showGridLines) {
            this.initGridLines();
        }
    };
    DashboardLayout.prototype.checkForIDValues = function (panels) {
        var _this = this;
        if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(panels) && panels.length > 0) {
            this.panelID = 0;
            panels.forEach(function (panel) {
                if (!panel.id) {
                    _this.panelPropertyChange(panel, { id: 'layout_' + _this.panelID.toString() });
                    _this.panelID = _this.panelID + 1;
                }
            });
        }
        else {
            this.restrictDynamicUpdate = true;
        }
    };
    /**
     * Called internally if any of the property value changed.
     * returns void
     * @private
     */
    DashboardLayout.prototype.onPropertyChanged = function (newProp, oldProp) {
        var _this = this;
        if (newProp.panels && newProp.panels.length > 0) {
            this.checkForIDValues(newProp.panels);
        }
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'enableRtl':
                    this.setProperties({ enableRtl: newProp.enableRtl }, true);
                    this.setEnableRtl();
                    break;
                case 'mediaQuery':
                    this.setProperties({ mediaQuery: newProp.mediaQuery }, true);
                    if (this.checkMediaQuery()) {
                        this.checkMediaQuerySizing();
                    }
                    break;
                case 'allowDragging':
                    this.setProperties({ allowDragging: newProp.allowDragging }, true);
                    this.ensureDrag();
                    break;
                case 'allowResizing':
                    this.setProperties({ allowResizing: newProp.allowResizing }, true);
                    if (this.allowResizing) {
                        this.setClasses(this.panelCollection);
                        this.resizeEvents();
                    }
                    else {
                        var panelElements = this.element.querySelectorAll('.e-panel .e-panel-container .e-resize');
                        for (var i = 0; i < panelElements.length; i++) {
                            var eventName = (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name === 'msie') ? 'mousedown pointerdown' : 'mousedown';
                            var element = panelElements[i];
                            _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(element, eventName, this.downResizeHandler);
                            if (_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Browser"].info.name !== 'msie') {
                                _ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(element, 'touchstart', this.touchDownResizeHandler);
                            }
                        }
                        this.removeResizeClasses(this.panelCollection);
                    }
                    break;
                case 'cellSpacing':
                    this.setProperties({ cellSpacing: newProp.cellSpacing }, true);
                    this.updateCellSizeAndSpacing();
                    this.updateGridLines();
                    break;
                case 'draggableHandle':
                    this.setProperties({ draggableHandle: newProp.draggableHandle }, true);
                    this.ensureDrag();
                    break;
                case 'allowFloating':
                    this.setProperties({ allowFloating: newProp.allowFloating }, true);
                    this.moveItemsUpwards();
                    break;
                case 'showGridLines':
                    if (this.showGridLines) {
                        this.setProperties({ showGridLines: newProp.showGridLines }, true);
                        this.initGridLines();
                    }
                    else {
                        if (this.table) {
                            Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(this.table);
                        }
                    }
                    break;
                case 'allowPushing':
                    this.setProperties({ allowPushing: newProp.allowPushing }, true);
                    break;
                case 'panels':
                    if (!newProp.columns && !this.restrictDynamicUpdate) {
                        this.isRenderComplete = false;
                        this.updatePanelsDynamically(newProp.panels);
                        this.isRenderComplete = true;
                    }
                    else {
                        this.restrictDynamicUpdate = false;
                    }
                    break;
                case 'columns':
                    this.isRenderComplete = false;
                    if (newProp.panels) {
                        this.updatePanelsDynamically(newProp.panels);
                    }
                    this.setProperties({ columns: newProp.columns }, true);
                    this.panelCollection = [];
                    this.maxColumnValue = this.columns;
                    this.calculateCellSize();
                    this.panels.forEach(function (panel) {
                        _this.setMinMaxValues(panel);
                        if (_this.maxColumnValue < panel.col || _this.maxColumnValue < (panel.col + panel.sizeX)) {
                            var colValue = _this.maxColumnValue - panel.sizeX;
                            _this.panelPropertyChange(panel, { col: colValue < 0 ? 0 : colValue });
                            _this.setXYAttributes(document.getElementById(panel.id), panel);
                        }
                        _this.setHeightAndWidth(document.getElementById(panel.id), panel);
                        _this.panelCollection.push(document.getElementById(panel.id));
                        _this.setPanelPosition(document.getElementById(panel.id), panel.row, panel.col);
                        _this.mainElement = document.getElementById(panel.id);
                        _this.updatePanelLayout(document.getElementById(panel.id), panel);
                        _this.mainElement = null;
                    });
                    this.updatePanels();
                    this.updateCloneArrayObject();
                    this.isRenderComplete = true;
                    this.updateGridLines();
                    break;
            }
        }
    };
    /**
     * Gets the properties to be maintained upon browser refresh.
     * @returns string
     * @private
     */
    DashboardLayout.prototype.getPersistData = function () {
        var keyEntity = ['panels'];
        return this.addOnPersist(keyEntity);
    };
    /* istanbul ignore next */
    DashboardLayout.prototype.mergePersistPanelData = function (persistedData) {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data) || (data === '')) || !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(persistedData)) {
            var dataObj = !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(persistedData) ? persistedData : JSON.parse(data);
            var keys = Object.keys(dataObj);
            this.isProtectedOnChange = true;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if ((typeof Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(key, this) === 'object' && !Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(key, this)))) {
                    if (Array.isArray(Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])(key, this)) && key === 'panels') {
                        this.mergePanels(dataObj[key], this[key]);
                    }
                }
            }
            this.isProtectedOnChange = false;
        }
    };
    /* istanbul ignore next */
    DashboardLayout.prototype.mergePanels = function (sortedPanels, panels) {
        var storedColumns = sortedPanels;
        var _loop_6 = function (i) {
            this_4.checkForIDValues(panels);
            var localPanel = panels.filter(function (pan) { return pan.id === storedColumns[i].id; })[0];
            if (!Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(localPanel)) {
                storedColumns[i] = Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["extend"])(localPanel, storedColumns[i], {}, true);
            }
        };
        var this_4 = this;
        for (var i = 0; i < storedColumns.length; i++) {
            _loop_6(i);
        }
    };
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    DashboardLayout.prototype.getModuleName = function () {
        return 'DashboardLayout';
    };
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DashboardLayout.prototype, "allowDragging", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DashboardLayout.prototype, "allowResizing", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DashboardLayout.prototype, "allowPushing", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DashboardLayout.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], DashboardLayout.prototype, "allowFloating", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], DashboardLayout.prototype, "cellAspectRatio", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])([5, 5])
    ], DashboardLayout.prototype, "cellSpacing", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(1)
    ], DashboardLayout.prototype, "columns", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], DashboardLayout.prototype, "showGridLines", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(null)
    ], DashboardLayout.prototype, "draggableHandle", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('en-US')
    ], DashboardLayout.prototype, "locale", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('max-width: 600px')
    ], DashboardLayout.prototype, "mediaQuery", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Collection"])([], Panel)
    ], DashboardLayout.prototype, "panels", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(['e-south-east'])
    ], DashboardLayout.prototype, "resizableHandles", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "change", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "dragStart", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "drag", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "dragStop", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "resizeStart", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "resize", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "resizeStop", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "created", void 0);
    __decorate([
        Object(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], DashboardLayout.prototype, "destroyed", void 0);
    DashboardLayout = __decorate([
        _ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], DashboardLayout);
    return DashboardLayout;
}(_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/index.js":
/*!***********************************************************************************!*\
  !*** ./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/index.js ***!
  \***********************************************************************************/
/*! exports provided: Panel, DashboardLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-layout */ "./ej2-resources/18.2.56-patch/scripts/ej2-layouts/dashboard-layout/dashboard-layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _dashboard_layout__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardLayout", function() { return _dashboard_layout__WEBPACK_IMPORTED_MODULE_0__["DashboardLayout"]; });

/**
 * dashboardlayout modules
 */



/***/ })

/******/ });