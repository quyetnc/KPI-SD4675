$.fn.select2.amd.require(['select2/selection/placeholder'],
  function (Placeholder) {
    Placeholder.prototype.constructor = function (decorated, $element, options) {
      //fix: display "undefined" if placeholder is string of number
      this.placeholder = this.normalizePlaceholder(options.get('placeholder').toString());
      decorated.call(this, $element, options);
    }
  }
);