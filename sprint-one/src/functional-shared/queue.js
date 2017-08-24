var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.storage = {
    // 1: 'a',
    // 2: 'b',
    // 3: 'c'
  };
  someInstances.sizeCount = 0;
  someInstances.addCount = 0;
  someInstances.nextInLine = 1;

  _.extend(someInstances, queueMethods);

  return someInstances;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.sizeCount++;
  this.addCount++;
  this.storage[this.addCount] = value;
};

queueMethods.dequeue = function() {
  var deleted = this.storage[this.nextInLine];

  delete this.storage[this.nextInLine];

  if (this.sizeCount > 0) {
    this.sizeCount--;
  }

  this.nextInLine++
  return deleted;
};

queueMethods.size = function() {
  return this.sizeCount;
};


