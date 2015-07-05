(function (exports) {'use strict';

  //Polyfill global objects
  if (typeof Map != 'undefined') {
    if (typeof Map.prototype.entries == 'undefined') {
      Map.prototype.entries = mapEntries;
    }
    if (typeof Map.prototype.values == 'undefined') {
      Map.prototype.values = mapValues;
    }
    if (typeof Map.prototype.keys == 'undefined') {
      Map.prototype.keys = mapKeys;
    }
  }

  function mapToArray() {
    var values = new Array(this.size);
    var keys = new Array(this.size);
    var i = 0;
    this.forEach(function(value, key) { values[i] = value; keys[i++] = key; });
    return { values: values, keys: keys };
  }

  function mapEntries() {
    var entries = mapToArray.call(this);
    return sharedIterator(entries.keys, entries.values);
  }

  function mapValues() {
    var entries = mapToArray.call(this);
    return sharedIterator(entries.values);
  }

  function mapKeys() {
    var entries = mapToArray.call(this);
    return sharedIterator(entries.keys);
  }

  function sharedIterator(array1, array2) {
    var p = 0, done = false;
    return {
      next: function() {
        var v;
        if (!done && p < array1.length) {
          v = array2 ? [array1[p], array2[p]]: array1[p];
          p++;
        } else {
          done = true;
          v = undefined;
        }
        return { done: done, value: v };
      }
    };
  }
})(typeof exports != 'undefined' && typeof global != 'undefined' ? global : window );
