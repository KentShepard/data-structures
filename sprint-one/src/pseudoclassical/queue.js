var Queue = function() {
  this.storage = {};

  this.sizeCount = 0;
  this.addCount = 0;
  this.nextInLine = 1;
};

Queue.prototype.enqueue = function(value) {
  this.sizeCount++;
  this.addCount++;
  this.storage[this.addCount] = value;
};

Queue.prototype.dequeue = function() {
  var deleted = this.storage[this.nextInLine];
  delete this.storage[this.nextInLine];
  if (this.sizeCount > 0) {
    this.sizeCount--;
  }
  this.nextInLine++;

  return deleted;
};

Queue.prototype.size = function() {
  return this.sizeCount;
};


