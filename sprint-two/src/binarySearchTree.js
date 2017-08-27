var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, currentNode) {
  //Compare value to current parent
  //If inserted value is less than parent value and left is null then left becomes that value and vice versa
  currentNode = currentNode || this;
  if (value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = new BinarySearchTree(value);
    } else {
      this.insert(value, currentNode.left)
    }
  }
  if (value > currentNode.value) {
    if (currentNode.right === null) {
      currentNode.right = new BinarySearchTree(value);
    } else {
      this.insert(value, currentNode.right)
    }
  }
};

BinarySearchTree.prototype.contains = function(value, currentNode) {
  var valueFound = false;
  currentNode = currentNode || this;
  if (value === currentNode.value) {
    valueFound = true;
  } else if (value < currentNode.value && currentNode.left !== null) {
    valueFound = this.contains(value, currentNode.left)

  }
  if (value > currentNode.value && currentNode.right !== null) {
    valueFound = this.contains(value, currentNode.right)
  }
  return valueFound;
};

BinarySearchTree.prototype.depthFirstLog = function(cb, currentNode) {
  currentNode = currentNode || this;
  if (currentNode === null) {
    return;
  }

  cb(currentNode.value);
  if (currentNode.left !== null) {
    this.depthFirstLog(cb, currentNode.left);
  }
  if (currentNode.right !== null) {
    this.depthFirstLog(cb, currentNode.right);
  }
};
