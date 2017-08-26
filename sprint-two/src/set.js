var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._size = 0;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._size++;
  this._storage[this._size] = item;
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  var storage = this._storage;
  _.each(storage, function(value, key) {
    if (value === item) {
      delete storage[key];
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

