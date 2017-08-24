var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.storage = {
    // 1: 'a',
    // 2: 'b',
    // 3: 'c'
  };
  someInstances.count = 0;
  someInstances.nextInLine = 1;

  _.extend(someInstances, queueMethods);

  return someInstances;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function() {
  var deleted = this.storage[this.nextInLine];

  delete this.storage[this.nextInLine];

  if (this.count > 0) {
    this.count--;
  }

  if (this.nextInLine === 1 && this.count === 0) {
    this.nextInLine = 1
  } else {
    this.nextInLine++;
  }
  return deleted;
};

queueMethods.size = function() {
  return this.count;
};
