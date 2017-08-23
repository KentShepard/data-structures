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

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
