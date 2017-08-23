var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    // 1: 'b',
    // 2: 'c',
  };
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var deleted = storage[1];
    console.log(storage[1]);
    for (var key in storage) {
      if (Number(key) + 1 <= size) {
        storage[key] = storage[Number(key) + 1];
      }
    }
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
