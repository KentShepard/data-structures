var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var node = new Node(value);
    var currentNode = this.head;
    this.length++;
    if (!currentNode) {
      this.tail = node;
      this.head = node;
    }
    if (currentNode && this.length === 2) {
      this.tail = node;
      this.head.next = this.tail;
    }
    if (this.length > 2) {
      this[this.length] = this.tail;
      this.tail = node;
      this[this.length].next = this.tail;
    }
  };

  list.removeHead = function() {
    // debugger;
    var headNext = this.head.next;
    var removed = this.head.value;
    var currentNode = this.head;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    this.head = headNext;
    return removed;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {

      }
      currentNode = currentNode.next;
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

