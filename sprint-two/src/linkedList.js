var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var node  = new Node(value)
    var currentNode = this.head;
    this.length++
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
    // while(currentNode.next) {
    //   currentNode = currentNode.next;
    // }

    // currentNode.next = node;

  list.removeHead = function() {
    var removed = this.head.value;
    var currentNode = this.head;

    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    return removed;
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

