(function (exports) {'use strict';

  //Polyfill global objects
  if (typeof Map != 'undefined') {
    var map = new Map();
    if (typeof Map.prototype.entries == 'undefined'
      || typeof map.entries().next == 'undefined') {
      Map.prototype.entries = mapEntries;
    }
    if (typeof Map.prototype.values == 'undefined'
      || typeof map.values().next == 'undefined') {
      Map.prototype.values = mapValues;
    }
    if (typeof Map.prototype.keys == 'undefined'
      || typeof map.keys().next == 'undefined') {
      Map.prototype.keys = mapKeys;
    }
  }

  if (typeof Set != 'undefined') {
    var set = new Set();
    if (typeof Set.prototype.entries == 'undefined'
      || typeof set.entries().next == 'undefined') {
      Set.prototype.entries = setEntries;
    }
    if (typeof Set.prototype.values == 'undefined'
      || typeof set.values().next == 'undefined') {
      Set.prototype.values = setValues;
    }
    if (typeof Set.prototype.keys == 'undefined'
      || typeof set.keys().next == 'undefined') {
      Set.prototype.keys = setValues;
    }
  }

  function setToArray() {
    var values = new Array(this.size);
    var i = 0;
    this.forEach(function(value) { values[i++] = value; });
    return values
  }

  function setEntries() {
    var values = setToArray.call(this);
    return sharedIterator(values, values);
  }

  function setValues() {
    var values = setToArray.call(this);
    return sharedIterator(values);
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
