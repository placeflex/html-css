(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _dots = _interopRequireDefault(require("./modules/dots"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
(function ($) {
  // When DOM is ready
  $(function () {
    _dots["default"].init();
  });
})(jQuery);

},{"./modules/dots":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This is an examples of simple export.
//
// You can remove or add your own function in this file.
var dotsEffect = function () {
  var createCells = function createCells() {
    var width = 10;
    var height = 10;
    var size = width * height;
    var html = '<div class="entry-cells">';

    for (var i = 0; i < size; i += 1) {
      html += "<div class=\"cell cell-".concat(i, "\"></div>");
    }

    html += '</div>';
    return html;
  };

  var init = function init() {
    var $cnt = $('#home-canvas');
    var cells = createCells();
    $cnt.html(cells);
  };

  return {
    init: init
  };
}();

var _default = dotsEffect;
exports["default"] = _default;

},{}]},{},[1]);
