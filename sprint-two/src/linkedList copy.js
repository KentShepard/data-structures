var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var node  = new Node(value)
    var headNode = this.head;
    var tailNode = this.tail;
    if (!headNode && !tailNode) {
      this.tail = node;
      this.head = node;
    }
    if (headNode) {
      this.tail = node;
      this.head.next = this.tail;
    }
  };

  list.removeHead = function() {
    this.head.value = this.tail;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

