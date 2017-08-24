var Queue = function() {

  var someInstances = Object.create(queueMethods);
  someInstances.storage = {};

  someInstances.sizeCount = 0;
  someInstances.addCount = 0;
  someInstances.nextInLine = 1;

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

  this.nextInLine++;

  return deleted;
};

queueMethods.size = function() {
  return this.sizeCount;
};


