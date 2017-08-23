var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var size = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var deleted = storage[size];
    delete storage[size];
    if (size > 0) {
      size--;
    }
    return deleted;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
