"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      console.log(descriptor);
      Object.defineProperty(target, descriptor.key, descriptor);
      
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Menu = (function() {
  function Menu() {
    _classCallCheck(this, Menu);
  }

  _createClass(Menu, null, [
    {
      key: "elemClass",
      get: function get() {
        return "menu";
      }
    }
  ]);

  return Menu;
})();
