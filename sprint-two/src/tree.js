var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, currentNode) {
  var targetFound = false;
  currentNode = currentNode || this;
  if (currentNode.constructor === Array) {
    for (var i = 0; i < currentNode.length; i++) {
      targetFound = this.contains(target, currentNode[i]);
      if (targetFound) {
        return targetFound;
      }
    }
  }

  if (currentNode.constructor === Object) {
    if (currentNode.value === target) {
      targetFound = true;
    } else if (currentNode.children.length > 0) {
      targetFound = this.contains(target, currentNode.children);
    }
  }
  return targetFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
