var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    // 1: 'a',
    // 2: 'b'
  };
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
